import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Nav.css'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


function NavBar() {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
 

  return (
   <>
   <nav>
    <h3 className='brand'>go<span>Drive</span></h3>
    
    <div>
      <ul id="navbar" className={click ? "#navbar active" : "#navbar"}>
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chooseus">About </Link></li>
        <li><Link to="/footer">Contact</Link></li>
        <li><Link to="booking">Book</Link></li>
        
      </ul>
    </div>
    <div id="mobile">
     <i id='bar' onClick={handleClick}>
        {click?<IoMdClose />:<IoMenu/>}</i>
    </div>
   </nav>
   </>
    
  )
}

export default NavBar
