import { useAppSelector } from './app/hooks';
import { useEffect, useState } from 'react';
import { StopWords } from './Const';
import BookEditor from './BookEditor';
import BookRender from './BookRender';
export default function Book() {
	const bookList = useAppSelector((state) => state.book.value);
	const [wordStart, setWordStart] = useState(0);
	const [wordEnd, setWordEnd] = useState(0);
	const [book, setBook] = useState('');
	const [isRenderMode, setIsRenderMode] = useState(true);
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
	function switchMode() {
		setIsRenderMode(() => !isRenderMode);
	}
	function onBookChanged(modifiedBook: string) {
		setNewBook();
		setIsRenderMode(() => !isRenderMode);
	}
	function onBookDeleted() {

	}
	function onRequestNewBook() {

	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => { setNewBook(); }, [bookList]);
	return (
		<>{
			isRenderMode ?
				<BookRender
					book={book}
					wordStart={wordStart}
					wordEnd={wordEnd}
					setNewBook={setNewBook}
					switchMode={switchMode}
				/> :
				<BookEditor
					book={book}
					onBookChanged={onBookChanged}
					onBookDeleted={onBookDeleted}
					onRequestNewBook={onRequestNewBook}
				/>
		}</>
	);
}