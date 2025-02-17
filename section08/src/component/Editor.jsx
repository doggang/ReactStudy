import { useState,useRef } from 'react';
import './Editor.css';

const Editor = ({onCreate})=>{
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