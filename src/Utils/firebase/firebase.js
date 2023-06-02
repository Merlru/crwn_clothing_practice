import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXn4W_kX5y5cSO4jfvUcIvHSM4t53fFyg",
    authDomain: "crwn-clothing-9c40e.firebaseapp.com",
    projectId: "crwn-clothing-9c40e",
    storageBucket: "crwn-clothing-9c40e.appspot.com",
    messagingSenderId: "201024132815",
    appId: "1:201024132815:web:ece83cae03a5638ce709ba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    console.log(userDocRef);
};