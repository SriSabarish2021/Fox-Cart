import Listofitems from '../Listofitems'
import Twocont from '../Side-by-List/Twocont'

const Grosandcooking = ({arr,setarr,setviewbox, getnameinarr, setcart, sethrtfunc}) => {
    let grosseries="Gross"
  return (
    <>
      <div style={{width:'100%'}}>
        <Listofitems sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Twocont sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} arr={arr}  setarr={setarr}/>
        <Listofitems sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
      </div>
    </>
  )
}

export default Grosandcooking
