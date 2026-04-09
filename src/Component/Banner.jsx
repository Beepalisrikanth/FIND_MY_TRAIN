import React from 'react'
import bg from "../assets/banner.png"

const Banner = () => {
  return (
    <div>
      <div className=' h-[25em] w-[100%]  bg-cover bg-center' style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundPosition:'full'}}>
      </div>
    </div>
  )
}

export default Banner
