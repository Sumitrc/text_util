import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(" ");

  const handleUpClick = () => {
    console.log("Convert is clicked on \t" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","Success");
  };
  const handleLoClick = () => {
    console.log("Convert is clicked on \t" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","Success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
   <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.Mode === 'dark' ? 'dark' : 'lght',color:props.Mode === 'dark' ? 'white' : 'black'}}
          id="mybox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower</button>
    </div>
    <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
      <h1>Youer text summary</h1>
      <p>{text.split ("").length} words and {text.length}  Charcters</p>
      <p>{0.008 * text.split("").length}  Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter your text to preview"}</p>


    </div>
    </>
  );
}
