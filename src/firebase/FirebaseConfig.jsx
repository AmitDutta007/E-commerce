// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA28QrUbBh2H4Unv65rWob6mi-zWI7AP-g",
    authDomain: "ecommerce-75fab.firebaseapp.com",
    projectId: "ecommerce-75fab",
    storageBucket: "ecommerce-75fab.appspot.com",
    messagingSenderId: "239055894758",
    appId: "1:239055894758:web:7a911e5861c37277632327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };