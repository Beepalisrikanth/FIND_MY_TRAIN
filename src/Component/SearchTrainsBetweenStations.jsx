import React, { useContext } from 'react'
import {TrainContext} from '../context/DataContext'

const SearchTrainsBetweenStations = () => {
    

    const {from,to,setFrom,setTo,ftData,STBS} = useContext(TrainContext)
    // console.log(from,to)
    // console.log(ftData)
 
    return (
        <div className=' bg-white rounded-[20px] shadow-lg p-1 w-[100%] '>
            <form onSubmit={(e)=>{e.preventDefault(); STBS()}} className='px-5 flex flex-col m-4  '>
                <div className='text-[1.5em] text-black font-bold'>Search Trains Between Stations</div>
                <div className='flex justify-between m-4'>
                    <input type='text' placeholder='From' className='rounded-[10px] px-3 w-[49%] border-[2px] border-blue-400 h-[3em]' value={from} onChange={(e)=>setFrom(e.target.value)}  />
                    <input type="text" placeholder='To'  className='rounded-[10px] px-3 w-[49%] border-[2px] border-blue-400 h-[3em]'  value={to} onChange={(e)=>setTo(e.target.value)}/>
                    {/* <input type='date' value={2021-11-11} className='rounded-[10px] px-3 w-[30%] border-[2px] h-[3em]' /> */}
                </div>
                <button type='submit' className='text-[1.5em] bg-blue-600 text-white w-[100%] py-2 rounded-[20px] hover:bg-blue-700 transition mb-4'>Search</button>
            </form>
        </div>
    )
}

export default SearchTrainsBetweenStations
