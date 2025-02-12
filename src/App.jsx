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
import Itemoverview from './Components/itemoverview/Itemoverview.jsx';


function App() {
  const [navtrue,setnavtrue]=useState(false)
   const [arr,setarr]=useState([
          {
              id:1,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:15,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'weddd',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
          },
          {
              id:2,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:true,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]

          },
          {
              id:3,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
          },
          {
              id:4,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
          },
          {
              id:5,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt-(this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
          },
          {
              id:6,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt(){
                return this.amt - (this.amt*this.discountper)/100
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
          },
          {
              id:7,
              isforsale:true,
              seller:'vasanth&co',
              name:'homeuse',
              imgurl:'https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF',
              amt:220,
              availability:10,
              itemdescription:'Dirt Devil 3-in-1 Lightweight Corded Stick and Handheld Multi-Surface Vacuum EV1426CS, New',
              like:false,
              addcart:false,
              discountper:10,
              quantity:1,
              get totalamt() {
                return this.amt - (this.amt * this.discountper) / 100; 
              },
              commentarray:[
                {
                  idforcommenone:1,
                  star:5,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:2,
                  star:2,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                },
                {
                  idforcommenone:3,
                  star:3,
                  title:'helo',
                  comment:'loremsdfsdfshdf',
                  name:'hariharen',
                  email:'aaa@gmail.com',
                  imgbyreviwer:['https://i5.walmartimages.com/asr/c89bebdd-959e-4984-bc15-0087c0164746.76f2330a67e3d4b493d42818d8d3ab5a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF']
                }
              ]
            }
      ])
  const[likedis,setlikedisp]=useState(false)
  const[arrayforviewmoreitem,setarrayforviewmoreitem]=useState([])

   const [loadscreen,setloadscreen]=useState(false)
  const [loadanisrc,setloadanisrc]=useState(false)
  useLayoutEffect(() => {
    setloadanisrc(true)
    return () => {
      setloadanisrc(false)
    };
  }, [])

/*  useEffect(() => {
    let timerload=setTimeout(() => {
      setloadscreen((loadscreen)=>!loadscreen)
    }, 5000);
  
    return () => {
      setloadscreen(false)
      clearTimeout(timerload)
    }
  }, [])   */
 
  // Cart page
  const [arrofcart,setarrcart]=useState([])

let setcart=(id,quant)=>{
        let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,addcart:!likeitem.addcart}:likeitem)
        let getfilt=changeitem.filter((indiitem)=>indiitem.id==id).map((indiforquanchange)=>indiforquanchange.id==id?{...indiforquanchange,quantity:quant,totalamt:indiforquanchange.amt*quant-(indiforquanchange.amt*quant)*indiforquanchange.discountper/100}:indiforquanchange)
       console.log(arr);
       
        setarr(changeitem)

        if(changeitem.filter((indiitem)=>indiitem.id==id)){
          let cartyesorno=getfilt.map((indifil)=>indifil.addcart)
          if(cartyesorno[0]){
            setarrcart((curcart)=>{
              console.log(curcart);         
              let oldcart=curcart
              let newcart=Array.from(getfilt).filter((addcartitem)=>addcartitem.id==id&&addcartitem.addcart)
              let updatedcart=[...oldcart,...newcart]
              console.log('yes');
              
              return updatedcart
            })
            
          }else{
            setarrcart((curcart)=>{
              console.log(curcart);         
              
              let newcart=Array.from(curcart).filter((addcartitem)=>addcartitem.id!=id)
              let updatedcart=[...newcart]
              console.log('no');
              
              return updatedcart
            })
            
          }
         
        }else{
          console.log('nd');
          
        }

        
    }

let sethrtfunc=(id)=>{
            let changeitem=arr.map((likeitem)=>likeitem.id===id?{...likeitem,like:!likeitem.like}:likeitem)
            setarr(changeitem)
}
        

  const [footer,setfooter]=useState(false)
/* 
  useEffect(() => {
    let addcartarr=Array.from(arr).filter((addcartitem)=>addcartitem.addcart)
    setarrcart((curcart)=>{
      console.log(curcart);
      
      let oldcart=curcart
      let newcart=addcartarr
      let updatedcart=[...oldcart,...newcart]
      console.log(updatedcart);
      
      return updatedcart
    })
  return () => {
    setarrcart([])
  }
}, [arr]) */

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

  
}, [arrofcart,arr])
   
const [viewbox,setviewbox]=useState(false)
const[nameinarr,getnameinarr]=useState('')
let[arrayforshortitem,setarrayforshortitem]=useState([])

const regex = /^[0-9]+$/; 
    
const [alertboxinbuy,setalertboxinbuy]=useState(false)
const [delavailtxt,setdelavailtxt]=useState(false)
const [pindistname,setpindistname]=useState('--')

