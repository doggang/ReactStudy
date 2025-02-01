const Controller = ({onClickBtn})=>{
    return(
        <controller>
            <button onClick={()=>{
                onClickBtn(-1);
            }}>-1</button>
            <button onClick={()=>{
                onClickBtn(-10);
            }}>-10</button>
            <button onClick={()=>{
                onClickBtn(-100);
            }}>-100</button>
            <button onClick={()=>{
                onClickBtn(1);
            }}>1</button>
            <button onClick={()=>{
                onClickBtn(10);
            }}>10</button>
            <button onClick={()=>{
                onClickBtn(100);
            }}>100</button>

        </controller>
    )
}

export default Controller;