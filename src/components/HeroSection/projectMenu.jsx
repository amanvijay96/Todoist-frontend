import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class ProjectMenu extends Component {
  state = {};
  handleShowModal = () => {
    this.props.onShowModal(true);
  };
  render() {
<<<<<<< HEAD
    // this.props.event.stopPropagation();
    console.log(this.props, 'xxxxxxxxxxxxx');
=======
    // console.log(this.props, 'xxxxxxxxxxxxx');
>>>>>>> 4e884e57210a40eb031032516cb310613e93c9f8
    return (
      <Menu>
        {/* {console.log(props, 'lllllll')} */}
        <Menu.Item key='0' onClick={this.handleShowModal}>
          {
            <div className='projectOption'>
              <Icon type='edit' />
<<<<<<< HEAD
              <p>Edit {this.props.entity}</p>
=======
              <p className="menu-para">Edit project</p>
>>>>>>> 4e884e57210a40eb031032516cb310613e93c9f8
            </div>
          }
        </Menu.Item>
        <Menu.Item key='1'>
          {
            <div className='projectOption'>
              <Icon type='user-add' />
<<<<<<< HEAD
              <p>Share {this.props.entity}</p>
=======
              <p className="menu-para">Share project</p>
>>>>>>> 4e884e57210a40eb031032516cb310613e93c9f8
            </div>
          }
        </Menu.Item>
        <Menu.Item key='3' onClick={this.props.onDeleteProject}>
          <div className='projectOption'>
            <Icon type='delete' />
<<<<<<< HEAD
            <p>Delete {this.props.entity}</p>
=======
            <p className="menu-para">Delete project</p>
>>>>>>> 4e884e57210a40eb031032516cb310613e93c9f8
          </div>
        </Menu.Item>
        {/* <Menu.Item key='4'>Logout</Menu.Item> */}
      </Menu>
    );
  }
}

export default ProjectMenu;

