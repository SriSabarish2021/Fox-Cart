import { useEffect, useRef, useState } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link, Links, useLocation, useParams } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { ImFirefox } from "react-icons/im";
import { FaStar } from "react-icons/fa";
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

import { FaRegStar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoManOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { VscEyeClosed } from "react-icons/vsc";
import { CgRemove } from "react-icons/cg";

import { IoHeartCircleSharp } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";

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

const Itemoverview = ({setlikedisp,setfooter,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,alertboxinbuy,commentboxshow,setcommentboxshow,arr,setarr,setcart,sethrtfunc,arrofcart,setarrcart,setarrayforviewmoreitem,arrayforviewmoreitem,shareboxshow,setshareboxshow,setquestboxshow,questboxshow}) => {
  let modalRef=useRef(null)
  let modalReftwo=useRef(null)
  let questRef=useRef(null)
  let questReftwo=useRef(null)
  let {id}=useParams()
  let copybtnicon=useRef(false)
  const copylinkinclipboard=()=>{
    let getvalue=document.querySelector('.input-for-link-share').value
    console.log(getvalue);
    navigator.clipboard.writeText(getvalue)
    copybtnicon.value=true
    
  }
  const closesharebox = (event) => {
    if (modalRef.current && modalRef.current.contains(event.target)) {
      return
      
    }else if(modalReftwo.current && modalReftwo.current.contains(event.target)){
      setshareboxshow(false)
    }else{
      console.log('sogamee');
      
    }
  };
  const closequestbox = (event) => {
    if (questRef.current && questRef.current.contains(event.target)) {
      return
      
    }else if(questReftwo.current && questReftwo.current.contains(event.target)){
      setquestboxshow(false)
    }else{
      console.log('sogamee');
      
    }
  };
  let questreceivingform=()=>{
    console.log('hello');
    
  }

const [quantityget,setquantity]=useState(1)
  useEffect(() => {
    let viewmoreitem=Array.from(arr).filter((viewmoreindi)=>
      viewmoreindi.id==id
    )
    let newer=viewmoreitem.map((indinewerforoverview)=>indinewerforoverview.id==id?{...indinewerforoverview,quantity:quantityget}:indinewerforoverview)
    console.log(viewmoreitem);
    console.log(newer);
    
    
    setarrayforviewmoreitem((curitem)=>{
      let oldarr=curitem
      let newer=viewmoreitem.map((indinewerforoverview)=>indinewerforoverview.id==id?{...indinewerforoverview,quantity:quantityget}:indinewerforoverview)
      
      return newer
      
    })
  
    return () => {
      setarrayforviewmoreitem([])
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

               
               let updater=[...indicomment,{idforcommenone:Number(indicomment.length)+1,star:starnum,title:reviewtit,comment:reviewcomment,name:reviewername,email:revieweremail,imgbyreviwer:commentimg}]               
               
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

  let getdateforcomment=new Date().getDate()
  let getdayforcomment=new Date().getMonth()
  let getyearforcomment=new Date().getFullYear()
  let dates=`${getdateforcomment}/${getdayforcomment+1}/${getyearforcomment}`
  

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
  let detimgdivformove= document.querySelector(".main-overview-img")

  if(detimgdivformove){
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
      detimgdivformove.style.transform = `translateY(${scrollTop*0.95}px) translateY(-120px)`;
  });
  
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
      if (boxone) {
        observeone.unobserve(boxone)
  
      }
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
      if (boxtwo) {
        observetwo.unobserve(boxtwo)
  
      }
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
      if (boxthree) {
        observethree.unobserve(boxthree)
  
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
  

 
  

  

    useEffect(() => {
      
        window.scrollTo(0,0)
        setfooter(true)

    }, [])

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

  return (
    <>
    {Array.from(arrayforviewmoreitem).map((itemforoverview)=>
      <div key={itemforoverview.id} className='itemoverview-container'>

          <div className="navbar-for-itemoverview">
              <div className="div-for-nav-one">
                <div className="nav-bar-for-overview-logo">
                  <Link to='/' style={{textDecoration:'none',color:` #002612`}}>
                    <p className='overview-logo'>F<ImFirefox className="fox-browser-logo"/>X <span className='logo-span-overview'>CART</span></p>
                  </Link>
                  
                </div>
                <div className="nav-bar-for-overview-logo-cont">
                <Link to='/' style={{textDecoration:'none',textDecorationColor:'none'}}>
                    <p className='nav-cont-logo-overview'><RiHome2Line/></p>
                </Link>
                  
                  
                  <p className='nav-cont-logo-overview'><RiContactsLine/></p>
                  <p className='nav-cont-logo-overview' onClick={()=>setlikedisp(true)}><FaRegHeart style={{cursor:'pointer'}}/></p>
                  <Link to={`/viewmore/${id}/yourcart`} style={{textDecoration:'none',textDecorationColor:'none'}}>
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
                    <p className='sale-box'>{itemforoverview.isforsale?'sale':'not for sale'}</p>
                    <div className="sel-prod-name">
                      <p className='seller'>{itemforoverview.seller}</p>
                      <p className='prod-name'>{itemforoverview.name}</p>
                    </div>
                    <div className="review">
                      <div className="star-rev">
                        <FaStar className="star-overview"/>
                        <FaStar className="star-overview"/>
                        <FaStar className="star-overview"/>
                        <FaStar className="star-overview"/>
                        <FaStarHalfAlt className="star-overview"/>
                      </div>
                        <p className='review-persons'>{itemforoverview.commentarray.length} reviews</p>
                        <p className='alert-to-sale'><ImFire style={{color:'orangered',fontSize:'15px'}}/>12 sold on last 15 hours</p>
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
                      <p className="avail-div-one-para">Availability : <span style={{animation:Number(itemforoverview.availability)<10?'availabilityanimate 2s linear infinite':''}} className='avail-div-one-para-span'><FaRegCircleDot style={{height:'100%',color:Number(itemforoverview.availability)>=11&&Number(itemforoverview.availability)<=20?`rgb(227, 144, 0)`:Number(itemforoverview.availability)>=21&&Number(itemforoverview.availability)<=30?`rgb(0, 152, 152)`:Number(itemforoverview.availability)>=31?`rgb(28, 165, 0)`:`rgb(255, 0, 0)`,fontSize:'13px',display:'flex',justifyContent:'center',alignItems:'center'
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
                      <p className='deliver-overview'><TbTruckDelivery style={{color:`rgb(255, 104, 109)`}} className="del-box-svg"/>Estimate delivery time: <span className='side-txt-del'>3-5 days across India.</span></p>
                    </div>
                    <div className="del-box-two">
                      <p className='coupon-overview'><RiDiscountPercentLine style={{color:`rgb(7, 166, 177)`}} className="del-box-svg"/>Use code <span className='side-txt-del'>"WELCOME"</span> for discount 10% on your first order.</p>

                    </div>
                    <div className="del-box-three">
                      <p  className='package-overview'><LuPackageOpen style={{color:`rgb(122, 77, 0)`}} className="del-box-svg"/>Free shipping & returns: <span className='side-txt-del'>On all orders over $499.</span></p>

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
                      {itemforoverview.like?<p onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview'><FaRegHeart/>
                        <p className='show-to-hover'>remove like list
                          <p className='down-arr-for-hover'><FaCaretDown className="down-svg"/>
                          </p>
                        </p>
                      </p>:<p onClick={()=>sethrtfunc(itemforoverview.id)} className='like-btn-overview'><FaRegHeart/>
                        <p className='show-to-hover'>add to like list
                          <p className='down-arr-for-hover'><FaCaretDown className="down-svg"/>
                          </p>
                        </p>
                      </p>}
                      
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
                        <p className='sub-p-additional-info'>Guaranteed premium quality – every product, every time!</p>
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

              <div className="cover-box-two" >
                <div className="additional-infofor-next">
                  <div className="additional-info-overview-one-cont">
                    <div className="additional-info-overview-cont-one" style={{padding:'0px 30px 0px 30px'}}>
                      <p className='additional-info-para qual'>Product Highlights</p>
                      <div className="main-info-additional">
                        <p className='additional-info-para head-cont'><span style={{fontSize:'50px'}} className='head-cont-span'>Innovative Design</span></p>
                      
                      </div>
                    
                      <div className='additional-info-para additional-info-second-div'>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional-covertwo"></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional'>Water Resistent</p>
                            <p className='part-one-subtxt-additional'>Water Depth test of 100m.
                            </p>
                          </div>
                        </div>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional-covertwo-two"></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional'>UnBrokable</p>
                            <p className='part-one-subtxt-additional'>1000 Drop Test
                            </p>
                          </div>
                        </div>
                        <div className="part-one-addi-info">
                          <div className="part-one-logo">
                            <div className="logo-icon-additional-three" style={{backgroundImage:"url('https://www.svgrepo.com/show/206482/ear.svg')"}}></div>
                          </div>
                          <div className="part-one-cont">
                            <p className='part-one-head-additional'>Ear Fit</p>
                            <p className='part-one-subtxt-additional'>Professional Building
                            </p>
                          </div>
                        </div>
                        <div className="overflow-none scroller-for-additionalinfo"  style={{width:'90%'}}>
                            <div className="three-cont-move-in-nav bar-cont-one">
                              <p className='p-for-three-cont p-for-three-cont-one p-for-scrolller' style={{color:'black'}}><span>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                      </span><span>Good Build quality - <span style={{fontSize:'17px',fontFamily:'Exo 2'}}>John</span> </span><span className='insta-page-prof' style={{backgroundImage:"url('https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600')",backgroundPosition:'center',backgroundRepeat:'noRepeat',    backgroundSize:'cover'}}></span></p>
                            </div>
                            <div className="three-cont-move-in-nav  bar-cont-two">
                            <p className='p-for-three-cont p-for-three-cont-one p-for-scrolller' style={{color:'black'}}><span>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStarHalfAlt  className="star-overview"/>
                                                </span><span>Worth for Purchase - <span style={{fontSize:'17px',fontFamily:'Exo 2'}}>Rajesh</span> </span><span className='insta-page-prof' style={{backgroundImage:"url('https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600')",backgroundPosition:'center',backgroundRepeat:'noRepeat',    backgroundSize:'cover'
                            }}></span></p>
                              
                            </div>
                            <div className="three-cont-move-in-nav  bar-cont-three">
                            <p className='p-for-three-cont p-for-three-cont-one p-for-scrolller' style={{color:'black'}}><span>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStar  className="star-overview"/>
                              <FaStarHalfAlt  className="star-overview"/>
                              <FaRegStar  className="star-overview"/>
                      </span><span>Good Bass - <span style={{fontSize:'17px',fontFamily:'Exo 2'}}>Yash</span> </span> <span className='insta-page-prof' style={{backgroundImage:"url('https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600')",backgroundPosition:'center',backgroundRepeat:'noRepeat',    backgroundSize:'cover'}}></span></p>
                            </div>
                        </div>
                        
                      </div>
                      <div className="div-for-cover-two-btn">
                        <button className="cover-two-btn">Buy Item</button>
                      </div>
                    </div>
                  </div>
                  <div className="additional-info-overview-one-img">
                    <div className="additional-info-overview-img-cover-two-img" >
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
                              1 comment
                            </div>
                          </div>
                          <div className="share-insta">
                            <div className="share-bar-one" onClick={()=>setliketrue(!liketrue)}>{liketrue?<AiFillLike style={{animation:liketrue?`thumbsup 0.5s ease`:''}} className="thumb"/>:<AiOutlineLike style={{animation:liketrue?'':`thumbsup 0.5s ease`}} />} 
                            <p>like</p></div>
                            <div className="share-bar-two"><GoComment/>comment</div>
                            <div className="share-bar-three"><PiShareFat/>Share</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="additional-info-overview-img-for-parent-covertwo-two"  onMouseMove={handlemove} onMouseLeave={handlemoveout}  style={{backgroundPosition:postion}} ></div>
                  </div>
                </div>
              </div>

              <div className="cover-box-three">
                <div className="additional-infofor-three">
                  <div className="additional-info-overview-one-cont">
                    <div className="additional-info-overview-cont--cover-three-one">
                      <p className='additional-info-para qual'>Effortless Choice</p>
                      <div className="main-info-additional">
                        <p className='additional-info-para head-cont'>provide <span className='head-cont-span'>18</span>different colors</p>
                      </div>
                      <div className="conver-three-para-cont">
                        <p className='para-cont-p-cover-three'>The place Where Customer can <span className='para-cont-p-span'>Manage</span> Orders</p>
                        <p className='para-cont-p2-cover-three'>The place brings the customer to the world of fullfilling their choice on their own fav's with more reliable and with more safer</p>
                      </div>
                      <div className="div-for-cover-two-btn">
                        <button className="cover-two-btn" style={{marginTop:'10px',backgroundColor:'black',color:'white'}}>Buy Item</button>
                      </div>
                    </div>
                  </div>
                  <div className="additional-info-overview-one-img" style={{paddingLeft:'0px',alignItems:'center'}}>
                    <div className="additional-info-overview-img-cover-three-img"   >
                        <div className="additional-info-overview-img-cover-three-one"  ></div>
                        <div className="additional-info-overview-img-cover-three-two"  ></div>
                        <div className="additional-info-overview-img-cover-three-three"  ></div>
                        <div className="additional-info-overview-img-cover-three-four"  ></div>
                        <div className="additional-info-overview-img-cover-three-five"  ></div>
                        <div className="additional-info-overview-img-cover-three-six"  ></div>
                        <div className="additional-info-overview-img-cover-three-seven"  ></div>
                        <div className="additional-info-overview-img-cover-three-eight"  ></div>
                      
                    </div>
                    {/* <div className="additional-info-overview-img-for-parent"  onMouseMove={()=>handlemove()} onMouseLeave={()=>handlemoveout()}  style={{backgroundPosition:postion}} ></div> */}
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
                    <span className='outof-in-review'>5.00 out of 5</span>
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
                  <button className="write-rev-btn" onClick={()=>setcommentboxshow(true)}>
                    <div className="btn-design-box-comment"></div>Write a Review</button>
                </div>
              </div>
            </div>
            
            <div className="read-more-btn-div-in-comment" style={{display:commentread<=3?'none':'flex'}}>
                <button role="button"  onClick={()=>setcommentreadclick(!commentreadclick)}  className="read-more-btn-in-comment">{!commentreadclick&&commentread>=4?'Read More':'Read Less'}</button>
              

            </div>
            <div className="custome-commment-all-div" style={{height:!commentreadclick&&commentread>=4?3*380:commentreadclick&&commentread>=4?commentread*380:commentread*380,transition:'height 1s ease'}}>
              {filterarray.map((indiitemcomment)=>
                    <div key={indiitemcomment.idforcommenone} className="customer-comment">
                    <div className="customer-comment-head">
                      {indiitemcomment.star==5?
                        <div className="customer-review-satr-div">
                          <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                          <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                          <FaStar style={{fontSize:'20px'}} className="star-overview"/>
                        </div>:indiitemcomment.star==4?
                        <div className="customer-review-satr-div">
                        <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'20px'}} className="star-overview"/>
                      </div>:indiitemcomment.star==3?
                        <div className="customer-review-satr-div">
                        <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaStar style={{fontSize:'16px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'20px'}} className="star-overview"/>
                        </div>:indiitemcomment.star==2?
                        <div className="customer-review-satr-div">
                        <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                        <FaStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'16px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'20px'}} className="star-overview"/>
                        </div>:indiitemcomment.star==1?
                        <div className="customer-review-satr-div">
                        <FaStar style={{fontSize:'20px'}}  className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'16px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'20px'}} className="star-overview"/>
                        </div>:indiitemcomment.star==0?
                        <div className="customer-review-satr-div">
                        <FaRegStar style={{fontSize:'20px'}}  className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'16px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'18px'}} className="star-overview"/>
                        <FaRegStar style={{fontSize:'20px'}} className="star-overview"/>
                        </div>:'none'
                      }
                      
                      <div className="customer-review-date">
                        <p className='customer-review-date-para'>{dates}</p>
                      </div>
                    </div>
                    <div className="customer-review-profil">
                      <div className="customer-review-profile-img"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"60",height:"60",viewBox:"0 0 60 60", fill:"none"}} ><rect style={{width:"60",height:"60",rx:"30" ,fill:"#F5F5F5"}} /><path d="M43.0207 40.2512C35.7676 33.1819 24.232 33.1819 16.9789 40.2512C16.7452 40.4858 16.7376 40.8718 16.9714 41.1065C17.2051 41.3411 17.5821 41.3487 17.8158 41.1216C24.6015 34.514 35.3906 34.514 42.1763 41.1216C42.4175 41.3562 42.802 41.3487 43.0282 41.1065C43.262 40.8643 43.2544 40.4858 43.0207 40.2512Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /><path d="M30.0007 32.5322C33.9967 32.5322 37.2387 29.2776 37.2387 25.2661C37.2387 21.2546 33.9967 18 30.0007 18C26.0047 18 22.7627 21.2546 22.7627 25.2661C22.7702 29.2776 26.0047 32.5246 30.0007 32.5322ZM30.0007 19.211C33.3332 19.211 36.0324 21.9207 36.0324 25.2661C36.0324 28.6115 33.3332 31.3211 30.0007 31.3211C26.6682 31.3211 23.969 28.6115 23.969 25.2661C23.9766 21.9207 26.6682 19.2186 30.0007 19.211Z" style={{fill:"#999999" ,stroke:"#999999", strokeWidth:"0.5"}} /></svg></div>
                      <div className="customer-review-profile-name">
                        <p className='customer-name-p'>{indiitemcomment.name}</p>
                      </div>             
                    </div>
                    <div className="custome-review-content">
                      <div className="custome-review-content-title">
                        <p>{indiitemcomment.title}</p>
                      </div>
                      <div className="custome-review-content-main">
                        <p className="p-for-review-main-cont">{indiitemcomment.comment}</p>
                      </div>
                      <div className="custome-review-content-img">
                        {Array.from(indiitemcomment.imgbyreviwer).map((indiimg,index)=>
                            <div key={index} className="rev-customer-img-one">
                              <img src={indiimg} className="rev-img" />
                              
                            </div>
                            
                        )
                        }
                        
                      </div>
                    </div>
                    </div>
                  
                    
                    
                  
              )}

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

          <div  className={`commenst-box-for-review-writng  ${commentboxshow?'commentup':'commentdwn'}`} >
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
                      <p className="btn-for-image-select" ><RiUploadCloud2Line style={{fontSize:"50px",color:`#707070`,cursor:'pointer'}}/></p>
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

          <div onClick={(event)=>closesharebox(event)}  className={`share-page-div-container ${shareboxshow?'zoominsharebix':'zoomoutsharebox'}`} ref={modalReftwo}>
            <div  ref={modalRef} className="share-container-bar">
              <div className="share-container-bar-header">
                <p className='copy-link-p'>Copy Link</p>
                <p><CgClose onClick={()=>setshareboxshow(false)} className="close-share-div"/></p>
              </div>
              <div className="input-bar-for-current-link">
                
                <input value={window.location.href} type="text" readOnly className="input-for-link-share" />
                <button onClick={()=>copylinkinclipboard()} className="input-for-link-share-copy-btn">{copybtnicon.value?<LuCopyCheck style={{fontSize:'18px'}}/>:<LuCopy style={{fontSize:'18px'}}/>}</button>
               
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

          <div  className={`ask-question-conatiner-div ${questboxshow?'zoominsharebix':'zoomoutsharebox'}`} ref={questReftwo} onClick={(event)=>closequestbox(event)} >
            <div className="ask-qustion-conatienr" ref={questRef}>
              <div className="share-container-bar-header">
                <p className='copy-link-p'>Ask a Quest</p>
                <p><CgClose onClick={()=>setquestboxshow(false)} className="close-share-div"/></p>
              </div>
              <form action="submit" style={{height:'auto',width:'100%'}}>
                <div className="div-for-input-for-the-user-questions">
                  <div className="top-two-nput-for-quest">
                    <div className="quest-inp-for-name">
                      <input type="text" style={{fontSize:'15px',letterSpacing:'1px',color:'rgb(53, 53, 53)'}}  className="quest-inp-for-name-input" placeholder="yourname *" required/>
                    </div>
                    <div className="quest-inp-for-phonenum">
                      <input  className="quest-inp-for-phone-input" style={{fontSize:'15px',letterSpacing:'1px',color:'rgb(53, 53, 53)'}}  type="text"  placeholder="PhoneNumber *" required/>
                    </div>
                  </div>
                  <div className="quest-input-div-for-user-email">
                    <input className="quest-inp-for-email-input" style={{fontSize:'15px',letterSpacing:'1px',color:'rgb(53, 53, 53)'}}  type="text"  placeholder="Email *" required />
                  </div>
                  <div className="quest-input-div-for-user-question">
                    <textarea style={{fontSize:'15px',letterSpacing:'1px',color:'rgb(53, 53, 53)',resize:'none'}}  className="quest-inp-for-question-input"  type="text"  placeholder="Your Querries *" required />
                  </div>
                  <div className="div-for-no-blank">
                    <p className="blank-no-p">* Required fields cannot be left blank.</p>

                  </div>
                  <div className="button-div-for-quest-submit">
                    <button onSubmit={()=>questreceivingform()} className="button-for-quest-submit">Submit</button>
                  </div>
                </div>
              </form>
              
              
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