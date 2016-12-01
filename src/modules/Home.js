import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super();
    const iconBaseClass = 'fa fa-globe';
    this.state = {
      message: 'hello world!',
      icon: {
        size: 1,
        status: 'growing',
        baseClass: iconBaseClass,
        className: iconBaseClass,
      },
    };
  }

  handleClick() {
    let status = this.state.icon.status;
    let size = this.state.icon.size;

    // determine if globe should shrink or grow
    if (size === 5) {
      status = 'shrinking';
    } else if (size === 1) {
      status = 'growing';
    }

    // update the size of the glob
    if (status === 'growing') {
      size += 1;
    } else {
      size -= 1;
    }

    // construct the globe icon class
    const baseClass = this.state.icon.baseClass;
    const className = `${baseClass} fa-${size}x`;
    const icon = {
      size,
      status,
      className,
      baseClass,
    };
    this.setState({
      icon,
    });
  }

  render() {
    const handleClick = this.handleClick.bind(this);
    return (
      <div>
        <h1 className="page-header">
          Home
        </h1>
        <p>
          <i
            id="globe"
            onClick={() => handleClick()}
            className={this.state.icon.className}
          />
          <span id="message" className="hello">{this.state.message}</span>
        </p>
      </div>
    );
  }
}

export default HelloWorld;
