import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCGtO_CZLLPLHE9RnhK612tN_YMa1Ny07M",
    authDomain: "react1-63942.firebaseapp.com",
    projectId: "react1-63942",
    storageBucket: "react1-63942.firebasestorage.app",
    messagingSenderId: "989655480584",
    appId: "1:989655480584:web:85c077f7a5d0a4056d94bd"
    };


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );