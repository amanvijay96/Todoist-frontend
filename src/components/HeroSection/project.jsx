import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import './project.css';
import ProjectMenu from './projectMenu';
// import { connect } from 'react-redux';
// import { deletProject } from '../../actions/projectModalAction';

// const mapStateToProps = state => {
//   return {
//     project: state.projects.filter(
//       project => project.id === this.props.project.id
//     )[0]
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteProject: id => deleteProject(id)
//   };
// };

// projectMenu = connect(mapStateToProps, mapDispatchToProps)(projectMenu);

class Project extends Component {
  state = {};
  render() {
    // console.log(this.props.showModal, 'zzzzzzzzzzz');
    return (
      <div className='projectDiv'>
        <button className='oneProject'>{this.props.Projects.name}</button>
        <Dropdown
          //   id={this.props.projects.id}
          overlay={() => (
            <ProjectMenu
              onDeleteProject={() =>
                this.props.deleteProject(this.props.Projects.id)
              }
              onShowModal={this.props.showModal}></ProjectMenu>
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
