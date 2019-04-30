if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      if(!dirName)
        return this.recListFiles([], data);
      return this.recListFiles([], this.findDir([], data, dirName)[0]);
    },

    findDir: function(arr, data, dirName) {
      if(data.dir && data.dir === dirName) {
        arr.push(data);
        return;
      }
      if(!data.dir) return;

      for(var i = 0; i < data.files.length; i++){
        this.findDir(arr, data.files[i], dirName);
      }
      return arr;
    },

    recListFiles: function(arr, data) {
      if (!data.dir) {
        arr.push(data);
        return;
      }
      for(var i = 0; i < data.files.length; i++) {
        this.recListFiles(arr, data.files[i]);
      }
      return arr;
    },

    permute: function(arr) {
      var ret = [];

      for (var i = 0; i < arr.length; i++) {
        var rest = this.permute(arr.slice(0, i).concat(arr.slice(i + 1)));

        if(!rest.length) {
          ret.push([arr[i]]);
        } else {
          for(var j = 0; j < rest.length; j++) {
            ret.push([arr[i]].concat(rest[j]));
          }
        }
      }
      return ret;
    }
  };
});
