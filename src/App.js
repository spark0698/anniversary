import React from 'react';
import './App.css';
import './components/DaysCircle/DaysCircle.css';
import DaysCircle from './components/DaysCircle/DaysCircle.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <DaysCircle />
    </div>
  )
}

export default App;
