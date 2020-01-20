import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import './project.css';
import ProjectMenu from './projectMenu';
import { Link } from 'react-router-dom';


class Project extends Component {
  state = {};
  render() {
    console.log(this.props.Projects.id, ';;;;;');
    // <ContentContainer projectId={this.props.Projects.id} />;
    return (
      <Link to={`/project/${this.props.Projects.id}`}>
        <div onClick={this.props.changeName} className='projectDiv'>
          <button className='oneProject'>{this.props.Projects.name}</button>

          <Dropdown
            //   id={this.props.projects.id}
            onClick={event => event.stopPropagation()}
            overlay={() => (
              <ProjectMenu
                // event={event}
                // entity='Project'
                onDeleteProject={() =>
                  this.props.deleteProject(this.props.Projects.id)
                }
                onShowModal={() => this.props.showModal(true)}></ProjectMenu>
            )}
            trigger={['click']}
            placement='topLeft'>
            <Icon type='ellipsis' className='projectEditButton' />
          </Dropdown>
          {/* <Icon className='projectEditButton' type='ellipsis' /> */}
          {/* <button className='projectEditButton'>...</button> */}
        </div>
      </Link>
    );
  }
}
// mapStateToProps = state => {
//   return {
//     projects: state.projectModalReducer.projects
//   };
// };

export default Project;
