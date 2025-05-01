import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import '../Styles/Nav.css'
import {  useState,useEffect } from "react";
import { useRef } from "react";
import Navbarsectionforothers from './Navforother/Navbarsectionforothers';

const ScrollNav = ({setlikedisp,arrofcart,serval,setserval,subaddresscont,setsubaddresscont,setarr,setviewbox,getnameinarr,setcart,sethrtfunc,getparticularname,setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setpinnum,pinnum}) => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='stickynav'   style={{transform:scrolled?`translateY(0px)`:`translateY(-250px)`,transitionDuration:'1s',position:scrolled?'sticky':'absolute'}} >
        
       
      <Navbarsectionforothers arrofcart={arrofcart} subaddresscont={subaddresscont} setsubaddresscont={setsubaddresscont} setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} inpstate={inpstate} setinpstate={setinpstate} inpaddress={inpaddress} setaddress={setaddress} inpname={inpname} setinpname={setinpname} arr={arr} setfooter={setfooter} setlikedisp={setlikedisp} setpinnum={setpinnum} pinnum={pinnum}/>

        </div>
  )
}

export default ScrollNav
