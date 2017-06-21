import { Link, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import List from './list/List';
import Training from './trainings/Training';
import Exercise from './exercises/Exercise';
import TrainingsList from './trainings/TrainingsList';
import ExercisesList from './exercises/ExercisesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <nav>
        <p>
          <Link to="/">Index</Link>
        </p>
        <p>
          <Link to="/trainings">List</Link>
        </p>
        <p>
          <Link to="/exercises">exercises</Link>
        </p>
      </nav>
      <Route path="/list" component={List} />
      <Route path="/exercises" component={ExercisesList} />
      <Route path="/trainings" component={TrainingsList} />
      <Route path="/exercises/:id" component={Exercise} />
      <Route path="/trainings/:id" component={Training} />
    </div>
  );
}


export default App;
