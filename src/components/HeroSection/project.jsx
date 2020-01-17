import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import './project.css';
import { projectMenu } from './projectMenu';

// projectMenu=connect()(projectMenu)
// mapStateToProps=(state)=>{
//     return{
//         project:state.projects.filter(project=>project.id===this.props.project.id)[0]
//     }
// }
class Project extends Component {
  state = {};
  render() {
    return (
      <div className='projectDiv'>
        <button className='oneProject'>{this.props.Projects.name}</button>
        <Dropdown overlay={projectMenu} trigger={['click']}>
          <Icon type='ellipsis' className='projectEditButton' />
        </Dropdown>
        {/* <Icon className='projectEditButton' type='ellipsis' /> */}
        {/* <button className='projectEditButton'>...</button> */}
      </div>
    );
  }
}

export default Project;
