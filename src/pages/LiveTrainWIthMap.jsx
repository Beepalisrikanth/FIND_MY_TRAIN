import React from 'react'

import LocationMap from '../Component/LocationMap'
import LiveTrackingComponent from '../Component/LiveTrackingComponent'

const LiveTrainWIthMap = () => {
    return (
        <div>
            <div className='flex w-[100vw] bg-red-100 h-[80vh]'>
                <LocationMap />
                <LiveTrackingComponent />
            </div>
        </div>
    )
}

export default LiveTrainWIthMap
