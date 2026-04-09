import React, { useEffect } from 'react'
import { useContext } from 'react';
import { TrainContext } from '../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';

const CurrentStation = () => {

    const { stationCode, setStationCode, CT } = useContext(TrainContext)

    const { stationCode: paramsStationCode } = useParams()

    const navigate = useNavigate()

    const goto = () => {
        navigate(`/currentStation/${stationCode}`)
    }

    useEffect(() => {
        if (paramsStationCode) {
            setStationCode(paramsStationCode)
        }
    }, [paramsStationCode])
    // console.log(scData)
    return (
        <div className=' bg-white rounded-[20px] shadow-lg bg-balck p-1  grow'>
            <div className='px-5 flex flex-col m-4 justify-center  '>
                <div className='text-[1.5em] text-black font-bold'>
                    Upcomming Trains
                </div>
                <form onSubmit={(e) => { e.preventDefault(); CT(),goto() }} className='my-5 flex gap-2'>
                    <input type='text' placeholder='Station Code.' required className='rounded-[10px] px-3 w-[75%] border-[2px] h-[3em] grow' value={stationCode} onChange={(e) => { setStationCode(e.target.value) }} />
                    <button type='submit' className=' text-[1.5em] bg-blue-600 text-white px-[30px] py-2 rounded-[20px] hover:bg-blue-700 transition mb-4' > Search</button>
                </form>
            </div>
        </div>
    )
}

export default CurrentStation
