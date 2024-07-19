import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <>
      

      <footer className=" bg-white shadow-md text-white p-4 fixed bottom-0 justify-center flex w-full">
      <p className=' flex font-medium text-black'>  Casinos Online 
        {/* &copy; {currentYear} All rights reserved  */}
       
        
        </p>
      </footer>
    </>
  )
}

export default Footer
