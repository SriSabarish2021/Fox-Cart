import "../../Styles/HomeandKitchendec/HomeandKitchendec.css";
import Listofitems from '../Listofitems';
import { useEffect } from 'react';
import Twocont from '../Side-by-List/Twocont';

const HomeandKitchendec = ({arr,setarr,setviewbox, getnameinarr, setcart, sethrtfunc,setfooter,getparticularname}) => {
    let Furn='Home Decoratives'

    useEffect(() => {
      let decordiv=document.querySelector('.decors-div')
      let imgobser=document.querySelectorAll('.decoration-tosee')

        let observer=new IntersectionObserver(([entry])=>{
            if(entry.intersectionRatio>0.4){              
                imgobser.forEach((indiimges,index)=>{
                  indiimges.classList.add('imgvisi')
                  indiimges.style.transitionDelay=`${index * 0.5}s`
                })
            }else{
              imgobser.forEach((indiimges)=>{
                indiimges.classList.remove('imgvisi')
                indiimges.style.transitionDelay=`0s`
              })
            }
          
        },{threshold:0.4})

        observer.observe(decordiv)
    
      return () => {
        observer.unobserve(decordiv)

      }
    })
    
    useEffect(() => {
      let decorbannerdiv=document.querySelector('.decor-banner')
      let bannerobse=document.querySelector('.decor-banner-box')

        let observer=new IntersectionObserver(([entry])=>{
            if(entry.intersectionRatio>0.5){              
              bannerobse.classList.add('banner-box-animate')
            }else{
               bannerobse.classList.remove('banner-box-animate')
            }
          
        },{threshold:0.5})

        observer.observe(decorbannerdiv)
    
      return () => {
        observer.unobserve(decorbannerdiv)

      }
    })

    let stopfunc=(e)=>{
      console.log(e);
      
    }
  return (
    <div className='decors-container'>
      <div className='decors-div'>
        <div className='deconrs-cont'>
            <p className='deconr-cont-1'>Elegance, comfort, style, charm</p>
            <p className='deconr-cont-2'>Transform your space into a haven of style and comfort with our exquisite collection of home décor – where every piece tells a story of elegance and charm.</p>
        </div>
        <div className='decors-img'>
            <div className='decors-img-1 decoration-tosee'></div>
            <div className='decors-img-2 decoration-tosee'></div>
        </div>
      </div>
      <div style={{width:'100%'}}>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Furn} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
      </div>
      <div className='decor-banner'>
        <div className='decor-banner-insider'>
            <div className='decor-banner-box'>
                <div className='decor-banner-rope-1'>
                    <div className='decor-banner-rope-notte'></div>
                </div>

                <div className='decor-banner-rope-2'>
                    <div className='decor-banner-rope-notte'></div>
                </div>
                
            </div>
            <div className='decor-banner-cont-1'>
                <p className='decor-banner-cont-1-p decor-p-1'></p>
                <p className='decor-banner-cont-1-p decor-p-2'>
                </p>
                <p className='decor-banner-cont-1-p  decor-p-3'>
                </p>
                <p className='decor-banner-cont-1-p decor-p-4'></p>
                
            </div>
                
            <div className='decor-banner-cont-2'>
                <p className='decor-banner-cont-1-p  decor-p-2-1 mover-p-2-1'>
                </p>
                <p className='decor-banner-cont-1-p decor-p-2-2'>
                </p>
                <p className='decor-banner-cont-1-p decor-p-2-3'>
                </p>
                <p className='decor-banner-cont-1-p decor-p-2-4' onMouseOver={(e)=>stopfunc(e)}>
                </p>
               
            </div>
        </div>
      </div>
      <div style={{width:'100%'}}>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Furn} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Furn} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
      </div>
      <div className='decor-flex'>
        <div className='decor-flex-items'>
            <div className='decor-item-fl'>
                <div className='decor-flex-img-1'></div>
                <p className='decor-flex-cont'>Decorative Lights</p>
            </div>
            <div className='decor-item-fl'>
                <div  className='decor-flex-img-2'></div>
                <p className='decor-flex-cont'>Home Decors</p>
            </div>
            <div className='decor-item-fl'>
                <div className='decor-flex-img-3'></div>
                <p className='decor-flex-cont'>Wooden Chairs</p>
            </div>
            <div className='decor-item-fl'>
                <div className='decor-flex-img-4'></div>
                <p className='decor-flex-cont'>Sofa</p>
            </div>
            <div className='decor-item-fl'>
                <div className='decor-flex-img-5'></div>
                <p className='decor-flex-cont'>Cup Board</p>
            </div>
        </div>    
      </div>
      <div style={{width:'100%'}}>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Furn} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Twocont getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart}  getnameinarr={getnameinarr} setarr={setarr} arr={arr}/>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Furn} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
      </div>
    </div>
  )
}

export default HomeandKitchendec
