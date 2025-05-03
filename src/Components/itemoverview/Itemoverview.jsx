import { useEffect, useRef, useState } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link, Links, useLocation, useParams } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { BsCartCheck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { ImFirefox } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CgProfile } from "react-icons/cg";
import { IoManOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { VscEyeClosed } from "react-icons/vsc";
import { CgRemove } from "react-icons/cg";
import { LiaRupeeSignSolid } from "react-icons/lia";

import { IoHeartCircleSharp } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

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
import ReactFileReader from 'react-file-reader';

const Itemoverview = ({setlikedisp,setfooter,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,alertboxinbuy,commentboxshow,setcommentboxshow,arr,setarr,setcart,sethrtfunc,arrofcart,setarrcart,setarrayforviewmoreitem,arrayforviewmoreitem,shareboxshow,setshareboxshow,setquestboxshow,questboxshow,sellerdetailbox,setsellerdetailbox,getparticularname,arrayforextrainfo}) => {
  const [longitudeget,setlongitude]=useState('')
const [lattitudeget,setlattitude]=useState('')
let viewmorelocation=useLocation()
  let modalRef=useRef(null)
  let modalReftwo=useRef(null)
  let questRef=useRef(null)
  let questReftwo=useRef(null)
  let sellerdetRef=useRef(null)
  let sellerdetReftwo=useRef(null)
  let {id}=useParams()
  let copybtnicon=useRef(false)
  const copylinkinclipboard=()=>{
    let getvalue=document.querySelector('.input-for-link-share').value
    console.log(getvalue);
    navigator.clipboard.writeText(getvalue)
    copybtnicon.value=true
    
  }
  const closesharebox = (event) => {
    if (modalReftwo.current && modalReftwo.current.contains(event.target)) {
      return
      
    }else if(modalRef.current && modalRef.current.contains(event.target)){
      setshareboxshow(false)
    }else{
      console.log('sogamee');
      
    }
  };



  const closequestbox = (event) => {
    if (questReftwo.current && questReftwo.current.contains(event.target)) {
      return
      
    }else if(questRef.current && questRef.current.contains(event.target)){
      setquestboxshow(false)
    }else{
      console.log('sogamee');
      
    }
  };
  const closesellerdettailbox = (event) => {
    if (sellerdetReftwo.current && sellerdetReftwo.current.contains(event.target)) {
      return
      
    }else if(sellerdetRef.current && sellerdetRef.current.contains(event.target)){
      setsellerdetailbox(false)
    }else{
      console.log('sogamee');
      
    }
  };

  
  const [getstar,setgetstar]=useState(0)
  const [fivestrtot,setfivestr]=useState([])
  const [fourstrtot,setfourstr]=useState([])
  const [threestrtot,setthreestr]=useState([])
  const [twostrtot,settwostr]=useState([])
  const [onestrtot,setonestr]=useState([])

  let getstarlenght=useRef(0)
 let fivestarregex=/^['5']+$/
 let fourstarregex=/^['4']+$/
 let threestarregex=/^['3']+$/
 let twotarregex=/^['2']+$/
 let onestarregex=/^['1']+$/

const [quantityget,setquantity]=useState(1)
  useEffect(() => {
    let viewmoreitem=Array.from(arr).filter((viewmoreindi)=>
      viewmoreindi.id==id
    )
    let gettingaveragestar=viewmoreitem.map((indicommentstar)=>{
      
      let commentstars=indicommentstar.commentarray.map((gettingstarsfromcommen)=>{
        
        return gettingstarsfromcommen.star
      })
      commentstars.forEach((getnumofstar)=>{
          
        if (fivestarregex.test(String(getnumofstar))) {
          let stringofnumfive=String(getnumofstar)
        
            setfivestr((curstr)=>{
                let newerfivestr=[...curstr,...Array(stringofnumfive)]
                return newerfivestr
              }) 
          
        }

        if (fourstarregex.test(String(getnumofstar))) {
          let stringofnumfour=String(getnumofstar)        
            setfourstr((curstr)=>{
                let newerfourstr=[...curstr,...Array(stringofnumfour)]
                return newerfourstr
              }) 
          
        }

        if (threestarregex.test(String(getnumofstar))) {
          let stringofnumthree=String(getnumofstar)
            setthreestr((curstr)=>{
                let newerthreestr=[...curstr,...Array(stringofnumthree)]
                return newerthreestr
              }) 
          
        }

        if (twotarregex.test(String(getnumofstar))) {
          let stringofnumtwo=String(getnumofstar)
          settwostr((curstr)=>{
                let newertwostr=[...curstr,...Array(stringofnumtwo)]
                return newertwostr
              }) 
          
        }

        if (onestarregex.test(String(getnumofstar))) {
          let stringofnumone=String(getnumofstar)
          
          
          setonestr((curstr)=>{
                let neweronestr=[...curstr,...Array(stringofnumone)]
                return neweronestr
              }) 
          
        }
        
      })
      
      getstarlenght.value=Number(commentstars.length)

      return commentstars
      

      
      
    })

    setgetstar((curstar)=>{
      let older=Number(curstar)
      if ( gettingaveragestar[0]) {
        gettingaveragestar[0].forEach((curstar)=>{
          older=Number(older)+Number(curstar)
        })
        
      }

      
      return older
    }) 
   
    
    
    let locationdetail=viewmoreitem[0].sellerdetail.map((indimapdetail)=>indimapdetail.village)
   
    let getapi=async()=>{
      try{
        let fetchingdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${String(locationdetail[0]).toLowerCase()}&appid=1ba216e48f6aab5bdb1c87c858525415`)
        let jsondata=await fetchingdata.json()
        let longitue=jsondata.coord.lon
        let lattitude=jsondata.coord.lat
        setlongitude(longitue)
        setlattitude(lattitude)
      }catch(err){
        console.log(err);
        
      }
      

    }
    getapi () 
    
    setarrayforviewmoreitem((curitem)=>{
      let oldarr=curitem
      let newer=viewmoreitem.map((indinewerforoverview)=>indinewerforoverview.id==id?{...indinewerforoverview,quantity:quantityget}:indinewerforoverview)
   
      
  
      return newer
      
    })
  
    return () => {
      setarrayforviewmoreitem([])
      setgetstar(0)
      setfivestr([])
      setfourstr([])
      setthreestr([])
      settwostr([])
      setonestr([])
    }
  }, [arr])
  
   const regexfornamecomment=/^[a-z A-Z]+$/

  const[commentsubmitbtn,setcommentsubmitbtn]=useState(false)
  const [commentread,setcommentread]=useState(0)
  const [commentreadclick,setcommentreadclick]=useState(false)

  const [liketrue,setliketrue]=useState(false)
  
  const [filterarray,setfilterarray]=useState([])
  const [commentimg,setcommentimg]=useState([])

  const handleFiles = (files) => {
    setcommentimg((curfiles)=>{
      let imgone=files.base64
      let arrayofoldimg=[...curfiles,...imgone]
      return arrayofoldimg       
    })
  };

  let removeimgincomment=(url)=>{
    let removedimgofcomment=commentimg.filter((indiimgurl)=>indiimgurl!=url)
    setcommentimg(removedimgofcomment)
    
  }

  const [starnum,setstarnum]=useState(0)
  const [reviewtit,setreviewtit]=useState('')
  const [reviewcomment,setreviewcomment]=useState('')
  const [reviewername,setreviewername]=useState('')
  const [revieweremail,setrevieweremail]=useState('')


  useEffect(() => {
    let filterarrayofmain=Array.from(arr).filter((indiarrayitem)=>indiarrayitem.id==id)
    filterarrayofmain.map((indiitem)=>{
      setcommentread(indiitem.commentarray.length);
      
      setfilterarray(indiitem.commentarray)

  })
    
    
  }, [arr])

  let removestar=()=>{
    setstarnum(0)

    starsvg[0].classList.remove('hexa')
    starsvg[1].classList.remove('hexa')
    starsvg[2].classList.remove('hexa')
    starsvg[3].classList.remove('hexa')
    starsvg[4].classList.remove('hexa')
}

  let submittedreview=()=>{
    if (reviewtit.length===0 || reviewcomment.length===0 ||reviewername.length===0 ||revieweremail.length===0 || !regexfornamecomment.test(reviewtit)|| !regexfornamecomment.test(reviewername)) {
      setcommentsubmitbtn(false)
      let inpputcomment=document.querySelectorAll('.inpreview')
      let filtarr=Array.from(inpputcomment).filter((indiinp)=>{
        if(indiinp.value==''){
          indiinp.classList.remove('review-input-border')
          indiinp.classList.add('review-no-input-border')
      }
      else{
        
          indiinp.classList.remove('review-no-input-border')
          indiinp.classList.add('review-input-border')

      }
          let getcommenttitle=document.querySelector('.title-input-for-comment')
          let getcommentname=document.querySelector('.name-input-for-comment')


          
          if(!regexfornamecomment.test(reviewtit)){  
            getcommenttitle.classList.remove('review-input-border')

            getcommenttitle.classList.add('review-no-input-border')
          }else{
            getcommenttitle.classList.remove('review-no-input-border')
            getcommenttitle.classList.add('review-input-border')

          }
          
          if(!regexfornamecomment.test(reviewername)){  
              
            getcommentname.classList.remove('review-input-border')

            getcommentname.classList.add('review-no-input-border')
          }else{
            getcommentname.classList.remove('review-no-input-border')
            getcommentname.classList.add('review-input-border')

          }
        
      })
      } else{
        
       
        let inpputcomment=document.querySelectorAll('.inpreview')

        let filtarr=Array.from(inpputcomment).forEach((indiinp)=>{
           
            indiinp.classList.remove('review-no-input-border')
            indiinp.classList.add('review-input-border')
        
      })
          setcommentsubmitbtn(true)

          let filterarrayofmain=Array.from(arr).filter((indiarrayitem)=>indiarrayitem.id==id)
          filterarrayofmain.map((indiitem)=>{
            let updatecomment=Array(indiitem.commentarray).map((indicomment)=>{
               
              console.log(commentimg);
              let getdateforcomment=new Date().getDate()
              let getdayforcomment=new Date().getMonth()
              let getyearforcomment=new Date().getFullYear()
              let dates=`${getdateforcomment}/${getdayforcomment+1}/${getyearforcomment}`
               
               let updater=[...indicomment,{idforcommenone:Number(indicomment.length)+1,star:starnum,title:reviewtit,comment:reviewcomment,name:reviewername,email:revieweremail,imgbyreviwer:commentimg,dateofcomment:dates}]               
               
              let setmainarr=Array.from(arr).map((indiarrayitemforall)=>indiarrayitemforall.id==id?{...indiarrayitemforall,commentarray:updater}:indiarrayitemforall)
              console.log(setmainarr); 
              setarr(setmainarr)
              

            })
      
        })
        let toviewdetail=document.querySelector('.comment-writting-box-container')
          if(toviewdetail){
              toviewdetail.scrollTo(0,0)

          }
        removestar()
        setreviewtit('')
        setreviewcomment('')
        setreviewername('')
        setrevieweremail('')
        setcommentimg([])
        
   }
  }

  

  useEffect(() => {
    let toviewdetail=document.querySelector('.comment-writting-box-container')
    if(toviewdetail){
        toviewdetail.scrollTo(0,0)

    }

}, [commentboxshow])
  
  
let viewmorequantityincrease=(id,qunat)=>{
  let increasequant=qunat+1
  
  let settingincresequant=Array.from(arrofcart).map((indiforquant)=>indiforquant.id==id?{...indiforquant,quantity:increasequant,totalamt:indiforquant.amt*increasequant-(indiforquant.amt*increasequant)*indiforquant.discountper/100}:indiforquant)

let arrayforreal=Array.from(arrayforviewmoreitem).map((indiforquant)=>indiforquant.id==id?{...indiforquant,quantity:increasequant,totalamt:indiforquant.amt*increasequant-(indiforquant.amt*increasequant)*indiforquant.discountper/100}:indiforquant)

  
  setarrcart(settingincresequant)
  setarrayforviewmoreitem(arrayforreal)
  setquantity(increasequant)
}

let viewmorequantitydecrease=(id,qunat)=>{
  if (qunat==1) {
    return
  }else{
    let decreasequant=qunat-1

    let settingdecresequant=Array.from(arrofcart).map((indiforquant)=>indiforquant.id==id?{...indiforquant,quantity:decreasequant<1?1:decreasequant,totalamt:indiforquant.totalamt<=200?200:indiforquant.amt*decreasequant-(indiforquant.amt*decreasequant)*indiforquant.discountper/100}:indiforquant)
    setarrcart(settingdecresequant)
    let arrayforrealdec=Array.from(arrayforviewmoreitem).map((indiforquant)=>indiforquant.id==id?{...indiforquant,quantity:decreasequant,totalamt:indiforquant.amt*decreasequant-(indiforquant.amt*decreasequant)*indiforquant.discountper/100}:indiforquant)
    setarrayforviewmoreitem(arrayforrealdec)
    setquantity(decreasequant)
  
  }
 
}
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
    if (contentbar) {
      observer.observe(contentbar)

    }

  
    return () => {
      if (contentbar) {
        observer.unobserve(contentbar)
  
      }
    }
  })

  useEffect(() => {

    let timersub=setTimeout(() => {
      setcommentsubmitbtn(false)
    }, 5000);
  
    return () => {
      clearTimeout(timersub)
    }
  }, [commentsubmitbtn])
  

  


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



  const [uniqueItems,setuniqueItems]=useState([])
  useEffect(() => {
    const uniqueItems = Array.from(arrayforextrainfo).filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    setuniqueItems(uniqueItems)
  
    return () => {
      setuniqueItems([])
    }
  }, [arrayforextrainfo])
  

 
  

  

    useEffect(() => {
      
        window.scrollTo(0,0)
        

    }, [id])

    const[description,setdescription]=useState(false)
    const[shipandreturn,setshipandreturn]=useState(false)
    const[returnpolicies,setreturnpolicies]=useState(false)    

    let closewritereviewbox=()=>{
      setcommentsubmitbtn(false)
      setcommentboxshow(false)
      removestar()
      setreviewtit('')
      setreviewcomment('')
      setreviewername('')
      setrevieweremail('')
      setcommentimg([])
    }



    let starsvg=document.querySelectorAll('.star-svg')

    let colorchangeforfive=()=>{
      
      
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgb(255, 157, 0)`
      starsvg[2].style.transition='fill 0.6s ease 0.3s'
      starsvg[3].style.fill=`rgb(255, 157, 0)`
      starsvg[3].style.transition='fill 0.6s ease 0.4s'
      starsvg[4].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[4].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[4].style.transition='fill 0.6s ease'
      
    }
    let colornotchangeforfive=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.4s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.3s'
      starsvg[2].style.fill=``
      starsvg[2].style.transition='fill 0.6s ease 0.2s'
      starsvg[3].style.fill=``
      starsvg[3].style.transition='fill 0.6s ease 0.1s'
      starsvg[4].style.fill=``
      starsvg[4].style.stroke=``

      starsvg[4].style.transition='fill 0.6s ease'

    }

    let colorfixfive=()=>{
          setstarnum(5)
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.add('hexa')

    }
    let colorfixfour=()=>{
      setstarnum(4)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.remove('hexa')


    }
    let colorfixthree=()=>{
      setstarnum(3)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')


    }
    let colorfixtwo=()=>{
      setstarnum(2)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }
    let colorfixone=()=>{
      setstarnum(1)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.remove('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }

    let colorchangeforfour=()=>{

      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgb(255, 157, 0)`
      starsvg[2].style.transition='fill 0.6s ease 0.3s'
      
      starsvg[3].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[3].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[3].style.transition='fill 0.6s ease'
      
    }
    let colornotchangeforfour=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.3s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=``
      starsvg[2].style.transition='fill 0.6s ease 0.1s'

      starsvg[3].style.fill=``
      starsvg[3].style.stroke=``

      starsvg[3].style.transition='fill 0.6s ease'

    }
    let colorchangeforthree=()=>{
     
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[2].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[2].style.transition='fill 0.6s ease'
      
      
    }
    let colornotchangeforthree=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.2s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.1s'
      starsvg[2].style.fill=``
      starsvg[2].style.stroke=``
      starsvg[2].style.transition='fill 0.6s ease'

    }
    let colorchangefortwo=()=>{
      
      
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[1].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[1].style.transition='fill 0.6s ease'
      
    
    }
    let colornotchangefortwo=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=``
      starsvg[1].style.stroke=``
      starsvg[1].style.transition='fill 0.6s ease'

    }
    let colorchangeforone=()=>{
     
      
      starsvg[0].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[0].style.stroke=`rgba(255, 178, 55, 0.69)`

      starsvg[0].style.transition='fill 0.6s ease'
      
      
    }
    let colornotchangeforone=()=>{

      starsvg[0].style.fill=``
      starsvg[0].style.stroke=``

      starsvg[0].style.transition='fill 0.6s ease'
      

    }

    let closecommentforX=(classname)=>{
      if(classname.target.id.includes('closecommentforX')){
        closewritereviewbox()

        
      }else{
        return
      }
     
      }
      const [getmainimg,setmainimg]=useState([])
      const [mainimgani,setmainimgani]=useState(true)


      let getimgurl=(url)=>{
        setmainimg(url)
        setmainimgani(!mainimgani)
      }

      useEffect(() => {
        let vieimgformain=Array.from(arr).filter((viewmoreindiforimg)=>
          viewmoreindiforimg.id==id
        )
        let vieimgformainimg=vieimgformain.map((indiimageformain)=>
          indiimageformain.itemimg[0].mainimgarr
        )
        
        

        setmainimg(vieimgformainimg)
        
       
      
    
      }, [arr])


      
const [widthfive, setWidthfive] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWidthfive(window.innerWidth);

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);
      
const [heightone, setheightone] = useState(window.innerWidth);

useEffect(() => {
  const handleResizeheight = () => setheightone(window.innerHeight);

  window.addEventListener('resize', handleResizeheight);

  return () => window.removeEventListener('resize', handleResizeheight);
}, []);
      

  return (
    <>
    {Array.from(arrayforviewmoreitem).map((itemforoverview)=>
      <div key={itemforoverview.id} className='itemoverview-container'>

          <div  className="navbar-for-itemoverview">
              <div className="div-for-nav-one">
                <div className="nav-bar-for-overview-logo">
                  <Link to='/' style={{textDecoration:'none',color:` #002612`}}>
                    <p className='overview-logo'>F<ImFirefox className="fox-browser-logo"/>X <span className='logo-span-overview'>CART</span></p>
                  </Link>
                  
                </div>
                <div className="nav-bar-for-overview-logo-cont">
                  {widthfive<680?<></>:<p className='nav-cont-logo-overview'><RiContactsLine/></p>}
                  
                  
                  {String(viewmorelocation.pathname).includes(`/itemviewall/viewmore/${id}`)?
                  <Link to='/itemviewall' style={{textDecoration:'none',textDecorationColor:'none'}}>
                  <p className='nav-cont-logo-overview'><RiArrowLeftCircleLine/></p>
                  </Link>
                  :<Link to='/' style={{textDecoration:'none',textDecorationColor:'none'}}>
                  <p className='nav-cont-logo-overview'><RiHome2Line/></p>
                  </Link>    
                  }
                             
                  <p className='nav-cont-logo-overview' onClick={()=>setlikedisp(true)}><FaRegHeart style={{cursor:'pointer'}}/></p>
                  <Link  to={`/viewmore/${id}/yourcart`} style={{textDecoration:'none',textDecorationColor:'none'}}>
                    <p className='nav-cont-logo-overview' style={{color:'black'}}><RiShoppingCartLine/></p>
                  </Link>
                </div>
              </div>
              <div className="div-for-nav-two">
                <div className="short-nav-for-overview">
                  <p className='short-nav-p'>Departments <FaChevronDown className="down-for-more-in-nav"/></p>
                    
                  <p className='short-nav-p'>Stores <FaChevronDown className="down-for-more-in-nav"/></p>
            
                  <p className='short-nav-p'>Trending</p>
              
                  <p className='short-nav-p'>Fashion</p>
                  {widthfive<520?<></>:<>
                    <p className='short-nav-p'>Fox Offers</p>
              
                      <p className='short-nav-p'>Prime Fox</p>
                  
                      <p className='short-nav-p'>Get Prime</p>
                  </>}
                  
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
          <div className="main-overview-content-div" id="main-content-move">
            <div className="main-overview-content">
              <div className="main-overview-img">              
                  {
                    itemforoverview.itemimg.map((indiitemimg)=>
                      <div key={id} className="sticky-img-div">
                        <div className="side-all-img">
                          {indiitemimg.subimg.map((subimg)=>
                            <div onClick={()=>getimgurl(subimg)} key={subimg} className="side-img side-img-one" style={{backgroundImage:`url(${subimg})`,cursor:'zoom-in'}}></div>

                          )}
                          
                        </div>
                        <div className="main-img">
                          <div className="image-tag" style={{backgroundImage:`url(${getmainimg})`,animation:mainimgani?`mainimganiamtion 0.5s linear`:`mainimganiamtiontwo 0.5s linear`}}>

                          </div>
                        </div>
                </div>
                    )
                  }
                  
                
              </div>
              <div className="main-overview-txt">
                <div className="basic-item-info-div">
                  <div className="prod-name-and-seller">
                    <p className='sale-box'>{itemforoverview.isforsale?'sale':'not for sale'}</p>
                    <div className="sel-prod-name">
                      <p className='seller'>{itemforoverview.seller}</p>
                      <p className='prod-name'>{itemforoverview.name}</p>
                    </div>
                    <div className="review">
                    {(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==5?
                      <div className="star-rev">
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                    </div>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==4?
                     <div className="star-rev">
                     <FaStar  className="star-overview"/>
                     <FaStar  className="star-overview"/>
                     <FaStar  className="star-overview"/>
                     <FaStar  className="star-overview"/>
                     <FaRegStar  className="star-overview"/></div>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==3? <div className="star-rev">
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                    </div>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==2?  <div className="star-rev">
                      <FaStar  className="star-overview"/>
                      <FaStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                    </div>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==1?
                      <div className="star-rev">
                      <FaStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                    </div>:  <div className="star-rev">
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                      <FaRegStar  className="star-overview"/>
                    </div>
 
                    }
                        <p className='review-persons'>{itemforoverview.commentarray.length} reviews</p>
                        <p className='alert-to-sale'><ImFire className="fire-in-item-viewall"/>12 sold on last 15 hours</p>
                    </div>
                  </div>
                  <div className="amount-div">
                    <p className='actual-amt'>${itemforoverview.amt}</p>
                    <p className='tot-amt'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100}.00</p>
                    <p className='actual-discount'>{itemforoverview.discountper}% discount</p>
                  </div>
                  <div className="item-about-note">
                    <p className='item-about-para'>{itemforoverview.itemdescription}</p>
                  </div>
                  <div className="availability-div">
                    <div className="avail-div-one">
                      <p className="avail-div-one-para">Availability : <span style={{animation:Number(itemforoverview.availability)<10?'availabilityanimate 2s linear infinite':''}} className='avail-div-one-para-span'><FaRegCircleDot className="availability-stock-icon" style={{height:'100%',color:Number(itemforoverview.availability)>=11&&Number(itemforoverview.availability)<=20?`rgb(227, 144, 0)`:Number(itemforoverview.availability)>=21&&Number(itemforoverview.availability)<=30?`rgb(0, 152, 152)`:Number(itemforoverview.availability)>=31?`rgb(28, 165, 0)`:`rgb(255, 0, 0)`,display:'flex',justifyContent:'center',alignItems:'center'
                      }}/> {itemforoverview.availability} stock left</span></p>
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
                      
                      {widthfive<360?   <p className='deliver-overview'><TbTruckDelivery style={{color:`rgb(255, 104, 109)`}} className="del-box-svg"/>Estimate delivery: <span className='side-txt-del'>3-5 days in India.</span></p>:<p className='deliver-overview'><TbTruckDelivery style={{color:`rgb(255, 104, 109)`}} className="del-box-svg"/>Estimate delivery time: <span className='side-txt-del'>3-5 days across India.</span></p>}
                    </div>
                    <div className="del-box-two">
                      {widthfive<360?<p className='coupon-overview'><RiDiscountPercentLine style={{color:`rgb(7, 166, 177)`}} className="del-box-svg"/>10% off 1st order Use Code:<span className='side-txt-del'>"WELCOME"</span>.</p>:widthfive<450? <p className='coupon-overview'><RiDiscountPercentLine style={{color:`rgb(7, 166, 177)`}} className="del-box-svg"/>Use code <span className='side-txt-del'>"WELCOME"</span> for 10% off your first order.</p>:<p className='coupon-overview'><RiDiscountPercentLine style={{color:`rgb(7, 166, 177)`}} className="del-box-svg"/>Use code <span className='side-txt-del'>"WELCOME"</span> for discount 10% on your first order.</p>}
                     
                      

                    </div>
                    <div className="del-box-three">
                      
                      {widthfive<360?<p  className='package-overview'><LuPackageOpen style={{color:`rgb(122, 77, 0)`}} className="del-box-svg"/> Free ship & returns on: <span className='side-txt-del'>$499+ .</span></p>:<p  className='package-overview'><LuPackageOpen style={{color:`rgb(122, 77, 0)`}} className="del-box-svg"/>Free shipping & returns: <span className='side-txt-del'>On all orders over $499.</span></p>}
                     
                    </div>
                  </div>
                  <div className="viewed-plus-share">
                    <div className="viewed-box">
                      <p className='viewed-para'><PiEyesBold className="viewed-svg"/>20 viewed since last 24 hours</p>
                    </div>
                    <div className="share-querry">
                      <p className='quest-para' onClick={()=>setquestboxshow(true)}><AiOutlineQuestionCircle  className="ques-svg"/>ask question</p>
                      <p onClick={()=>setshareboxshow(true)} className='quest-share'><MdScreenShare  className="share-svg"/>share</p>
                    </div>
                  </div>
                  <div className="div-for-btn-overview">
                    <div className="quant-inp-div-overview">
                      <FaAngleUp onClick={()=>viewmorequantityincrease(itemforoverview.id,itemforoverview.quantity)} className="incre-quantin-overview"/>
                      <p className='quant-num-overview'>{itemforoverview.quantity}</p>
                      <FaAngleDown onClick={()=>viewmorequantitydecrease(itemforoverview.id,itemforoverview.quantity)} className="decre-quantin-overview"/>
                    </div>
                    <div className="addcart-btn-div-overview">
                      {itemforoverview.addcart?<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="addcart-btn-overview">in cart
                        <div className="cross-full-overview-cart-btn"></div>
                      </button>:<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="addcart-btn-overview">add cart
                        <div className="cross-full-overview-cart-btn"></div>
                      </button>}
                      
                    </div>
                    <div className="addlike-btn-div-overview">
                      {itemforoverview.like?<div onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview'><FaHeart className="hrt-in-itemmore"/>
                        <p className='show-to-hover'>remove like list
                          <span className='down-arr-for-hover'><FaCaretDown className="down-svg"/>
                          </span>
                        </p>
                      </div>:<div onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview'><FaRegHeart className="hrt-in-itemmore"/>
                        <p className='show-to-hover'>add to like list
                          <span className='down-arr-for-hover'><FaCaretDown className="down-svg"/>
                          </span>
                        </p>
                      </div>}
                      
                    </div>
                  </div>
                  <Pincodecheck pinnum={pinnum} setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} pindistname={pindistname} regex={regex} setalertboxinbuy={setalertboxinbuy} setviewbox={setviewbox} idname={id}/>
                  <div className="selling-place-overview">
                    <div className="selling-place">
                      <p className='pickup-detail '><MdDone className="pickup-tick"/> Pickup available at <span style={{color:'black',fontWeight:'800'}}>Chennai</span>.Usually ready in 24 hours</p>
                      <p className='seller-detail' onClick={()=>setsellerdetailbox(true)}>View more seller detail</p>
                    </div>
                    <div className="selling-detail">
                      <p className='detail-para'>Css:<span className='detail-para-span'>9/10</span></p>
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
                    <div className="hidden-par " style={{paddingBottom:description?'17px':'3px'}}>
                      <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setdescription(description=>!description)}>
                        <p>{itemforoverview.iteminfo[0].infotitle}</p>
                        <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:description?'rotate(0deg)':'rotate(90deg)',opacity:description?'0':'1'}}/></p>
                      </div>
                      <div className={`hidden-para-cont ${description?'shower':''}`} >
                        <p className="hidden-para-cont-p "  >{itemforoverview.iteminfo[0].description}</p>
                      </div>
                    </div>
                    <div className="hidden-par no-border " style={{paddingBottom:shipandreturn?'17px':'3px'}}>
                    <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setshipandreturn(shipandreturn=>!shipandreturn)}>
                        <p>{itemforoverview.iteminfo[1].infotitle}</p>
                        <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:shipandreturn?'rotate(0deg)':'rotate(90deg)',opacity:shipandreturn?'0':'1'}}/></p>
                      </div>
                      <div className={`hidden-para-cont ${shipandreturn?'shower':''}`} >
                        <p className="hidden-para-cont-p">{itemforoverview.iteminfo[1].description}</p>
                      </div>
                    </div>
                    <div  className="hidden-par " style={{paddingBottom:returnpolicies?'17px':'3px'}}>
                    <div className="hidden-par-head" style={{cursor:'pointer'}} onClick={()=>setreturnpolicies(returnpolicies=>!returnpolicies)}>
                        <p>{itemforoverview.iteminfo[2].infotitle}</p>
                        <p className='add-line'><TfiLayoutLineSolid/><TfiLayoutLineSolid className="add-line-absolute" style={{transform:returnpolicies?'rotate(0deg)':'rotate(90deg)',opacity:returnpolicies?'0':'1'}}/></p>
                      </div>
                      <div className={`hidden-para-cont ${returnpolicies?'shower':''}`}>
                        <p className="hidden-para-cont-p">{itemforoverview.iteminfo[2].description}</p>
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
              <div className="prod-img-in-down-bar" style={{backgroundImage:`url('${getmainimg}')`}}></div>
              <div className="prod-down-info">
                <p className='prod-down-info-title'>{itemforoverview.name}</p>
                {(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==5?
                      <p className='star-in-down-bar'>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                    </p>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==4?
                     <p className='star-in-down-bar'>
                     <FaStar  className="star-overview star-item-in-down-bar"/>
                     <FaStar  className="star-overview star-item-in-down-bar"/>
                     <FaStar  className="star-overview star-item-in-down-bar"/>
                     <FaStar  className="star-overview star-item-in-down-bar"/>
                     <FaRegStar  className="star-overview star-item-in-down-bar"/></p>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==3? <p className='star-in-down-bar'>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                    </p>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==2?  <p className='star-in-down-bar'>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                    </p>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==1?
                      <p className='star-in-down-bar'>
                      <FaStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                    </p>:  <p className='star-in-down-bar'>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                      <FaRegStar  className="star-overview star-item-in-down-bar"/>
                    </p>

                    }
              </div>
            </div>
            <div className="prod-down-bar-buttons">
                  <div className="addcart-btn-div-overview-down">
                    {widthfive<600? itemforoverview.addcart?<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="add-cart-btn-in-down" ><BsCartCheck className="cart-btn-in-down-bar"/>
                        <div className="cross-full-overview-cart-btn"></div>
                      </button>:<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="add-cart-btn-in-down" ><BsCartPlus className="cart-btn-in-down-bar"/>
                        <div className="cross-full-overview-cart-btn"></div>
                      </button>:
                     itemforoverview.addcart?<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="add-cart-btn-in-down" >in cart
                     <div className="cross-full-overview-cart-btn"></div>
                   </button>:<button onClick={()=>setcart(itemforoverview.id,quantityget)}  className="add-cart-btn-in-down">Add Cart
                     <div className="cross-full-overview-cart-btn"></div>
                   </button>}
                   

                    </div>
                  <div className="addlike-btn-div-overview-down">
                  {itemforoverview.like?<p style={{color:'red'}} onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview-down'><FaRegHeart className="down-bar-heart" style={{animation:'likedownanimation 0.5s linear'}}/></p>:
                  <p style={{color:'red',animation:'likedownanimation 0.5s linear'}} onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview-down'><FaHeart className="down-bar-heart" style={{animation:'likedownanimation 0.5s linear'}}/></p>}
                      

                  </div>
            </div>
          </div>
          <section className='addition-overview-info'>
            <div className="additional-overview-info-div">
              <div className="cover-box-one">
             
                <div  className="additional-info-overview-one">
                  <div className="additional-info-overview-one-cont additional-info-tag-one" >
                    <div className="additional-info-overview-cont-one">
                      <p className='additional-info-para qual'>Quality Assured</p>
                      <div className="main-info-additional">
                        <p className='additional-info-para head-cont'>provide a <span className='head-cont-span'>Long Life</span></p>
                        <p className='sub-p-additional-info'>Guaranteed premium quality – every product, every time!</p>
                      </div>
                    
                      <div className='additional-info-para additional-info-second-div additional-info-insider-tag-one'>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional"></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional part-one-head-p'>Affordable Price</p>
                            <p className='part-one-subtxt-additional part-one-sub-head-p'>Offering competitive rates that make quality accessible to all.
                            </p>
                          </div>
                        </div>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional-two"></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional part-one-head-p'>Clear Legality</p>
                            <p className='part-one-subtxt-additional part-one-sub-head-p'>Ensuring transparent and compliant legal processes.
                            </p>
                          </div>
                        </div>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional-three"></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional part-one-head-p'>Experienced Agents</p>
                            <p className='part-one-subtxt-additional part-one-sub-head-p'>Guided by professionals with expertise in the industry.
                            </p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="additional-info-overview-one-img additional-image-tag-one">
                    <div className="additional-info-overview-img-one"   style={{backgroundImage:`url('${itemforoverview.qualityassuringimages.qualimgone}')`}} >
                      <div className="additional-info-overview-img-one-one" style={{backgroundImage:`url('${itemforoverview.qualityassuringimages.qualimgtwo}')`}}  ></div>
                      <div className="additional-info-overview-img-one-two" style={{backgroundImage:`url('${itemforoverview.qualityassuringimages.qualimgthree}')`}}  ></div>
                     
                    </div>
                  </div>
                  <div onMouseMove={handlemove} onMouseLeave={handlemoveout}  style={{backgroundPosition:postion,backgroundImage:`url('${itemforoverview.qualityassuringimages.qualimgfour}')`}}  className="additional-info-overview-img-for-parent">

                  </div>

                </div>

              </div>

              <div className="cover-box-two" >
              {itemforoverview.producthighlight.map((gethighlight)=>
                <div key={gethighlight.highlight} className="additional-infofor-next">
                  
                  <div className="additional-info-overview-one-cont additional-info-tag-two">
                 
                    <div   className="additional-info-overview-cont-one additional-info-overview-for-two" >
                    <p className='additional-info-para box-two-additional-info-heading '>Product Highlights</p>
                    <div className="main-info-additional">
                      <p className='additional-info-para head-cont'><span className='head-span-two  '>{gethighlight.highlight}</span></p>
                    
                    </div>
                  
                    <div className='additional-info-para additional-info-second-div additional-info-insider-tag-two'>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-covertwo"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional prod-two-head'>{gethighlight.secondaryhighlightone.mainhighlight}</p>
                          <p className='part-one-subtxt-additional prod-two-sub-head'>{gethighlight.secondaryhighlightone.subhighlight}
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-covertwo-two"></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional prod-two-head'>{gethighlight.secondaryhighlighttwo.mainhighlight}</p>
                          <p className='part-one-subtxt-additional prod-two-sub-head'>{gethighlight.secondaryhighlighttwo.subhighlight}
                          </p>
                        </div>
                      </div>
                      <div className="part-one-addi-info">
                        <div className="part-one-logo">
                          <div className="logo-icon-additional-three" style={{backgroundImage:"url('/icon _friendly iq_ .svg')"}}></div>
                        </div>
                        <div className="part-one-cont">
                          <p className='part-one-head-additional prod-two-head'>{gethighlight.secondaryhighlightthree.mainhighlight}</p>
                          <p className='part-one-subtxt-additional prod-two-sub-head'>{gethighlight.secondaryhighlightthree.subhighlight}
                          </p>
                        </div>
                      </div>
                      <div className="overflow-none scroller-for-additionalinfo"  style={{width:'90%'}}>
                        {gethighlight.prodsmallreview.map((smallrevslide)=>
                        <div key={smallrevslide.smallrevid}  className="three-cont-move-in-nav bar-cont-one" style={{animationDelay:smallrevslide.smallrevid==1?'0s':smallrevslide.smallrevid==2?'4s':smallrevslide.smallrevid==3?'8s':''}}>
                        <p className='p-for-three-cont p-for-three-cont-one p-for-scrolller' style={{color:'black'}}>
                        {smallrevslide.starrate==5?
                        <span className='flow-comment-star'>
                              <FaStar className="star-overview flow-comment"/>
                              <FaStar  className="star-overview flow-comment"/>
                              <FaStar  className="star-overview flow-comment"/>
                              <FaStar  className="star-overview flow-comment"/>
                              <FaStar  className="star-overview flow-comment"/>
                            </span>:smallrevslide.starrate==4?
                            <span  className='flow-comment-star'>
                            <FaStar   className="star-overview flow-comment"/>
                            <FaStar className="star-overview flow-comment"/>
                            <FaStar  className="star-overview flow-comment"/>
                            <FaStar  className="star-overview flow-comment"/>
                            <FaRegStar className="star-overview flow-comment"/>
                          </span>:smallrevslide.starrate==3?
                            <span  className='flow-comment-star'>
                            <FaStar   className="star-overview flow-comment"/>
                            <FaStar  className="star-overview flow-comment"/>
                            <FaStar  className="star-overview flow-comment"/>
                            <FaRegStar className="star-overview flow-comment"/>
                            <FaRegStar className="star-overview flow-comment"/>
                            </span>:smallrevslide.starrate==2?
                            <span  className='flow-comment-star'> 
                            <FaStar   className="star-overview flow-comment"/>
                            <FaStar  className="star-overview flow-comment"/>
                            <FaRegStar className="star-overview flow-comment"/>
                            <FaRegStar  className="star-overview flow-comment"/>
                            <FaRegStar  className="star-overview flow-comment"/>
                            </span>:smallrevslide.starrate==1?
                            <span  className='flow-comment-star'>
                            <FaStar className="star-overview flow-comment"/>
                            <FaRegStar className="star-overview flow-comment"/>
                            <FaRegStar  className="star-overview flow-comment"/>
                            <FaRegStar  className="star-overview  flow-comment"/>
                            <FaRegStar  className="star-overview  flow-comment"/>
                            </span>:smallrevslide.starrate==0?
                            <span  className='flow-comment-star'>
                            <FaRegStar className="star-overview flow-comment"/>
                            <FaRegStar  className="star-overview  flow-comment"/>
                            <FaRegStar className="star-overview  flow-comment"/>
                            <FaRegStar className="star-overview  flow-comment"/>
                            <FaRegStar  className="star-overview flow-comment"/>
                            </span>:'none'
                          }
                          <span className='small-rev-cont'>{String(smallrevslide.reviewinsmall).slice(0,10)+'... -'}  <span className='reviewer-name' >  {smallrevslide.reviewerofsamll}</span> </span><span className=' review-slide-user-img' style={{backgroundImage:`url(${smallrevslide.userimage})`,backgroundPosition:'center',backgroundRepeat:'noRepeat',    backgroundSize:'cover'}}></span></p>
                      </div>
                        )}

                      </div>
                      
                    </div>
                    <div className="div-for-cover-two-btn">
                      <a className="cover-two-btn cover-two-btn-one" style={{textDecoration: 'none'}}  href="#comment-sec">
                        <span className='comment-move-btn-ani'></span>
                        <p className='cover-p'>User Insights</p>
                      </a>
                    </div>
                  </div>
                   
                    
                  </div>
                  <div className="additional-info-overview-one-img additional-image-tag-two">
                    <div className="additional-info-overview-img-cover-two-img" style={{backgroundImage:`url('${gethighlight.imgone}')`}} >
                      <div className="insta-reel-img">
                        <div className="insta-head">
                          <div className="insta-header">
                            <div className="insta-page-prof"></div>
                              <div className="insta-page-name">
                                <p  className="insta-page-name-p1">ZINKER</p>
                                <p className="insta-page-name-p2">sponsered</p>
                              </div>
                          </div>
                            
                            <div className="ints-cont-as-line">
                              <div className="insta-line-1"></div>
                              <div className="insta-line-2"></div>
                            </div>
                          
                        </div>
                        <div className="insta-transp-div">
                          <div className="insta-transp">

                          </div>
                          <div className="insta-tranp-bottom-div">
                            <div className="transp-bottom-one">
                              <p  className="transp-bottom-one-p">Helloo</p>
                              <p  className="transp-bottom-one-p-2">only for $40 | COD avail</p>
                            </div>
                            <div className="transp-bottom-two">
                            <Link style={{textDecoration: 'none'}}   to={`/proceedtopay/${id}`}><p className='shop-now-in-transp'>shop now</p></Link>
                              
                            </div>
                          </div>
                          <div className="like-div-insta">
                            <div className="like-heart-insta">
                              <AiFillLike className="thumb"/><IoHeartCircleSharp className="insta-like"/> <span className='numb-of-like'>{liketrue?155:154}</span>
                            </div>
                            <div className="comment-insta">
                              {itemforoverview.commentarray.length} comment
                            </div>
                          </div>
                          <div className="share-insta">
                            <div className="share-bar-one" onClick={()=>setliketrue(!liketrue)}>{liketrue?<AiFillLike style={{animation:liketrue?`thumbsup 0.5s ease`:''}} className="thumb"/>:<AiOutlineLike style={{animation:liketrue?'':`thumbsup 0.5s ease`}} />} 
                            <p>like</p></div>
                            <div className="share-bar-two"><GoComment/>comment</div>
                            <div onClick={()=>setshareboxshow(true)}  className="share-bar-three"><PiShareFat />Share</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="additional-info-overview-img-for-parent-covertwo-two"  onMouseMove={handlemove} onMouseLeave={handlemoveout}  style={{backgroundPosition:postion,backgroundImage:`url('${gethighlight.imgtwo}')`}} ></div>
                  </div>
                </div>
                 )}
              </div>

              <div className="cover-box-three">
                {itemforoverview.choiceofitem.map((indiitemforboxthree)=>
                  <div key={indiitemforboxthree.nameforimages} className="additional-infofor-three">
                  <div className="additional-info-overview-one-cont additional-info-tag-three">
                    <div className="additional-info-overview-cont--cover-three-one">
                      <p className='additional-info-para  box-three-additional-info-heading'>Effortless Choice</p>
                      <div className="main-info-additional">
                        <p className='additional-info-para head-cont-three'>provide <span className='head-cont-span-three'>{indiitemforboxthree.numberofchoice}</span>different colors</p>
                      </div>
                      <div className="conver-three-para-cont">
                        <p className='para-cont-p-cover-three'>The place Where Customer can <span className='para-cont-p-span'>Manage</span> Orders</p>
                        <p className='para-cont-p2-cover-three'>The place brings the customer to the world of fullfilling their choice on their own fav's with more reliable and with more safer</p>
                      </div>
                      <div className="div-for-cover-two-btn">
                        
                        <a href="#main-content-move"  className="cover-two-btn cover-two-btn-two" style={{marginTop:'10px',textDecoration: 'none'}}>
                          View Item</a>
                      </div>
                    </div>
                  </div>
                  <div className="additional-info-overview-one-img additional-image-tag-three" style={{paddingLeft:'0px',alignItems:'center'}}>
                    <div className="additional-info-overview-img-cover-three-img" style={{backgroundImage:`url(${indiitemforboxthree.mainchoiceimg})`}} >
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgone})`}} className="additional-info-overview-img-cover-three-one"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgtwo})`}}  className="additional-info-overview-img-cover-three-two"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgthree})`}}  className="additional-info-overview-img-cover-three-three"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgfour})`}}  className="additional-info-overview-img-cover-three-four"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgfive})`}}  className="additional-info-overview-img-cover-three-five"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgsix})`}}  className="additional-info-overview-img-cover-three-six"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgseven})`}}  className="additional-info-overview-img-cover-three-seven"  ></div>
                        <div style={{backgroundImage:`url(${indiitemforboxthree.diffimgeight})`}}  className="additional-info-overview-img-cover-three-eight"  ></div>
                      
                    </div>
                    {/* <div className="additional-info-overview-img-for-parent"  onMouseMove={()=>handlemove()} onMouseLeave={()=>handlemoveout()}  style={{backgroundPosition:postion}} ></div> */}
                  </div>
                </div>
                )}
                
              </div>
              
              
            </div>
          </section>
          <section id="comment-sec" className='customer-review-section'>
            <div className="div-for-review">
              <div className="review-head-div">
                <p className='review-head'>Customer Review</p>
              </div>
              <div className="review-main-box">
                <div className="review-star-box">
                  <p className='review-star'>
                    {(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==5?
                      <span className='star-span-for-review'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview  review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                    </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==4?
                     <span className='star-span-for-review'>
                     <FaStar  className="star-overview review-comment-star"/>
                     <FaStar  className="star-overview review-comment-star"/>
                     <FaStar  className="star-overview review-comment-star"/>
                     <FaStar  className="star-overview review-comment-star"/>
                     <FaRegStar  className="star-overview"/></span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==3? <span className='star-span-for-review'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==2?  <span className='star-span-for-review'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==1?
                      <span className='star-span-for-review'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star "/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star "/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>:  <span className='star-span-for-review'>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>

                    }
                     
                    <span className='outof-in-review'>{(Number(getstar)/Number(getstarlenght.value)).toFixed(0)}.00 out of 5</span>
                  </p>
                  <p   className='star-span-basedon'>Based on {getstarlenght.value} Reviews</p>
                </div>
                <div className="review-line-box">
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(fivestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{fivestrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(fourstrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{fourstrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(threestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{threestrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(twostrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{twostrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(onestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{onestrtot.length}</p>
                  </div>
                  
                </div>
                <div className="review-written-box-btn">
                  <button className="write-rev-btn" onClick={()=>setcommentboxshow(true)}>
                    <div className="btn-design-box-comment"></div>Write a Review</button>
                </div>
              </div>



              <div className="review-main-box-two">
               
                <div className="review-line-box">
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(fivestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{fivestrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(fourstrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{fourstrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(threestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{threestrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(twostrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{twostrtot.length}</p>
                  </div>
                  <div className="amount-of-review">
                    <span className='star-for-analyze'>
                      <FaStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                      <FaRegStar  className="star-overview review-comment-star"/>
                    </span>
                    <div className="analyze-line-for-review">
                      <div className="follow-analyses-line" style={{width:`${(Number(onestrtot.length)/getstarlenght.value)*100}%`}}></div>
                    </div>
                    <p className='number-based-on-analyses'>{onestrtot.length}</p>
                  </div>
                  
                </div>
                <div className='mobile-desing-in-comment'>
                  <div className="review-star-box-two">
                    <p className='review-star'>
                      {(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==5?
                        <span className='star-span-for-review'>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview  review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                      </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==4?
                      <span className='star-span-for-review'>
                      <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                      <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                      <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                      <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                      <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/></span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==3? <span className='star-span-for-review'>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                      </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==2?  <span className='star-span-for-review'>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                      </span>:(Number(getstar)/Number(getstarlenght.value)).toFixed(0)==1?
                        <span className='star-span-for-review'>
                        <FaStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star  comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                      </span>:  <span className='star-span-for-review'>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                        <FaRegStar  className="star-overview review-comment-star comment-ave-satar"/>
                      </span>

                      }
                      
                      <span className='outof-in-review'>{(Number(getstar)/Number(getstarlenght.value)).toFixed(0)}.00 out of 5</span>
                    </p>
                    <p   className='star-span-basedon'>Based on {getstarlenght.value} Reviews</p>
                  </div>
                  <div className="review-written-box-btn-two">
                    <button className="write-rev-btn" onClick={()=>setcommentboxshow(true)}>
                      <div className="btn-design-box-comment"></div>Write a Review</button>
                  </div>
                </div>
                
              </div>



            </div>
            
            <div className="read-more-btn-div-in-comment" style={{display:commentread<=3?'none':'flex'}}>

              {widthfive<1000?<button  role="button"  onClick={()=>setcommentreadclick(!commentreadclick)}  className="read-more-btn-in-mobile"><span  className={`mobile-more-comment-read-animation`}></span>{!commentreadclick&&commentread>=4?'Read More':'Read Less'}</button>:<button role="button"  onClick={()=>setcommentreadclick(!commentreadclick)}  className="read-more-btn-in-comment">{!commentreadclick&&commentread>=4?'Read More':'Read Less'}</button>}
                

                
              

            </div>
            <div className="custome-commment-all-div" style={{height:commentread<4&&widthfive<1600&&widthfive>1100?commentread*340:commentread<4&&widthfive<1100&&widthfive>900?commentread*310:commentread<4&&widthfive<900&&widthfive>700?commentread*300:commentread<4&&widthfive<700&&widthfive>400?commentread*260:commentread<4&&widthfive<400&&widthfive>300?commentread*250:!commentreadclick&&commentread>=4?3*340:commentreadclick&&commentread>=4&&widthfive<1600&&widthfive>1100?commentread*380:commentreadclick&&commentread>=4&&widthfive<1100&&widthfive>900?commentread*340:commentreadclick&&commentread>=4&&widthfive<900&&widthfive>700?commentread*330:commentreadclick&&commentread>=4&&widthfive<700&&widthfive>400?commentread*300:commentreadclick&&commentread>=4&&widthfive<400&&widthfive>300?commentread*280:commentreadclick&&commentread>=4&&heightone<650?commentread*330:commentreadclick&&commentread>=4&&heightone>900?commentread*380:commentread*370,transition:'height 1.5s cubic-bezier(.47,1.64,.41,.8)'}}>
              {filterarray.map((indiitemcomment)=>
                    <div key={indiitemcomment.idforcommenone} className="customer-comment">
                    <div className="customer-comment-head">
                      {indiitemcomment.star==5?
                        <div className="customer-review-satr-div">
                          <FaStar   className=" customer-rev-star-one"/>
                          <FaStar  className=" customer-rev-star-two"/>
                          <FaStar  className=" customer-rev-star-three"/>
                          <FaStar  className=" customer-rev-star-four"/>
                          <FaStar className=" customer-rev-star-five"/>
                        </div>:indiitemcomment.star==4?
                        <div className="customer-review-satr-div">
                        <FaStar   className=" customer-rev-star-one"/>
                        <FaStar className=" customer-rev-star-two"/>
                        <FaStar  className="customer-rev-star-three"/>
                        <FaStar className="customer-rev-star-four"/>
                        <FaRegStar  className=" customer-rev-star-five"/>
                      </div>:indiitemcomment.star==3?
                        <div className="customer-review-satr-div">
                        <FaStar  className=" customer-rev-star-one"/>
                        <FaStar  className=" customer-rev-star-two"/>
                        <FaStar  className=" customer-rev-star-three"/>
                        <FaRegStar  className=" customer-rev-star-four"/>
                        <FaRegStar  className=" customer-rev-star-five"/>
                        </div>:indiitemcomment.star==2?
                        <div className="customer-review-satr-div">
                        <FaStar   className=" customer-rev-star-one"/>
                        <FaStar  className=" customer-rev-star-two"/>
                        <FaRegStar  className=" customer-rev-star-three"/>
                        <FaRegStar  className=" customer-rev-star-four"/>
                        <FaRegStar  className=" customer-rev-star-five"/>
                        </div>:indiitemcomment.star==1?
                        <div className="customer-review-satr-div">
                        <FaStar   className=" customer-rev-star-one"/>
                        <FaRegStar  className=" customer-rev-star-two"/>
                        <FaRegStar  className="  customer-rev-star-three "/>
                        <FaRegStar  className="customer-rev-star-four"/>
                        <FaRegStar  className="customer-rev-star-five"/>
                        </div>:indiitemcomment.star==0?
                        <div className="customer-review-satr-div">
                        <FaRegStar   className=" customer-rev-star-one"/>
                        <FaRegStar  className=" customer-rev-star-two"/>
                        <FaRegStar  className=" customer-rev-star-three"/>
                        <FaRegStar className=" customer-rev-star-four"/>
                        <FaRegStar  className="customer-rev-star-five"/>
                        </div>:'none'
                      }
                      
                      <div className="customer-review-date">
                        <p className='customer-review-date-para'>{indiitemcomment.dateofcomment}</p>
                      </div>
                    </div>
                    <div className="customer-review-profil">
                      <div className="customer-review-profile-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{fill:'#989898'}} ><path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"/><circle cx="16" cy="11.368" r="3.368"/><path d="M20.673 24h-9.346c-.83 0-1.502-.672-1.502-1.502v-.987a5.404 5.404 0 0 1 5.403-5.403h1.544a5.404 5.404 0 0 1 5.403 5.403v.987c0 .83-.672 1.502-1.502 1.502z"/></svg></div>
                      <div className="customer-review-profile-name">
                        <p className='customer-name-p'>{indiitemcomment.name}</p>
                      </div>             
                    </div>
                    <div className="custome-review-content">
                      <div className="custome-review-content-title">
                        <p>{indiitemcomment.title}</p>
                      </div>
                      <div className="custome-review-content-main">
                        <p className="p-for-review-main-cont">{String(indiitemcomment.comment).length>600?String(indiitemcomment.comment).slice(0,390)+'.........':indiitemcomment.comment}</p>
                      </div>
                      {Array.from(indiitemcomment.imgbyreviwer).length?
                      <div className="custome-review-content-img">
                      {Array.from(indiitemcomment.imgbyreviwer).map((indiimg,index)=>
                          <div key={index} className="rev-customer-img-one">
                            <img src={indiimg} className="rev-img" />
                            
                          </div>
                          
                      )
                      }
                      
                    </div>:<p className='no-img-in-comment'><span className='no-img-in-commen-span'>Images were not uploaded by User</span></p>
                      }
                      
                    </div>
                    </div>
                  
                    
                    
                  
              )}

            </div>
            
          </section>
          <section className='for-speacial-design'>
            <div className="for-special-design-head">
              <p>More by Seller</p>
            </div>
            <div className="for-special-design-overview">
              <div className="special-design-line">
                <div className="spaecial-top-div">
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgone})`}} className="speacial-top spcl-top-one">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgtwo})`}} className="speacial-top spcl-top-two">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgthree})`}} className="speacial-top spcl-top-three">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgfour})`}} className="speacial-top spcl-top-four">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgfive})`}} className="speacial-top spcl-top-five">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgsix})`}} className="speacial-top spcl-top-six">
                  </div>
              
                </div>
                <div className="spaecial-bottom-div">
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgseven})`}} className="speacial-bottom spcl-bottom-one">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgeight})`}} className="speacial-bottom spcl-bottom-two">
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgnine})`}} className="speacial-bottom spcl-bottom-three">
                    
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgten})`}} className="speacial-bottom spcl-bottom-four">
                    
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgeleven})`}} className="speacial-bottom spcl-bottom-five">
                    
                  </div>
                  <div style={{backgroundImage:`url(${itemforoverview.moreothersellings.oterimgtweleve})`}} className="speacial-bottom spcl-bottom-six">
                    
                  </div>
                  
                </div>
                
              </div>
              <div className="line-btn-div">

                  <div className="line-btn">
                    <p className='line-btn-cont'>Peek Inside</p>
                    <div className="line-btn-hover-box"></div>
                  </div>
                </div>
            </div> 
            
          </section>

          <section className='also-buying-products'>
            <div className="also-buying-container">
              <div className="also-buying-heading">
                <p className='also-buy-head-one'>People also Bought</p>
                <p className='also-buy-subhead'>Here’s some of our most similar products people are buying. Click to discover trending style.
                </p>
              </div>
              
                {Array.from(uniqueItems).length>=4?
                  <div className="also-buying-product-list">
                      {Array.from(uniqueItems).map((extramovingitems,index)=>
                      <div key={extramovingitems.name} className="pro-one-for-also-buying">
                          <div className="also-buying-prod-img" style={{backgroundImage:`url('${extramovingitems.imgurl}')`}}>
                            <p className='view-short-of-also-buying'  onClick={()=>getparticularname(index)}>
                              <FaEye></FaEye>
                            </p>
                            
                            <p onClick={()=>getparticularname(index)}  className='buy-btn-of-also-buying'><span className='buy-btn-alos-buying-cont'>View Item</span> </p>
                      </div>
                      <div className="also-buying-prod-info">
                        <p className='also-buying-prod-name'>{extramovingitems.name}</p>
                         {extramovingitems.commentarray[0].star==5?
                        <div className='also-buying-prod-star'>
                          <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                          <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        </div>:extramovingitems.commentarray[0]==4?
                        <div className='also-buying-prod-star'>
                        <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                      </div>:extramovingitems.commentarray[0]==3?
                        <div className='also-buying-prod-star'>
                        <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        </div>:extramovingitems.commentarray[0]==2?
                        <div className='also-buying-prod-star'>
                        <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        </div>:extramovingitems.commentarray[0]==1?
                        <div className='also-buying-prod-star'>
                        <FaStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        </div>:extramovingitems.commentarray[0]==0?
                        <div className='also-buying-prod-star'>
                        <FaRegStar style={{fontSize:'12px'}}  className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'12px'}} className="star-overview"/>
                        </div>:'none'
                      }
                        <div className='also-buying-prod-price'>
                            <p style={{fontSize:'20px'}} className='tot-amt'>${Number(extramovingitems.amt)-(Number(extramovingitems.amt)*Number(extramovingitems.discountper))/100}.00</p>
                          
                        </div>
                      </div>
                      </div>
                      )}
                  </div>
                :
                <div className="also-buying-product-list">
                    <div className="pro-one-for-also-buying">
                    <div className="also-buying-prod-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D')`}}>
                          {/* <p className='view-short-of-also-buying'  onClick={()=>getparticularname(itemforoverview.id)}>
                            <FaEye></FaEye>
                          </p>
                          <p onClick={()=>getparticularname(itemforoverview.id)} className='buy-btn-of-also-buying'><span className='buy-btn-alos-buying-cont'>View Item</span> </p> */}
                    </div>
                    <div className="also-buying-prod-info">
                      <p className='also-buying-prod-name'>homer product</p>
                      <div className='also-buying-prod-star'>
                        <FaStar className="star-overview star-in-also-bying"/>
                        <FaRegStar   className="star-overview star-in-also-bying"/>
                        <FaRegStar  className="star-overview star-in-also-bying"/>
                        <FaRegStar  className="star-overview star-in-also-bying"/>
                        <FaRegStar  className="star-overview star-in-also-bying"/>
                      </div>
                      <div className='also-buying-prod-price'>
                          <p  className='tot-amt amt-in-also-buy'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100}.00</p>
                        
                      </div>
                    </div>
                    </div>
                    <div className="pro-one-for-also-buying">
                      <div className="also-buying-prod-img " style={{backgroundImage:`url('https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D')`}}>
                         {/*  <p className='view-short-of-also-buying' onClick={()=>getparticularname(itemforoverview.id)}>
                            <FaEye></FaEye>
                          </p>
                          <p onClick={()=>getparticularname(itemforoverview.id)}  className='buy-btn-of-also-buying'><span className='buy-btn-alos-buying-cont'>View Item</span> </p> */}
                      </div>
                      <div className="also-buying-prod-info">
                      <p className='also-buying-prod-name'>homer product</p>
                        <p className='also-buying-prod-star'>
                          <FaStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar   className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                        </p>
                        <div className='also-buying-prod-price'>
                            <p  className='tot-amt amt-in-also-buy'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100}.00</p>
                          
                        </div>
                      </div>
                    </div>
                    <div className="pro-one-for-also-buying">
                      <div className="also-buying-prod-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D')`}}>
                         {/*  <p className='view-short-of-also-buying' onClick={()=>getparticularname(itemforoverview.id)}>
                            <FaEye></FaEye>
                          </p>
                          <p onClick={()=>getparticularname(itemforoverview.id)}  className='buy-btn-of-also-buying'><span className='buy-btn-alos-buying-cont'>View Item</span> </p> */}
                      </div>
                      <div className="also-buying-prod-info">
                      <p className='also-buying-prod-name'>homer product</p>
                        <p className='also-buying-prod-star'>
                          <FaStar className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar className="star-overview star-in-also-bying"/>
                        </p>
                        <div className='also-buying-prod-price'>
                            <p  className='tot-amt amt-in-also-buy'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100}.00</p>
                          
                        </div>
                      </div>
                    </div>
                    <div className="pro-one-for-also-buying">
                      <div className="also-buying-prod-img" style={{backgroundImage:`url('https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D')`}}>
                        {/* <p className='view-short-of-also-buying' onClick={()=>getparticularname(itemforoverview.id)} >
                          <FaEye></FaEye>
                        </p>
                        <p onClick={()=>getparticularname(itemforoverview.id)}  className='buy-btn-of-also-buying'><span className='buy-btn-alos-buying-cont'>View Item</span> </p> */}
                      </div>
                      <div className="also-buying-prod-info">
                      <p className='also-buying-prod-name'>homer product</p>
                        <p className='also-buying-prod-star'>
                          <FaStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar   className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                          <FaRegStar className="star-overview star-in-also-bying"/>
                          <FaRegStar  className="star-overview star-in-also-bying"/>
                        </p>
                        <div className='also-buying-prod-price'>
                            <p  className='tot-amt amt-in-also-buy'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100}.00</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                }
                  
              
            </div>
           
          </section>

          <div id="closecommentforX"  className={`commenst-box-for-review-writng  ${commentboxshow?'commentup':'commentdwn'}`} onClick={(id)=>closecommentforX(id)} >
            <div className="comment-writin-before-after">
              <div className="comment-writting-box-container" >
                <div className="comment-writing-head-para-div">
                  <p className='comment-writing-head-para'>Voice your opinion</p>
                </div>
                <div className="rating-with-star-div">
                  <p className='rating-head-p'>Rating</p>
                  <div className="container-of-stars-for-review">
                    <div  onMouseOver={()=>colorchangeforone()} onMouseOut={()=>colornotchangeforone()} onClick={()=>colorfixone()}>
                      <svg className='star-svg one-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                    <div onMouseOver={()=>colorchangefortwo()} onMouseOut={()=>colornotchangefortwo()} onClick={()=>colorfixtwo()}>
                      <svg className='star-svg two-star'  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                    <div onMouseOver={()=>colorchangeforthree()} onMouseOut={()=>colornotchangeforthree()} onClick={()=>colorfixthree()}>
                      <svg className='star-svg three-star' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                    <div onMouseOver={()=>colorchangeforfour()} onMouseOut={()=>colornotchangeforfour()}  onClick={()=>colorfixfour()}>
                      <svg className='star-svg four-star' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                    
                    
                  
                    
                    <div className="fifht-div" onMouseOver={()=>colorchangeforfive()} onMouseOut={()=>colornotchangeforfive()} onClick={()=>colorfixfive()}>
                      <svg className='star-svg five-star' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>

                    </div>
                    
                    <p className='removestar' onClick={()=>removestar()}><CgRemove className="removwstarsvg"/></p>

                  </div>


                </div>
                <div className="comment-writing-title-by-user">
                  <p className='comment-writing-title'>Review Title</p>
                  <input value={reviewtit} onChange={(e)=>setreviewtit(e.target.value)} type="text" className="inpreview title-input-for-comment review-input-border"  placeholder="Give your review a title"/>
                </div>
                <div className="comment-writing-review-box">
                  <p className='comment-writing-title'>Review</p>
                  
                  <textarea value={reviewcomment} onChange={(e)=>setreviewcomment(e.target.value)}   className="inpreview review-input-for-comment review-input-border"  placeholder="Write your comment here" ></textarea>
                </div>
                <div className="comment-writing-image-box">
                  <p className='comment-writing-title'>Picture (optional) [100 X 100]</p>
                  <div className="image-selection-box">
                    <ReactFileReader base64={true}  multipleFiles={true}   handleFiles={handleFiles}   fileTypes={[".jpg",".gif",".jpeg","png"]}>
                      <p className="btn-for-image-select" ><RiUploadCloud2Line className="image-to-upload-in-comment" style={{color:`#707070`,cursor:'pointer'}}/></p>
                    </ReactFileReader>
                  </div>
                  <div className="comment-img-showing-box">
                    {commentimg.map((indiimgforcomment,index)=>
                      
                      <div key={index} className="user-putted-image-for-review">
                        <img src={indiimgforcomment} className="img-of-review" />
                        <p className='comment-img-remove' onClick={()=>removeimgincomment(indiimgforcomment)}><IoIosRemoveCircleOutline style={{cursor:'pointer'}}/></p>
                      </div>
                    )}
                    
                    
                  </div>
                  
                  
                </div>
                <div className="comment-writing-name-by-user">
                  <p className='comment-writing-name'>Name (display publicly)</p>
                  <input value={reviewername} onChange={(e)=>setreviewername(e.target.value)}  type="text" className="inpreview name-input-for-comment review-input-border"  placeholder="Enter your name"/>
                </div>
                <div className="comment-writing-email-by-user">
                  <p className='comment-writing-email-head'>Email (Private)</p>
                  <input value={revieweremail} onChange={(e)=>setrevieweremail(e.target.value)}  type="email" className="inpreview email-input-for-comment review-input-border"  placeholder="Enter your email (private)"/>
                </div>
                <div className="privacy-policy-for-comment">
                  <p className='comment-writing-email'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Fox CART’s <span className='comment-condition'>terms</span>, <span className='comment-condition'>privacy</span> and <span className='comment-condition'>content</span> policies.</p>
                </div>
                <div className="comment-button-div">
                  <button className="comment-btn-cancel" onClick={()=>closewritereviewbox()}>Cancel Review</button>
                  <button className="comment-btn-submit" onClick={()=>submittedreview()}>Submit Review</button>
                </div>
                <div className={`submit-div-container ${commentsubmitbtn?'showsubmit':'noshowsubmit'} ` } >
                      <div className="submit-done-img" style={{backgroundImage:`url('/itemoverview/happytoreccomment.png')`,animation:alertboxinbuy?' rotsussimgforbuyer 1s cubic-bezier(.47,1.64,.41,.8) 0.07s':''}}></div>            
                
                  <p className='submit-p'>Hey! i'm happy to recive your review</p>
                  <div className="submit-line-div" >
                    <div className="submit-line-move" style={{animation:commentsubmitbtn?'submitlinemove 4.1s linear 1s':''}}></div>
                  </div>
                </div>
                  <button className="comment-box-btn"  onClick={()=>closewritereviewbox()}><VscEyeClosed className="eyw-close-for-review" /></button>

              </div>
            </div>
            
            
          </div>

          <div onClick={(event)=>closesharebox(event)}  className={`share-page-div-container ${shareboxshow?'zoominsharebix':'zoomoutsharebox'}`} ref={modalRef}>
            <div  ref={modalReftwo} className="share-container-bar">
              <div className="share-container-bar-header">
                <p className='copy-link-p'>Copy Link</p>
                <p><CgClose onClick={()=>setshareboxshow(false)} className="close-share-div"/></p>
              </div>
              <div className="input-bar-for-current-link">
                
                <input value={window.location.href} type="text" readOnly className="input-for-link-share" />
                <button onClick={()=>copylinkinclipboard()} className="input-for-link-share-copy-btn">{copybtnicon.value?<LuCopyCheck className="copy-btn"/>:<LuCopy className="copy-btn"/>}</button>
               
              </div>
              <div className="sharing-plaform">
                <p className='sharing-platform-head'>share :</p>
                <div className="logo-div-for-sharing">
                  <a target="_blank" href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}}><div className="share-logo"><FaFacebookF className="share-path-logo"></FaFacebookF></div></a>
                  <a target="_blank" href="https://web.whatsapp.com/" style={{textDecoration:'none',color:'black'}}><div className="share-logo"> <FaWhatsapp className="share-path-logo" ></FaWhatsapp></div></a>
                  <a target="_blank" href="https://x.com/" style={{textDecoration:'none',color:'black'}}><div className="share-logo"><FaXTwitter className="share-path-logo" ></FaXTwitter></div></a>
                 
                  
                </div>
              </div>
            </div>
          </div>

          <div  className={`ask-question-conatiner-div ${questboxshow?'zoominsharebix':'zoomoutsharebox'}`} ref={questRef} onClick={(event)=>closequestbox(event)} >
            <div className="ask-qustion-conatienr" ref={questReftwo}>
              <div className="share-container-bar-header">
                <p className='copy-link-p'>Ask a Quest</p>
                <p><CgClose onClick={()=>setquestboxshow(false)} className="close-share-div"/></p>
              </div>
              <form action="submit" style={{height:'auto',width:'100%'}}>
                <div className="div-for-input-for-the-user-questions">
                  <div className="top-two-nput-for-quest">
                    <div className="quest-inp-for-name">
                      <input type="text"  className="quest-inp-for-name-input" placeholder="yourname *" required/>
                    </div>
                    <div className="quest-inp-for-phonenum">
                      <input  className="quest-inp-for-phone-input"   type="text"  placeholder="PhoneNumber *" required/>
                    </div>
                  </div>
                  <div className="quest-input-div-for-user-email">
                    <input className="quest-inp-for-email-input"   type="text"  placeholder="Email *" required />
                  </div>
                  <div className="quest-input-div-for-user-question">
                    <textarea style={{resize:'none'}}  className="quest-inp-for-question-input"  type="text"  placeholder="Your Querries *" required />
                  </div>
                  <div className="div-for-no-blank">
                    <p className="blank-no-p">* Required fields cannot be left blank.</p>

                  </div>
                  <div className="button-div-for-quest-submit">
                    <div  className="button-for-quest-submit">Submit</div>
                  </div>
                </div>
              </form>
              
              
            </div>
          </div>
          
          <div ref={sellerdetRef} onClick={(event)=>closesellerdettailbox(event)}  className={`seller-detail--showing-bar-div ${sellerdetailbox?'slideinsellerdetbox':'slideoutsellerdetbox'}`}>
            <div ref={sellerdetReftwo} className={`seller-detail-showing-conatiner ${sellerdetailbox?'sellerdetailboxanidisp':'sellerdetailboxani'}`}>
              <div className="seller-detail-product-info">
                <div className="seller-product-info-img-prd">
                  <div className="seller-prod-info-img" >

                  </div>
                </div>
                <div className="seller-product-info-prod">
                  <div className="div-for-seller-detail-prod-info">
                    <p className='seller-detail-prod-head-p'>{itemforoverview.name}-<span className='span-for-head-seller-det-prod'>{itemforoverview.seller}</span></p>
                    <p className='seller-detail-prod-p'>{String(itemforoverview.itemdescription).slice(0,30)+'...'}</p>
                    <p className='seller-detail-prod-info-amt-p'>${Number(itemforoverview.amt)-(Number(itemforoverview.amt)*Number(itemforoverview.discountper))/100} <span className='span-area-for-seller-detail-amt'>$ {itemforoverview.amt}</span></p>
                  </div>
                </div>
              </div>

              <div className="div-container-for-seller-detail">
                <div className="seller-info-div-container-for-center">
                  <div className="seller-basic-info">
                    <p className='seller-location-info-seller-name'>{itemforoverview.sellerdetail[0].sellername}</p>
                    <p className='pickup-det-in-seller-detail' ><span><MdDone className="pickup-tick tick-in-seller-detail"/> Pickup available at <span style={{color:'black',fontWeight:'600'}}>{itemforoverview.sellerdetail[0].city}.</span></span><span className='read-font-in-seller-detail'>Usually ready in 24 hours</span></p>
                  </div>
                  <div className="seller-location-info">
                    <p className='seller-location-detail-p'>Address: <span  className='seller-location-detail-p-span'>{itemforoverview.sellerdetail[0].address}</span></p>
                    <p className='seller-location-detail-p'>Village: <span className='seller-location-detail-p-span'>{itemforoverview.sellerdetail[0].village}</span></p>
                    <p className='seller-location-detail-p'>City: <span className='seller-location-detail-p-span'>{itemforoverview.sellerdetail[0].city}</span></p>
                    <p className='seller-location-detail-p'>State: <span className='seller-location-detail-p-span'>{itemforoverview.sellerdetail[0].state}</span></p>
                    <p className='seller-location-detail-p'>Phone: <span className='seller-location-detail-p-span'>{String(itemforoverview.sellerdetail[0].phonenum).slice(0,5)+' - '+String(itemforoverview.sellerdetail[0].phonenum).slice(5,itemforoverview.sellerdetail[0].phonenum.length)}</span></p>
                  </div>
                </div>
                

              </div>
              <div className="seller-google-location-div">
              <MapContainer className="map-image-seller-detail"
                  center={[Number(lattitudeget), Number(longitudeget)]} 
                  zoom={1}
                  
                >
                  
                  <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}></TileLayer>

                  
                  <Marker position={[Number(lattitudeget), Number(longitudeget)]}>
                    <Popup>Your Seller Location</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p className='close-seller-detail-p'><CgClose onClick={()=>setsellerdetailbox(false)} className="close-seller-detail"/></p>
            </div>
          </div>


      </div>
      )}
    </>
    
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