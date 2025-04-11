import "../../Styles/Subsection/Subsection.css";
import Navbarsection from "../NavbarsectionSticky/Navbarsection";

const Subsection = ({setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum}) => {
  return (
    <div className="sub-section-container">
        <Navbarsection setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} inpstate={inpstate} setinpstate={setinpstate} inpaddress={inpaddress} setaddress={setaddress} inpname={inpname} setinpname={setinpname} arr={arr} setfooter={setfooter} setlikedisp={setlikedisp} setpinnum={setpinnum} pinnum={pinnum}/>
        <div className="container-for-introduction-of-product">
          <div className="first-intro-product">
            <div className="sub-first-div-intro">
              <div className="first-intro-cont">
                <div className="content-div-in-intro-first">
                  <p className='what-itro-about'>New Fashions</p>
                  <p className='special-offer-intro'>Sunday Limited</p>
                  <p className='special-offer-intro-offer'>Offer</p>
                </div>
                
                  <p className='sub-tit-in-first-intro'>Make a Purchase from you During</p>
                <p className='amount-showcase-in-first-intro'>$40.00</p>
                
              </div>
              <div className="first-intro-images">
                <div className="image-showing-bar-intro-first">
                  <div className="intro-image-tag"></div>
                 

                  <div></div>
                </div>
              </div>
            </div>
            <div className="sub-second-div-intro">
              <div className="second-intro-cont">
                <div className="content-div-in-intro-second">
                  <p className='what-itro-about-second'>New Arraivals</p>
                  <p className='special-offer-intro-second'>Monthly Bomb</p>
                  <p className='special-offer-intro-offer-second'>Offers</p>
                </div>
                
                  <p className='sub-tit-in-second-intro'>Make a Purchase from you During</p>
                <p className='amount-showcase-in-second-intro'>$20.00</p>
                
              </div>
              <div className="second-intro-images">
                <div className="image-showing-bar-intro-second">
                  <div className="intro-image-tag-second"></div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="second-intro-product">
            <div className="second-intro-heading">
              <p className='second-intro-tit-one'>Shop Items</p>
              <p className='second-intro-tit-two'>Our Quality Assured Products</p>
              <p  className='second-intro-tit-three'></p>
            </div>
            <div className="second-intro-image-container">
                <div className="product-one-quality prod-qual-one">
                  <div className="img-div-for-quality-prod-one"></div>
                </div>
                <div className="product-one-quality prod-qual-two">
                <div className="img-div-for-quality-prod-two"></div>
                </div>
                <div className="product-one-quality prod-qual-three">
                <div className="img-div-for-quality-prod-three"></div>
                </div>
                <div className="product-one-quality prod-qual-four">
                <div className="img-div-for-quality-prod-four"></div>
                </div>
                <div className="product-one-quality prod-qual-five">
                <div className="img-div-for-quality-prod-five"></div>
                </div>
                <div className="product-one-quality prod-qual-six">
                <div className="img-div-for-quality-prod-six"></div>
                </div>
                <div className="product-one-quality prod-qual-seven">
                <div className="img-div-for-quality-prod-seven"></div>
                </div>
                <div className="product-one-quality prod-qual-eight">
                <div className="img-div-for-quality-prod-eight"></div>
                </div>
                <div className="product-one-quality prod-qual-nine">
                <div className="img-div-for-quality-prod-nine"></div>
                </div>
                <div className="product-one-quality prod-qual-ten">
                <div className="img-div-for-quality-prod-ten"></div>
                </div>
                <div className="product-one-quality prod-qual-eleven">
                <div className="img-div-for-quality-prod-eleven"></div>
                </div>
                <div className="product-one-quality prod-qual-tvelwe">
                <div className="img-div-for-quality-prod-tvelwe"></div>
                </div>

            </div>
          </div>
          <div className="third-intro-product">
            <div className="first-part-in-third-intro">
              <div className="first-part-cont">New <span>Arraivals</span></div>
            </div>
            <div className="second-part-in-third-intro">
              <div className="second-part-cont-div">
                <p className='second-part-p'>New Fashion Arraivals</p>
                <p className='second-part-p-two'>Fresh Up Your Look</p>
              </div>
              <p className='buy-now-second-part'>Buy now</p>
            </div>
            <div className="third-part-in-third-intro">
              <div className="third-part-img-one-div">
                <div className="third-part-img"></div>
              </div>
              <div className="third-part-img-two-div">
              <div className="third-part-img-two"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Subsection
