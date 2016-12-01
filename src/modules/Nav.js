import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    const links = [
      {
        to: '/about',
        name: 'about',
      },
      {
        to: '/portfolio',
        name: 'portfolio',
      },
    ];
    this.state = {
      links,
    };
  }
  render() {
    const pathname = this.props.location.pathname;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link to={'/'} className="navbar-brand">
              Sean Plus Plus
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.state.links.map(l =>
                <li key={l.name} className={pathname === l.to ? 'active' : null}>
                  <Link to={l.to}>
                    {l.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  location: React.PropTypes.object,
};

export default Nav;
