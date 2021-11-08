import React from 'react'
import './App.scss';
import { Router, Route, Switch } from 'react-router-dom';

import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';

import Navbar from './Navbar'

import Footer from './Footer';
import history from '../history';
import MobileMenu from './MobileMenu';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <MobileMenu />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/content' component={ContentPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
