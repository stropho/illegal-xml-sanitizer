Removes/replaces invalid xML chracters from strings

# Motivation
In case you process data from unknown sources (like the internet) and you want to generate XML files with that data, let's say XLSX files, you need to sanize the input data. Otherwise you XML parser (the program that opens and nicely displayes XML files data) will most probably crash.

# Usage
```
var xmlSanitize = require('');
//replace invalid characters by empty string
xmlSanitize("\uFFFFab", ''); // "ab"

//empty string is a default value so you could write just:
xmlSanitize("\uFFFFab"); // "ab"
```

Note, that if a surrogate pair character (\uD800-\uDFFF) is found, the following character is removed as well
