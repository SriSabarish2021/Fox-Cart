import React from 'react'
import "../../Styles/Footer/Foter.css";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";

const Foter = () => {
  return (
    <div className='footer-contaier'>
      <div className='footer-div'>
        <div className='footer-flex'>
            <div className='foot-site-info-1'>
              <div className='foot-cont'>
                <p className='foot-p1'>Get Your Necessary Stuffs</p>
                <p className='foot-p2'>Increase savings to 10% off your first purchase and keep up with our latest drops, special editions and members-only sales.</p>
              </div>
              <div className='email-inp-div'>
                <input className='email-inp-foot' type="email" placeholder='email'/>

              </div>
              <div className='footer-link'>
                <BsGithub className='foot-link-icon'/>
                <FaLinkedin className='foot-link-icon'/>
                <FaSquareXTwitter className='foot-link-icon'/>
                <IoCall className='foot-link-icon'/>
                <IoMail className='foot-link-icon'/>
              </div>
            </div>
            <div  className='foot-site-info-2'>
              <div className='foot-info-2'>
                <p className='foot-head-shop'>Shop at FoxCart</p>
                <p className='foot-p'>Shop Watches</p>
                <p className='foot-p'>Shop Dresses</p>
                <p className='foot-p'>Shop Fashions</p>
                <p className='foot-p'>Shop Groceries</p>
                <p className='foot-p'>Shop Gadjets</p>
              </div>
            </div>
            <div className='foot-site-info-3'>
            <div className='foot-info-3'>
                <p className='foot-head-shop'>Customer Support</p>
                <p className='foot-p'>24*7 Service</p>
                <p className='foot-p'>Contact Us</p>
                <p className='foot-p'>Shipping & Returns</p>
                <p className='foot-p'>Faq</p>
                <p className='foot-p'>My Account</p>
                <p className='foot-p'>Product Assurence</p>
                <p className='foot-p'>Refund in 15hrs</p>
                <p className='foot-p'>Quality Outlet</p>
              </div>
            </div>
            <div className='foot-site-info-4'>
            <div className='foot-info-4'>
                <p className='foot-head-shop'>#joinFoxNation</p>
                <p className='foot-p'>Regular Updates</p>
                <p className='foot-p'>Video</p>
                <p className='foot-p'>Blog</p>
                <p className='foot-p'>Support</p>
              </div>
            </div>
        </div>
        <div className='under-footer'>
          <p className='under-footer-p-1'><LuCopyright className='copy'/>2025 FOX CART</p>
          <p className='under-footer-p-2'>Term & Condition &nbsp;&nbsp;&nbsp;Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Foter
