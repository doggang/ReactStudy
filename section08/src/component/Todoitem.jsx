import './Todoitem.css';

const Todoitem = ({count, setCount, content, setContent, date, setDate})=>{
    return(
        <div className="todoitem">
            <input type="checkbox"></input>
            <div className='content'>{content}</div>
            <div className='date'>{date}</div>
            <button>삭제</button>
        </div>
    )
}

export default Todoitem;