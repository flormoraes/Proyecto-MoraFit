
// Este componente se encarga de eliminar un producto del carrito
import React from 'react';
import styles from '../components-styles/cartItemQuantity.module.css';
import "../components-styles/utils.css";

const CartItemQuantity = ({ quantity, onRemove }) => {
  return (
    <div className={styles.QuantityContainer}>
      <span className={styles.Quantity}>{quantity}</span> 
      <button className="btn" onClick={onRemove}> X
      </button>
    </div>
  );
};

export default CartItemQuantity;