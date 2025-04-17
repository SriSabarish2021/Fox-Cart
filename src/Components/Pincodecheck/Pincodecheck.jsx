import "../../Styles/Itemshortview/Itemshortview.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pincodecheck = ({widthfour,pinnum,setpinnum,getpinlocation,delavailtxt,pindistname,regex,setalertboxinbuy,setviewbox,idname}) => {
    const {id}=useParams()
    let getcurrentbuynowloct=useLocation()


  return (
    <>
        <div className='pin-code-eligible-found'>
            <p className='pin-eligible'>Eligible for Delivery ?</p>
            <div className='pin-inp-div'>
                <input maxLength='6' className='pin-inp-box' type="text" placeholder='pincode' value={pinnum}  onChange={(e)=>setpinnum(e.target.value)}/>
                <div onClick={()=>getpinlocation()} className='enter-pin' style={{backgroundColor:String(pinnum).length>=1&&String(pinnum).length<=5?`rgb(231, 104, 0)`:`rgb(231, 231, 0)`,color:String(pinnum).length>=1&&String(pinnum).length<=5?`rgb(255, 255, 255)`:`rgb(6, 6, 6)`}}>
                    <FaArrowRight className="arrow-for-pin"/>
                </div>
                
            </div>
            <div className='pin-district'>
                {delavailtxt&&RegExp(regex).test(pinnum)? <p className='pin-dist-p'>Your District : <span style={{color:'black'}} className='district-name'>{pindistname}</span></p>:<p className='pin-dist-p'><span style={{color:`rgb(215, 68, 10)`,fontWeight:'400'}} className='district-name no-valid-pincode'>
                enter a valid pincode !...</span></p>}

                {delavailtxt&&RegExp(regex).test(pinnum)?<p className='dist-available-for-delivery' style={{transform:'scale(1)',transitionDuration:'0.8s'}}><IoMdCheckmarkCircleOutline className='instock-svg'/>{widthfour<900?'delivery available':'delivery available to this pincode'}</p>:<p className='dist-available-for-delivery' style={{transform:'scale(0)',transitionDuration:'0.8s'}}><IoMdCheckmarkCircleOutline className='instock-svg'/>{widthfour<900?'delivery available':'delivery available to this pincode'}</p>}
                
            </div>
        </div>
        <div className='buy-now-intem-short-btn'>


                {delavailtxt&&String(pinnum).length==6&&RegExp(regex).test(pinnum)?
                    <Link className="linktopaypage" to={getcurrentbuynowloct.pathname.includes(`itemviewall/viewmore/${id}`)?`/itemviewall/viewmore/${id}/proceedtopay`:getcurrentbuynowloct.pathname.includes(`viewmore/${id}`)?`/viewmore/${id}/proceedtopay`:`/proceedtopay/${idname}`}>
                        <button  onClick={()=>setviewbox(false)}  className='buy-now-btn add-item-short-span'>Buy Now</button>
                    </Link>
                :
                <button onClick={()=>setalertboxinbuy(true)} className='buy-now-btn-notallowed add-item-short-span' style={{cursor:'not-allowed'}}>Buy Now</button>}
                
        </div>
    </>
  )
}

export default Pincodecheck
