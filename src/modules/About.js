import React from 'react';
import pathToTitle from './Helpers';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'A demo portfolio site using React and a whole bunch of other goodies.',
    };
  }
  render() {
    const pathname = this.props.location.pathname;
    return (
      <div>
        <h1 className="page-header" id="title">
          {pathToTitle(pathname)}
        </h1>
        <p id="message">
          {this.state.message}
        </p>
      </div>
    );
  }
}

About.propTypes = {
  location: React.PropTypes.object,
};

export default About;
