import React, { useContext } from 'react'
import { TrainContext } from '../context/DataContext'

const TrainDetails = () => {
    const {sc} = useContext(TrainContext)
    console.log(sc)

  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default TrainDetails
