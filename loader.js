var htmlparser = require('htmlparser2');

module.exports = function (source) {
  var output = "";

	// Custom html loader, doesn't actually do anything here.
  var parser = new htmlparser.Parser({
    onopentagname: function(name, attribs) {
      output += '<' + name + '>';
    },
    ontext: function(text) {
      output += text;
    },
    onclosetag: function(name) {
      output += '</' + name + '>';
    },
    onerror: function(error) {
      throw error;
    }
  })

  parser.write(source);
  parser.end();
  
  return output;
}
