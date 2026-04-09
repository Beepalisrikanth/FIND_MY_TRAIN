import React, { useContext } from 'react'
import { TrainContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const LiveStation = () => {

    const { scData, setTrainNo } = useContext(TrainContext)
    
    const navigate = useNavigate() 

    const convertTime = (time) => {
        if (!time) return "--"

        const [hour, minute] = time.split(":")
        let hours = Number(hour) + 6
        let minutes = Number(minute) + 30

        if (minutes >= 60) {
            hours += Math.floor(minutes / 60)
            minutes %= 60
        }

        hours %= 24

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
    }

    const goto = (tno) =>{
       if(tno){
        setTrainNo(tno)
        navigate(`/liveTrain/${tno}`)
       }
    }

    return (
        <div className='h-[80vh] p-4'>

            <div className='shadow rounded-[20px] bg-blue-300 p-5'>

                {/* HEADER */}
                <div className='flex justify-between font-bold text-xl mb-4'>
                    <div>
                        Station Name : {scData?.data?.station?.name || "--"}
                    </div>
                    <div>
                        Station Code : {scData?.data?.station?.code || "--"}
                    </div>
                </div>

                {/* TABLE SCROLL CONTAINER */}
                <div className='overflow-x-auto max-h-[500px] overflow-y-auto'>

                    <table className='min-w-full border-collapse bg-white'>

                        <thead className='sticky top-0 bg-red-300'>
                            <tr>
                                <th className='border p-2'>Train No.</th>
                                <th className='border p-2'>Journey</th>
                                <th className='border p-2'>Platform</th>
                                <th className='border p-2'>Type</th>
                                <th className='border p-2'>Running On</th>
                                <th className='border p-2'>Arrival</th>
                                <th className='border p-2'>Departure</th>
                                <th className='border p-2'>Arr Delay</th>
                                <th className='border p-2'>Dep Delay</th>
                            </tr>
                        </thead>

                        <tbody>
                            {scData?.data?.trains?.length > 0 ? (
                                scData.data.trains.map((v, i) => {

                                    const rowColor =
                                        v?.status?.isCancelled
                                            ? "bg-red-400"
                                            : v?.status?.isDiverted
                                                ? "bg-yellow-300"
                                                : "bg-blue-100"

                                    return (
                                        <tr onClick={()=>goto(v?.train?.number)}  key={i} className={`${rowColor} overflow-hidden overflow-x-auto h-[80vh] cursor-pointer  hover:bg-red-100 `} style={{ height: "20px" }}>
                                            <td  className=' bg-red-100 border p-2'>{v?.train?.number || "--"}</td>

                                            <td className='border p-2'>
                                                {v?.train?.sourceStationCode || "--"} →
                                                {v?.train?.destinationStationCode || "--"}
                                            </td>

                                            <td className='border p-2'>{v?.platform || "--"}</td>

                                            <td className='border p-2'>{v?.train?.type || "--"}</td>

                                            <td className='border p-2'>{v?.journeyDate || "--"}</td>

                                            <td className='border p-2'>
                                                {convertTime(v?.schedule?.arrival)}
                                            </td>

                                            <td className='border p-2'>
                                                {convertTime(v?.schedule?.departure)}
                                            </td>

                                            <td className='border p-2'>
                                                {v?.live?.arrivalDelayDisplay || "--"}
                                            </td>

                                            <td className='border p-2'>
                                                {v?.live?.departureDelayDisplay || "--"}
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="9" className='text-center p-5'>
                                        No Train Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LiveStation