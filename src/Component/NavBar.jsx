import React from 'react'
import profile from "../assets/profile.png"
import logo from "../assets/logo.png"
import logoTitle from "../assets/logo_title.png"


const NavBar = () => {

  return (
    <div className=' sticky top-0'>
      <div className='flex justify-between items-center bg-blue-900 text-[2em] h-18 px-2 text-white sticky'>
        <div className='flex m-1 gap-[2em] justify-between text-[0.8em] grow'>
          <div className='flex mr-5'>
            <img className='h-10 pt-1' src={logo} />
            <img className='h-10 pt-2' src={logoTitle} />
          </div>
          {/* <div className='flex justify-around w-[100%]'>
            <a href='./' className='border-b-3 border-blue-900  hover:border-white hover:border-b-2 '>Home </a>
            <a href='./LiveTrainStatusQuickCheck' className='border-b-3 border-blue-900  hover:border-white hover:border-b-2 '>Live Tracking</a>
            <a href='./' className='border-b-3 border-blue-900  hover:border-white hover:border-b-2 '>Search</a>
            <a href='./PNRStatusQuickCheck' className='border-b-3 border-blue-900  hover:border-white hover:border-b-2 '>PNR</a>
            
            </div> */}
          <div>Find my train</div>
          <div className='mx-[2%]'>
            <img className='h-10 ' src={profile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
