// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const db = getDatabase(app);

const analytics = getAnalytics(app);

export function write(path: string, data: any) {
	set(ref(db, path), data);
}