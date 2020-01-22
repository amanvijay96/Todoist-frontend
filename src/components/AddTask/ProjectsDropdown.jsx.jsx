import React, { Component } from 'react';
import { Menu } from 'antd';

class SelectProject extends Component {
  state = {};
  render() {
    console.log();
    let allProjects = this.props.projects.map(project => {
      return <Menu.Item key={project.id}>{project.name}</Menu.Item>;
    });

    return <Menu>{allProjects} </Menu>;
  }
}

export default SelectProject;
