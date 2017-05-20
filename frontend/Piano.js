'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _desc, _value, _class, _dec2, _desc2, _value2, _class2, _dec3, _class3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactKeydown = require('react-keydown');

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

var _fireScripts = require('./lib/fire-scripts');

var _fireScripts2 = _interopRequireDefault(_fireScripts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

const KEYS = ['2', '3', '5', '6', '7', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

/***********************BLACK**************************/
let BlackKey = (_dec = (0, _reactKeydown.keydownScoped)(KEYS), (_class = class BlackKey extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
      b_g_color: 'black'
    };
  }

  k_d_handler(e) {
    if (this.props.idc == e.key) {
      switch (e.key) {
        case "2":
          tones.play('c#', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "3":
          tones.play('d#', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "5":
          tones.play('f#', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "6":
          tones.play('g#', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "7":
          tones.play('a#', 5);pianoRock.pushNote(e);this.props.hn(e);break;

        case "9":
          tones.play('c#', 6);pianoRock.pushNote(e);this.props.hn(e);break;
        case "0":
          tones.play('d#', 6);pianoRock.pushNote(e);this.props.hn(e);break;

        default:
      }
      this.setState({
        b_g_color: 'orange'
      });
      setTimeout(() => {
        this.setState({
          b_g_color: 'black'
        });
      }, 200);
    }
  }

  render() {
    let marginLeft = this.props.marginLeft;

    const div_style = {
      marginLeft: marginLeft,
      marginRight: '10px',
      width: '30px',
      height: '50%',
      backgroundColor: this.state.b_g_color,
      position: 'absolute'
    };
    return _react2.default.createElement('div', { style: div_style });
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'k_d_handler', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'k_d_handler'), _class.prototype)), _class));

/***********************WHITE**************************/

let WhiteKey = (_dec2 = (0, _reactKeydown.keydownScoped)(KEYS), (_class2 = class WhiteKey extends _react2.default.Component {
  constructor() {
    super();
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
      b_g_color: 'white'
    };
  }

  k_d_handler(e) {
    if (this.props.idc == e.key) {
      switch (e.key) {
        case "q":
          tones.play('c', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "w":
          tones.play('d', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "e":
          tones.play('e', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "r":
          tones.play('f', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "t":
          tones.play('g', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "y":
          tones.play('a', 5);pianoRock.pushNote(e);this.props.hn(e);break;
        case "u":
          tones.play('b', 5);pianoRock.pushNote(e);this.props.hn(e);break;

        case "i":
          tones.play('c', 6);pianoRock.pushNote(e);this.props.hn(e);break;
        case "o":
          tones.play('d', 6);pianoRock.pushNote(e);this.props.hn(e);break;
        case "p":
          tones.play('e', 6);pianoRock.pushNote(e);this.props.hn(e);break;

        default:
      }

      this.setState({
        b_g_color: 'orange'
      });
      setTimeout(() => {
        this.setState({
          b_g_color: 'white'
        });
      }, 200);
    }
  }

  render() {
    const div_style = {
      width: '45px',
      height: '100%',
      backgroundColor: this.state.b_g_color,
      border: '2px solid black',
      float: 'left',
      position: 'relateve'
    };
    return _react2.default.createElement('div', { style: div_style });
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'k_d_handler', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'k_d_handler'), _class2.prototype)), _class2));

/***********************PIANO**************************/

let Piano = (_dec3 = (0, _reactKeydown2.default)(KEYS), _dec3(_class3 = class Piano extends _react2.default.Component {

  render() {

    const bottom_style = {
      position: 'absolute',
      left: '40%',
      bottom: '50px'
    };
    const nots_style = {
      justifyContent: 'center',
      position: 'relative',
      left: '-30%',
      height: '180px'
    };

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: bottom_style },
        _react2.default.createElement(
          'div',
          { style: nots_style },
          _react2.default.createElement(WhiteKey, _extends({ idc: 'q' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '30px', idc: '2' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'w' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '75px', idc: '3' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'e' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'r' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '165px', idc: '5' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 't' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '210px', idc: '6' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'y' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '255px', idc: '7' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'u' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'i' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '345px', idc: '9' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'o' }, this.props)),
          _react2.default.createElement(BlackKey, _extends({ marginLeft: '390px', idc: '0' }, this.props)),
          _react2.default.createElement(WhiteKey, _extends({ idc: 'p' }, this.props))
        )
      )
    );
  }
}) || _class3);
exports.default = Piano;