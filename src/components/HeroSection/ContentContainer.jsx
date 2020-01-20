import React, { Component } from 'react';
import './contentContainer.css';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import NewTask from '../AddTask/AddTask';
import Task from './Task';
import { getAllTask, deleteTask } from '../../actions/taskAction';

class ContentContainer extends Component {
  state = {
    taskInput: '',
    toggle: 'false'
  };
  componentDidMount() {
    this.props.getAll();
  }
  handleDeleteTask = id => {
    this.props.deleteTask(id);
  };
  // handleAddTask = () => {
  //   // this.props.addTask(this.state.taskInput);
  //   this.setState({
  //     taskInput: ''
  //   });
  // };
  handletoggle = e => {
    // console.log(e.target.value)
    this.setState({ toggle: e.target.value });
  };
  // getAllTask = () => {
  //   getAllTask;
  // };
  render() {
    var allTasks = this.props.tasks.map(task => {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={this.handleDeleteTask}
          // deleteProject={this.handleDeleteProject}
          // showModal={this.showModal}
          // changeName={() => this.props.changeName(project.name)}
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
            <Icon theme='outlined' type='ellipsis' />
          </div>
        </div>
        <div className='taskDiv'>{allTasks}</div>
        {this.state.toggle === 'false' ? (
          <button
            onClick={this.handletoggle}
            value='true'
            className='addProjectDiv addTaskDiv'>
            <Icon type='plus' className='addSymbol' />
            <p className='addProjectDivPara addTaskDivPara'>Add task</p>
          </button>
        ) : (
          <NewTask cancel={this.handletoggle} />
        )}
        <div className='imgDiv'>
          <img className='img' src={require('../../section.svg')} alt='' />
          <b>Keep Your tasks organized</b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
    // name: state.heroSectionReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAll: () => {
      dispatch(getAllTask());
    },
    deleteTask: id => {
      dispatch(deleteTask(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
