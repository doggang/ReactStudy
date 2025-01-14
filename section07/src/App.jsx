import './App.css';
import Viewer from './components/Viewr';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount");
  }, [])
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })
  // 3. 언마운트 : 죽음

  const clickBtn = (value)=>{
    setCount(value + count);
  }
  return (
    <div className='app'>
      <h1 id="title">Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count%2==0 ? <Even></Even>:null}
      </section>
      <section>
        <Controller clickBtn={clickBtn}/>
      </section>
      <section>
        <input onChange={(e)=>{
          setInput(e.target.value);
        }} value={input} name="text" type="text" />
        <h4>{input}</h4>
      </section>
    </div>
  )
}

export default App
