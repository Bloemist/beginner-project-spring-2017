import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header'
import Guitar from './Guitar'
import Drum from './Drum'
import Piano from './Piano'
import Tune from './Tune'
import MusicBox from './MusicBox'

export default class Layout extends Component{
  constructor(){
    super();
    this.state = {
      music_one: 'some notes',
      music_two: 'note 2',
      music_tree: 'note 3',
      music_four: 'note 4',
      music_five: 'note 5',
      m_index: 0,
      recording: false,
      nav_style:'nav_style_initial',
      nav_item_style: 'nav_item_style_initial'
    };
    this.handleNote = this.handleNote.bind(this);
    this.switchRecording = this.switchRecording.bind(this);
    this.clearRecord = this.clearRecord.bind(this);
    this.switchNavBar = this.switchNavBar.bind(this);
  }
  componentDidMount() {
  }

  switchRecording(){
    if(this.state.recording){ 
      this.setState({
        recording: false
      });
      let current_index = this.state.m_index + 1;
      if(current_index > 4)
        current_index = 0;
      this.setState({
          m_index: current_index
      });

    }else {
      this.setState({
        recording: true,
      });
      this.clearRecord(this.state.m_index);
      console.log(`Recording in music box num: ${this.state.m_index + 1}`);
 
    }
   
  };

  clearRecord(index){
    switch(index){
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
  };

  handleNote(e) {
    if(this.state.recording){
      console.log(`index: ${this.state.m_index}`);
      switch(parseInt(this.state.m_index)){
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
  };

  switchNavBar(){
    if(this.state.nav_style == 'nav_style_hidden' || this.state.nav_style == 'nav_style_initial'){
      this.setState({
        nav_style: 'nav_style_opened',
        nav_item_style: 'nav_item_style'
      });
    } else{
      this.setState({
        nav_style: 'nav_style_hidden',
        nav_item_style: 'nav_item_style_initial'
      }); 
    }
  };

  render(){
    const TuneWithPiano = () => ( 
      <div>
        <Tune />
        <Piano hn = { this.handleNote } />
      </div>
    );

    const menu_icon_style = {
      position: 'fixed',
      top: '5px',
      left: '5px' 
    };

    return(
      <div>
        <Header />
        <Router>
          <div className={this.state.nav_style}>
            <img style={menu_icon_style} src="/public/menu_icon.png" onClick={this.switchNavBar} />
            <Route exact path={'/'} component={TuneWithPiano} />
            <Route path={'/drum'} component={Drum} />
            <Route path={'/guitar'} component={Guitar} />
            <Link to={'/'} className={this.state.nav_item_style}>Home</Link>
            <Link to={'/drum'} className={this.state.nav_item_style}>Drum</Link>
            <Link to={'/guitar'} className={this.state.nav_item_style}>Guitar</Link>
          </div>
        </Router> 
        <MusicBox p_data = { this.state } sr = { this.switchRecording }/>
      </div>
    );
  }
}
