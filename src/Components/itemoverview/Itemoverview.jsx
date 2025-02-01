import { useEffect, useRef, useState } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link, useParams } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { ImFirefox } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import { FaRegStar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoManOutline } from "react-icons/io5";

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
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Itemoverview = ({setlikedisp,setfooter,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,alertboxinbuy}) => {
  let {id}=useParams()
  const [timeobj,settimeobj]=useState({days:0,hours:0,minites:0,seconds:0})
  const [postion,setposition]=useState('50% 50%')
  let handlemove=(event)=>{
    let elementtargeting=event.currentTarget
    let viewelement=elementtargeting.getBoundingClientRect()

    let totwidht=event.clientX-viewelement.left
    let totheight=event.clientY-viewelement.top

    let offsetX=(totwidht/viewelement.width)*100
    let offsetY=(totheight/viewelement.height)*100

    setposition(`${offsetX}% ${offsetY}%`)
  }
  let handlemoveout=()=>{
    setposition(`50% 50%`)
  }
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    document.querySelector(".main-overview-img").style.transform = `translateY(${scrollTop*0.95}px) translateY(-120px)`;
});


  

  useEffect(() => {
    let contentbar=document.querySelector('.main-overview-content-div')
    let scrollbar=document.querySelector('.scroll-view-bar')
    
    let observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio<0.1) {
        scrollbar.classList.add('scroll-view-bar-animate')
        
      }else{
        scrollbar.classList.remove('scroll-view-bar-animate')

      }
    },{threshold:0.1})

    observer.observe(contentbar)
  
    return () => {
      observer.unobserve(contentbar)

    }
  })

  useEffect(() => {
    
    let boxone=document.querySelector('.cover-box-one')
    let animateboxone=document.querySelector('.additional-info-overview-one')

    let observeone=new IntersectionObserver(([entry])=>{
      

      if (entry.intersectionRatio>0.2) {
        animateboxone.classList.add('belowhalfup')
      }else{
        animateboxone.classList.remove('belowhalfup')

      }

      if (entry.intersectionRatio>0.4) {
        animateboxone.classList.add('halfup')
      }else{
        animateboxone.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.6) {
        animateboxone.classList.add('fullup')
      }else{
        animateboxone.classList.remove('fullup')

      }

    },{threshold:[0.2,0.4,0.6]})

    if (boxone) {
      observeone.observe(boxone)

    }
  
    return () => {
      observeone.unobserve(boxone)

    }
  })
  

  useEffect(() => {
    
    let boxtwo=document.querySelector('.cover-box-two')
    let animateboxtwo=document.querySelector('.additional-infofor-next')

    let observetwo=new IntersectionObserver(([entry])=>{
      

      if (entry.intersectionRatio>0.2) {
        animateboxtwo.classList.add('belowhalfup')
      }else{
        animateboxtwo.classList.remove('belowhalfup')

      }

      if (entry.intersectionRatio>0.45) {
        animateboxtwo.classList.add('halfup')
      }else{
        animateboxtwo.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.65) {
        animateboxtwo.classList.add('fullup')
      }else{
        animateboxtwo.classList.remove('fullup')

      }

    },{threshold:[0.2,0.45,0.65]})

    if (boxtwo) {
      observetwo.observe(boxtwo)

    }
  
    return () => {
      observetwo.unobserve(boxtwo)

    }
  })


  
  useEffect(() => {
    
    let boxthree=document.querySelector('.cover-box-three')
    let animateboxthree=document.querySelector('.additional-infofor-three')

    let observethree=new IntersectionObserver(([entry])=>{
      

      if (entry.intersectionRatio>0.2) {
        animateboxthree.classList.add('belowhalfup')
      }else{
        animateboxthree.classList.remove('belowhalfup')

      }

      if (entry.intersectionRatio>0.4) {
        animateboxthree.classList.add('halfup')
      }else{
        animateboxthree.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.6) {
        animateboxthree.classList.add('fullup')
      }else{
        animateboxthree.classList.remove('fullup')

      }

    },{threshold:[0.2,0.4,0.6]})

    if (boxthree) {
      observethree.observe(boxthree)

    }
  
    return () => {
      observethree.unobserve(boxthree)

    }
  })

  


  useEffect(() => {
       let enddate=new Date()
      enddate.setDate(enddate.getDate()+11)
    let gettimefunc=()=>{
      let todaydat=new Date()
      let remainningtime=enddate-todaydat

      const day=Math.floor(remainningtime/(1000*60*60*24))
      const hour=Math.floor((remainningtime % (1000 * 60 * 60 * 24)) /(1000*60*60))
      const minite=Math.floor((remainningtime % (1000 * 60 * 60))/(1000*60))
      const second=Math.floor((remainningtime % (1000 * 60))/(1000))
     
      settimeobj({days:day,hours:hour,minites:minite,seconds:second})
      
    }  

    let interval=setInterval(() => {
        gettimefunc()

    }, 1000);
      

    return () => {
      clearInterval(interval)
    }
  }, [])
  

 
  

  
  const [stocknum,setstocknum]=useState(5)

    useEffect(() => {
      
        window.scrollTo(0,0)
        setfooter(true)

    }, [])

    const[description,setdescription]=useState(false)
    const[shipandreturn,setshipandreturn]=useState(false)
    const[returnpolicies,setreturnpolicies]=useState(false)    


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
            <div className="overflow-none">
                <div className="three-cont-move-in-nav bar-cont-one">
                  <p className='p-for-three-cont p-for-three-cont-one'>Your dream deals await</p>
                </div>
                <div className="three-cont-move-in-nav  bar-cont-two">
                  <p className='p-for-three-cont p-for-three-cont-one'>Shop Smart, Live Better </p>
                  
                </div>
                <div className="three-cont-move-in-nav  bar-cont-three">
                  <p className='p-for-three-cont p-for-three-cont-one'>Quality you trust, prices you'll love</p>
                </div>
            </div>
             
           </div>

       </div>
       <div className="main-overview-content-div">
          <div className="main-overview-content">
            <div className="main-overview-img">
              <div className="sticky-img-div">
                <div className="side-all-img">
                  <div className="side-img side-img-one"></div>
                  <div className="side-img side-img-two"></div>
                  <div className="side-img side-img-three"></div>
                </div>
                <div className="main-img">
                  <div className="image-tag">

                  </div>
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
                      <FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStarHalfAlt className="star-overview"/>
                    </div>
                      <p className='review-persons'>2 reviews</p>
                      <p className='alert-to-sale'><ImFire style={{color:'orangered',fontSize:'15px'}}/>12 sold on last 15 hours</p>
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
                    <p className="avail-div-one-para">Availability : <span style={{animation:stocknum<10?'availabilityanimate 2s linear infinite':''}} className='avail-div-one-para-span'><FaRegCircleDot style={{height:'100%',color:stocknum>=11&&stocknum<=20?`rgb(227, 144, 0)`:stocknum>=21&&stocknum<=30?`rgb(0, 152, 152)`:stocknum>=31?`rgb(28, 165, 0)`:`rgb(255, 0, 0)`,fontSize:'13px',display:'flex',justifyContent:'center',alignItems:'center'
                    }}/> {stocknum} stock left</span></p>
                  </div>
                  <div className="avail-div-two">
                    <p className='hurry-up-para'>Rush now! Offers expire soon</p>
                    <div className="timer-hurry-up">
                      <div className="timer-overview">
                      <div className="time-div" style={{overflow:'hidden'}}>
                        <p className='time'>{timeobj.days}</p>
                      </div>
                        <p className='txt-time'>days</p>
                      </div>
                      <div className="timer-overview">
                      <div className="time-div" style={{overflow:'hidden'}}>
                        <p className='time'>{timeobj.hours}</p>
                        </div>
                        <p className='txt-time'>hr</p>
                      </div>
                      <div className="timer-overview">
                      <div className="time-div" style={{overflow:'hidden'}}>
                        <p className='time' >{timeobj.minites}</p>
                      </div>
                        <p className='txt-time'>min</p>
                      </div>
                      <div className="timer-overview">
                        <div className="time-div" style={{overflow:'hidden'}}>
                        <p className='time' style={{animation:'timechange 1s linear infinite'}}>{timeobj.seconds}</p>

                        </div>
                        <p className='txt-time'>sec</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="delivery-info-box">
                  <div className="del-box-one">
                    <p className='deliver-overview'><TbTruckDelivery style={{color:`rgb(255, 104, 109)`}} className="del-box-svg"/>Estimate delivery time: <span className='side-txt-del'>3-5 days across India.</span></p>
                  </div>
                  <div className="del-box-two">
                    <p className='coupon-overview'><RiDiscountPercentLine style={{color:`rgb(7, 166, 177)`}} className="del-box-svg"/>Use code <span className='side-txt-del'>"WELCOME"</span> for discount 10% on your first order.</p>

                  </div>
                  <div className="del-box-three">
                    <p  className='package-overview'><LuPackageOpen style={{color:`rgb(122, 77, 0)`}} className="del-box-svg"/>Free shipping & returns: <span className='side-txt-del'>On all orders over $150.</span></p>

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
                    <FaAngleUp className="incre-quantin-overview"/>
                    <p className='quant-num-overview'>1</p>
                    <FaAngleDown className="decre-quantin-overview"/>
                  </div>
                  <div className="addcart-btn-div-overview">
                    <button className="addcart-btn-overview">add cart
                      <div className="cross-full-overview-cart-btn"></div>
                    </button>
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
                    <p className='pickup-detail'><MdDone className="pickup-tick"/> Pickup available at <span style={{color:'black',fontWeight:'800'}}>Chennai</span>.Usually ready in 24 hours</p>
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
                  <div className="hidden-par description-div" style={{paddingBottom:description?'17px':'3px'}}>
                    <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setdescription(description=>!description)}>
                      <p>Description</p>
                      <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:description?'rotate(0deg)':'rotate(90deg)',opacity:description?'0':'1'}}/></p>
                    </div>
                    <div className={`hidden-para-cont ${description?'shower':''}`} >
                      <p className="hidden-para-cont-p "  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                  <div className="hidden-par no-border shipping-return-div" style={{paddingBottom:shipandreturn?'17px':'3px'}}>
                  <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setshipandreturn(shipandreturn=>!shipandreturn)}>
                      <p>Shipping & Returns</p>
                      <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:shipandreturn?'rotate(0deg)':'rotate(90deg)',opacity:shipandreturn?'0':'1'}}/></p>
                    </div>
                    <div className={`hidden-para-cont ${shipandreturn?'shower':''}`} >
                      <p className="hidden-para-cont-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                  <div  className="hidden-par returnpolicies-div" style={{paddingBottom:returnpolicies?'17px':'3px'}}>
                  <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setreturnpolicies(returnpolicies=>!returnpolicies)}>
                      <p>Return Policies</p>
                      <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:returnpolicies?'rotate(0deg)':'rotate(90deg)',opacity:returnpolicies?'0':'1'}}/></p>
                    </div>
                    <div className={`hidden-para-cont ${returnpolicies?'shower':''}`}>
                      <p className="hidden-para-cont-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa dolorem repudiandae dolores ratione blanditiis quam reprehenderit rem fuga nisi sapiente expedita iste, magni, laudantium voluptatum ea eligendi amet quisquam voluptate delectus eius illum soluta dolor. Autem natus, aliquid esse tempora sit veniam asperiores! Consequatur quo sapiente explicabo obcaecati similique laboriosam dolores iure, tenetur quam doloremque deserunt modi ipsum aut rem numquam ratione? Quam praesentium voluptatibus impedit id consequatur, temporibus nemo repudiandae et eum, nihil quo libero exercitationem debitis. Vitae accusamus ex sit odio! Dolore nostrum, libero, corporis veniam ratione assumenda ab maiores cupiditate expedita culpa, rerum distinctio doloribus quae?</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
          
          <Pincodeerrorpage alertboxinbuy={alertboxinbuy} pinnum={pinnum}/>

       </div>
       
         <div className="scroll-view-bar">
          <div className="prod-info-in-down-bar">
            <div className="prod-img-in-down-bar"></div>
            <div className="prod-down-info">
              <p className='prod-down-info-title'>homer produnct</p>
              <p><FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStar className="star-overview"/>
                      <FaStarHalfAlt className="star-overview"/></p>
            </div>
          </div>
          <div className="prod-down-bar-buttons">
                <div className="addcart-btn-div-overview-down">
                  <button className="add-cart-btn-in-down" style={{border:`1px solid rgb(70, 70, 70)`,fontWeight:'400'}}>add cart
                    <div className="cross-full-overview-cart-btn"></div>
                  </button>
                  </div>
                <div className="addlike-btn-div-overview-down">
                    <p className='like-btn-overview'><FaRegHeart/>

                    </p>
                </div>
          </div>
        </div>
        <section className='addition-overview-info'>
          <div className="additional-overview-info-div">
            <div className="cover-box-one">
              <div className="additional-info-overview-one">
                <div className="additional-info-overview-one-cont">
                  <div className="additional-info-overview-cont-one">
                    <p className='additional-info-para qual'>Quality Assured</p>
                    <div className="main-info-additional">
                      <p className='additional-info-para head-cont'>provide a <span className='head-cont-span'>Long Life</span></p>
                      <p className='sub-p-additional-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae.</p>
                    </div>
                  
                    <div className='additional-info-para additional-info-second-div'>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Affordable Price</p>
                          <p className='part-one-subtxt-additional'>Offering competitive rates that make quality accessible to all.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-two"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Clear Legality</p>
                          <p className='part-one-subtxt-additional'>Ensuring transparent and compliant legal processes.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-three"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Experienced Agents</p>
                          <p className='part-one-subtxt-additional'>Guided by professionals with expertise in the industry.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="additional-info-overview-one-img">
                  <div className="additional-info-overview-img-one"  >
                    <div className="additional-info-overview-img-one-one"  ></div>
                    <div className="additional-info-overview-img-one-two"  ></div>
                    <div></div>
                  </div>
                </div>
                <div onMouseMove={handlemove} onMouseLeave={handlemoveout}  style={{backgroundPosition:postion}}  className="additional-info-overview-img-for-parent"></div>

              </div>

            </div>

            <div className="cover-box-two">
              <div className="additional-infofor-next">
                <div className="additional-info-overview-one-cont">
                  <div className="additional-info-overview-cont-one">
                    <p className='additional-info-para qual'>Quality Assured</p>
                    <div className="main-info-additional">
                      <p className='additional-info-para head-cont'>provide a <span className='head-cont-span'>Long Life</span></p>
                      <p className='sub-p-additional-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae.</p>
                    </div>
                  
                    <div className='additional-info-para additional-info-second-div'>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Affordable Price</p>
                          <p className='part-one-subtxt-additional'>Offering competitive rates that make quality accessible to all.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-two"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Clear Legality</p>
                          <p className='part-one-subtxt-additional'>Ensuring transparent and compliant legal processes.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-three"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Experienced Agents</p>
                          <p className='part-one-subtxt-additional'>Guided by professionals with expertise in the industry.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="additional-info-overview-one-img">
                  <div className="additional-info-overview-img-one" >
                    <div className="additional-info-overview-img-one-one" ></div>
                    <div className="additional-info-overview-img-one-two"   ></div>
                    <div></div>
                  </div>
                  <div className="additional-info-overview-img-for-parent"  onMouseMove={handlemove} onMouseLeave={handlemoveout}  style={{backgroundPosition:postion}} ></div>
                </div>
              </div>
            </div>

            <div className="cover-box-three">
              <div className="additional-infofor-three">
                <div className="additional-info-overview-one-cont">
                  <div className="additional-info-overview-cont-one">
                    <p className='additional-info-para qual'>Quality Assured</p>
                    <div className="main-info-additional">
                      <p className='additional-info-para head-cont'>provide a <span className='head-cont-span'>Long Life</span></p>
                      <p className='sub-p-additional-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae.</p>
                    </div>
                  
                    <div className='additional-info-para additional-info-second-div'>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Affordable Price</p>
                          <p className='part-one-subtxt-additional'>Offering competitive rates that make quality accessible to all.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-two"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Clear Legality</p>
                          <p className='part-one-subtxt-additional'>Ensuring transparent and compliant legal processes.
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-three"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional'>Experienced Agents</p>
                          <p className='part-one-subtxt-additional'>Guided by professionals with expertise in the industry.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="additional-info-overview-one-img">
                  <div className="additional-info-overview-img-one"   >
                    <div className="additional-info-overview-img-one-one"  ></div>
                    <div className="additional-info-overview-img-one-two"  ></div>
                    <div></div>
                  </div>
                  <div className="additional-info-overview-img-for-parent"  onMouseMove={()=>handlemove()} onMouseLeave={()=>handlemoveout()}  style={{backgroundPosition:postion}} ></div>
                </div>
              </div>
            </div>
           
           
          </div>
        </section>
        <section className='customer-review-section'>
          <div className="div-for-review">
            <div className="review-head-div">
              <p className='review-head'>Customer Review</p>
            </div>
            <div className="review-main-box">
              <div className="review-star-box">
                <p className='review-star'>
                  <span className='star-span-for-review'>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                  </span>
                  <span>5.00 out of 5</span>
                </p>
                <p   className='star-span-basedon'>Based on 4 Reviews</p>
              </div>
              <div className="review-line-box">
                <div className="amount-of-review">
                  <span className='star-for-analyze'>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                  </span>
                  <div className="analyze-line-for-review">
                    <div className="follow-analyses-line"></div>
                  </div>
                  <p className='number-based-on-analyses'>2</p>
                </div>
                <div className="amount-of-review">
                  <span className='star-for-analyze'>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                  </span>
                  <div className="analyze-line-for-review">
                    <div className="follow-analyses-line"></div>
                  </div>
                  <p className='number-based-on-analyses'>2</p>
                </div>
                <div className="amount-of-review">
                  <span className='star-for-analyze'>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                  </span>
                  <div className="analyze-line-for-review">
                    <div className="follow-analyses-line"></div>
                  </div>
                  <p className='number-based-on-analyses'>2</p>
                </div>
                <div className="amount-of-review">
                  <span className='star-for-analyze'>
                    <FaStar  className="star-overview"/>
                    <FaStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                  </span>
                  <div className="analyze-line-for-review">
                    <div className="follow-analyses-line"></div>
                  </div>
                  <p className='number-based-on-analyses'>2</p>
                </div>
                <div className="amount-of-review">
                  <span className='star-for-analyze'>
                    <FaStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                    <FaRegStar  className="star-overview"/>
                  </span>
                  <div className="analyze-line-for-review">
                    <div className="follow-analyses-line"></div>
                  </div>
                  <p className='number-based-on-analyses'>2</p>
                </div>
                
              </div>
              <div className="review-written-box-btn">
                <button className="write-rev-btn">Write a Review</button>
              </div>
            </div>
          </div>
          <div className="custome-commment-all-div">
            <div className="customer-comment">
              <div className="customer-comment-head">
                <div className="customer-review-satr-div">
                  <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'20px'}} className="star-overview"/>
                </div>
                <div className="customer-review-date">
                  <p className='customer-review-date-para'>17/12/22</p>
                </div>
              </div>
              <div className="customer-review-profil">
                <div className="customer-review-profile-img"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"60",height:"60",viewBox:"0 0 60 60", fill:"none"}} ><rect style={{width:"60",height:"60",rx:"30" ,fill:"#F5F5F5"}} /><path d="M43.0207 40.2512C35.7676 33.1819 24.232 33.1819 16.9789 40.2512C16.7452 40.4858 16.7376 40.8718 16.9714 41.1065C17.2051 41.3411 17.5821 41.3487 17.8158 41.1216C24.6015 34.514 35.3906 34.514 42.1763 41.1216C42.4175 41.3562 42.802 41.3487 43.0282 41.1065C43.262 40.8643 43.2544 40.4858 43.0207 40.2512Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /><path d="M30.0007 32.5322C33.9967 32.5322 37.2387 29.2776 37.2387 25.2661C37.2387 21.2546 33.9967 18 30.0007 18C26.0047 18 22.7627 21.2546 22.7627 25.2661C22.7702 29.2776 26.0047 32.5246 30.0007 32.5322ZM30.0007 19.211C33.3332 19.211 36.0324 21.9207 36.0324 25.2661C36.0324 28.6115 33.3332 31.3211 30.0007 31.3211C26.6682 31.3211 23.969 28.6115 23.969 25.2661C23.9766 21.9207 26.6682 19.2186 30.0007 19.211Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /></svg></div>
                <div className="customer-review-profile-name">
                  <p className='customer-name-p'>alexander the great</p>
                </div>             
              </div>
              <div className="custome-review-content">
                <div className="custome-review-content-title">
                  <p>This is a good Product</p>
                </div>
                <div className="custome-review-content-main">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa excepturi quos itaque accusamus architecto alias magnam doloribus!</p>
                </div>
                <div className="custome-review-content-img">
                  <div className="rev-customer-img-one"></div>
                  <div className="rev-customer-img-one"></div>
                </div>
              </div>
            </div>
            <div className="customer-comment">
              <div className="customer-comment-head">
                <div className="customer-review-satr-div">
                  <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'20px'}} className="star-overview"/>
                </div>
                <div className="customer-review-date">
                  <p className='customer-review-date-para'>17/12/22</p>
                </div>
              </div>
              <div className="customer-review-profil">
                <div className="customer-review-profile-img"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"60",height:"60",viewBox:"0 0 60 60", fill:"none"}} ><rect style={{width:"60",height:"60",rx:"30" ,fill:"#F5F5F5"}} /><path d="M43.0207 40.2512C35.7676 33.1819 24.232 33.1819 16.9789 40.2512C16.7452 40.4858 16.7376 40.8718 16.9714 41.1065C17.2051 41.3411 17.5821 41.3487 17.8158 41.1216C24.6015 34.514 35.3906 34.514 42.1763 41.1216C42.4175 41.3562 42.802 41.3487 43.0282 41.1065C43.262 40.8643 43.2544 40.4858 43.0207 40.2512Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /><path d="M30.0007 32.5322C33.9967 32.5322 37.2387 29.2776 37.2387 25.2661C37.2387 21.2546 33.9967 18 30.0007 18C26.0047 18 22.7627 21.2546 22.7627 25.2661C22.7702 29.2776 26.0047 32.5246 30.0007 32.5322ZM30.0007 19.211C33.3332 19.211 36.0324 21.9207 36.0324 25.2661C36.0324 28.6115 33.3332 31.3211 30.0007 31.3211C26.6682 31.3211 23.969 28.6115 23.969 25.2661C23.9766 21.9207 26.6682 19.2186 30.0007 19.211Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /></svg></div>
                <div className="customer-review-profile-name">
                  <p className='customer-name-p'>alexander the great</p>
                </div>             
              </div>
              <div className="custome-review-content">
                <div className="custome-review-content-title">
                  <p>This is a good Product</p>
                </div>
                <div className="custome-review-content-main">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa excepturi quos itaque accusamus architecto alias magnam doloribus!</p>
                </div>
                <div className="custome-review-content-img">
                  <div className="rev-customer-img-one"></div>
                  <div className="rev-customer-img-one"></div>
                </div>
              </div>
            </div>
            <div className="customer-comment">
              <div className="customer-comment-head">
                <div className="customer-review-satr-div">
                  <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                  <FaStar style={{fontSize:'20px'}} className="star-overview"/>
                </div>
                <div className="customer-review-date">
                  <p className='customer-review-date-para'>17/12/22</p>
                </div>
              </div>
              <div className="customer-review-profil">
                <div className="customer-review-profile-img"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"60",height:"60",viewBox:"0 0 60 60", fill:"none"}} ><rect style={{width:"60",height:"60",rx:"30" ,fill:"#F5F5F5"}} /><path d="M43.0207 40.2512C35.7676 33.1819 24.232 33.1819 16.9789 40.2512C16.7452 40.4858 16.7376 40.8718 16.9714 41.1065C17.2051 41.3411 17.5821 41.3487 17.8158 41.1216C24.6015 34.514 35.3906 34.514 42.1763 41.1216C42.4175 41.3562 42.802 41.3487 43.0282 41.1065C43.262 40.8643 43.2544 40.4858 43.0207 40.2512Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /><path d="M30.0007 32.5322C33.9967 32.5322 37.2387 29.2776 37.2387 25.2661C37.2387 21.2546 33.9967 18 30.0007 18C26.0047 18 22.7627 21.2546 22.7627 25.2661C22.7702 29.2776 26.0047 32.5246 30.0007 32.5322ZM30.0007 19.211C33.3332 19.211 36.0324 21.9207 36.0324 25.2661C36.0324 28.6115 33.3332 31.3211 30.0007 31.3211C26.6682 31.3211 23.969 28.6115 23.969 25.2661C23.9766 21.9207 26.6682 19.2186 30.0007 19.211Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /></svg></div>
                <div className="customer-review-profile-name">
                  <p className='customer-name-p'>alexander the great</p>
                </div>             
              </div>
              <div className="custome-review-content">
                <div className="custome-review-content-title">
                  <p>This is a good Product</p>
                </div>
                <div className="custome-review-content-main">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa excepturi quos itaque accusamus architecto alias magnam doloribus!</p>
                </div>
                <div className="custome-review-content-img">
                  <div className="rev-customer-img-one"></div>
                  <div className="rev-customer-img-one"></div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section className='for-speacial-design'>
          <div className="for-special-design-head">
            <p>More Related Product</p>
          </div>
          <div className="for-special-design-overview">
            <div className="special-design-line">
              <div className="spaecial-top-div">
                <div className="speacial-top spcl-top-one">
                </div>
                <div className="speacial-top spcl-top-two">
                </div>
                <div className="speacial-top spcl-top-three">
                </div>
                <div className="speacial-top spcl-top-four">
                </div>
                <div className="speacial-top spcl-top-five">
                </div>
                <div className="speacial-top spcl-top-six">
                </div>
            
              </div>
              <div className="spaecial-bottom-div">
                <div className="speacial-bottom spcl-bottom-one">
                </div>
                <div className="speacial-bottom spcl-bottom-two">
                </div>
                <div className="speacial-bottom spcl-bottom-three">
                 
                </div>
                <div className="speacial-bottom spcl-bottom-four">
                 
                </div>
                <div className="speacial-bottom spcl-bottom-five">
                  
                </div>
                <div className="speacial-bottom spcl-bottom-six">
                  
                </div>
                
              </div>
              
            </div>
            <div className="line-btn-div">
                <button className="line-btn">Click to See</button>
              </div>
          </div> 
          
        </section>
      
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