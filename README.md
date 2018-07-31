# gradient-base.js

This module creates css gradient output for gradient.js modules.

## Table of contents
* [gradient.js](#gradient.js)
* [Usage](#usage)

---
## gradient.js
### Gradient creation library running in the browser 🖌🌈

gradient.js is a javascript module that takes your source colors array and configuration object, and returns a gradient suitable for your needs.

---

## Usage

```javascript
const css = new Css([
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

const gradient = css.get()
```