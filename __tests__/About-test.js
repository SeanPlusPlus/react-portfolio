import React from 'react';
import {shallow} from 'enzyme';
import About from '../src/modules/About';
import pathToTitle from '../src/modules/Helpers';

it('Should render the about page', () => {
  const title = 'About';
  const message = 'A demo portfolio site using React and a whole bunch of other goodies.';
  const location = {
    pathname: '/about',
  }
  const component = shallow(
    <About location={location}/>
  );

  expect(component.find('#message').text()).toEqual(message);
  expect(component.find('#title').text()).toEqual('About');
});
