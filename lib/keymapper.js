var KeyMapper = (function() {
  "use strict";

  function KeyMapper() {
  }

  /**
  * Maps keys from one object to another ( possibly under different name ).
  * Modifies the receiving object;
  * @param {Object} source_object
  * @param {Object} receiving_object
  * @param {Object} settings
  * @return {undefined}
  */
  KeyMapper.performMapping = function(source_object, receiving_object, settings) {
    var working_with = Object.keys(source_object), remap;

    if(settings.only) {
      if(settings.only.length === "undefined") {
        throw new Error("expected only to be an array");
      }
      working_with = settings.only;
    }
    if(settings.remap) {
      remap = settings.remap;
    }

    var source_keys = Object.keys(source_object);

    source_keys.forEach(function(key) {
      if(working_with.indexOf(key) !== -1) {
        var keyMapping;
        if(remap && remap[key]) {
          keyMapping = remap[key];
        }
        if(keyMapping) {
          receiving_object[keyMapping] = source_object[key];
        } else {
          receiving_object[key] = source_object[key];
        }
      }
    });
  };

  return KeyMapper;
})();

module.exports = KeyMapper;
