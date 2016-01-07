# object-simple-keymapper

  Very basic and dumb library to copy/modify keys from one object to the other.

## Installation

    $ npm install object-simple-keymapper

## Usage

```js
var KeyMapper = require("object-simple-keymapper");

var a = {x:10, y:20, z:30};
var b = {};
KeyMapper.performMapping(a, b, {
  only: ["x","y"],
  remap: {
    y: "z"
  }
});

// b would now have x and z properties
console.log(b.x); // 10
console.log(b.z); // 30
```
