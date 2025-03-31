import Eventbox from '../Eventbox'
import Listofitems from '../Listofitems';
import Twocont from '../Side-by-List/Twocont';
import "../../Styles/Gadjets/Gadjets.css";
import { SiBoat } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiVivo } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiHp } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";

const Gadjet = ({ setarr,arr,setviewbox,getnameinarr , setcart, sethrtfunc,setfooter,getparticularname}) => {
    let newyr='New Year Celeb'
    let norevrow=false

  return (
    <>
      <Eventbox/>
      <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
      <Twocont getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} direction={norevrow}  setarr={setarr} arr={arr}/>
      <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
      <div className='brand-gadjets'>
        <div className='brand-slide-head'>
          <p className='brand-slide-head-p'>Our Top Brands</p>
        </div>
        <div className='gadjets-brand-mover-div'>
         <SiBoat className='brand brand-move-1'/>
         <SiSamsung className='brand brand-move-2'/>
         <SiSony  className='brand  brand-move-3'/>
         <FaApple  className='brand brand-move-4'/>
         <SiVivo  className='brand brand-move-5'/>
         <SiDell className='brand brand-move-6'/>
         <SiHp className='brand brand-move-7'/>
         <SiXiaomi  className='brand brand-move-8'/>
        
        </div>
      </div>
      <div style={{width:'100%', paddingTop:'60px'}}>
        <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
      </div>
    </>
  )
}
export default Gadjet
