// El componente ItemList se encarga de recibir el array de productos (que viene desde ItemListContainer) y mapearlos para renderizar cada producto utilizando el componente Item.

import React from 'react';
import Item from './Item'; 
import styles from '../components-styles/itemList.module.css';

const ItemList = ({ products }) => {
  return (
    <div className={styles['productos-lista']}>
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          imagen={product.imagen}
          alt={product.alt}
          nombre={product.nombre}
          precio={product.precio}
          nombreBoton={product.nombreBoton}
        />
      ))}
    </div>
  );
};

export default ItemList;
