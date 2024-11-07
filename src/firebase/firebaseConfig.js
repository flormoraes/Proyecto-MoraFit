// firebaseConfig.js

// importamos las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore

//  configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-9IFiHNcu7eEc61wVj04LxmZqJerkUmA",
  authDomain: "mora-fit-3d251.firebaseapp.com",
  projectId: "mora-fit-3d251",
  storageBucket: "mora-fit-3d251.appspot.com",
  messagingSenderId: "161763783737",
  appId: "1:161763783737:web:5231f242f9cecd2b01c9e8"
};

// inicializamos Firebase
const app = initializeApp(firebaseConfig);

// inicializamos Firestore y exportamos
export const db = getFirestore(app);

export default app;

