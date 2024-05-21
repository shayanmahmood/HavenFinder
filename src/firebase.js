// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClKVWMxqikbFnUZ8Kz-czSjDmQzZ93frU",
    authDomain: "heavenfinder-fe713.firebaseapp.com",
    projectId: "heavenfinder-fe713",
    storageBucket: "heavenfinder-fe713.appspot.com",
    messagingSenderId: "26818431451",
    appId: "1:26818431451:web:0df3d48112350bbf1a7ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }