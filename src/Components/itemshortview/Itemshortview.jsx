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

const Itemshortview = ({viewbox,setviewbox,nameinarr,arr, setcart, sethrtfunc}) => {

    let[arrayforshortitem,setarrayforshortitem]=useState([])
    
    useEffect(() => {
      
        let getelemntforitemshort=Array.from(arr).filter((indiitem)=>indiitem.id==nameinarr)
        setarrayforshortitem(getelemntforitemshort)
    
    }, [nameinarr])
    

   
    const [pinnum,setpinnum]=useState('')
    const[pinerror,setpinerror]=useState(false)
    const [pindistname,setpindistname]=useState('--')
    const [yesdel,setyesdel]=useState('')
    let getpinlocation=async()=>{
        let numpin=Number(pinnum)
        
        let getpincodelocation=async()=>{
            try{
                let getdata=await fetch(`https://api.postalpincode.in/pincode/${numpin}`)
                if(!getdata.ok)throw Error('Request time out')
                let jsonfile=await getdata.json()
                let datageting=jsonfile[0].PostOffice[0].District
                setpindistname(datageting)
                setyesdel('delivery available to this pincode')
                setpinerror(false)
                      
            }catch(err){
                console.log(err);
                setyesdel('')
                setpinerror(true)
            }
            finally{
                console.log('ended');
                
            }
           
            
            
            
        }
        getpincodelocation()
        
    }
    let errorbox=()=>{
        console.log('not able to proceed');
        
    }
  return (
    <div className={`item-short-view ${viewbox?'moveview':'removeview'}`} > 
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${viewbox?'hidden':'auto'};
        }`}
        </style>
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
                    <button onClick={()=>setcart(indiitemforshort.id)} className='item-short-cartbtn'><div className='item-short-cart-cartbtn-trans'></div> <span className='add-item-short-span'>Add Cart</span></button>
                    <button  className='item-short-likebtn' onClick={()=>sethrtfunc(indiitemforshort.id)}>Add to LikeList</button>
            </div>
            <div className='pin-code-eligible-found'>
                <p className='pin-eligible'>Eligible for Delivery ?</p>
                <div className='pin-inp-div'>
                    <input maxLength='6' className='pin-inp-box' type="text" placeholder='pincode' value={pinnum} onChange={(e)=>setpinnum(e.target.value)}/>
                    <div onClick={()=>getpinlocation()} className='enter-pin' style={{backgroundColor:pinnum.length>=1&&pinnum.length<=5?`rgb(231, 104, 0)`:`rgb(231, 231, 0)`,color:pinnum.length>=1&&pinnum.length<=5?`rgb(255, 255, 255)`:`rgb(6, 6, 6)`}}>
                        <FaArrowRight/>
                    </div>
                   
                </div>
                <div className='pin-district'>
                    {pinerror? <p className='pin-dist-p'><span style={{color:`rgb(215, 68, 10)`,fontWeight:'400'}} className='district-name'>entered pincode is wrong</span></p>:<p className='pin-dist-p'>Your District : <span style={{color:'black'}} className='district-name'>{pindistname}</span></p>}
                    
                    <p className='dist-available-for-delivery' style={{transform:pinerror?'scale(0.5)':'scale(1)',transitionDuration:'0.8s',opacity:pinerror?'0':'1'}}><IoMdCheckmarkCircleOutline className='instock-svg'/>{yesdel}</p>
                </div>
            </div>
            <div className='buy-now-intem-short-btn'>
                {pinerror?<button onClick={()=>errorbox()} className='buy-now-btn add-item-short-span'>Buy Now</button>:<Link className="linktopaypage" to={`/proceedtopay/${indiitemforshort.id}`}><button  onClick={()=>setviewbox(false)}  className='buy-now-btn add-item-short-span'>Buy Now</button></Link>}
                
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
