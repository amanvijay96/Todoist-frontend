import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class ProjectMenu extends Component {
  state = {};
  handleShowModal = () => {
    this.props.onShowModal(true);
  };
  render() {
    return (
      <Menu>
        <Menu.Item key='0' onClick={this.handleShowModal}>
          {
            <div className='projectOption'>
              <Icon type='edit' />
              <p>Edit project</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key='1'>
          {
            <div className='projectOption'>
              <Icon type='user-add' />
              <p className='menu-para'>Share project</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key='3' onClick={this.props.onDeleteProject}>
          <div className='projectOption'>
            <Icon type='delete' />
            <p className='menu-para'>Delete project</p>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default ProjectMenu;
