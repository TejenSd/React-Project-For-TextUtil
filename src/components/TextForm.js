import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
 
  // Convert text to toUpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Upper Case was clicked");
  };

  // Convert Text to toLowerCase
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("Upper Case was clicked");
  };
  
  // Call on chnage for word count
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };

  //Get the text copied from text Area
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  //Remove extra spaces on a button using regex(regular expression)
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  //Clear the text of text Area
  const textClear = () => {
    setText("");
  }
  

  return (
    // <></> Its a JSX fragant and will return a single div or child 
    <> 
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
         color: props.mode==='dark'?'white':'black'}} rows="4"></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={textClear}>Clear Text</button>



      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summay</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        
        <h3>Text Preview</h3>
        <p>{text.length>0?text:"Enter Your Text"}</p>

      </div>
    </>
  );
}
