// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW9jicfghlmgi_3Ad9u4_BvX0u8CXZB6E",
  authDomain: "fir-first-app-7a61b.firebaseapp.com",
  projectId: "fir-first-app-7a61b",
  storageBucket: "fir-first-app-7a61b.appspot.com",
  messagingSenderId: "503436834913",
  appId: "1:503436834913:web:a0a5cd0f41cf1c6fb75220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;