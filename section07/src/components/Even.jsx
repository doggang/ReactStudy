import { useEffect } from "react";

const Even = ()=>{
    useEffect(()=>{
        return ()=>{
            console.log("unmount");
        }
    },[])
 return(
    <even>
        <div>짝수입니다</div>
    </even>
 );
}

export default Even;