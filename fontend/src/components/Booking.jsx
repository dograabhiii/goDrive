import React from 'react'
import './Booking.css'
import { Form } from 'react-router-dom'
// import { Form } from 'react-router-dom'

function Booking() {
    const book=()=>{
        alert("Booking Successfully")
    }
    return (
        <div className='booking-container'>
            <div className="book">
                <h1 className='book-title'>Book your car</h1>
                <form>
                    <div className="form-input">
                    <div>
                        < label for="cars">Type of car:</label>
                    <select id="cars" name="cars">
                        <option value="volvo">Hatchback</option>
                        <option value="saab">Sedan</option>
                        <option value="fiat">SUV</option>
                    </select>
                    </div>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div>
                        < label for="cars">Pick-up Date:</label>
                    <input type="date" /><br />
                    </div>
                    <div>
                    < label for="cars">Number of Days:</label>
                    <input type="number" />
                    </div>
                    {/* &nbsp;&nbsp;&nbsp; */}
                    <div>
                    < label for="cars">Choose your car:</label>
                    <select id="cars" name="cars">
                        <option value="volvo">Innova</option>
                        <option value="saab">Fortuner</option>
                        <option value="saab">Thar</option>
                        <option value="fiat">Swift</option>
                        <option value="fiat">Creta</option>
                        <option value="saab">Audi</option>
                        <option value="saab" >BMW</option>
                    </select>
                    </div>
                    <br />
                    </div>
                    <button className='search-btn' onClick={book}>Book</button>
                </form>
            </div>

        </div>
    )
}

export default Booking
