import React, { Component } from 'react';
import { Menu } from 'antd';

class SelectProject extends Component {
  state = {};
  render() {
    console.log(this.props);
    let allProjects = this.props.projects.map(project => {
      return (
        <Menu.Item
          style={{ marginBottom: '0px' }}
          key={project.id}
          projectid={project.id}
        >
          {project.name}
        </Menu.Item>
      );
    });

    return (
      <Menu style={{ width: '12vw', maxHeight: '12vw', overflow: 'scroll' }}>
        {allProjects}{' '}
      </Menu>
    );
  }
}

export default SelectProject;
