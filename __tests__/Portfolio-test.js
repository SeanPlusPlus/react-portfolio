import React from 'react';
import {shallow} from 'enzyme';
import Portfolio from '../src/modules/Portfolio';
import '../dist/data.json';

it('Should render the portfolio', () => {
  const location = {
    pathname: '/portfolio',
  }
  const component = shallow(
    <Portfolio location={location} />
  );

  expect(component.find('#title').text()).toEqual('Portfolio');
});
