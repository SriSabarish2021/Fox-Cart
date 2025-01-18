import Common from './Components/CommonItems/Common.jsx'
import Fashion from './Components/Fashion/Fashion.jsx'
import Gadjet from './Components/Gadjets/Gadjet.jsx'
import Img from './Components/Img.jsx'
import HomeandKitchendec from './Components/Homedecors/HomeandKitchendec.jsx'
import Stationaryandkinds from './Components/StationaryandKids/Stationaryandkinds.jsx'
import Jevelery from './Components/Jevelery/Jevelery.jsx'
import Grosandcooking from './Components/Groceries/Grosandcooking.jsx'
import Nav from './Components/Nav.jsx'
import { useEffect, useState } from 'react'

const Home = ({setlikedisp,arr,setarr,arrofcart,setviewbox}) => {
    const [navtrue,setnavtrue]=useState(false)
    
    

  return (
    <>
        <Nav arrofcart={arrofcart} navtrue={navtrue}  setlikedisp={setlikedisp} />
        <Img setnavtrue={setnavtrue}/>
        <Common setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Gadjet setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Fashion setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <HomeandKitchendec setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Stationaryandkinds setviewbox={setviewbox} arr={arr} setarr={setarr}/>
        <Jevelery/>
        <Grosandcooking arr={arr} setarr={setarr} setviewbox={setviewbox}/>
    </>
  )
}

export default Home
