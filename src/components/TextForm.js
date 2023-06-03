import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Upper Case was clicked");
  };
  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3"></div>
      <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={handleOnChange}
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>
        Convert To Upper Case
      </button>
    </div>
  );
}
