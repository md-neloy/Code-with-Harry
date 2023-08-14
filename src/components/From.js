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

    props.showAlert("converted to uppercase", "success");
  };
  const handleLowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to LOWER", "success");
  };
  const handleCapiclick = () => {
    console.log(text);
    let uptext = capitalize(text);
    setText(uptext);
  };

  const handleCopyclick = () => {
    var copy = document.getElementById("mybox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
  }
  const onchange = (event) => {
    console.log("upper click button");
    setText(event.target.value);
  };
  const lengthOfText = () => {
    const num = text.length;
    if (num === 0 ) {
      return 0;
    } else {
      return text.split(" ").length;
    }
  }
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
              style={{ background: props.mode === "white" ? "white" : "#ddd" }}
              id="mybox"
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
            <button className="btn btn-primary" onClick={handleCopyclick}>
              Copy button
            </button>
          </div>
          <h3
            className="my-2"
            style={{ color: props.mode === "white" ? "black" : "white" }}
          >
            your text summary
          </h3>
          <p style={{ color: props.mode === "white" ? "black" : "white" }}>
            {lengthOfText()} word {text.length} letter
          </p>
          <h3 style={{ color: props.mode === "white" ? "black" : "white" }}>
            Total time to read this text{" "}
          </h3>
          <p style={{ color: props.mode === "white" ? "black" : "white" }}>
            {0.008 * text.split(" ").length} minutes
          </p>
        </div>
      </section>
    </>
  );
}
