/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SoundCreator = __webpack_require__(6);

var _SoundCreator2 = _interopRequireDefault(_SoundCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(htmlElement, sound, loop) {
        _classCallCheck(this, Animal);

        this.htmlElement = htmlElement;
        // this.htmlElement.addEventListener('click', this.togglePlay.bind(this));
        if (loop) {
            this.sound = new _SoundCreator2.default(true, sound);
        } else {
            this.sound = new _SoundCreator2.default(false, sound);
        }
    }

    _createClass(Animal, [{
        key: 'play',
        value: function play() {
            this.sound.play();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.sound.stop();
        }
    }]);

    return Animal;
}();

exports.default = Animal;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var BearSoundPath = exports.BearSoundPath = '../public/sounds/bear.wav';
var RabbitSoundPath = exports.RabbitSoundPath = '../public/sounds/rabbit.wav';
var WolfSoundPath = exports.WolfSoundPath = '../public/sounds/wolf.wav';
var Sources = exports.Sources = ['../public/sounds/bear.wav', '../public/sounds/rabbit.wav', '../public/sounds/wolf.wav', '../public/img/bear.png', '../public/img/rabbit.png', '../public/img/wolf.png'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bear = __webpack_require__(3);

var _Bear2 = _interopRequireDefault(_Bear);

var _Rabbit = __webpack_require__(4);

var _Rabbit2 = _interopRequireDefault(_Rabbit);

var _Wolf = __webpack_require__(5);

var _Wolf2 = _interopRequireDefault(_Wolf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    _classCallCheck(this, App);

    var bearElem = document.querySelector('.js-bear-elem'),
        rabbitElem = document.querySelector('.js-rabbit-elem'),
        wolfElem = document.querySelector('.js-wolf-elem'),
        bear = void 0,
        rabbit = void 0,
        wolf = void 0;

    // bear = new Bear(bearElem);
    // setTimeout(() => {
    //     bear.play();
    // }, 2000);
    // setTimeout(() => {
    //     bear.play();
    // }, 5000);
    // setTimeout(() => {
    //     bear.play();
    // }, 7000);

    // rabbit = new Rabbit(rabbitElem);
    // setTimeout(() => {
    //     rabbit.play();
    // }, 2000);
    // setTimeout(() => {
    //     rabbit.stop();
    // }, 5000);
    // setTimeout(() => {
    //     rabbit.play();
    // }, 7000);
    // setTimeout(() => {
    //     rabbit.stop();
    // }, 10000);
    // setTimeout(() => {
    //     rabbit.play();
    // }, 13000);
    // setTimeout(() => {
    //     rabbit.stop();
    // }, 18000);

    // wolf = new Wolf(wolfElem);
};

exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Animal2 = __webpack_require__(0);

var _Animal3 = _interopRequireDefault(_Animal2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bear = function (_Animal) {
    _inherits(Bear, _Animal);

    function Bear(htmlElement) {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, htmlElement, _constants.BearSoundPath, false));
    }

    return Bear;
}(_Animal3.default);

exports.default = Bear;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Animal2 = __webpack_require__(0);

var _Animal3 = _interopRequireDefault(_Animal2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rabbit = function (_Animal) {
    _inherits(Rabbit, _Animal);

    function Rabbit(htmlElement) {
        _classCallCheck(this, Rabbit);

        return _possibleConstructorReturn(this, (Rabbit.__proto__ || Object.getPrototypeOf(Rabbit)).call(this, htmlElement, _constants.RabbitSoundPath, true));
    }

    return Rabbit;
}(_Animal3.default);

exports.default = Rabbit;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Animal2 = __webpack_require__(0);

var _Animal3 = _interopRequireDefault(_Animal2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wolf = function (_Animal) {
    _inherits(Wolf, _Animal);

    function Wolf(htmlElement) {
        _classCallCheck(this, Wolf);

        return _possibleConstructorReturn(this, (Wolf.__proto__ || Object.getPrototypeOf(Wolf)).call(this, htmlElement, _constants.WolfSoundPath, false));
    }

    return Wolf;
}(_Animal3.default);

exports.default = Wolf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SoundCreator = function () {
    function SoundCreator(loop, soundUrl) {
        _classCallCheck(this, SoundCreator);

        this.loop = loop;
        this.isInit = false;
        this.audioContext = new AudioContext();
        this.source = this.audioContext.createBufferSource();
        this.source.connect(this.audioContext.destination);
        this.oldBuffer = null;
        this.newSource = null;

        this.getAudio(soundUrl, this.initAudio.bind(this));
    }

    _createClass(SoundCreator, [{
        key: 'getAudio',
        value: function getAudio(src, callback) {
            var request = void 0;

            request = new XMLHttpRequest();
            request.open('GET', src, true);
            request.responseType = 'arraybuffer';

            request.onload = function () {
                callback(request.response);
            };

            request.send();
        }
    }, {
        key: 'initAudio',
        value: function initAudio(audio) {
            var _this = this;

            this.audioContext.decodeAudioData(audio, function (audio) {
                _this.source.buffer = audio;
                _this.source.loop = _this.loop;
                _this.isInit = true;
            });
        }
    }, {
        key: 'reInitAudio',
        value: function reInitAudio(isLoop) {
            this.oldBuffer = this.source.buffer;
            this.newSource = this.audioContext.createBufferSource();
            this.newSource.connect(this.audioContext.destination);
            this.newSource.buffer = this.oldBuffer;
            if (isLoop) {
                this.source.stop(0);
            }
            this.source = this.newSource;
            this.source.loop = this.loop;
        }
    }, {
        key: 'play',
        value: function play() {
            console.log('play');
            if (this.isInit) {
                this.source.start(0);
                if (!this.loop) {
                    this.reInitAudio(false);
                }
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            console.log('stop');

            if (this.isInit) {
                if (this.loop) {
                    this.reInitAudio(true);
                } else {
                    this.source.stop(0);
                }
            }
        }
    }]);

    return SoundCreator;
}();

exports.default = SoundCreator;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = void 0;

app = new _App2.default();

/***/ })
/******/ ]);