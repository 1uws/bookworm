import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
	name: 'book',
	initialState: {
		value: [] as Array<string>,
	},
	reducers: {
		bookAdd: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value.push(action.payload);
		},
		bookRemoveAt: (state, action) => {
			state.value.splice(action.payload);
		},
	},
})

// Action creators are generated for each case reducer function
export const { bookAdd, bookRemoveAt, } = bookSlice.actions

export default bookSlice.reducer