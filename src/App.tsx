import './App.css';
import { bookAdd } from './features/book/bookSlice'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect, useRef, useState } from 'react';
import { data, StopWords } from './Const';
import Book from './Book';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		data.forEach((book) => dispatch(bookAdd(book)));
	}, [dispatch]);
	return (
		<Book />
	);
}

export default App;