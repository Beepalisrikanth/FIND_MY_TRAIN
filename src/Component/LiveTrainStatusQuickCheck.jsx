import React, { useContext, useEffect, useState } from 'react'
import { TrainContext } from '../context/DataContext'
import {useNavigate, useParams } from 'react-router-dom'

const LiveTrainStatusQuickCheck = () => {

  const {trainNo,setTrainNo,ltData,LTSQ} =useContext(TrainContext)
  // console.log(trainNo,ltData)

  const [tNo, setTNo] = useState()

  const {trainNo: paramtrainNo} = useParams()
  // console.log(paramtrainNo)

  const Navigate = useNavigate()

  const submit = ()=>{

    if(tNo){
      Navigate(`/liveTrain/${trainNo}`);
      setTrainNo(tNo)
    }
    else{
      alert(` ${trainNo.length} ${trainNo} enter a valid train number`)
    
    }
  }
  useEffect(()=>{
    if(paramtrainNo){
      setTrainNo(paramtrainNo)
    }

  },[paramtrainNo])


  return (
    <div className='  bg-white rounded-[20px] shadow-lg bg-balck p-1 grow '>
      <div className='px-5 flex flex-col m-4 justify-center  '>
        <div className='text-[1.5em] text-black font-bold'>
            Live Train Status Quick Check
        </div>
        <form onSubmit={(e)=>{e.preventDefault();LTSQ()}} className='flex my-5 w-[100%] gap-2'>
            <input type='text' placeholder='Train No.' className='grow w-[75%] flex rounded-[10px] px-3 grow border-[2px] h-[3em]' required value={tNo} onChange={(e)=>{setTNo(e.target.value)}}/>
            <button type='submit' className=' text-[1.5em] bg-blue-600 text-white px-[30px] py-2 rounded-[20px]  hover:bg-blue-700 transition' onClick={submit}> Search</button>
        </form>
      </div>
    </div>
  )
}

export default LiveTrainStatusQuickCheck
