import  { useEffect, useState } from 'react'
import "../../../Styles/Jevelery/Jwellerynecklece.css";

import { IoIosHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const Jwellerynecklece = () => {
    useEffect(() => {
        let jwelcarthead = document.querySelector('.jwel-cart-head')
        let jwelcarthead1 = document.querySelector('.jwel-cart-head-1')
        let jwelcarthead2= document.querySelector('.jwel-cart-head-2')

        let observer=new IntersectionObserver(([entry])=>{
            if(entry.intersectionRatio>0.8){
                jwelcarthead1.classList.add('cartheadslideleft')
                jwelcarthead2.classList.add('cartheadslideright')

            }
            else{
                jwelcarthead1.classList.remove('cartheadslideleft')    
                jwelcarthead2.classList.remove('cartheadslideright')

            }
        },{threshold:0.8})

        observer.observe(jwelcarthead)

        return () => {
            observer.unobserve(jwelcarthead)
          }
    })
 const [jwelearr,setjwelearr]=useState([
        {
            id:1,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:2,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:3,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:4,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:5,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:6,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        },
        {
            id:7,
            imgurl:'https://wdtswarna.wpengine.com/wp-content/uploads/2024/11/product-8-1.jpg',
            amt:'200',
            itemdescription:'Ear stud Nose Stud',
            itemdescription2:'Ear stud Nose Stud',
            like:false,
            addcart:false
        }
    ])

  let setjewcartupdate=(id)=>{
    let getcart=jwelearr.map((indijvelcar)=>
        indijvelcar.id===id?{...indijvelcar,addcart:!indijvelcar.addcart}:indijvelcar
    )
  
    
    setjwelearr(getcart)
  }

  let setjewcarteyeupdate=(id)=>{
    let getcart=jwelearr.map((indijvelcar)=>
        indijvelcar.id===id?{...indijvelcar,like:!indijvelcar.like}:indijvelcar
    )
   
    
    setjwelearr(getcart)
  }

  return (
    <div className='jewellery-cart'>
        <div className='jewellery-cart-container'>
            <div className='jwel-cart-head'>
                <p className='jwel-cart-head-1'>ELEGANCE &nbsp;IN EVERY PIECE</p>
                <p className='jwel-cart-head-2'>Your Style, Our Collection</p>
            </div>
            <div className='jwel-cart'>
                <div className='jewel-cart-list'>
                    <div className='jewel-cart-list-items'>
                        {jwelearr.map((indijewel)=>(
                            <div key={indijewel.id} className='jewel-item'>
                            <div className='jewel-img' style={{backgroundImage:`url(${indijewel.imgurl})`}}>
                                <div className='jewele-view-items'>
                                    <p className='jewele-view'><FaEye/></p>
                                    <p className='jewele-heart' onClick={()=>setjewcarteyeupdate(indijewel.id)}>{indijewel.like?<IoIosHeart style={{color:'red',animation:indijewel.like?`hrttrue 1s cubic-bezier(.47,1.64,.41,.8)`:`hrtfalse 1s cubic-bezier(.47,1.64,.41,.8)`}}/>:<IoIosHeartEmpty style={{animation:indijewel.like?`hrtfalse 1s cubic-bezier(.47,1.64,.41,.8)`:`hrttrue 1s cubic-bezier(.47,1.64,.41,.8)`}} />}</p>
                                </div>
                                <div className='jewele-add-cart-btn-div'>
                                    <button className='jewel-add-cart-btn' onClick={()=>setjewcartupdate(indijewel.id)}>{indijewel.addcart?<BsCartCheck className='cartadd-btn-jewel' style={{animation:indijewel.addcart?`fromleft 1s cubic-bezier(.47,1.64,.41,.8)`:`fromleft 1s cubic-bezier(.47,1.64,.41,.8)`}}/>:<BsCartPlus style={{animation:indijewel.addcart?`fromright 1s cubic-bezier(.47,1.64,.41,.8)`:`fromright 1s cubic-bezier(.47,1.64,.41,.8)`}}className='cartadd-btn-jewel'/>}</button>
                                </div>

                            </div>
                            <div className='jewel-info'>
                                <p className='jewel-info-1'>{indijewel.itemdescription}</p>
                                <p className='jewel-info-2'>{indijewel.itemdescription2}</p>
                                <p className='jewel-info-3'>${indijewel.amt} - $18.00</p>
                            </div>
                        </div>))}
                    </div>
                    <div className='jewel-more-btn-div'>
                        <div className='jevwl-more-ano-div'>
                            <button className='jewel-more-btn'>View More</button>
                            <div className='jewel-more-hov'>
                                <div className='jewel-more-btn-hover'><GoArrowRight/></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Jwellerynecklece
