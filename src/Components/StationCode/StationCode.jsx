import React, { useState } from 'react'
const apiUrl = import.meta.env.VITE_TRAIN_API_KEY;
import "./StationCode.css"

const StationCode = () => {

    const [resultData, setResultData] = useState()

    const stations = async () => {
        try {
            const url = "https://api.railradar.org/api/v1/stations/all-kvs"
            const options = {
                headers: {
                    'X-API-Key': apiUrl,
                    'Content-Type': 'application/json'
                }
            }

            const response = await fetch(url, options)
            const result = await response.json()

            console.log(result)
            setResultData(result)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='SC'>
            <button onClick={stations} className='GSBtn'> Get All Stations</button><br></br>
            {/* {JSON.stringify(resultData)} */}
            {resultData?.data && <div className='stationSection'>
                {/* {resultData?.data.map((v,i)=>( */}
                <div className='stationBlock'>
                    <table className='SBT'>
                        <tbody className='SBTB'>
                            <tr className='SBTR' id="SBTR1">
                                <th className='SBTH'>Sl.No</th>
                                <th className='SBTH'>Station Code</th>
                                <th className='SBTH'>Station Name</th>
                            </tr>
                            {resultData?.data.map((v, i) => (
                                <tr key={i} className='SBTR'>
                                    <td className='SBTD'>{i}</td>
                                    <td className='SBTD'>{v[0]}</td>
                                    <td className='SBTD'>{v[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    )
}

export default StationCode
