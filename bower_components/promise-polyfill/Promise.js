function MakePromise(t){function e(t){if("object"!==_typeof(this)||"function"!=typeof t)throw new TypeError;this._state=null,this._value=null,this._deferreds=[],f(t,o.bind(this),i.bind(this))}function n(e){var n=this;return null===this._state?void this._deferreds.push(e):void t(function(){var t=n._state?e.onFulfilled:e.onRejected;if("function"!=typeof t)return void(n._state?e.resolve:e.reject)(n._value);var o;try{o=t(n._value)}catch(t){return void e.reject(t)}e.resolve(o)})}function o(t){try{if(t===this)throw new TypeError;if(t&&("object"===("undefined"==typeof t?"undefined":_typeof(t))||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void f(e.bind(t),o.bind(this),i.bind(this))}this._state=!0,this._value=t,r.call(this)}catch(t){i.call(this,t)}}function i(t){this._state=!1,this._value=t,r.call(this)}function r(){for(var t=0,e=this._deferreds.length;t<e;t++)n.call(this,this._deferreds[t]);this._deferreds=null}function f(t,e,n){var o=!1;try{t(function(t){o||(o=!0,e(t))},function(t){o||(o=!0,n(t))})}catch(t){if(o)return;o=!0,n(t)}}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.then=function(t,o){var i=this;return new e(function(e,r){n.call(i,{onFulfilled:t,onRejected:o,resolve:e,reject:r})})},e.resolve=function(t){return t&&"object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.constructor===e?t:new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,n){n(t)})},e}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"!=typeof module&&(module.exports=MakePromise);