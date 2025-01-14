
const Controller = ({clickBtn})=>{
    
    return(
        <controller>
            <button onClick={()=>{
                clickBtn(-1);
            }}>-1</button>
            <button onClick={()=>{
                clickBtn(-10);
            }}>-10</button>
            <button onClick={()=>{
                clickBtn(-100);
            }}>-100</button>
            <button onClick={()=>{
                clickBtn(100);
            }}>+100</button>
            <button onClick={()=>{
                clickBtn(10);
            }}>+10</button>
            <button onClick={()=>{
                clickBtn(1);
            }}>+1</button>
        </controller>
    )
}

export default Controller;