import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './App.css'

const Header = ({ settings }) => {

  console.log('sss', settings)

  const [banners, setbanners] = useState([])
  const [active, setActive] = useState(window.location.pathname);

  const isActive = (path) => active === path;

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setDropdownVisible(false); // Optional: Hide dropdown on click
  };

  const bannerdata = async () => {
    try {
      const response = await axios.get('https://casinosonlinein.com/1xbet/console/api/banners')
      // console.log(response.data.status)
      if (response.data.status === 'success') {
        console.log(response)
        setbanners(response.data.banners)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    bannerdata()
  }, [])


  const carousalsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const backgroundStyle = {
    minHeight: '319px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${`https://casinosonlinein.com//1xbet/console/public/storage/${settings?.background}`})`,
  };

  return (
    <>
      <div>
        <div className="flex items-strech flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div style={backgroundStyle} className="flex flex-col md:flex-row items-strech justify-between w-full py-6 px-6 md:py-12 lg:px-12">
            <div className="flex flex-col justify-center md:w-1/2">
              <div className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white"><img src={`https://casinosonlinein.com/1xbet/console/public/storage/${settings?.logo}`} alt="" className="" /></div>
            </div>

            {/* <img src={require('./image/banner.png')} alt="" className=' w-[470px] h-[119px]' /> */}

            <Slider {...carousalsettings} arrows={false} className='flex mt-8 md:mt-0 mb-10 items-center md:justify-end md:me-20 md:w-[500px] h-[119px] lg:self-center'>
              {/* <div className="md:w-1/2 flex mt-8 md:mt-0 mb-10 items-center justify-center md:justify-end md:me-20"> */}
              {banners?.map((banner, index) => (

                <img src={`https://casinosonlinein.com/1xbet/console/public/storage/${banner.banner_image}`} alt={banner.banner_name} className="w-[500px] h-[119px] object-cover" />


              ))}
              {/* </div> */}

            </Slider>
          </div>
        </div>

        <div className='justify-center flex -mt-5'>
          <div className='bg-white flex gap-4 border p-2 rounded-full ps-10 pe-10'>
            <Link
              to='/'
              className={`text-[13px] text-[#AE0F0A] font-medium ${isActive('/') ? 'active-underline' : ''}`}
              onClick={() => setActive('/')}
            >
              Home
            </Link>
            <div className="relative">
              <Link
                to='#'
                className={`text-[13px] text-[#AE0F0A] font-medium flex items-center ${isActive('/games') ? 'active-underline' : ''}`}
                onClick={() => handleLinkClick('/games')}
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                Games <span className='ms-1'><FaAngleDown /></span>
              </Link>
              {dropdownVisible && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg border mt-1 w-[130px] z-50 rounded-md"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="w-full">
                    <li className="w-full">
                      <Link to="/game1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full whitespace-nowrap">
                        Casino Games
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link to="/game2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full whitespace-nowrap">
                        Other Games
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to='/events'
              className={`text-[13px] text-[#AE0F0A] font-medium ${isActive('/events') ? 'active-underline' : ''}`}
              onClick={() => setActive('/events')}
            >
              Live Events
            </Link>
            <Link
              to="/blogs"
              className={`text-[13px] text-[#AE0F0A] font-medium ${isActive('/blogs') ? 'active-underline' : ''}`}
              onClick={() => setActive('/blogs')}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header
