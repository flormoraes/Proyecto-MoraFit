import React from 'react';
import carrito from '/carrito.png'; 

const CartWidget = () => {
  return (
    <div id="verCarrito"> 
      <img src={carrito} alt="Carrito" />
      <span className="numero-carrito">3</span> {/* harcodeamos el 3 para prototipado ;) */}
    </div>
  );
};

export default CartWidget;
