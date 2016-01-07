var KeyMapper = require("../"),
  should = require("should");

describe("KeyMapper",function() {
  "use strict";
  it("maps property x to y on an object", function() {
    var a = {x:20};
    var b = {};
    KeyMapper.performMapping(a, b, {
      remap: {
        x: "y"
      }
    });
    should.exist(b.y);
  });

  it("takes only properties x and y from an object", function() {
    var a = {x:20, y:20, z:30};
    var b = {};
    KeyMapper.performMapping(a, b, {
      only: ["x","y"],
    });
    should.exist(b.x);
    should.exist(b.y);
    should.not.exist(b.z);
  });

  it("takes only properties x and y from an object, and remaps y as z", function() {
    var a = {x:20, y:20, z:30};
    var b = {};
    KeyMapper.performMapping(a, b, {
      only: ["x","y"],
      remap: {
        y: "z"
      }
    });
    should.exist(b.x);
    should.exist(b.z);
    should.not.exist(b.y);
  });


});
