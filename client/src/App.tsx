import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import MSViewer from './Components/MSViewer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/msviewer' component={MSViewer} />
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;
 