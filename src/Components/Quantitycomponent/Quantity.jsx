import React from 'react'
import "../../Styles/Cartpage/Cart.css";
import { useState } from 'react';

const Quantity = () => {
    const [quantanieff,setquantanimateeff]=useState(false)
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
  return (
    <>
      <div className="prod-info-incart" key={indiaddcart.id}>
        <p className="cart-hd-p-inmain-amt p-center"><LiaRupeeSignSolid/>{indiaddcart.amt}</p>
        <div className="cart-hd-p-inmain-quant"><button onClick={()=>quantityincre(indiaddcart.id,indiaddcart.quantity)} className="increbtn"><FaAngleUp className="incresvg-btn"/></button>
        <p className="total-quant">{indiaddcart.quantity}</p>
        <button  onClick={()=>quantitydecre(indiaddcart.id,indiaddcart.quantity)}className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
        <p className="cart-hd-p-final-amt p-center"><LiaRupeeSignSolid/>{indiaddcart.totalamt}</p>
    </div>
    </>
  )
}

export default Quantity
