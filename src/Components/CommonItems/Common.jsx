import Listofitems from '../Listofitems'

const Common = ({/* offeritems: { firstitem, seonditem }, */arr,setarr,setviewbox,getnameinarr, setcart, sethrtfunc,setfooter,getparticularname}) => {
      let newyr="Easter Spec'l"
    
    let Offer="Offer's Sparkeles"
    let newoff=true
    
   
  return (
    <>
     <Listofitems  /* arrayofitems={firstitem} */   getparticularname={getparticularname} setfooter={setfooter} sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={newyr} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
     <Listofitems  /* arrayofitems={seonditem} */ getparticularname={getparticularname} setfooter={setfooter}  sethrtfunc={sethrtfunc} setcart={setcart} getnameinarr={getnameinarr} setviewbox={setviewbox} title={Offer} pad={30} height={'auto'} offer={newoff} arr={arr} setarr={setarr}/>
    </>
  )
}

export default Common
