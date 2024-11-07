import React, { useState, useContext } from "react";
import styles from "../components-styles/itemDetail.module.css";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";
import "../components-styles/utils.css";

const ItemDetail = ({ product }) => {
  // Obtén la función addCart del contexto del carrito
  const { addCart } = useContext(CartContext);

  const [itemCountVisibility, setItemCountVisibility] = useState(true);

  // función agregar al carrito
  const handleCart = (quantity) => {
    addCart(product, quantity); // la función addCart del contexto, la llamamos
    setItemCountVisibility(false); // oculta el contador luego de agregar
  };

  return (
    <div className={styles.DetailContainer}>
      <img
        className={styles.DetailImage}
        src={product.imagen}
        alt={product.nombre}
      />
      <div className={styles.DetailInfo}>
        <h1>{product.nombre}</h1>
        <p>{product.description}</p>
        <p className={styles.DetailPrice}>${product.precio}</p>
        {/* Muestra el contador si está visible, de lo contrario muestra un botón de ir al carrito */}
        {itemCountVisibility ? (
          <ItemCount addCart={handleCart} />
        ) : (
          <Link className="container" to="/cart">
            <button className="btn">Ir al Carrito</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
