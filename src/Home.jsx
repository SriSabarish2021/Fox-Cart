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

const Home = ({setfooter,setlikedisp,arr,setarr,arrofcart,setviewbox, getnameinarr,setcart,sethrtfunc,navtrue,setnavtrue}) => {
  let getelement=document.querySelector('.titlechange')

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
  }, [getelement])
  
  

    

  return (
    <>
        <Nav arrofcart={arrofcart} navtrue={navtrue}  setlikedisp={setlikedisp} />
        <Img setnavtrue={setnavtrue}/>
        <Common setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Gadjet setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Fashion  setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <HomeandKitchendec setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Stationaryandkinds setfooter={setfooter}  sethrtfunc={sethrtfunc}  setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Jevelery/>
        <Grosandcooking setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} arr={arr} setarr={setarr} setviewbox={setviewbox}/>
    </>
  )
}

export default Home
