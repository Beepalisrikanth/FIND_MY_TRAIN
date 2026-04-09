import React, { useContext } from 'react'
import { TrainContext } from '../context/DataContext'

const LocationMap = () => {
    const {from,to ,ltData,currentTrainLocation,matchedTrain } = useContext(TrainContext)
    // let lat=17.3850
    // let lng=78.4867
    // console.log(ltData?.data?.route[ltData?.data?.route?.length-1]?.stationName)
    // console.log(ltData?.data?.route[0]?.stationName)
    // console.log(ltData?.data?.route?.length-1)
    return (
        <div className='grow rounded-[20px] bd-red-400 w-[100%]'> 
            <iframe 
            // src={`https://www.google.com/maps?q=${encodeURIComponent(currentTrainLocation)}&output=embed`}
            // src={`https://www.google.com/maps?q=${encodeURIComponent(ltData?.data?.route[0]?.stationName)}to${encodeURIComponent(ltData?.data?.route[(ltData?.data?.route?.length-1)]?.stationName)}&output=embed`}
            src = {`https://maps.google.com/maps?q=${matchedTrain?.current_lat},${matchedTrain?.current_lng}&z=15&output=embed`}
            style={{width:'100%',
                height:"100%",
                border:"0" ,
                allowFullScreen:"" ,
                loading:"lazy",
                referrerPolicy:"no-referrer-when-downgrade"
            }} >
                Real-time map Visualization
            </iframe>  
            
        </div>
    )
}

export default LocationMap
