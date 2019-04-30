if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = new $.Deferred();
      deferred.resolve(value);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      var deferred = new $.Deferred();
      $.getJSON(url, function(data) {
        var result = data.people.map(function(e){
          return e.name;
        }).sort();
        deferred.resolve(result);
      });
      return deferred.promise();
    }
  };
});
