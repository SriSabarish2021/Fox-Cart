import { useEffect, useLayoutEffect, useState , useRef} from 'react'
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Foter from './Components/Footer/Foter.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'

import LikePage from './Components/Likepage/LikePage.jsx'
import Cart from './Components/Cartpage/Cart.jsx';
import Payment from './Components/Cartpage/Payment.jsx';
import Itemshortview from './Components/itemshortview/Itemshortview.jsx';


function App() {
   const [arr,setarr]=useState([
          {
              id:1,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:2,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:3,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:4,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:5,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:6,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              quantity:1,
              totalamt:200
          },
          {
              id:7,
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:'200',
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              quantity:1,
              totalamt:200
          }
      ])
  const[likedis,setlikedisp]=useState(false)

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

  // Cart page
let setcart=(id)=>{
        let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,addcart:!likeitem.addcart}:likeitem)
        setarr(changeitem)
    }

let sethrtfunc=(id)=>{
            let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,like:!likeitem.like}:likeitem)
            setarr(changeitem)
}
        

  const [footer,setfooter]=useState(false)
  const [arrofcart,setarrcart]=useState([])

  useEffect(() => {
    let addcartarr=Array.from(arr).filter((addcartitem)=>addcartitem.addcart)
    setarrcart(addcartarr)
  return () => {
    setarrcart([])
  }
}, [arr])

const [sumamt,setsumamt]=useState(0)

const [pinnum,setpinnum]=useState('')


useEffect(() => {
  
    Array.from(arrofcart).forEach((indiarramt)=>
        setsumamt((curamt)=>{
            let curentamt=indiarramt.totalamt
            let totamt=Number(curamt)+Number(curentamt)
            return totamt
        })
    )

    return () =>{
        setsumamt(0)
    }

  
}, [arrofcart])

const [viewbox,setviewbox]=useState(false)
const[nameinarr,getnameinarr]=useState('')

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
    <div className='app' style={{display:loadscreen?'flex':'none'}} >
      <Routes>
        <Route path='/' >
            <Route index element={<Home sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arrofcart={arrofcart}  setlikedisp={setlikedisp} arr={arr} setarr={setarr}/>}/>
            <Route path='yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}>
              
            </Route>
            <Route path='/proceedtopay' element={<Payment setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/proceedtopay/:id' element={<Payment pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>

        </Route>
        </Routes>
     
      <Foter footer={footer}/>
      <LikePage viewbox={viewbox} likedis={likedis} setlikedisp={setlikedisp} arr={arr} setarr={setarr}/> 
      <Itemshortview pinnum={pinnum} setpinnum={setpinnum} sethrtfunc={sethrtfunc}  setcart={setcart} nameinarr={nameinarr} setviewbox={setviewbox} arr={arr} setarr={setarr} viewbox={viewbox}/>
    </div>
    </>
    
  )
}

export default App



