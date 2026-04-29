import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Booking from './components/Booking'
import PlanTrip from './components/PlanTrip'
import VehicleInfo from './components/VehicleInfo'
import Banner from './components/Banner'
import ChooseUs from './components/ChooseUs'
import Reviews from './components/Reviews'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/plantrip' element={<PlanTrip/>}></Route>
        <Route path='/vehicleinfo' element={<VehicleInfo/>}></Route>
        <Route path='/banner' element={<Banner/>}></Route>
        <Route path='/chooseus' element={<ChooseUs/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
      </Routes>

      <PlanTrip/>
      <VehicleInfo/>
      <Booking/>
      <ChooseUs/>
      <Banner/>
      <Reviews/>
      <Footer/>

    </div>
  )
}

export default App
