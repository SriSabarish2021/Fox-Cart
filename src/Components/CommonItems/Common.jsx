import Listofitems from '../Listofitems'

const Common = ({arr,setarr,setviewbox,getnameinarr}) => {
      let newyr='New Year Celeb'
    let Offer="Offer's Sparkeles"
    let newoff=true


  return (
    <>
     <Listofitems getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
     <Listofitems getnameinarr={getnameinarr} setviewbox={setviewbox} title={Offer} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
    </>
  )
}

export default Common
