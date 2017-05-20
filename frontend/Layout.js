'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Guitar = require('./Guitar');

var _Guitar2 = _interopRequireDefault(_Guitar);

var _Drum = require('./Drum');

var _Drum2 = _interopRequireDefault(_Drum);

var _Piano = require('./Piano');

var _Piano2 = _interopRequireDefault(_Piano);

var _Tune = require('./Tune');

var _Tune2 = _interopRequireDefault(_Tune);

var _MusicBox = require('./MusicBox');

var _MusicBox2 = _interopRequireDefault(_MusicBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      music_one: 'some notes',
      music_two: 'note 2',
      music_tree: 'note 3',
      music_four: 'note 4',
      music_five: 'note 5',
      m_index: 0,
      recording: false,
      nav_style: 'nav_style_initial',
      nav_item_style: 'nav_item_style_initial'
    };
    this.handleNote = this.handleNote.bind(this);
    this.switchRecording = this.switchRecording.bind(this);
    this.clearRecord = this.clearRecord.bind(this);
    this.switchNavBar = this.switchNavBar.bind(this);
    const rest = _objectWithoutProperties(props, []);
  }
  componentDidMount() {}

  switchRecording() {
    if (this.state.recording) {
      this.setState({
        recording: false
      });
      let current_index = this.state.m_index + 1;
      if (current_index > 4) current_index = 0;
      this.setState({
        m_index: current_index
      });
    } else {
      this.setState({
        recording: true
      });
      this.clearRecord(this.state.m_index);
      console.log(`Recording in music box num: ${this.state.m_index + 1}`);
    }
  }

  clearRecord(index) {
    switch (index) {
      case 0:
        this.setState({ music_one: '' });
        break;
      case 1:
        this.setState({ music_two: '' });
        break;
      case 2:
        this.setState({ music_tree: '' });
        break;
      case 3:
        this.setState({ music_four: '' });
        break;
      case 4:
        this.setState({ music_five: '' });
        break;
      default:
        break;
    }
  }

  handleNote(e) {
    if (this.state.recording) {
      console.log(`index: ${this.state.m_index}`);
      switch (parseInt(this.state.m_index)) {
        case 0:
          this.setState((prevState, props) => ({
            music_one: prevState.music_one + e.key + ' '
          }));
          console.log('added notes: ' + this.state.music_one);
          break;
        case 1:
          this.setState((prevState, props) => ({
            music_two: prevState.music_two + e.key + ' '
          }));
          break;
        case 2:
          this.setState((prevState, props) => ({
            music_tree: prevState.music_tree + e.key + ' '
          }));
          break;
        case 3:
          this.setState((prevState, props) => ({
            music_four: prevState.music_four + e.key + ' '
          }));
          break;
        case 4:
          this.setState((prevState, props) => ({
            music_five: prevState.music_five + e.key + ' '
          }));
          break;
        default:
          break;
      }
    }
    console.log(`handling note... ${e.key}`);
  }

  switchNavBar() {
    if (this.state.nav_style == 'nav_style_hidden' || this.state.nav_style == 'nav_style_initial') {
      this.setState({
        nav_style: 'nav_style_opened',
        nav_item_style: 'nav_item_style'
      });
    } else {
      this.setState({
        nav_style: 'nav_style_hidden',
        nav_item_style: 'nav_item_style_initial'
      });
    }
  }

  render() {
    const TuneWithPiano = () => _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Tune2.default, null),
      _react2.default.createElement(_Piano2.default, { hn: this.handleNote })
    );

    const menu_icon_style = {
      position: 'fixed',
      top: '5px',
      left: '5px'
    };

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'div',
        { className: this.state.nav_style },
        _react2.default.createElement('img', { style: menu_icon_style, src: '../public/menu_icon.png', onClick: this.switchNavBar }),
        _react2.default.createElement(
          _reactRouter.Switch,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: TuneWithPiano }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/drum', component: _Drum2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/guitar', component: _Guitar2.default }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: this.state.nav_item_style },
              'Home'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/drum', className: this.state.nav_item_style },
              'Drum'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/guitar', className: this.state.nav_item_style },
              'Guitar'
            )
          )
        )
      ),
      _react2.default.createElement(_MusicBox2.default, { p_data: this.state, sr: this.switchRecording })
    );
  }
};
exports.default = Layout;