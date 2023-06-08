import { initializeApp } from "firebase/app";
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

// ผู้ให้บริการ (google, facebook, twitter, etc...)
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

// getAuth จะ return object มีข้อมูลเกี่ยวกับ auth
export const auth = getAuth();

// สร้าง function ที่เรียก function signInWithPopup(auth, provider)
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
// สร้าง function ที่เรียก function signInWithRedirect(auth, provider)
// export const signInWithGoogleRedirect = () =>
//     signInWithRedirect(auth, googleProvider);

// firestore database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInfo = {}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch(err) {
            console.log('error creating the user', err.message);
        };
    };

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
};