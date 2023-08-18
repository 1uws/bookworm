import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect, useState } from 'react';
import { StopWords } from './Const';
import BookEditor from './BookEditor';
import BookRender from './BookRender';
import CreateBook from './CreateBook';
import { bookRequestWrite, IBook } from './features/book/bookSlice';
import Login from './Login';
export default function Book() {
	const dispatch = useAppDispatch();
	const bookList = useAppSelector((state) => state.book.value);
	const [wordStart, setWordStart] = useState(0);
	const [wordEnd, setWordEnd] = useState(0);
	const [book, setBook] = useState({ name: '', text: '' } as IBook);
	const [mode, setMode] = useState('show');
	function setNewBook() {
		console.log(bookList);
		if (0 === Object.keys(bookList).length) {
			return;
		}
		const regexp = /\w+/g;
		const newBookName = Object.keys(bookList)[Math.floor(Math.random() * Object.keys(bookList).length)];
		const newBook: IBook = {
			name: newBookName,
			text: bookList[newBookName],
		}
		console.log(newBook, bookList);
		const list = Array.from(
			newBook.text.matchAll(regexp),
			regexWord => ({
				word: regexWord[0].toLowerCase(),
				index: regexWord.index,
			}) as { word: string, index: number }
		).filter(regexWord => !StopWords.includes(regexWord.word));
		const cutWord = list[Math.floor(Math.random() * list.length)];
		if (!cutWord) { // have content but no meaningful words...
			return;
		}
		setWordStart(() => cutWord.index);
		setWordEnd(() => cutWord.index + cutWord.word.length);
		setBook(() => newBook);
	}
	function enterEditor() {
		setMode(() => 'edit');
	}
	function onBookChanged(modifiedBook: IBook) {
		dispatch(bookRequestWrite(modifiedBook));
		onShowNew();
	}
	function onShowNew() {
		setNewBook();
		setMode(() => 'show');
	}
	function onBookDeleted() {
		// dispatch(bookRequestWrite(modifiedBook));
		onShowNew();
	}
	function onRequestNewBook() {
		console.log('CREATE');
		setMode(() => 'create');
	}
	function onSubmitBook(submitedBook: IBook) {
		console.log('SUBMIT');
		dispatch(bookRequestWrite(submitedBook));
		onShowNew();
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => { setNewBook(); }, [bookList]);
	return (
		<>
			<Login />
			{
				'show' === mode ?
					<BookRender
						book={book}
						wordStart={wordStart}
						wordEnd={wordEnd}
						setNewBook={setNewBook}
						enterEditor={enterEditor}
					/> : <></>}
			{'edit' === mode ?
				<BookEditor
					book={book}
					onBookChanged={onBookChanged}
					onBookDeleted={onBookDeleted}
					onRequestNewBook={onRequestNewBook}
					onEditorClosed={onShowNew}
				/> : <></>}
			{'create' === mode ?
				<CreateBook
					onSubmitBook={onSubmitBook}
				/> : <></>}
		</>
	);
}