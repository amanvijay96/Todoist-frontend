import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Collapse } from 'antd';
import ProjectModal from '../AddProjectModal/ProjectModal';
import { changeName } from '../../actions/heroSectionAction';
// import { getAllProject } from '../../actions/projectModalAction';
import { getAllProject, deleteProject } from '../../actions/projectModalAction';
import ContentContainer from './ContentContainer';
import Project from './project';
import Priority from '../Modal/Priority';
import Label from './Label';

import './HeroSection.css';
const { Panel } = Collapse;

class HeroSection extends Component {
  state = { visible: false };

  componentDidMount() {
    // console.log(this.props, 'mmmmmm');
    this.props.getAllProject();
  }

  handleDeleteProject = id => {
    this.props.deleteProject(id);
  };

  showModal = event => {
    event.stopPropagation();
    this.setState({
      visible: true
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    var allProjects = this.props.projects.map(project => {
      return (
        <Project
          key={project.id}
          Projects={project}
          deleteProject={this.handleDeleteProject}
          showModal={this.showModal}
          changeName={() => this.props.changeName(project.name)}
        />
      );
    });
    return (
      <div className='heroSection'>
        <div className='filterContainer'>
          <Link to='/project/0'>
            <div
              onClick={() => this.props.changeName('Inbox')}
              className='filter inbox'>
              <div>
                <Icon type='inbox' className='icon iIncon' />
              </div>
              <span className='span' name='inbox'>
                inbox
              </span>
            </div>
          </Link>
          <Link to='/getStarted'>
            <div
              onClick={() => {
                this.props.changeName('Today');
              }}
              className='filter today'>
              <Icon type='calendar' className='icon cIcon' />
              <span className='span' name='Today'>
                Today
              </span>
            </div>
          </Link>
          <Link to='/all7days'>
            <div
              onClick={() => {
                this.props.changeName('Next 7 Days');
              }}
              className='filter next'>
              <Icon type='calendar' className='icon nIcon' />
              <span className='span' name='Next 7 days'>
                Next 7 days
              </span>
            </div>
          </Link>
          <Collapse className='filterCollapse' accordion>
            <Panel
              className='filterItem'
              header={
                <div className='panelDiv'>
                  <b>Projects</b>
                  <button
                    onClick={event => {
                      this.showModal(event);
                    }}
                    className='addButton'>
                    +
                  </button>
                </div>
              }
              key='1'>
              {allProjects}
              <div className='projectStore'></div>
              <div
                onClick={event => {
                  this.showModal(event);
                }}
                className='addProjectDiv'>
                <Icon type='plus' className='addSymbol' />
                <button className='addProjectDivPara'>Add project</button>
              </div>
            </Panel>
            <Panel
              className='filterItem'
              header={
                <div className='panelDiv'>
                  <b>label</b>
                  <button className='addButton'>+</button>
                </div>
              }
              button='+'
              key='2'>
              <Label />
            </Panel>
            <Panel
              className='filterItem'
              header={
                <div className='panelDiv'>
                  <b>Filters</b>
                  <button className='addButton'>+</button>
                </div>
              }
              key='3'>
              <Priority />
            </Panel>
          </Collapse>
        </div>
        <ContentContainer
          name={this.props.name}
          key={this.props.match.params.id}
          projectId={this.props.match.params.id}
          // project={project}
        />
        <ProjectModal
          visible={this.state.visible}
          // onCancel={this.state.visible}
          handleCancel={this.handleCancel}
          // visible={this.props.projectVisible}
          handleAddProject={this.handleAddProject}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projectModalReducer.projects,
    name: state.heroSectionReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(changeName(name));
    },
    getAllProject: () => {
      dispatch(getAllProject());
    },
    deleteProject: id => {
      dispatch(deleteProject(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
