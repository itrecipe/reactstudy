// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // 코드 추가
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqc5CAyJmvCXRJMOWhQt-tesOb4pt3Usc",
  authDomain: "site01-59a4f.firebaseapp.com",
  projectId: "site01-59a4f",
  storageBucket: "site01-59a4f.appspot.com",
  messagingSenderId: "904374406874",
  appId: "1:904374406874:web:403274c974910449a1dfe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 코드 추가
export const db = getFirestore(app)
export const storage = getStorage(app)


