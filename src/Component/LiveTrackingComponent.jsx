import React, { useContext } from 'react'
import { TrainContext } from '../context/DataContext'
// import { jsxs } from 'react/jsx-runtime'

const LiveTrackingComponent = () => {

    const {  ltData, convertMinutesToTime, currentMinutes, matchedTrain } = useContext(TrainContext)
    // console.log(currentMinutes)
    // console.log(matchedTrain)
    console.log(ltData)
    // curr_distance: 45.4
    // current_day: 1
    // current_lat: 17.47487
    // current_lng:78.28501
    // current_station:"TLPR"
    // current_station_name:"Telapur Jn"
    // departure_minutes: 935
    // mins_since_dep: 39
    // next_arrival_minutes:939
    // next_distance:49
    // next_lat:17.4831
    // next_lng:78.3169
    // next_station:"LPI"
    // next_station_name:"Lingampalli"
    // train_name:"Palnadu SF Express"
    // train_number:"12748"
    // type:"Superfast Express"

    return (
        <div className=' absolute flex justify-end items-center h-[80%] w-[100%]'>

            <div className='bg-blue-100 border-2 absolute border-black right-[5em]   w-[20em]  p-3 rounded-[15px]   shadow relative '>
                <div className='flex justify-around font-bold border-b-2 border-black'>
                    <div> Train 
                        {/* {matchedTrain?.train_number ? matchedTrain.train_number : "--"} */}
                         {ltData?.data?.train?.number ? ltData?.data?.train?.number : "--"}
                        </div>
                    <div>{matchedTrain?.train_name}</div>
                </div>

                <div className='flex justify-around'>
                    <div className='shadow p-2 grow flex flex-col justify-center items-center m-2 bg-white rounded-[10px]'>
                        <div> current Station </div>
                        <div>{matchedTrain?.current_station_name ? matchedTrain?.current_station_name : "--"}</div>
                    </div>
                    <div className='shadow p-2 grow flex flex-col justify-center items-center m-2 bg-white rounded-[10px]'>
                        <div>Next Station </div>
                        <div className='flex flex-wrap justify-center text-center'>
                            {matchedTrain?.next_station_name ? matchedTrain?.next_station_name : "--"}
                        </div>
                    </div>
                </div>

                <div className='border-b-2 border-black pt-4 '>
                    <div className='font-bold'> Current Delay Status </div>
                    <div className='flex justify-around '>
                        <div className='flex justify-center items-center flex-col border-r-2 border-black w-[50%] flex justify-center'>
                            Delay Status
                            <div className='flex justify-center items-center bg-red-400 w-[50px] h-[50px]  rounded-[40px]'>
                                <div className='flex justify-center items-center bg-white w-[40px] h-[40px] items:center rounded-[40px]'>
                                    1:05 
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-center items-center mb-2 flex-col w-[100%]'>
                            Speed
                            <div className='flex justify-center items-center bg-red-400 w-[50px] h-[50px]  rounded-[40px]'>
                                <div className='flex justify-center items-center bg-white w-[40px] h-[40px] items:center rounded-[40px]'>
                                    40
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='overflow-hidden h-[15em] overflow-y-auto pt-4'>
                    <div className='flex justify-between px-4 py-2 shadow bg-blue-300 rounded-[10px] sticky'> <div>up comming Station </div><div>arrival time</div></div>
                    {ltData?.data?.route && ltData?.data?.route?.map((v, i) => (
                        currentMinutes < v.arrivalMinutes && (
                            <div key={i} >
                                <div className='flex justify-between px-4 py-2 shadow my-2 rounded-[10px] bg-white'>
                                    <div>{v.stationName}</div>
                                    <div>{v.arrivalMinutes ? convertMinutesToTime(v.arrivalMinutes) : "--"}</div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LiveTrackingComponent
