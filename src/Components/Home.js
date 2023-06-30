import React from 'react'
import IndexRight from './Right/IndexRight'
import HumidityComponents from './HUMIDITY'
import WeekInfoCardComponents from './WeekInfoCard'
// import './App.css'
import LeftIndex from './Left/LeftIndex'
function Home() {
  return (
    <div className="homeSection">
      <div className="weather-section">
        <LeftIndex/>
        </div>
        <div className="rightSide">
          <IndexRight/>
          <WeekInfoCardComponents/>
          <HumidityComponents/>
        </div>
     
    </div>
  )
}

export default Home
