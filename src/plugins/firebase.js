// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4uwKtt-skU5n9UOLDplGUKTanx8tFAQI",
    authDomain: "reuse-7b326.firebaseapp.com",
    projectId: "reuse-7b326",
    storageBucket: "reuse-7b326.appspot.com",
    messagingSenderId: "129800170793",
    appId: "1:129800170793:web:a1cea062afd1d6fbcb9b38"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const profileCollection = collection(db, "profiles");

export {
    app, auth, db, profileCollection
}