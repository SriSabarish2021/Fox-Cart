import React, { useState } from 'react'
import '../Styles/Listofitems.css'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { useEffect } from 'react';
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";

import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Listofitems = ({/* arrayofitems, */title,pad,height,offer,arr,setarr,setviewbox,getnameinarr,setcart,sethrtfunc,setfooter,getparticularname}) => {
    let arry=Array.from(arr)

    

 
    
    const rightbtnarr=useRef()
    const [leftdisp,setleftdisp]=useState(false)
   




    
    

    const [rightbtn,setrigthbtn]=useState(false)

    const scrollerrightitems = () => {
        if (rightbtnarr.current) {

          rightbtnarr.current.scrollBy({ left: 300, behavior: 'smooth' });
          if(Math.round(rightbtnarr.current.clientWidth+rightbtnarr.current.scrollLeft)===rightbtnarr.current.scrollWidth){
            setrigthbtn(true)
            
            
          }else{
            setrigthbtn(false)
            
          }
        }
        setleftdisp(true)
       
      };

      const scrollerleftitems = () => {
        if(rightbtn){
            setrigthbtn(false)
        }
        if (rightbtnarr.current) {
          rightbtnarr.current.scrollBy({ left: -300, behavior: 'smooth' });

        }
      };


      useEffect(() => {
        let getitems=document.querySelectorAll('.item-holder')
        
        let observer = new IntersectionObserver(([entry])=>{
            
            if(entry.intersectionRatio>0.2){
                let arrchild=entry.target.children
                
                Array.from(arrchild).forEach((indichild,index)=>{
                    
                    indichild.style.transitionDelay = `${index * 0.1}s`
                    indichild.classList.add('upper')
                    
                    
                })
               

            }/* else{
                let arrchild=entry.target.children
                Array.from(arrchild).forEach((indichild)=>{
                     indichild.style.transitionDelay = '0s'
                    indichild.classList.remove('upper')
                    
                    
                })


            } */
        },{threshold:0.2}) 

        
        getitems.forEach((eleobser)=>observer.observe(eleobser)) 

        return () => {
            getitems.forEach((eleobser)=>observer.unobserve(eleobser)) 
        } 
      },[])
      



  return (
    <div className='ItemLister' style={{paddingTop:pad,height:height}}>
      <div className='Itemcontainer'  >
            <div className='containethead'>
                <div className='timeoff'>
                    <p className='timeoff-cont'>{title}</p>
                </div>
                <div className='viewall'>
                    <Link onClick={()=>setfooter(false)} style={{textDecoration:'none'}} to={`/itemviewall`}>
                    <p className='viewall-btn'>View All</p></Link>                
                </div>
            </div>
            <div className='itemsshow'>
                <div className='rightscrlbtn' style={{display:rightbtn?'none':'flex'}}>
                    <button className='scrollbtn-right' onClick={()=>scrollerrightitems()}><IoIosArrowForward className='arrowsvg'/></button>
                </div>
                <div className='leftscrlbtn' style={{display:leftdisp?'flex':'none'}}>
                    <button className='scrollbtn-left' onClick={()=>scrollerleftitems()}><IoIosArrowBack className='arrowsvg'/></button>
                </div>
                <div className='item-container'  ref={rightbtnarr}>
                    <div className='item-cont' >
                        <div className='item-holder' >
                        {arry.map((indiitem)=>(
                            indiitem.availability==0|| indiitem.availability=='nill' ||indiitem.availability==''?
                            <></>:
                            <div key={indiitem.id} className='items hoverani offershow'>
                                <div className='golden-offer' style={{display:offer?'flex':'none'}}>Easter Offer
                                    <div className='star'>
                                        <div className='first-star'></div>
                                        <div className='follow-star'></div>
                                    </div>
                                </div>
                                <Link onClick={()=>setfooter(true)} className='imghrt' style={{backgroundImage:`url('${indiitem.imgurl}')`}} to={`viewmore/${indiitem.id}`}>  <div className='img-to-lister' onClick={()=>setfooter(true)}  >
                                
                                
                            </div></Link> 
                            <p className='heart' onClick={()=>sethrtfunc(indiitem.id)}>{indiitem.like?<IoIosHeart style={{animation:indiitem.like?'hrttrue 1s  cubic-bezier(.47,1.64,.41,.8)':''}}        className='heartimg red' />:<IoIosHeartEmpty className='heartimg' style={{animation:!indiitem.like?'hrtfalse 1s  cubic-bezier(.47,1.64,.41,.8)':''}} />}</p>
                            <div className='view'>
                                <FaEye onClick={()=>getparticularname(indiitem.id)} className='eyeview'/>
                            </div>
                            <div className='infoitem-for-list-items'>
                                <div className='price'>
                                    <p className='greener' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Now at <span className='disamt'>${Number(indiitem.amt)-(Number(indiitem.amt)*Number(indiitem.discountper))/100}.00</span></p>
                                    <p className='acutalprice' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LiaRupeeSignSolid/>{indiitem.amt}</p>
                                </div>
                                <div className='descripdiv'>
                                    <p className='description-in-list-items'>{String(indiitem.itemdescription).slice(0,40)+'...'}</p>
                                </div>
                                <div className='cartbtn-div'>
                                    <button className='cartbtn' onClick={()=>setcart(indiitem.id,indiitem.quantity)}>{indiitem.addcart?<BsCartCheck className='cart-image-for-list-item addcartimg cart-image-for-list-item' style={{animation:indiitem.addcart?'addcart 1s  cubic-bezier(.47,1.64,.41,.8)':'addcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>:<BsCartPlus className=' cart-image-for-list-item addcartimg' style={{animation:indiitem.addcart?'empcart 1s  cubic-bezier(.47,1.64,.41,.8)':'empcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>}</button>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                    
                   
                    
                </div>
            </div>
      </div>
    </div>
  )
}

export default Listofitems
