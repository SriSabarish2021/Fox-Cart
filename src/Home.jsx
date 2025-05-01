import Common from './Components/CommonItems/Common.jsx'
import Fashion from './Components/Fashion/Fashion.jsx'
import Gadjet from './Components/Gadjets/Gadjet.jsx'
import Img from './Components/Img.jsx'
import HomeandKitchendec from './Components/Homedecors/HomeandKitchendec.jsx'
import Stationaryandkinds from './Components/StationaryandKids/Stationaryandkinds.jsx'
import Jevelery from './Components/Jevelery/Jevelery.jsx'
import Grosandcooking from './Components/Groceries/Grosandcooking.jsx'

import { useEffect } from 'react'
import ScrollNav from './Components/ScrollNav.jsx'
import Listofitems from './Components/Listofitems.jsx'
import Twocont from './Components/Side-by-List/Twocont.jsx'

import './Styles/Nav.css'
const Home = ({subaddresscont,setsubaddresscont,setarr,setviewbox,getnameinarr,setcart,sethrtfunc,getparticularname,setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum,setserval,serval,arrofcart}) => {
  /* let getelement=document.querySelector('.titlechange') */
/* 
  let changetitlefunc=()=>{
    setTimeout(() => {
      getelement.textContent='Fox Cart'
      setTimeout(() => {
        getelement.textContent='Welcome You All'
        setTimeout(() => {
          getelement.textContent='Hurryup ur Purchase'
        }, 1000);
      }, 2000);
    }, 3000);
  }

  useEffect(() => {

    let interval=setInterval(() => {
      changetitlefunc()
    }, 4000);
  
    return () => {
      clearInterval(interval)
    }
  }, [getelement]) */
  
  
  let newyr='New Year Celeb'
  let Offer="Offer's Sparkeles"
  let newoff=true

setfooter(true)
let revrow=true

  return (
    
    <div className='home-container-all-element'>    


        
       
        <ScrollNav setfooter={setfooter} setserval={setserval} serval={serval} arrofcart={arrofcart} setlikedisp={setlikedisp} subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} sethrtfunc={sethrtfunc} setcart={setcart} getparticularname={getparticularname} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} setpinnum={setpinnum} pinnum={pinnum} setinpstate={setinpstate} inpstate={inpstate}  setaddress={setaddress} inpaddress={inpaddress} inpname={inpname} setinpname={setinpname}    getnameinarr={getnameinarr} setviewbox={setviewbox}  pad={30} height={'auto'} setarr={setarr} arr={arr}   /> 
        <Img />
       <Common getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Gadjet getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Fashion getparticularname={getparticularname}  setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <HomeandKitchendec getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Stationaryandkinds setfooter={setfooter}  sethrtfunc={sethrtfunc}  setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Grosandcooking getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} arr={arr} setarr={setarr} setviewbox={setviewbox}/>  
    </div>
  )
}

export default Home
