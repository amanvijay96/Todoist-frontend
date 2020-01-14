import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {};
  componentDidMount() {
    fetch('https://todoist3.herokuapp.com/hello', { method: 'GET' })
      .then(res => res.json())
      .then(out => {
        console.log(out);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="top_bar">
        <div id="top_bar_inner">
          <div id="logo"></div>
          <div id="editor">
            <div>
              <input
                className="quick-find"
                type="text"
                placeholder="Quick Find"
              ></input>
            </div>
            <div id="top_icons"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
