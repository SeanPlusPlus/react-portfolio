import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Nav from './modules/Nav';
import Home from './modules/Home';
import About from './modules/About';
import Portfolio from './modules/Portfolio';
import PortfolioItem from './modules/PortfolioItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav location={this.props.location} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:itemId" component={PortfolioItem} />
    </Route>
  </Router>
), document.getElementById('app'));
