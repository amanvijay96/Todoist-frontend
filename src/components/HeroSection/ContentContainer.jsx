import React, { Component } from 'react';
import './contentContainer.css';
import { Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import NewTask from '../AddTask/AddTask';
import Task from './Task';
// import project from './project';
import { getAllTask, deleteTask } from '../../actions/taskAction';
import SectionMenu from './SectionMenu';
import SectionMenu2 from './SectionMenu2';
import Section from './Section.jsx';

class ContentContainer extends Component {
  state = {
    showImg: true,
    visible: false,
    taskInput: '',
    toggle: 'false'
  };
  componentDidMount() {
    this.props.getAllTask(this.props.projectId);
    this.props.getAllSection(this.props.projectId);
  }
  handleDeleteTask = id => {
    this.props.deleteTask(id);
  };
  handletoggle = e => {
    this.setState({ toggle: e.target.value });
  };
  render() {
    var allTasks = this.props.tasks.map(task => {
      return (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      );
    });
    var allSections = this.props.sections.map(section => {
      return <Section key={section.id} section={section} />;
    });

    return (
      <div className='content'>
        <div className='projectHeadingDiv'>
          <h2>
            <b>{this.props.name}</b>
          </h2>
          <div className='iconsDiv'>
            <Icon className='commentIcon' type='message' />
            <Icon className='addIcon' type='user-add' />
            <Dropdown overlay={<SectionMenu />} trigger={['click']}>
              <Icon type='ellipsis' />
            </Dropdown>
          </div>
        </div>
        <div className='section-menu2'>
          <Dropdown overlay={<SectionMenu2 />} trigger={['click']}>
            <Icon type='ellipsis' />
          </Dropdown>
        </div>
        {allTasks.length !== 0 ? (
          <div className='taskDiv'>{allTasks}</div>
        ) : null}
        {this.state.toggle === 'false' ? (
          <button
            onClick={this.handletoggle}
            value='true'
            className='addProjectDiv addTaskDiv'>
            <Icon type='plus' className='addSymbol' />
            <p className='addProjectDivPara addTaskDivPara'>Add task</p>
          </button>
        ) : (
          <NewTask
            cancel={this.handletoggle}
            projectId={this.props.projectId}
          />
        )}
        {allTasks.length === 0 ? (
          <div className='imgDiv'>
            <img className='img' src={require('../../section.svg')} alt='' />
            <b>Keep Your tasks organized</b>
          </div>
        ) : null}
        <div className='taskDiv'>{allSections}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'ownProps');
  return {
    tasks: state.taskReducer.tasks,
    sections: state.taskReducer.sections
    // projectId: ownProps.projectId
    // name: state.heroSectionReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllTask: id => {
      dispatch(getAllTask(id));
    },
    deleteTask: id => {
      dispatch(deleteTask(id));
    },
    getAllSection: id => {
      dispatch(getAllTask(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
