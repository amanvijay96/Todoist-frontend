import React, { Component } from 'react';
import { Tag, Menu } from 'antd';

class Label extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Tag style={{ marginRight: '0px' }} color="magenta">
          @morning
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="purple">
          @evening
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="volcano">
          @night
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="gold">
          @15min
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="lime">
          @1hour
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="green">
          @5hours
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="cyan">
          @work
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="blue">
          @home
        </Tag>
        <Tag style={{ marginRight: '0px' }} color="red">
          @meeting
        </Tag>
      </div>
      /*<div>
       <Menu>
        <Menu.Item key='0'>
          <Tag color="magenta">@morning</Tag>
        </Menu.Item>
        <Menu.Item key='1'>
          <Tag color="red">@night</Tag>
        </Menu.Item>
        <Menu.Item key='2'>
          <Tag color="volcano">@evening</Tag>
        </Menu.Item>
        <Menu.Item key='3'>
          <Tag color="gold">@15min</Tag>
        </Menu.Item>
        <Menu.Item key='4'>
          <Tag color="lime">@1hour</Tag>
        </Menu.Item>
        <Menu.Item key='5'>
          <Tag color="green">@5hours</Tag>
        </Menu.Item>
        <Menu.Item key='6'>
          <Tag color="cyan">@work</Tag>
        </Menu.Item>
        <Menu.Item key='7'>
          <Tag color="blue">@home</Tag>
        </Menu.Item>
        <Menu.Item key='8'>
          <Tag color="purple">@meeting</Tag>
        </Menu.Item>
      </Menu>
      </div> */
    );
  }
}

export default Label;
