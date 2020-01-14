import React, { Component } from 'react';

import { Icon } from 'antd';
import './Header.css';

// const tokenKey = '522dc7a2725e66e850507d3feff85af8d62a8e14';
// const tokenId = '';

class Header extends Component {
  state = {};
  handleModal = () => {};

  render() {
    return (
      <header className="header">
        <nav>
          <div>
            <img
              src={require('../../logo.svg')}
              className="logo"
              alt="Todoist"
            />
          </div>
          <div className="quick-find search">
            <Icon type="search" />
            <input
              type="text"
              placeholder="Quick Find"
              className="quick-find-input"
            />
          </div>
          <div className="header-icons">
            <ul>
              <li>
                <Icon type="plus" />
              </li>
              <li>
                <Icon type="bell" />
              </li>
              <li>
                <Icon type="setting" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
