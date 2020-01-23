import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import SectionMenu2 from './SectionMenu2';
import './section.css';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import Task from './Task';
import NewTask from '../AddTask/AddTask';
import AddSection from './AddSection';
// import { addTask } from '../../actions/taskAction';

const { Panel } = Collapse;

class Section extends Component {
  state = { taskInput: '', toggle: 'false', sectiontoggle: 'false' };
  //   componentDidMount() {
  //     this.props.getAllTask(this.props.section.id);
  //   }
  handletoggle = e => {
    this.setState({ toggle: e.target.value });
  };
  handleSectiontoggle = e => {
    this.setState({ sectiontoggle: e.target.value });
  };
  handleAddSectionTask = (taskName, date, priority) => {
    this.props.addSectionTask(taskName, date, priority, this.props.section.id);
  };
  render() {
    // var sectionTask = this.props.sections.filter(
    //   section => section.id === this.props.section.id
    // );
    // //console.log(sectionTask, 'llkklklklkll');
    // console.log(this.props.section.task, 'asdfg');
    var allSectionTasks = this.props.section.task.map(eachTask => {
      return (
        <Task
          key={eachTask.id}
          task={eachTask}
          deleteTask={this.props.deleteSectionTask}
        />
      );
    });
    return (
      <div>
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
            // projectId={this.props.projectId}
          />
        )}
        <Collapse className='sectionCollapse'>
          {/* defaultActiveKey={['1']} onChange={callback}> */}
          <Panel
            className='sectionItem'
            header={
              <div className='sectionDiv'>
                <b>{this.props.section.name}</b>
                <div className='section-menu2'>
                  <Dropdown
                    onClick={event => event.stopPropagation()}
                    overlay={
                      <SectionMenu2
                        onDeleteSection={() =>
                          this.props.deleteSection(this.props.section.id)
                        }
                      />
                    }
                    trigger={['click']}>
                    <Icon type='ellipsis' />
                  </Dropdown>
                </div>
              </div>
            }
            key={this.props.section.id}>
            {allSectionTasks.length !== 0 ? allSectionTasks : null}

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
                addTask={this.handleAddSectionTask}
                // projectId={this.props.projectId}
                cancelVisible={true}
              />
            )}
          </Panel>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sections: state.taskReducer.sections
  };
};

export default connect(mapStateToProps)(Section);
