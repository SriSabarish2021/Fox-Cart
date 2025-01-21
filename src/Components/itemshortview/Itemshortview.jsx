import "../../Styles/Itemshortview/Itemshortview.css";
import { ImFire } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCash } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
const Itemshortview = ({viewbox,setviewbox,nameinarr,arr, setcart, sethrtfunc,pinnum,setpinnum}) => {

    let[arrayforshortitem,setarrayforshortitem]=useState([])
    const regex = /^[0-9]+$/; 
    

    useEffect(() => {
      
        let getelemntforitemshort=Array.from(arr).filter((indiitem)=>indiitem.id==nameinarr)
        setarrayforshortitem(getelemntforitemshort)
        console.log(getelemntforitemshort);
        
    }, [nameinarr,setcart,sethrtfunc])
    

   
    
    const [delavailtxt,setdelavailtxt]=useState(false)
    const [pindistname,setpindistname]=useState('--')


     useEffect(() => {
        setdelavailtxt(false)

      return () => {
                    
                    setdelavailtxt(false)
      }
    }, [pinnum])
    let getpinlocation=async()=>{
        let numpin=Number(pinnum)
        
        let getpincodelocation=async()=>{
            try{
                let getdata=await fetch(`https://api.postalpincode.in/pincode/${numpin}`)
                if(!getdata.ok)throw Error('Request time out')
                let jsonfile=await getdata.json()
                let datageting=jsonfile[0].PostOffice[0].District
                setpindistname(datageting)
                setdelavailtxt(true)
                      
            }catch(err){
                console.log(err);
                setdelavailtxt(false)

            }
            finally{
                console.log('ended');
                
            }  
        }
        getpincodelocation()
        
    }
    
    let errorbox=()=>{
        console.log(typeof(pinnum));
        
    }
  return (
    <div className={`item-short-view ${viewbox?'moveview':'removeview'}`} > 
      
        {arrayforshortitem.map((indiitemforshort)=>(
        <div key={indiitemforshort.id}  className={`item-short-container ${viewbox?'scaleviewbox':'nonscaleviewboxitem-short-close'}`}>
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
                    <p className='dis-amt-in-item-short'>${Number(indiitemforshort.amt)-Number((indiitemforshort.amt*10)/100)}</p>
                    <p className='discount-percentage-item-short'>10% discount</p>

                </div>
                <div className='item-short-reviews'>
                    <p className='star-for-item-short'><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStar style={{fontSize:'13px'}}/><IoIosStarHalf style={{fontSize:'13px'}}/></p>
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
                            <p className='view-more-btn'>View More <MdExpandMore className="expandsvg"/></p>

                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='item-short-btn-div'>
                    {indiitemforshort.addcart?(<button  onClick={()=>setcart(indiitemforshort.id)}  className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span' style={{animation:'moveitemshort 0.8s cubic-bezier(.47,1.64,.41,.8)'}}>In Cart</span></button>):(<button onClick={()=>setcart(indiitemforshort.id)} className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span' style={{animation:'reversemoveitemshort 0.8s cubic-bezier(.47,1.64,.41,.8)'}}>Add Cart</span></button>)}
                    {indiitemforshort.like?(  <button  className='item-short-likebtn' onClick={()=>sethrtfunc(indiitemforshort.id)}>Added to <IoIosHeart style={{color:'red',fontSize:'20px',animation:'likeheartinitemshortadd 0.8s linear'}}/></button>):(  <button  className='item-short-likebtn' onClick={()=>sethrtfunc(indiitemforshort.id)}>Add to <IoIosHeartEmpty style={{color:'black',fontSize:'20px',animation:'likeheartinitemshortnotadd 0.8s linear'}}/></button>)}
                  
            </div>
            <div className='pin-code-eligible-found'>
                <p className='pin-eligible'>Eligible for Delivery ?</p>
                <div className='pin-inp-div'>
                    <input maxLength='6' className='pin-inp-box' type="text" placeholder='pincode' value={pinnum}  onChange={(e)=>setpinnum(e.target.value)}/>
                    <div onClick={()=>getpinlocation()} className='enter-pin' style={{backgroundColor:String(pinnum).length>=1&&String(pinnum).length<=5?`rgb(231, 104, 0)`:`rgb(231, 231, 0)`,color:String(pinnum).length>=1&&String(pinnum).length<=5?`rgb(255, 255, 255)`:`rgb(6, 6, 6)`}}>
                        <FaArrowRight/>
                    </div>
                   
                </div>
                <div className='pin-district'>
                    {delavailtxt&&regex.test(pinnum)? <p className='pin-dist-p'>Your District : <span style={{color:'black'}} className='district-name'>{pindistname}</span></p>:<p className='pin-dist-p'><span style={{color:`rgb(215, 68, 10)`,fontWeight:'400'}} className='district-name'>
                    enter a valid pincode !...</span></p>}

                    {delavailtxt&&regex.test(pinnum)?<p className='dist-available-for-delivery' style={{transform:'scale(1)',transitionDuration:'0.8s'}}><IoMdCheckmarkCircleOutline className='instock-svg'/>delivery available to this pincode</p>:<p className='dist-available-for-delivery' style={{transform:'scale(0)',transitionDuration:'0.8s'}}><IoMdCheckmarkCircleOutline className='instock-svg'/>delivery available to this pincode</p>}
                    
                </div>
            </div>
            <div className='buy-now-intem-short-btn'>
                
                {delavailtxt&&String(pinnum).length==6&&regex.test(pinnum)?<Link className="linktopaypage" to={`/proceedtopay/${indiitemforshort.id}`}><button  onClick={()=>setviewbox(false)}  className='buy-now-btn add-item-short-span'>Buy Now</button></Link>:<button onClick={()=>errorbox()} className='buy-now-btn-notallowed add-item-short-span' style={{cursor:'not-allowed'}}>Buy Now</button>}
                
            </div>
            <div className='basic-item-short-info'>
                <div className='item-short-basic del-div'>
                    <div className='item-short-basic-div-logo'>
                        <p className='logo-basic-item-short'><TbTruckDelivery className='logo-for-basic-item-short'/></p>

                    </div>
                    <p className='text'>Del. by 5th Aug</p>
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


 
    </div>
  )
}

export default Itemshortview
