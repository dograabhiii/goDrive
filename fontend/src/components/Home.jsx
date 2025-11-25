import React from 'react'
import './Home.css'
import Booking from './Booking'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const book=()=>{
    navigate("/booking")
  }

  const learn=()=>{
    navigate("/plantrip")
  }
  return (
    <div className='home-container'>
     <div className="pera">
     <p>Plan your trip now</p>
      <h3>Save <span className='big-txt'>big</span> with our car rental</h3>
      <p className='desc-pera'>Rent the car of your dream. Unbeatable prices,unlimited miles,flexible pick-up options and much more</p>
      <button className='book-btn' onClick={book}>Book Ride</button>
      <button className='learn-btn' onClick={learn}>Learn More</button>
     </div>
     
    </div>
  )
}

export default Home
