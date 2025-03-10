import { useState, useContext } from 'react';
import './Todoitem.css';
import { TodoContext } from '../App';

const Todoitem = ({id, isDone, content, date})=>{
    const {onUpdate, onDelete} = useContext(TodoContext);

    const checkChange = ()=>{
        onUpdate(id);
    }
  
    const delBtn = ()=>{
        onDelete(id);
    }

    return(
        <div className="todoitem">
            <input onChange={checkChange} checked={isDone} type="checkbox"></input>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={delBtn}>삭제</button>
        </div>
    )
}

export default Todoitem;