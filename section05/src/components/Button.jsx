const Button = ({text,color,children})=>{
    const onClickButton = (e)=>{
        console.log(e.type);
    }
    return(
        <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color:color}}>
            {text}
            {children}
        </button>
    );
}

Button.defaultProps = {
    text:"기본",
    color:"orange"
}

export default Button;