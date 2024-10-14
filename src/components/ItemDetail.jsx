import React, { useState } from 'react';
import styles from '../components-styles/itemDetail.module.css';

const ItemDetail = ({ product }) => {

  const [quantity, setQuantity] = useState(1); // estado para la cantidad del carrito

  // funciones para incrementar y disminuir :)
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) { // acá evitamos que la cantidad sea menor q 1
      setQuantity(prev => prev - 1);
    }
  };


  return (
    <div className={styles.DetailContainer}>
      <img className={styles.DetailImage} src={product.imagen} alt={product.nombre} />
      <div className={styles.DetailInfo}>
        <h1>{product.nombre}</h1>
        <p>{product.description}</p>
        <p className={styles.DetailPrice}>${product.precio}</p>


          <div className={styles.QuantityContainer}> 
          <button className={styles.QuantityButton} onClick={handleDecrement}>-</button>
          <span className={styles.Quantity}>{quantity}</span>
          <button className={styles.QuantityButton} onClick={handleIncrement}>+</button>
        </div>

        <div className={styles.DetailButtonContainer}>
          <button className={styles.DetailButton}>Añadir al carrito ({quantity})</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;



