function ls(dirname, filt, callback){
  var fs = require('fs');
  var dirlist = fs.readdir(dirname, function(err, data) {
    if (err) {
      return callback(err);
    }


var filt2 = '.' + filt;
    var filtered = data.filter(function(line) {
      return line.endsWith(filt2);
    });

    return callback(null, filtered);
  });
}

module.exports = ls;
