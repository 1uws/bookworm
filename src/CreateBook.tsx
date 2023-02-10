import { Button } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';
import { IBook } from './features/book/bookSlice';
export default function CreateBook({ onSubmitBook }: { onSubmitBook: (book: IBook) => void }) {
	// Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"
	const [titleError, setTitleError] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	function onCancel() {
		onSubmitBook({ name: '', text: '' });
	}
	function onNew() {
		if (!titleError && content) {
			onSubmitBook({ name: title, text: content });
		}
	}
	function onTitleInput(titleInput: string) {
		setTitleError(() => (('' === titleInput) || (null !== titleInput.match(/[.#$[\]]/))));
		console.log(titleInput);
		setTitle(() => titleInput);
	}
	return (
		<div className='editor_container'>
			<Textarea
				placeholder='Book Title'
				value={title}
				onChange={(textarea) => onTitleInput(textarea.target.value)}
				minRows={1}
				size='lg'
				// color='primary'
				error={titleError}
			/>
			<Textarea
				placeholder='Book Content'
				value={content}
				onChange={(textarea) => setContent(textarea.target.value)}
				// minRows={2}
				size='lg'
			// color='neutral'
			/>
			<Button color='success' variant='plain' onClick={onNew}>Submit</Button>
			<Button color='danger' variant='plain' onClick={onCancel}>Cancel</Button>
		</div>
	);
}