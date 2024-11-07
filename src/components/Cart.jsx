import React, { useContext, useState, useEffect, useMemo } from "react";
import { CartContext } from '../contexts/CartProvider';
import { Link } from 'react-router-dom';
import CartItemQuantity from './CartItemQuantity';
import endPurchase from '../services/endPurchase';
import styles from '../components-styles/cart.module.css';
import UserForm from "./UserForm";
import '../components-styles/orderMessage.module.css';
import "../components-styles/utils.css";

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de loading
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Memoizamos el mensaje de la orden
  const orderMessage = useMemo(() => {
    return orderId ? `Compra realizada con éxito. ID de la orden: ${orderId}` : "";
  }, [orderId]);
  
  // Calculamos el total del carrito
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  }, [cart]);

  // Función para manejar la compra
  const handlePurchase = async () => {
    if (!name || !phone || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true); // Muestra el indicador de carga
    try {
      const id = await endPurchase(cart, { name, phone, email });
      setOrderId(id);
      setTimeout(() => clearCart(), 300);
    } catch (error) {
      console.log("Error al realizar la compra: ", error);
    } finally {
      setLoading(false); // Oculta el indicador de carga
    }
  };

  // Si hay un orderId, mostramos solo el mensaje con la orden
  if (orderId) {
    return (
      <div className={styles.CartContainer}>
        <h2>Tu Carrito</h2>
        <p className={styles.OrderMessage}>{orderMessage}</p>
        <Link to="/" className="btn">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Condición si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className={styles.EmptyCart}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className={styles.CartContainer}>
      <h2>Tu Carrito</h2>
      <UserForm 
        name={name} 
        setName={setName} 
        phone={phone} 
        setPhone={setPhone} 
        email={email} 
        setEmail={setEmail} 
      />
      <ul className={styles.CartList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.CartItem}>
            <div className={styles.CartItemInfo}>
              <img src={item.imagen} alt={item.nombre} className={styles.CartItemImage} />
              <div>
                <h3 className={styles.CartItemName}>{item.nombre}</h3>
                <p className={styles.CartItemQuantity}>Cantidad: {item.quantity}</p>
              </div>
            </div>
            <div className={styles.CartItemActions}>
              <CartItemQuantity onRemove={() => removeItem(item.id)} />
              <p className={styles.CartItemPrice}>${item.precio * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.CartTotal}>
        <h3>Total: ${total}</h3>
        <button onClick={handlePurchase} className="btn" disabled={loading}>
          {loading ? "Finalizando pedido..." : "Finalizar compra"}
        </button>
      </div>
    </div>
  );
};

export default Cart;

