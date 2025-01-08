import { useState } from "react"

const Register=()=>{
  const [name, setName] = useState("홍길동");
  const [birth, setBirth] = useState("2000-10-10");
  const [country, setCountry] = useState("도현국");
  const [bio, setBio] = useState("bio");

  const onChangeName = (e)=>{
    setName(e.target.value);
  }
  const onChangeBirth = (e)=>{
    setBirth(e.target.value);
  }
  const onChangeCountry = (e)=>{
    setCountry(e.target.value);
  }
  const onChangeBio = (e)=>{
    setBio(e.target.value);
  }

  return(
    <register>
      <input onChange={onChangeName} value={name} placeholder="이름" type="text" />
      <h1>{name}</h1>
      <input onChange={onChangeBirth} type="date" />
      <h1>{birth}</h1>
      <select value={country} onChange={onChangeCountry}>
        <option value="한국">한국</option>
        <option value="중국">중국</option>
        <option value="북한">북한</option>
      </select>
      <h1>{country}</h1>
      <textarea onChange={onChangeBio} value={bio}></textarea>
      <h1>{bio}</h1>
    </register>
  );
}

export default Register;