import React from 'react'
import "../../Styles/NavforOther/NavforOther.css";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";


const NavforOther = ({cartcount}) => {
  return (
    <div className='nav-for-other'>
        <div className='nav-other-div'>
            <div className="nav-other-ser-div" >
                <input placeholder="Search Prods"  type="search" />
                <button className="serbtn"><FaSearch className="sersvg"/></button>
            </div>
                                
            <div className='othe-nav-link'>
                <div className='navother-link'>
                    <p className='orret'>Home</p>
                    <div className="lineunder"></div>

                </div>
                <div className='navother-link'>
                <p  className="flx cart orret" style={{position:'relative'}}> <GiShoppingCart className="cartsvg" /><span style={{position:'absolute',top:'-10px',color:'orange'}}>{cartcount}</span></p>
                    <div className="lineunder"></div>

                </div>
                <div className='navother-link'>
                    <p className='orret'>Order & <span>Returns</span></p>
                    <div className="lineunder"></div>

                </div>
                <div className='navother-link'>
                    <p className='orret'>Contact us</p>
                    <div className="lineunder"></div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default NavforOther
