/* eslint-disable no-magic-numbers */
import {test} from "tap";

import pipe from "./index";

const increment = (value) => value + 1;
const toString = (value) => `${value}`;
const toInteger = (value) => parseInt(value, 10);

test(({same, end}) => {
  same(
    pipe([increment, increment, increment])(0),
    3
  );

  end();
});

test(({same, end}) => {
  same(
    pipe([toString, toInteger])(0),
    0
  );

  end();
});
