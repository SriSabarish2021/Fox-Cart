import { useEffect, useState } from "react";
import "../../Styles/Cartpage/Cart.css";
import { GiFox } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
    const cartlocation=useLocation()
    console.log(cartlocation.pathname);

    useEffect(() => {
      
        window.scrollTo(0,0)

    
    
    }, [])
    
    
  return (
    <div className='cart-container' >
        <style>
            {
                 `html{
          overflow-x: hidden;
          overflow-y:${cartlocation.pathname.includes('yourcart')?'hidden':'scroll'}
                }`
             
            }
        </style>
      <div className="cart-div">
        <div className="cart-top-div">
            <div className="cart-logo">
                <GiFox className="cart-logo-svg"/>
            </div>
            <div className="cart-nav">
                <RiHome2Line className="cart-nav-font"/>
                <RiContactsLine className="cart-nav-font"/>
                <FaRegHeart className="cart-nav-font"/>
            </div>
        </div>
        <div className="cart-content-div">
            <div className="cart-page">
                <div className="cart-items">
                    <div className="cart-item-num">
                        <p className="cart-p-1">My Shopping Bag</p>
                        <p className="cart-p-2"><span className="num-item">2 item </span>in your bag</p>
                    </div>
                    <div className="cart-list-ofitems">
                        <div className="full-cart">
                            <div className="cart-including-head">
                                <div className="product">
                                    <p className="cart-hd-p">Product</p>
                                </div>
                                <div className="prod-info">
                                    <p className="cart-hd-p">Price</p>
                                    <p className="cart-hd-p">Quantity</p>
                                    <p className="cart-hd-p">Total Price</p>
                                </div>
                            </div>
                            <div className="cart-including-item-div">
                                <div className="cart-scroll">
                                    <div className="cart-item-1">
                                        <div className="product-img-info">
                                            <div className="prod-img"></div>
                                            <div className="prod-infor">
                                                <p className="cart-hd-p-inmain">Name</p>
                                                <p className="cart-hd-p-inmain">Description</p>
                                            </div>
                                        </div>
                                        <div className="prod-info-incart">
                                            <p className="cart-hd-p-inmain-amt">$20</p>
                                            <div className="cart-hd-p-inmain-quant"><button className="increbtn"><FaAngleUp className="incresvg-btn"/></button><span className="total-quant">1</span><button className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                            <p className="cart-hd-p-final-amt">$ 40.00</p>
                                        </div>
                                        <div className="remove-cart">
                                            <MdDeleteOutline className="remove-cart-icon"/>
                                        </div>
                                    </div>
                                    <div className="cart-item-1">
                                        <div className="product-img-info">
                                            <div className="prod-img"></div>
                                            <div className="prod-infor">
                                                <p className="cart-hd-p-inmain">Name</p>
                                                <p className="cart-hd-p-inmain">Description</p>
                                            </div>
                                        </div>
                                        <div className="prod-info-incart">
                                            <p className="cart-hd-p-inmain-amt">$20</p>
                                            <div className="cart-hd-p-inmain-quant"><button className="increbtn"><FaAngleUp className="incresvg-btn"/></button><span className="total-quant">1</span><button className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                            <p className="cart-hd-p-final-amt">$ 40.00</p>
                                        </div>
                                        <div className="remove-cart">
                                            <MdDeleteOutline className="remove-cart-icon"/>
                                        </div>
                                    </div>
                                    <div className="cart-item-1">
                                        <div className="product-img-info">
                                            <div className="prod-img"></div>
                                            <div className="prod-infor">
                                                <p className="cart-hd-p-inmain">Name</p>
                                                <p className="cart-hd-p-inmain">Description</p>
                                            </div>
                                        </div>
                                        <div className="prod-info-incart">
                                            <p className="cart-hd-p-inmain-amt">$20</p>
                                            <div className="cart-hd-p-inmain-quant"><button className="increbtn"><FaAngleUp className="incresvg-btn"/></button><span className="total-quant">1</span><button className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                            <p className="cart-hd-p-final-amt">$ 40.00</p>
                                        </div>
                                        <div className="remove-cart">
                                            <MdDeleteOutline className="remove-cart-icon"/>
                                        </div>
                                    </div>
                                    <div className="cart-item-1">
                                        <div className="product-img-info">
                                            <div className="prod-img"></div>
                                            <div className="prod-infor">
                                                <p className="cart-hd-p-inmain">Name</p>
                                                <p className="cart-hd-p-inmain">Description</p>
                                            </div>
                                        </div>
                                        <div className="prod-info-incart">
                                            <p className="cart-hd-p-inmain-amt">$20</p>
                                            <div className="cart-hd-p-inmain-quant"><button className="increbtn"><FaAngleUp className="incresvg-btn"/></button><span className="total-quant">1</span><button className="decrebtn"><FaAngleDown  className="decresvg" /></button></div>
                                            <p className="cart-hd-p-final-amt">$ 40.00</p>
                                        </div>
                                        <div className="remove-cart">
                                            <MdDeleteOutline className="remove-cart-icon"/>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
       

      </div>
      <div className="final-cart-help">
        <Link to='proceedtopay'><button className="chekoutbtn">CheckOut</button></Link>
      </div>
    </div>
  )
}

export default Cart
