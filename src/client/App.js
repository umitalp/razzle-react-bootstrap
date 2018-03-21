import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Containers
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Developer from './containers/developer/Developer';
import Navigation from './components/navigation/Navigation';

const App = () => (
  <div>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/developer" component={Developer} />
    </Switch>
  </div>
);

export default App;
