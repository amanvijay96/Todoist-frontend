import React, { Component } from 'react';
import Modals from '../Modal/Modal';
import { Icon, Dropdown } from 'antd';
import './Header.css';
import { modalOpen, modalClose } from '../../actions/modalAction';
import { connect } from 'react-redux';
import { settingsMenu } from './SettingsMenu';

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <div>
              <img
                src={require('../../logo.svg')}
                className="logo"
                alt="Todoist"
              />
            </div>
            <div className="search-bar">
              <Icon type="search" className="search-icon" />
              <input
                type="text"
                placeholder="Quick Find"
                className="input"
                id="input"
              ></input>
            </div>
            <div className="icons">
              <ul>
                <li className="btn1" onClick={() => this.props.modalOpen()}>
                  <Icon type="plus" />
                </li>
                <li className="btn2">
                  <Icon type="bell" />
                </li>
                <li className="btn3">
                  <Dropdown overlay={settingsMenu} trigger={['click']}>
                    <Icon type="setting" />
                  </Dropdown>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Modals handleCancel={this.props.modalClose} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { visible: state.modalReducer.visible };
};
const mapDispatchToProps = dispatch => {
  return {
    modalOpen: () => dispatch(modalOpen()),
    modalClose: () => dispatch(modalClose())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
