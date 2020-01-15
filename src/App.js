import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './store';

function App() {
  return (
    // <Router>
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
    // </Router>
  );
}

export default App;
