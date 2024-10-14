import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h2>Oops! Página no encontrada 🤔</h2>

        <Link to="/">
        <h3>Volve al inicio aquí</h3>
      </Link>
        </div>
  )
}

export default NotFound