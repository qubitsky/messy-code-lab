/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
// import { render } from "../src/ReactDom";
import { createRoot } from "react-dom/client";
import React from "react";
import { mount } from '../src/mount';

test("mount", () => {
  const elm = React.createElement("div");
  const res = mount(elm);
  expect(!!res).toBe(true);
});