useEffect(() => {
      
  let getelemntforitemshort=Array.from(arr).filter((indiitem)=>indiitem.id==nameinarr)
  setarrayforshortitem(getelemntforitemshort)
  
}, [nameinarr,arr])


let getpinlocation=async()=>{
  let numpin=Number(pinnum)
  
  let getpincodelocation=async()=>{
      try{
          let getdata=await fetch(`https://api.postalpincode.in/pincode/${numpin}`)
          if(!getdata.ok)throw Error('Request time out')
          let jsonfile=await getdata.json()
          let datageting=jsonfile[0].PostOffice[0].District
          setpindistname(datageting)
          setdelavailtxt(true)
          setalertboxinbuy(false)
                
      }catch(err){
          console.log(err);
          setdelavailtxt(false)

      }
      finally{
          console.log('ended');
          
      }  
  }
  getpincodelocation()
  
}


useEffect(() => {
  setdelavailtxt(false)

return () => {
              
              setdelavailtxt(false)
}
}, [pinnum])


useEffect(() => {
        
  let timerforalrt=setTimeout(() => {
      setalertboxinbuy(false)

  }, 4000);
 
   return () => {
      clearTimeout(timerforalrt)
  }
 }, [alertboxinbuy])

 const[commentboxshow,setcommentboxshow]=useState(false)
 const [shareboxshow,setshareboxshow]=useState(false)
 const [questboxshow,setquestboxshow]=useState(false)
 const [sellerdetailbox,setsellerdetailbox]=useState(false)

  return (
    <>
     {/* <div className='loadscreen' style={{display:loadscreen?'none':'flex'}}>
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
    </div>  */} 
    <div className='app'/*  style={{display:loadscreen?'flex':'none'}} */ >
      <Routes>
        <Route path='/' >
            <Route index element={<Home     const navtrue={navtrue} setnavtrue={setnavtrue} sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} arrofcart={arrofcart}  setlikedisp={setlikedisp} arr={arr} setarr={setarr}/>}/>
            <Route path='yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}></Route>
            <Route path='/proceedtopay' element={<Payment arrayforviewmoreitem={arrayforviewmoreitem} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/proceedtopay/:id' element={<Payment arrayforviewmoreitem={arrayforviewmoreitem} pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>
            <Route path='/viewmore/:id' element={<Itemoverview sellerdetailbox={sellerdetailbox} setsellerdetailbox={setsellerdetailbox} setquestboxshow={setquestboxshow} questboxshow={questboxshow} shareboxshow={shareboxshow} setshareboxshow={setshareboxshow} arrayforviewmoreitem={arrayforviewmoreitem} setarrayforviewmoreitem={setarrayforviewmoreitem} setarrcart={setarrcart} arrofcart={arrofcart} sethrtfunc={sethrtfunc} setcart={setcart} setlikedisp={setlikedisp} arr={arr} setarr={setarr} commentboxshow={commentboxshow} setcommentboxshow={setcommentboxshow} pinnum={pinnum}  setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} setdelavailtxt={setdelavailtxt} pindistname={pindistname} setpindistname={setpindistname} setfooter={setfooter} alertboxinbuy={alertboxinbuy} setalertboxinbuy={setalertboxinbuy} regex={regex} setviewbox={setviewbox}/> }></Route>
            <Route path='/viewmore/:id/yourcart' element={ <Cart arr={arr} setarr={setarr} sumamt={sumamt}  arrofcart={arrofcart} setarrcart={setarrcart} setlikedisp={setlikedisp}  setfooter={setfooter}/>}></Route>
            <Route path='/viewmore/:id/proceedtopay' element={<Payment arrayforviewmoreitem={arrayforviewmoreitem} pinnum={pinnum} arr={arr} setfooter={setfooter} sumamt={sumamt} arrofcart={arrofcart} setarrcart={setarrcart}/>}/>

        </Route>
        </Routes>
     
      <Foter footer={footer}/>
      <LikePage sellerdetailbox={sellerdetailbox} questboxshow={questboxshow} shareboxshow={shareboxshow} commentboxshow={commentboxshow} viewbox={viewbox} likedis={likedis} setlikedisp={setlikedisp} arr={arr} setarr={setarr}/> 
      <Itemshortview arrayforshortitem={arrayforshortitem} getpinlocation={getpinlocation} delavailtxt={delavailtxt} setdelavailtxt={setdelavailtxt} pindistname={pindistname} setpindistname={setpindistname} pinnum={pinnum} setpinnum={setpinnum} sethrtfunc={sethrtfunc}  setcart={setcart} nameinarr={nameinarr} setviewbox={setviewbox} viewbox={viewbox} alertboxinbuy={alertboxinbuy} setalertboxinbuy={setalertboxinbuy} regex={regex}/>
    </div>
    </>
    
  )
}

export default App



