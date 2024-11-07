
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../firebase/firebaseConfig'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductFromFirebase = async () => {
      setLoading(true);
      try {
     
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() }); 
        } else {
          setProduct(null); 
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchProductFromFirebase();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>Cargando producto...</h2>
      ) : (
        product ? <ItemDetail product={product} /> : <h2>Producto no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;

