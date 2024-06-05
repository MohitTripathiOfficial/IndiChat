import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "indisocial-aa8b2.firebaseapp.com",
  projectId: "indisocial-aa8b2",
  storageBucket: "indisocial-aa8b2.appspot.com",
  messagingSenderId: "502910899099",
  appId: "1:502910899099:web:b6fea2ade4b908a4ab473e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()