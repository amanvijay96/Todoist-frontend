import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <Header />
          <Route path='/' exact component={HeroSection} />
          <Route path='/inbox' exact component={HeroSection} />
          <Route path='/all7days' exact component={HeroSection} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
