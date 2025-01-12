import "../../Styles/Cartpage/Cart.css";
import { useEffect } from "react";
import { GiFox } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const Payment = ({arrofcart,sumamt,setfooter}) => {
   

    const [shipingoffice,setshipingoffice]=useState(false)
    const [shipinghome,setshipinghome]=useState(true)

    let changeshipment=()=>{
        setshipingoffice(shipingoffice=>!shipingoffice)
        setshipinghome(shipinghome=>!shipinghome)
    }

    const[inpname,setinpname]=useState('')

    const[inpemail,setinpemail]=useState('')

    const[inpphone,setinpphone]=useState('')

    const[inpstate,setinpstate]=useState('')



    const[inpcity,setinpcity]=useState('')

    const[inppin,setinppin]=useState('')

    const[disppayed,setdisppayed]=useState(false)

    let proceedpayment=()=>{
        if (inpname.length===0 || inpemail.length===0 ||inpphone.length===0 ||inpstate.length===0 ||inpcity.length===0 ||inppin.length===0) {
            setdisppayed(false)
            let inpputparent=document.querySelectorAll('.inp-in-checkout')
            let filtarr=Array.from(inpputparent).filter((indiinp)=>{
                if(indiinp.value==''){
                    indiinp.classList.add('redborder')
                }else{
                    indiinp.classList.remove('redborder')
                }
        })}else{
            let inpputparent=document.querySelectorAll('.inp-in-checkout')
            let filtarr=Array.from(inpputparent).filter((indiinp)=>
                    indiinp.classList.remove('redborder')
                
                )
            setdisppayed(disppayed=>!disppayed)
            setfooter(footer=>!footer)

        }

    }

    let closepayedcont=()=>{
            setdisppayed(disppayed=>!disppayed)
            setfooter(footer=>!footer)
    }
   
  return (
    <div className="cart-checkout-page">
        
        <div className="checkout-div">
            <div className="checkout-head">
                <div className="head-logo-checkout"><GiFox  className="cart-logo-svg"/>Fox Cart</div>
                <div className="check-out-timeline">
                <div  className="underlinerel cont-shoping-hov" style={{marginRight:'50px'}}>
                    <Link to='/yourcart' className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back to Cart</Link>
                    

                </div>
                    <div className="same check">
                        <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <Link to='/yourcart' style={{textDecoration:'none'}}><p className="check-out-p">Check</p></Link>
                        <div className="line"></div>
                    </div>
                    <div className="same review">
                    <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <Link to='/yourcart' style={{textDecoration:'none'}}><p className="check-out-p">Review</p></Link>
                        <div className="line"></div>
                    </div>
                    <div className="same check-pay">
                        <div className="tick-in-check curr-incheck">3</div>
                        <p className="check-out-p">CheckOut</p>
                    </div>
                </div>
            </div>
            <div className="chekout-main-div">
                <div className="check-out-basic-info">
                    <p className="chek-hd">CheckOut</p>
                    <div className="check-for-del-type">
                        <p className="p-in-check-info">Shipping info</p>
                        <div className="cheker">
                                <div className="check-1" style={{borderColor:shipingoffice?`rgb(61, 139, 255)`:''}}>
                                    <input type="checkbox" checked={shipingoffice} value={shipingoffice} onChange={()=>changeshipment()} />
                                    <p style={{color:shipingoffice?`rgb(61, 139, 255)`:''}} className="ship-type-p"><span><TbTruckDelivery style={{color:shipingoffice?`rgb(61, 139, 255)`:''}}    className="ship-type-p-span"/></span>HOME</p>
                                </div>
                                <div className="check-2" style={{borderColor:shipinghome?`rgb(61, 139, 255)`:''}}>
                                    <input type="checkbox" checked={shipinghome} value={shipinghome} onChange={()=>changeshipment()}/>
                                    <p style={{color:shipinghome?`rgb(61, 139, 255)`:''}} className="ship-type-p"><span><LuPackageOpen style={{color:shipinghome?`rgb(61, 139, 255)`:''}}  className="ship-type-p-span"/></span>HOME</p>
                                </div>
                        </div>
                           
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Name<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout ${inpname.length!==0?'blueborder':''}`} value={inpname} onChange={(e)=>setinpname(e.target.value)}  placeholder="name" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Email<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout ${inpemail.length!==0?'blueborder':''}`} value={inpemail} onChange={(e)=>setinpemail(e.target.value)} placeholder="email" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Phone Number<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout ${inpphone.length!==0?'blueborder':''}`} value={inpphone} onChange={(e)=>setinpphone(e.target.value)}  placeholder="phone number" type="number" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Country<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <select className="inp-in-checkout" placeholder="phone number" type="text" value='india'>
                            <option value="india">india</option>
                         </select>

                        </div>
                    </div>
                    <div className="all-in-one">
                    <div className="name-check">
                        <p className="info-p-incheck">State<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one ${inpstate.length!==0?'blueborder':''}`} value={inpstate} onChange={(e)=>setinpstate(e.target.value)} placeholder="State" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">City<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one ${inpcity.length!==0?'blueborder':''}`} value={inpcity} onChange={(e)=>setinpcity(e.target.value)} placeholder="City" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Pin Code<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one ${inppin.length!==0?'blueborder':''}`} value={inppin} onChange={(e)=>setinppin(e.target.value)}  placeholder="pin code" type="text" />

                        </div>
                    </div>
                   
                    </div>
                    <div className="terms-condi">
                        <input type="checkbox" />
                        <p className="terms-condi-p">i here by accept all terms and condition applies</p>
                    </div>
                </div>
                <div className="check-out-final-pay">
                    <div className="cart-review">
                        <p className="info-p-incheck rev-car-pay">Review Your Cart</p>
                        <div className="review-cart-in-paypage">
                            {Array.from(arrofcart).map((indicartinpay)=>
                            <div key={indicartinpay.id} className="cart-rev-1">
                                <div className="rev-cart-img" style={{backgroundImage:`url(${indicartinpay.imgurl})`}}></div>
                                <div className="rev-cart-info">
                                    <p className="rev-cart-p">{indicartinpay.name}</p>
                                    <p className="rev-cart-p">{String(indicartinpay.itemdescription).slice(0,10)+'...'}</p>
                                </div>
                                <div className="end-of-rev">
                                    <p className="rev-cart-p">Q-{indicartinpay.quantity}</p>
                                    <p className="rev-cart-p">${indicartinpay.amt}</p>

                                </div>
                                </div>)}
                           
                           
                            
                        </div>
                    </div>
                    <div className="coupoun-div">
                        <p className="coupoun-div-p-infin"><RiCoupon3Fill className="coup-svg"/></p>
                        <input type="text" placeholder="Coupoun" className="coup-inp" />
                        <p className="coupoun-div-p-2-infin">Aplly</p>
                    </div>
                    <div className="final-amt">
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Subtotal</p>
                            <p className="sub-fin-cart-p-amt">${sumamt}.00</p>
                        </div>
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Shipping</p>
                            <p className="sub-fin-cart-p-amt">$40.00</p>
                        </div>
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Dispcount</p>
                            <p className="sub-fin-cart-p-amt">$40.00</p>
                        </div>
                        <div className=" totdiv">
                            <p className="sub-fin-cart-p total">Total</p>
                            <p className="sub-fin-cart-p-amt-tot">${sumamt}.00</p>
                        </div>
                       
                    </div>
                    <div className="procced-btn">
                        <button onClick={()=>proceedpayment()} className="pay-btn">Proceed to PAY</button>
                    </div>
                    <div className="secure-tran">
                        <p className="secure-p-1"><MdLockOutline className="locksvg"/> Secured Transaction with FoxCart</p>
                        <p className="secure-p-2">Ensuring your finacial and personal details are secure on every transactions</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="payed-noti" style={{display:disppayed?'flex':'none'}}>
            <div className="payed-noti-div">
            </div>
            <button onClick={()=>closepayedcont()} className="nocart-div-cont-close-btn">X</button>

        </div>
    </div>
   
  )
}

export default Payment
