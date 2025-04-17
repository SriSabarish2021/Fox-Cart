import React from 'react'
import "../../Styles/Itemshortview/Itemshortview.css";
import { IoIosInformationCircle } from "react-icons/io";

const Pincodeerrorpage = ({alertboxinbuy,pinnum}) => {
  return (
 /*    ${alertboxinbuy?'alerdisp':'noalerdisp'} */
    <>
      <div className={`not-able-to-buy-alert-div alerdisp `} >
          <div className="imageforbuyerror" style={{backgroundImage:`url('/imgforitemshort/nobgbuyerrimg.png')`,animation:alertboxinbuy?' rotsussimgforbuyer 1s cubic-bezier(.47,1.64,.41,.8) 0.07s':''}}></div>

            <div className="alert-buy-inner-div">
                <div className="div-for-cont">
                    <p ><IoIosInformationCircle className="info-svg-buy-error" /></p>
                    <p className='alert-buy-font'>{String(pinnum).length?'Ensure your pincode is correct to proceed':'please enter your location pincode'}</p>
                </div>
                
                <div className='squarefor-desing sq-one'></div>
                <div className='squarefor-desing sq-two'></div>
                <div className='squarefor-desing sq-three'></div>
                <div className='squarefor-desing sq-four'></div>
                <div className='squarefor-desing sq-five'></div>
                <div className='squarefor-desing sq-six'></div>
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
