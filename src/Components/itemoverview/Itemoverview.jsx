import { useEffect, useState } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link, useParams } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { ImFirefox } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
import { PiEyesBold } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdScreenShare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import Pincodecheck from "../Pincodecheck/Pincodecheck";
import Pincodeerrorpage from "../Pincodecheck/Pincodeerrorpage";
import { MdDone } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

import { TfiLayoutLineSolid } from "react-icons/tfi";

const Itemoverview = ({setlikedisp,setfooter,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,alertboxinbuy}) => {
  let {id}=useParams()

  
  

    useEffect(() => {
      
        window.scrollTo(0,0)
        setfooter(true)

    }, [])

    const[description,setdescription]=useState(false)
    const[shipandreturn,setshipandreturn]=useState(false)
    const[returnpolicies,setreturnpolicies]=useState(false)    

    useEffect(() => {
      let desdiv=document.querySelector('.hidden-para-cont-p')

      let timer=setTimeout(() => {
        if(description){
          desdiv.classList.remove('des-par-p-noani')
          desdiv.classList.add('des-par-p')
  
        }else{
          desdiv.classList.remove('des-par-p')
          desdiv.classList.add('des-par-p-noani')
  
        }
      }, 50);
      
      return ()=>{

        clearTimeout(timer)

      }   

    }, [description])

  return (
    <div className='itemoverview-container'>

       <div className="navbar-for-itemoverview">
           <div className="div-for-nav-one">
              <div className="nav-bar-for-overview-logo">
                <p className='overview-logo'>F<ImFirefox className="fox-browser-logo"/>X <span className='logo-span-overview'>CART</span></p>
              </div>
              <div className="nav-bar-for-overview-logo-cont">
                <p className='nav-cont-logo-overview'><RiHome2Line/></p>
                <p className='nav-cont-logo-overview'><RiContactsLine/></p>
                <p className='nav-cont-logo-overview'><FaRegHeart/></p>
                <p className='nav-cont-logo-overview'><RiShoppingCartLine/></p>
              </div>
           </div>
           <div className="div-for-nav-two">
              <div className="short-nav-for-overview">
                <p className='short-nav-p'>Departments <FaChevronDown className="down-for-more-in-nav"/></p>
                  
                <p className='short-nav-p'>Stores <FaChevronDown className="down-for-more-in-nav"/></p>
          
                <p className='short-nav-p'>Trending</p>
            
                <p className='short-nav-p'>Fashion</p>
        
                <p className='short-nav-p'>Fox Offers</p>
            
                <p className='short-nav-p'>Prime Fox</p>
            
                <p className='short-nav-p'>Get Prime</p>
              </div>
           </div>
           <div className="div-for-nav-three">
              <div className="three-cont-move-in-nav">
                <p className='p-for-three-cont p-for-three-cont-one'>helloo customers here your fox</p>
              </div>
           </div>

       </div>
       <div className="main-overview-content-div">
          <div className="main-overview-content">
            <div className="main-overview-img">
              <div className="side-all-img">
                <div className="side-img"></div>
                <div className="side-img"></div>
                <div className="side-img"></div>
              </div>
              <div className="main-img">
                <div className="image-tag">

                </div>
              </div>
            </div>
            <div className="main-overview-txt">
              <div className="basic-item-info-div">
                <div className="prod-name-and-seller">
                  <p className='sale-box'>sale</p>
                  <div className="sel-prod-name">
                    <p className='seller'>homer</p>
                    <p className='prod-name'>home usage</p>
                  </div>
                  <div className="review">
                    <div className="star-rev">
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStarHalf className="star-overview"/>
                    </div>
                      <p className='review-persons'>2 reviews</p>
                      <p className='alert-to-sale'><ImFire style={{color:'orangered'}}/>12 sold on last 15 hours</p>
                  </div>
                </div>
                <div className="amount-div">
                  <p className='actual-amt'>$200</p>
                  <p className='tot-amt'>$180.00</p>
                  <p className='actual-discount'>10% discount</p>
                </div>
                <div className="item-about-note">
                  <p className='item-about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aperiam optio eligendi officia maiores nam harum quos nesciunt non impedit?</p>
                </div>
                <div className="availability-div">
                  <div className="avail-div-one">
                    <p className="avail-div-one-para">Availability : <span className='avail-div-one-para-span'><FaRegCircleDot style={{height:'100%',color:'orangered',fontSize:'13px',display:'flex',justifyContent:'center',alignItems:'center' 
                    }}/> 10 stock left</span></p>
                  </div>
                  <div className="avail-div-two">
                    <p className='hurry-up-para'>Hurryup! sales ends in</p>
                    <div className="timer-hurry-up">
                      <div className="timer-overview">
                        <p className='time'>11</p>
                        <p className='txt-time'>days</p>
                      </div>
                      <div className="timer-overview">
                        <p className='time'>1</p>
                        <p className='txt-time'>hr</p>
                      </div>
                      <div className="timer-overview">
                        <p className='time'>41</p>
                        <p className='txt-time'>min</p>
                      </div>
                      <div className="timer-overview">
                        <p className='time'>11</p>
                        <p className='txt-time'>sec</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="delivery-info-box">
                  <div className="del-box-one">
                    <p className='deliver-overview'><TbTruckDelivery className="del-box-svg"/>Estimate delivery times: <span className='side-txt-del'>3-5 days International.</span></p>
                  </div>
                  <div className="del-box-two">
                    <p className='coupon-overview'><RiDiscountPercentLine className="del-box-svg"/>Use code <span className='side-txt-del'>"WELCOME"</span> for discount 15% on your first order.</p>

                  </div>
                  <div className="del-box-three">
                    <p  className='package-overview'><LuPackageOpen className="del-box-svg"/>Free shipping & returns: <span className='side-txt-del'>On all orders over $150.</span></p>

                  </div>
                </div>
                <div className="viewed-plus-share">
                  <div className="viewed-box">
                    <p className='viewed-para'><PiEyesBold className="viewed-svg"/>20 viewed since last 24 hours</p>
                  </div>
                  <div className="share-querry">
                    <p className='quest-para'><AiOutlineQuestionCircle  className="ques-svg"/>ask question</p>
                    <p className='quest-share'><MdScreenShare  className="share-svg"/>share</p>
                  </div>
                </div>
                <div className="div-for-btn-overview">
                  <div className="quant-inp-div-overview">
                    <p>+</p>
                    <p>1</p>
                    <p>-</p>
                  </div>
                  <div className="addcart-btn-div-overview">
                    <button className="addcart-btn-overview">add cart</button>
                  </div>
                  <div className="addlike-btn-div-overview">
                    <p className='like-btn-overview'><FaRegHeart/>
                      <p className='show-to-hover'>add to like list
                        <p className='down-arr-for-hover'><FaCaretDown className="down-svg"/>
                        </p>
                      </p>
                    </p>
                  </div>
                </div>
                <Pincodecheck pinnum={pinnum} setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} pindistname={pindistname} regex={regex} setalertboxinbuy={setalertboxinbuy} setviewbox={setviewbox} idname={id}/>
                <div className="selling-place-overview">
                  <div className="selling-place">
                    <p className='pickup-detail'><MdDone className="pickup-tick"/> Pickup available at <span style={{color:'black',fontWeight:'800'}}>Erode</span>.Usually ready in 24 hours</p>
                    <p className='seller-detail'>View more seller detail</p>
                  </div>
                  <div className="selling-detail">
                    <p className='detail-para'>Sku:<span className='detail-para-span'>N/A</span></p>
                    <p className='detail-para'>Stock:<span className='detail-para-span'><FaCircleCheck style={{color:` rgb(0, 130, 26)`,display:'flex',justifyContent:'center'
                      ,alignItems:'center'
                    }}/> in stock</span></p>
                  </div>
                </div>
                <div className="safe-checkout">
                  <div className="safe-checkout-box">
                    <p className='checkout-name'>Guarantee Safe Checkout:</p>
                    <div className="payment-img">
                      <div className="img-for-payment" style={{backgroundImage:'url(https://glozin-demo.myshopify.com/cdn/shop/files/payment.png?v=1713361222&width=660)'}}></div>
                    </div>
                  </div>
                </div>
                <div className="three-hidden-cont">
                  <div className="hidden-par description-div">
                    <div className="hidden-par-head" onClick={()=>setdescription(description=>!description)}>
                      <p>Description</p>
                      <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:description?'rotate(0deg)':'rotate(90deg)',opacity:description?'0':'1'}}/></p>
                    </div>
                    <div className="hidden-para-cont" style={{display:description?'block':'none'}}>
                      <p className="hidden-para-cont-p ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                  <div className="hidden-par no-border shipping-return-div">
                  <div className="hidden-par-head">
                      <p>Shipping & Returns</p>
                      <p>+</p>
                    </div>
                    <div className="hidden-para-cont">
                      <p className="hidden-para-cont-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                  <div  className="hidden-par returnpolicies-div">
                  <div className="hidden-par-head">
                      <p>Return Policies</p>
                      <p>+</p>
                    </div>
                    <div className="hidden-para-cont">
                      <p className="hidden-para-cont-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
       </div>
              <Pincodeerrorpage alertboxinbuy={alertboxinbuy} pinnum={pinnum}/>
    </div>
  )
}

export default Itemoverview


//first nav bar with 3 container
//next main container along with all info 
// next speacial design
// next customer review 
// moving bar
//item info with img
// FAQ
//simiiar item for you