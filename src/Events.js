import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
function Events() {

    const [events, setevents] = useState([])

    const eventData = async () => {
        try {
            const response = await axios.get('https://casinosonlinein.com/1xbet/console/api/liveevents')
            if (response.data.status == "success") {
                console.log('sdsaddsd', response.data)
                setevents(response.data.liveevents)
            }
        }
        catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        eventData()
    }, [])

    return (
        <>
            <div className=' container mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 lg:col-span-12'>
                        <div className=' bg-gradient-to-r from-[#AE0F0A] to-[#480604] rounded-md'>
                            <h2 className=' text-white text-[18px] font-bold ps-3'>Live Events</h2>
                        </div>

                        <div className='grid grid-cols-12 gap-4 mt-4'>

                            {events?.map((event, index) => (
                                <div className=' col-span-12 lg:col-span-6 rounded-lg shadow-md'>
                                    <div className=' bg-light'>
                                        <a href="#" target='_blank'>
                                            <img src={`https://casinosonlinein.com/1xbet/console/public/storage/${event.image}`} alt="" className=' object-cover w-full' />
                                            <div class='p-2 pb-4 relative'>
                                                <div class='p-2 pl-6 border-left-custom'>
                                                    <h3 class='text-[16px] font-bold bg-gradient-to-r from-[#AE0F0A] to-[#F0B600] bg-clip-text text-transparent'>
                                                        {event.event_name}
                                                    </h3>
                                                    <h4 class='text-[13px] font-semibold bg-gradient-to-r from-[#AE0F0A] to-[#F0B600] bg-clip-text text-transparent'>
                                                        {event.from_date} to {event.to_date}
                                                    </h4>
                                                    <h5 class='text-[13px] font-semibold bg-gradient-to-r from-[#AE0F0A] to-[#F0B600] bg-clip-text text-transparent'>
                                                        {event.event_location}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className=' p-2'>
                                                <h2 className=' text-[18px] font-semibold bg-gradient-to-r from-[#AE0F0A] to-[#F0B600] bg-clip-text text-transparent'>{event.event_title}</h2>
                                                <p className=' text-[12px] font-medium'>{event.description}</p>
                                                <p className=' text-[12px] font-semibold text-[#AE0F0A]'>For further information please click<span className='text-[#000]'> here</span></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events
