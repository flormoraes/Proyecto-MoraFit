// Este componente tiene la lógica de filtrado y carga. Debe recibir los productos del archivo dataProducts.json, filtrarlos, y pasarlos a ItemList.
// Este componente tiene la lógica de filtrado y carga. Debe recibir los productos del archivo dataProducts.json, filtrarlos, y pasarlos a ItemList.
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'; // Importa query y where
import { db } from '../firebase/firebaseConfig'; 
import ItemList from './ItemList';
import Banner from './Banner';
import NotFound from './NotFound';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProductsFromFirebase = async () => {
      setLoading(true);
      try {
        let querySnapshot;
        if (categoryId) {
          // si hay una categoría seleccionada, usa la consulta con filtro
          const q = query(
            collection(db, 'products'),
            where('category', '==', categoryId)
          );
          querySnapshot = await getDocs(q);
        } else {
          // sino hay categoría, trae todos los productos
          querySnapshot = await getDocs(collection(db, 'products'));
        }

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProductsFromFirebase();
  }, [categoryId]);

  return (
    <div>
      <Banner />
      {loading ? (
        <h2>Cargando tus productos favoritos...</h2>
      ) : products.length === 0 ? ( 
        <NotFound />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;

