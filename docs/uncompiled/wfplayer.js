/*!
 * WFPlayer.js v1.1.3
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.WFPlayer = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  var WFPlayer = function WFPlayer() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck(this, WFPlayer);

    this.options = options;
  };

  return WFPlayer;

}));
//# sourceMappingURL=wfplayer.js.map
