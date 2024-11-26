import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { MdKeyboardArrowRight } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import bg from "../images/breadcrumb_bg.jpg";


const Shop = () => {

  

  return (
    <>
        <div className="head">
        <Header className=" overflow-hidden" />
        <div
          className="bg-cover bg-center h-80 relative"
          style={{
            backgroundImage: `url(${bg})`, // Set the image imported from src folder
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative items-center justify-left text-white py-32 px-20 z-10">
            <h1 className="text-4xl font-bold">Shop</h1>
            <div className="flex space-x-3 mt-4">
              <span className="flex items-center">
                <RxHome className="pr-2 w-6 h-6" />
                Home
                <MdKeyboardArrowRight className="text-white w-6 h-6 ml-2" />
              </span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>

        
        <div >
        
        </div>
        <br />
        <br />
        <br />
        <br />
       <div >
       <Footer/>
       </div>
        
        
        
    </>
  )
}

export default Shop