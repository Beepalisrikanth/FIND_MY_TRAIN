import { React, useState, createContext, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_TRAIN_API_KEY;
export const TrainContext = createContext();

const DataContext = ({ children }) => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ftData, setFTData] = useState("");

  const [trainNo, setTrainNo] = useState("")
  const [ltData, setLTdata] = useState("")

  const [pnrNO, setPNRNo] = useState("")
  const [pnrData, setPNRData] = useState("")

  const [stationCode, setStationCode] = useState("")
  const [scData, setSCData] = useState("")

  const [currentLocation, setCurrentLocation] = useState("")

  const [currentTrainLocation, setCurrentTrainLocation] = useState("")

  const CurrentTime = new Date()

  const currentMinutes = (CurrentTime.getHours() * 60) + CurrentTime.getMinutes()

  const matchedTrain = currentLocation?.data?.find((v) => v.train_number === ltData?.data?.train?.number)


  // search trains between stations 
  const STBS = async () => {
    try {

      // const url = `https://api.railradar.org/api/v1/trains/57412/average-delay`;   // delay time arrival and departure
      // const url = `https://api.railradar.org/api/v1/trains/57412`;    // train schedule arrival time , shedule departure time, atcual arrival time, actual departure time
      // const url = `https://api.railradar.org/api/v1/stations/mbnr//live`; // all trian data and station data  
      // const url = `https://api.railradar.org/api/v1/pnr/status?pnr=4235647414`
      // const url = `https://api.railradar.org/api/v1/trains/list`;  // firts 50 train in the list 00000 - 00050
      // const url = `https://api.railradar.org/api/v1/stations/MBNR/info`;   // only station data
      // const url = `https://api.railradar.org/api/v1/search/stations?query=MBNR`;

      const url = `https://api.railradar.org/api/v1/trains/between?from=${from}&to=${to}`; // from to between station

      const options = {
        headers: {
          'X-API-Key': apiUrl,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setFTData(result)
      console.log(result)
    }
    catch (e) {
      console.error(e)
    }
  }

  // CT : current trains
  const CT = async () => {
    try {
      const url = `https://api.railradar.org/api/v1/stations/${stationCode}/live`; // all trian data and station data  
      const options = {
        headers: {
          'X-API-Key': apiUrl,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setSCData(result)
      console.log(result)
    }
    catch (e) {
      console.error(e)
    }
  }

  const LTSQ = async () => {
    try {
      // const url = `https://api.railradar.org/api/v1/pnr/status?pnr=4235647414`
      // const url = `https://api.railradar.org/api/v1/search/trains?query=${trainNo}`;
      const url = `https://api.railradar.org/api/v1/trains/${trainNo}/schedule?journeyDate=2026-04-09`; // train detatails upcoming stations
      const mapurl = `https://api.railradar.org/api/v1/trains/live-map`; // all live trains data
      const options = {
        headers: {
          'X-API-Key': apiUrl,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();

      const mapResponse = await fetch(mapurl, options);
      const mapResult = await mapResponse.json();
      setLTdata(result)
      setCurrentLocation(mapResult)
      console.log(`${trainNo}  train no`)
      console.log(result)
      console.log(mapResponse)
    }
    catch (e) {
      console.log(e)
    }
  }
  // const LTData = JSON.stringify(ltData)

  const PNRTRACK = async () => {
    try {
      // const url = `https://api.railradar.org/api/v1/pnr/status?pnr=4235647414`;
      // const url =`https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnrNO}`
      const options = {
        headers: {
          'x-rapidapi-key': 'ced4fe1d8amsh4205910a38f4a6fp102c18jsn5a06fc594fd1',
          'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com',
          'Content-Type': 'application/json'
          // 'X-API-Key': apiUrl,
          // 'Content-Type': 'application/json'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setPNRData(result)
      console.log(result)
    }
    catch (e) {
      console.log(e)
    }
  }

  const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    // const period = hours >= 12 ? "PM" : "AM";\
    let formattedHour = 0
    formattedHour = hours % 24;
    // console.log(formattedHour, mins)
    return `${formattedHour}:${mins.toString().padStart(2, "0")}`;
  };


  useEffect(() => {
    if (from && to) {
      STBS()
    }
  }, [from, to])

  useEffect(() => {
    if (pnrNO && pnrNO.length === 10) {
      PNRTRACK()
    }
  }, [pnrNO])

  useEffect(() => {
    if (trainNo && trainNo.length === 5) {
      LTSQ()
    }
  }, [trainNo])

  useEffect(()=>{
    if(stationCode){
      CT()
    }
  },[stationCode])

  return (
    <TrainContext.Provider value={{
      from, setFrom, to, setTo, ftData, STBS,
      trainNo, setTrainNo, ltData, LTSQ,
      pnrData, pnrNO, setPNRNo, PNRTRACK, convertMinutesToTime, currentMinutes,
      currentTrainLocation, setCurrentTrainLocation, matchedTrain,
      stationCode, setStationCode, scData, CT
    }}>
      {children}
    </TrainContext.Provider>
  );
};

export default DataContext;