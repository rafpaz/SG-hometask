if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var i = start;
      var interval = setInterval(function(){
        if(i <= end)
          console.log(i++);
        else
          clearInterval(interval);
        }, 100);
      return {
        cancel: function() {
          clearInterval(interval);
        }
      };
    }
  };
});
