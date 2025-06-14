import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7Uxyy2UanImDFGNj8Mnc7IqCBNbFBumQ",
  authDomain: "yellow-rajesh.firebaseapp.com",
  projectId: "yellow-rajesh",
  storageBucket: "yellow-rajesh.firebasestorage.app",
  messagingSenderId: "956164683463",
  appId: "1:956164683463:web:021013644b53a96a81f0e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
