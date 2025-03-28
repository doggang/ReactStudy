import { useState, useRef, createContext} from 'react'
import './App.css'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'

function reducer(state, action){
  
}
export const TodoContext = createContext();

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
    setTodos([...todos, newTodo]);
  }

  const onUpdate = (targetId)=>{
    setTodos(todos.map((todo)=>targetId===todo.id ? {...todo, isDone: !isDone} : todo));
  }

  const onDelete = (targetId)=>{
    setTodos(todos.filter((todo)=>todo.id != targetId));
  }


  return (
    <div className='app'>
      <Header />
      <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App;
