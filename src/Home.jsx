import Common from './Components/CommonItems/Common.jsx'
import Fashion from './Components/Fashion/Fashion.jsx'
import Gadjet from './Components/Gadjets/Gadjet.jsx'
import Img from './Components/Img.jsx'
import HomeandKitchendec from './Components/Homedecors/HomeandKitchendec.jsx'
import Stationaryandkinds from './Components/StationaryandKids/Stationaryandkinds.jsx'
import Jevelery from './Components/Jevelery/Jevelery.jsx'
import Grosandcooking from './Components/Groceries/Grosandcooking.jsx'
import Nav from './Components/Nav.jsx'
import { useEffect } from 'react'
import ScrollNav from './Components/ScrollNav.jsx'
import Listofitems from './Components/Listofitems.jsx'
import Twocont from './Components/Side-by-List/Twocont.jsx'

const Home = ({setserval,serval,setfooter,setlikedisp,arr,setarr,arrofcart,setviewbox, getnameinarr,setcart,sethrtfunc,getparticularname}) => {
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
    
    <>    
    
    <Twocont getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} direction={revrow} arr={arr}  setarr={setarr}/>
        {/* <Nav />
        <ScrollNav setfooter={setfooter} setserval={setserval} serval={serval} arrofcart={arrofcart} setlikedisp={setlikedisp} />
        <Img />
        <Common getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Gadjet getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Fashion getparticularname={getparticularname}  setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <HomeandKitchendec getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Stationaryandkinds setfooter={setfooter}  sethrtfunc={sethrtfunc}  setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Grosandcooking getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} arr={arr} setarr={setarr} setviewbox={setviewbox}/> */}
    </>
  )
}

export default Home
