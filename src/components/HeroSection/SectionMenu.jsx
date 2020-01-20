import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class SectionMenu extends Component {
  state = {};
  // handleShowModal = () => {
  //   this.props.onShowModal(true);
  // };
  render() {
    return (
      <Menu>
        <Menu.Item key="0">
          {
            <div className="section-menu">
              <Icon type="plus-square" />
              <p>Add Section</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key="1">
          {
            <div className="section-menu">
              <Icon type="arrow-down" />
              <p>Sort by date</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key="3">
          <div className="section-menu">
            <Icon type="flag" />
            <p>Sort by priority</p>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <div className="section-menu">
            <Icon type="check-circle" />
            <p>Show completed task</p>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SectionMenu;
