import './Editor.css';

const Editor = ({count, setCount, content, setContent, date,setDate})=>{
    const onclickChange=(e)=>{
        setCount(count+1);
        console.log(count);
        setDate(new Date().toLocaleTimeString());
        console.log(date);
    }

    const saveContent = (e)=>{
        setContent(e.target.value);
        console.log(content);
    }
    return (
        <div className="editor">
            <input type="text" onChange={saveContent} placeholder='새로운 Todo...'/>
            <button onClick={onclickChange}>추가</button>
        </div>
    );
};

export default Editor;