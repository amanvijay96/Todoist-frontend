import React, { Component } from 'react';
import './contentContainer.css';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import NewTask from '../AddTask/AddTask';
import Task from './Task';
// import project from './project';
import { getAllTask, deleteTask } from '../../actions/taskAction';

class ContentContainer extends Component {
  state = {
    showImg: true,
    visible: false,
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
    this.setState({ toggle: e.target.value });
  };
  render() {
    var allTasks = this.props.tasks.map(task => {
      return (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
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
        {this.state.showImg && <div className='taskDiv'>{allTasks}</div>}
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
        {!this.state.showImg && (
          <div className='imgDiv'>
            <img className='img' src={require('../../section.svg')} alt='' />
            <b>Keep Your tasks organized</b>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'ownProps');
  return {
    tasks: state.taskReducer.tasks,
    projectId: ownProps.projectId
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
