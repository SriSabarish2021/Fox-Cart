import "../../Styles/Side-by-List/Twocont.css";
import Listofitems from '../Listofitems'
const Twocont = ({direction,arr, setarr, getnameinarr, setcart, sethrtfunc,setfooter}) => {
  let newyr="New Celeb"
  return (
    <>
      <div className='two-comp' style={{flexDirection:direction?'row-reverse':'row'}}>
        <div className='itemshalf'>
          <Listofitems setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart}  getnameinarr={getnameinarr} title={newyr} pad={0} height={'100%'}  setarr={setarr} arr={arr}/>
        </div>
        <div className='imaghalf' >

        </div>
      </div>
    </>
  )
}

export default Twocont
