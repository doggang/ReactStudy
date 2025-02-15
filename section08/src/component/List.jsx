import './List.css';
import Todoitem from './Todoitem';

const List = ({count, setCount, content, setContent, date, setDate})=>{
    return (
        <div className="list">
            <h4>Todo List 🧶</h4>
            <input type="text" placeholder="검색어를 입력하세요"/>
            <div className='todosWrapper'>
                <Todoitem 
                    count={count} setCount={setCount} 
                    content={content} setContent={setContent}
                    date={date} setDate={setDate}
                />
            </div>
            
        </div>
    )
};

export default List;