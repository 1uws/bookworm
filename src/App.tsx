import './App.css';
import { bookAdd } from './features/book/bookSlice'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect, useState } from 'react';
const WordRange = 100;
const data = [`C# is the programming language for writing Microsoft .NET applications. C# provides the rapid application development found in Visual Basic with the power of C++. Its syntax is similar to C++ syntax and meets 100% of the requirements of OOPs like the following:
Abstraction
Encapsulation
Polymorphism
Inheritance`];

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
	const [wordList, setWordList] = useState([] as string[]);
	const [redactIndex, setRedactIndex] = useState(-1);
	function setNewBook() {
		if (0 === bookList.length) {
			return;
		}
		const newWordList = bookList[Math.floor(Math.random() * bookList.length)].trim().split(/\s+/);
		setWordList(() => newWordList);
		if (0 === newWordList.length) {
			return;
		}
		setRedactIndex(() => Math.floor(Math.random() * newWordList.length));
	}
	useEffect(() => { console.log('before bookList'); setNewBook(); console.log('bookList'); }, [bookList]);
	return (
		<BookRender
			wordList={wordList}
			redactIndex={redactIndex}
			setNewBook={setNewBook}
		/>
	);
}
function BookRender({ wordList, redactIndex, setNewBook }: { wordList: string[], redactIndex: number, setNewBook: () => void }) {
	const [input, setInput] = useState('');
	const [wrongInputEnd, setWrongInputEnd] = useState('');
	if (!wordList) return <></>
	const rightInput = wordList[redactIndex] + ' '
	if ((0 !== wordList.length) && (input === rightInput)) {
		setInput(() => '');
		setNewBook();
	}
	function updateInput(newChar: string) {
		if ('Backspace' === newChar) {
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
				}
				else {
					setWrongInputEnd(() => rightInput[newInput.length - 1]);
				}
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
			{
				wordList.length ? (<div>
					<p className='context'>{wordList.slice(Math.max(0, redactIndex - WordRange), redactIndex).join(' ')} </p>
					<p className='input'>{(input || wrongInputEnd) ? input : '...'}</p>
					<p className='input_wrong'>{('' === wrongInputEnd ? '' : wrongInputEnd)}</p>
					<p className='context'> {wordList.slice(redactIndex + 1, Math.min(redactIndex + WordRange, wordList.length)).join(' ')}</p>
				</div>) : (<></>)
			}
		</div>
	);
}
export default App;
