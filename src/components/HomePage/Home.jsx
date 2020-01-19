import React, { Component } from 'react';
import './Home.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

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
  onCancel = () => {
    console.log('xcvbn')
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
            <img src={require('../../logo.svg')} alt="Todoist" />
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
          <button className="get-started">Get Started</button>
        </section>
        <LoginModal
          visible={this.state.loginVisible}
          handleCancel={this.onCancel}
        />
        <SignupModal
          visible={this.state.signupVisible}
          handleCancel={this.onCancel}
        />
      </div>
    );
  }
}

export default Home;
