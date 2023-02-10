import './App.css';
// import { bookAdd } from './features/book/bookSlice'
import { useAppDispatch, } from './app/hooks';
import { useEffect, } from 'react';
import Book from './Book';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { login } from './features/user/userSlice';
import { bookLoadData } from './features/book/bookSlice';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		// data.forEach((book) => dispatch(bookAdd(book)));
		// dispatch(bookAdd({
		// 	name: 'C#',
		// 	text: 'The quick fox jumps over a lazy dog.',
		// }))
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				dispatch(login(uid));
				db.setUserId(uid);
				console.log(uid);
				const data = await db.readUserData();
				console.log('data ', data);
				dispatch(bookLoadData(data));
				// ...
			} else {
				// User is signed out
				// ...
			}
		});

	}, [dispatch]);
	return (
		<Book />
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path='/login' element={<Login />} />
		// 		{/* <Route path='/register' element={<Register />} /> */}
		// 		<Route path='*' element={<Book />} />
		// 	</Routes >
		// </BrowserRouter >
	);
}

export default App;