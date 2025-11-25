import React from 'react'
import './ChooseUs.css'
import { FaCarOn } from "react-icons/fa6";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { BiHide } from "react-icons/bi";


function ChooseUs() {
  return (
    <div >
      <div className='image'></div>
      <div className="cards">
        <div className="card1">
            <h4>Why Choose Us</h4>
            <h1>Best Valued deals you will ever find</h1>
            <p>Discover the best deals you will ever find with our unbeatable offers.
                We are dedicated to providing you with the best value for your money,So you can enjoy top-quality services and product without breaking the bank. Our deals are designed to give you the ultimate renting experience,so don't miss out on your chance to save big.  
            </p>
            <button className='find-btn'>Find Details</button>
        </div>
        <div className="card2">
            <div className="row1">
            <FaCarOn className='car-icon'/>
            <h1>Cross Country Drive</h1><br />
            <h4>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</h4>
            </div>
            <div className="row2">
            <HiOutlineCurrencyRupee className='rupee'/>
            <h1>All inclusive pricing</h1>
            <h4>Get everything you need in one convenient,transparent price with our all-inclusive pricing policy.</h4>
            </div>
            <div className="row3">
            <BiHide className='hide'/>
            <h1>No hidden charges</h1>
            <h4>Enjoy peace of mind with our no hidden charges policy.We believe in transparent and honest pricing.</h4>
            </div>

        
        </div>

      </div>
    </div>
  )
}

export default ChooseUs
