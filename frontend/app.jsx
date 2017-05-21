import React from 'react';
import { render } from 'react-dom';
import {Link, Route, BrowserRouter as R} from 'react-router-dom';
import {observer} from 'mobx-react';
import {observable, computed} from 'mobx';

import Layout from './Layout';

@observer
class Box extends React.Component{
  @observable price = 10;
  @observable sold = 2;

  componentDidMount() {
    const z = () => {
      setTimeout(() => {
        this.price++;
        z();
      }, 2000);};
      z();
    } 
  render() {
    return(<div>{this.price * this.sold}</div>);
  } 
};

const People = () =>( 
  <ul>
   <li>First</li>
   <li>Second</li>
   <li>Third</li> 
  </ul>
);

const Favs = () => (
  <div>
   Some favourite list 
  </div>
);

const HomePage = () => ( 
  <div>
    This is the home page
  </div>
);

const App = () => {
  return (
    <R>
      <div>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/Peeps'} component={People}/>
        <Route path={'/favs/mainFavs'} component={Favs}/>
        <p><Link to={'/Peeps'}>to our peeps</Link></p>
        <p><Link to={'/favs/mainFavs'}>Go to favs</Link></p>
      </div> 
    </R>
  );
};

/*export default
class Application extends React.Component {
   render() {
     return(
    <Layout />, document.getElementById('container'));
   } 
}*/
render(
   (<R><Layout /></R>), document.getElementById('container'));
