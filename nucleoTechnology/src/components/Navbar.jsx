import React from 'react'
import {CartWidget} from './CartWidget'

export const Navbar = () => {
  return (
    <header>
      <img src="./src/assets/images/logo.svg" alt="NUCLEO Technology" />
      <a href="#">Inicio</a>
      <a href="#">Catálogo</a>
      <a href="#">Servicios</a>
      <a href="#">Nosotros</a>
      <a href="#">Contacto</a>
      <a href="#">Opiniones</a>
      <CartWidget />
    </header>
  )
}
