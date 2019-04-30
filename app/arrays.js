if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(acc, val){ return acc + val; });
    },

    remove : function(arr, item) {
      return arr.filter(function(val){
        return val !== item ;
      });
    },

    removeWithoutCopy : function(arr, item) {
      console.log(arr);
      for(var i = 0; i < arr.length; i++){
        if ( arr[i] === item) {
          arr.splice(i, 1);
          i--;
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.reduce(function(acc, i){
        if(i === item) return ++acc;
        return acc;
      }, 0);
    },

    duplicates : function(arr) {
      var result = [];
      arr.forEach(function(e, i) {
        if(arr.indexOf(e, i +1) > -1){
          if(result.indexOf(e) === -1)
            result.push(e);
        }
      });
      return result;
    },

    square : function(arr) {
      return arr.map(function(elem){
        return elem * elem;
      });

    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(acc, e, i){
        if(e === target) acc.push(i);
        return acc;
      }, []);
    }
  };
});
