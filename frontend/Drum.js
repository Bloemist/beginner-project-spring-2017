'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Drum = class Drum extends _react2.default.Component {
  render() {
    const centered = {
      position: 'absolute',
      left: '45%',
      bottom: '50%'
    };
    return _react2.default.createElement(
      'div',
      { style: centered },
      'Drums should go here'
    );
  }
};
exports.default = Drum;