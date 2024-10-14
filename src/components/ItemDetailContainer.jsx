// Este componente se encarga de obtener los datos del producto que seleccionemos, tiene la lógica 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el parámetro de id de la URL
import dataProducts from '../assets/dataProducts.json'; // Importa tu JSON de productos
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productFound = dataProducts.find((prod) => prod.id === parseInt(id)); // Busca el producto por ID
        setProduct(productFound);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
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
