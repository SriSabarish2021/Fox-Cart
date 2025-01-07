import Eventbox from '../Eventbox'
import Listofitems from '../Listofitems';
import Twocont from '../Side-by-List/Twocont';

const Gadjet = () => {
    let newyr='New Year Celeb'
    let norevrow=false

  return (
    <>
      <Eventbox/>
      <Listofitems title={newyr} pad={30} height={'auto'}/>
      <Twocont direction={norevrow}/>
      <Listofitems title={newyr} pad={30} height={'auto'}/>
    </>
  )
}
export default Gadjet
