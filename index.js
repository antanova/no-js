"use strict";
// change 'no-js' class in the <html> element to 'js'. 
// Of course, only use this code in a browser.
var html = document.documentElement;
html.className = html.className.replace(/(^|\s)no\-js($|\s)/gi, '$1js$2');