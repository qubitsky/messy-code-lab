// import React from "react";
import { createElement } from "./src/ReactElement";
import { render } from "./src/ReactDom";

const spanElm = createElement("span");

function App() {
  return createElement("div", {}, [spanElm, "hello world"]);
}
const elm = createElement(App);
const root = document.querySelector("#root") as HTMLElement;

render(elm, root);
