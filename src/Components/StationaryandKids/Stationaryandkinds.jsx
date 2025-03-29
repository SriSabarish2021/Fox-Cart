import React from 'react'
import "../../Styles/Stationaryandkinds/Stationaryandkinds.css";
import { TiTick } from "react-icons/ti";
import Listofitems from '../Listofitems';
import { useEffect } from 'react';

const Stationaryandkinds = ({ setarr,arr,setviewbox, getnameinarr, setcart, sethrtfunc,setfooter}) => {

  useEffect(() => {
    let headcontainer=document.querySelector('.stationary-heade-contr')
    let stasimg1=document.querySelector('.stas-slid-head1-img-1')
    let stasimg2=document.querySelector('.stas-slid-head1-img-2')
    let observer=new IntersectionObserver(([entry])=>{
      if(entry.intersectionRatio>0.5){
        stasimg1.classList.add('stas-img-1-move')
        stasimg2.classList.add('stas-img-2-move')
        
      }else{
        stasimg1.classList.remove('stas-img-1-move')
        stasimg2.classList.remove('stas-img-2-move')
      }
    },{threshold:0.5})

    observer.observe(headcontainer)
    return () => {
      observer.unobserve(headcontainer)

    }
  })
  useEffect(() => {
    let subhead=document.querySelector('.stationary-head')
    let subheadpara=document.querySelector('.stas-head-p-1')
    let lineofpara=document.querySelectorAll('.stas-head-img-2-p')
    let sideimgstas=document.querySelectorAll(".rotate-stas-img")

    let observer=new IntersectionObserver(([entry])=>{
      if(entry.intersectionRatio>0.6){
       lineofpara.forEach((indipara,index) => {
          indipara.classList.add('slidepara')
          indipara.style.transitionDelay=`${index * 0.2}s`
        })
        sideimgstas.forEach((indiimgrot,index) => {
          indiimgrot.classList.add('rotaterimg')
          indiimgrot.style.transitionDelay=`${index * 0.3}s`
        })
        subheadpara.classList.add('nonscale')
       
      }else{
          lineofpara.forEach((indipara) => {
          indipara.classList.remove('slidepara')
          indipara.style.transitionDelay=`0s`
        })
        sideimgstas.forEach((indiimgrot) => {
          indiimgrot.classList.remove('rotaterimg')
          indiimgrot.style.transitionDelay=`0s`
        })
        subheadpara.classList.remove('nonscale')
      }
    },{threshold:0.6})

    observer.observe(subhead)
    return () => {
      observer.unobserve(subhead)
    }
  })
  
    let sats='Stationary'
  return (
    <div className='stationary-container'>

         <div className='stationary-heade-contr'>
          <div className='stats-tit-container'>
            <div className='stas-slid-head1'>
              <p className='stas-slid-head1-p'>Premium Products To Kids</p>
              <p className='stas-slid-head1-p-2'>Place to Purchase Children's Needs</p>
           
            </div>
            <div className='stationary-heade-cont-design'>
              <div className='stationary-heade-round-img-1'></div>
              <div className='stationary-heade-round-img-2'></div>
              <div className='stationary-heade-round-img-3'></div>
              <div className='stationary-heade-round-img-4'></div>
            </div>
       
          </div>
          <div className='stas-slid-head1-img-1'></div>
          <div className='stas-slid-head1-img-2'></div>
        </div>
        <div className='fas-list'>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
        </div>
        <div className='stationary-head'>
            <div className='stationary-head-1'>
                <p className='stas-head-p-1'>Your imagination meets creativity </p>
                <p className='stas-head-p-2'>your one-stop shop for stationery and kid's toys that inspire learning, play, and endless smiles!</p>
                <div className='stas-head-img'>
                    <div className='stas-head-img-1'>
                        <p className='stas-head-img-1-p1'>Good Purchsing</p>
                        <p className='stas-head-img-1-p2'>With Good E-Seller</p>
                    </div>
                    <div className='stas-head-img-2'>
                        <p className='stas-head-img-2-p'><span className='stas-head-img-2-p-span'><TiTick/></span>Non-Toxic Materials</p>
                        <p className='stas-head-img-2-p'><span className='stas-head-img-2-p-span'><TiTick/></span>Soft and Safe Edges</p>
                        <p className='stas-head-img-2-p'><span className='stas-head-img-2-p-span'><TiTick/></span>Fire Resistance</p>
                        <p className='stas-head-img-2-p'><span className='stas-head-img-2-p-span'><TiTick/></span>Age-Appropriate Design</p>
                    </div>
                </div>
                <div className='stas-btn-div'>
                    <button className='stas-btn'>View More</button>

                </div>
            </div>
            <div className='stationary-head-2'>
                <div className='stationary-head-2-img'>
                    <div className='stationary-head-2-img-inner-1 rotate-stas-img'></div>
                    <div className='stationary-head-2-img-inner-2 rotate-stas-img'></div>
                    <div className='stationary-head-2-img-inner-4 rotate-stas-img'></div>
                </div>
            </div>
        </div>
      
       
        <div className='fas-list'>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>

        </div>
        {/* <div className='fashion--grid-img'>
            <div className='fas-img'>
                <section className='fas-sec1'>
                  <div className='fas-sec1-div'></div>
                </section>
                <section className='fas-sec2'>
                  <div className='fas-sec2-div'></div>
                  <div className='fas-sec2-div2'>
                    <div className='fas-sec2-div-con2-1'></div>
                    <div className='fas-sec2-div-con2-2'></div>
                  </div>
                </section>
                <section className='fas-sec3'>
                  <div className='fas-sec3-div-1'></div>
                  <div className='fas-sec3-div-2'></div>
                </section>
            </div>
        </div>  */}
        <div className='flex-img-stas'>
          <div className='flex-stastionary-div-1 flex-stas-img'>
            <div className='flex-img-1'>
              <div className='flex-bg-1'></div>
            </div>
            <p className='flex-img-1-p'>Stastionary</p>
          </div>
          <div className='flex-stastionary-div-2 flex-stas-img'>
            <div className='flex-img-2'>
            <div className='flex-bg-2'></div>

            </div>
            <p  className='flex-img-2-p'>Books</p>
          </div>
          <div className='flex-stastionary-div-3 flex-stas-img'>
            <div className='flex-img-3'>
            <div className='flex-bg-3'></div>

            </div>
            <p className='flex-img-3-p'>Children's Novel</p>
          </div>
          <div className='flex-stastionary-div-4 flex-stas-img'>
            <div className='flex-img-4'>
            <div className='flex-bg-4'></div>

            </div>
            <p className='flex-img-4-p'>Toys</p>
          </div>
          <div className='flex-stastionary-div-5 flex-stas-img'>
            <div className='flex-img-5'>
            <div className='flex-bg-5'></div>

            </div>
            <p className='flex-img-5-p'>Study Materials</p>
          </div>
        </div>
        <div className='fas-list'>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc}  setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={sats} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
        </div>

    </div>
  )
}

export default Stationaryandkinds
