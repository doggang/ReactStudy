import {  useRef, createContext, useReducer} from 'react'
import './App.css'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'

function reducer(state, action){
  switch(action.type){
    case "create": return [action.data, ...state];
    case "update": return state.map((item)=>(action.targetId===item.id)?{...state, isDone : !isDone}:item);
    case "delete": return state.filter((item)=>action.targetId!==item.id);
    default : return 0;
  }
}

export const TodoContext = createContext();

function App() {
  const mokData = [
    {
      id:3,
      isDone:false,
      content: "3번입니다",
      date: new Date().toDateString()
    },
    {
      id:2,
      isDone:false,
      content: "2번입니다",
      date: new Date().toDateString()
    },
    {
      id:1,
      isDone:false,
      content: "1번입니다",
      date: new Date().toDateString()
    },
  ]

  const [todos, dispatch] = useReducer(reducer, mokData); 
  const idRef = useRef(4);

  const onCreate = (content)=>{
    dispatch({
      type:"create",
      data:{
        id:idRef.current++,
        isDone:false,
        content:content,
        date: new Date().toDateString()
      }
    })
  }

  const onUpdate = (targetId)=>{
    dispatch({
      type:"update",
      targetId:targetId
    })  
  }

  const onDelete = (targetId)=>{
    dispatch({
      type:"delete",
      targetId:targetId
    });
  }

  return (
    <div className='app'>
      <Header />
      <TodoContext.Provider value={{
        onCreate, onUpdate, onDelete, todos
      }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App;