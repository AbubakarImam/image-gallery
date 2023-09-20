// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlt4sactRUFby_2dd_QlvUa916Jgpeda4",
    authDomain: "image-gallery-14143.firebaseapp.com",
    projectId: "image-gallery-14143",
    storageBucket: "image-gallery-14143.appspot.com",
    messagingSenderId: "912826062637",
    appId: "1:912826062637:web:2e41e10d443ab8305ae5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;