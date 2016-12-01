import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import pathToTitle from './Helpers';

class Portfolio extends React.Component {
  constructor() {
    super();
    const items = [];
    this.state = {
      items,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const url = '/data.json';
    const obj = {
      url,
    };
    const xhr = $.ajax(obj);
    xhr.done(data =>
      this.setState({ items: data.portfolio.items })
    );
  }

  render() {
    const pathname = this.props.location.pathname;
    return (
      <div>
        <h1 id="title" className="page-header">
          {pathToTitle(pathname)}
        </h1>
        <div id="items" className="row">
          {this.state.items.map(i =>
            <div key={i.id} className="col-md-4">
              <Link to={`/portfolio/${i.id}`}>
                <img
                  className="img-responsive img-portfolio img-hover"
                  alt=""
                  src={`http://placehold.it/700x450?text=${i.title}`}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  location: React.PropTypes.object,
};

export default Portfolio;
