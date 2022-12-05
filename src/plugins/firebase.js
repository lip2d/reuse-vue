// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4uwKtt-skU5n9UOLDplGUKTanx8tFAQI",
  authDomain: "reuse-7b326.firebaseapp.com",
  projectId: "reuse-7b326",
  storageBucket: "reuse-7b326.appspot.com",
  messagingSenderId: "129800170793",
  appId: "1:129800170793:web:a1cea062afd1d6fbcb9b38"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const profileCollection = db.collection("profile");
const tasksCollection = db.collection("livros");
const favCollection = db.collection("favoritos");


export { db, auth, profileCollection, tasksCollection, favCollection };