import "../../Styles/Subsection/Subsection.css";
import Navbarsection from "../NavbarsectionSticky/Navbarsection";

const Subsection = ({setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum}) => {
  return (
    <div className="sub-section-container">
        <Navbarsection setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} inpstate={inpstate} setinpstate={setinpstate} inpaddress={inpaddress} setaddress={setaddress} inpname={inpname} setinpname={setinpname} arr={arr} setfooter={setfooter} setlikedisp={setlikedisp} setpinnum={setpinnum} pinnum={pinnum}/>
        <div className="sub-section-beginnning-intro-page">
            <div className="beginning-samll-bar">
                <div className="page-name-disp">
                    <div className="page-name-showing">
                        <p>Newly Arraival</p>
                    </div>
                </div>
                <div className="current-shop-now">
                    <div className="arraival-div-in-shop-now">
                        <p className='arraival-div-p-one'>New Fashion Arraivals</p>
                        <p className='arraival-div-p-two'>Fresh up on your look</p>
                    </div>
                    <p className='shop-now-in-arraival'>Shop Now</p>
                </div>
                <div className="beginning-som-image-bar">
                    <div className="arraival-div-img-one">
                        <div className="img-for-arraival-div-one"></div>
                    </div>
                    <div className="arraival-div-img-two">
                        <div  className="img-for-arraival-div-two"></div>
                    </div>
                </div>
            </div>
            <div className="boxes-of-container-to-information"></div>
            <div className="product-available-info"></div>
            <div className="ending-samll-bar"></div>
        </div>
        <div className="sub-section-two-sroller"></div>
        <div className="new-arraival-in-brand"></div>
        <div className="sub-section-hot-brand"></div>
    </div>
  )
}

export default Subsection
