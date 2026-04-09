import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_TRAIN_API_KEY;
import "./SearchByStation.css"

const SearchByStation = () => {

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [outPutResult, setOutPutResult] = useState()

    const station = async () => {
        try {
            const url = `https://api.railradar.org/api/v1/trains/between?from=${from}&to=${to}`
            const options = {
                headers: {
                    'X-API-Key': apiUrl,
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch(url, options);
            const result = await response.json()
            console.log(result.data.totalTrains)
            setOutPutResult(result)
            console.log(result)

        }
        catch (e) {
            console.error(e)
        }
    }

    const convertTime = (minutes) => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours}:${mins}`
    }

    // const halts = (num)=>{
    //     let c = ""
    //     for(let i=0;i<=num;i++){
    //         c = c+`${i+1}🚃_`
    //     }
    //     return c 
    // }

    // useEffect(()=>{SearchByStation()},[])

    return (
        <div id="SearchByStation">
            <p id="SBS">Search by Station</p>
            <form onSubmit={(e) => { e.preventDefault(), station() }}>
                <label className='SBSL'>From
                    <input className='SBSI' type='search' placeholder='Enter Station' value={from} onChange={(e) => { setFrom(e.target.value) }} />
                </label>
                <label className='SBSL'> To
                    <input className='SBSI' type='search' placeholder='Enter Station' value={to} onChange={(e) => { setTo(e.target.value) }} />
                </label>
                <button className='SBSBtn'>Check Train</button>
            </form>

            {outPutResult && <div className='scheduledetails'><h4 className='TodaySchedule'>Today Schedule</h4>
                <table className='trainSBST'>
                    <tbody>

                        <tr className='trSBST'>
                            <td className='tdSBST'>From Station code</td>
                            <td className='tdSBST'>{outPutResult?.data?.fromStationCode}</td>
                        </tr >
                        <tr className='trSBST'>
                            <td className='tdSBST'>To Station code</td>
                            <td className='tdSBST'>{outPutResult?.data?.toStationCode}</td>
                        </tr>
                        <tr className='trSBST'>
                            <td className='tdSBST'>Number of Trains</td>
                            <td className='tdSBST'>{outPutResult?.data?.totalTrains}</td>
                        </tr>
                    </tbody>
                </table>

                {outPutResult?.data?.trains?.map((value, index) => (
                    <p key={index}>
                        <div className='todayTrain'>
                            <div className="TSD1">
                                <h2 className='TSDD'>{value?.trainNumber}</h2>
                                <h2 className='TSDD'>{value?.trainName}</h2>
                                <h2 className='TSDD'>{value?.hindiName}</h2>
                            </div>
                            <div className='TSD2'>
                                <div className='TSD21'>
                                    <div id="TSD21a">
                                        {value?.sourceStationCode} --{value?.distanceKm}KM-- {value?.destinationStationCode} 
                                    </div>
                                    <div id="TSD21b">
                                        {value?.sourceStationName} -- {value?.destinationStationName} {value?.toStationSchedule?.distanceFromSourceKm}
                                    </div>
                                    <div id="TSD21c">
                                        <div className="TSD21c1" id="TSD21ca">{convertTime(value?.toStationSchedule?.arrivalMinutes)}</div>
                                        <div className="TSD21c1" id="TSD21cb">{value?.sourceStationName}</div>
                                        <div className='TSD21c1' id="TSD21cc">{convertTime(value?.toStationSchedule?.departureMinutes)}</div>
                                    </div>

                                </div>
                                <div className='TSD22'>
                                    <div className='TSD221'>
                                        {value?.avgSpeedKmph}
                                        <p id="kmph">KMPH</p>
                                    </div>
                                    <div id="trainType">
                                        {value?.type}
                                    </div>
                                </div>
                            </div>
                            <div className='TSDF'>
                                <div>total journey = {convertTime(value?.travelTimeMinutes)}</div>
                                <div>{value?.zone} </div>
                                <div>total halts {value?.totalHalts} <br /></div>
                            </div>


                            
                            {/* {value?.sourceStationCode} <br/> */}
                            {/* {value?.trainNumber} <br/> */}
                            {/* {value?.trainName} <br/>  */}
                            {/* {value?.hindiName} <br/> */}
                            {/* {value?.sourceStationName} <br/> */}
                            {/* {value?.destinationStationCode} <br/> */}
                            {/* {value?.destinationStationName} <br/> */}
                            {/* {value?.runningDaysBitmap} <br/> */}
                            {/* {value?.runningDays?.days[0]} <br/> */}
                            {/* {value?.runningDays?.allDays?"Yes":"No"} <br/> */}
                            {/* {value?.runningDays?.isStartingToday?"yes":"No"} <br/> */}
                            {/* {value?.returnTrainNumber} <br/> */}
                            {/* {value?.travelTimeMinutes} <br/> */}
                            {/* total halts {value?.totalHalts} <br /> */}
                            {/* {value?.distanceKm} <br/> */}
                            {/* {value?.avgSpeedKmph} <br/> */}
                            {/* {value?.fromStationSchedule?.day} <br/> */}
                            {/* {value?.toStationSchedule?.arrivalMinutes} <br/>                         */}
                            {/* {value?.toStationSchedule?.departureMinutes} <br/>                         */}
                            {/* {value?.toStationSchedule?.day} <br/>                         */}
                            {/* {value?.toStationSchedule?.distanceFromSourceKm} <br/> */}

                        </div>
                    </p>
                ))}
            </div>}

        </div>
    )
}

export default SearchByStation
