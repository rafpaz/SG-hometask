if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return ((1 << bit - 1) & num) !== 0 ? 1 : 0;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var n = num.toString(2);
      return '00000000'.substr(n.length) + n;
    },

    multiply: function(a, b) {
      // return +(a * b).toFixed(1);
      var result = a * b;
      return parseFloat(result.toFixed(10));
    }
  };
});

