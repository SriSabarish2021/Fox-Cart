import React from 'react'
import "../../Styles/Itemshortview/Itemshortview.css";
import { ImFire } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCash } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

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
                {/* <div className='item-short-cont-head'>
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
                    
                    <div className='buy-in-item-short-btn'>
                        <button className='buy-btn-item-short'>Buy Item</button>
                    </div>
                    <p className='view-more'>View more info <FaCaretDown className='view-more-svg'/></p>
                </div> */}
                <div className='item-shot-head-cont-div'>
                    <p className='item-shot-heading'>Home Neeeds</p>
                    <div className='seller-topsell'>
                        <p className='item-shot-seller'>by Homers</p>

                        <p className='sold-item-initem-short' style={{color:'red'}}><ImFire style={{color:'orangered'}}/>&nbsp; 20 sold on last 36 hours</p>
                    </div>
                </div>
                <div className='item-shot-amt-cont-div'>
                    <div className='item-short-amt'>
                        <p className='acutal-amt-in-item-short'>$1000</p>
                        <p className='dis-amt-in-item-short'>$900</p>
                        <p className='discount-percentage-item-short'>10% discount</p>

                    </div>
                    <div className='item-short-reviews'>
                        <p className='star-for-item-short'>*****</p>
                        <p className='review-num-item-short'>20 reviews</p>
                    </div>
                    
                </div>
                <div className='item-short-available-item'>
                        <p className='instock'>in stock : Delivery in 5 Days</p>
                       
                </div>
                <div className='description-item-short'>
                    <p className='descrip-item-short-tit'>Description:</p>
                    <p className='descrip-item-short-cont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, impedit labore dolores architecto iusto! Enim illum dolor aliquam commodi.</p>
                    <div className='basic-item-shprt-info'>
                        <p className='addi-info-short'>Avilability: <span className='addi-span-info-short' style={{color:`rgb(0, 124, 19)`}}><IoMdCheckmarkCircleOutline className='instock-svg'/> inStock</span></p>
                        <p className='addi-info-short'>Delivery: <span className='addi-span-info-short'>free</span></p>
                        <p className='addi-info-short'>EMI: <span className='addi-span-info-short'>Available</span></p>
                    </div>
                </div>
                <div className='item-short-btn-div'>
                        <button className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span'>Add Cart</span></button>
                        <button  className='item-short-likebtn'>Add to LikeList</button>
                </div>
                <div className='pin-code-eligible-found'>
                    <p className='pin-eligible'>Eligible for Delivery ?</p>
                    <div className='pin-inp-div'>
                        <input className='pin-inp-box' type="number" placeholder='pincode'/>
                        <div className='enter-pin'>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <div className='pin-district'>
                        <p className='pin-dist-p'>Your District : <span className='district-name'>Erode</span></p>
                        <p className='dist-available-for-delivery'><IoMdCheckmarkCircleOutline className='instock-svg'/>delivery available to this pincode</p>
                    </div>
                </div>
                <div className='buy-now-intem-short-btn'>
                    <button className='buy-now-btn add-item-short-span'>Buy Now</button>
                </div>
                <div className='basic-item-short-info'>
                    <div className='item-short-basic del-div'>
                        <div className='item-short-basic-div-logo'>
                            <p className='logo-basic-item-short'><TbTruckDelivery className='logo-for-basic-item-short'/></p>

                        </div>
                        <p className='text'>Del. by 5th Aug</p>
                    </div>
                    <div className='item-short-basic cash-on-div'>
                        <div className='item-short-basic-div-logo'>
                            <p  className='logo-basic-item-short'><IoCash className='logo-for-basic-item-short'/></p>

                        </div>
                        <p className='text'>COD Available</p>
                    </div>
                    <div className='item-short-basic return-div'>
                        <div className='item-short-basic-div-logo'>
                            <p className='logo-basic-item-short'><RiLogoutCircleLine className='logo-for-basic-item-short'/></p>

                        </div>
                        <p className='text'>Easy Return Policy</p>
                    </div>
                </div>
                
            </div>


            <div className='item-short-close'><MdOutlineCloseFullscreen onClick={()=>setviewbox(false)} className='item-short-close-svg'/></div>



        </div>
 
    </div>
  )
}

export default Itemshortview
