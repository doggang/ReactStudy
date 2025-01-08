import { useState } from "react";

const Bulb = ()=>{
    const [light,setLight] = useState("OFF");
    return(
        <div>
            {light==="OFF"?
                (<h1 style={{backgroundColor:"black",color:"white"}}>OFF</h1>):
                (<h1 style={{backgroundColor:"grey"}}>ON</h1>)
            }
            <button onClick={()=>{setLight(light==="OFF"?"ON":"OFF")}}>
                {light==="OFF"?"OFF":"ON"}
            </button>
        </div>
    )
}

export default Bulb;