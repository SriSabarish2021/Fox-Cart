import Common from './Components/CommonItems/Common.jsx'
import Fashion from './Components/Fashion/Fashion.jsx'
import Gadjet from './Components/Gadjets/Gadjet.jsx'
import Img from './Components/Img.jsx'
import HomeandKitchendec from './Components/Homedecors/HomeandKitchendec.jsx'
import Stationaryandkinds from './Components/StationaryandKids/Stationaryandkinds.jsx'
import Jevelery from './Components/Jevelery/Jevelery.jsx'
import Grosandcooking from './Components/Groceries/Grosandcooking.jsx'
import Nav from './Components/Nav.jsx'
import { useState } from 'react'

const Home = ({cartcount,setlikedisp,arr,setarr}) => {
    const [navtrue,setnavtrue]=useState(false)

  return (
    <>
        <Nav navtrue={navtrue} cartcount={cartcount} setlikedisp={setlikedisp}/>
        <Img setnavtrue={setnavtrue}/>
        <Common arr={arr} setarr={setarr}/>
        <Gadjet arr={arr} setarr={setarr}/>
        <Fashion arr={arr} setarr={setarr}/>
        <HomeandKitchendec arr={arr} setarr={setarr}/>
        <Stationaryandkinds arr={arr} setarr={setarr}/>
        <Jevelery/>
        <Grosandcooking arr={arr} setarr={setarr}/>
    </>
  )
}

export default Home
