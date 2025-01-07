import "../../Styles/Side-by-List/Twocont.css";
import Listofitems from '../Listofitems'
const Twocont = ({direction}) => {
  let newyr="New Celeb"
  return (
    <>
      <div className='two-comp' style={{flexDirection:direction?'row-reverse':'row'}}>
        <div className='itemshalf'>
          <Listofitems title={newyr} pad={0} height={'100%'}/>
        </div>
        <div className='imaghalf' >

        </div>
      </div>
    </>
  )
}

export default Twocont
