import React, { useState } from 'react';
import '../components-styles/navbar.css'; 
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
     <div className="headerOptions">
        <button className="menu-btn">  &#9776; {/* Símbolo del menú hamburguesa */} </button>
        <h1>mora</h1>
        <CartWidget/>
        
      </div>

      // Menú hamburguesa estático
      <nav className="menu">
        <ul>
          <li><a href="#">Nuevo</a></li>
          <li><a href="#">Calzas</a></li>
          <li><a href="#">Tops</a></li>
          <li><a href="#">Conjuntos</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Camperas</a></li>
          <li><a href="#">Accesorios</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
