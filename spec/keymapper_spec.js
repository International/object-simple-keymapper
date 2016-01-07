var KeyMapper = require("../"),
  should = require("should");

describe("KeyMapper",function() {
  "use strict";
  it("maps property x to y on a object", function() {
    var a = {x:20};
    var b = {};
    KeyMapper.performMapping(a, b, {
      remap: {
        x: "y"
      }
    });
    should.exist(b.y);
  });
});
