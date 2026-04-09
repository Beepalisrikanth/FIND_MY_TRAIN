import React, { use, useContext, useState } from 'react'
import bg from "../assets/banner.png"
import tajmahal from "../assets/tajmahal.png"

import famousStations from '../dataSet/places'
import "../ComponentStyle/Announcement.css"
import { useNavigate } from 'react-router-dom'
import { TrainContext } from '../context/DataContext'


const ExplorePopularRoutes = () => {
    // console.log(famousPlaces?.[0]?.id)

    const {setStationCode} = useContext(TrainContext)

    const [showAll, setShowAll] = useState(false)
    const viewALL = () => {
        setShowAll(prev => !prev);
    }

    const navigate = useNavigate()
    const goto= (sCode)=>{
        if(sCode){
            setStationCode(sCode)
            navigate(`./currentStation/${sCode}`)
        }
    }
    return (
        <div className=' bg-white rounded-[20px] shadow-lg p-1 w-[100%]'>
            <div className='px-5 flex flex-col m-4 '>
                <div className='flex justify-between'>
                    <div className='text-[1.5em] text-black font-bold'>
                        Explore Popular Routes
                    </div>
                    <div>
                        <button onClick={viewALL}> Show ALL</button>
                    </div>
                </div>
                <div className={`flex w-[100%] `} >
                    <div className={`flex  ${showAll ? "overflow-x-auto " : "flex-wrap"}`}>

                        {famousStations.map((v, i) => (
                            <div onClick={()=>goto(v?.code)} key={i} className='w-[300px] grow space-y-3 shadow m-2 rounded-[10px] p-2 bg-blue-300/50 flex-shrink-0'>
                                <p className='  font-bold text-center p-2 text-[1.2em]'>{v?.name}</p>
                                <img src={v?.image} alt=" place image" className='h-[10em] bg-red-200 w-[100%] rounded-[12px]' />
                                <div className='p-2'>
                                    <p><b>Station code: </b>{v?.code}</p>
                                    <p><b>Location: </b>{v?.location}</p>
                                    <p className='text-[0.8em]'>{v?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplorePopularRoutes
