/*
  const A = Math.PI
  export A

  import A
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Взять из html-файла тег, внутри которого будет работать React
const root = ReactDOM.createRoot(document.getElementById("root"));
// Собрать внутрь тега код из круглых скобок
// root.render(
//   React.createElement("h1", {title: "doggy"}, "Hello React!")
// )
// root.render(
//   React.createElement(
//     "div", 
//     {title: "doggy"}, 
//     React.createElement("h1", null, "Hello React"),
//     React.createElement("p", {style:{color: "red"}}, "DogFood shop")
//   )
// )
root.render(<App/>)