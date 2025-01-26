import React from 'react'
import "../../Styles/Itemshortview/Itemshortview.css";
import { IoIosInformationCircle } from "react-icons/io";

const Pincodeerrorpage = ({alertboxinbuy,pinnum}) => {
  return (
    <>
      <div className={`not-able-to-buy-alert-div ${alertboxinbuy?'alerdisp':'noalerdisp'}`} >
            <div className="alert-buy-inner-div">
                <div className="imageforbuyerror" style={{backgroundImage:`url('/imgforitemshort/nobgbuyerrimg.png')`,animation:alertboxinbuy?' rotsussimgforbuyer 1s cubic-bezier(.47,1.64,.41,.8) 0.07s':''}}></div>
                <div className="div-for-cont">
                    <p ><IoIosInformationCircle className="info-svg-buy-error" /></p>
                    <p className='alert-buy-font'>{String(pinnum).length?'Ensure your pincode is correct to proceed':'please enter your location pincode'}</p>
                </div>
                
            </div>
            <div className="line-passing">
                <div style={{animation:alertboxinbuy?'closeunderline 4s linear':''}} className="line-here">

                </div>
            </div>
        </div>
    </>
  )
}

export default Pincodeerrorpage
