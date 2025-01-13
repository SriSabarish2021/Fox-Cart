import React from 'react'

import "../../../Styles/Jevelery/Jewelhead.css";

import { useEffect } from 'react';
const Jewelhead = () => {
    useEffect(() => {
        const box = document.querySelector(".jvwl-cont");
        let observer=new IntersectionObserver(([entry])=>{
            if(entry.intersectionRatio>0.4){
                box.classList.remove('bottom-remove')

                box.classList.add('bottom')
            }
            else{

                box.classList.remove('bottom')
                box.classList.add('bottom-remove')
            }
        },{ threshold:0.4 }
    )
            observer.observe(box)
    })
    

   
  return (
    <div className='jvwl-head'>
      <div className='jvwl-cont'>
        <p className='heading-jvwl'>Step into a world of shimmering beauty</p>
        <p className='heading-jvwl2'>Radiate Your Look</p>
        <p className='heading-jvwl3'>FoxCart Jewels: Your Treasure Trove of Timeless Elegance</p>

      </div>
    </div>
  )
}

export default Jewelhead
