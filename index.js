var Keymapper = (function() {
  "use strict";

  function KeyMapper() {
  }

  // var google_to_internal_key_mapping = {
  //   extract_only: ["created", "updated", "status", "summary"],
  //   remap: {"created":"created_at", "updated":"updated_at"}
  // }
  /**
  * Maps keys from one object to another
  * @param {Object} source_object
  * @param {Object} receiving_object
  * @param {Object} settings
  * @return {undefined}
  */
  KeyMapper.prototype.performMapping = function(source_object, receiving_object, settings) {
    Object.keys(keyMap).forEach(function(key) {
      var mapping = keyMap[key];
      if(mapping === undefined) {
        mapping = key;
      }
      receiving_object[mapping] = source_object[key];
    });
  };

  return KeyMapper;
});

exports.KeyMapper = keymapper;
