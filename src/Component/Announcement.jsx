import React from 'react'
import "../ComponentStyle/Announcement.css"

const Announcement = () => {
    return (
        <div className=' bg-white rounded-[20px] shadow-lg p-1 grow'>
            <div className='px-4 flex flex-col m-4  h-[250px]'>
                <div className='text-[1.5em] text-black font-bold'>Announcements</div>
                <div className=' overflow-hidden mt-3'>
                    <div className='auto-scroll space-y-3 shadow p-3' >
                        <div className='shadow  rounded-[5px] p-2 my-2'> 1 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 2 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 3 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2 my-2'> 4 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 5 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 6 today so and so train is one hour delay </div>
                        {/* for cycling  */}
                        <div className='shadow  rounded-[5px] p-2 my-2'> 1 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 2 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 3 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2 my-2'> 4 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 5 today so and so train is one hour delay </div>
                        <div className='shadow  rounded-[5px] p-2  my-2'> 6 today so and so train is one hour delay </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement
