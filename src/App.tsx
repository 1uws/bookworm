import './App.css';
import { bookAdd } from './features/book/bookSlice'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect, useState } from 'react';
import { data, StopWords } from './Const';
const WordRange = 400;

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		data.forEach((book) => dispatch(bookAdd(book)));
	}, []);
	return (
		<Book />
	);
}
function Book() {
	const bookList = useAppSelector((state) => state.book.value);
	const [wordStart, setWordStart] = useState(0);
	const [wordEnd, setWordEnd] = useState(0);
	const [book, setBook] = useState('');
	function setNewBook() {
		if (0 === bookList.length) {
			return;
		}
		const regexp = /\w+/g;
		const newBook = bookList[Math.floor(Math.random() * bookList.length)];
		const list = Array.from(
			newBook.matchAll(regexp),
			regexWord => ({
				word: regexWord[0].toLowerCase(),
				index: regexWord.index,
			}) as { word: string, index: number }
		).filter(regexWord => !StopWords.includes(regexWord.word));
		const cutWord = list[Math.floor(Math.random() * list.length)];
		setWordStart(() => cutWord.index);
		setWordEnd(() => cutWord.index + cutWord.word.length);
		setBook(() => newBook);
	}
	useEffect(() => { setNewBook(); }, [bookList]);
	return (
		<BookRender
			book={book}
			wordStart={wordStart}
			wordEnd={wordEnd}
			setNewBook={setNewBook}
		/>
	);
}
function BookRender({ book, wordStart, wordEnd, setNewBook }: { book: string, wordStart: number, wordEnd: number, setNewBook: () => void }) {
	const [input, setInput] = useState('');
	const [wrongInputEnd, setWrongInputEnd] = useState('');
	const [hint, setHint] = useState('');
	if (wordStart === wordEnd) return <></>
	const rightInput = book.slice(wordStart, wordEnd);
	function updateInput(newChar: string) {
		if ((' ' === newChar) && (input === rightInput)) {
			setInput(() => '');
			setHint(() => '');
			setWrongInputEnd(() => '');
			setNewBook();
		}
		else if ('Backspace' === newChar) {
			if (0 !== wrongInputEnd.length) {
				setWrongInputEnd(() => wrongInputEnd.substring(0, wrongInputEnd.length - 1));
			}
			else if (0 !== input.length) {
				setInput(() => input.substring(0, input.length - 1));
			}
		}
		else {
			if ('' === wrongInputEnd) {
				const newInput = input + newChar;
				if (newInput === rightInput.substring(0, newInput.length)) {
					setInput(() => newInput);
					setHint(() => '');
				}
				else {
					setHint(() => rightInput[newInput.length - 1]);
					setWrongInputEnd(() => wrongInputEnd + newChar);
				}
			}
			else {
				setWrongInputEnd(() => wrongInputEnd + newChar);
			}
		}
	}
	window.onkeydown = (onkeydown_keyEvent) => {
		if (('Backspace' === onkeydown_keyEvent.key) || (1 === onkeydown_keyEvent.key.length)) {
			updateInput(onkeydown_keyEvent.key);
		}
	};
	return (
		<div className="App">
			<p className='context'>{book.slice(Math.max(0, wordStart - WordRange), wordStart)}</p>
			{input === rightInput ?
				<p className='input_right'>{(input || wrongInputEnd) ? input : '...'}</p>
				: <p className='input'>{(input || wrongInputEnd) ? input : '...'}</p>}
			<p className='hint'>{(wrongInputEnd ? hint : '')}</p>
			<p className='input_wrong'>{('' === wrongInputEnd ? '' : wrongInputEnd)}</p>
			<p className='context'>{book.slice(wordEnd, Math.min(wordEnd + WordRange, book.length))}</p>
		</div>
	);
}
export default App;
