import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4B2Ha3QN9cuO2SEYjGbtUjgOZeKAsX8o",
  authDomain: "nwitter-reloaded-1f2d4.firebaseapp.com",
  projectId: "nwitter-reloaded-1f2d4",
  storageBucket: "nwitter-reloaded-1f2d4.appspot.com",
  messagingSenderId: "820999891904",
  appId: "1:820999891904:web:42f140fbebb1d8b92a3625",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
