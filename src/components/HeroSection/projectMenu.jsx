import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class ProjectMenu extends Component {
  state = {};
  handleShowModal = () => {
    this.props.onShowModal(true);
  };
  render() {
    // this.props.event.stopPropagation();
    // console.log(this.props, 'xxxxxxxxxxxxx');
    return (
      <Menu>
        {/* {console.log(props, 'lllllll')} */}
        <Menu.Item key='0' onClick={this.handleShowModal}>
          {
            <div className='projectOption'>
              <Icon type='edit' />
              <p>Edit {this.props.entity}</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key='1'>
          {
            <div className='projectOption'>
              <Icon type='user-add' />
              <p>Share {this.props.entity}</p>
            </div>
          }
        </Menu.Item>
        <Menu.Item key='3' onClick={this.props.onDeleteProject}>
          <div className='projectOption'>
            <Icon type='delete' />
            <p>Delete {this.props.entity}</p>
          </div>
        </Menu.Item>
        {/* <Menu.Item key='4'>Logout</Menu.Item> */}
      </Menu>
    );
  }
}

export default ProjectMenu;
