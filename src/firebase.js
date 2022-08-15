import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV6eH93AztEg2SmM6BVQSu-yOmWnj9y-0",
  authDomain: "social-app-f351f.firebaseapp.com",
  databaseURL: "https://social-app-f351f-default-rtdb.firebaseio.com",
  projectId: "social-app-f351f",
  storageBucket: "social-app-f351f.appspot.com",
  messagingSenderId: "180077526266",
  appId: "1:180077526266:web:13048df5f48ff67dd91d43",
  measurementId: "G-VPBJPN0TQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();