# @unction/pipe

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> => B => C

Takes a list of functions and runs a value through that stack from left to right.

``` javascript
pipe([toString, toInteger])(0) // 0
pipe([append("b"), append("a")])("c") // "cba"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/pipe.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/pipe.svg?maxAge=2592000&style=flat-square
