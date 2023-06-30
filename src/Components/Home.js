import React from 'react'
import IndexRight from './Right/IndexRight'
import HumidityComponents from './HUMIDITY'
// import WeekInfoCardComponents from './WeekInfoCard'
// import './App.css'
function Home() {
  return (
    <div className="homeSection">
      <div className="weather-section">
        {/* left  component */}
        <div className="rightSide">
          <IndexRight/>
          {/* <WeekInfoCardComponents/> */}
          <HumidityComponents/>
        </div>
      </div>
    </div>
  )
}

export default Home
