// Este componente tiene la lógica de filtrado y carga. Debe recibir los productos del archivo dataProducts.json, filtrarlos, y pasarlos a ItemList.

import React, { useEffect, useState } from 'react';
import dataProducts from '../assets/dataProducts.json';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataProducts);
      }, 2000); // Simulación de tiempo de respuesta
    });

    const getProducts = async () => {
      setLoading(true);
      try {
        const products = await promise1;
        let productsFiltered;
        if (categoryId) {
          productsFiltered = products.filter(
            (product) => product.category === categoryId
          );
        } else {
          productsFiltered = products;
        }
        setProducts(productsFiltered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <h2>Cargando tus productos favoritos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
