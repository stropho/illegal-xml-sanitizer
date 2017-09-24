var xmlSanitize = require('../index.js');
var assert = require('chai').assert;
var texts = {
  valid: [
      "Hello World",
      "a  b\nc\r g"
  ],
  invalid: [
  "SX600.       Щ",
  "\uFFFFab",
  "ab \uDFFFx cd" //two chars are removed
  ]
};


describe('XML text sanitizer', function(){
  it('does not do anything to valid strings' , function(){
    var input, actualResult, data = texts.valid;
    for(var i=0; i<data.length; i++){
        input = data[i];
        actualResult = xmlSanitize(input);
        assert.strictEqual(actualResult, input);
    }

  });

  it('removes invalid XML characters' , function(){
    var input, actualResult, data = texts.invalid;
    for(var i=0; i<data.length; i++){
        input = data[i];
        actualResult = xmlSanitize(input, '');
        assert.isBelow(actualResult.length, input.length, 'new string should be smaller than the original input');
    }

  });

});
