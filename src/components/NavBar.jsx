import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../components-styles/navbar.css'; 
import CartWidget from './CartWidget';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado al hacer click en el botón
  };

  // Si seleccionamos una opción del menú, que se cierre
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="headerOptions">
        <button className="menu-btn" onClick={toggleMenu}> 
          &#9776; 
        </button>
        <NavLink to="/">
          <h1>mora</h1>
        </NavLink>
        <div className="cart-container">
          <CartWidget />
        </div>
      </div>

      {menuOpen && (
        <nav className="menu">
          <ul>
            <li>
              <NavLink onClick={closeMenu} to="/" className="notActive" activeClassName="isActive">Nuevo</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/category/Calzas" className="notActive" activeClassName="isActive">Calzas</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/category/Tops" className="notActive" activeClassName="isActive">Tops</NavLink>
            </li>

            <li>
              <NavLink onClick={closeMenu} to="/category/Remeras" className="notActive" activeClassName="isActive">Remeras</NavLink>
            </li>

            <li>
              <NavLink onClick={closeMenu} to="/category/Conjuntos" className="notActive" activeClassName="isActive">Conjuntos</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/category/Buzos" className="notActive" activeClassName="isActive">Buzos</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/category/Camperas" className="notActive" activeClassName="isActive">Camperas</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/category/Accesorios" className="notActive" activeClassName="isActive">Accesorios</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};


export default NavBar;
