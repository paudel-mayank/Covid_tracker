import React from 'react';
import logo from '../assets/corona.jpg'
import '../assets/navbar.css'
const Navbar = () => {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center navbar">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className='title'>
        <p className="title">Corona Update</p>
      </div>



    </div>
  )
}

export default Navbar