import Listofitems from '../Listofitems'
import Twocont from '../Side-by-List/Twocont'

const Grosandcooking = ({arr,setarr,setviewbox, getnameinarr}) => {
    let grosseries="Gross"
  return (
    <>
      <div style={{width:'100%'}}>
        <Listofitems getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Twocont getnameinarr={getnameinarr} arr={arr}  setarr={setarr}/>
        <Listofitems getnameinarr={getnameinarr} setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
      </div>
    </>
  )
}

export default Grosandcooking
