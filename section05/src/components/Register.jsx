import { useState,useRef } from "react"

const Register=()=>{
  const [input,setInput] = useState({
    name:"",
    birth:"",
    country:"",
    bio:""
  })

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }
  
  const onSubmit=()=>{
    if(input.name === ""){
      inputRef.current.focus();
    }
  }

  return(
  <register>
    

    <input ref={inputRef} value={input.name} onChange={onChange} name="name" type="text" />
    <h1>{input.name}</h1>


    <input onChange={onChange} name="birth" type="date" />
    <h1>{input.birth}</h1>


    <select onChange={onChange} name="country">
      <option value="한국">한국</option>
      <option value="미국">미국</option>
      <option value="중국국">중국국</option>
    </select>
    <h1>{input.country}</h1>


    <textarea onChange={onChange} name="bio"></textarea>
    <h1>{input.bio}</h1>

    <button onClick={onSubmit}>제출</button>

  </register>
  );
}

export default Register;