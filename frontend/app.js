'use strict';

var _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _mobxReact = require('mobx-react');

var _mobx = require('mobx');

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

let Box = (0, _mobxReact.observer)(_class = (_class2 = class Box extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _initDefineProp(this, 'price', _descriptor, this), _initDefineProp(this, 'sold', _descriptor2, this), _temp;
  }

  componentDidMount() {
    const z = () => {
      setTimeout(() => {
        this.price++;
        z();
      }, 2000);
    };
    z();
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.price * this.sold
    );
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'price', [_mobx.observable], {
  enumerable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'sold', [_mobx.observable], {
  enumerable: true,
  initializer: function () {
    return 2;
  }
})), _class2)) || _class;

;

const People = () => _react2.default.createElement(
  'ul',
  null,
  _react2.default.createElement(
    'li',
    null,
    'First'
  ),
  _react2.default.createElement(
    'li',
    null,
    'Second'
  ),
  _react2.default.createElement(
    'li',
    null,
    'Third'
  )
);

const Favs = () => _react2.default.createElement(
  'div',
  null,
  'Some favourite list'
);

const HomePage = () => _react2.default.createElement(
  'div',
  null,
  'This is the home page'
);

const App = () => {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: HomePage }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/Peeps', component: People }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/favs/mainFavs', component: Favs }),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/Peeps' },
          'to our peeps'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/favs/mainFavs' },
          'Go to favs'
        )
      )
    )
  );
};

/*export default
class Application extends React.Component {
   render() {
     return(
    <Layout />, document.getElementById('container'));
   } 
}*/
(0, _reactDom.render)(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_Layout2.default, null)
), document.getElementById('container'));