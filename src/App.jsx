import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import "./App.css"

import NavBar from './Component/NavBar'
import DashBoard from './pages/DashBoard'
import LiveTrainWIthMap from './pages/LiveTrainWIthMap'

import LiveStation from "./pages/liveStation"
import Footer from "./Component/Footer"
import PNRStatus from './pages/PNRStatus'




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/liveTrain/:trainNo" element={<LiveTrainWIthMap/>}/>
        <Route path="/currentStation/:stationCode" element={<LiveStation/>}/>
        <Route path="/pnrStatus/:pnr" element={<PNRStatus/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      <Footer />
    </>


    //  <DashBoard/>
  )
}

export default App
