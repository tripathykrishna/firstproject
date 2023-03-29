import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convered to uppercase! ","success")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convered to lowercase! ","success")
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked")
        let newText = '';
        setText(newText)
        props.showAlert("convered to newtext! ","success")
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
        
    }

    return (
        <>
            <div className="container"style={{color : props.mode ==='dark'?'white' :'black'}} >
                <h3 my-2 >{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='light'?' #b8bec5' :'white',color:props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
                </div >
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-2" style={{color : props.mode ==='dark'?'white' :'black'}}>
                <h3>Your text summary</h3>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
                <h3>preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )

}