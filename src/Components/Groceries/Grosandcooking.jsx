import Listofitems from '../Listofitems'
import Twocont from '../Side-by-List/Twocont'

const Grosandcooking = ({/* groceries:{ firstitem, seonditem, thirditem}, */arr,setarr,setviewbox, getnameinarr, setcart, sethrtfunc,setfooter,getparticularname}) => {
    let grosseries="Groceries"
    let grosseriesone="Groceries Offer"
    let grosseriestwo="Groceries Special"
  return (
    <>
      <div style={{width:'100%'}}>
        <Listofitems /* arrayofitems={firstitem}  */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Twocont /* arrayofitemstwocont={seonditem} */ gadofftwo={grosseriestwo} getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} arr={arr}  setarr={setarr}/>
        <Listofitems /* arrayofitems={thirditem} */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseriesone} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
      </div>
    </>
  )
}

export default Grosandcooking
