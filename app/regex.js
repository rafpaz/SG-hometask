if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /[0-9]/g.test(str);
    },

    containsRepeatingLetter : function(str) {
      return /([a-zA-Z])\1/g.test(str);
    },

    endsWithVowel : function(str) {
      return /[aeiouAEIOU]$/g.test(str);
    },

    captureThreeNumbers : function(str) {
      var result = str.match(/\d\d\d/g);
      if (result && result.length > 0) return result[0];
      return false;
    },

    matchesPattern : function(str) {
      return /^\d{3}-\d{3}-\d{4}$/g.test(str);
    },
    isUSD : function(str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d\d)?$/g.test(str);
    }
  };
});
