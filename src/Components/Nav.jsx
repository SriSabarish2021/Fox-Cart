import { GiFox } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";
import { Link, Links, useLocation } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import '../Styles/Nav.css'
import {  useState } from "react";


const Nav = ({navtrue,setlikedisp,arrofcart}) => {

    let likedivdip=()=>{
        setlikedisp(curval=>!curval)
        
    }
    let curlocation=useLocation()
    console.log(curlocation.pathname);
 
    
   
    const [serval,setserval]=useState('')



  return (
    <div className='navbar' style={{position:navtrue?'fixed':'absolute'}}>
        <div className='firstnav-cont' style={{backgroundColor:navtrue?` rgba(0, 0, 0, 0.86)`:'transparent',height:navtrue?'65px':'auto'}}>
            <div className="navfirstdiv">
                <div className='logo' style={{display:navtrue?'none':'flex'}}>
                    <p className="icon"  ><GiFox  className="iconsvg"/></p>
                    <div className="webname">
                        <p>Fox-</p>
                        <p>Commerce</p>
                    </div> 
                </div>
                <div className="locate" >
                    <div className="add">
                        <p className="address" style={{display:navtrue?'none':'flex'}}>Set ur Address <IoLocation className="locsvg"/></p>
                        <div className="hoverview"> </div>
                    </div>
                    
                    <div className="serdiv" style={{display:navtrue?'flex':'none'}}>
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
                    {navtrue?(
                        <Link to='yourcart'>
                                 <p   className="flx cart orret" style={{position:'relative'}}> <GiShoppingCart className="cartsvg" /><span style={{position:'absolute',top:'-10px',color:'orange'}}>{Array.from(arrofcart).length}</span></p>
                        </Link>
                        ):( <p className="flx orret">Support</p>)}
                    <div className="lineunder"></div>
                </div>


            {
                navtrue?(
                    <p onClick={()=>likedivdip()} className="flx like"><FaHeart className="likedsvg">h</FaHeart> Items
                    </p>
                ):(
                <div className="sigupadd">
                    <div className="flx logdiv">
                        <p className="login ">Signup <IoIosLogIn className="loginsvg"/></p>
                    </div>
                    <div className="signupview"> </div>
               </div>
              )
            }
               
               
               
                
            </div>
        </div>
        <div className="storedep" style={{display:navtrue?'flex':'none'}}>
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

export default Nav
