import { Button } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';
import { IBook } from './features/book/bookSlice';
export default function BookEditor({ book, onBookChanged, onBookDeleted, onRequestNewBook }: { book: IBook, onBookChanged: (arg0: IBook) => void, onBookDeleted: () => void, onRequestNewBook: () => void }) {
	const [title, setTitle] = useState(book.name);
	const [content, setContent] = useState(book.text);
	function onSave() {
		onBookChanged({ name: title, text: content });
	}
	function onDelete() {
		onBookDeleted();
	}
	function onNew() {
		onRequestNewBook();
	}
	return (
		<div className='editor_container'>
			<Textarea
				value={title}
				onChange={(textarea) => setTitle(textarea.target.value)}
				minRows={1}
				size='lg'
				color='neutral'
			/>
			<Textarea
				value={content}
				onChange={(textarea) => setContent(textarea.target.value)}
				// minRows={2}
				size='lg'
			// color='neutral'
			/>
			<Button color='success' variant='plain' onClick={onSave}>Save</Button>
			<Button color='danger' variant='plain' onClick={onDelete}>Delete</Button>
			<Button color='primary' variant='plain' onClick={onNew}>New</Button>
		</div>
	);
}