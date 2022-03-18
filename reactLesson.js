// let React = require("react"); // behaves as the compiler, "BABEL", also OLD WAY OF REQUIRING
import React from "react";
// let ReactDOM = require("react-dom"); OLD WAY
import ReactDOM from "react-dom";
// need to use ReactDOM's render function (3 parameters, what to show and ONLY ONE html element, where to show, and a callback)
// you can bypass the SINGLE element issue by using a <div>!!!
let cat1 = "Toshi";
let cat2 = "Yuki";
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
// {} lets you add expressions NOT statements
let randomImg = "https://picsum.photos/300";

let customStyle = {
  fontSize: "20px",
  border: "1px solid black",
  borderRadius: "10px",
  color: "green",
  textAlign: "center"
};

customStyle.color = "blue";

//use div to handle extra tags --- you can also use a div within it!!
// inline styling - turn you CSS into an object
// style={} <---that's the start so it's recognized as JS
// style={{color: "red"}}  remember it's an object so no ";"
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      Hello World
    </h1>
    <br />
    <p style={customStyle}>
      I've just added another element. My first cat is {cat1} and my second cat
      is {cat2}. They are {10 + 2} years old
    </p>
    <p style={{ color: "purple", fontSize: "20px" }}>Copyright {currentYear}</p>
    <button>Submit</button>
    <br />
    <br />
    <div>
      <img
        className="img-size"
        src="https://images.unsplash.com/photo-1647511246416-852127f1f39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
      />
      <img
        className="img-size"
        src="https://images.unsplash.com/photo-1647511246416-852127f1f39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
      />
      <img
        className="img-size"
        src="https://images.unsplash.com/photo-1647511246416-852127f1f39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
      />
      <br />
      <img
        className="gif-layout"
        src="https://wallpaperaccess.com/full/2825704.gif"
      />
      <br />
      <img
        className="gif-layout"
        src="https://wallpaperaccess.com/full/2825704.gif"
      />
      <br />

      {/* RANDOM IMAGES HERE */}
      <img src={randomImg + "?grayscale"} />
    </div>
  </div>,
  document.querySelector("#root")
);
