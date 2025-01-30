import { useEffect, useRef, useState } from "react"
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
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Itemoverview = ({setlikedisp,setfooter,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,alertboxinbuy}) => {
  let {id}=useParams()
  const [timeobj,settimeobj]=useState({days:0,hours:0,minites:0,seconds:0})

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

      if (entry.intersectionRatio>0.3) {
        animateboxone.classList.add('halfup')
      }else{
        animateboxone.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.4) {
        animateboxone.classList.add('fullup')
      }else{
        animateboxone.classList.remove('fullup')

      }

    },{threshold:[0.2,0.3,0.4]})

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
      console.log(entry.intersectionRatio);
      

      if (entry.intersectionRatio>0.2) {
        animateboxtwo.classList.add('belowhalfup')
      }else{
        animateboxtwo.classList.remove('belowhalfup')

      }

      if (entry.intersectionRatio>0.3) {
        animateboxtwo.classList.add('halfup')
      }else{
        animateboxtwo.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.4) {
        animateboxtwo.classList.add('fullup')
      }else{
        animateboxtwo.classList.remove('fullup')

      }

    },{threshold:[0.2,0.3,0.4]})

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
      console.log(entry.intersectionRatio);
      

      if (entry.intersectionRatio>0.2) {
        animateboxthree.classList.add('belowhalfup')
      }else{
        animateboxthree.classList.remove('belowhalfup')

      }

      if (entry.intersectionRatio>0.3) {
        animateboxthree.classList.add('halfup')
      }else{
        animateboxthree.classList.remove('halfup')

      }

      if (entry.intersectionRatio>0.4) {
        animateboxthree.classList.add('fullup')
      }else{
        animateboxthree.classList.remove('fullup')

      }

    },{threshold:[0.2,0.3,0.4]})

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
      console.log(days,hours,minites,seconds);
      
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
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStarHalf className="star-overview"/>
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
       
            {/* <div className="scroll-view-bar">
          <div className="prod-info-in-down-bar">
            <div className="prod-img-in-down-bar"></div>
            <div className="prod-down-info">
              <p className='prod-down-info-title'>homer produnct</p>
              <p><IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStar className="star-overview"/>
                      <IoIosStarHalf className="star-overview"/></p>
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
        </div>*/}
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
                  <div className="additional-info-overview-img-one">
                    <div className="additional-info-overview-img-one-one"></div>
                    <div className="additional-info-overview-img-one-two"></div>
                    <div></div>
                  </div>
                  <div className="additional-info-overview-img-for-parent"></div>
                </div>
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
                  <div className="additional-info-overview-img-one">
                    <div className="additional-info-overview-img-one-one"></div>
                    <div className="additional-info-overview-img-one-two"></div>
                    <div></div>
                  </div>
                  <div className="additional-info-overview-img-for-parent"></div>
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
                  <div className="additional-info-overview-img-one">
                    <div className="additional-info-overview-img-one-one"></div>
                    <div className="additional-info-overview-img-one-two"></div>
                    <div></div>
                  </div>
                  <div className="additional-info-overview-img-for-parent"></div>
                </div>
              </div>
            </div>
           
           
          </div>
        </section>
        {/* <div className="for-special-design-overview">
            <div className="special-design-line">
              <div className="spaecial-top-div">
                <div className="speacial-top spcl-top-one">
                  <p>🔥 Limited Offer: 30% OFF - Ends in 2 Hours!</p>
                </div>
                <div className="speacial-top spcl-top-two">
                  <p>🏆 Best Seller: Trusted by 10,000+ Customers!</p>
                </div>
                <div className="speacial-top spcl-top-three">
                  <p>👋 Recommended for You: Products You'll Love!</p>
                </div>
                <div className="speacial-top spcl-top-four">
                  <p>❄️ Winter Collection: Stay Cozy & Stylish!</p>
                </div>
                <div className="speacial-top spcl-top-five">
                  <p>💃 Featured in Elon's Top Picks!</p>
                </div>
                <div className="speacial-top spcl-top-six">
                  <p>📦 Grab!.. your best deals here</p>
                </div>
            
              </div>
              <div className="spaecial-bottom-div">
                <div className="speacial-bottom spcl-bottom-one">
                  <p>🔒 Safe & Secure Checkout with Free Returns.</p>
                </div>
                <div className="speacial-bottom spcl-bottom-two">
                  <p>🌌 Limited Edition: Only 100 Pieces Available Worldwide!</p>
                </div>
                <div className="speacial-bottom spcl-bottom-three">
                  <p>🎉 Celebrate New Year with 10% OFF: Use Code <span style={{fontWeight:'600'}}>Welcome</span>.</p>
                </div>
                <div className="speacial-bottom spcl-bottom-four">
                  <p>🔥 Trending Product: Don’t Miss Out on This Favorite!</p>
                </div>
                <div className="speacial-bottom spcl-bottom-five">
                  <p>💳 Easy Payment Options: 0% Interest Installments Available!</p>
                </div>
                <div className="speacial-bottom spcl-bottom-six">
                  <p>🏆 Top Pick: 5,000+ Happy Customers!</p>
                </div>
                
              </div>
            </div>
        </div> */}
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