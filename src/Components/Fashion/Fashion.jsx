import "../../Styles/Fashion/Fashion.css";
import { TiTick } from "react-icons/ti";
import Listofitems from '../Listofitems';
import Twocont from "../Side-by-List/Twocont";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Fashion = ({/* fashion: { firstitem, seonditem, thirditem, fourthitem, fifthitem }, */arr,setarr,setviewbox,getnameinarr, setcart, sethrtfunc,setfooter,getparticularname}) => {

  useEffect(() => {
    let divoftick=document.querySelector('.fashion-about-sec-2')
    let observer=new IntersectionObserver(([entry])=>{
    let divoftickcont=document.querySelectorAll('.fashion-tick-p')
    let imgfasani=document.querySelectorAll('.animateimgfas')

      if(entry.intersectionRatio>0.8){
        divoftickcont.forEach((inditick,index)=>{
          inditick.classList.add('tickani')
          inditick.style.transitionDelay = `${index * 0.1}s`}
        )
        imgfasani.forEach((imgfas,indeximg)=>{
          imgfas.classList.add('imgani')
          imgfas.style.transitionDelay = `${indeximg * 0.1}s`
        })

       
      }
      else{
       divoftickcont.forEach((inditick)=>{
          inditick.classList.remove('tickani')
          inditick.style.transitionDelay = `0s`}
        )
        imgfasani.forEach((imgfas)=>{
          imgfas.classList.remove('imgani')
          imgfas.style.transitionDelay = `0s`
        })
      }
    },{threshold:0.8})
  
    observer.observe(divoftick)

    return () => {
      observer.unobserve(divoftick)
    }
  }) 
  
  let fas='New Fashion'
    let fasone='New Designs'
      let fastwo="Men's Wear"
        let fasthree="Women's Fashion"
        let fasfour="Lenin Collection's"
  let revrow=true
  return (
    <div className='fashion-container'>
       <div className='fashion-head'>
        <div className='fashion-head-div'>
          <p className='fashion-head-top'>Cruise</p>
          <p className='fashion-head-bottom'>through the runway of modern collections</p>
        </div>
      </div> 
      <div  className='fashion-about-container'>
        <div className='fashion-about-sec-1'>
          <div className='fashion-abt-img fashion-about-img1'></div>
          <div className='fashion-abt-img animateimgfas fashion-about-img2'></div>
          <div className='fashion-abt-img animateimgfas fashion-about-img3'></div>
          <div className='fashion-abt-img animateimgfas fashion-about-img4'></div>
        </div>
        <div className='fashion-about-sec-2'>
          <p className='fashion-about-sec-2-p1'>Innovation on Your Out Fit</p>
          <div className='fashion-about-sec-2-p2-div'>
            <p className='fashion-about-sec-2-p2-p1'>
            Materials are products made from filaments or yarns and are used to create a wide range of items, including clothing and industrial goods.</p>
            <div className='fashion-about-sec-2-p2-div2'>
              <p className='fashion-about-sec-2-p2-div2-p1'>Quality Assuried</p>
              <div className='fashion-tick'>
                <p className='fashion-tick-p'><span className='fas-tick'><TiTick/></span> From Handloom</p>
                <p className='fashion-tick-p'><span className='fas-tick'><TiTick/></span> Crafted for Comfort</p>
                <p className='fashion-tick-p'><span className='fas-tick'><TiTick/></span> Seam Strength</p>
              </div>
            </div>
          </div>
          
          <Link onClick={()=>setfooter(false)} style={{textDecoration:'none'}} to={`/itemviewall`}>
          <button className='more-fas-btn'>View More
            <span className='btn-animator-in-fashion'></span>
          </button></Link>  
        </div>
      </div>
        <div className='fas-list'>
          <Listofitems /* arrayofitems={firstitem} */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={fas} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
          <Listofitems /* arrayofitems={seonditem} */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={fasone} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
          <Twocont  /* arrayofitemstwocont={fifthitem} */gadofftwo={fasfour} getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} direction={revrow} arr={arr}  setarr={setarr}/>
          <Listofitems /* arrayofitems={thirditem} */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={fastwo} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
          <Listofitems /* arrayofitems={fourthitem} */ getparticularname={getparticularname} setfooter={setfooter}   sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={fasthree} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        </div> 
       
        
      
    </div>
  )
}

export default Fashion
