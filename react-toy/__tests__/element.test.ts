import { expect, test } from "@jest/globals";
import React from "react";

test("createElement correct", () => {
  expect(React.createElement("div")).toHaveProperty("type", "div");
});
