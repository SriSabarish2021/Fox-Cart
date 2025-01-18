import React from 'react'
import "../../Styles/Itemshortview/Itemshortview.css";
import { ImFire } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const Itemshortview = ({viewbox,setviewbox}) => {
  return (
    <div className={`item-short-view ${viewbox?'moveview':'removeview'}`} > 
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${viewbox?'hidden':'auto'};
        }`}
        </style>

        <div className={`item-short-container ${viewbox?'scaleviewbox':'nonscaleviewbox'}`}>
            <div className='item-short-img-div'>
                <div className='item-short-img'>

                </div>
            </div>
            <div className='item-short-cont-div'>
                <div className='item-short-cont-head'>
                    <div style={{paddingBottom:'10px'}} className='item-short-head-p'>
                        <p className='item-short-name' >Home Useage</p>
                        <div className='star-item-short'>
                            <p className='star-for-prod'>*****</p>
                            <p className='rev-item-short'>2 review</p>
                            <p className='sold-item-initem-short'><ImFire style={{color:'red'}}/>&nbsp; 20 sold on last 36 hours</p>
                        </div>
                    </div>              
                    <div style={{paddingBottom:'10px'}} className='amt-item-short'>
                        <p className='actual-amt-item-short'>$500</p>
                        <p  className='high-amt' >$900</p>
                    </div>
                    <p className='des-item-short'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur eum quibusdam blanditiis. Nulla dignissimos omnis vel officiis dolorum, ipsa aut dolor error ipsam consectetur quasi. Libero commodi modi iure?</p>
                    <div className='basic-item-shprt-info'>
                        <p className='addi-info-short'>Avilability: <span className='addi-span-info-short' style={{color:`rgb(0, 124, 19)`}}><IoMdCheckmarkCircleOutline className='instock-svg'/> inStock</span></p>
                        <p className='addi-info-short'>Delivery: <span className='addi-span-info-short'>free</span></p>
                        <p className='addi-info-short'>EMI: <span className='addi-span-info-short'>Available</span></p>
                    </div>
                </div>
                <div className='item-short-cont-main'>
                    <div className='item-short-btn-div'>
                        <button className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span'>Add Cart</span></button>
                        <button  className='item-short-likebtn'><FaHeart className='heart-item-short'/></button>
                    </div>
                    <div className='buy-in-item-short-btn'>
                        <button className='buy-btn-item-short'>Buy Item</button>
                    </div>
                    <p className='view-more'>View more info <FaCaretDown className='view-more-svg'/></p>
                </div>
            </div>


            <div className='item-short-close'><MdOutlineCloseFullscreen onClick={()=>setviewbox(false)} className='item-short-close-svg'/></div>



        </div>
 
    </div>
  )
}

export default Itemshortview
