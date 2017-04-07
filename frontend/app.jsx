import React from 'react';
import { render } from 'react-dom';
import {Link, Route, BrowserRouter as R} from 'react-router-dom';

import Layout from './Layout';

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

render(
    <Layout />, document.getElementById('container'));
