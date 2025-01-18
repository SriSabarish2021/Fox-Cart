import Listofitems from '../Listofitems'
import Twocont from '../Side-by-List/Twocont'

const Grosandcooking = ({arr,setarr,setviewbox}) => {
    let grosseries="Gross"
  return (
    <>
      <div style={{width:'100%'}}>
        <Listofitems setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'}  setarr={setarr} arr={arr}/>
        <Twocont arr={arr}  setarr={setarr}/>
        <Listofitems setviewbox={setviewbox} title={grosseries} pad={30} height={'auto'} setarr={setarr} arr={arr}/>
      </div>
    </>
  )
}

export default Grosandcooking
