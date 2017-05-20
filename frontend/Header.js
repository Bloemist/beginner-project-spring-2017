'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Header = class Header extends _react.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {

    const headerStyle = {
      margin: '0px 0px 0px 0px',
      height: '100px',
      backgroundColor: 'yellow',
      float: 'top',
      textAlign: 'left',
      fontSize: '76px',
      verticalAlign: 'middle'
    };
    const buttonStyle = {
      margin: '25px 25px 0px 0px',
      height: '50%',
      width: '15%',
      backgroundColor: 'blue',
      float: 'right',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '50px',
      fontSize: '34px'
    };
    return (
      //TODO real button element should go instead of styled div
      //TODO log-in and log-out on same button 
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: headerStyle },
          'Hello!',
          _react2.default.createElement(
            'div',
            { style: buttonStyle, id: 'log-in' },
            'Login'
          ),
          _react2.default.createElement(
            'div',
            { style: buttonStyle, id: 'log-out' },
            'Logout'
          )
        )
      )
    );
  }
};
exports.default = Header;