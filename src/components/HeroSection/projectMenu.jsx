import React from 'react';
import { Menu, Icon } from 'antd';
export const projectMenu = (
  <Menu>
    <Menu.Item key='0'>
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
          <p>Share project</p>
        </div>
      }
    </Menu.Item>
    <Menu.Item key='3'>
      <div className='projectOption'>
        <Icon type='delete' />
        <p>Delete project</p>
      </div>
    </Menu.Item>
    {/* <Menu.Item key='4'>Logout</Menu.Item> */}
  </Menu>
);
