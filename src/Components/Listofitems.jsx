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

const Listofitems = ({title,pad,height,offer,arr,setarr}) => {
    let arry=Array.from(arr)
    
    const rightbtnarr=useRef()
    const [leftdisp,setleftdisp]=useState(false)
   
    const [vieweye,setvieweye]=useState(false)




    let sethrtfunc=(id)=>{
        let changeitem=arry.map((likeitem)=>likeitem.id===id?{...likeitem,like:!likeitem.like}:likeitem)
        setarr(changeitem)
    }
    
    let setcart=(id)=>{
        let changeitem=arry.map((likeitem)=>likeitem.id===id?{...likeitem,addcart:!likeitem.addcart}:likeitem)
        setarr(changeitem)
    }

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
               

            }else{
                let arrchild=entry.target.children
                Array.from(arrchild).forEach((indichild)=>{
                     indichild.style.transitionDelay = '0s'
                    indichild.classList.remove('upper')
                    
                    
                })


            }
        },{threshold:0.2}) 

        
        getitems.forEach((eleobser)=>observer.observe(eleobser)) 

        return () => {
            getitems.forEach((eleobser)=>observer.unobserve(eleobser)) 
        } 
      },[])
      



  return (
    <div className='ItemLister' style={{paddingTop:pad,height:height}}>
      <div className='Itemcontainer'  style={{padding:pad}}>
            <div className='containethead'>
                <div className='timeoff'>
                    <p className='timeoff-cont'>{title}</p>
                </div>
                <div className='viewall'>
                    <p className='viewall-btn'>View All</p>
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
                            <div key={indiitem.id} className='items hoverani offershow'>
                                <div className='golden-offer' style={{display:offer?'flex':'none'}}>New Year Offer
                                    <div className='star'>
                                        <div className='first-star'></div>
                                        <div className='follow-star'></div>
                                    </div>
                                </div>
                            <div className='imghrt'>
                                <img className='imgprod' src={indiitem.imgurl} alt="" />
                                <p className='heart' onClick={()=>sethrtfunc(indiitem.id)}>{indiitem.like?<IoIosHeart style={{animation:indiitem.like?'hrttrue 1s  cubic-bezier(.47,1.64,.41,.8)':''}}        className='heartimg red' />:<IoIosHeartEmpty className='heartimg' style={{animation:!indiitem.like?'hrtfalse 1s  cubic-bezier(.47,1.64,.41,.8)':''}} />}</p>
                                <div className='view'>
                                    <p className='eyep'><FaEye className='eyeview'/></p>
                                </div>
                            </div>
                            <div className='infoitem'>
                                <div className='price'>
                                    <p className='greener' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Now at <span className='disamt'>`<LiaRupeeSignSolid/>{indiitem.amt/50}`</span></p>
                                    <p className='acutalprice' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LiaRupeeSignSolid/>{indiitem.amt}</p>
                                </div>
                                <div className='descripdiv'>
                                    <p className='itemdes'>{String(indiitem.itemdescription).slice(0,40)+'...'}</p>
                                </div>
                                <div className='cartbtn-div'>
                                    <button className='cartbtn' onClick={()=>setcart(indiitem.id)}>{indiitem.addcart?<BsCartCheck className='addcartimg' style={{animation:indiitem.addcart?'addcart 1s  cubic-bezier(.47,1.64,.41,.8)':'addcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>:<BsCartPlus className='addcartimg' style={{animation:indiitem.addcart?'empcart 1s  cubic-bezier(.47,1.64,.41,.8)':'empcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>}</button>
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
