import React, { useContext } from 'react'

import Banner from '../Component/Banner'

import SearchTrainsBetweenStations from '../Component/SearchTrainsBetweenStations'

import LiveTrainStatusQuickCheck from '../Component/LiveTrainStatusQuickCheck'
import PNRStatusQuickCheck from '../Component/PNRStatusQuickCheck'

import CurrentStation from '../Component/CurrentStation'

import ExplorePopularRoutes from '../Component/ExplorePopularRoutes'
import Announcement from '../Component/Announcement'

// import LocationMap from '../Component/LocationMap'
// import LiveTrackingComponent from '../Component/LiveTrackingComponent'
// import RailWayStation from '../Component/RailWayStation'
// import TrainDetails from '../Component/TrainDetails'
// import TrainMap from '../../Component/TrainMap'
// import PNRStatusComponent from '../Component/PNRStatusComponent'
// import { TrainContext } from '../../context/DataContext'


const DashBoard = () => {

    // const {ltData} = useContext(TrainContext)
    return (
        <div className='bg-blue-200' >
            <Banner />
            <div className='w-[100%] flex justify-center '>

                <div className='flex flex-col justify-center items-center mt-[-150px]   w-[95%] '>
                    <SearchTrainsBetweenStations />
                    <div className='w-[100%] flex justify-between my-3 gap-2 flex-wrap'>
                        <LiveTrainStatusQuickCheck />
                        <PNRStatusQuickCheck />
                    </div>
                    <div className='w-[100%] flex justify-between my-3 gap-2'>
                        <CurrentStation />
                    </div>

                    <div className='w-[100%] flex flex-row justify-between my-3 gap-2 flex-wrap'>
                        <ExplorePopularRoutes />
                        <Announcement />
                    </div>
                </div >
            </div>
            {/* 
            <TrainDetails/>
            
            
            
            
            <br/>
            <br/> */}


            {/* <PNRStatusComponent/> */}
        </div>
    )
}

export default DashBoard
