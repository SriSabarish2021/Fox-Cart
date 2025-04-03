import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import '../Styles/Nav.css'
import {  useState,useEffect } from "react";
import { useRef } from "react";

const ScrollNav = ({setlikedisp,arrofcart,serval,setserval,setfooter}) => {
    let scrollref=useRef('')
    const [dummyState, setDummyState] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setDummyState((prev) => !prev);

          requestAnimationFrame(() => {
            if (window.scrollY > 95) {
                scrollref.current='scrollnav'
                
            }
            else{
                return
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll); 
         scrollref.current=''
        };
      });
  return (
    <div className='navbar stickynav'  style={{transform:scrollref.current.includes('scrollnav')?`translateY(0px)`:`translateY(-250px)`,transitionDuration:'1s'}}>
       <div className='firstnav-cont' style={{backgroundColor:` rgba(0, 0, 0, 0.86)`,height:'65px'}}>
           <div className="navfirstdiv">
               
               <div className="locate" >
                   <div className="add">
                      
                       <div className="hoverview"> </div>
                   </div>
                   
                   <div className="serdiv">
                       <input placeholder="Search Prods"  type="search" value={serval} onChange={(e)=>setserval(e.target.value)}/>
                       <button className="serbtn"><FaSearch className="sersvg"/></button>
                   </div>
                   
               </div>
           </div>    
           <div className="seconddiv">
               <div className="underlinerel">
                   <p className={`flx orret hm`}>Home</p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                   <p className="flx orret">Contact us</p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                   <p className="flx orret">Order & <span>Returns</span></p>
                   <div className="lineunder"></div>
               </div>
               <div className="underlinerel">
                
                       <Link to='yourcart' onClick={()=>setfooter(true)}>
                                <p  className="flx cart orret" style={{position:'relative'}}> <GiShoppingCart className="cartsvg" /><span style={{position:'absolute',top:'-10px',color:'orange'}}>{Array.from(arrofcart).length}</span></p>
                       </Link>
                       
                   <div className="lineunder"></div>
               </div>


                   <p onClick={()=>setlikedisp(true)} className="flx like"><FaHeart className="likedsvg">h</FaHeart> Items
                   </p>
              
              
              
              
               
           </div>
       </div>
       <div className="storedep">
           <div className="storedep-flx">
               <p>Departments <FaChevronDown/></p>
           </div>
           <div className="storedep-flx">
               <p>Stores <FaChevronDown/></p>
           </div>
           <div>
               <p>Trending</p>
           </div>
           <div>
               <p>Fashion</p>
           </div>
           <div>
               <p>Fox Offers</p>
           </div>
           <div>
               <p>Prime Fox</p>
           </div>
           <div>
               <p>Get Prime</p>
           </div>
       </div>
        </div>
  )
}

export default ScrollNav
