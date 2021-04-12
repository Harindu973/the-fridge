import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';

//pages
import Loading from "./pages/loading/loading";


function App() {
  return (
    <Router>
      <div>
        <div className="wrapper">
        <Route exact path='/' component={Loading} />
        </div>
      </div>
    </Router>
  );
}

export default App;