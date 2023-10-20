/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
// import { render } from "../src/ReactDom";
import { createRoot } from "react-dom/client";
import React from "react";
import { render } from "../src/ReactDom";
import { createElement } from "../src/ReactElement";

test("render correct", () => {
  const elm = createElement("div");
  const res = render(elm, document.body);
  expect(!!res).toBe(true);
});
