import { Button } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import { useEffect, useRef, useState } from 'react';
export default function BookEditor({ book, onBookChanged, onBookDeleted, onRequestNewBook }: { book: string, onBookChanged: (arg0: string) => void, onBookDeleted: () => void, onRequestNewBook: () => void }) {
	const [content, setContent] = useState(book);
	function onSave() {
		onBookChanged(content);
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
				// ref={textareaRef}
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