import React, { useContext, useEffect } from 'react'
import { TrainContext } from '../context/DataContext'
import { useNavigate, useParams } from 'react-router-dom'
import LiveTrackingComponent from './LiveTrackingComponent'

const PNRStatusComponent = () => {
    const { pnrData, pnrNO, setTrainNo } = useContext(TrainContext)
    console.log(pnrData)

    console.log(`1 ${pnrData?.data?.arrivalDate}`)  // apr 8, 2026 3:25:00 am
    console.log(`2 ${pnrData?.data?.boardingPoint}`)  // TDU
    console.log(`3 ${pnrData?.data?.bookingDate}`)   // mar 25,2026 11:46:11 am
    console.log(`4 ${pnrData?.data?.bookingFare}`)   // 400 
    console.log(`5 ${pnrData?.data?.chartStatus}`)   // chart prepared
    console.log(`6 ${pnrData?.data?.dateOfJourney}`)   // apr 7 , 2026 4:40:00 pm
    console.log(`7 ${pnrData?.data?.destinationStatus}`)  // KYN //
    console.log(`8 ${pnrData?.data?.distance}`)         //622
    console.log(`9 ${pnrData?.data?.informationMessage?.isWL}`)  // N //
    console.log(`10 ${pnrData?.data?.informationMessage?.journeyClass}`)  // SL 
    console.log(`11 ${pnrData?.data?.informationMessage?.nymberOfPassenger}`)  // 1
    console.log(`12 ${pnrData?.data?.passengerList?.[0]?.bookingBerthCode}`)  //LB
    console.log(`13 ${pnrData?.data?.passengerList?.[0]?.bookingBerthNo}`)  // 28
    console.log(`14 ${pnrData?.data?.passengerList?.[0]?.bookingCoachId}`)  // s2
    console.log(`15 ${pnrData?.data?.passengerList?.[0]?.bookingStatus}`)  // CNF
    console.log(`16 ${pnrData?.data?.passengerList?.[0]?.bookingStatusDetails}`)  // CNF/s2/28/LB
    console.log(`17 ${pnrData?.data?.passengerList?.[0]?.bookingStatusIndex}`)  // 0
    console.log(`18 ${pnrData?.data?.passengerList?.[0]?.childBerthFlag}`)  // false
    console.log(`19 ${pnrData?.data?.passengerList?.[0]?.concessionOpted}`)  // false
    console.log(`19.5 ${pnrData?.data?.passengerList?.[0]?.currentBerthCode}`)  // lb
    console.log(`20 ${pnrData?.data?.passengerList?.[0]?.currentCoachId}`)  //s2
    console.log(`20.5 ${pnrData?.data?.passengerList?.[0]?.currentBerthNo}`)  //28
    console.log(`21 ${pnrData?.data?.passengerList?.[0]?.currentStatus}`)  //CNF    
    console.log(`22 ${pnrData?.data?.passengerList?.[0]?.currentStatusDetails}`)  //CNF/s2/28/LB
    console.log(`23 ${pnrData?.data?.passengerList?.[0]?.currentStatusIndex}`)  // 0
    console.log(`24 ${pnrData?.data?.passengerList?.[0]?.forGoConcessionOpted}`)  // false
    console.log(`25 ${pnrData?.data?.passengerList?.[0]?.passengerCoachPosition}`)  // 12
    console.log(`26 ${pnrData?.data?.passengerList?.[0]?.passengerIcardFlag}`)  // false
    console.log(`27 ${pnrData?.data?.passengerList?.[0]?.passengerNationality}`)  // IN
    console.log(`28 ${pnrData?.data?.passengerList?.[0]?.passengerQuota}`)  //SS
    console.log(`29 ${pnrData?.data?.passengerList?.[0]?.passengerSerialNumber}`)  //1
    console.log(`30 ${pnrData?.data?.passengerList?.[0]?.waitListType}`)  //0
    console.log(`31 ${pnrData?.data?.pnrNumber}`)  // 4235647414
    console.log(`32 ${pnrData?.data?.quota}`)  // ss
    console.log(`33 ${pnrData?.data?.reasonType}`)  // s
    console.log(`34 ${pnrData?.data?.reservationUpto}`)  // KYN
    console.log(`35 ${pnrData?.data?.sourceStation}`)  // TDU
    console.log(`36 ${pnrData?.data?.ticketFare}`)  //400
    console.log(`37 ${pnrData?.data?.ticketTypeInprs}`)  // E
    console.log(`38 ${pnrData?.data?.timeStamp}`)  // apr 7 2026 9:23:28 AM
    console.log(`39 ${pnrData?.data?.trainNumber}`)  // 12702
    console.log(`40 ${pnrData?.data?.vikalpStatus}`)  // yes
    console.log(`41 ${pnrData?.data?.trainName}`)  // hussainSagar sf
    console.log(`42 ${pnrData?.data?.waitingListType}`)  // 0



    const navigate = useNavigate()
    const { trainNo: paramsTrainNo } = useParams()

    const goto = () => {
        const trainNoData = pnrData?.data?.trainNumber

        if (!trainNoData) return
        setTrainNo(paramsTrainNo)
        if(paramsTrainNo && trainNo.length==5){   
            setTrainNo(trainNoData)
            navigate(`/liveTrain/${trainNoData}`)
        }
    }

    return (
        <>
            <div className='bg-blue-400 h-[80vh]'>
                <div className='text-center font-bold text-[1.5em]'>PNR STATUS</div>
                {/* {pnrData ? */}
                < div >
                    <div className='shadow m-2 p-3 bg-white rounded-[20px]'>
                        <div className='flex justify-between '>
                            <div className=''>
                                PNR: {pnrData?.data?.pnrNumber ? pnrData?.data?.pnrNumber : "--"}
                            </div>
                            <div>
                                CHANGE
                            </div>
                        </div>
                        <div className='shadow rounded-[20px] m-2 p-2 '>
                            <div className='shadow my-2 bg-red-400 w-[70%] px-[20px] py-[10px]'>
                                <div onClick={goto} className='w-[100%] flex'>
                                    <div className='w-[30%] '>
                                        {pnrData?.data?.trainNumber ? pnrData?.data?.trainNumber : " 00000"} :
                                    </div>
                                    <div>
                                        {pnrData?.data?.trainName ? pnrData?.data?.trainName : " station Name "}
                                    </div>
                                </div>
                                <div className='w-[100%] flex '>
                                    <div>
                                        Distance :
                                    </div>
                                    <div>
                                        {pnrData?.data?.ticketFare ? pnrData?.data?.ticketFare : "00.00"}
                                    </div>
                                </div>
                                <div >
                                    <div className='w-[30%] flex'>
                                        Booking date :
                                    </div>
                                    <div>
                                        {pnrData?.data?.bookingDate ? pnrData?.data?.bookingDate : "DD MM YYYY , HH:MM:SS , am/pm"}
                                    </div>
                                </div >
                                <div className='w-[100%] lex justify-between'>
                                    <div>
                                        journey start :
                                    </div>
                                    <div>
                                        {pnrData?.data?.dateOfJourney ? pnrData?.data?.dateOfJourney : "DD MM YYYY , HH:MM:SS , am/pm"}
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-row gap-2'>
                                <div className='shadow grow p-2'>
                                    <div>
                                        {pnrData?.data?.sourceStation ? pnrData?.data?.sourceStation : "from"}
                                    </div>
                                    <div>
                                        { }
                                    </div>
                                </div>
                                <div className='shadow grow p-2'>
                                    <div>
                                        {pnrData?.data?.reservationUpto ? pnrData?.data?.reservationUpto : "two"}

                                    </div>

                                </div>
                                {/* tandur - TDU ,16:40 -- kalyan Junction - KYN , 03:05  */}
                            </div>

                            {/* <div>Tue, 07 Apr | SL | SS | Expected Platform : 2</div> */}
                        </div>
                    </div>

                    <div className='shadow m-2 p-2 bg-white rounded-[20px]'>
                        <div className='flex justify-between px-5 mx-2 my-2'>
                            <div>Passenger Status</div>
                            <div className='cursor-pointer'>Refresh </div>
                        </div>
                        <table className='w-[100%]'>
                            <thead className='bg-red-200'>
                                <tr>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>S.No</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Current Status</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Booking Status</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Coach</th>
                                </tr>
                            </thead>
                            <tbody >
                                {pnrData?.data?.passengerList?.map((v, i) => (
                                    <tr key={i}>
                                        <td className='p-2 border-2 border-blue-600 m-[2px]'>{i + 1}</td>
                                        <td className='p-2 border-2 border-blue-600 m-[2px]'>{v.currentStatus?v.currentStatus:"--"} {v.currentCoachId?v.currentCoachId:"--"} {v.currentBerthNo?v.currentBerthNo:"--"} {v.currentBerthCode?v.currentBerthCode:"--"}  </td>
                                        <td className='p-2 border-2 border-blue-600 m-[2px]'>{v.bookingStatus?v.bookingStatus:"--"} {v.bookingCoachId?v.bookingCoachId:"--"} {v.bookingBerthNo?v.bookingBerthNo:"--"} {v.bookingBerthCode?v.bookingBerthCode:"--"}</td>
                                        <td className='p-2 border-2 border-blue-600 m-[2px]'>{bookingCoachId?bookingCoachId:"--"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='shadow p-2 m-2 bg-white rounded-[20px] w-100'>
                        <table className='w-[100%] gap-2 '>
                            <thead className=''>
                                <tr className='bg-red-200 rounded-[20px]'>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Total Fare</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Current Status</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Remarks if any</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>distance</th>
                                    <th className='p-2 border-2 border-blue-600 m-[2px]'>Train Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border-2 border-blue-600 m-[2px]'>{pnrData?.data?.ticketFare ? pnrData?.data?.ticketFare : " 00"}</td>
                                    <td className='p-2 border-2 border-blue-600 m-[2px]'>{pnrData?.data?.chartStatus ? pnrData?.data?.chartStatus : "--"}</td>
                                    <td className='p-2 border-2 border-blue-600 m-[2px]'>NO REFUND AGAINST CANCELLATION</td>
                                    <td className='p-2 border-2 border-blue-600 m-[2px]'>{pnrData?.data?.distance ? pnrData?.data?.distance : "--"}</td>
                                    <td className='p-2 border-2 border-blue-600 m-[2px]'>--</td>

                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                {/* : <div className='h-[100%]   flex justify-center items-center font-bold text-[2em]'> Data not Found</div>} */}
            </div >

        </>
    )
}

export default PNRStatusComponent
