# gradient-css.js
This module creates css gradient output for gradient.js modules.

<!-- [![License](https://img.shields.io/npm/l/gradient-css.svg?style=flat)](https://github.com/afternoon2/gradient-css/blob/master/LICENSE)&nbsp;&nbsp; -->
[![Travis build](https://img.shields.io/travis/afternoon2/gradient-css.svg?style=flat)](https://travis-ci.org/afternoon2/gradient-css)&nbsp;&nbsp;[![Codecov](https://img.shields.io/codecov/c/github/afternoon2/gradient-css.svg?style=flat)](https://codecov.io/gh/afternoon2/gradient-css)


## Table of contents
* [gradient.js](#gradient.js)
* [Usage](#usage)
* [Options](#options)

---
## gradient.js
### Gradient creation library running in the browser 🖌🌈

gradient.js is a javascript module that takes your source colors array and configuration object, and returns a gradient suitable for your needs.

---

## Usage

```javascript
const css = new Css()

const gradient = css.get([
    [100, 34, 230, 0.5],
    [10, 33, 20, 0.6],
    [1, 12, 12, 0.3]
],{
    base: {
        interpolation: 'linear',
        mode: 'rgb',
        samples: 40,
        lightnessCorrection: true
    },
    css: {
        type: 'radial',
        top: 30,
        left: 20,
        shape: 'circle'
    }
})
```

## Options

```typescript
{
    type: 'linear' | 'radial'
    angle?: number // between 0 and 359
    shape: 'ellipse' | 'circle'
    top?: number
    left?: number
    extent?: 'farthest-side' | 'closest-side' | 'farthest-corner' | 'closest-corner'
}
```
The `angle` is ommited when the `type` is set to `radial`.

The `extent` keyword is ignored if the shape is set to the `circle` and the `type` is set to `linear`.

When you set the `type` to `radial`, you must provide valid `shape` property.