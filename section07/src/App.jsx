import { useState,useEffect,useRef} from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewr";
import "./App.css";
import Even from "./components/Even";

function App(){
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);
  //마운트
  useEffect(()=>{
    console.log("mount");
  },[])
  //업데이트
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  const onClickBtn = (value)=>{
    setCount(value + count);
  }

  return(
    <div className="app">
      <h1>Simple Counter</h1>

      <section>
        <input onChange={(e)=>{
          setInput(e.target.value);
        }} id="input" type="text" name="a" />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 == 0 ? <Even/> : null}
      </section>

      <section>
        <Controller onClickBtn={onClickBtn}/>
      </section>
    </div>
  );
}

export default App;