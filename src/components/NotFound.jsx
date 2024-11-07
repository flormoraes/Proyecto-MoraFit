import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h2>Oops! No hay artículos aún 👀</h2>

        <Link to="/">
        <h3>Volver al inicio</h3>
      </Link>
        </div>
  )
}

export default NotFound