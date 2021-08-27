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
import Albumartist from './components/Albunsartist/Albumartist';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/list-artist/:artist" component={Listartist}/>
          <Route path="/albuns-artist" exact><Albumartist/></Route>
        </Switch>        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
