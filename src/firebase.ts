import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
