import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import TechnologyPage from './pages/TechnologyPage';
import history from '../history';

import './App.scss';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/destination' component={DestinationPage} />
          <Route path='/crew' exact component={CrewPage} />
          <Route path='/technology' exact component={TechnologyPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
