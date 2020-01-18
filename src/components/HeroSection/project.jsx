import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import './project.css';
import ProjectMenu from './projectMenu';
import { Link } from 'react-router-dom';

class Project extends Component {
  state = {};
  render() {
    return (
      <div onClick={this.props.changeName} className='projectDiv'>
        <Link to={`/project/${this.props.Projects.id}`}>
          <button className='oneProject'>{this.props.Projects.name}</button>
        </Link>
        <Dropdown
          //   id={this.props.projects.id}
          overlay={() => (
            <ProjectMenu
              onDeleteProject={() =>
                this.props.deleteProject(this.props.Projects.id)
              }
              onShowModal={() => this.props.showModal(true)}></ProjectMenu>
          )}
          trigger={['click']}>
          <Icon type='ellipsis' className='projectEditButton' />
        </Dropdown>
        {/* <Icon className='projectEditButton' type='ellipsis' /> */}
        {/* <button className='projectEditButton'>...</button> */}
      </div>
    );
  }
}
// mapStateToProps = state => {
//   return {
//     projects: state.projectModalReducer.projects
//   };
// };

export default Project;
