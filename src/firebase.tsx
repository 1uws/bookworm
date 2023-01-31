// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);