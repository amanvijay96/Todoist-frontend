import React from 'react';
// import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HeroSection from './components/HeroSection/HeroSection';
import Home from './components/HomePage/Home';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './global';

// import ContentContainer from './components/HeroSection/ContentContainer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" exact component={Home} />
        {/* <ThemeProvider theme={lightTheme}></ThemeProvider> */}
        {/* <GlobalStyles /> */}
        <Header />
        <Route path="/getStarted" exact component={HeroSection} />
        <Route path="/inbox" exact component={HeroSection} />
        <Route path="/all7days" exact component={HeroSection} />
        <Route path="/project/:id" exact component={HeroSection} />
        <Route path="/Priority1" exact component={HeroSection} />
        <Route path="/Priority2" exact component={HeroSection} />
        <Route path="/Priority3" exact component={HeroSection} />
        <Route path="/Priority4" exact component={HeroSection} />
      </Provider>
    </Router>
  );
}

export default App;
