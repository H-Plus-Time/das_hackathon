var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};Promise.all=Promise.all||function(){var o=Array.prototype.slice.call(1===arguments.length&&Array.isArray(arguments[0])?arguments[0]:arguments);return new Promise(function(t,n){function e(f,i){try{if(i&&("object"===("undefined"==typeof i?"undefined":_typeof(i))||"function"==typeof i)){var y=i.then;if("function"==typeof y)return void y.call(i,function(o){e(f,o)},n)}o[f]=i,0===--r&&t(o)}catch(o){n(o)}}if(0===o.length)return t([]);for(var r=o.length,f=0;f<o.length;f++)e(f,o[f])})},Promise.race=Promise.race||function(o){var t=o;return new Promise(function(o,n){for(var e=0,r=t.length;e<r;e++)t[e].then(o,n)})};