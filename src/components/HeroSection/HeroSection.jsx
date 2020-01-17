import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Collapse } from 'antd';
import ProjectModal from '../AddProjectModal/ProjectModal';
import { changeName } from '../../actions/heroSectionAction';
// import { getAllProject } from '../../actions/projectModalAction';
import { getAllProject } from '../../actions/projectModalAction';
import Project from './project';

// import {
//   projectModalOpen,
//   projectModalClose
// } from '../../actions/projectModalAction';
// import { Collapse } from 'antd';
// import 'antd/dist/antd.css';
import './HeroSection.css';

const { Panel } = Collapse;

class HeroSection extends Component {
  state = { visible: false };

  componentDidMount() {
    // console.log(this.props, 'mmmmmm');
    this.props.getAll();
  }

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
    console.log(this.props.projects, 'nnnnnnnnn');
    var allProjects = this.props.projects.map(project => {
      return <Project key={project.id} Projects={project} />;
    });
    return (
      <div className='heroSection'>
        <div className='filterContainer'>
          <Link to='/inbox'>
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
          <Link to='/'>
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
                this.props.changeName('Next 7 week Days');
              }}
              className='filter next'>
              <Icon type='calendar' className='icon nIcon' />
              <span className='span' name='Next 7 days'>
                Next 7 days
              </span>
            </div>
          </Link>
          <Collapse accordion>
            <Panel
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
              {/* <div className='projectStore'></div> */}
              <div
                onClick={event => {
                  this.showModal(event);
                }}
                className='addProjectDiv'>
                <p className='addSymbol'>+</p>
                <p className='addProjectDivPara'>Add project</p>
              </div>
            </Panel>
            <Panel
              header={
                <div className='panelDiv'>
                  <b>label</b>
                  <button className='addButton'>+</button>
                </div>
              }
              button='+'
              key='2'>
              <p>{'b'}</p>
            </Panel>
            <Panel
              header={
                <div className='panelDiv'>
                  <b>Filters</b>
                  <button className='addButton'>+</button>
                </div>
              }
              key='3'>
              <p>{'c'}</p>
            </Panel>
          </Collapse>
        </div>
        <div className='content'>
          <h2>{this.props.name}</h2>
          <img className='img' src={require('../../section.svg')} alt='' />
        </div>
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
  // console.log(state, 'naveen');
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
    getAll: () => {
      dispatch(getAllProject());
    }
    // projectModalOpen: () => dispatch(projectModalOpen()),
    // projectModalClose: () => dispatch(projectModalClose())
  };
};
export default connect(
  mapStateToProps,
  // { getAllProject },
  mapDispatchToProps
)(HeroSection);
