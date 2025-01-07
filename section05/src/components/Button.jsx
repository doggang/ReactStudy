const Button = ({text,color})=>{
    console.log();
    return(
        <button style={{color:color}}>{text}-{color}</button>
    );
}

Button.defaultProps={
    color:"black"
};

export default Button;