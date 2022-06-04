/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import '../style/navbar.css'

const NavBar = ({ setOnShow }) => {
  return (
    <div className="container">
      <span id="Nb" onClick={() => { return setOnShow('home') }}>Quien soy</span>
      <span id="Nb" onClick={() => { return setOnShow('work') }}>Proyectos</span>
      <span id="Nb" onClick={() => { return setOnShow('contact') }}>Contacto</span>
    </div>
  )
}

export default NavBar
