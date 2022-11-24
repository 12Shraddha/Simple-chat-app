import React from 'react'
import { BiChevronRightCircle } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
  <div className="NavBar">    
    <div className='App_name'>SIMPLE CHAT</div>
    <div className="NavBar_icon" >
      <div>Login</div>
      <div className='icon'><BiChevronRightCircle/></div>
    </div>
  </div>

  )
}

export default Navbar