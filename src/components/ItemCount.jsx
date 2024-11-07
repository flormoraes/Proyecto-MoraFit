import React, { useState } from 'react';
import styles from '../components-styles/itemDetail.module.css';

// addCart es una función que el componente recibe como propiedad.
const ItemCount = ({ addCart }) => {

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
    <div>
    <div className={styles.QuantityContainer}> 
    <button className={styles.QuantityButton} onClick={handleDecrement}>-</button>
    <span className={styles.Quantity}>{quantity}</span>
    <button className={styles.QuantityButton} onClick={handleIncrement}>+</button>
  </div>

  <div className={styles.DetailButtonContainer}>
    <button 
    className={styles.DetailButton} 
    onClick={() => addCart(quantity)}> Añadir al carrito ({quantity})
    </button>
  </div>
</div>
  )
}

// al botón de Añadir al carrito debo ponerle estilo y que se linkee al componente del carrito, pero eso después :D

export default ItemCount