import { useState, useRef} from 'react'
import './App.css'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'

function App() {
  const mokData = [
    {
      id:3,
      isDone:false,
      content: "3번입니다다",
      date: new Date().toDateString()
    },
    {
      id:2,
      isDone:false,
      content: "2번입니다다",
      date: new Date().toDateString()
    },
    {
      id:1,
      isDone:false,
      content: "1번입니다다",
      date: new Date().toDateString()
    },
  ]

  const [todos, setTodos] = useState(mokData);

  const idRef = useRef(4);

  const onCreate = (content)=>{
    const newTodo = {
      id:idRef.current++,
      isDone:false,
      content:content,
      date: new Date().toDateString()
    };
    setTodos([newTodo, ...todos]);
    console.log(todos);
  }

  const onUpdate = (targetId)=>{
    setTodos(todos.map((todo)=>(todo.id === targetId)?{...todo, isDone: !todo.isDone,}:todo));
  }

  const onDelete = (targetId)=>{
    setTodos(
      todos.filter((todo)=>targetId!==todo.id)
    )
  }


  return (
    <div className='app'>
      <Header />
      <Editor 
        onCreate={onCreate}
      />
      <List 
        todos={todos} onUpdate={onUpdate} onDelete={onDelete}
      />
    </div>
  )
}

export default App;
