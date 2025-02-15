import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'

function App() {
  const [count,setCount] = useState([]);
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className='app'>
      <Header />
      <Editor 
        count={count} setCount={setCount} 
        content={content} setContent={setContent}
        date={date} setDate={setDate}
      />
      <List 
        count={count} setCount={setCount} 
        content={content} setContent={setContent}
        date={date} setDate={setDate}
      />
    </div>
  )
}

export default App;
