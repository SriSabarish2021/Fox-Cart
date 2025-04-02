import "../../Styles/Viewallitem/Viewallitem.css";
import { GiFox } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiApps2AiLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { GiSwordsPower } from "react-icons/gi";
import { MdOutlineStorefront } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

import { useState } from "react";
const Viewallitem = () => {
 
  const [searchvalviewall,setsearchvalviewall]=useState('')
  
  return (
    <div className="view-all-item-container">
      <div className="viewall-item-header">
        <div className="viewall-item-navbar">
          <div className="logo-icon-in-viewall">
            <div className="logo-icon-and-address">
                  <Link to='/' style={{textDecoration:'none',color:` #002612`}}>
                    <GiFox className="logo-icon-viewall"/>
                  </Link>
                  <div className="address-bar-in-view-all">
                    <p className='address-icon-viewall'><FaMapLocationDot className="adress-icon-locate"/></p>
                    <div className="adress-icon-viewall-content">
                      <p className='adress-icon-viewall-p-one'>your delivery partner</p>
                      <p className='adress-icon-viewall-p-two'>make your own delivery</p>
                    </div>
                    <p className='down-toaddress-icon'><FaChevronDown/></p>
                    <span className='address-bar-animation-span-viewall'></span>
                  </div>
            </div>
            <div className="search-bar-for-viewall">
              <div className="input-bar-and-searchicon-viewall">
                <input placeholder="Search Your Needy's" className="searchbar-in-viewall" type="text" value={searchvalviewall} onChange={(e)=>setsearchvalviewall(e.target.value)}></input>
                <p className='search-icon-viewall'>
                  <span className='search-icon-hover-ani-viewall'></span><FaSearch style={{zIndex:'1'}} /></p>
              </div>
            
            </div>
          </div>
          <div className="view-all-item-icon">
            <p className='viewall-nav-side-icon'><RiHome2Line/></p>
            <p className='viewall-nav-side-icon'><RiShoppingCartLine/></p>
            <p className='viewall-nav-side-icon'><FaRegHeart/></p>
          </div>
          
        </div>
        <div className="viewall-item-sub-navbar">
          <div className="subnav-baar-for-viewmore-one">
            <p className='subnav-baar-one-p subnav-baar-one-p-one'><RiApps2AiLine className="department-viewall-icon"/>Department<FaChevronDown className="department-arrow-viewall-icon"/></p>
            <p className='subnav-baar-one-p subnav-baar-one-p-two'><RiCustomerService2Line className="department-viewall-icon"/>Services<FaChevronDown className="department-arrow-viewall-icon"/></p>
          </div>
          <div className="subnav-baar-for-viewmore-two">
            <p className='subnav-baar-for-viewmore-two-p'>Saving</p>
            <p className='subnav-baar-for-viewmore-two-p'>Easter</p>
            <p className='subnav-baar-for-viewmore-two-p'>Offers</p>
            <p className='subnav-baar-for-viewmore-two-p'>Grocery</p>
            <p className='subnav-baar-for-viewmore-two-p'>Sports</p>
            <p className='subnav-baar-for-viewmore-two-p'>Gadjets</p>
            <p className='subnav-baar-for-viewmore-two-p'>Agro</p>
            <p className='subnav-baar-for-viewmore-two-p'>Beautiers</p>
          </div>
        </div>
      </div>
      <div className="view-all-item-location-filt-div">
        <div className="viewall-item-route-section">
          <p className='pathname-in-viewall'>localhost/itemview/ps5/joysticy</p>
        </div>
        <div className="view-all-item-samll-filtering">
          <div className="small-filtering-element">
            <p className='small-filtering-element-p'><LiaMoneyBillWaveSolid className="small-filtering-icon"/>Price<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><GiSwordsPower className="small-filtering-icon"/>Brand<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><MdOutlineStorefront className="small-filtering-icon"/>in Stock<span className='small-filtering-animation'></span></p>
            <p className='small-filtering-element-p'><IoIosTimer className="small-filtering-icon"/>Fullfillment speed<FaChevronRight className="small-filtering-icon-down"/><span className='small-filtering-animation'></span></p>
          </div>
          <div className="small-filtering-element-sort-by">
            <p>Sort by | items best quality</p>
          </div>
        </div>
      </div>
      <div className="view-all-item-small-item-flow">

      </div>
      <div className="view-all-item-main-container">

      </div>
    </div>
  )
}

export default Viewallitem
