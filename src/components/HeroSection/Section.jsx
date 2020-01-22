import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import SectionMenu2 from './SectionMenu2';
import './section.css';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import Task from './Task';
import NewTask from '../AddTask/AddTask';
import AddSection from './AddSection';
import { addTask } from '../../actions/taskAction';

const { Panel } = Collapse;

class Section extends Component {
  state = { taskInput: '', toggle: 'false', sectiontoggle: 'false' };
  handletoggle = e => {
    this.setState({ toggle: e.target.value });
  };
  handleSectiontoggle = e => {
    this.setState({ sectiontoggle: e.target.value });
  };
  handleAddSectionTask = () => {
    this.addTask(this.props.projectId, this.props.section.id);
  };
  render() {
    // var sectionTask = this.props.sections.filter(
    //   section => section.id === this.props.section.id
    // );
    var allSectionTasks = this.props.section.task.map(eachTask => {
      return (
        <Task
          key={eachTask.id}
          task={eachTask}
          deleteTask={this.handleDeleteTask}
        />
      );
    });

    // console.log(this.props.section.task, 'section1111111111');
    return (
      <div>
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
            projectId={this.props.projectId}
          />
        )}
        <Collapse className="sectionCollapse">
          {/* defaultActiveKey={['1']} onChange={callback}> */}
          <Panel
            className="sectionItem"
            header={
              <div className="sectionDiv">
                <b>{this.props.section.name}</b>
                <div className="section-menu2">
                  <Dropdown
                    onClick={event => event.stopPropagation()}
                    overlay={
                      <SectionMenu2
                        onDeleteSection={() =>
                          this.props.deleteSection(this.props.section.id)
                        }
                      />
                    }
                    trigger={['click']}
                  >
                    <Icon type="ellipsis" />
                  </Dropdown>
                </div>
              </div>
            }
            key={this.props.section.id}
          >
            {allSectionTasks}
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
                cancel={this.handletoggle}
                addSectionTask={this.handleAddSectionTask}
                // projectId={this.props.projectId}
              />
            )}
            {/* <p>{'text'}</p> */}
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

export default connect(mapStateToProps, { addTask })(Section);
