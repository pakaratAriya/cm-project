import React from 'react';
import {Switch, Route} from 'react-router-dom'
import classes from './App.module.css';
import Home from './containers/Home/Home'
import About from './components/AboutUsPage/About'
import Contact from './components/ContactPage/Contact'

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
