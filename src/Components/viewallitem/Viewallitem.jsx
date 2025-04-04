import "../../Styles/Viewallitem/Viewallitem.css";
import { PiLineVertical } from "react-icons/pi";
import { HiBars4 } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiBars2 } from "react-icons/hi2";
import "../../Styles/Itemoverview/Itemoverview.css"
import '../../Styles/Listofitems.css'

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GiFox } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiApps2AiLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { GiSwordsPower } from "react-icons/gi";
import { MdOutlineStorefront } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

import { useState,useEffect } from "react";
import { useRef } from "react";


const Viewallitem = ({title,pad,height,offer,arr,setarr,setviewbox,getnameinarr,setcart,sethrtfunc,setfooter,getparticularname}) => {

  const [changeimgurl,setchangeimgurl]=useState([])
  let refforanaimation=useRef(null)
  useEffect(() => {
    window.scrollTo(0,0)  
    setchangeimgurl((olderimage)=>{
      let older=olderimage
      let newerimages=Array.from(arr).map((indiarray)=>{
       
        return indiarray.imgurl
        
      })
      let newarrayofimage=[...older,...newerimages]
      return newarrayofimage
    })
    return () => {
      setchangeimgurl([])
    }
    
  }, [])

  
  



  let changeingimage=(urlofimage,index)=>{


    let newarrayofimage=changeimgurl.map((currimage,indises)=>indises==index?urlofimage:currimage)
    setchangeimgurl(newarrayofimage)
    refforanaimation.current.target.style.animation='imagechangeinlistmain 1s linear'

  }

  let heightref=useRef(null)
  useEffect(() => {
    let getelementheight=document.querySelector('.viewall-item-header')

    if (getelementheight) {
      let  boundingrectheight=getelementheight.getBoundingClientRect().height
      let totalheight=Number(window.innerHeight)-Number(boundingrectheight)
      let  valueofheight=getelementheight.getBoundingClientRect().height
      heightref.current.style.height=`${Number(totalheight)}px`
      heightref.current.style.top=`${Number(valueofheight)}px`
    }
    return () => {
      heightref.current=null
    }
  }, [])





 const [sortby,setsortby]=useState('')
const [searchvalviewall,setsearchvalviewall]=useState('')
  

  const[department,setdepartment]=useState(false)
  const[pricefilt,setpricefilt]=useState(false)
  const[brandfilt,setbrandfilt]=useState(false)
  const[arrivaltime,setarrivaltime]=useState(false)
  const[availability,setavailability]=useState(false)
  const[specialoffer,setspecialoffer]=useState(false)
  const[rating,setrating]=useState(false)
  const[morereach,setmorereach]=useState(false)


  const[arrivalchoose,setarrivalchoose]=useState('')
  const[pricechoose,setpricechoose]=useState('')
  const[brandchoose,setbrandchoose]=useState('')
  const[availablechoose,setavailablechoose]=useState('')
  const[ratingchoose,setratingchoose]=useState('')
  const[recentsearch,setrecentsearch]=useState('')


  const[gridnum,setgridnum]=useState(4)

  



  return (
    <div className="view-all-item-container">
      <div className="viewall-item-header">
        <div className="viewall-item-navbar">
          <div className="logo-icon-in-viewall">
            <div className="logo-icon-and-address">
                  <Link to='/' style={{textDecoration:'none',color:` #002612`}}>
                    <GiFox className="logo-icon-viewall"/>
                  </Link>
                  <div className="address-bar-in-view-all">
                    <p className='address-icon-viewall'><FaMapLocationDot className="adress-icon-locate"/></p>
                    <div className="adress-icon-viewall-content">
                      <p className='adress-icon-viewall-p-one'>your delivery partner</p>
                      <p className='adress-icon-viewall-p-two'>make your own delivery</p>
                    </div>
                    <p className='down-toaddress-icon'><FaChevronDown/></p>
                    <span className='address-bar-animation-span-viewall'></span>
                  </div>
            </div>
            <div className="search-bar-for-viewall">
              <div className="input-bar-and-searchicon-viewall">
                <input placeholder="Search Your Needy's" className="searchbar-in-viewall" type="text" value={searchvalviewall} onChange={(e)=>setsearchvalviewall(e.target.value)}></input>
                <p className='search-icon-viewall'>
                  <span className='search-icon-hover-ani-viewall'></span><FaSearch style={{zIndex:'1'}} /></p>
              </div>
            
            </div>
          </div>
          <div className="view-all-item-icon">
            <p className='viewall-nav-side-icon'><RiHome2Line/></p>
            <p className='viewall-nav-side-icon'><RiShoppingCartLine/></p>
            <p className='viewall-nav-side-icon'><FaRegHeart/></p>
          </div>
          
        </div>
        <div className="viewall-item-sub-navbar">
          <div className="subnav-baar-for-viewmore-one">
            <p className='subnav-baar-one-p subnav-baar-one-p-one'><RiApps2AiLine className="department-viewall-icon"/>Department<FaChevronDown className="department-arrow-viewall-icon"/></p>
            <p className='subnav-baar-one-p subnav-baar-one-p-two'><RiCustomerService2Line className="department-viewall-icon"/>Services<FaChevronDown className="department-arrow-viewall-icon"/></p>
          </div>
          <div className="subnav-baar-for-viewmore-two">
            <p className='subnav-baar-for-viewmore-two-p'>Saving</p>
            <p className='subnav-baar-for-viewmore-two-p'>Easter</p>
            <p className='subnav-baar-for-viewmore-two-p'>Offers</p>
            <p className='subnav-baar-for-viewmore-two-p'>Grocery</p>
            <p className='subnav-baar-for-viewmore-two-p'>Sports</p>
            <p className='subnav-baar-for-viewmore-two-p'>Gadjets</p>
            <p className='subnav-baar-for-viewmore-two-p'>Agro</p>
            <p className='subnav-baar-for-viewmore-two-p'>Beautiers</p>
          </div>
        </div>
      </div>
      <div className="view-all-item-location-filt-div">
        <div className="viewall-item-route-section">
          <p className='pathname-in-viewall'>{window.location.href}</p>
        </div>
        <div className="view-all-item-samll-filtering">
          <div className="small-filtering-element">
            <p className='small-filtering-element-p'><LiaMoneyBillWaveSolid className="small-filtering-icon"/>Price<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><GiSwordsPower className="small-filtering-icon"/>Brand<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><MdOutlineStorefront className="small-filtering-icon"/>in Stock<span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><IoIosTimer className="small-filtering-icon"/>Fullfillment speed<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
          </div>
          <div className="small-filtering-element-sort-by">
            <p className='sort-by-tit-in-smallfilt'>Sort by</p>
            <select className='slect-in-sort-by' value={sortby} onChange={(e)=>setsortby(e.target.value)}>
              <option value="Low Price">Low Price</option>
              <option value="High Price">High Price</option>
              <option value="Best Seller">Best Seller</option>
              <option value="Good Rating">Good Rating</option>
            </select>
          </div>
        </div>
      </div>
      <div className="view-all-item-small-item-flow">
        <div className="image-boxes-in-viewall">
          <div className="image-boxes-one-viewall">
            <div className="image-boxes-one-viewall-first background-image-setting">
              <p className='image-boxes-in-viewall-p'>Place of Economy</p>
              
            </div>
            <div className="image-boxes-one-viewall-second background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'20px'}}>More Purchase More Offers</p>

            </div>
          </div>
          <div className="image-boxes-two-viewall">
            <div className="image-boxes-two-viewall-first">
              <div className="image-boxes-two-viewall-first-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'35px'}}>Transforming Purchase</p>
              </div>
              <div className="image-boxes-two-viewall-first-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'20px'}}>Got Fullfillment in Items</p>
              </div>
            </div>
            <div className="image-boxes-two-viewall-second">
              <div className="image-boxes-two-viewall-second-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'21px'}}>Variety Products</p>
              </div>
              <div className="image-boxes-two-viewall-second-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'28px'}}>Easy Buying</p>
              </div>
              <div className="image-boxes-two-viewall-second-sub-three background-image-setting">
              <p className='image-boxes-in-viewall-p' style={{fontSize:'23px'}}>Planet Products</p>
              </div>

            </div>
          </div>
          <div className="image-boxes-three-viewall">
            <div className="image-boxes-three-viewall-first background-image-setting">
            <p className='image-boxes-in-viewall-p' style={{fontSize:'20px'}}>Place for Choices</p>
            </div>
            <div className="image-boxes-three-viewall-second background-image-setting">
            <p className='image-boxes-in-viewall-p' style={{fontSize:'20px'}}>Buy Your Needy's</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="view-all-item-main-container">
        <div className="div-for-filterred-content-and-changing-list">
          <div className="div-for-filtered-content">
            <p>helllo</p>
            <p>csasdfs</p>
          </div>
          <div className="div-for-list-updation">
            <p className='bar-four-list' onClick={()=>setgridnum(4)}><HiBars4 style={{color:gridnum==4?'black':''}} className='bar-four-list-icon'/></p>
            <p className='bar-three-list' onClick={()=>setgridnum(3)}><HiBars3 style={{color:gridnum==3?'black':''}} className='bar-four-list-icon'/></p>
            <p className='bar-two-list' onClick={()=>setgridnum(2)}><HiBars2 style={{color:gridnum==2?'black':''}} className='bar-four-list-icon'/></p>

          </div>
        </div>
        <div className="main-item-view-all-container">
          <div className="main-item-view-all-sidebar">
            <div ref={heightref} style={{position:'sticky'}} className="main-view-all-content-side-bar-main-div">
              <div className="filtering-div-in-side-nav-bar">
                <div className="filtering-div-in-sider-container" style={{gap:department?'20px':'0px'}}>
                      <div onClick={()=>setdepartment(department=>!department)}  className='filtering-p-div department-filtering-p'>
                        <p className='filtering-p'>Department</p> 
                        <FaChevronDown className={`filtering-p-icon ${department?'filtering-p-icon-animate':''}`}/>
                      </div>              
                      <div className="filtering-inside-content" style={{gap:department?'20px':'0px',height:department?'auto':'0px',overflow:department?'auto':'hidden'}}>
                        <div className="department-choosing">
                          <input type="radio" value='heloo'  placeholder="playstation" id="deparmentinput"/>
                          <label style={{cursor:'pointer'}} htmlFor="deparmentinput">View All Items</label>
                        </div>
                        
                        
                      </div>
                </div>
                 
              </div>
               <div className="filtering-div-in-side-nav-bar">
                      <div className="filtering-div-in-sider-container" style={{gap:arrivaltime?'20px':'0px'}}>
                            <div onClick={()=>setarrivaltime(arrivaltime=>!arrivaltime)}  className='filtering-p-div department-filtering-p'>
                              <p className='filtering-p'>Fullfillment Speed</p> 
                              
                              <FaChevronDown className={`filtering-p-icon ${department?'filtering-p-icon-animate':''}`}/>
                            </div>  
                                    
                            <div className="filtering-inside-content" style={{gap:arrivaltime?'20px':'0px',height:arrivaltime?'auto':'0px',overflow:arrivaltime?'auto':'hidden'}}>
                             
                              <div  className="department-choosing">
                                <input type="radio" value='2-days' onChange={(e)=>setarrivalchoose(e.target.value)} checked={arrivalchoose=='2-days'} id="2-days"/>
                                <label htmlFor="2-days">2-Days</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='4-days' onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='4-days'} id="4-days"/>
                                <label htmlFor="4-days">4-Days</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='6-days' onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='6-days'} id="6-days"/>
                                <label htmlFor="6-days">6-Days</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio"  value='7-days' onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='7-days'} id="7-days"/>
                                <label htmlFor="7-days">7-Days</label>
                              </div>
                              

                            </div>
                      </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:pricefilt?'20px':'0px'}}>
                          <div onClick={()=>setpricefilt(pricefilt=>!pricefilt)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Price</p> 
                            <FaChevronDown className={`filtering-p-icon ${pricefilt?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:pricefilt?'20px':'0px',height:pricefilt?'auto':'0px',overflow:pricefilt?'auto':'hidden'}}>
                          <div  className="department-choosing">
                                <input type="radio" value='100-500' onChange={(e)=>setpricechoose(e.target.value)} checked={pricechoose=='100-500'} id="100-500"/>
                                <label htmlFor="100-500">100-500</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='500-1000' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='500-1000'} id="500-1000"/>
                                <label htmlFor="500-1000">500-1000</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='1000-1500' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1000-1500'} id="1000-1500"/>
                                <label htmlFor="1000-1500">1000-1500</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio"  value='1500+' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1500+'} id="1500+"/>
                                <label htmlFor="1500+">1500+</label>
                              </div>
                              
                          </div>
                    </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:brandfilt?'20px':'0px'}}>
                          <div onClick={()=>setbrandfilt(brandfilt=>!brandfilt)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Brand</p> 
                            <FaChevronDown className={`filtering-p-icon ${brandfilt?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:brandfilt?'20px':'0px',height:brandfilt?'auto':'0px',overflow:brandfilt?'auto':'hidden'}}>
                          <div  className="department-choosing">
                                <input type="radio" value='Nike' onChange={(e)=>setbrandchoose(e.target.value)} checked={brandchoose=='Nike'} id="Nike"/>
                                <label htmlFor="Nike">Nike</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='Jarvis' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Jarvis'} id="Jarvis"/>
                                <label htmlFor="Jarvis">Jarvis</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio" value='Puma' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Puma'} id="Puma"/>
                                <label htmlFor="Puma">Puma</label>
                              </div>
                              <div  className="department-choosing">
                                <input type="radio"  value="Other's" onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=="Other's"} id="Other's"/>
                                <label htmlFor="Other's">Other's</label>
                              </div>
                              
                          </div>
                    </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:availability?'20px':'0px'}}>
                          <div onClick={()=>setavailability(availability=>!availability)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Availability</p> 
                            <FaChevronDown className={`filtering-p-icon ${availability?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:availability?'20px':'0px',height:availability?'auto':'0px',overflow:availability?'auto':'hidden'}}>
                          <div  className="department-choosing">
                                <input type="radio"  value="available" onChange={(e)=>setavailablechoose(e.target.value)}  checked={availablechoose=="available"} id="available"/>
                                <label htmlFor="available">in Stock</label>
                              </div>
                              
                          </div>
                    </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:specialoffer?'20px':'0px'}}>
                          <div onClick={()=>setspecialoffer(specialoffer=>!specialoffer)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Special Offers</p> 
                            <FaChevronDown className={`filtering-p-icon ${specialoffer?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:specialoffer?'20px':'0px',height:specialoffer?'auto':'0px',overflow:specialoffer?'auto':'hidden'}}>
                          <div  className="department-choosing">
                                <input type="radio" checked='true' id="10"/>
                                <label htmlFor="10">10 % Dis on All</label>
                              </div>
                          </div>
                    </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:rating?'20px':'0px'}}>
                          <div onClick={()=>setrating(rating=>!rating)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Customer Ratings</p> 
                            <FaChevronDown className={`filtering-p-icon ${rating?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:rating?'20px':'0px',height:rating?'auto':'0px',overflow:rating?'auto':'hidden'}}>
                              <div  className="department-choosing">
                                <input type="radio" value='5' checked={ratingchoose=='5'} onChange={(e)=>setratingchoose(e.target.value)} id="5"/>
                                <label htmlFor="5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></label>
                              </div>

                              <div  className="department-choosing">
                                <input type="radio" value='4'  checked={ratingchoose=='4'}  onChange={(e)=>setratingchoose(e.target.value)} id="4"/>
                                <label htmlFor="4"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></label>
                              </div>
                              
                              <div  className="department-choosing">
                                <input type="radio" value='3'  checked={ratingchoose=='3'}  onChange={(e)=>setratingchoose(e.target.value)} id="3"/>
                                <label htmlFor="3"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></label>
                              </div>
                              
                              <div  className="department-choosing">
                                <input type="radio" value='2'  checked={ratingchoose=='2'}  onChange={(e)=>setratingchoose(e.target.value)} id="2"/>
                                <label htmlFor="2"><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></label>
                              </div>
                              
                              <div  className="department-choosing">
                                <input type="radio" value='1'  checked={ratingchoose=='1'}  onChange={(e)=>setratingchoose(e.target.value)} id="1"/>
                                <label htmlFor="1"><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></label>
                              </div>
                          </div>
                    </div>
              </div>
              <div className="filtering-div-in-side-nav-bar">
                    <div className="filtering-div-in-sider-container" style={{gap:morereach?'20px':'0px'}}>
                          <div onClick={()=>setmorereach(morereach=>!morereach)}  className='filtering-p-div department-filtering-p'>
                            <p className='filtering-p'>Based on More Search</p> 
                            <FaChevronDown className={`filtering-p-icon ${morereach?'filtering-p-icon-animate':''}`}/>
                          </div>              
                          <div className="filtering-inside-content" style={{gap:morereach?'20px':'0px',height:morereach?'auto':'0px',overflow:morereach?'auto':'hidden'}}>
                          <div  className="department-choosing">
                                <input type="radio" value='Ps4'  checked={recentsearch=='Ps4'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Ps4"/>
                                <label htmlFor="Ps4">Ps4</label>
                              </div>
                              
                              <div  className="department-choosing">
                                <input type="radio" value='Laptop'  checked={recentsearch=='Laptop'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Laptop"/>
                                <label htmlFor="Laptop">Laptop</label>
                              </div>
                              
                              <div  className="department-choosing">
                                <input type="radio" value='Apple'  checked={recentsearch=='Apple'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Apple"/>
                                <label htmlFor="Apple">Apple 14 pro</label>
                              </div>
                          </div>
                    </div>
              </div>
               
              
            </div>
          </div>
          <div className="main-item-view-all-main-content">
            <div className="main-item-view-all-content-list-div" style={{gridTemplateColumns:`repeat(${gridnum}, 1fr)`}}>
              {Array.from(arr).map((indiitem,index)=>
              
               <div key={indiitem.id} className='items-in-view-all' style={{filter:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'blur(0.7px)':'',opacity:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'0.8':'',cursor:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'not-allowed':''}}>           
                  <div className='imghrt more-view-item-img-bar'>
                        {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                        <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" />:
                        <Link onClick={()=>setfooter(true)} to={`viewmore/${indiitem.id}`}>
                        <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" /></Link>
                        }
                        
                        {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?<></>:<>
                          <p className='heart' onClick={()=>sethrtfunc(indiitem.id)}>{indiitem.like?<IoIosHeart style={{animation:indiitem.like?'hrttrue 1s  cubic-bezier(.47,1.64,.41,.8)':''}}        className='heartimg red' />:<IoIosHeartEmpty className='heartimg' style={{animation:!indiitem.like?'hrtfalse 1s  cubic-bezier(.47,1.64,.41,.8)':''}} />}</p>
                          <div className='view'>
                              <p className='eyep'><FaEye onClick={()=>getparticularname(indiitem.id)} className='eyeview'/></p>
                          </div></>
                        }
                         
                          {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                          <div className="not-availability-of-item-in-main-item-list">
                            <p className='not-availability-showing-para-in-main-list'><span className='not-avail-name-in-main-list'>Stock -</span>{indiitem.availability}</p>
                          </div>:
                          <div className="availability-of-item-in-main-item-list">
                            <p className='availability-showing-para-in-main-list'><span className='avail-name-in-main-list'>Stock -</span>{indiitem.availability}</p>
                          </div>}


                          <div  className="item-in-main-list-sub-images">
                              <div onClick={()=>changeingimage(indiitem.imgurl,index)} className="main-list-sub-images " style={{backgroundImage:`url('${indiitem.imgurl}')`}}> 
                              </div>
                            {Array.from(indiitem.itemimg).length && (indiitem.availability!=0)?
                            indiitem.itemimg.map((imagecontainer)=>
                            
                                imagecontainer.subimg.slice(0,2).map((indiimage)=>
                                <div key={indiimage} onClick={()=>changeingimage(indiimage,index)} className="main-list-sub-images " style={{backgroundImage:`url('${indiimage}')`}}> 
                                </div>
                              )
                                         
                            )
                            :
                            <></>
                            }
                           </div>
                         
                          
                  </div>
                  <div className='infoitem more-view-item-cont-bar'>
                    {indiitem.commentarray[0].star==5?
                      <div className='also-buying-prod-star'>
                        <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
                      </div>:indiitem.commentarray[0].star==4?
                      <div className='also-buying-prod-star'>
                      <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>

                    </div>:indiitem.commentarray[0].star==3?
                      <div className='also-buying-prod-star'>
                      <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>

                      </div>:indiitem.commentarray[0].star==2?
                      <div className='also-buying-prod-star'>
                      <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                      <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>

                      </div>:indiitem.commentarray[0].star==1?
                      <div className='also-buying-prod-star'>
                      <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>

                      </div>:indiitem.commentarray[0].star==0?
                      <div className='also-buying-prod-star'>
                      <FaRegStar style={{fontSize:'12px'}}  className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>

                      </div>:'none'
                                          }
                       <div className='price'>
                       <p style={{fontSize:'20px'}} className='tot-amt'>${Number(indiitem.amt)-(Number(indiitem.amt)*Number(indiitem.discountper))/100}.00</p>
                          <p className='acutalprice' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LiaRupeeSignSolid/>{indiitem.amt}</p>
                      </div>
                      <div className='descripdiv'>
                          <p className='itemdes'>{String(indiitem.itemdescription).slice(0,gridnum==4?40:gridnum==3?80:150)+'...'}</p>
                      </div>
                      {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                          <div className='cartbtn-div'>
                          <button className='cartbtn'  ><BsCartPlus style={{cursor:'not-allowed'}} className='addcartimg' /></button>
                          </div>:
                          <div className='cartbtn-div'>
                          <button className='cartbtn' onClick={()=>setcart(indiitem.id,indiitem.quantity)}>{indiitem.addcart?<BsCartCheck className='addcartimg' style={{animation:indiitem.addcart?'addcart 1s  cubic-bezier(.47,1.64,.41,.8)':'addcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>:<BsCartPlus className='addcartimg' style={{animation:indiitem.addcart?'empcart 1s  cubic-bezier(.47,1.64,.41,.8)':'empcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>}</button>
                      </div>}
                      
                  </div>
                </div>
              )}          
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Viewallitem
