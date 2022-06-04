import React from 'react'
import '../style/header.css'
import logo from '../images/logo2.1.png'
import Navbar from './navbar.jsx'

const Header = ({ setOnShow }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <Navbar setOnShow={setOnShow} />
    </header>

  )
}

export default Header
