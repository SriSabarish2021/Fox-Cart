import "../../Styles/Viewallitem/Viewallitem.css";
import { HiOutlineSaveAs } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { GiFox } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiApps2AiLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { useState,useEffect } from "react";
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { useRef } from "react";
import { RiHeartLine } from "react-icons/ri";

import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Navbarsectionforothers = ({arrofcart,subaddresscont,setsubaddresscont,setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum}) => {
    const [departmentfornav,setdepartmentfornav]=useState(false)
    const [servicefornav,setservicefornav]=useState(false)

    const[addressbar,setaddressbar]=useState(false)


    let getlocation=useLocation()

 
      const[nameinitemall,setnameinitemall]=useState('')
      const[addressinitemall,setaddressinitemall]=useState('')
      const[stateinitemall,setstateinitemall]=useState('')
      const[pincodeinitemall,setpincodeinitemall]=useState('')
    
      useEffect(() => {
        if (String(inpstate).length || String(inpaddress).length || String(inpname).length || String(pinnum).length) {
          setnameinitemall(inpname)
          setaddressinitemall(inpaddress)
          setstateinitemall(inpstate)
          setpincodeinitemall(pinnum)
          
        }
      
        return () => {
          setnameinitemall('')
          setaddressinitemall('')
          setstateinitemall('')
          setpincodeinitemall('')
        }
      }, [])
      
    
    
      const [aniamteofsubmit,setaniamteofsubmit]=useState('')
    
      let updateaddress=()=>{
        const regexforname=/^[a-z A-Z]+$/
        const regexforpinnum=/^[0-9]+$/
        if (String(nameinitemall).length===0 || String(addressinitemall).length===0 ||String(stateinitemall).length===0 ||pincodeinitemall.length===0|| !regexforname.test(nameinitemall)|| !regexforname.test(stateinitemall)|| !regexforpinnum.test(pincodeinitemall)) {
    
        
          let inpputparentinviewall=document.querySelectorAll('.input-for-address-info-getting')
          let filtarr=Array.from(inpputparentinviewall).filter((indiinp)=>{
           
            
              if(indiinp.value==''){
                  indiinp.classList.add('redborder')
              }
              else{
                  indiinp.classList.remove('redborder')
              }
              let getchildnameviewall=document.querySelector('.name-inp-txtarea')
              let getchildstateviewall=document.querySelector('.state-inp-txtarea')
              let getchildpinviewall=document.querySelector('.picode-inp-txtarea')
    
              
              if(!regexforname.test(nameinitemall)){  
                 
    
                getchildnameviewall.classList.add('redborder')
              }else{
                getchildnameviewall.classList.remove('redborder')
                  
              }
              
              if(!regexforname.test(stateinitemall)){  
                  
    
                getchildstateviewall.classList.add('redborder')
              }else{
                getchildstateviewall.classList.remove('redborder')
    
              }
              
             
    
              if (!regexforpinnum.test(pincodeinitemall)) {
    
                getchildpinviewall.classList.add('redborder')
              }else{
                getchildpinviewall.classList.remove('redborder')
    
              } 
              setaddresscont('Make Delvery Simple')
              setsubaddresscont('Add delivery Address..!')
             
    
      })}else{
          let inpputparentviewall=document.querySelectorAll('.input-for-address-info-getting')
          let filtarr=Array.from(inpputparentviewall).filter((indiinp)=>
                  indiinp.classList.remove('redborder')
              
              )
    
              setpinnum(pincodeinitemall)
              setinpstate(stateinitemall)
              setaddress(addressinitemall)
              setinpname(nameinitemall)
    
              setaniamteofsubmit((curval)=>{
                if (String(curval)=='yestoanimate') {
                  return 'notoanimate'
                }else{
                   return 'yestoanimate'
                }
              })
             
             
                
                setaddresscont('Location Updated')
                setTimeout(() => {
                  setaddresscont('Change Saved Location')
                  setsubaddresscont('If there is a need..!')
                }, 3000);
           
              
    
              setaddressbar(false)
      }
      }
    
    
    
    
      let canceladdress=()=>{
    
        if (nameinitemall.length&&addressinitemall.length&&stateinitemall.length&&pincodeinitemall.length) {
          setpinnum('')
        setinpstate('')
        setaddress('')
        setinpname('')
        setnameinitemall('')
        setstateinitemall('')
        setaddressinitemall('')
        setpincodeinitemall('')
        }else{
          setpinnum('')
          setinpstate('')
          setaddress('')
          setinpname('')
          setnameinitemall('')
          setstateinitemall('')
          setaddressinitemall('')
          setpincodeinitemall('')
          let inpputparentviewall=document.querySelectorAll('.input-for-address-info-getting')
          let filtarr=Array.from(inpputparentviewall).filter((indiinp)=>
                indiinp.classList.remove('redborder')
            
            )
    
            setaddressbar(false)
    
        }
        
      }
    


    
    let makedepartmentshow=()=>{
      setdepartmentfornav(curval=>!curval)
      setservicefornav(false)
    }
    let makeserviceshow=()=>{
      setdepartmentfornav(false)
      setservicefornav(curval=>!curval)
    }
    
      useEffect(() => {
        
        window.addEventListener('scroll',()=>{
          setservicefornav(false)
          setdepartmentfornav(false)
          setaddressbar(false)
    
        })
      
        return () => {
          window.removeEventListener('scroll',()=>{
         
      
      
          })
        }
      }, [])


      
        let searchregex=/^[a-zA-Z]+$/
      
      const [searchvalviewall,setsearchvalviewall]=useState('')
      
      
      
        let searchandfilter=()=>{
          if (searchvalviewall!==''&&searchregex.test(searchvalviewall)) {
            let getsercheditems=Array.from(arr).filter((indiforfilt)=>String(indiforfilt.name).includes(String(searchvalviewall))||String(indiforfilt.itemdescription).includes(String(searchvalviewall))||String(indiforfilt.brand).includes(String(searchvalviewall)))
            setarrayforallitems(getsercheditems)
          }else{
            setarrayforallitems(arr)
          }
        }
      
      
        let keypressinsearch=(key)=>{
          
          if (key.key==='Enter') {
            
            if (searchvalviewall!==''&&searchregex.test(searchvalviewall)) {
              let getsercheditems=Array.from(arr).filter((indiforfilt)=>String(indiforfilt.name).includes(String(searchvalviewall))||String(indiforfilt.itemdescription).includes(String(searchvalviewall))||String(indiforfilt.brand).includes(String(searchvalviewall)))
              setarrayforallitems(getsercheditems)
            }else{
              setarrayforallitems(arr)
            }
          }else{
            return
          }
        }
        

    
  return (
    <div className="viewall-item-header-for-sub">
          <div style={{display:String(getlocation.pathname)==='/'?'none':'flex'}} className="div-for-nav-three slider-nav-for-item-navigator">
                <div className="overflow-none">
                    <div className="three-cont-move-in-nav bar-cont-one">
                      <p className='p-for-three-cont p-for-three-cont-one p-for-three-cont-one-for-navigator'>Your Favorite.s Listed</p>
                    </div>
                    <div className="three-cont-move-in-nav  bar-cont-two">
                      <p className='p-for-three-cont p-for-three-cont-one p-for-three-cont-one-for-navigator'>Shop Smart, Live Better </p>
                      
                    </div>
                    <div className="three-cont-move-in-nav  bar-cont-three">
                      <p className='p-for-three-cont p-for-three-cont-one p-for-three-cont-one-for-navigator'>Get 10% instant Off</p>
                    </div>
                </div>
                  
        </div>
        <div className="viewall-item-navbar">
          <div className="logo-icon-in-viewall">
            <div className="logo-icon-and-address">
                  <Link to='/' style={{textDecoration:'none',color:` #002612`}}>
                    <GiFox className="logo-icon-viewall"/>
                  </Link>
                  <div className="address-bar-in-view-all" >
                    <div className="address-bar-insider" onClick={()=>setaddressbar(curval=>!curval)}>

                      <div  style={{animation:aniamteofsubmit=='yestoanimate'?"secondaddressiconanimation 1s linear 2":aniamteofsubmit=='notoanimate'?"addressiconanimation 1s linear 2":''}} className='address-icon-viewall'><FaMapLocationDot className="adress-icon-locate"/>
                      
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforone 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforone 1s linear 2":''}}  className="submit-animation sub-ani-one"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationfortwo 1s linear 2":aniamteofsubmit=='notoanimate'?"animationfortwo 1s linear 2":''}} className="submit-animation sub-ani-two"></div>
                          <div  style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforthree 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforthree 1s linear 2":''}} className="submit-animation sub-ani-three"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforfour 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforfour 1s linear 2":''}}  className="submit-animation sub-ani-four"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforfive 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforfive 1s linear 2":''}}  className="submit-animation sub-ani-five"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforsix 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforsix 1s linear 2":''}}  className="submit-animation sub-ani-six"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforseven 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforseven 1s linear 2":''}} className="submit-animation sub-ani-seven"></div>
                          <div style={{animation:aniamteofsubmit=='yestoanimate'?"secondanimationforeight 1s linear 2":aniamteofsubmit=='notoanimate'?"animationforeight 1s linear 2":''}}  className="submit-animation sub-ani-eight"></div>
                      </div>
                      <div className="adress-icon-viewall-content" >
                        <p className='adress-icon-viewall-p-one' style={{animation:aniamteofsubmit=='yestoanimate'?"addressconatent 1s linear 2":aniamteofsubmit=='notoanimate'?"secondaddressconatent 1s linear 2":''}}>{addresscont}</p>
                        <p className='adress-icon-viewall-p-two'>{subaddresscont}</p>
                      </div>
                      <p className='down-toaddress-icon' style={{transform:addressbar?'rotate(0deg)':'rotate(-90deg)'}}><FaChevronDown/></p>
                      <span className='address-bar-animation-span-viewall' style={{width:addressbar?'100%':'0%'}}></span>
                    </div>
                   
                    <div className={`getting-address-info-div-conatainer ${addressbar?'showaddressbox':''}`} style={{animation:addressbar?'addressbarbgcoloranimation 20s linear infinite ':''}}>
                      <div className="getting-address-info-box">
                        <div className="div-for-adress-info name-info-get">
                          <p className='what-getting-name'>Name<span>:</span></p>
                          <input placeholder="Name" className="input-for-address-info-getting name-inp-txtarea" type="text" value={nameinitemall} onChange={(e)=>setnameinitemall(e.target.value)}/>
                        </div>
                        <div className="div-for-adress-info adress-info-get">
                          <p className='what-getting-name'>Address<span>:</span></p>
                          <textarea placeholder="Address" value={addressinitemall} onChange={(e)=>setaddressinitemall(e.target.value)} className="input-for-address-info-getting address-inp-txtarea"  type="text" />
                        </div>
                        <div className="div-for-adress-info state-info-get">
                          <p className='what-getting-name'>State<span>:</span></p>
                          <input placeholder="State" value={stateinitemall} onChange={(e)=>setstateinitemall(e.target.value)} className="input-for-address-info-getting state-inp-txtarea"  type="text" />
                        </div>
                        <div className="div-for-adress-info pincode-info-get">
                          <p className='what-getting-name'>Pin Code<span>:</span></p>
                          <input placeholder="Pin code" value={pincodeinitemall} onChange={(e)=>setpincodeinitemall(e.target.value)}  className="input-for-address-info-getting picode-inp-txtarea"  type="text" />
                        </div>

                      </div>
                      <div className="btn-for-sub-can">
                        <div className="btn-for-address info-cancel" onClick={()=>canceladdress()}><div className='cancel-icon-span'><IoMdClose className="cancel-icon"/></div><span className='span-for-hov-in-cancel'></span>{nameinitemall.length&&addressinitemall.length&&stateinitemall.length&&pincodeinitemall.length?'Clear':'Cancel'}</div>
                        <div className="btn-for-address info-submit" onClick={()=>updateaddress()}><div className='save-icon-span'><HiOutlineSaveAs className="save-icon"/></div>Save <span className='span-for-hov-in-save'></span></div>
                      </div>
                      <div style={{animation:addressbar?'addressbarbgcoloranimation 20s linear infinite ':''}} className="icon-for-norrow"></div>
                    </div>



                  </div>
            </div>
            <div className="search-bar-for-viewall" style={{display:String(getlocation.pathname)==='/'?'none':'flex'}}>
              <div className="input-bar-and-searchicon-viewall">
                <input onKeyDown={(e)=>keypressinsearch(e)} placeholder="Search Your Needy's" className="searchbar-in-viewall" type="text" value={searchvalviewall} onChange={(e)=>setsearchvalviewall(e.target.value)}></input>
                {getlocation.pathname.includes('easter')||getlocation.pathname.includes('savings')||getlocation.pathname.includes('fashion')||getlocation.pathname.includes('festivespecials')||getlocation.pathname.includes('newarraivals')||getlocation.pathname.includes('seasonalsales')||getlocation.pathname.includes('yearlygrownup')||getlocation.pathname.includes('bogo')?  
                
                <Link to={'/itemviewall'} style={{textDecoration:'none',color:'black'}} onClick={()=>searchandfilter()} className='search-icon-viewall'>
                <span className='search-icon-hover-ani-viewall'></span><FaSearch className="icon-in-search" style={{zIndex:'1'}} /></Link>: 
                
                <a href="#view-item-all-page" style={{textDecoration:'none',color:'black'}} onClick={()=>searchandfilter()} className='search-icon-viewall'>
                <span className='search-icon-hover-ani-viewall'></span><FaSearch className="icon-in-search" style={{zIndex:'1'}} /></a>}

              </div>
            
            </div>
          </div>
          <div className="view-all-item-icon" style={{display:String(getlocation.pathname)==='/'?'none':'flex'}}>
            {getlocation.pathname.includes('easter')||getlocation.pathname.includes('savings')||getlocation.pathname.includes('fashion')||getlocation.pathname.includes('festivespecials')||getlocation.pathname.includes('newarraivals')||getlocation.pathname.includes('seasonalsales')||getlocation.pathname.includes('yearlygrownup')||getlocation.pathname.includes('bogo')?
            <Link to='/itemviewall' style={{textDecoration:'none',textDecorationColor:'none'}}>
                <RiArrowLeftCircleLine  className='viewall-nav-side-icon'/>
            </Link>:
            <Link to='/' style={{textDecoration:'none',textDecorationColor:'none'}}>
            <RiHome2Line  className='viewall-nav-side-icon'/>
            </Link>}
            
            <Link onClick={()=>setfooter(true)}  to={`/itemviewall/yourcart`} style={{textDecoration:'none',textDecorationColor:'none'}}>
              <RiShoppingCartLine  className='viewall-nav-side-icon'/>
            </Link>
             <p className='viewall-nav-side-icon' onClick={()=>setlikedisp(true)}><RiHeartLine style={{cursor:'pointer'}}/></p>
            
          </div>
          <div className="seconddiv" style={{display:String(getlocation.pathname)==='/'?'flex':'none'}}>
               <div className="underlinerel">
                   <p className={`flx orret hm`}>Home</p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                   <p className="flx orret">Contact us</p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                   <p className="flx orret">Order & <span>Returns</span></p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                
                       <Link to='yourcart' onClick={()=>setfooter(true)}>
                                <p  className="flx cart orret" style={{position:'relative'}}> <GiShoppingCart className="cartsvg" /><span style={{position:'absolute',top:'-10px',color:'orange'}}>{Array.from(arrofcart).length}</span></p>
                       </Link>
                       
                   <div className="lineunder"></div>
               </div>


                   <p onClick={()=>setlikedisp(true)} className="flx like"><FaHeart className="likedsvg">h</FaHeart> Items
                   </p>
              
              
              
              
               
           </div>
          
        </div>
        <div className="viewall-item-sub-navbar" style={{boxShadow:departmentfornav||servicefornav?'':'rgba(0, 0, 0, 0.08) 0px 4px 12px'}}>
          <div className="subnav-baar-for-viewmore-one">
            <div className="department-nav-head">
                  <div onClick={()=>makedepartmentshow()} style={{border:departmentfornav?'1px solid rgb(156, 156, 156)':'1px solid rgba(0, 0, 0, 0)'}} className='subnav-baar-one-p subnav-baar-one-p-one'><RiApps2AiLine className="department-viewall-icon"/>Department<FaChevronDown style={{transform:departmentfornav?' rotate(0deg)':' rotate(-90deg)'}} className="department-arrow-viewall-icon"/>
                   
                  </div>
            </div>
            
            <div className="department-nav-head service-showing-font">
              <div onClick={()=>makeserviceshow()} style={{border:servicefornav?'1px solid rgb(156, 156, 156)':'1px solid rgba(0, 0, 0, 0)'}}  className='subnav-baar-one-p subnav-baar-one-p-two'><RiCustomerService2Line className="department-viewall-icon"/>Services<FaChevronDown style={{transform:servicefornav?' rotate(0deg)':' rotate(-90deg)'}} className="department-arrow-viewall-icon"/>
              </div>
            </div>
            

            
          </div>
          <div className="subnav-baar-for-viewmore-two">
            <Link className=" sub-nav-p-one" to={'/itemviewall/easter'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Easter</p></Link>
            <Link className=" sub-nav-p-two" to={'/itemviewall/savings#savings-deal '} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Savings</p></Link>
            <Link className=" sub-nav-p-three" to={'/itemviewall/fashion#fashion-deal'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Fashion</p></Link>
            <Link className=" sub-nav-p-four" to={'/itemviewall/festivespecials#fest-deal'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Festive Specials</p></Link>
            <Link className=" sub-nav-p-five" to={'/itemviewall/newarraivals#new-arraivals'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>New Arraivals</p></Link>
            <Link className=" sub-nav-p-six" to={'/itemviewall/seasonalsales#seasonal-deal'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Seasonal Sales</p></Link>
            <Link className=" sub-nav-p-seven" to={'/itemviewall/yearlygrownup'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>Yearly Grownup</p></Link>
            <Link className=" sub-nav-p-eight" to={'/itemviewall/bogo'} style={{textDecoration:'none'}}><p className='subnav-baar-for-viewmore-two-p'>BOGO</p></Link>            
          </div>

          <div className={`div-for-department-showing-elements ${departmentfornav?'show-department-elements':''}`}>
          <div className="div-container-for-department-element">
                      <div className='department-items-for-nav '>
                        <div className='department-items-for-nav-p '>Clothes<FaChevronDown className="department-items-arrow-viewall-icon"/>
                          <div className="department-insider-section-showing-item first-naver-bar mob-animate">
                            <p className='insider-item-in-departmen'>Shirts</p>
                            <p className='insider-item-in-departmen'>Pants</p>
                            <p className='insider-item-in-departmen'>Dresses</p>
                            <p className='insider-item-in-departmen'>Shoes</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                       
                      </div>
                      <div className='department-items-for-nav'>
                        <div className='department-items-for-nav-p'>Electronics<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>Phones</p>
                            <p className='insider-item-in-departmen'>Laptops</p>
                            <p className='insider-item-in-departmen'>Headphones</p>
                            <p className='insider-item-in-departmen'>Air Pods</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav'>
                        <div className='department-items-for-nav-p'>Home Stuff<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Furniture</p>
                            <p className='insider-item-in-departmen'>Kitchen</p>
                            <p className='insider-item-in-departmen'>Items</p>
                            <p className='insider-item-in-departmen'>Decor</p>
                            <p className='insider-item-in-departmen'>Vessles</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav mob-disp-no-one'>
                        <div className='department-items-for-nav-p'>Groceries<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Snacks</p>
                            <p className='insider-item-in-departmen'>Drinks</p>
                            <p className='insider-item-in-departmen'>Dairy</p>
                            <p className='insider-item-in-departmen'>Fruits</p>
                            <p className='insider-item-in-departmen'>DailyNeeds</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav mob-disp-no-two'>
                        <div className='department-items-for-nav-p'>Beauty<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Makeup</p>
                            <p className='insider-item-in-departmen'>Skincare</p>
                            <p className='insider-item-in-departmen'>Perfumes</p>
                            <p className='insider-item-in-departmen'>KitBox</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav mob-disp-no-three'>
                        <div className='department-items-for-nav-p'>Books<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Novels</p>
                            <p className='insider-item-in-departmen'>Fictions</p>
                            <p className='insider-item-in-departmen'>Drama</p>
                            <p className='insider-item-in-departmen'>Stories</p>
                            <p className='insider-item-in-departmen'>Philosopies</p>
                            <p className='insider-item-in-departmen'>Epic</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav mob-disp-no-four'> 
                        <div className='department-items-for-nav-p'>Kids & Baby<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>Toys</p>
                            <p className='insider-item-in-departmen'>BabyClothes</p>
                            <p className='insider-item-in-departmen'>SchoolThings</p>
                            <p className='insider-item-in-departmen'>Shoes</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                      <div className='department-items-for-nav tab-disp-no'>
                        <div className='department-items-for-nav-p'>Bike & Car<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Helmets</p>
                            <p className='insider-item-in-departmen'> SeatCovers</p>
                            <p className='insider-item-in-departmen'>Cleaners</p>
                            <p className='insider-item-in-departmen'>RidingJacket</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>  
                      <div className='department-items-for-nav tab-disp-no'>
                        <div className='department-items-for-nav-p'>Fitness<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>Gymgear</p>
                            <p className='insider-item-in-departmen'>YogaMats</p>
                            <p className='insider-item-in-departmen'>SportsStuff</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div> 
                      <div className='department-items-for-nav for-mobile'> 
                        <div className='department-items-for-nav-p'>All Other's<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item">
                            <p className='insider-item-in-departmen'>Fitness</p>
                            <p className='insider-item-in-departmen'>Bike & Car</p>
                            <p className='insider-item-in-departmen'>Beauty</p>
                            <p className='insider-item-in-departmen'>Groceries</p>
                            <p className='insider-item-in-departmen'>Toys</p>
                            <p className='insider-item-in-departmen'>Kids&nbsp;&&nbsp;Baby</p>
                            <p className='insider-item-in-departmen'>Decoratives</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>          
                    </div> 
          </div>

          <div className={`div-for-department-showing-elements ${servicefornav?'show-department-elements':''}`}>
          <div className="div-container-for-department-element">
                      <div className='department-items-for-nav '>
                        <div className='department-items-for-nav-p'>Customer Support<FaChevronDown className="department-items-arrow-viewall-icon"/>
                          <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>Live Chat</p>
                            <p className='insider-item-in-departmen'>Call Support</p>
                            <p className='insider-item-in-departmen'>EmailSupport</p>
                            <p className='insider-item-in-departmen'>Help Center</p>

                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                       
                      </div>
                      <div className='department-items-for-nav'>
                        <div className='department-items-for-nav-p'>Secure Payment<FaChevronDown className="department-items-arrow-viewall-icon"/>
                          <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>COD</p>
                            <p className='insider-item-in-departmen' >Credit/DebitCards</p>
                            <p className='insider-item-in-departmen'>UPI & Wallets</p>
                            <p className='insider-item-in-departmen'>Net Banking</p>
                            <div className="insider-pointer"></div>
                          </div>
                          </div>
                      </div>
                      <div className='department-items-for-nav'>
                        <div className='department-items-for-nav-p'>Order Tracking<FaChevronDown className="department-items-arrow-viewall-icon"/>
                          <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>ItemDispatchment</p>
                            <p className='insider-item-in-departmen'>ProductMovement</p>
                            <p className='insider-item-in-departmen'>Find in Map</p>
                            <p className='insider-item-in-departmen'>Get in Touch</p>
                            <div className="insider-pointer"></div>
                          </div>
                          </div>
                      </div>
                      <div className='department-items-for-nav mobile-disp-no'>
                        <div className='department-items-for-nav-p'>Easy Returns<FaChevronDown className="department-items-arrow-viewall-icon"/>
                        <div className="department-insider-section-showing-item mob-animate">
                            <p className='insider-item-in-departmen'>7-DayReturn</p>
                            <p className='insider-item-in-departmen'>InstantRefunds</p>
                            <p className='insider-item-in-departmen'>Free Pickup</p>
                            <div className="insider-pointer"></div>
                          </div>
                        </div>
                      </div>
                                 
                    </div> 
          </div>
          

        </div>
      </div>
  )
}

export default Navbarsectionforothers
