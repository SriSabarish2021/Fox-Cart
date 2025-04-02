import { GiFox } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import '../Styles/Nav.css'



const Nav = () => {

  

 
    
    
   


  return (
   
    <>
        <div className='navbar' >
        <div className='firstnav-cont' style={{backgroundColor:'transparent',height:'auto'}}>
            <div className="navfirstdiv">
                <div className='logo'>
                    <p className="icon"  ><GiFox  className="iconsvg"/></p>
                    <div className="webname">
                        <p>Fox-</p>
                        <p>Commerce</p>
                    </div> 
                </div>
                <div className="locate" >
                    <div className="add">
                        <p className="address">Set ur Address <IoLocation className="locsvg"/></p>
                        <div className="hoverview"> </div>
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
                    <p className="flx orret">Support</p>
                    <div className="lineunder"></div>
                </div>

                <div className="sigupadd">
                    <div className="flx logdiv">
                        <p className="login ">Signup <IoIosLogIn className="loginsvg"/></p>
                    </div>
                    <div className="signupview"> </div>
                </div>

                
                
                
            </div>
        </div>
        
        </div>   
    </>
  )
}

export default Nav