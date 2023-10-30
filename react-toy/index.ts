// import React from "react";
import htm from "htm";
import { ReactElement, createElement } from "./src/ReactElement";
import { render, unmount } from "./src/ReactDom";

const html = htm.bind(createElement);

function App() {
  return html`
    <div>
      <span>foo</span>
      hello world
    </div>
  `;
}
const elm = html`<${App}><//>` as ReactElement;
const root = document.querySelector("#root") as HTMLElement;

render(elm, root);

setTimeout(() => {
  unmount(root);
}, 5000);
