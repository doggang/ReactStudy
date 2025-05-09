import { useState,useRef } from 'react';
import './Editor.css';
import { useContext } from 'react';
import { TodoContext } from '../App';

const Editor = ()=>{
    const {onCreate} = useContext(TodoContext);
    const [content, setContent] = useState("");

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const btnRef = useRef();

    const onSubmit = ()=>{
        if(content === ""){
            btnRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e)=>{
        if(e.key === "Enter"){
            onSubmit();
        }
    }
 
    return (
        <div className="editor">
            <input onKeyDown={onKeyDown} ref={btnRef} value={content} type="text" onChange={onChangeContent} placeholder='새로운 Todo...'/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;