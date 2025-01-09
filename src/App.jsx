import { useEffect, useLayoutEffect, useState , useRef} from 'react'
import './App.css'
import Common from './Components/CommonItems/Common.jsx'
import Fashion from './Components/Fashion/Fashion.jsx'
import Gadjet from './Components/Gadjets/Gadjet.jsx'
import Img from './Components/Img.jsx'

import Jevelery from './Components/Jevelery/Jevelery.jsx'
import Nav from './Components/Nav.jsx'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HomeandKitchendec from './Components/Homedecors/HomeandKitchendec.jsx'
import Stationaryandkinds from './Components/StationaryandKids/Stationaryandkinds.jsx'
import Foter from './Components/Footer/Foter.jsx'


function App() {
  
  const [navtrue,setnavtrue]=useState(false)

  const [loadscreen,setloadscreen]=useState(false)
  const [loadanisrc,setloadanisrc]=useState(false)
  useLayoutEffect(() => {
    setloadanisrc(true)
    return () => {
      setloadanisrc(false)
    };
  }, [])

  useEffect(() => {
    let timerload=setTimeout(() => {
      setloadscreen((loadscreen)=>!loadscreen)
    }, 5000);
  
    return () => {
      setloadscreen(false)
      clearTimeout(timerload)
    }
  }, [])

  return (
    <>
    <div className='loadscreen' style={{display:loadscreen?'none':'flex'}}>
      {loadanisrc&&( <DotLottieReact
        src="https://lottie.host/0df1e67e-9d49-4b2c-901e-353e1c438556/kHOSySzMFk.lottie"
        loop
        autoplay
        style={{ width: '300px', height: '300px' }}
      />)}
     
      <div className='loader-sym-container'>
        <div className='loader-sym-container1'>
          <div className='loader-1'></div>
          <div className='loader-2'></div>
          <div className='loader-3'></div>
          <div className='loader-4'></div>
        </div>      
      </div>
      <div className='loding-line'>
        <div className='loader' style={{animation:loadscreen?'':'slideload 4.8s cubic-bezier(.07,.2,1,.22)'}} ></div>
      </div>
    </div>
    <div className='app' style={{display:loadscreen?'flex':'none'}}>
      <Nav navtrue={navtrue}/>
      <Img setnavtrue={setnavtrue}/>
      <Common/>
      <Gadjet/>
      <Fashion/>
      <HomeandKitchendec/>
      <Stationaryandkinds/>
      <Jevelery/>
      <Foter/>
    </div>
    </>
    
  )
}

export default App



