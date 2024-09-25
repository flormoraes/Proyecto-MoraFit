import React from 'react'
import banner from '../../public/banner.png'



//La prop greeting se tiene que mostrar
const ItemListCointainer = ({greeting}) => {
  return (
    <>
    <h2>{greeting}</h2>
    <img src={banner} alt="banner"/>
    </>
  )
}

export default ItemListCointainer