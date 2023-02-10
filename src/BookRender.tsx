import { useEffect, useRef, useState } from "react";
import { IBook } from "./features/book/bookSlice";

export default function BookRender({ book, wordStart, wordEnd, setNewBook, enterEditor }: { book: IBook, wordStart: number, wordEnd: number, setNewBook: () => void, enterEditor: () => void }) {
	const [input, setInput] = useState('');
	const [wrongInputEnd, setWrongInputEnd] = useState('');
	const [hint, setHint] = useState('');
	const focusRef = useRef<HTMLParagraphElement>(null);
	const bookRef = useRef<HTMLDivElement>(null);
	const appRef = useRef<HTMLDivElement>(null);
	useEffect(() => {

		setTimeout(() => {
			if (focusRef.current && appRef.current) {
				if (focusRef.current?.offsetTop > window.innerHeight / 2) {
					// appRef.current.scrollTop = focusRef.current.offsetTop;
					appRef.current.scrollTop = focusRef.current.offsetTop - window.innerHeight / 2;
					console.log('jump');
					// setInput(() => input);
				}
			}
		console.log(appRef.current?.scrollTop, focusRef.current?.offsetTop, window.innerHeight / 2);
	}, 500);
		// else {
		// 	setInput(() => '');
		// }
	});
	if (wordStart === wordEnd) return <></>
	const rightInput = book.text.slice(wordStart, wordEnd);
	function updateInput(newChar: string) {
		if ((' ' === newChar) && (input === rightInput)) {
			setInput(() => '');
			setHint(() => '');
			setWrongInputEnd(() => '');
			setNewBook();
		}
		else if ('Enter' === newChar) {
			enterEditor();
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
	// window.addEventListener('keydown', (onkeydown_keyEvent) => {
	window.onkeydown = (onkeydown_keyEvent) => {
		if ((1 === onkeydown_keyEvent.key.length)) {
			updateInput(onkeydown_keyEvent.key);
		}
		else {
			switch (onkeydown_keyEvent.code) {
				case 'Backspace':
				case 'Enter':
					updateInput(onkeydown_keyEvent.code);
					break;
				default:
					break;
			}
		}
		// });
	}
	return (
		<div>
			<div >
				<p>{book.name}</p>
			</div>
			<div className="app_wrapper" ref={appRef}>
				<div className="app">
					<div className='scroller' ref={bookRef}>
						<p className='context'>{book.text.slice(0, wordStart)}</p>
						<p className='input' ref={focusRef}></p>
						{input === rightInput ?
							<p className='input_right'>{(input || wrongInputEnd) ? input : EmptyInput}</p>
							: <p className='input'>{(input || wrongInputEnd) ? input : EmptyInput}</p>}
						<p className='hint'>{(wrongInputEnd ? hint : '')}</p>
						<p className='input_wrong'>{('' === wrongInputEnd ? '' : wrongInputEnd)}</p>
						<p className='context'>{book.text.slice(wordEnd, book.text.length)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
const EmptyInput = '/^o^!/';