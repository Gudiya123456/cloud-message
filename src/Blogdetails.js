import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiArrowRightWideFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';


const Blogdetails = ({ }) => {
    const { blogid } = useParams();
    const [blogdetails, setblogdetails] = useState([])
    const blogdetailData = async () => {
        try {
            const response = await axios.get(`https://casinosonlinein.com/1xbet/console/api/blogdetails/${blogid}`)
            if (response.data.status == "success") {
                setblogdetails(response.data.blogdetails)
            }
        }
        catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        blogdetailData()
    }, [])


    return (
        <>
            <div className=' container mx-auto mt-5 mb-20'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className=' col-span-12 lg:col-span-8'>

                        <img src={`https://casinosonlinein.com/1xbet/console/public/storage/${blogdetails.image}`} alt="" className=' object-streach w-full h-[400px]' />

                        <h2 className='bg-gradient-to-r from-[#BB2E6B] to-[#1700E9] bg-clip-text text-transparent text-[70px] font-bold ps-3 mb-4'>{blogdetails.title}</h2>
                        {/* <h2 className='text-[#AE0F0A] text-[30px] font-bold ps-3 mb-4'>{blogdetails.title}</h2> */}
                        {/* <button className='bg-gradient-to-r from-[#0D3D6D] to-[#0B0B49] rounded-full text-white p-2 flex items-center text-[18px] font-bold px-8'>Best nonstop game casino list <span className=' ms-2'><RiArrowRightWideFill /></span></button> */}

                        {/* <h2 className='text-[#AE0F0A] text-[30px] font-semibold ps-3 mb-4'>{blogdetails.title}</h2> */}
                        <h1 dangerouslySetInnerHTML={{ __html: blogdetails.description }}></h1>

                    </div>
                    <div className=' col-span-12 lg:col-span-4'>
                        <div className=' col-span-12 lg:col-span-4'>
                            <div className=' bg-gradient-to-r from-[#AE0F0A] to-[#480604] rounded-md'>
                                <h2 className='text-white text-[18px] font-bold ps-3 mb-4'>Latest Magazines</h2>
                            </div>
                            <img src={require('./image/ad1.png')} alt="" className=' w-[266px] h-[372px] mb-2' />
                            <img src={require('./image/ad2.png')} alt="" className=' w-[415px] h-[200px]' />
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <img src={require('./image/ad.png')} alt="" className=' object-streach w-[1060px] h-[500px] mb-2 mt-10' />
                 </div>
            </div>
        </>
    )
}

export default Blogdetails
