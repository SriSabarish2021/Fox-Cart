import React, { useEffect, useState } from 'react'
import '../Styles/Eventbox.css'
const Eventbox = () => {
    const [arrnum,setarrnum]=useState(0)
    const [imgurl,setimgurl]=useState('https://images.pexels.com/photos/3771647/pexels-photo-3771647.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
    let imgarr=['https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/6261902/pexels-photo-6261902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load','https://images.pexels.com/photos/3771647/pexels-photo-3771647.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load']
    useEffect(() => {
      let imageslide=setTimeout(() => {
        setarrnum((arrnum)=>{
            let increnum=arrnum+1;
            if(increnum===imgarr.length){
                increnum=0
            }
            setimgurl(`${imgarr[arrnum]}`)
            
            return increnum
        })
      }, 5000);
    
      return () => {
        clearTimeout(imageslide)
      }
    },[arrnum])
    
  return (
    <div className='eventbox'>
      <div className='flexbox-container'>
        <section className='sec1 col'>
            <div className='contai1-med rad sec-item'>
               <div className='itemcont'>
                    <div className='itemcont-name'>
                        <p className='ittit'>Luxe Layers</p>
                        <p className='shopnow'>shop now</p>
                    </div>
                    <p className='extra-cont'>Begin Bright 2025</p>
               </div>
            </div>
            <div  className='contai1-big rad sec-item sec-1-item-2'>

                <div className='itemcont-name'>
                    <p className=' sec-1-item-2-tit'>Gym Equipments</p>
                    <p className='shopnow' style={{color:`rgb(14, 38, 81)`}}>shop now</p>
                </div>
                <div>
                    <p style={{fontFamily:'sans-serif',color:`rgb(145, 145, 145)`}}>from</p>
                    <p className='extra-cont' style={{fontSize:'60px',color:`rgb(14, 38, 81)`}}>$20</p>
                </div>

            </div>
            <div  className='contai1-small rad sec-item'>
            <div className=' sec-1-item-3'>
                        <div className='itemcont-name' style={{gap:'0px'}}>
                            <p className=' sec-1-item-3-tit'>Electronics</p>
                            <p className='shopnow' style={{color:`rgb(14, 38, 81)`}}>shop now</p>
                        </div>
                        <div>
                            <p style={{fontFamily:'sans-serif',color:`rgb(5, 0, 91)`,fontSize:'10px'}}>from</p>
                            <p className='extra-cont' style={{fontSize:'20px',color:`rgb(14, 38, 81)`}}>$20</p>
                        </div>
                </div>
            </div>
        </section>
        <section className='sec2 col'>
            <style>
                {`
                .contai2-big{
                width: 100%;
                background-color: rgb(133, 133, 133);
                background-image: url(${imgurl});
                flex: 1 1 calc(50%);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                transition: background-image 1s ease-in-out; 

            }
                `}
            </style>
            <div className='contai2-big rad sec-item'>
                <div className='itemcont stylesec2'>
                        <div className='itemcont-name for2'>
                            <p className='ittit coatsuit'>Discover your sophistication </p>
                            <p className='shopnow'>shop now</p>
                        </div>
                        <div style={{paddingLeft:'40px',color:'white'}}>
                            <p>from</p>
                            <p className='extra-cont' style={{fontSize:'60px'}}>$10</p>
                        </div>
                        
                </div>
            </div>
            <div  className='contai2-med insider '>
                <div className='contai2-insider inside-1 rad  sec-item'>
                    <div className='itemcont stylesec2'>
                            <div className='itemcont-name'  style={{gap:'0px'}}>
                                <p className='ittit cam' style={{color:`rgb(255, 255, 255)`,fontSize:'30px'}}>Camera</p>
                                <p className='shopnow' style={{color:`rgb(255, 255, 255)`}}>shop now</p>
                            </div>
                            <div style={{paddingLeft:'20px',color:`rgb(172, 172, 172)`}}>
                                <p style={{fontSize:'12px'}}>from</p>
                                <p className='extra-cont' style={{fontSize:'40px',color:`rgb(255, 255, 255)`}}>$60</p>
                            </div>
                            
                    </div>
                </div>
                <div className='contai2-insider inside-2 rad sec-item'>
                    <div className='itemcont stylesec2'>
                                <div className='itemcont-name'  style={{gap:'0px'}}>
                                    <p className='ittit cam' style={{color:`rgb(255, 255, 255)`,fontSize:'30px'}}>Gadgets</p>
                                    <p className='shopnow' style={{color:`rgb(255, 255, 255)`}}>shop now</p>
                                </div>
                                <div style={{paddingLeft:'20px',color:`rgb(159, 159, 159)`}}>
                                    <p style={{fontSize:'12px'}}>from</p>
                                    <p className='extra-cont' style={{fontSize:'40px',color:`rgb(255, 255, 255)`}}>$60</p>
                                </div>
                                
                    </div>
                </div>
            </div>
            <div  className='contai2-small rad sec-item'>
                    <div className='itemcont stylesec2'>
                                <div className='itemcont-name'  style={{gap:'0px'}}>
                                    <p className='ittit cam' style={{color:`rgb(14, 38, 81)`,fontSize:'30px'}}>Coolers</p>
                                    <p className='shopnow' style={{color:`rgb(14, 38, 81)`}}>shop now</p>
                                </div>
                                <div style={{paddingLeft:'20px',color:`rgb(93, 93, 93)`}}>
                                    <p style={{fontSize:'12px'}}>from</p>
                                    <p className='extra-cont' style={{fontSize:'40px',color:`rgb(14, 38, 81)`}}>$60</p>
                                </div>
                                
                    </div>
            </div>
        </section>
        <section className='sec3 col'>
            <div  className='contai3-med rad sec-item'>
                <div className='contitem-3 item-3-1'>
                    <div>
                        <p className='fashion'>Fashionable</p>
                        <p className='shopnow'>shop now</p>
                    </div>
                    <div >
                            <p style={{color:'white'}}>from</p>
                            <p className='extra-cont' style={{fontSize:'60px',color:`white`}}>$10</p>
                    </div>
                </div>
            </div>
            <div  className='contai3-small rad'>
                <div className='itemcont stylesec2 sec-item'>
                    <div className='itemcont-name'  style={{gap:'0px'}}>
                        <p className='ittit cam' style={{color:`rgb(14, 38, 81)`,fontSize:'30px'}}>Beautiers</p>
                        <p className='shopnow' style={{color:`rgb(14, 38, 81)`}}>shop now</p>
                    </div>
                    <div style={{paddingLeft:'20px',color:`rgb(93, 93, 93)`}}>
                        <p style={{fontSize:'12px'}}>from</p>
                        <p className='extra-cont' style={{fontSize:'30px',color:`rgb(14, 38, 81)`}}>$60</p>
                    </div>
                                
                </div>
            </div>
            <div  className='contai3-med2 rad'>
            <div className='contitem-3 item-3-1'>
                    <div>
                        <p className='fashion'>Men's Fashion</p>
                        <p className='shopnow'>shop now</p>
                    </div>
                    <div >
                            <p style={{color:'white'}}>from</p>
                            <p className='extra-cont' style={{fontSize:'60px',color:`white`}}>$10</p>
                    </div>
                </div>
            </div>

        </section>
      </div>
    </div>
  )
}

export default Eventbox
