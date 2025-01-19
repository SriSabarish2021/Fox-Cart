import "../../Styles/Itemshortview/Itemshortview.css";
import { ImFire } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCash } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useEffect, useState } from "react";

const Itemshortview = ({viewbox,setviewbox,nameinarr,arr,setarr}) => {

    let[arrayforshortitem,setarrayforshortitem]=useState([])
    
    useEffect(() => {
      
        let getelemntforitemshort=Array.from(arr).filter((indiitem)=>indiitem.id==nameinarr)
        setarrayforshortitem(getelemntforitemshort)
    
    }, [nameinarr])
    

   
    
    
  return (
    <div className={`item-short-view ${viewbox?'moveview':'removeview'}`} > 
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${viewbox?'hidden':'auto'};
        }`}
        </style>

        <div className={`item-short-container ${viewbox?'scaleviewbox':'nonscaleviewboxitem-short-close'}`}>
            <div className='item-short-img-div'>
                <div className='item-short-img'>

                </div>
            </div>
            {arrayforshortitem.map((indiitemforshort)=>(<div key={indiitemforshort.id} className='item-short-cont-div'>
            
            <div className='item-shot-head-cont-div'>
                <p className='item-shot-heading'>{indiitemforshort.name}</p>
                <div className='seller-topsell'>
                    <p className='item-shot-seller'>by Homers</p>

                    <p className='sold-item-initem-short' style={{color:'red',animation:'upanddowninitemshort  4s linear infinite'}}><ImFire style={{color:'orangered'}}/>&nbsp; 20 sold on last 36 hours</p>
                </div>
            </div>
            <div className='item-shot-amt-cont-div'>
                <div className='item-short-amt'>
                    <p className='acutal-amt-in-item-short'>${indiitemforshort.amt}</p>
                    <p className='dis-amt-in-item-short'>${Number(indiitemforshort.amt)-Number((indiitemforshort.amt*10)/100)}</p>
                    <p className='discount-percentage-item-short'>10% discount</p>

                </div>
                <div className='item-short-reviews'>
                    <p className='star-for-item-short'><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStarHalf style={{fontSize:'13px'}}/></p>
                    <p className='review-num-item-short'>20 reviews</p>
                </div>
                
            </div>
            <div className='item-short-available-item'>
                    <p className='instock'>in stock : Delivery in 5 Days</p>
                   
            </div>
            <div className='description-item-short'>
                <p className='descrip-item-short-tit'>Description:</p>
                <p className='descrip-item-short-cont'>{indiitemforshort.itemdescription}</p>
                <div className='basic-item-shprt-info'>
                    <p className='addi-info-short'>Avilability: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani1':''}`} style={{color:`rgb(0, 124, 19)`}}><IoMdCheckmarkCircleOutline className='instock-svg'/> inStock</span></p>
                    <p className='addi-info-short'>Delivery: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani2':''}`}>free</span></p>
                    <p className='addi-info-short'>EMI: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani3':''}`}>Available</span></p>
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
            
        </div>))}
            


            <div className='item-short-close'><MdOutlineCloseFullscreen onClick={()=>setviewbox(false)} className='item-short-close-svg'/></div>



        </div>
 
    </div>
  )
}

export default Itemshortview
