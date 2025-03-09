import { useState } from "react";

const Counter = ()=>{
    const [count,setCount] = useState(0);
    const addClick = ()=>{
        setCount(count+1);
    }
    const resetCount = ()=>{
        setCount(0);
    }
    return(
        <counter>
            <h1>{count}</h1>
            <button onClick={addClick}>추가하기</button>
            <button onClick={resetCount}>삭제하기</button>
        </counter>
    );
}

export default Counter;