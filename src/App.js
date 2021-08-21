import React from 'react';
import {
  BrowserRouter as Router,
  Route,  
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Listartist from './components/Listartist/Listartist';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/List-artist" exact><Listartist/></Route>
        </Switch>        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
