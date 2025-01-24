import { useEffect } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { ImFirefox } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const Itemoverview = ({setlikedisp}) => {
    useEffect(() => {
      
        window.scrollTo(0,0)
    
    }, [])
    
  return (
    <div className='itemoverview-container'>
        <div className='itemoverview-box-one'>
            <div className='itemoverview-navbar'>
                <div className="itemoverview-nav-logo">
                    <Link className="overview-fox-logo" to='/'>F<ImFirefox className="fox-img-overview"/>X CART
                    </Link>
                </div>
                <div className="itemoverview-nav-content">
                        <Link to='/'><RiHome2Line className='itemoverview-nav-para'/>
                        </Link>
                        <Link to='/'><RiContactsLine className='itemoverview-nav-para'/>
                        </Link>
                        <Link to='/viewmore/1/yourcart'><RiShoppingCartLine className='itemoverview-nav-para'/>
                        </Link>
                        <p onClick={()=>setlikedisp(true)} className='itemoverview-nav-para'><FaRegHeart></FaRegHeart><span className='name-for-like'>Items</span>
                        </p>
                </div>
            </div>
            <div className='item-overview-box-for-content'>
                <div className="item-overvew-img-div">

                </div>
                <div className="item-overvew-content-div">
                    <div className="item-overvew-content-head">
                        <p className='tit-for-overview'>Homeuse</p>
                        <div className="div-for-seller">
                            <p className='seller-name'>by homers</p>
                            <p className='top-sell'>top seller</p>
                        </div>
                    </div>
                    <div className='item-overview-amt-cont-div'>
                                    <div className='item-overview-amt'>
                                        <p className='acutal-amt-in-item-overview'>$200</p>
                                        <p className='dis-amt-in-item-overview'>$180</p>
                                        <p className='discount-percentage-item-overview'>10% discount</p>
                    
                                    </div>
                                    <div className='item-overview-reviews'>
                                        <p className='star-for-item-overview'><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStarHalf style={{fontSize:'13px'}}/></p>
                                        <p className='review-num-item-overview'>20 reviews</p>
                                    </div>
                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemoverview


//first nav bar with 3 container
//next main container along with all info 
// next speacial design
// next customer review 
// moving bar
//item info with img
// FAQ
//simiiar item for you