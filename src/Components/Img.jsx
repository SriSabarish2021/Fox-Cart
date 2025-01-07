import React, { useState, useEffect } from 'react'
import '../Styles/Img.css'
import { BiSolidHandDown } from "react-icons/bi";

const Img = () => {
   
    
  return (
    <div className='homeimg' >
        <div className='imginsider'>
          <div  className='imgcont'>
            <p className='all'>All  &nbsp; your  &nbsp; Purchasing  &nbsp; at</p>
            <p className='foxcart'>Fox Cart - Fill Your Cart</p>
            <p className='statement'>Discover seamless shopping with our Everything & More collection – your one-stop destination for stylish apparel, cutting-edge electronics, must-have gadgets, and everyday essentials.</p>
          </div>
          <div className='rounddiv'>
          <div className='iconfordown'>
            <p className='downicon'><BiSolidHandDown/></p>
          </div>
        </div>  
        </div>
           
    </div>
  )
}

export default Img
