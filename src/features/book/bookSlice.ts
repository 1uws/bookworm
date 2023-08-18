import { createSlice } from '@reduxjs/toolkit'
import clone from 'just-clone';
import { db } from '../../firebase';
export interface IBook {
	name: string,
	text: string,
};
export interface IBookShelf {
	[bookName: string]: string,
}
export const bookSlice = createSlice({
	name: 'book',
	initialState: {
		value: {} as IBookShelf,
	},
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		bookLoadData: (state, action) => {
			console.log('bookLoadData', action.payload);
			if (action.payload)
				state.value = clone(action.payload);
			// const bookData = action.payload;
			// state.value = {};
			// Object.keys(bookData).forEach((bookName) => {
			// 	state.value[bookName] = bookData[bookName];
			// });
		},
		bookRequestWrite: (state, action) => {
			const submitedBook: IBook = action.payload;
			state.value[submitedBook.name] = submitedBook.text;
			db.writeToPath(submitedBook.name, submitedBook.text);
		},
		bookRequestDelete: (state, action) => {
			const bookName: string = action.payload;
			delete (state.value)[bookName];
			db.writeToPath(bookName, null);
		},
	},
},
);

// Action creators are generated for each case reducer function
export const { bookLoadData, bookRequestWrite } = bookSlice.actions

export default bookSlice.reducer