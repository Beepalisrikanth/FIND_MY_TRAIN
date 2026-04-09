import React, { useContext, useEffect, useState } from 'react'
import { TrainContext } from '../context/DataContext'
import { useNavigate, useParams } from 'react-router-dom'

const PNRStatusQuickCheck = () => {
  const { pnrNO, setPNRNo, PNRTRACK } = useContext(TrainContext)
  const [pNo,setPNo] = useState("")
  const navigate = useNavigate()
  const { pnr: ParamsPNR } = useParams()
  const goto = () => {
    if (!pNo && pNo.length !== 10) {
      alert("enter a valid PNR number")
      return
    }
    setPNRNo(pNo)
    PNRTRACK()
    navigate(`/pnrStatus/${pNo}`)
  }
  useEffect(() => {
    if (ParamsPNR) {
      setPNRNo(ParamsPNR)
    }
  }, [ParamsPNR])

  console.log()

  return (
    <div className=' bg-white rounded-[20px] shadow-lg bg-balck p-1 grow'>
      <div className='px-5 flex flex-col m-4 items-cemter '>
        <div className='text-[1.5em] text-black font-bold'>
          PNR Status Quick Check
        </div>
        <form onSubmit={(e) => { e.preventDefault(); goto() }} className='my-3 flex gap-2'>
          <input required type='text' value={pNo} onChange={(e) => { setPNo(e.target.value) }} placeholder='PNR No.' className='grow rounded-[10px] px-3 w-[75%] border-[2px] h-[3em]' />
          <button className=' text-[1.5em] bg-blue-600 text-white px-[30px] py-2 rounded-[20px] hover:bg-blue-700 transition mb-4'> Search</button>
        </form>
      </div>
    </div>
  )
}

export default PNRStatusQuickCheck
