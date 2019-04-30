if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(elem){
       return function(){
         return fn(elem);
       };
      });
    },

    partial : function(fn, str1, str2) {
      return function(e) {
        return fn(str1, str2, e);
      };
    },

    useArguments : function() {
      return Object.values(arguments).reduce(function(acc, e) {
        return acc + e;
      });
    },

    callIt : function(fn) {
      return fn.apply(this, Object.values(arguments).slice(1));
    },

    partialUsingArguments : function(fn) {
      var tArguments = Object.values(arguments).slice(1);
      return function() {
        var allArguments = tArguments.concat(Object.values(arguments));
        return fn.apply(this, allArguments);
      };
    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a,b,c);
          };
        };
      };
    }
  };
});
