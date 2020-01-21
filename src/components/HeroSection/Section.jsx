import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import SectionMenu2 from './SectionMenu2';

class Section extends Component {
  state = {};
  render() {
    return (
      <div>
        <b>{this.props.section.name}</b>
        <div className="section-menu2">
          <Dropdown overlay={<SectionMenu2 />} trigger={['click']}>
            <Icon type="ellipsis" />
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Section;
