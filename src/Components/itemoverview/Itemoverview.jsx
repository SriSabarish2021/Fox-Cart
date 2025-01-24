import { useEffect } from "react"
import "../../Styles/Itemoverview/Itemoverview.css"
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { ImFirefox } from "react-icons/im";

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
                    <div className="item-amt-div">
                        <div className="all-amt"></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemoverview
