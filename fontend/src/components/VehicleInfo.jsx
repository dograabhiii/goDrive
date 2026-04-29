import React, { useEffect, useState } from 'react'
import './VehicleInfo.css'
import { useParams, useNavigate } from 'react-router-dom'

function VehicleInfo() {

  const navigate = useNavigate()
  const book = () => {
    navigate("/booking")
  }

  const [vehicle, setVehicle] = useState([0])

  const innova = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[0])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id;
    setVehicle(result[0])
    // console.log(JSON.parse(localStorage.getItem('vehichleinfos'))._id);
  }

  const fortuner = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[1])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[1])
  }

  const getid = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[2])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[2])
  }

  const swift = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[3])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[3])
  }

  const creta = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[4])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[4])
  }

  const audi = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[5])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[5])
  }

  const bmw = async () => {
    let result = await fetch("https://godrive-1-ic3b.onrender.com/info")
    result = await result.json();
    // console.log(result[6])
    // let id = JSON.parse(localStorage.getItem('vehichleinfos'))._id
    setVehicle(result[6])
  }
  return (
    <div className='vehicle-info-container'>
      <div className='veh-desc'>
        <h5>Vehicle Models</h5>
        <h2>Our rental fleet</h2>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>
      <div className="info-cards">
        <div className="info-card1">
          <button className='select-btn' onClick={innova}>Innova Crysta</button>
          <button className='select-btn' onClick={fortuner} >Fortuner</button>
          <button className='select-btn' onClick={getid}>Mahindra Thar</button>
          <button className='select-btn' onClick={swift}>Swift Dzire</button>
          <button className='select-btn' onClick={creta}>Hyundai Creta</button>
          <button className='select-btn' onClick={audi}>Audi A5</button>
          <button className='select-btn' onClick={bmw}>BMW I7</button>
        </div>
        <div className="info-card2">
          <img className='innova-img' src={vehicle.img} alt="" />
        </div>

        <div className="info-card3">

          <h3>{vehicle.price}</h3>

          <table>
            <tr>
              <td>Model</td>
              <td>{vehicle.model}</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>{vehicle.mark}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{vehicle.year}</td>
            </tr>
            <tr>
              <td>Seating Capacity</td>
              <td>{vehicle.seating}</td>
            </tr>
            <tr>
              <td>Ac</td>
              <td>{vehicle.ac}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{vehicle.tranacsmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{vehicle.fuel}</td>
            </tr>
          </table>
          <button className='reserve-btn' onClick={book}>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default VehicleInfo
