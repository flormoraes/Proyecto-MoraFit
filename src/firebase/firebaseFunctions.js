// creamos las funciones de firebase acá para dejar más limpio el código del resto de los componentes :)

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id; 
  } catch (error) {
    throw error; 
  }
};
