import React from 'react';
import './App.css';
import './components/DaysCircle/DaysCircle.css';
import './components/Gallery/Gallery.css';
import DaysCircle from './components/DaysCircle/DaysCircle.js';
import MyGallery from './components/Gallery/Gallery.js';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <div>
      <CssBaseline />
      <div className="App">
        <DaysCircle/>
        <div className="gallParent">
          <MyGallery className="gallButt"/>
        </div>
      </div>
    </div>
  )
}

export default App;
