import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import pathToTitle from './Helpers';

class PortfolioItem extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    this.fetch();
  }

  getItem(id, items) {
    for (const i of items) {
      if (i.id === id) {
        this.setState({
          item: i,
        });
        return;
      }
    }
    return;
  }

  fetch() {
    const id = parseInt(this.props.params.itemId, 10);
    const url = '/data.json';
    const obj = {
      url,
    };
    const xhr = $.ajax(obj);
    xhr.done(data =>
      this.getItem(id, data.portfolio.items)
    );
  }

  render() {
    const pathname = this.props.location.pathname;
    const item = this.state.item;
    return (
      <div>
        <h1 className="page-header" id="title">
          <Link to={'/portfolio'}>
            {pathToTitle(pathname)}
          </Link>
          &nbsp;/&nbsp;
          {item.title}
        </h1>
        <div className="row">
          <div className="col-md-8">
            <img
              className="img-responsive"
              alt=""
              src={`http://placehold.it/750x500?text=${item.title}`}
            />
          </div>
          <div className="col-md-4">
            <h3>Item #{item.id}</h3>
            <p>
              {item.description}
            </p>
            <h3>Item Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object,
};

export default PortfolioItem;
