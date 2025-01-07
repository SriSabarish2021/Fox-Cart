import Listofitems from '../Listofitems'

const Common = () => {
      let newyr='New Year Celeb'
    let Offer="Offer's Sparkeles"
    let newoff=true


  return (
    <>
     <Listofitems title={newyr} pad={30} height={'auto'} offer={newoff}/>
     <Listofitems title={Offer} pad={30} height={'auto'} offer={newoff}/>
    </>
  )
}

export default Common
