import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjqEYA8RUcmoNrG7vijzH2O7IsIjFAxPg",
  authDomain: "multimart-1aed1.firebaseapp.com",
  projectId: "multimart-1aed1",
  storageBucket: "multimart-1aed1.appspot.com",
  messagingSenderId: "210002041667",
  appId: "1:210002041667:web:48c96effb2bf8e155f2df6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
