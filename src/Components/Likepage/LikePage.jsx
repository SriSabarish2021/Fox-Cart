import NavforOther from "../NavforOtherPages/NavforOther"
import "../../Styles/LikePage/LikePage.css";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const LikePage = ({proceedpay,likedis,viewbox,setlikedisp,arr,setarr,commentboxshow,shareboxshow,questboxshow,sellerdetailbox}) => {
  let arrayoflike=Array.from(arr)
  let getarr=arrayoflike.filter((likeditems)=>likeditems.like)
  
  const [animateamt,setanimateamt]=useState(false)

  let removefav=(id)=>{
    let changeitem=arrayoflike.map((likeitem)=>likeitem.id===id?{...likeitem,like:!likeitem.like}:likeitem)
    setarr(changeitem)
    setanimateamt(animateamt=>!animateamt)
  }

  const [totamt,settotamt]=useState(0)

  useEffect(() => {
    let getarrforamt=arrayoflike.filter((likeditems)=>likeditems.like)
    let getamt=getarrforamt.map((indiamt)=>
    settotamt((totamt)=>{
      let newmt=indiamt.amt
      let addamt=Number(totamt)+Number(newmt)
      return addamt
    })
  )
    return () => {
      settotamt(0)
    }
  }, [arr])
  
let closeliker=(id)=>{
  if (String(id.target.id).includes('closelike')) {
    setlikedisp(false)
  }else{
    return
  }
}

  return (
    <div className={`liker ${likedis?'move':'remove'}`} id="closelike"  onClick={(id)=>closeliker(id)}>
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${proceedpay||likedis||viewbox||commentboxshow||shareboxshow||questboxshow||sellerdetailbox?'hidden':'auto'}
        }`}
        </style>
        <div  className={`like-container ${likedis?'likkescale':'nolikkescale'}`}>
          <div className='liker-top'>
            <p className='liker-top-p1'>Favorite Items</p>
            <p onClick={()=>setlikedisp(false)}  className='liker-top-p2'><MdOutlineCloseFullscreen  className='liker-top-p2-icon'/></p>
          </div>
          <div className='liked-items-div'>
            {getarr.length?(
              getarr.map((indilikeditem)=>( 
                <div key={indilikeditem.id} className='liked-items'>
                <div className='like-item-1'>
                  <div className='like-item-img' style={{backgroundImage:`url(${indilikeditem.imgurl})`}}>
                    <IoIosHeart className='like-in-like-list'/>
                  </div>
                  <div className='like-item-cont'>
                    <p className='like-item-cont-name'>{String(indilikeditem.itemdescription).slice(0,30)+'...'}</p>                    
                    {indilikeditem.commentarray[0].star==5?
                      <p className='star-in-like-page'>
                              <FaStar />
                              <FaStar  />
                              <FaStar  />
                              <FaStar  />
                              <FaStar/>
                            </p>:indilikeditem.commentarray[0].star==4?
                            <p className='star-in-like-page'>
                            <FaStar   />
                            <FaStar/>
                            <FaStar />
                            <FaStar />
                            <FaRegStar/>
                          </p>:indilikeditem.commentarray[0].star==3?
                           <p className='star-in-like-page'>
                            <FaStar  />
                            <FaStar />
                            <FaStar  />
                            <FaRegStar />
                            <FaRegStar />
                            </p>:indilikeditem.commentarray[0].star==2?
                            <p className='star-in-like-page'>
                            <FaStar   />
                            <FaStar  />
                            <FaRegStar />
                            <FaRegStar  />
                            <FaRegStar  />
                            </p>:indilikeditem.commentarray[0].star?
                           <p className='star-in-like-page'>
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar  />
                            <FaRegStar />
                            </p>:indilikeditem.commentarray[0].star?
                          <p className='star-in-like-page'>
                            <FaRegStar/>
                            <FaRegStar/>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            </p>:'none'
                          }
                    <p className='like-item-cont-price'>${indilikeditem.amt}.00</p>
                  </div>
                  <div className='like-item-remove'>
                    <IoIosCloseCircleOutline className='remove-in-like' onClick={()=>removefav(indilikeditem.id)}/>
                  </div>
                </div>
                
                       
              </div>))
            ):(<div className="nolen-like">
              <p className="empty-fav-p">Your favorite list is feeling lonely</p>
            </div>)}
            
          
           
          </div>
          <div className='final-div-in-like-page'>
            <div className='amt-tot-div'>
              <p className='subtot'>Subtotal</p>
              <p className='sub-amt' style={{animation:animateamt?`bubbleeffect 1s linear`:'bubbleeffectfal 1s linear'}}>${totamt}.00</p>
            </div>
            <div className='view-cart-btn-div'>
              <Link to='yourcart'  className="view-cart-in-like-page" onClick={()=>setlikedisp(false)}><button className="view-cart-in-like-page-btn">View Cart <span className='span-for-btn-animation'></span></button></Link>
            </div>
          </div>
         
        </div>
      </div> 
         
   
  )
}

export default LikePage
