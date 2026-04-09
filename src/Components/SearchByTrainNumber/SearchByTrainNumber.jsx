import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_TRAIN_API_KEY;
import "./SearchByTrainNumber.css"
const SearchByTrainNumber = () => {
  const [railupdate, setRailupdate] = useState()
  const [searchTrainNumber, setSearchTrainNumber] = useState("")

  const train = async () => {
    try {
      const url = `https://api.railradar.org/api/v1/search/trains?query=${searchTrainNumber}`;
      const options = {
        headers: {
          'X-API-Key': apiUrl,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setRailupdate(result)
    }
    catch (e) {
      console.error(e)
    }
  }


  const trainDay = (days) => {
  const daysArray = { Sun:false, Mon:false, Tue:false, Wed:false, Thu:false, Fri:false, Sat:false }

  if (!days) return daysArray

  days.forEach((day) => {
    if (daysArray.hasOwnProperty(day)) {
      daysArray[day] = true
    }
  })
  return daysArray
}

  // console.log(trainDay(railupdate?.data[0]?.runningDays?.days));

  return (
    <div className='findTrainName'>
      <p id="sbt">Search by Train</p>
      <form onSubmit={(e) => { e.preventDefault(), train() }}>
        <label id='searchLabel'>Train Number/Name:
          <input type="search" placeholder='Select Train No.' className='searchTrainNumber' value={searchTrainNumber} onChange={(e) => { setSearchTrainNumber(e.target.value) }} />
        </label>
        <button id='findTrainNameBtn' type='submit'>check Train</button>
      </form>
      {railupdate?.data?.length > 0 ? (
        <ul>
          {railupdate.data.map((item, index) => (
            <div key={index}>
              <table id='SBTDT'>
                <tbody id='SBTDTB'>
                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train Number</td>
                    <td className="SBTDTD">{item?.trainNumber}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train Name</td>
                    <td className="SBTDTD">{item?.trainName}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train Type</td>
                    <td className="SBTDTD">{item?.type}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train Name in Hindi</td>
                    <td className="SBTDTD">{item?.hindiName}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train Starts From</td>
                    <td className="SBTDTD">{item?.sourceStationCode}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Train End At</td>
                    <td className="SBTDTD">{item?.destinationStationCode}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Return Train Number</td>
                    <td className="SBTDTD">{item?.returnTrainNumber}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Number of Stops</td>
                    <td className="SBTDTD">{item?.totalHalts}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Total Covered Distance</td>
                    <td className="SBTDTD">{item?.distanceKm}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Avg Speed KMPH</td>
                    <td className="SBTDTD">{item?.avgSpeedKmph}</td>
                  </tr>

                  <tr className="SBTDTR">
                    <td className="SBTDTD">Running Days</td>
                    <td className="SBTDTD" id="SBTDTDa">{Object.entries(trainDay(item?.runningDays?.days)).map(([d, v], i) => (
                      <div key={i}>
                        {v ? <div className="dayyes">{d}</div> : <div className="dayNo">{d}</div>}
                      </div>
                    ))}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          ))}
        </ul>
      ) : "Enter a valid train number"}

      {/* <pre>{JSON.stringify(railupdate, null, 2)}</pre> */}
    </div>
  )
}

export default SearchByTrainNumber
