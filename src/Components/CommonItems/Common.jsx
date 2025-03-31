import Listofitems from '../Listofitems'

const Common = ({arr,setarr,setviewbox,getnameinarr, setcart, sethrtfunc,setfooter,getparticularname}) => {
      let newyr='New Year Celeb'
    let Offer="Offer's Sparkeles"
    let newoff=true


  return (
    <>
     <Listofitems getparticularname={getparticularname} setfooter={setfooter} sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
     <Listofitems getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Offer} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
    </>
  )
}

export default Common
