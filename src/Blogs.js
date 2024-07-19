import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Blogs = () => {
  const [blogs, setblogs] = useState([])

  const blogData = async () => {
    try {
      const response = await axios.get('https://casinosonlinein.com/1xbet/console/api/blogs')
      if (response.data.status == "success") {
        setblogs(response.data.blogs)
      }
    }
    catch (error) {
      console.log(error)

    }

  }

  useEffect(() => {
    blogData()
  }, [])
  return (
    <>
      <div className=' container mx-auto mt-5 mb-20'>
        <div className='grid grid-cols-12 gap-4'>
          <div className=' col-span-12 lg:col-span-12'>
            <div className=' bg-gradient-to-r from-[#AE0F0A] to-[#480604] rounded-md'>
              <h2 className=' text-white text-[18px] font-bold ps-3'>Casino Blogs</h2>
            </div>

            <div className='grid grid-cols-12 gap-4 mt-4'>

              {blogs?.map((blog, index) => (


                <div className=' col-span-12 md:col-span-6 lg:col-span-4 rounded-lg shadow-md'>
                  <div className=' bg-light'>
                    <div key={blog.id}>
                      {/* <Link to={`/blogs/${blog.id}`}> */}
                      <Link to={`/blogs/${blog.id}`}>
                          <img src={`https://casinosonlinein.com/1xbet/console/public/storage/${blog.image}`} alt="" className=' object-streach w-full h-[260px]' />
                        <div className=' p-2 pb-4'>
                          <h3 className=' text-[18px] font-bold text-[#AE0F0A]'>{blog.title}</h3>
                          <p className='text-[12px]'>{blog.shortdescription}</p>
                        <button className=' btn btn-sm bg-[#AE0F0A] text-white mt-2 px-2 py-1 rounded' >Read More</button>
                        </div>

                      </Link>
                    </div>
                  </div>
                </div>

              ))}

            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Blogs
