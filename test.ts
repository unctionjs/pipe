/* eslint-disable no-magic-numbers */
import pipe from "./index";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);
const append = (left) => (right) => `${right}${left}`;

test("works", () => {
  expect(pipe([increment, increment, increment])(0)).toEqual(3);
});

test("works", () => {
  expect(pipe([toString, toInteger])(0)).toEqual(0);
});

test("works", () => {
  expect(pipe([append("b"), append("a")])("c")).toBe("cba");
});
