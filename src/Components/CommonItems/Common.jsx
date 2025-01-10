import Listofitems from '../Listofitems'

const Common = ({arr,setarr}) => {
      let newyr='New Year Celeb'
    let Offer="Offer's Sparkeles"
    let newoff=true


  return (
    <>
     <Listofitems title={newyr} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
     <Listofitems title={Offer} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
    </>
  )
}

export default Common
