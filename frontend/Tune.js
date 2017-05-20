'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************HalfTone***********************/
let HalfTone = class HalfTone extends _react.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const halfStyle = {
      width: '30px',
      height: '60px',
      backgroundColor: 'white',
      border: '2px solid black',
      position: 'absolute',
      left: this.props.positionLeft
    };

    return _react2.default.createElement('div', { style: halfStyle });
  }
};

/******************FullTone***********************/

let FullTone = class FullTone extends _react.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const fullStyle = {
      width: '45px',
      height: '100px',
      backgroundColor: 'white',
      border: '2px solid black',
      float: 'left',
      position: 'relateve',
      zIndex: '-1'
    };
    return _react2.default.createElement('div', { style: fullStyle });
  }
};

/******************Notes***********************/

let Tune = class Tune extends _react.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {

    const bigTableStyle = {
      position: 'absolute',
      left: '40%',
      bottom: '190px'
    };

    const notesTableStyle = {
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
        { style: bigTableStyle },
        _react2.default.createElement(
          'div',
          { style: notesTableStyle },
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(FullTone, null),
          _react2.default.createElement(HalfTone, { positionLeft: '25px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '75px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '165px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '210px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '255px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '345px' }),
          _react2.default.createElement(HalfTone, { positionLeft: '390px' })
        )
      )
    );
  }
};
exports.default = Tune;