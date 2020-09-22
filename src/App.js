import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/Resume/Resume';
import AboutMe from './components/AboutMe/AboutMe';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
