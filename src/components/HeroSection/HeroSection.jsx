import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Collapse } from 'antd';
import { changeName } from '../../actions/heroSectionAction';
// import { Collapse } from 'antd';
// import 'antd/dist/antd.css';
import './HeroSection.css';

const { Panel } = Collapse;

class HeroSection extends Component {
  state = {};
  render() {
    console.log(this.props, 'nnnnnnnnn');
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
                this.props.changeName('Next 7 Days');
              }}
              className='filter next'>
              <Icon type='calendar' className='icon nIcon' />
              <span className='span' name='Next 7 days'>
                Next 7 days
              </span>
            </div>
          </Link>
          <Collapse accordion>
            <Panel header='Projects' key='1'>
              <p>{'a'}</p>
            </Panel>
            {/* <div>+</div> */}
            <Panel header='Labels' key='2'>
              <p>{'b'}</p>
            </Panel>
            <Panel header='Filters' key='3'>
              <p>{'c'}</p>
            </Panel>
          </Collapse>
        </div>
        <div className='content'>
          <h2>{this.props.name}</h2>
        </div>
      </div>
      //   <div>
      //     <h3>hello everyOne</h3>
      //     <h2>{this.props.name}</h2>
      //     <button
      //       onClick={() => {
      //         this.props.changeName('Inbox');
      //       }}>
      //       Inbox
      //     </button>
      //   </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state, 'naveen');
  return {
    name: state.heroSectionReducer.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(changeName(name));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
