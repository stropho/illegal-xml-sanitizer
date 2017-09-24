//\u0000-\u0008 - control characters
//\u000B-\u000C - control characters
//\u000E-\u001F - control characters
//\uFFFE-\uFFFF - BOM
//\uD800-\uDFFF - surrogate pairs

var illegalCharsRegExp = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]|[\uD800-\uDFFF]./g;

module.exports = function(str, replacement) {
  if (replacement == null) {
    replacement = '';
  }
  return str.replace(illegalCharsRegExp, replacement);
};
