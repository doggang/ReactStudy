import { useState } from 'react';
import './List.css';
import Todoitem from './Todoitem';

const List = ({todos,onUpdate,onDelete})=>{

    const [search,setSearch] = useState("");

    const searchChange = (e)=>{
        setSearch(e.target.value);
        console.log(search);
    }

    const filterdSearch = ()=>{
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const getFilterdSearch = filterdSearch();

    return (
        <div className="list">
            <h4>Todo List 🧶</h4>
            <input value={search} onChange={searchChange} type="text" placeholder="검색어를 입력하세요"/>
            <div className='todosWrapper'>
                {
                    getFilterdSearch.map((todo)=>{
                        return <Todoitem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                    })   
                }
            </div>
        </div>
    )
};

export default List;