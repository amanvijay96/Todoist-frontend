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
              <Icon type="plus" />
              <p>Add task</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key="1">
          {
            <div className="section-menu">
              <Icon type="edit" />
              <p>Edit section</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key="3">
          <div className="section-menu">
            <Icon type="close-circle" />
            <p>Archive section</p>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <div className="section-menu">
            <Icon type="check-circle" />
            <p>Delete section</p>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SectionMenu;
