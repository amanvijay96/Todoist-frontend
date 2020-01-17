import React from 'react';
import { Menu } from 'antd';
import '@fortawesome/fontawesome-free';

export const menu = (
  <Menu>
    <Menu.Item key="0">
      <i className="fas fa-flag"></i>Priority 1
    </Menu.Item>
    <Menu.Item key="1">
      <i className="fas fa-flag"></i>Priority 2
    </Menu.Item>
    <Menu.Item key="3">
      <i className="fas fa-flag"></i>Priority 3
    </Menu.Item>
    <Menu.Item key="4">
      <i className="fas fa-flag"></i>Priority 4
    </Menu.Item>
  </Menu>
);
