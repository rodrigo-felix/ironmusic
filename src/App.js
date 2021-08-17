import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Listartist from './components/Listartist/Listartist';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/List-artist" exact><Listartist/></Route>
        </switch>        
      </main>
    </Router>
  );
}

export default App;
