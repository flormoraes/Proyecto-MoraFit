import React, { useContext } from "react";
import carrito from "/carrito.png";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";
import "../components-styles/cart.module.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext); //Desestructuramos el valor que obtenemos del contexto y extraemos el cart, ya que este cart es el array que tiene todos los productos agregados al carrito

  // Calculamos la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce(
    (acumulador, item) => acumulador + item.quantity,
    0
  );

  return (
    <div id="verCarrito">
      <Link className="cart" to="/cart">
        <img src={carrito} alt="Carrito" />
        <span className="numero-carrito">{totalQuantity}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
