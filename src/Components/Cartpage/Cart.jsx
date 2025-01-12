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

const Cart = ({arrofcart,setlikedisp,setarrcart,setfooter,arr,setarr}) => {
    const [sumamt,setsumamt]=useState(0)

    

    useEffect(() => {
      
        Array.from(arrofcart).forEach((indiarramt)=>
            setsumamt((curamt)=>{
                let curentamt=indiarramt.totalamt
                let totamt=Number(curamt)+Number(curentamt)
                console.log(totamt);
                return totamt
            })
        )

        return () =>{
            setsumamt(0)
        }

      
    }, [arrofcart])
    
    
   

   
    
    useEffect(() => {
      
        window.scrollTo(0,0)

    
    
    }, [])

    
    let quantityincre=(id,quanter)=>{
       
            let increquan=quanter+1
            let getmatch=Array.from(arrofcart).map((indimatch)=>indimatch.id===id?{...indimatch,quantity:increquan,totalamt:indimatch.amt*increquan}:indimatch)
            let realarr=Array.from(arr).map((realtomap)=>realtomap.id===id?{...realtomap,quantity:increquan,totalamt:realtomap.amt*increquan}:realtomap)
            setarr(realarr)
            setarrcart(getmatch)
      
        
    }
    let quantitydecre=(id,decquanter)=>{
      
            let decrequan=decquanter-1
            let getmatch=Array.from(arrofcart).map((indimatch)=>indimatch.id===id?{...indimatch,quantity:decrequan<=1?1:decrequan,totalamt:indimatch.totalamt<=200?200:indimatch.amt*decrequan}:indimatch)
            let realarrmin=Array.from(arr).map((realtomapmin)=>realtomapmin.id===id?{...realtomapmin,quantity:realtomapmin,totalamt:realtomapmin.amt*realtomapmin}:realtomapmin)
            setarr(realarrmin)
            setarrcart(getmatch)
            
    
       
    }
    let removefromcart=(id)=>{
        let getmatch=Array.from(arrofcart).filter((indimatch)=>indimatch.id!==id)
        let realarrdel=Array.from(arr).filter((realtomapdel)=>realtomapdel.id!==id)
        setarr(realarrdel)
        setarrcart(getmatch)
    }

    const [noitemcheckout,setnoitemcheckout]=useState(false)

    let noitemsincartalert=()=>{
        setnoitemcheckout(checkout=>!checkout)
        setfooter(footer=>!footer)
    }
  return (
    <div className='cart-container' >
        <style>
            {
                 `html{
                    overflow-x: hidden;
                    overflow-y:${noitemcheckout?'hidden':'auto'}
                }
                `
             
            }
        </style>
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
                <div  className="underlinerel cart-des">
                    <FaRegHeart className="cart-nav-font" onClick={()=>setlikedisp(likedisp=>!likedisp)}/>
                    <div className="lineunder"></div>
                </div>
               
               
            </div>
        </div>
        <div className="cart-content-div">
            <div className="cart-page">
                <div className="cart-items">
                    <div className="cart-item-num">
                        <p className="cart-p-1">My Shopping Bag</p>
                        <p className="cart-p-2"><span className="num-item">{arrofcart.length} item </span>in your bag</p>
                    </div>
                    <div className="cart-list-ofitems">
                        <div className="full-cart">
                            <div className="cart-including-head">
                                <div className="product">
                                    <p className="cart-hd-p">Product</p>
                                </div>
                                <div className="prod-info">
                                    <p className="cart-hd-p">Price</p>
                                    <p className="cart-hd-p">Quantity</p>
                                    <p className="cart-hd-p">Total Price</p>
                                </div>
                            </div>
                            <div className="cart-including-item-div">
                                <div className="cart-scroll">
                                    {arrofcart.length?(arrofcart.map((indiaddcart)=>(
                                    <div  key={indiaddcart.id} className="cart-item-1">
                                    <div className="product-img-info">
                                        <div className="prod-img" style={{backgroundImage:`url(${indiaddcart.imgurl})`}}></div>
                                        <div className="prod-infor">
                                            <p className="cart-hd-p-inmain">{indiaddcart.name}</p>
                                            <p className="cart-hd-p-inmain">{String(indiaddcart.itemdescription).slice(0,30)+'...'}</p>
                                        </div>
                                    </div>
                                    <div className="prod-info-incart" key={indiaddcart.id}>
                                        <p className="cart-hd-p-inmain-amt">${indiaddcart.amt}</p>
                                        <div className="cart-hd-p-inmain-quant"><button onClick={()=>quantityincre(indiaddcart.id,indiaddcart.quantity)} className="increbtn"><FaAngleUp className="incresvg-btn"/></button><span className="total-quant">{indiaddcart.quantity}</span><button  onClick={()=>quantitydecre(indiaddcart.id,indiaddcart.quantity)}className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                        <p className="cart-hd-p-final-amt">${indiaddcart.totalamt}</p>
                                    </div>
                                    <div className="remove-cart">
                                        <MdDeleteOutline className="remove-cart-icon" onClick={(id)=>removefromcart(indiaddcart.id)}/>
                                    </div>
                                </div>
                                ))):(<p className='cart-empty-p'>An empty cart today, a full heart tomorrow. Let's shop!</p>)}
                               
                                    
                                    
                                    
                                    
                                    
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
                    <p className="num-of-item-in-cart-summ-p1">{arrofcart.length} items</p>
                    <p className="num-of-item-in-cart-summ-p2">${sumamt}</p>
                </div>
                <div className="num-of-item-in-cart-summ">
                    <p className="num-of-item-in-cart-summ-p1">Shipping</p>
                    <p className="num-of-item-in-cart-summ-p2">free</p>
                </div>
                <div className="num-of-item-in-cart-summ">
                    <p className="num-of-item-in-cart-summ-p1">Estimate Delivery</p>
                    <p className="num-of-item-in-cart-summ-p2">{arrofcart.length?'4 days':'no items'}</p>
                </div>
                <div className="cart-summ-tot">
                    <p className="cart-summ-tot-p1">Total</p>
                    <p className="cart-summ-tot-p2">${sumamt}</p>
                    
                </div>
                <div className="final-cart-help">
                    {arrofcart.length?(<Link to='proceedtopay'><button className="chekoutbtn">CheckOut</button></Link>):(<button onClick={()=>noitemsincartalert()} className="chekoutbtn">CheckOut</button>)}
                    <Link to='/'><button className="chekoutbtn">Back To Shop</button></Link>
                </div>
            </div>
        </div>
       

      </div>
      
      <div className="empty-cart-warn" style={{display:noitemcheckout?'flex':'none',animation:noitemcheckout?"zoomalert 0.3s linear":''}}>
        
        <button className="close-btn-for-no-cart" onClick={()=>noitemsincartalert()}><AiFillCloseCircle/></button>
        <div className="nocart-div">
            <div className="nocart-div-cont">
                <p className='nocart-div-cont-p-1'>Empty Cart</p>
                <p className='nocart-div-cont-p-2'>your cart is empty to checkout please select your need</p>
            </div>  
            <button className="nocart-div-cont-close-btn"  onClick={()=>noitemsincartalert()}>Close</button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
