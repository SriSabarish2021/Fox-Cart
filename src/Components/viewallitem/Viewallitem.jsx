import "../../Styles/Viewallitem/Viewallitem.css";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { TfiLayoutColumn2 } from "react-icons/tfi";
import "../../Styles/Itemoverview/Itemoverview.css"
import "../../Styles/Listofitems.css";
import { IoIosClose } from "react-icons/io";
import { GiPayMoney } from "react-icons/gi";
import { TbBrand4Chan } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { RiFilterOffFill } from "react-icons/ri";
import { TiFilter } from "react-icons/ti";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { GiSwordsPower } from "react-icons/gi";
import { MdOutlineStorefront } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

import { useState,useEffect} from "react";
import { useRef } from "react";
import Navbarsection from "../NavbarsectionSticky/Navbarsection";


const Viewallitem = ({mobilefiltdisp,setmobfiltdisp,subaddresscont,setsubaddresscont,arrayforallitems,setarrayforallitems,addresscont,setaddresscont,inpcity,setinpcity,inpstate,setinpstate,inpphone,setinpphone,inpaddress,setaddress,inpname,setinpname,title,pad,height,offer,arr,setarr,setviewbox,getnameinarr,setcart,sethrtfunc,setfooter,getparticularname,setlikedisp,setpinnum,pinnum}) => {


  const [changeimgurl,setchangeimgurl]=useState([])
  let refforanaimation=useRef(null)
  useEffect(() => {

    setfooter(true)
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


  const[getvalofsticky,setvalofsticky]=useState()
  const [stickytrue,setstickytrue]=useState(false)

  const [heightofsider,setheight]=useState(0)
  const [top,settop]=useState(0)
  let changeingimage=(urlofimage,index)=>{


    let newarrayofimage=changeimgurl.map((currimage,indises)=>indises==index?urlofimage:currimage)
    setchangeimgurl(newarrayofimage)
    refforanaimation.current.target.style.animation='imagechangeinlistmain 1s linear'

  }


  useEffect(() => {

   
    

    if (stickytrue) {
      console.log(getvalofsticky);
      console.log(stickytrue);
      
      let totalheight=Number(window.innerHeight)-Number(getvalofsticky)

      setheight(totalheight)
      settop(getvalofsticky)
    }else{return}
    return () => {
      setheight(0)
      settop(0)
    }
  }, [stickytrue])







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

  
  const[filtercont,setfiltercont]=useState([])

  let setsortby=(e)=>{
    if (String(e).includes('100-500')) {
      setpricechoose(e)
      setarrivalchoose('')
      setavailablechoose('')
      setbrandchoose('')
      setrecentsearch('')
      setratingchoose('')
      setpricefilt(true)
      setdepartment(false)
      setbrandfilt(false)
      setarrivaltime(false)
      setavailability(false)
      setspecialoffer(false)
      setrating(false)
      setmorereach(false)
    }else if(String(e).includes('1500+')){
      setpricechoose(e)
      setarrivalchoose('')
      setavailablechoose('')
      setbrandchoose('')
      setrecentsearch('')
      setratingchoose('')
      setdepartment(false)
      setbrandfilt(false)
      setarrivaltime(false)
      setavailability(false)
      setspecialoffer(false)
      setrating(false)
      setmorereach(false)
      setpricefilt(true)

    }else if(String(e).includes('5-star')){
      setratingchoose(e)
      setpricechoose('')
      setarrivalchoose('')
      setavailablechoose('')
      setbrandchoose('')
      setrecentsearch('')
      setdepartment(false)
      setbrandfilt(false)
      setarrivaltime(false)
      setavailability(false)
      setspecialoffer(false)
      setrating(true)
      setmorereach(false)
      setpricefilt(false)

    }else if (String(e).includes('3-star')) {
      setratingchoose(e)
      setpricechoose('')
      setarrivalchoose('')
      setavailablechoose('')
      setbrandchoose('')
      setrecentsearch('')
      setdepartment(false)
      setbrandfilt(false)
      setarrivaltime(false)
      setavailability(false)
      setspecialoffer(false)
      setrating(true)
      setmorereach(false)
      setpricefilt(false)
    }
    else{
      setratingchoose('')
      setpricechoose('')
      setarrivalchoose('')
      setavailablechoose('')
      setbrandchoose('')
      setrecentsearch('')
      setdepartment(false)
      setbrandfilt(false)
      setarrivaltime(false)
      setavailability(false)
      setspecialoffer(false)
      setrating(false)
      setmorereach(false)
      setpricefilt(false)
    }
  }

  let filterarrayclear=(inde)=>{
    let newfilterarray=filtercont.filter((indifiltering,index)=>index!=inde)
    setfiltercont(newfilterarray)

    if (inde==0) {
      setarrivalchoose('')
      setarrivaltime(false)
    }else if (inde==1) {
      setpricechoose('')
      setpricefilt(false)
    }else if (inde==2) {
      setbrandchoose('')
      setbrandfilt(false)
    }else if (inde==3) {
      setavailablechoose('')
      setavailability(false)
    }else if (inde==4) {
      setratingchoose('')
      setrating(false)
    }else{
      setrecentsearch('')
      setmorereach(false)
    }
    
  }

  useEffect(() => {
    if (arrivalchoose=='' && pricechoose=='' && brandchoose=='' && availablechoose=='' && ratingchoose=='' && recentsearch=='') {
      return
    }else{
      setfiltercont((curfiltelement)=>{
        let olderelement=curfiltelement
        let newerelement=[arrivalchoose,pricechoose,brandchoose,availablechoose,ratingchoose,recentsearch]
        let newerfilteredarray=[...olderelement,...newerelement]
        
        return newerfilteredarray
      })
    }
  
    return () => {
      setfiltercont([])
    }
  }, [arrivalchoose,pricechoose,brandchoose,availablechoose,ratingchoose,recentsearch])
  
  let clearallfromfilter=()=>{
    
    setarrivalchoose('')
    setpricechoose('')
    setbrandchoose('')
    setavailablechoose('')
    setratingchoose('')
    setrecentsearch('')
    setdepartment(false)
    setpricefilt(false)
    setbrandfilt(false)
    setavailability(false)
    setarrivaltime(false)
    setspecialoffer(false)
    setrating(false)
    setmorereach(false)
    setfiltercont([])
  }


  useEffect(() => {
    setarrayforallitems(arr)
  
    return () => {
      setarrayforallitems([])
    }
  }, [arr])
  
  useEffect(() => {
    
    if (arrivalchoose=='' && pricechoose=='' && brandchoose=='' && availablechoose=='' && ratingchoose=='' && recentsearch=='') {
      setarrayforallitems(arr)
    }else{
      let element;
      let newarr=[]

        for (let index = 0; index < filtercont.length; index++) {
           element = filtercont[index];
           if (index==0) {

            if (filtercont[index]!='') {
              let filteredoftimearraival=Array.from(arr).filter((indielement)=>Number(indielement.arraivaltimeindays)<=Number(filtercont[index]=='2-Days'?2:filtercont[index]=='4-Days'?4:filtercont[index]=='6-Days'?6:filtercont[index]=='7-Days'?7:''))
              newarr=[...newarr,...filteredoftimearraival]
            }
            
           
            
            
           }else if (index==1){

            if (filtercont[index]!='') {
              let filteredofamount=Array.from(arr).filter((indielement)=>Number(indielement.amt)<=Number(filtercont[index]=='100-500'?500:filtercont[index]=='500-1000'?1000:filtercont[index]=='1000-1500'?1500:10000))
            newarr=[...newarr,...filteredofamount]


            }
            
 

            

           }else if (index==2){
            if (filtercont[index]!='') {
              let filteredbrand=Array.from(arr).filter((indielement)=>String(indielement.brand)==String(filtercont[index]=='Nike'?'Nike':filtercont[index]=='Jarvis'?'Jarvis':filtercont[index]=='Puma'?'Puma':''))
              newarr=[...newarr,...filteredbrand]
            }
           

           }
           else if (index==3){

            if (filtercont[index]=='in Stock') {
              let filteredavailability=Array.from(arr).filter((indielement)=>Number(indielement.availability)!=0)
              newarr=[...newarr,...filteredavailability]

            }
            

            

           }else if (index==4){

            if (filtercont[index]!='') {
              let filteredrating=Array.from(arr).filter((indielement)=>Number(indielement.commentarray[0].star)==Number(filtercont[index]=='5-star'?5:filtercont[index]=='4-star'?4:filtercont[index]=='3-star'?3:filtercont[index]=='2-star'?2:filtercont[index]=='1-star'?1:''))

            newarr=[...newarr,...filteredrating]
            }
            

       

           }else if (index==5){

            if (filtercont[index]!='') {
              let filteredmoresearch=Array.from(arr).filter((indielement)=>String(indielement.brand)==String(filtercont[index]=='Ps4'?'Ps4':filtercont[index]=='Laptop'?'Laptop':filtercont[index]=='Apple 14 pro'?'Apple 14 pro':''))
              newarr=[...newarr,...filteredmoresearch]
            }
            
            


           }
         
           else{
            console.log(element);
            
           }

           
          
        }

        let makeunique=new Set(newarr)
        let newfilteredarray=[...makeunique]
        setarrayforallitems(newfilteredarray)

    }
  
    return () => {
      setarrayforallitems([])
    }
  }, [filtercont,arr])
  

  const [lazyloadonnoitems,setlazyloadonnoitems]=useState(false)
  

  useEffect(() => {
    
    let timerload=setTimeout(() => {
      setlazyloadonnoitems((loadscreen)=>!loadscreen)
    }, 1500);
  
    return () => {
      setlazyloadonnoitems(false)
       clearTimeout(timerload)
    }
    
  }, [filtercont])  
  
  const [widthsix, setWidthsix] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthsix(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  


  return (
    
    <div className="view-all-item-container">
      
     <Navbarsection setstickytrue={setstickytrue} setvalofsticky={setvalofsticky} subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} inpstate={inpstate} setinpstate={setinpstate} inpaddress={inpaddress} setaddress={setaddress} inpname={inpname} setinpname={setinpname} arr={arr} setfooter={setfooter} setlikedisp={setlikedisp} setpinnum={setpinnum} pinnum={pinnum}/>
      
   <div className="view-all-item-location-filt-div">
        <div className="viewall-item-route-section">
          <p className='pathname-in-viewall'>{window.location.href}</p>
        </div>
        <div className="view-all-item-samll-filtering">
          <div className="small-filtering-element">
            <div className="small-filtering-element-p-container-for-hov">
                <div className='small-filtering-element-p price-list-in-main'><LiaMoneyBillWaveSolid className="small-filtering-icon"/>Price<FaChevronRight className="small-filtering-icon-down"/>
                <span className='small-filtering-animation'></span>
                <div className="price-lis-showing-on-hovering-in-main-list price-small-filt">
                  <a href="#view-item-all-page"  onClick={()=>{setpricechoose('100-500'),setpricefilt(true)}} className='price-lis-item-hovering'><GiPayMoney className="price-hovering-icon" style={{color:pricechoose.includes('100-500')?'rgb(68, 3, 3)':''}} />100-500</a>
                  <a href="#view-item-all-page"  onClick={()=>{setpricechoose('500-1000'),setpricefilt(true)}} className='price-lis-item-hovering'><GiPayMoney className="price-hovering-icon" style={{color:pricechoose.includes('500-1000')?'rgb(68, 3, 3)':''}} />500-1000</a>
                  <a href="#view-item-all-page"  onClick={()=>{setpricechoose('1000-1500'),setpricefilt(true)}} className='price-lis-item-hovering'><GiPayMoney className="price-hovering-icon" style={{color:pricechoose.includes('1000-1500')?'rgb(68, 3, 3)':''}} />1000-1500</a>
                  <a href="#view-item-all-page"  onClick={()=>{setpricechoose('1500+'),setpricefilt(true)}} className='price-lis-item-hovering'><GiPayMoney className="price-hovering-icon" style={{color:pricechoose.includes('1500+')?'rgb(68, 3, 3)':''}} />1500+</a>
                  <p className='clearing-filter-in-hovering' onClick={()=>{setpricechoose(''),setpricefilt(false)}}>clear</p>
                </div>
                </div>
            </div>
            <div className="small-filtering-element-p-container-for-hov">
              <div className='small-filtering-element-p'><GiSwordsPower className="small-filtering-icon"/>Brand<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span>
                <div className="price-lis-showing-on-hovering-in-main-list brand-small-filt">
                  <a href="#view-item-all-page" onClick={()=>{setbrandchoose('Nike'),setbrandfilt(true)}} className='price-lis-item-hovering'><TbBrand4Chan style={{color:brandchoose.includes('Nike')?'rgb(68, 3, 3)':''}}  className="price-hovering-icon"/>Nike</a>
                  <a href="#view-item-all-page" onClick={()=>{setbrandchoose('Jarvis'),setbrandfilt(true)}}  className='price-lis-item-hovering'><TbBrand4Chan style={{color:brandchoose.includes('Jarvis')?'rgb(68, 3, 3)':''}}  className="price-hovering-icon"/>Jarvis</a>
                  <a href="#view-item-all-page" onClick={()=>{setbrandchoose('Puma'),setbrandfilt(true)}}  className='price-lis-item-hovering'><TbBrand4Chan style={{color:brandchoose.includes('Puma')?'rgb(68, 3, 3)':''}}  className="price-hovering-icon"/>Puma</a>
                  <a href="#view-item-all-page" onClick={()=>{setbrandchoose("Other's"),setbrandfilt(true)}}  className='price-lis-item-hovering'><TbBrand4Chan style={{color:brandchoose.includes("Other's")?'rgb(68, 3, 3)':''}}  className="price-hovering-icon"/>Other's</a>
                  <p className='clearing-filter-in-hovering' onClick={()=>{setbrandchoose(''),setbrandfilt(false)}}>clear</p>
                </div>
              </div>
            </div>

            <a href="#view-item-all-page" onClick={()=>{setavailablechoose(availablechoose==''?"in Stock":''),setavailability(availablechoose==''?true:false)
            }} className='small-filtering-element-p instock-for-filt-small'><MdOutlineStorefront className="small-filtering-icon"/>{availablechoose==''?"in Stock":'All Items'}<span className='small-filtering-animation-for-stock'></span></a>

            <div className="small-filtering-element-p-container-for-hov">
              <div className='small-filtering-element-p'><IoIosTimer className="small-filtering-icon"/>Fullfillment speed<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span>
                <div className="price-lis-showing-on-hovering-in-main-list deliv-time-small-filt">
                  <a href="#view-item-all-page" onClick={()=>{setarrivalchoose('2-Days'),setarrivaltime(true)}} className='price-lis-item-hovering'><RxLapTimer style={{color:arrivalchoose.includes('2-Days')?'rgb(68, 3, 3)':''}} className="price-hovering-icon"/>2-Days</a>
                  <a href="#view-item-all-page" onClick={()=>{setarrivalchoose('4-Days'),setarrivaltime(true)}} className='price-lis-item-hovering'><RxLapTimer style={{color:arrivalchoose.includes('4-Days')?'rgb(68, 3, 3)':''}} className="price-hovering-icon"/>4-Days</a>
                  <a href="#view-item-all-page" onClick={()=>{setarrivalchoose('6-Days'),setarrivaltime(true)}} className='price-lis-item-hovering'><RxLapTimer style={{color:arrivalchoose.includes('6-Days')?'rgb(68, 3, 3)':''}} className="price-hovering-icon"/>6-Days</a>
                  <a href="#view-item-all-page" onClick={()=>{setarrivalchoose('7-Days'),setarrivaltime(true)}} className='price-lis-item-hovering'><RxLapTimer style={{color:arrivalchoose.includes('7-Days')?'rgb(68, 3, 3)':''}} className="price-hovering-icon"/>7-Days</a>
                  <p className='clearing-filter-in-hovering' onClick={()=>{setarrivalchoose(''),setarrivaltime(false)}}>clear</p>
                </div>
              </div>
            </div>                    
          </div>
          <div className="small-filtering-element-sort-by">
            <p className='sort-by-tit-in-smallfilt'>Sort by</p>
            <select className='slect-in-sort-by'  onChange={(e)=>setsortby(e.target.value)}>
            <option className='option'  value="-">----</option>
              <option className='option' value="100-500">Low Price</option>
              <option className='option'  value="1500+">High Price</option>
              <option className='option'  value="5-star">Best Seller</option>
              <option className='option'  value="3-star">Good Rating</option>
            </select>
          </div>
        </div>
      </div>

      {widthsix<480?<div className="view-all-item-small-item-flow">
      <div className="image-boxes-in-viewall">
        
        <div className="image-boxes-two-viewall">
          <div className="image-boxes-two-viewall-first">
            <div className="image-boxes-two-viewall-first-sub-one background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-three' >Transforming Purchase</p>
            </div>
            <div className="image-boxes-two-viewall-first-sub-two background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-four' >Got Fullfillment in Items</p>
            </div>
          </div>
          <div className="image-boxes-two-viewall-second">
            <div className="image-boxes-two-viewall-second-sub-one background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-five' >Variety Products</p>
            </div>
            <div className="image-boxes-two-viewall-second-sub-two background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-six' >Easy Buying</p>
            </div>
            

          </div>
        </div>
        
      </div>
    </div> :widthsix<740?
      <div className="view-all-item-small-item-flow">
        <div className="image-boxes-in-viewall">
          <div className="image-boxes-one-viewall">
            <div className="image-boxes-one-viewall-first background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-one'>Place of Economy</p>
              
            </div>
            <div className="image-boxes-one-viewall-second background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-two'>More Purchase More Offers</p>

            </div>
          </div>
          <div className="image-boxes-two-viewall">
            <div className="image-boxes-two-viewall-first">
              <div className="image-boxes-two-viewall-first-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-three' >Transforming Purchase</p>
              </div>
              <div className="image-boxes-two-viewall-first-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-four' >Got Fullfillment in Items</p>
              </div>
            </div>
            <div className="image-boxes-two-viewall-second">
              <div className="image-boxes-two-viewall-second-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-five' >Variety Products</p>
              </div>
              <div className="image-boxes-two-viewall-second-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-six' >Easy Buying</p>
              </div>
              

            </div>
          </div>
          
        </div>
      </div> 
    :
      <div className="view-all-item-small-item-flow">
        <div className="image-boxes-in-viewall">
          <div className="image-boxes-one-viewall">
            <div className="image-boxes-one-viewall-first background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-one'>Place of Economy</p>
              
            </div>
            <div className="image-boxes-one-viewall-second background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-two'>More Purchase More Offers</p>

            </div>
          </div>
          <div className="image-boxes-two-viewall">
            <div className="image-boxes-two-viewall-first">
              <div className="image-boxes-two-viewall-first-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-three' >Transforming Purchase</p>
              </div>
              <div className="image-boxes-two-viewall-first-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-four' >Got Fullfillment in Items</p>
              </div>
            </div>
            <div className="image-boxes-two-viewall-second">
              <div className="image-boxes-two-viewall-second-sub-one background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-five' >Variety Products</p>
              </div>
              <div className="image-boxes-two-viewall-second-sub-two background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-six' >Easy Buying</p>
              </div>
              <div className="image-boxes-two-viewall-second-sub-three background-image-setting">
              <p className='image-boxes-in-viewall-p image-boxes-p-seven'  >Planet Products</p>
              </div>

            </div>
          </div>
          <div className="image-boxes-three-viewall">
            <div className="image-boxes-three-viewall-first background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-eight'>Place for Choices</p>
            </div>
            <div className="image-boxes-three-viewall-second background-image-setting">
            <p className='image-boxes-in-viewall-p image-boxes-p-nine' >Buy Your Needy's</p>
            </div>
          </div>
        </div>
      </div>   }

      
      
      <div id="view-item-all-page" className="view-all-item-main-container">
       <div className="div-for-filterred-content-and-changing-list">
          <div className="div-for-filtered-content"  style={{display:filtercont.length?'flex':'none'}}>
            <div className="slected-filter-content">
              <p className='slected-filter-content-title'>Selected Filter's</p>
              <p className='slected-filter-content-clear' onClick={()=>clearallfromfilter()}>clear all</p>
            </div>
            <div className="showing-the-selected-filter">
              {filtercont.map((indifiltcont,inde)=>
              
                  <p style={{display:indifiltcont==''||indifiltcont==0?'none':'flex'}} key={inde} className='filtered-type-name'>{indifiltcont}&nbsp;&nbsp;<IoIosClose className="close-filter-parti" onClick={()=>filterarrayclear(inde)}/></p>

              )}
            </div>
          </div>
          <div className="div-for-list-updation">
            <p className='bar-list' onClick={()=>setgridnum(4)}><TfiLayoutColumn4 style={{color:gridnum==4?'black':'',transform:gridnum==4?'scale(1.2)':'scale(1)'}} className='bar-four-list-icon'/></p>
            <p className='bar-list' onClick={()=>setgridnum(3)}><TfiLayoutColumn3 style={{color:gridnum==3?'black':'',transform:gridnum==3?'scale(1.2)':'scale(1)'}} className='bar-four-list-icon'/></p>
            <p className='bar-list' onClick={()=>setgridnum(2)}><TfiLayoutColumn2 style={{color:gridnum==2?'black':'',transform:gridnum==2?'scale(1.2)':'scale(1)'}} className='bar-four-list-icon'/></p>

          </div>
        </div> 
        {widthsix<700?
        <div className="main-item-view-all-container-for-mobile">
          <div className="item-filt-open-for-mobile" onClick={()=>setmobfiltdisp(true)}>Filter
            <span className='filt-btn-animator'><TiFilter/></span>
          </div>
          
          <div className="main-item-view-all-main-content-for-mobile">
           {lazyloadonnoitems? 
                <div className="main-item-view-all-content-list-div" style={{width:Array.from(arrayforallitems).length==1?'auto':'100%',paddingTop:Array.from(arrayforallitems).length?'':`${widthsix<700?'120px':'200px'}`}}>
             {Array.from(arrayforallitems).length? Array.from(arrayforallitems).map((indiitem,index)=>
              
                  <div key={indiitem.id} className='items-in-view-all' style={{filter:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'blur(0.7px)':'',opacity:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'0.8':'',cursor:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'not-allowed':''}}>   

                  

                     <div className='imghrt more-view-item-img-bar' >
                           {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                           <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" />:
                           <Link onClick={()=>setfooter(true)} to={`viewmore/${indiitem.id}`}>
                           <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" /></Link>
                           }
                           
                           {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?<></>:<>
                             <p className='heart heart-in-view-all' onClick={()=>sethrtfunc(indiitem.id)}>{indiitem.like?<IoIosHeart style={{animation:indiitem.like?'hrttrue 1s  cubic-bezier(.47,1.64,.41,.8)':''}}        className='heartimg heartimg-in-view-all red' />:<IoIosHeartEmpty className='heartimg heartimg-in-view-all' style={{animation:!indiitem.like?'hrtfalse 1s  cubic-bezier(.47,1.64,.41,.8)':''}} />}</p>
                             <div className='view view-in-view-all'>
                                 <p className='eyep'><FaEye onClick={()=>getparticularname(indiitem.id)} className='eyeview eye-in-veiwall'/></p>
                             </div></>
                           }
                            
                             {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                             <div  className="not-availability-of-item-in-main-item-list">
                               <p  className='not-availability-showing-para-in-main-list'><span className='not-avail-name-in-main-list'>Stock -</span>{indiitem.availability}</p>
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
                           <FaStar   className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all "/>
                           <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
                         </div>:indiitem.commentarray[0].star==4?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                       </div>:indiitem.commentarray[0].star==3?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==2?
                         <div className='also-buying-prod-star'>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==1?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==0?
                         <div className='also-buying-prod-star'>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:'none'
                                             }
                          <div className='price'>
                          <p  className='tot-amt tot-amt-in-viewall'>${Number(indiitem.amt)-(Number(indiitem.amt)*Number(indiitem.discountper))/100}.00</p>
                             <p className='acutalprice' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LiaRupeeSignSolid/>{indiitem.amt}</p>
                         </div>
                         <div className='descripdiv'>
                             <p className='itemdes' style={{fontSize:gridnum==2?'18px':''}}>{String(indiitem.itemdescription).slice(0,gridnum==4?40:gridnum==3?80:gridnum==2?150:40)+'...'}</p>
                         </div>
                         {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                             <div className='cartbtn-div'>
                             <button className='cartbtn'  ><BsCartPlus style={{cursor:'not-allowed'}} className='addcartimg cart-img-in-view-all' /></button>
                             </div>:
                             <div className='cartbtn-div'>
                             <button className='cartbtn' onClick={()=>setcart(indiitem.id,indiitem.quantity)}>{indiitem.addcart?<BsCartCheck className='addcartimg cart-img-in-view-all' style={{animation:indiitem.addcart?'addcart 1s  cubic-bezier(.47,1.64,.41,.8)':'addcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>:<BsCartPlus className='addcartimg cart-img-in-view-all' style={{animation:indiitem.addcart?'empcart 1s  cubic-bezier(.47,1.64,.41,.8)':'empcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>}</button>
                         </div>}
                         
                     </div>
                   </div>
                 ):
                 
                 <div   className="div-for-no-items-in-array">
                   <div className="div-for-no-items-image">
   
                   </div>
                   <p className='para-in-no-items'>Oops! We're sorry, no products to show right now. New items coming soon—stay tuned!</p>
                 </div>}                     
                </div>  : 
                <div className="loading-icon-shows">
                  
                 <div className='loader-sym-container-forviewall'>
                  { Array.from(arrayforallitems).length?Array.from(arrayforallitems).map((inditemforloading,index)=>
                          <div key={index} className="item-showing-in-loading-screen">
                            <div className="loading-div-for-img"></div>
                            <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                            </div>
                          </div>
                  ):
                  <>
                  
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                    </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                    </>
                  }
                      
                      
                </div>

                </div>
                      }
          </div>
        </div>:
        <div className="main-item-view-all-container">
          
          <div className="main-item-view-all-sidebar">
            <div style={{position:'sticky',height:`${Number(heightofsider)}px`,top:`${Number(top)}px`}} className="main-view-all-content-side-bar-main-div">
              <div className="filtering-div-in-side-nav-bar">
                <div className="filtering-div-in-sider-container" style={{gap:department?'20px':'0px'}}>
                      <div onClick={()=>setdepartment(department=>!department)}  className='filtering-p-div department-filtering-p'>
                        <p className='filtering-p'>Department</p> 
                        <FaChevronDown className={`filtering-p-icon ${department?'filtering-p-icon-animate':''}`}/>
                      </div>              
                      <div className="filtering-inside-content" style={{gap:department&&widthsix<930?'10px':department&&widthsix>930?'20px':'0px',height:department?'auto':'0px',overflow:department?'auto':'hidden'}}>
                      
                        <div className="department-choosing"  style={{display:department?'flex':'none'}}>
                          <input type="radio" defaultChecked={true} className="inputbar-filter"  id="deparmentinput"/>
                          
                          <label className="inputlable"  htmlFor="deparmentinput">View All Items <span className='input-lable-span' ></span></label>
                        </div>
                        
                        
                      </div>
                </div>
                 
              </div>
               <div className="filtering-div-in-side-nav-bar">
                      <div className="filtering-div-in-sider-container" style={{gap:arrivaltime?'20px':'0px'}}>
                            <div onClick={()=>setarrivaltime(arrivaltime=>!arrivaltime)}  className='filtering-p-div department-filtering-p'>
                              <p className='filtering-p'>Fullfillment Speed</p> 
                              
                              <FaChevronDown className={`filtering-p-icon ${arrivaltime?'filtering-p-icon-animate':''}`}/>
                            </div>  
                                    
                            <div className="filtering-inside-content" style={{gap:arrivaltime&&widthsix<930?'10px':arrivaltime&&widthsix>930?'20px':'0px',height:arrivaltime?'auto':'0px',overflow:arrivaltime?'auto':'hidden'}}>

                            
                             
                               <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value={'2-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}   checked={arrivalchoose=='2-Days'} id="2-days"/>
                                <label  className="inputlable" htmlFor="2-days">2-Days <span className={`input-lable-span ${arrivalchoose=='2-Days'?'showselected':'notshowselected'}`}></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'4-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='4-Days'} id="4-days"/>
                                <label className="inputlable" htmlFor="4-days">4-Days<span className={`input-lable-span ${arrivalchoose=='4-Days'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'6-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='6-Days'} id="6-days"/>
                                <label className="inputlable" htmlFor="6-days">6-Days<span className={`input-lable-span ${arrivalchoose=='6-Days'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value={'7-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='7-Days'} id="7-days"/>
                                <label className="inputlable" htmlFor="7-days">7-Days<span className={`input-lable-span ${arrivalchoose=='7-Days'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:pricefilt&&widthsix<930?'10px':pricefilt&&widthsix>930?'20px':'0px',height:pricefilt?'auto':'0px',overflow:pricefilt?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='100-500' onChange={(e)=>setpricechoose(e.target.value)} checked={pricechoose=='100-500'} id="100-500"/>
                                <label className="inputlable" htmlFor="100-500">100-500<span className={`input-lable-span ${pricechoose=='100-500'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='500-1000' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='500-1000'} id="500-1000"/>
                                <label className="inputlable" htmlFor="500-1000">500-1000<span className={`input-lable-span ${pricechoose=='500-1000'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='1000-1500' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1000-1500'} id="1000-1500"/>
                                <label className="inputlable" htmlFor="1000-1500">1000-1500<span className={`input-lable-span ${pricechoose=='1000-1500'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value='1500+' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1500+'} id="1500+"/>
                                <label className="inputlable" htmlFor="1500+">1500+<span className={`input-lable-span ${pricechoose=='1500+'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:brandfilt&&widthsix<930?'10px':brandfilt&&widthsix>930?'20px':'0px',overflow:brandfilt?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value='Nike' onChange={(e)=>setbrandchoose(e.target.value)} checked={brandchoose=='Nike'} id="Nike"/>
                                <label className="inputlable" htmlFor="Nike">Nike<span className={`input-lable-span ${brandchoose=='Nike'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Jarvis' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Jarvis'} id="Jarvis"/>
                                <label className="inputlable" htmlFor="Jarvis">Jarvis<span className={`input-lable-span ${brandchoose=='Jarvis'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Puma' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Puma'} id="Puma"/>
                                <label className="inputlable" htmlFor="Puma">Puma<span className={`input-lable-span ${brandchoose=='Puma'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value="Other's" onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=="Other's"} id="Other's"/>
                                <label className="inputlable" htmlFor="Other's">Other's<span className={`input-lable-span ${brandchoose=="Other's"?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:availability&&widthsix<930?'10px':availability&&widthsix>930?'20px':'0px',overflow:availability?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:availability?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value="in Stock" onChange={(e)=>setavailablechoose(e.target.value)}  checked={availablechoose=="in Stock"}  id="available"/>
                                <label className="inputlable" htmlFor="available">in Stock<span className={`input-lable-span ${availablechoose=="in Stock"?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:specialoffer&&widthsix<930?'10px':specialoffer&&widthsix>930?'20px':'0px',overflow:specialoffer?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:specialoffer?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" defaultChecked={true} id="10"/>
                                <label className="inputlable" htmlFor="10">10 % Dis on All<span className='input-lable-span' ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:rating&&widthsix<930?'10px':rating&&widthsix>930?'20px':'0px',height:rating?'auto':'0px',overflow:rating?'hidden':'hidden'}}>
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value={'5-star'} checked={ratingchoose=='5-star'} onChange={(e)=>setratingchoose(e.target.value)} id="5"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><span className={`input-lable-span ${ratingchoose=='5-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>

                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'4-star'}  checked={ratingchoose=='4-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="4"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="4"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='4-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'3-star'}  checked={ratingchoose=='3-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="3"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="3"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='3-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'2-star'}  checked={ratingchoose=='2-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="2"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="2"><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='2-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'1-star'}  checked={ratingchoose=='1-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="1"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="1"><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='1-star'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:morereach&&widthsix<930?'10px':morereach&&widthsix>930?'20px':'0px',height:morereach?'auto':'0px',overflow:morereach?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Ps4'  checked={recentsearch=='Ps4'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Ps4"/>
                                <label className="inputlable" htmlFor="Ps4">Ps4<span className={`input-lable-span ${recentsearch=='Ps4'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Laptop'  checked={recentsearch=='Laptop'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Laptop"/>
                                <label className="inputlable" htmlFor="Laptop">Laptop<span className={`input-lable-span ${recentsearch=='Laptop'?'showselected':'notshowselected'}`}  ></span></label>
                              </div>
                              
                              <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Apple'  checked={recentsearch=='Apple'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Apple"/>
                                <label className="inputlable" htmlFor="Apple">Apple 14 pro<span className={`input-lable-span ${recentsearch=='Apple'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                          </div>
                    </div>
              </div>
               
              
            </div>
          </div>
          <div className="main-item-view-all-main-content">
           {lazyloadonnoitems? 
                <div className="main-item-view-all-content-list-div" style={{alignSelf:Array.from(arrayforallitems).length?'center':'center',justifyItems:Array.from(arrayforallitems).length?'flex-start':'center',paddingTop:Array.from(arrayforallitems).length?'':`${widthsix<700?'120px':'200px'}`,justifyContent:Array.from(arrayforallitems).length?'center':'',alignItems:Array.from(arrayforallitems).length?'center':''}}>
              {Array.from(arrayforallitems).length? Array.from(arrayforallitems).map((indiitem,index)=>
              
                  <div key={indiitem.id} className='items-in-view-all' style={{filter:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'blur(0.7px)':'',opacity:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'0.8':'',cursor:indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?'not-allowed':''}}>   

                  

                     <div className='imghrt more-view-item-img-bar' >
                           {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                           <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" />:
                           <Link onClick={()=>setfooter(true)} to={`viewmore/${indiitem.id}`}>
                           <img ref={refforanaimation} className='imgprod main-view-all-img' src={`${changeimgurl[index]}`} alt="" /></Link>
                           }
                           
                           {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?<></>:<>
                             <p className='heart heart-in-view-all' onClick={()=>sethrtfunc(indiitem.id)}>{indiitem.like?<IoIosHeart style={{animation:indiitem.like?'hrttrue 1s  cubic-bezier(.47,1.64,.41,.8)':''}}        className='heartimg heartimg-in-view-all red' />:<IoIosHeartEmpty className='heartimg heartimg-in-view-all' style={{animation:!indiitem.like?'hrtfalse 1s  cubic-bezier(.47,1.64,.41,.8)':''}} />}</p>
                             <div className='view view-in-view-all'>
                                 <p className='eyep'><FaEye onClick={()=>getparticularname(indiitem.id)} className='eyeview eye-in-veiwall'/></p>
                             </div></>
                           }
                            
                             {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                             <div  className="not-availability-of-item-in-main-item-list">
                               <p  className='not-availability-showing-para-in-main-list'><span className='not-avail-name-in-main-list'>Stock -</span>{indiitem.availability}</p>
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
                           <FaStar   className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all"/>
                           <FaStar  className="star-overview star-in-view-all "/>
                           <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
                         </div>:indiitem.commentarray[0].star==4?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                       </div>:indiitem.commentarray[0].star==3?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==2?
                         <div className='also-buying-prod-star'>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==1?
                         <div className='also-buying-prod-star'>
                         <FaStar   className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:indiitem.commentarray[0].star==0?
                         <div className='also-buying-prod-star'>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <FaRegStar className="star-overview star-in-view-all"/>
                         <FaRegStar  className="star-overview star-in-view-all"/>
                         <p className='total-comment-for-main-list'>{indiitem.commentarray.length}</p>
   
                         </div>:'none'
                                             }
                          <div className='price'>
                          <p  className='tot-amt tot-amt-in-viewall'>${Number(indiitem.amt)-(Number(indiitem.amt)*Number(indiitem.discountper))/100}.00</p>
                             <p className='acutalprice' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LiaRupeeSignSolid/>{indiitem.amt}</p>
                         </div>
                         <div className='descripdiv'>
                             <p className='itemdes' style={{fontSize:gridnum==2?'18px':''}}>{String(indiitem.itemdescription).slice(0,gridnum==4?40:gridnum==3?80:gridnum==2?150:40)+'...'}</p>
                         </div>
                         {indiitem.availability==0||indiitem.availability==''||indiitem.availability=='nill'?
                             <div className='cartbtn-div'>
                             <button className='cartbtn'  ><BsCartPlus style={{cursor:'not-allowed'}} className='addcartimg cart-img-in-view-all' /></button>
                             </div>:
                             <div className='cartbtn-div'>
                             <button className='cartbtn' onClick={()=>setcart(indiitem.id,indiitem.quantity)}>{indiitem.addcart?<BsCartCheck className='addcartimg cart-img-in-view-all' style={{animation:indiitem.addcart?'addcart 1s  cubic-bezier(.47,1.64,.41,.8)':'addcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>:<BsCartPlus className='addcartimg cart-img-in-view-all' style={{animation:indiitem.addcart?'empcart 1s  cubic-bezier(.47,1.64,.41,.8)':'empcartback 1s  cubic-bezier(.47,1.64,.41,.8)'}}/>}</button>
                         </div>}
                         
                     </div>
                   </div>
                 ):
                 
                 <div   className="div-for-no-items-in-array">
                   <div className="div-for-no-items-image">
   
                   </div>
                   <p className='para-in-no-items'>Oops! We're sorry, no products to show right now. New items coming soon—stay tuned!</p>
                 </div>}                     
                </div>  : 
                <div className="loading-icon-shows">
                  
                 <div className='loader-sym-container-forviewall'>
                  { Array.from(arrayforallitems).length?Array.from(arrayforallitems).map((inditemforloading,index)=>
                          <div key={index} className="item-showing-in-loading-screen">
                            <div className="loading-div-for-img"></div>
                            <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                            </div>
                          </div>
                  ):
                  <>
                  
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                    </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                    </>
                  }
                      
                      
                </div>

                </div>
                      }
          </div>
        </div>}
        
      </div> 

      <div className="based-on-recent-searches-container">
        <div className="based-on-recent-searchof-items">
          <p className='based-on-recent-search-p'>Based on Recent Search History <span className='recent-search-viewl-all'>view all</span></p>
          <div className="recently-searched-items">
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall'>homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall "/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall'>homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall'>homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>

            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className=" based-on-recent-searchof-items also-searched-for">
          <p className='based-on-recent-search-p'>Also Surfed for<span className='recent-search-viewl-all'>view all</span></p>
          <div className="rcently-also-searched-for">
          <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
            <div className="recent-search-item">
              <div className="div-for-recent-search-image"></div>
              <div className="div-for-recent-sarch-info">
                <p className='also-buying-prod-name also-buying-in-viewall' >homer product</p>
                    <p className='also-buying-prod-star'>
                      <FaStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar   className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                      <FaRegStar  className="star-overview star-for-recent-search-viewall"/>
                    </p>
                    <div className='also-buying-prod-price'>
                        <p  className='tot-amt tot-amt-recent-search-viewall'>${Number(200)-(Number(200)*Number(10))/100}.00</p>
                      
                    </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="showing-end-of-the-page">
        
        <a href="#view-item-all-page" className="back-to-top-div">Elevate to Top</a>
      </div> 

     {/*  <div className="also-buy-with-listof-items">
        <div className="also-shop-by-cathegory-title">
          <div className="also-buy-title-container">
            <p className="also-buy-title-p">Shop</p>
            <p className="also-buy-title-p">by <span className='span-for-also-buy-cathegory'>Categories</span></p>
          </div>
          <div className="button-for-other-cathegory-items">View All
            <div className="button-for-other-hovering-in-show-cathegory"></div>
          </div>
        </div>
        <div className="also-shop-by-cathegory-item-list">
          <div className="also-shop-othee-cathegory-item" style={{backgroundImage:"url('https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D')"}}>
            <div className="creating-white-shadow"></div>
            <div className="hovering-item-type-in-other-cathegory"  >Mobile</div>
          </div>
          <div className="also-shop-othee-cathegory-item" style={{backgroundImage:"url('https://images.unsplash.com/photo-1621096029176-9dbb22a56808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D')"}}>
            <div className="creating-white-shadow"></div>
            <div className="hovering-item-type-in-other-cathegory">Fashion</div>
          </div>
          <div className="also-shop-othee-cathegory-item" style={{backgroundImage:"url('https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} >
           <div className="creating-white-shadow"></div>
            <div className="hovering-item-type-in-other-cathegory">Gadjets</div>
          </div>
          <div className="also-shop-othee-cathegory-item" style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyaWVzfGVufDB8fDB8fHww')"}}>
            <div className="creating-white-shadow"></div>
            <div className="hovering-item-type-in-other-cathegory">Groceries</div>
          </div>
        </div>
      </div>  */}


      
    <div className={`mobile-device-filter ${mobilefiltdisp?'move':'remove'}`} >
          <div  className={`main-side-items-for-mobile ${mobilefiltdisp?'likkescale':'nolikkescale'}`}>
            
            <div className='close-mobile-filter'>
              <p className='filter-mobile-page-tit'>Filter</p>
              <RiFilterOffFill className="close-mob-filt-icon" onClick={()=>setmobfiltdisp(false)}/>
            </div>
            <div   className="main-view-all-content-side-bar-main-div-for-mobile">
              <div className="filtering-div-in-side-nav-bar">
                <div className="filtering-div-in-sider-container" style={{gap:department?'20px':'0px'}}>
                      <div onClick={()=>setdepartment(department=>!department)}  className='filtering-p-div department-filtering-p'>
                        <p className='filtering-p'>Department</p> 
                        <FaChevronDown className={`filtering-p-icon ${department?'filtering-p-icon-animate':''}`}/>
                      </div>              
                      <div className="filtering-inside-content" style={{gap:department?'15px':'0px',height:department?'auto':'0px',overflow:department?'auto':'hidden'}}>
                      
                        <div className="department-choosing"  style={{display:department?'flex':'none'}}>
                          <input type="radio" defaultChecked={true} className="inputbar-filter"  id="deparmentinput"/>
                          
                          <label className="inputlable"  htmlFor="deparmentinput">View All Items <span className='input-lable-span' ></span></label>
                        </div>
                        
                        
                      </div>
                </div>
                 
              </div>
               <div className="filtering-div-in-side-nav-bar">
                      <div className="filtering-div-in-sider-container" style={{gap:arrivaltime?'20px':'0px'}}>
                            <div onClick={()=>setarrivaltime(arrivaltime=>!arrivaltime)}  className='filtering-p-div department-filtering-p'>
                              <p className='filtering-p'>Fullfillment Speed</p> 
                              
                              <FaChevronDown className={`filtering-p-icon ${arrivaltime?'filtering-p-icon-animate':''}`}/>
                            </div>  
                                    
                            <div className="filtering-inside-content" style={{gap:arrivaltime?'15px':'0px',height:arrivaltime?'auto':'0px',overflow:arrivaltime?'auto':'hidden'}}>

                            
                             
                               <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value={'2-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}   checked={arrivalchoose=='2-Days'} id="2-days"/>
                                <label  className="inputlable" htmlFor="2-days">2-Days <span className={`input-lable-span ${arrivalchoose=='2-Days'?'showselected':'notshowselected'}`}></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'4-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='4-Days'} id="4-days"/>
                                <label className="inputlable" htmlFor="4-days">4-Days<span className={`input-lable-span ${arrivalchoose=='4-Days'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'6-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='6-Days'} id="6-days"/>
                                <label className="inputlable" htmlFor="6-days">6-Days<span className={`input-lable-span ${arrivalchoose=='6-Days'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:arrivaltime?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value={'7-Days'} onChange={(e)=>setarrivalchoose(e.target.value)}  checked={arrivalchoose=='7-Days'} id="7-days"/>
                                <label className="inputlable" htmlFor="7-days">7-Days<span className={`input-lable-span ${arrivalchoose=='7-Days'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:pricefilt?'15px':'0px',height:pricefilt?'auto':'0px',overflow:pricefilt?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='100-500' onChange={(e)=>setpricechoose(e.target.value)} checked={pricechoose=='100-500'} id="100-500"/>
                                <label className="inputlable" htmlFor="100-500">100-500<span className={`input-lable-span ${pricechoose=='100-500'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='500-1000' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='500-1000'} id="500-1000"/>
                                <label className="inputlable" htmlFor="500-1000">500-1000<span className={`input-lable-span ${pricechoose=='500-1000'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='1000-1500' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1000-1500'} id="1000-1500"/>
                                <label className="inputlable" htmlFor="1000-1500">1000-1500<span className={`input-lable-span ${pricechoose=='1000-1500'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:pricefilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value='1500+' onChange={(e)=>setpricechoose(e.target.value)}  checked={pricechoose=='1500+'} id="1500+"/>
                                <label className="inputlable" htmlFor="1500+">1500+<span className={`input-lable-span ${pricechoose=='1500+'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:brandfilt?'15px':'0px',overflow:brandfilt?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value='Nike' onChange={(e)=>setbrandchoose(e.target.value)} checked={brandchoose=='Nike'} id="Nike"/>
                                <label className="inputlable" htmlFor="Nike">Nike<span className={`input-lable-span ${brandchoose=='Nike'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Jarvis' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Jarvis'} id="Jarvis"/>
                                <label className="inputlable" htmlFor="Jarvis">Jarvis<span className={`input-lable-span ${brandchoose=='Jarvis'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Puma' onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=='Puma'} id="Puma"/>
                                <label className="inputlable" htmlFor="Puma">Puma<span className={`input-lable-span ${brandchoose=='Puma'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              <div  className="department-choosing" style={{display:brandfilt?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value="Other's" onChange={(e)=>setbrandchoose(e.target.value)}  checked={brandchoose=="Other's"} id="Other's"/>
                                <label className="inputlable" htmlFor="Other's">Other's<span className={`input-lable-span ${brandchoose=="Other's"?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:availability?'15px':'0px',overflow:availability?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:availability?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio"  value="in Stock" onChange={(e)=>setavailablechoose(e.target.value)}  checked={availablechoose=="in Stock"}  id="available"/>
                                <label className="inputlable" htmlFor="available">in Stock<span className={`input-lable-span ${availablechoose=="in Stock"?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:specialoffer?'15px':'0px',overflow:specialoffer?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:specialoffer?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" defaultChecked={true} id="10"/>
                                <label className="inputlable" htmlFor="10">10 % Dis on All<span className='input-lable-span' ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:rating?'15px':'0px',height:rating?'auto':'0px',overflow:rating?'hidden':'hidden'}}>
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input  className="inputbar-filter" type="radio" value={'5-star'} checked={ratingchoose=='5-star'} onChange={(e)=>setratingchoose(e.target.value)} id="5"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><span className={`input-lable-span ${ratingchoose=='5-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>

                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'4-star'}  checked={ratingchoose=='4-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="4"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="4"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='4-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'3-star'}  checked={ratingchoose=='3-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="3"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="3"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='3-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'2-star'}  checked={ratingchoose=='2-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="2"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="2"><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='2-star'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing star-in-view-all-filt" style={{display:rating?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value={'1-star'}  checked={ratingchoose=='1-star'}  onChange={(e)=>setratingchoose(e.target.value)} id="1"/>
                                <label className="inputlable inp-lab-in-star-filt" htmlFor="1"><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><span className={`input-lable-span ${ratingchoose=='1-star'?'showselected':'notshowselected'}`} ></span></label>
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
                          <div className="filtering-inside-content" style={{gap:morereach?'15px':'0px',height:morereach?'auto':'0px',overflow:morereach?'auto':'hidden'}}>
                          <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Ps4'  checked={recentsearch=='Ps4'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Ps4"/>
                                <label className="inputlable" htmlFor="Ps4">Ps4<span className={`input-lable-span ${recentsearch=='Ps4'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                              
                              <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Laptop'  checked={recentsearch=='Laptop'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Laptop"/>
                                <label className="inputlable" htmlFor="Laptop">Laptop<span className={`input-lable-span ${recentsearch=='Laptop'?'showselected':'notshowselected'}`}  ></span></label>
                              </div>
                              
                              <div  className="department-choosing" style={{display:morereach?'flex':'none'}}>
                                <input className="inputbar-filter" type="radio" value='Apple'  checked={recentsearch=='Apple'}  onChange={(e)=>setrecentsearch(e.target.value)} id="Apple"/>
                                <label className="inputlable" htmlFor="Apple">Apple 14 pro<span className={`input-lable-span ${recentsearch=='Apple'?'showselected':'notshowselected'}`} ></span></label>
                              </div>
                          </div>
                    </div>
              </div>
               
              
            </div>

            
          </div>
      </div> 
    </div>
    
  )
}

export default Viewallitem
