import React from "react";
import { useState } from "react";

export default function TextForm({ heading, mode , showAlert}) {
  const [text, setText] = useState("");
  const handleOnChange = (event, id) => {
    console.log(id);
    setText(event.target.value);
  };

  const handleclickToUpperCase = () => {
    console.log("click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to UpperCase", "success");
  };

  const calculateLength = () => {
    if(text === "")
    return 0;
    else{
    const arr = text.split(/\s+/);
    return arr.filter(word => word !== '').length;
    }
  };

  const handleclickToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("converted to LowerCase", "success");
  };

  const handleclickToClear = () => {
    setText("");
    showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      showAlert("Copied to Clipboard", "success");

  };

  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" ")); 
      showAlert("Extra spaces removed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1> {heading} </h1>
        <div className="mb-3 ">
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={(event) => handleOnChange(event, 2)}
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleclickToUpperCase}
          >
            To UpperCase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleclickToLowerCase}
          >
            To LowerCase
          </button>

          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleclickToClear}>
            Clear Text
          </button>

          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleCopy}>
            Copy Text
          </button>

          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpaces}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {" "}
          {calculateLength()} words and {text.length} characters
        </p>
        <p>Time taken to read will be {0.08 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
