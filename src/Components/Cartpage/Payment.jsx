import "../../Styles/Cartpage/Cart.css";
import { useEffect } from "react";
import { GiFox } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import {  useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AiFillCloseCircle } from "react-icons/ai";
import { SiQiwi } from "react-icons/si";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Payment = ({inpcity,setinpcity,inpstate,setinpstate,inpphone,setinpphone,inpaddress,setaddress,inpname,setinpname,arrofcart,setfooter,arr,pinnum,arrayforviewmoreitem,setarrayforextrainfo}) => {
    const regexforname=/^[a-z A-Z]+$/
    const regexforpinnum=/^[0-9]+$/
    let [paymentcart,setpaymentcart]=useState([])
    const {id}=useParams()
    let locationget=useLocation()
    const[inppin,setinppin]=useState('')

    const[isidpage,setisidpage]=useState(false)
    const[ismorepage,setismorepage]=useState(false)
    const [isviewallpage,setisviewallpage]=useState(false)
    useEffect(() => {
        setfooter(true)
        if(locationget.pathname.includes(`/proceedtopay/${id}`)){
            let getiditem=Array.from(arr).filter((idequalitem)=>idequalitem.id===Number(id))
            setpaymentcart(getiditem)
            setinppin(pinnum)
            setisidpage(true)
            setismorepage(false)
            setisviewallpage(false)

            console.log('to shortpay');
            
        }else if(locationget.pathname==`/viewmore/${id}/proceedtopay`){
            setpaymentcart(arrayforviewmoreitem)
            setinppin(pinnum)
            setisidpage(false)
            setismorepage(true)
            setisviewallpage(false)

            console.log(arrayforviewmoreitem);
            
            console.log('to morepay');

        }else if(locationget.pathname==`/itemviewall/viewmore/${id}/proceedtopay`){
            setpaymentcart(arrayforviewmoreitem)
            setinppin(pinnum)
            setisidpage(false)
            setismorepage(false)
            setfooter(true)
            setisviewallpage(true)
            console.log(arrayforviewmoreitem);
        }
        else{
            setpaymentcart(arrofcart)
            setisidpage(false)
            setismorepage(false)
            setisviewallpage(false)
            console.log('to cartpay');

        }
      

      return () => {
        setpaymentcart([])
      }
      
    }, [])
    
    
    
   
   
    useEffect(() => {
      
        window.scrollTo(0,0)    
    }, [])
    const [shipingoffice,setshipingoffice]=useState(false)
    const [shipinghome,setshipinghome]=useState(true)

    let changeshipment=()=>{
        setshipingoffice(shipingoffice=>!shipingoffice)
        setshipinghome(shipinghome=>!shipinghome)
    }



    const[disppayed,setdisppayed]=useState(false)


    const[terms,setterms]=useState(true)


    let proceedpayment=()=>{
            let phonenumcheck=document.querySelector('.phonenumcheck')
            let addresscheck=document.querySelector('.addresscheck')
            let namcheck=document.querySelector('.namecheck')
            let statecheck=document.querySelector('.statecheck')
            let citycheck=document.querySelector('.citycheck')
            let pincheck=document.querySelector('.pincheck')
        if (phonenumcheck.value.length==0 || addresscheck.value.length==0 || namcheck.value.length==0 || citycheck.value.length==0 || statecheck.value.length==0 || pincheck.value.length==0 || !terms||String(inpname).length===0 || String(inpaddress).length===0 ||Number(inpphone).length===0 ||String(inpstate).length===0 ||String(inpcity).length===0 ||inppin.length===0|| !regexforname.test(inpname)|| !regexforname.test(inpstate)||!regexforname.test(inpcity)|| !regexforpinnum.test(inppin)) {
            setdisppayed(false)
            let inpputparent=document.querySelectorAll('.inp-in-checkout')
            let filtarr=Array.from(inpputparent).filter((indiinp)=>{
                if(indiinp.value==''||indiinp.value.length==0){
                    indiinp.classList.remove('blueborder')

                    indiinp.classList.add('redborder')
                }
                else{
                    indiinp.classList.remove('redborder')
                }
                let getchildname=document.querySelector('.nameinpinpay')
                let getchildstate=document.querySelector('.statecheck')
                let getchildcity=document.querySelector('.citycheck')
                let getchildpin=document.querySelector('.pincheck')

                
                if(!regexforname.test(inpname)){  
                    getchildname.classList.remove('blueborder')

                    getchildname.classList.add('redborder')
                }else{
                    getchildname.classList.remove('redborder')
                    getchildname.classList.add('blueborder')

                }
                
                if(!regexforname.test(inpstate)){  
                    
                    getchildstate.classList.remove('blueborder')

                    getchildstate.classList.add('redborder')
                }else{
                    getchildstate.classList.remove('redborder')
                    getchildstate.classList.add('blueborder')

                }
                
                if(!regexforname.test(inpcity)){  
                    getchildcity.classList.remove('blueborder')

                    getchildcity.classList.add('redborder')
                }else{
                    getchildcity.classList.remove('redborder')
                    getchildcity.classList.add('blueborder')

                }

                if (!regexforpinnum.test(inppin)) {
                    getchildpin.classList.remove('blueborder')

                    getchildpin.classList.add('redborder')
                }else{
                    getchildpin.classList.remove('redborder')
                    getchildpin.classList.add('blueborder')

                }
                if (!terms) {
                    return
                }

        })}else{
            let inpputparent=document.querySelectorAll('.inp-in-checkout')
            let filtarr=Array.from(inpputparent).filter((indiinp)=>{
                    indiinp.classList.remove('redborder')
                    indiinp.classList.add('blueborder')
                }
                    
                )
            setdisppayed(true)
            setfooter(true)
            setsucess(false)
            setdotlad(true)
            setarrayforextrainfo((curextraitem)=>{
                let olderextra=curextraitem
                let newerextra=[...paymentcart,...olderextra.slice(0,3)]
                console.log(newerextra);
                return newerextra
                
            })
        }

    }

    let closepayedcont=()=>{
            setdisppayed(false)
            setfooter(false)
    }

    const [dotload,setdotlad]=useState(false)
    const [sucessload,setsucess]=useState(false)

    useEffect(() => {
        setdotlad(true)
        setsucess(false)
        let timer=setTimeout(() => {
            setsucess(true)
            setdotlad(false)
        }, 2000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [disppayed])

    const [paymentsumamt,paymentsetsumamt]=useState(0)
    const [coupoun,setcoupoun]=useState('')
    const [discountnum,setdiscountnum]=useState(0)
    const [amtafterdis,setamtafterdiscount]=useState(paymentsumamt)    
    useEffect(() => {
                   
        Array.from(paymentcart).forEach((indiarramtpay)=>
            paymentsetsumamt((curamt)=>{
                let curentamt=indiarramtpay.totalamt
                let totamt=Number(curamt)+Number(curentamt)
                setamtafterdiscount(totamt)
                return totamt  
                
            })
        )
        return () => {
            paymentsetsumamt(0)
          }
     
      
    }, [paymentcart])
  
  
    
   
    
    let discountcopu =(totamt)=>{
        if(coupoun.includes('welcome')||coupoun.includes('Welcome')||coupoun.includes('WELCOME')){
            setdiscountnum((discountnum)=>{
                let addidcount=10
                let calcdiscount=Number(Number(totamt)*Number(addidcount))/Number(100)
                let finalamt=Number(totamt)-Number(calcdiscount)
                setamtafterdiscount(finalamt)
                return addidcount
            })
        }
    }

    const [country,setcountry]=useState('---')




    



  return (
    <div className="cart-checkout-page" style={{animation:'paypageanimation 0.9s cubic-bezier(.47,1.64,.41,.8)'}}>
        
        <div className="checkout-div">
            <div className="checkout-head">
                <div className="head-logo-checkout"><GiFox  className="cart-logo-svg"/>Fox Cart</div>
                <div className="check-out-timeline">
                <div  className="underlinerel cont-shoping-hov" >
                    {String(locationget.pathname).includes('/itemviewall/yourcart/proceedtopay')?
                    <Link  to='/itemviewall/yourcart' className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back View All</Link>
                    :
                    
                     isidpage?<Link  to='/' className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back to home</Link>:ismorepage?<Link onClick={()=>setfooter(true)} to={`/viewmore/${id}`} className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back to Itemview</Link>:isviewallpage?<Link onClick={()=>setfooter(true)} to={`/itemviewall/viewmore/${id}`} className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back to Itemview</Link>:<Link to='/yourcart' onClick={()=>setfooter(true)} className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Back to Cart</Link>
                    
                   
                    
                    }
                
                </div>
                {String(locationget.pathname).includes('/itemviewall/yourcart/proceedtopay')?
                    <></>
                    :
                    
                     <>
                       <div style={{display:isidpage||ismorepage||isviewallpage?'none':"flex"}} className="same ">
                        <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <Link to='/yourcart' style={{textDecoration:'none'}}><p className="check-out-p">Check</p></Link>
                        <div className="line"></div>
                    </div>
                    <div style={{display:isidpage||ismorepage||isviewallpage?'none':"flex"}}  className="same ">
                    <div className="tick-in-check"><FaCheck className="ticker-font"/></div>
                        <Link to='/yourcart' style={{textDecoration:'none'}}><p className="check-out-p">Review</p></Link>
                        <div className="line"></div>
                    </div>
                    <div style={{display:isidpage||ismorepage||isviewallpage?'none':"flex"}}  className="same ">
                        <div className="tick-in-check curr-incheck">3</div>
                        <p className="check-out-p">CheckOut</p>
                    </div>
                     </>
                    
                   
                    
                    }
                  
                </div>
            </div>
            <div className="chekout-main-div">
                <div className="check-out-basic-info">
                    <p className="chek-hd">CheckOut</p>
                    <div className="check-for-del-type">
                        <p className="p-in-check-info">Shipping info</p>
                        <div className="cheker">
                                <div className="check-1" onClick={()=>changeshipment()} style={{borderColor:shipingoffice?`rgb(61, 139, 255)`:'',cursor:'pointer',transitionDuration:'0.4s'}}>
                                    <input type="checkbox" checked={shipingoffice} value={shipingoffice} onChange={()=>changeshipment()} />
                                    <p style={{color:shipingoffice?`rgb(61, 139, 255)`:'',transitionDuration:'0.4s'}} className="ship-type-p"><span><TbTruckDelivery style={{color:shipingoffice?`rgb(61, 139, 255)`:''}}    className="ship-type-p-span"/></span>Office</p>
                                </div>
                                <div className="check-2" onClick={()=>changeshipment()} style={{borderColor:shipinghome?`rgb(61, 139, 255)`:'',cursor:'pointer',transitionDuration:'0.4s'}}>
                                    <input type="checkbox" checked={shipinghome} value={shipinghome} onChange={()=>changeshipment()}/>
                                    <p style={{color:shipinghome?`rgb(61, 139, 255)`:'',transitionDuration:'0.4s'}} className="ship-type-p"><span><LuPackageOpen style={{color:shipinghome?`rgb(61, 139, 255)`:''}}  className="ship-type-p-span"/></span>HOME</p>
                                </div>
                        </div>
                           
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Name<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout nameinpinpay namecheck ${String(inpname).length!==0?'blueborder':''}`} value={inpname} onChange={(e)=>setinpname(e.target.value)}  placeholder="name" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Address<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout addresscheck ${String(inpaddress).length!==0?'blueborder':''}`} value={inpaddress} onChange={(e)=>setaddress(e.target.value)} placeholder="address" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Phone Number<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input  className={`inp-in-checkout phonenuminp phonenumcheck ${Number(inpphone).length==0?'':''}`} value={inpphone} onChange={(e)=>setinpphone(e.target.value)}  placeholder="phone number" type="number" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Country<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <select className="inp-in-checkout"  type="text" value={country} onChange={(e)=>setcountry(e.target.value)}>
                            <option  className="option-country" value="India">India</option>
                            <option className="option-country"   value="Sri Lanka">Sri Lanka</option>
                            <option  className="option-country"   value="America">America</option>
                            <option  className="option-country" value="China">China</option>
                            <option className="option-country" value="Australia">Australia</option>
                         </select>

                        </div>
                    </div>
                    <div className="all-in-one">
                    <div className="name-check">
                        <p className="info-p-incheck">State<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one statecheck ${String(inpstate).length!==0?'blueborder':''}`} value={inpstate} onChange={(e)=>setinpstate(e.target.value)} placeholder="State" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">City<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one citycheck ${String(inpcity).length!==0?'blueborder':''}`} value={inpcity} onChange={(e)=>setinpcity(e.target.value)} placeholder="City" type="text" />

                        </div>
                    </div>
                    <div className="name-check">
                        <p className="info-p-incheck">Pin Code<span className="imp-chek">*</span></p>
                        <div className="chek-info-inp-div">
                         <input className={`inp-in-checkout in-all-one pincheck ${inppin.length!==0?'blueborder':''}`} value={inppin} onChange={(e)=>setinppin(e.target.value)}  placeholder="pin code" type="text" />

                        </div>
                    </div>
                   
                    </div>
                    <div className="terms-condi">
                        <input type="checkbox" checked={terms} onChange={()=>setterms(!terms)}/>
                        <p style={{color:terms?'grey':'red'}}  className="terms-condi-p">i here by accept all terms and condition applies</p>
                    </div>
                </div>
                <div className="check-out-final-pay">
                    <div className="cart-review">
                        <p className="rev-car-pay">Review Your Cart</p>
                        <div className="review-cart-in-paypage">
                            {Array.from(paymentcart).map((indicartinpay)=>
                            <div key={indicartinpay.id} className="cart-rev-1">
                                <div className="rev-cart-img" style={{backgroundImage:`url(${indicartinpay.imgurl})`}}></div>
                                <div className="rev-cart-info">
                                    <p className="rev-cart-p">{indicartinpay.name}</p>
                                    <p className="rev-cart-p">{String(indicartinpay.itemdescription).slice(0,10)+'...'}</p>
                                </div>
                                <div className="end-of-rev">
                                    <p className="rev-cart-p"><SiQiwi/>-{indicartinpay.quantity}</p>
                                    <p className="rev-cart-p p-center"><LiaRupeeSignSolid/>{indicartinpay.totalamt}</p>

                                </div>
                                </div>)}                          
                            
                        </div>
                    </div>
                    <div className="coupoun-div">
                        <p className="coupoun-div-p-infin"><RiCoupon3Fill className="coup-svg"/></p>
                        <input value={coupoun} onChange={(e)=>setcoupoun(e.target.value)} type="text" placeholder="Coupoun" className="coup-inp" />
                        <p className="coupoun-div-p-2-infin" style={{color:coupoun.length>=1&&coupoun.length<=6?`rgb(255, 61, 61)`:coupoun.includes('welcome')||coupoun.includes('Welcome')||coupoun.includes('WELCOME')?`rgb(61, 139, 255)`:`rgb(61, 139, 255)`,animation:coupoun.includes('welcome')?'upanddown 2s linear infinite':''}} onClick={()=>discountcopu(paymentsumamt)} >Aplly</p>
                    </div>
                    <div className="final-amt">    
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Subtotal</p>
                            <p className="sub-fin-cart-p-amt p-center"><LiaRupeeSignSolid/>{paymentsumamt}.00</p>
                        </div>
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Shipping</p>
                            <p className="sub-fin-cart-p-amt">$0.00</p>
                        </div>
                        <div className="sub-fin-cart">
                            <p className="sub-fin-cart-p">Discount</p>
                            <p className="sub-fin-cart-p-amt">{discountnum}%</p>
                        </div>
                        <div className=" totdiv">
                            <p className="sub-fin-cart-p total">Total</p>
                            <p className="sub-fin-cart-p-amt-tot p-center"><LiaRupeeSignSolid/>{amtafterdis}.00</p>
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

            <div className="loadin-div-for-payemnt-susscess" style={{display:dotload?'flex':'none'}}>
                <div className="load-dot-1-in-pay-suss suss-dot"></div>
                <div className="load-dot-2-in-pay-suss suss-dot"></div>
                <div className="load-dot-3-in-pay-suss suss-dot"></div>
                <div className="load-dot-4-in-pay-suss suss-dot"></div>
            </div>

            <div className="payed-noti-div" style={{display:sucessload?'flex':'none'}}>
                <div className={`pay-suss-img `} style={{backgroundImage:'url(/payment/Pay-sucess.png'}}></div>
                <div className="pay-suss-lottie-ani">
                {sucessload&&<DotLottieReact
                    src="https://lottie.host/659f2f4d-246a-416b-8aad-45796af61952/iM1uGMgos6.lottie"
                    loop
                    autoplay
                    style={{ width: '400px', height: '400px' }}
                />}
                
                </div>
                <Link to='/'><button onClick={()=>closepayedcont()} className="closebtn-payment"><div className="fromlrft-inclose"></div>Close</button></Link>
            </div>
       
                <button style={{display:sucessload?'flex':'none'}} onClick={()=>{closepayedcont(),setfooter(true)}} className=" closepaybtn"><AiFillCloseCircle className="payclose-png"/>
                </button> 
       
           
        </div>
    </div>
   
  )
}

export default Payment

