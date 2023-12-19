// import React from "react";
import htm from "htm";
import { ReactElement, createElement } from "./src/ReactElement";
import { render, unmount } from "./src/ReactDom";

const html = htm.bind(createElement);

function App({ text }) {
  return html`
    <div>
      <h1>Demo</h1>
      <p>${text}</p>
    </div>
  `;
}

const elm = html`<${App} text="hello world"><//>` as ReactElement;
const root = document.querySelector("#root") as HTMLElement;

console.log('elm: ', elm);
render(elm, root);

setTimeout(() => {
  unmount(root);
}, 5000);
