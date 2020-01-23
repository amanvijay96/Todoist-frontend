import React, { Component } from 'react';
import './contentContainer.css';
import { Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import NewTask from '../AddTask/AddTask';
import Task from './Task';
// import project from './project';
import {
  // getWholeTask,
  getAllTask,
  addTask,
  deleteTask,
  addSection,
  deleteSection
} from '../../actions/taskAction';
import SectionMenu from './SectionMenu';
import AddSection from './AddSection';
import Section from './Section.jsx';
import ProjectCommentModal from './ProjectCommentModal';

class ContentContainer extends Component {
  state = {
    sectionButtonVisible: false,
    showImg: true,
    visible: false,
    taskInput: '',
    toggle: 'false',
    sectiontoggle: 'false',
    projectCommentModalVisible: false,
    tabKey: '1'
  };
  componentDidMount() {
    this.props.getAllTask(this.props.projectId);
    this.props.getAllSection(this.props.projectId);
    // this.props.getWholeTask() ;
    // this.props.getWholeTask();
  }
  handleAddTask = (taskName, date, priority, sectionId) => {
    this.props.addTask(
      taskName,
      date,
      priority,
      this.props.projectId,
      sectionId
    );
  };
  handleDeleteTask = id => {
    this.props.deleteTask(id);
  };
  handleAddSection = sectionName => {
    this.props.addSection(sectionName, this.props.projectId);
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
  handleProjectCommentModalVisible = e => {
    this.setState({
      projectCommentModalVisible: true,
      tabKey: e
    });
  };
  handleCancel = () => {
    this.setState({
      projectCommentModalVisible: false
    });
  };

  // handleAddTask = () => {
  //   console.log(this.props.match.params.id);
  // };

  render() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + '-' + month + '-' + day;
    console.log(newdate);
    // console.log(this.props.taskData)
    let todayTask = this.props.tasks
      .filter(task => task.due.date === newdate)
      .map(task => {
        return (
          <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
        );
      });

    var allTasks = this.props.tasks.map(task => {
      return (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      );
    });
    //console.log(this.props.sections, 'jhgfdsdfgh');
    var allSections = this.props.sections.map(section => {
      return (
        <Section
          key={section.id}
          section={section}
          deleteSection={this.handleDeleteSection}
          addSectionTask={this.handleAddTask}
          deleteSectionTask={this.handleDeleteTask}
        />
      );
    });

    // console.log(this.props.tasks, 'jjjj');
    var allPriority1Task = this.props.tasks
      .filter(task => task.priority === 1)
      .map(task => (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      ));
    var allPriority2Task = this.props.tasks
      .filter(task => task.priority === 2)
      .map(task => (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      ));
    var allPriority3Task = this.props.tasks
      .filter(task => task.priority === 3)
      .map(task => (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      ));
    var allPriority4Task = this.props.tasks
      .filter(task => task.priority === 4)
      .map(task => (
        <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
      ));
    // console.log(allPriority1Task, '1111');
    // console.log(allPriority2Task, '22');
    // console.log(allPriority3Task, '33');
    // console.log(allPriority4Task, '44');
    return (
      <React.Fragment>
        <div className="content">
          <div className="projectHeadingDiv">
            <h2>
              <b>{this.props.name}</b>
            </h2>
            {this.props.name === 'Today' ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <div>
                  {' '}
                  {this.state.toggle === 'false' ? (
                    <button
                      onClick={this.handletoggle}
                      value="true"
                      className="addProjectDiv addTaskDiv"
                    >
                      <Icon type="plus" className="addSymbol" />
                      <p className="addProjectDivPara addTaskDivPara">
                        Add task
                      </p>
                    </button>
                  ) : (
                    <NewTask
                      cancelVisible={true}
                      cancel={this.handletoggle}
                      addTask={this.handleAddTask}
                      // projectId={this.props.projectId}
                    />
                  )}
                </div> */}
                <div>{todayTask}</div>
              </div>
            ) : null}

            {this.props.name !== 'Priority1' ||
            this.props.name !== 'Priority2' ||
            this.props.name !== 'Priority3' ||
            this.props.name !== 'Priority4' ? (
              <div className="iconsDiv">
                <Icon
                  className="commentIcon"
                  onClick={() => this.handleProjectCommentModalVisible('1')}
                  type="message"
                />
                <Icon className="addIcon" type="user-add" />
                <Dropdown overlay={<SectionMenu />} trigger={['click']}>
                  <Icon type="ellipsis" />
                </Dropdown>
              </div>
            ) : null}
          </div>

          {this.props.name === 'Priority1' ? (
            allPriority1Task.length !== 0 ? (
              <div>{allPriority1Task}</div>
            ) : (
              <div className="imgDiv">
                <img
                  className="img"
                  src={require('../../section.svg')}
                  alt=""
                />
                <b>Keep Your tasks organized</b>
              </div>
            )
          ) : this.props.name === 'Priority2' ? (
            allPriority2Task.length !== 0 ? (
              <div>{allPriority2Task}</div>
            ) : (
              <div className="imgDiv">
                <img
                  className="img"
                  src={require('../../section.svg')}
                  alt=""
                />
                <b>Keep Your tasks organized</b>
              </div>
            )
          ) : this.props.name === 'Priority3' ? (
            allPriority3Task.length !== 0 ? (
              <div>{allPriority3Task}</div>
            ) : (
              <div className="imgDiv">
                <img
                  className="img"
                  src={require('../../section.svg')}
                  alt=""
                />
                <b>Keep Your tasks organized</b>
              </div>
            )
          ) : this.props.name === 'Priority4' ? (
            allPriority4Task.length !== 0 ? (
              <div>{allPriority4Task}</div>
            ) : (
              <div className="imgDiv">
                <img
                  className="img"
                  src={require('../../section.svg')}
                  alt=""
                />
                <b>Keep Your tasks organized</b>
              </div>
            )
          ) : (
            <div>
              <ProjectCommentModal
                handleProjectCommentModalVisible={
                  this.handleProjectCommentModalVisible
                }
                name={this.props.name}
                visible={this.state.projectCommentModalVisible}
                onCancel={this.handleCancel}
                tabKey={this.state.tabKey}
                projectId={this.props.projectId}
              />

              {allTasks.length !== 0 ? (
                <div className="taskDiv">{allTasks}</div>
              ) : null}

              {this.state.toggle === 'false' ? (
                <button
                  onClick={this.handletoggle}
                  value="true"
                  className="addProjectDiv addTaskDiv"
                >
                  <Icon type="plus" className="addSymbol" />
                  <p className="addProjectDivPara addTaskDivPara">Add task</p>
                </button>
              ) : (
                <NewTask
                  cancelVisible={true}
                  cancel={this.handletoggle}
                  addTask={this.handleAddTask}
                  // projectId={this.props.projectId}
                />
              )}
              {allSections.length !== 0 ? (
                <div className="taskDiv">{allSections}</div>
              ) : null}
              {/* <div className='taskDiv'>{allSections}</div> */}
              {this.state.sectiontoggle === 'false' ? (
                <button
                  onClick={this.handleSectiontoggle}
                  value="true"
                  className="add-section-button"
                >
                  <hr className="hr-text" data-content="Add Section" />
                </button>
              ) : (
                <AddSection
                  cancel={this.handleSectiontoggle}
                  addSection={this.handleAddSection}
                  // projectId={this.props.projectId}
                />
              )}
            </div>
          )}

          {allTasks.length === 0 &&
          this.state.toggle === 'false' &&
          this.state.sectiontoggle === 'false' ? (
            // ||
            // allPriority1Task.length === 0 ||
            // allPriority2Task.length === 0 ||
            // allPriority3Task.length === 0 ||
            // allPriority4Task.length === 0
            // allPriority1Task.length === 0 &&
            // allPriority2Task.length === 0 &&
            // allPriority3Task.length === 0 &&
            // allPriority4Task.length === 0 &&
            <div className="imgDiv">
              <img className="img" src={require('../../section.svg')} alt="" />
              <b>Keep Your tasks organized</b>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.taskReducer.taskData, 'ownProps');
  return {
    tasks: state.taskReducer.tasks,
    sections: state.taskReducer.sections
    // taskData: state.taskReducer.taskData
    // projectId: ownProps.projectId
    // name: state.heroSectionReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getWholeTask: () => {
    //   dispatch(getWholeTask);
    // },
    getAllTask: id => {
      dispatch(getAllTask(id));
    },
    addTask: (taskName, date, priority, id, sectionId) => {
      dispatch(addTask(taskName, date, priority, id, sectionId));
    },
    deleteTask: id => {
      dispatch(deleteTask(id));
    },
    getAllSection: id => {
      dispatch(getAllTask(id));
    },
    addSection: (sectionName, id) => {
      dispatch(addSection(sectionName, id));
    },
    deleteSection: id => {
      dispatch(deleteSection(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
