import "../../Styles/Cartpage/Cart.css";
import { useEffect } from "react";
import { GiFox } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import {  useState } from "react";

const Payment = ({arr}) => {

    const [arrofcartinpayment,setarrcartinpayment]=useState([])

    const[paymentamt,setpaymentamt]=useState(0)

    useEffect(() => {
        window.scrollTo(0, 0); 
        let addcartarr=Array.from(arr).filter((addcartitem)=>addcartitem.addcart)
        setarrcartinpayment(addcartarr)
      return () => {
        setarrcartinpayment([])
      }
    }, [])

    useEffect(() => {
      
        let payarr=arrofcartinpayment.map((indiforpaytot)=>
            setpaymentamt((totalpay)=>{
                let initialpay=totalpay
                let actualamt=indiforpaytot.totalamt
                let amtsettopay=Number(initialpay)+Number(actualamt)
                return amtsettopay

            })
        )
        
      return () => {
        setpaymentamt(0)
      }
    }, [arrofcartinpayment])

  return (
    <div className="cart-checkout-page">
        <div className="checkout-div">
            <div className="checkout-head">
                <div className="head-logo-checkout"><GiFox  className="cart-logo-svg"/>Fox Cart</div>
                <div className="check-out-timeline">
                    <div className="same check">
                        <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <p className="check-out-p">Check</p>
                        <div className="line"></div>
                    </div>
                    <div className="same review">
                    <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <p className="check-out-p">Review</p>
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
                                <div className="check-1">
                                    <input type="checkbox" />
                                    <p className="ship-type-p"><span><TbTruckDelivery  className="ship-type-p-span"/></span>HOME</p>
                                </div>
                                <div className="check-2">
                                    <input type="checkbox" />
                                    <p className="ship-type-p"><span><LuPackageOpen  className="ship-type-p-span"/></span>HOME</p>
                                </div>
                        </div>
                           
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Name<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className="inp-in-checkout" placeholder="name" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Email<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className="inp-in-checkout" placeholder="email" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Phone Number<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className="inp-in-checkout" placeholder="phone number" type="text" />

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
                         <input className="inp-in-checkout in-all-one" placeholder="State" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">City<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className="inp-in-checkout in-all-one" placeholder="City" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Pin Code<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className="inp-in-checkout in-all-one" placeholder="pin code" type="text" />

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
                            {arrofcartinpayment.map((indicartinpay)=>
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
                            <p className="sub-fin-cart-p-amt">${paymentamt}.00</p>
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
                            <p className="sub-fin-cart-p-amt-tot">${paymentamt}.00</p>
                        </div>
                       
                    </div>
                    <div className="procced-btn">
                        <button className="pay-btn">Proceed to PAY</button>
                    </div>
                    <div className="secure-tran">
                        <p className="secure-p-1"><MdLockOutline className="locksvg"/> Secured Transaction with FoxCart</p>
                        <p className="secure-p-2">Ensuring your finacial and personal details are secure on every transactions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Payment
