import React from 'react';
import { Menu, Icon } from 'antd';

class PriorityMenu extends React.Component {
  state = {};
  render() {
    return (
      <Menu bodyStyle="100px">
        <Menu.Item
          style={{ marginBottom: '0px' }}
          onClick={() => this.props.handlePriority('1')}
          key="0"
        >
          <div className="priority-flag">
            <Icon
              type="flag"
              theme="filled"
              style={{ color: 'red', fontWeight: 'bold' }}
            />
            <span>Priority1</span>
          </div>
        </Menu.Item>
        <Menu.Item
          style={{ marginBottom: '0px' }}
          onClick={() => this.props.handlePriority('2')}
          key="1"
        >
          <div className="priority-flag">
            <Icon
              type="flag"
              theme="filled"
              style={{ color: 'yellow', fontWeight: 'bold' }}
            />
            <span>Priority2</span>
          </div>
        </Menu.Item>
        <Menu.Item
          style={{ marginBottom: '0px' }}
          onClick={() => this.props.handlePriority('3')}
          key="2"
        >
          <div className="priority-flag">
            <Icon
              type="flag"
              theme="filled"
              style={{ color: 'blue', fontWeight: 'bold' }}
            />
            <span>Priority3</span>
          </div>
        </Menu.Item>
        <Menu.Item
          style={{ marginBottom: '0px' }}
          onClick={() => this.props.handlePriority('4')}
          key="3"
        >
          <div className="priority-flag">
            <Icon
              type="flag"
              theme="filled"
              style={{ color: 'green', fontWeight: 'bold' }}
            />
            <span>Priority4</span>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default PriorityMenu;
