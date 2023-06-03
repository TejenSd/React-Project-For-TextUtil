import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Upper Case was clicked");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("Lower Case was clicked");
  };
  
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  
  return (
    // <></> IT IS JSX FRAGMENT
    <> 
      <div className="container">

        <h3>{props.heading}</h3>
        <div className="mb-3"></div>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="4"></textarea>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lower Case</button>

      </div>
      <div className="container my-3">
        <h3>Your Text Summay</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        
        <h3>Text Preview</h3>
        <p>{text}</p>

      </div>
    </>
  );
}
