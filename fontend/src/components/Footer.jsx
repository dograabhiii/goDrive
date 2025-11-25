import React from 'react'
import './Footer.css'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-card1">
        <h1> <span className='web-name'>go</span> DRIVE</h1>
        <h5>We offer a big range of vehicles for all your driving needs.We hve prefect car to meet your need</h5>
        <h3><IoCallSharp />+91 82193-85631</h3>
        <h3><MdEmail />carrental@gmail.com</h3>
      </div>
      <div className="footer-card2">
        <h1>COMPANY</h1>
        <h4>India</h4>
        <h4>Japan</h4>
        <h4>Canada</h4>
        <h4>Germany</h4>
      </div>
      <div className="footer-card3">
        <h1>WORKING-HOURS</h1>
        <h4>Mon-Fri:9:00AM-9:00PM</h4>
        <h4>Sat:10:00Am-5:00PM</h4>
        <h4>Sun:Closed</h4>
      </div>
      <div className="footer-card4">
        <h1>SUBSCRIPTION</h1>
        <h4>Subscribe your Email address for latest news & update</h4>
        <input type="text" placeholder='Enter email address' /><br />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Footer
