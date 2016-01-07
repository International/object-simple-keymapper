var KeyMapper = (function() {
  "use strict";

  function KeyMapper() {
  }

  /**
  * Maps keys from one object to another
  * @param {Object} source_object
  * @param {Object} receiving_object
  * @param {Object} settings
  * @return {undefined}
  */
  KeyMapper.performMapping = function(source_object, receiving_object, settings) {
    if(!settings.remap) {
      throw new Error("expected settings to contain a remap property");
    }
    Object.keys(settings.remap).forEach(function(key) {
      var mapping = settings.remap[key];
      if(mapping === undefined) {
        mapping = key;
      }
      receiving_object[mapping] = source_object[key];
    });
  };

  return KeyMapper;
})();

module.exports = KeyMapper;
