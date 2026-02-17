// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuKXKuVliAStT3K4VBmFRWdkdIWs9e6o",
  authDomain: "pet-care-services-f54fd.firebaseapp.com",
  projectId: "pet-care-services-f54fd",
  storageBucket: "pet-care-services-f54fd.firebasestorage.app",
  messagingSenderId: "549612037521",
  appId: "1:549612037521:web:00282afde36c57abdee630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;