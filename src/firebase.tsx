// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, set } from "firebase/database";
import { IBookShelf } from "./features/book/bookSlice";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyAlm-soJywSoYZ7RnheOeSqF0vgsHD9X6g",
	authDomain: "book4dinner.firebaseapp.com",
	projectId: "book4dinner",
	storageBucket: "book4dinner.appspot.com",
	messagingSenderId: "416926406309",
	appId: "1:416926406309:web:32bdeef1e301681d775f4c",
	measurementId: "G-9EQZYNTPFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);

class dbControl {
	UserId: string;
	constructor() {
		this.UserId = '';
	}
	setUserId(userId: string) {
		this.UserId = userId;
	}
	writeToPath(path: string, data: any) {
		if (
			('' === this.UserId)
		) { return; }
		console.log('write to path ', `${this.UserId}/${path}`);
		set(ref(database, `${this.UserId}/${path}`), data);
	}
	async readUserData() {
		console.log('read user data here');
		if (
			('' === this.UserId)
		) {
			return {
				'Sample': 'The quick fox jumps over a lazy dog.',
			};
		}
		const snapshot = await get(ref(database, `${this.UserId}`))

		let bookData: IBookShelf = snapshot.val();
		console.log('read user data', snapshot, bookData);
		if ((!snapshot.exists()) || (!bookData) || (0 === Object.keys(bookData).length)) {
			bookData = {
				'Sample': 'The quick fox jumps over a lazy dog.',
			}
			console.log('read user data alt',);
		}
		console.log('read user data return ', snapshot, bookData);
		return bookData;
	}
}

export const db = new dbControl();