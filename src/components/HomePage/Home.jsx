import React, { Component } from 'react';
import './Home.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    loginVisible: false,
    signupVisible: false
  };
  handleLoginClick = () => {
    this.setState({
      loginVisible: true
    });
  };
  handleSignupClick = () => {
    this.setState({
      signupVisible: true
    });
  };
  handleCancel = () => {
    this.setState({
      loginVisible: false,
      signupVisible: false
    });
  };

  render() {
    return (
      <div>
        <div className="header-homepage">
          <div className="logo-and-app">
            <img src={require('../../headerlogo.svg')} alt="Todoist" />
            <span className="app-name">
              <b>todoist</b>
            </span>
          </div>
          <div className="home-login-links">
            <nav>
              <ul className="home-links">
                <li className="login" onClick={this.handleLoginClick}>
                  Login
                </li>
                <li className="signup" onClick={this.handleSignupClick}>
                  Signup
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <section className="section-content">
          <div className="section-text">
            <h1>
              Organize it all
              <br />
              with Todoist
            </h1>
          </div>
          <Link to="/getStarted">
            <button className="get-started">Get Started</button>
          </Link>
        </section>
        <LoginModal
          visible={this.state.loginVisible}
          onCancel={this.handleCancel}
        />
        <SignupModal
          visible={this.state.signupVisible}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default Home;
