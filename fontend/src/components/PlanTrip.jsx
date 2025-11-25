import React from 'react'
import './PlanTrip.css'
import {FaCar,FaCarSide} from 'react-icons/fa'
import { MdContactPhone } from "react-icons/md";

function PlanTrip() {
  return (
    <div className='trip-container'>
      <p className='trip-pera1'>Plan your trip now</p>
      <h3 className='trip-pera2'>Quick & easy car rental</h3>
      <div className='trip-card'>
        <div className="trip-card1"> 
      <FaCar className='car'/>
      <h3>Select Car</h3>
      <p>We offer a big range vehicles for all your driving needs.We have the perfect car to meet your needs</p>
        </div> 
        <div className="trip-card2">
        <MdContactPhone className='contact'/>
        <h3>Contact Operator</h3>
        <p>Our knowledgeable and friendly operators are always ready to help with any questions and concerns</p>
        </div>
        <div className="trip-card3">
        <FaCarSide className='drive' />
        <h3>Let's Drive</h3>
        <p>Whether you are hitting the open road, We have got you covered with our wide range of car</p>
        </div>

      </div>
    </div>
  )
}

export default PlanTrip
