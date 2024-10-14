// El componente Item es de presentación, recibe las propiedades de cada producto (imagen, nombre, precio, etc.) y las mostrará en el formato diseñado

import React from 'react';
import styles from '../components-styles/item.module.css'
import { Link } from 'react-router-dom';

const Item = ({ id, imagen, alt, nombre, precio, nombreBoton }) => {
  
  return (
    <div className={styles['container']}>
      <img src={imagen} alt={alt} />
      <h2>{nombre}</h2>
      <span className={styles.precio}>${precio}</span>
      <Link to={`/item/${id}`}>
      <button className= {styles.DetailButton}>Ver más</button>
      </Link>
    
    </div>
  );
};

export default Item;
