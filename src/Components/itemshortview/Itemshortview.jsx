import "../../Styles/Itemshortview/Itemshortview.css";
import { ImFire } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCash } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { useRef,useState } from "react";
import Pincodecheck from "../Pincodecheck/Pincodecheck";
import Pincodeerrorpage from "../Pincodecheck/Pincodeerrorpage";

const Itemshortview = ({viewbox,setviewbox, setcart, sethrtfunc,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,alertboxinbuy,setalertboxinbuy,arrayforshortitem,setfooter}) => {
    let monthref=useRef('')
    let dateref=useRef(0)
    let getshoritemlocation=useLocation()
    useEffect(() => {
      
        let montharray=['jan','feb','mar','aprl','may','jun','jul','aug','sep','oct','nov','dec']
        let getdateformonth=new Date()
        let currmonth=montharray[getdateformonth.getMonth()]
        monthref.value=currmonth
        
        let fordate=getdateformonth.getDate()+5
        if(fordate==30){
            dateref.value=1
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }else if(fordate==31){
            dateref.value=2
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        else if(fordate==32){
            dateref.value=3
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        else if(fordate==33){
            dateref.value=4
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        else if(fordate==34){
            dateref.value=5
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        else if(fordate==35){
            dateref.value=6
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        else if(fordate==36){
            dateref.value=6
            currmonth=montharray[getdateformonth.getMonth()+1]
            monthref.value=currmonth
        }
        
        else{
            dateref.value=fordate

        }
        

    }, [])
    


    useEffect(() => {
        let toviewdetail=document.querySelector('.item-short-cont-div')
        if(toviewdetail){
            toviewdetail.scrollTo(0,0)

        }
    
    }, [viewbox])

const [widthfour, setWidthfour] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthfour(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  let closeitemsmallview=(command)=>{
    if (String(command.target.id).includes('closesmallitem')) {
        setviewbox(false)
    }else {
        return
        
    }
  }

    
  return (
    <div id='closesmallitem' className={`item-short-view ${viewbox?'moveview':'removeview'}`} onClick={(id)=>closeitemsmallview(id)}> 
      
        {Array.from(arrayforshortitem).map((indiitemforshort)=>(
        <div id='notclosesmallitem' onClick={(id)=>closeitemsmallview(id)} key={indiitemforshort.id}  className={`item-short-container ${viewbox?'scaleviewbox':'nonscaleviewboxitem-short-close'}`}>
            <div className='item-short-img-div'>
                <div className='item-short-img' style={{backgroundImage:`url(${indiitemforshort.imgurl})`}}>

                </div>
            </div>
            
            <div className='item-short-cont-div'>
            
            <div className='item-shot-head-cont-div'>
                <p className='item-shot-heading'>{indiitemforshort.name}</p>
                <div className='seller-topsell'>
                    <p className='item-shot-seller'>by Homers</p>

                    <p className='sold-item-initem-short' style={{color:'red',animation:'upanddowninitemshort  4s linear infinite'}}><ImFire style={{color:'orangered'}}/>&nbsp; 20 sold on last 36 hours</p>
                </div>
            </div>
            <div className='item-shot-amt-cont-div'>
                <div className='item-short-amt'>
                    <p className='acutal-amt-in-item-short'>${indiitemforshort.amt}</p>
                    <p className='dis-amt-in-item-short'>${indiitemforshort.totalamt}</p>
                    <p className='discount-percentage-item-short'>10% discount</p>

                </div>
                <div className='item-short-reviews'>
                    <p className='star-for-item-short'><IoIosStar /><IoIosStar/><IoIosStar /><IoIosStar/><IoIosStarHalf /></p>
                    <p className='review-num-item-short'>20 reviews</p>
                </div>
                
            </div>
           
            <div className='description-item-short'>
                <p className='descrip-item-short-tit'>Description:</p>
                <p className='descrip-item-short-cont'>{indiitemforshort.itemdescription}</p>
                <div className='basic-item-shprt-info'>
                    <p className='addi-info-short'>Avilability: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani1':''}`} style={{color:`rgb(0, 124, 19)`}}><IoMdCheckmarkCircleOutline className='instock-svg'/> inStock</span></p>
                    <p className='addi-info-short'>Delivery: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani2':''}`}>free</span></p>
                    <div className="view-more-and-emi">
                        <p className='addi-info-short'>EMI: <span className={`addi-span-info-short ${viewbox?'addi-span-info-ani3':''}`}>Available</span></p>
                        <div className='view-more-btn-div'>
                            { String( getshoritemlocation.pathname).includes(`/itemviewall`)?
                             
                             <Link onClick={()=>{setviewbox(false),setfooter(true)}} to={`/itemviewall/viewmore/${indiitemforshort.id}`} style={{textDecoration:'none'}}>
                             <p className='view-more-btn'>View More <MdExpandMore className="expandsvg"/></p>
                             </Link>
                             :   
                             <Link onClick={()=>{setviewbox(false),setfooter(true)}} to={`viewmore/${indiitemforshort.id}`} style={{textDecoration:'none'}}>
                            <p className='view-more-btn'>View More <MdExpandMore className="expandsvg"/></p>
                            </Link>
                            }
                         

                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='item-short-btn-div'>
                    {indiitemforshort.addcart?(<button  onClick={()=>setcart(indiitemforshort.id,indiitemforshort.quantity)}  className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span' style={{animation:'moveitemshort 0.8s cubic-bezier(.47,1.64,.41,.8)'}}>In Cart</span></button>):(<button onClick={()=>setcart(indiitemforshort.id,indiitemforshort.quantity)} className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span' style={{animation:'reversemoveitemshort 0.8s cubic-bezier(.47,1.64,.41,.8)'}}>Add Cart</span></button>)}
                    {indiitemforshort.like?(  <button  className='item-short-likebtn' onClick={()=>sethrtfunc(indiitemforshort.id)}><div className="hover-border-move"></div>Added to <IoIosHeart className="heart-in-like-add" style={{color:'red',animation:'likeheartinitemshortadd 0.8s linear'}}/></button>):(  <button  className='item-short-likebtn ' onClick={()=>sethrtfunc(indiitemforshort.id)}><div className="hover-border-move"></div>
                        Add to <IoIosHeartEmpty style={{color:'black',fontSize:'20px',animation:'likeheartinitemshortnotadd 0.8s linear'}}/></button>)}
                  
            </div>
            <Pincodecheck widthfour={widthfour} pinnum={pinnum} setpinnum={setpinnum} getpinlocation={getpinlocation} delavailtxt={delavailtxt} pindistname={pindistname} regex={regex} setalertboxinbuy={setalertboxinbuy} setviewbox={setviewbox} idname={indiitemforshort.id}/>
            <div style={{display:widthfour<360?'none':'flex'}} className='basic-item-short-info'>
                <div className='item-short-basic del-div'>
                    <div className='item-short-basic-div-logo'>
                        <p className='logo-basic-item-short'><TbTruckDelivery className='logo-for-basic-item-short'/></p>

                    </div>
                    <p className='text'>Del. by {dateref.value}{dateref.value==1?'st':dateref.value==2?'nd':dateref.value==3?'rd':'th'} of {monthref.value}</p>
                </div>
                <div className='item-short-basic cash-on-div'>
                    <div className='item-short-basic-div-logo'>
                        <p  className='logo-basic-item-short'><IoCash className='logo-for-basic-item-short'/></p>

                    </div>
                    <p className='text'>COD Available</p>
                </div>
                <div className='item-short-basic return-div'>
                    <div className='item-short-basic-div-logo'>
                        <p className='logo-basic-item-short'><RiLogoutCircleLine className='logo-for-basic-item-short'/></p>

                    </div>
                    <p className='text'>Easy Return Policy</p>
                </div>
            </div>
            
        </div>
            


            <div className='item-short-close'><MdOutlineCloseFullscreen onClick={()=>setviewbox(false)} className='item-short-close-svg'/></div>



        </div>))}

        <Pincodeerrorpage alertboxinbuy={alertboxinbuy} pinnum={pinnum}/>
 
    </div>
  )
}

export default Itemshortview
