import { useEffect, useState } from "react";
import "../../Styles/Cartpage/Cart.css";
import { GiFox } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Cart =({arrofcart,setlikedisp,sumamt,setarrcart,setfooter,arr,setarr}) => {

    const [quantanieff,setquantanimateeff]=useState(false)
      
    useEffect(() => {
      
        window.scrollTo(0,0)    
    }, [])

    
    let quantityincre=(id,quanter)=>{
       
            let increquan=quanter+1
            let getmatch=Array.from(arrofcart).map((indimatch)=>indimatch.id===id?{...indimatch,quantity:increquan,totalamt:indimatch.amt*increquan}:indimatch)
           
            setarrcart(getmatch)
         let allcart=document.querySelectorAll('.cart-item-1')
       let makearr=Array.from(allcart).map((indidataset)=>{
        if(indidataset.dataset.id==id){
            let getelement=indidataset.querySelector('.prod-info-incart').lastElementChild
            let getelementinquant=indidataset.querySelector('.prod-info-incart')
                 let getquantity=getelementinquant.querySelector('.total-quant')
            
            setquantanimateeff((quantanieff)=>{
                let makeopposite=!quantanieff
                if(makeopposite){
                    getelement.style.animation='totamtani 0.4s linear'
                    getquantity.style.animation="quantanitrue 0.4s linear"
                }else{
                    getelement.style.animation='totamtanifalse 0.4s linear'
                    getquantity.style.animation="quantanifalse 0.4s linear"
                }
                return makeopposite                                  

             })
            
        }
       }
       )
       
   

           
         
    }
    let quantitydecre=(id,decquanter)=>{

        if(decquanter==1){
            return
        }else{
            let decrequan=decquanter-1
            let getmatchofdec=Array.from(arrofcart).map((indimatch)=>indimatch.id===id?{...indimatch,quantity:decrequan<=1?1:decrequan,totalamt:indimatch.totalamt<=200?200:indimatch.amt*decrequan}:indimatch)
         
            setarrcart(getmatchofdec)

            let allcart=document.querySelectorAll('.cart-item-1')
            let makearr=Array.from(allcart).map((indidataset)=>{
             if(indidataset.dataset.id==id){
                 let getelement=indidataset.querySelector('.prod-info-incart').lastElementChild
                 let getelementinquant=indidataset.querySelector('.prod-info-incart')
                 let getquantity=getelementinquant.querySelector('.total-quant')
               
                 

                 setquantanimateeff((quantanieff)=>{
                    let makeopposite=!quantanieff
                    if(makeopposite){
                        getelement.style.animation='totamtani 0.4s linear'
                        getquantity.style.animation="quantanitrue 0.4s linear"
                    }else{
                        getelement.style.animation='totamtanifalse 0.4s linear'
                        getquantity.style.animation="quantanifalse 0.4s linear"
                    }
                    return makeopposite                                  

                 })
             }
            }
            )
        }
      
            
       
    }
    let removefromcart=(id)=>{
        let getmatch=Array.from(arrofcart).filter((indimatch)=>indimatch.id!==id)
        let removefromcart=Array.from(arr).map((toremovefromcart)=>toremovefromcart.id===id?{...toremovefromcart,addcart:!toremovefromcart.addcart}:toremovefromcart)
        setarr(removefromcart)
        setarrcart(getmatch)
    }

    const [noitemcheckout,setnoitemcheckout]=useState(false)

    let noitemsincartalert=()=>{
        setnoitemcheckout(checkout=>!checkout)
        setfooter(footer=>!footer)
    }
  return (
    <div className='cart-container' style={{animation:'cartpageanimation 0.4s linear '}}>
        
      <div className="cart-div">
        <div className="cart-top-div">
            <div className="cart-logo">
                <Link to='/'><GiFox className="cart-logo-svg"/>
                </Link>
            </div>
            <div className="cart-nav">
                <div  className="underlinerel cont-shoping-hov">
                    <Link to='/' className='cont-shopi'><IoArrowBackCircleOutline className="cart-nav-font"/>Continue Shopping</Link>
                    <div className="lineunder" style={{height:'2px'}}></div>

                </div>
                <div  className="underlinerel cart-des">
                        
                    <Link  to='/'><RiHome2Line className="cart-nav-font"/></Link>
                    <div className="lineunder"></div>

                </div>
                <div className="underlinerel cart-des">
                         <Link  to='/'><RiContactsLine className="cart-nav-font"/></Link>
                         <div className="lineunder"></div>

                </div>
                <div  className="underlinerel cart-des" onClick={()=>setlikedisp(likedisp=>!likedisp)}>
                    <FaRegHeart className="cart-nav-font" />
                    <div className="lineunder"></div>
                </div>
               
               
            </div>
        </div>
        <div className="cart-content-div">
            <div className="cart-page">
                <div className="cart-items">
                    <div className="cart-item-num">
                        <p className="cart-p-1">My Shopping Bag</p>
                        <p className="cart-p-2"><span className="num-item">{Array.from(arrofcart).length} {Array.from(arrofcart).length>1?'items':'item'} </span>in your bag</p>
                    </div>
                    <div className="cart-list-ofitems">
                        <div className="full-cart">
                            <div className="cart-including-head">
                                <div className="product">
                                    <p className="cart-hd-p">Product</p>
                                </div>
                                <div className="prod-info">
                                    <p className="cart-hd-p">Price (<LiaRupeeSignSolid/>)</p>
                                    <p className="cart-hd-p" style={{paddingRight:'15px'}}>Quantity</p>
                                    <p className="cart-hd-p" style={{paddingRight:'10px'}}>Total Price</p>
                                </div>
                            </div>
                            <div className="cart-including-item-div">
                                <div className="cart-scroll">
                                
                                    {Array.from(arrofcart).length?(Array.from(arrofcart).map((indiaddcart)=>(
                                    <div  key={indiaddcart.id}  data-id={indiaddcart.id} className="cart-item-1" >
                                    <div className="product-img-info">
                                        <div className="prod-img" style={{backgroundImage:`url(${indiaddcart.imgurl})`}}></div>
                                        <div className="prod-infor">
                                            <p className="cart-hd-p-inmain">{indiaddcart.name}</p>
                                            <p className="cart-hd-p-inmain">{String(indiaddcart.itemdescription).slice(0,30)+'...'}</p>
                                        </div>
                                    </div>
                                    <div className="prod-info-incart" key={indiaddcart.id}>
                                        <p className="cart-hd-p-inmain-amt p-center"><LiaRupeeSignSolid/>{indiaddcart.amt}</p>
                                        <div className="cart-hd-p-inmain-quant"><button onClick={()=>quantityincre(indiaddcart.id,indiaddcart.quantity)} className="increbtn"><FaAngleUp className="incresvg-btn"/></button>
                                        <p className="total-quant">{indiaddcart.quantity}</p>
                                        <button  onClick={()=>quantitydecre(indiaddcart.id,indiaddcart.quantity)}className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                        <p className="cart-hd-p-final-amt p-center"><LiaRupeeSignSolid/>{indiaddcart.totalamt}</p>
                                    </div>
                                    <div className="remove-cart">
                                        <MdDeleteOutline className="remove-cart-icon" onClick={()=>removefromcart(indiaddcart.id)}/>
                                    </div>
                                </div>
                                ))):(<p  className='cart-empty-p'>An empty cart today, a full heart tomorrow. Let's shop!</p>)}

                                        
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="cart-summary-forsider">
                <div className="ordersumm">
                    <p className="ordersumm-p">Order Summary</p>
                </div>
                <div className="num-of-item-in-cart-summ">
                    <p className="num-of-item-in-cart-summ-p1">{Array.from(arrofcart).length} {Array.from(arrofcart).length>1?'items':'item'}</p>
                    <p className="num-of-item-in-cart-summ-p2 p-center"><LiaRupeeSignSolid/>{sumamt}</p>
                </div>
                <div className="num-of-item-in-cart-summ">
                    <p className="num-of-item-in-cart-summ-p1">Shipping</p>
                    <p className="num-of-item-in-cart-summ-p2">free</p>
                </div>
                <div className="num-of-item-in-cart-summ">
                    <p className="num-of-item-in-cart-summ-p1">Estimate Delivery</p>
                    <p className="num-of-item-in-cart-summ-p2">{Array.from(arrofcart).length?'4 days':'no items'}</p>
                </div>
                <div className="cart-summ-tot">
                    <p className="cart-summ-tot-p1">Total</p>
                    <p className="cart-summ-tot-p2 p-center"><LiaRupeeSignSolid/>{sumamt}</p>
                    
                </div>
                <div className="final-cart-help">
                    {Array.from(arrofcart).length?(<Link to='/proceedtopay'><button className="chekoutbtn">CheckOut</button></Link>):(<button onClick={()=>noitemsincartalert()} className="chekoutbtn">CheckOut</button>)}
                    <Link to='/'><button className="chekoutbtn">Back To Shop</button></Link>
                </div>
                <div className="box">
                    <div className="front"></div>
                    <div className="back"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
            </div>
        </div>
       

      </div>
      <div className="payed-noti" style={{display:noitemcheckout?'flex':'none'}}>

            

            <div className="payed-noti-div" style={{display:noitemcheckout?'flex':'none'}}>
                <div className={`pay-suss-img `} style={{backgroundImage:'url(/payment/oops-nocart.png',left:'-300px',top:'-250px'}}></div>
                <div className="pay-suss-lottie-ani">                </div>
                <div className="for-oops">
                    <p className='oops'>Oops!</p>
                    <p className='oops-cont'>Your Cart is Empty Today <br></br> Cant Proceed Further</p>
                </div>
            <button onClick={()=>noitemsincartalert()} className="closebtn-payment"><div className="fromlrft-inclose"></div>Close</button>
            </div>
       
                <button style={{display:noitemcheckout?'flex':'none'}} onClick={()=>noitemsincartalert()} className=" closepaybtn"><AiFillCloseCircle className="payclose-png"/>
                </button> 
       
           
        </div>
      {/* <div className="empty-cart-warn" style={{display:noitemcheckout?'flex':'none',animation:noitemcheckout?"zoomalert 0.3s linear":''}}>
        
        <button className="close-btn-for-no-cart" onClick={()=>noitemsincartalert()}><AiFillCloseCircle/></button>
        <div className="nocart-div">
            <div className="nocart-div-cont">
                <p className='nocart-div-cont-p-1'>Empty Cart</p>
                <p className='nocart-div-cont-p-2'>your cart is empty to checkout please select your need</p>
            </div>  
            <button className="nocart-div-cont-close-btn"  onClick={()=>noitemsincartalert()}>Close</button>
        </div>
      </div> */}
      
    </div>
  )
}

export default Cart
