import React from 'react'
import "./Section.css"
import SearchByStation from '../SearchByStation/SearchByStation'
import SearchByTrainNumber from '../SearchByTrainNumber/SearchByTrainNumber'
import StationCode from '../StationCode/StationCode'

const Section = () => {
  return (
        <div className='section'>
        <h2 id='CTS'>Check Train Status</h2>
        <SearchByTrainNumber></SearchByTrainNumber>
        <h2 id='CTS'>---------------------------------- OR -----------------------------------</h2>
        <SearchByStation></SearchByStation>

        <StationCode></StationCode>
      
    </div>
  )
}

export default Section
