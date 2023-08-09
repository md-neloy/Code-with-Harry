import React, { useState } from "react";

export default function From(props) {
  function capitalize(text) {
    const word = text.split(" ");
    if (word.length > 1) {
      const capitalizeword = word.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
      return capitalizeword.join(" ");
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
  }
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log(text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleCapiclick = () => {
    console.log(text);
    let uptext = capitalize(text);
    setText(uptext);
  };

  const onchange = (event) => {
    console.log("upper click button");
    setText(event.target.value);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
                {props.heading}
              </h2>
            </label>
            <textarea
              className="form-control"
              style={{ background: props.mode === "light" ? "white" : "#ddd" }}
              id="exampleFormControlTextarea1"
              value={text}
              onChange={onchange}
              placeholder="write your text here"
              rows="8"
            ></textarea>
          </div>
          <div className="button" style={{ display: "flex", gap: "20px" }}>
            <button className="btn btn-primary" onClick={handleupclick}>
              Uppercase button
            </button>
            <button className="btn btn-primary" onClick={handleLowclick}>
              Lowercase button
            </button>
            <button className="btn btn-primary" onClick={handleCapiclick}>
              Capitalize button
            </button>
          </div>
          <h3
            className="my-2"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            your text summary
          </h3>
          <p style={{ color: props.mode === "light"? 'black':'white' }}>
            {text.split(" ").length} word {text.length} letter
          </p>
          <h3 style={{ color: props.mode === "light"? 'black':'white' }}>
            Total time to read this text{" "}
          </h3>
          <p style={{ color: props.mode === "light"? 'black':'white' }}>
            {0.008 * text.split(" ").length} minutes
          </p>
        </div>
      </section>
    </>
  );
}
