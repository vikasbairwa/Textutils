import React,{useState} from 'react'

export default function TextForm(props) {
    const handleClick = ()=>{
        //console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleClicklo = ()=>{
        //console.log("Uppercase was clicked");
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        //console.log("Onchange");
        settext(event.target.value);
    }
    const [text, settext] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
            <h1 >{props.heading} </h1>
            <div className="mb-2">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#4a4949', color:props.mode==='dark'?'white':'grey'}}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'secondary'} mx-2 mb-2 my-2`} onClick = {handleClick}>Convert to UpperCase</button>
            <button disabled = {text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'secondary'}`} onClick = {handleClicklo}>Convert to LowerCase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'grey'}}>
            <h2> Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(/\s+/).filter((element) =>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text: 'Enter something in the textbox to preview it here'}</p>
        </div>
        </>
    )
}
