import "../../Styles/Subsection/Subsection.css";
import Navbarsection from "../NavbarsectionSticky/Navbarsection";

const Subsection = ({setarrayforallitems,addresscont,setaddresscont,inpstate,setinpstate,inpaddress,setaddress,inpname,setinpname,arr,setfooter,setlikedisp,setpinnum,pinnum}) => {
  return (
    <div className="sub-section-container">
        <Navbarsection setarrayforallitems={setarrayforallitems} addresscont={addresscont} setaddresscont={setaddresscont} inpstate={inpstate} setinpstate={setinpstate} inpaddress={inpaddress} setaddress={setaddress} inpname={inpname} setinpname={setinpname} arr={arr} setfooter={setfooter} setlikedisp={setlikedisp} setpinnum={setpinnum} pinnum={pinnum}/>
       
    </div>
  )
}

export default Subsection
