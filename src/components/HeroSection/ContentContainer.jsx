import React, { Component } from 'react';
import './contentContainer.css';
import { Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import NewTask from '../AddTask/AddTask';
import Task from './Task';
// import project from './project';
import {
  getAllTask,
  addTask,
  deleteTask,
  deleteSection
} from '../../actions/taskAction';
import SectionMenu from './SectionMenu';

import Section from './Section.jsx';
import AddSection from './AddSection';

class ContentContainer extends Component {
  state = {
    sectionButtonVisible: false,
    showImg: true,
    visible: false,
    taskInput: '',
    toggle: 'false',
    sectiontoggle: 'false'
  };
  componentDidMount() {
    this.props.getAllTask(this.props.projectId);
    this.props.getAllSection(this.props.projectId);
  }
  handleAddTask = taskName => {
    this.props.addTask(taskName, this.props.projectId);
  };
  handleDeleteTask = id => {
    this.props.deleteTask(id);
  };
  handleDeleteSection = id => {
    this.props.deleteSection(id);
  };
  handletoggle = e => {
    this.setState({ toggle: e.target.value });
  };
  handleSectiontoggle = e => {
    this.setState({ sectiontoggle: e.target.value });
  };
  render() {
    var allTasks = this.props.tasks.map(task => {
      return (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      );
    });
    var allSections = this.props.sections.map(section => {
      return (
        <Section
          key={section.id}
          section={section}
          deleteSection={this.handleDeleteSection}
        />
      );
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
            addTask={this.handleAddTask}
            // projectId={this.props.projectId}
          />
        )}
        <div className='taskDiv'>{allSections}</div>
        {this.state.sectiontoggle === 'false' ? (
          <button
            onClick={this.handleSectiontoggle}
            value='true'
            className='add-section-button'>
            <hr className='hr-text' data-content='Add Section' />
          </button>
        ) : (
          <AddSection
            cancel={this.handleSectiontoggle}
            projectId={this.props.projectId}
          />
        )}

        {allTasks.length === 0 ? (
          <div className='imgDiv'>
            <img className='img' src={require('../../section.svg')} alt='' />
            <b>Keep Your tasks organized</b>
          </div>
        ) : null}
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
    addTask: (taskName, id) => {
      dispatch(addTask(taskName, id));
    },
    deleteTask: id => {
      dispatch(deleteTask(id));
    },
    getAllSection: id => {
      dispatch(getAllTask(id));
    },
    deleteSection: id => {
      dispatch(deleteSection(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
