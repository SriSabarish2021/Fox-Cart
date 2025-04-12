import "../../Styles/Subsection/Subsection.css";
import Navbarsection from "../NavbarsectionSticky/Navbarsection";
import { FaStar } from "react-icons/fa";

import Listofitems from '../Listofitems';
import { useEffect } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Subsection = ({setarr,setviewbox,getnameinarr,setcart,sethrtfunc,getparticularname,setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum}) => {

  useEffect(() => {
  
    window.scrollTo(0,0)
  
  }, [])
  


  let sats='Offer Sales'


  useEffect(() => {
    let containerelement=document.querySelector('.first-box-conatainer-in-box-design')
    let elementone=document.querySelector('.first-box-conatainer-in-box-design-one')
    let elementtwo=document.querySelector('.first-box-conatainer-in-box-design-two')

    let containerelementtwo=document.querySelector('.second-box-conatainer-in-box-design')
    let elementthree=document.querySelector('.second-box-conatainer-in-box-design-one')
    let elementfour=document.querySelector('.second-box-conatainer-in-box-design-two')


    let observerrer=new IntersectionObserver(([entry])=>{

      if(entry.intersectionRatio>0.5) {
        elementone.classList.add('first-box-one-move')
        elementtwo.classList.add('first-box-two-move')
      }
      else{
        elementone.classList.remove('first-box-one-move')
        elementtwo.classList.remove('first-box-two-move')
      }

    },{threshold:0.5})

    if (containerelement) {
      observerrer.observe(containerelement)

    }



    let observerrertwo=new IntersectionObserver(([entry])=>{

      if(entry.intersectionRatio>0.5) {
        elementthree.classList.add('second-box-one-move')
        elementfour.classList.add('second-box-two-move')
      }
      else{
        elementthree.classList.remove('second-box-one-move')
        elementfour.classList.remove('second-box-two-move')
      }

    },{threshold:0.5})

    if (containerelementtwo) {
      observerrertwo.observe(containerelementtwo)

    }
  
  
    return () => {
      observerrertwo.unobserve(containerelementtwo)

    }
  }, [])
  


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
                  <div className="product-one-quality prod-qual-thirteen">
                  <div className="img-div-for-quality-prod-thirteen"></div>
                  </div>
                  <div className="product-one-quality prod-qual-fourteen">
                  <div className="img-div-for-quality-prod-fourteen"></div>
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
            <div className="section-for-two-by-product">
              <div className="by-product-div-one">
                <div className="by-product-one-img-container">
                  <div className="by-prpod-one-content-div">
                    <p className='by-prod-p-one'>Premium Colections</p>
                    <p className='by-prod-p-two'>For Men</p>
                    <p className='by-prod-p-three'>10-20% Off</p>
                  </div>

                </div>
                <div className="by-product-one-items-container">
                  <div className="items-tit">
                    <p className='items-tit-p'>Featured</p>
                    <div className="tit-underline-div"></div>
                  </div>
                  <div className="items-showing-container-by-prod">
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="by-product-div-two">
                <div  className="by-product-two-img-container">
                  <div className="by-prpod-two-content-div">
                    <p className='by-prod-p-one'>Premium Colections</p>
                    <p className='by-prod-p-two'>For Women</p>
                    <p className='by-prod-p-three'>15-20% Off</p>
                  </div>
                </div>
                <div className="by-product-two-items-container">
                  <div className="items-tit">
                    <p className='items-tit-p'>Featured</p>
                    <div className="tit-underline-div"></div>
                  </div>
                  <div className="items-showing-container-by-prod">
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                    <div className="items-showing-one-by-prod">
                      <div className="item-image-show-by-prod"></div>
                      <div className="item-content-show-by-prod">
                        <p className='item-content-p-one'>Homer</p>
                        <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                        <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-for-item-container-listofitems">
               <div className='heder-conateiner-for-item-listings'>
                <p className='heder-conateiner-for-item-p-one'>Easter Special and Yearly Offer Arrives</p>
                <p className='heder-conateiner-for-item-p-two'>Offer and Savings Damakka</p>
                <p className='heder-conateiner-for-item-p-three'>Upto 65% off on Items</p>
               </div>
               <div className='Items-container-itemdiv-for-items'>
                    <div className='Items-container-itemdiv-one'>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                          <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                          <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                   
                    
                    <div className='itemdiv-items-in-subsec'>
                      <div className='itemdiv-items-img'>
                      <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                      </div>
                      <div className='itemdiv-items-cont'>
                      <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                      </div>
                    </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                          <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      <div className='itemdiv-items-in-subsec'>
                        <div className='itemdiv-items-img'>
                        <div className='arrow-for-move-page'><FaArrowRightToBracket/></div>
                        </div>
                        <div className='itemdiv-items-cont'>
                        <p className='itemdiv-items-cont-p-one'>home</p>
                          <p className='itemdiv-items-cont-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          <p className='itemdiv-items-cont-p-two'>$90</p>
                          
                        </div>
                      </div>
                      </div>
               </div>
            </div>
            <div className="container-for-box-design">
                <div className="first-box-conatainer-in-box-design">
                  <div className="first-box-conatainer-in-box-design-one">
                    <div className='box-one-design-cont'>
                      <p className='box-one-p-one-for-box-design'>Yearly Grownup</p>
                      <p className='box-one-p-two-for-box-design'>Sales</p>
                    </div>
                    <p className='box-one-p-three-for-box-design'>Upto 45% off on Selective Items</p>
                  </div>
                  <div className="first-box-conatainer-in-box-design-two">
                    <div className='first-box-second-content-container'>
                      <div className='box-one-design-two-cont-first'>
                        <p className='box-two-p-one-for-box-design'>Seasonal</p>
                        <p className='box-two-p-two-for-box-design'>Sales</p>
                        
                      </div>
                      <p className='style-for-and'>+</p>
                      <div className='box-one-design-two-cont-first'>
                        <p className='box-two-p-one-for-box-design'>New Arraival</p>
                        <p className='box-two-p-two-for-box-design'>Sales</p>
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="second-box-conatainer-in-box-design">
                  <div className="second-box-conatainer-in-box-design-one">
                    <div className='second-box-container-content-one'>
                      <p className='second-box-p-one'>Festival Period Special</p>
                      <p className='second-box-p-two'>Offer Upto 36% Off</p>
                      <p className='second-box-p-three'>On All Purchase</p>
                    </div>
                    <button className="btn-second-box">Buy Now</button>
                  </div>
                  <div className="second-box-conatainer-in-box-design-two">
                    <div className='second-box-container-p-div'>
                      <p className='second-box-container-p-one'>Save Your Wallet</p>
                      <p className='second-box-container-p-two'>Fill Your Cart</p>
                    </div>
                  </div>
                </div>
              <div></div>
            </div>
            <div className="div-container-for-brand-logos">
              <div className="div-box-for-brand-title">
                <p className='brand-title'>Our Love Towards Branded</p>
              </div>
              <div className="brand-displaying-container">
                <div className="brand-logo logo-one"></div>
                <div className="brand-logo logo-two"></div>
                <div className="brand-logo logo-three"></div>
                <div className="brand-logo logo-four"></div>
                <div className="brand-logo logo-five"></div>
                <div className="brand-logo logo-six"></div>
                <div className="brand-logo logo-seven"></div>
                <div className="brand-logo logo-eight"></div>
                <div className="brand-logo logo-nine"></div>
                <div className="brand-logo logo-ten"></div>
                <div className="brand-logo logo-eleven"></div>
                <div className="brand-logo logo-tweleve"></div>
                <div className="brand-logo logo-thirteen"></div>
                <div className="brand-logo logo-fourteen"></div>
                <div className="brand-logo logo-fifteen"></div>
                <div className="brand-logo logo-sixteen"></div>
                <div className="brand-logo logo-seventeen"></div>
                <div className="brand-logo logo-eighteen"></div>
                <div className="brand-logo logo-nineteen"></div>
                <div className="brand-logo logo-twenty"></div>
              </div>
            </div>
            <div className="section-for-two-by-product">
                <div className="by-product-div-one">
                  <div className="by-product-one-img-container-for-two">
                    <div className="by-prpod-one-content-div">
                      <p className='by-prod-p-one'>Festival Sales</p>
                      <p className='by-prod-p-two'>On Gadjets</p>
                      <p className='by-prod-p-three'>25-30% Off</p>
                    </div>

                  </div>
                  <div className="by-product-one-items-container">
                    <div className="items-tit">
                      <p className='items-tit-p'>Featured</p>
                      <div className="tit-underline-div"></div>
                    </div>
                    <div className="items-showing-container-by-prod">
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Apple</p>
                          <p className='item-content-p-two'>$70 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Boat</p>
                          <p className='item-content-p-two'>$20 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Zebronics</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Sony</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Marshmellow</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="by-product-div-two">
                  <div  className="by-product-two-img-container-for-two">
                    <div className="by-prpod-two-content-div">
                      <p className='by-prod-p-one'>Seasonal Day</p>
                      <p className='by-prod-p-two'>For Electronics</p>
                      <p className='by-prod-p-three'>15-20% Off</p>
                    </div>
                  </div>
                  <div className="by-product-two-items-container">
                    <div className="items-tit">
                      <p className='items-tit-p'>Featured</p>
                      <div className="tit-underline-div"></div>
                    </div>
                    <div className="items-showing-container-by-prod">
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Homer</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Homer</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Homer</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Homer</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                      <div className="items-showing-one-by-prod">
                        <div className="item-image-show-by-prod-for-two"></div>
                        <div className="item-content-show-by-prod">
                          <p className='item-content-p-one'>Homer</p>
                          <p className='item-content-p-two'>$30 <span className='amount-original'>$80</span></p>
                          <p className='item-content-p-three'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
        
    </div>
  )
}

export default Subsection
