import React from 'react';
import {shallow} from 'enzyme';
import Home from '../src/modules/Home';

it('Should render the home page and message', () => {
  const component = shallow(
    <Home />
  );

  expect(component.find('#message').text()).toEqual('hello world!');
  expect(component.find('#globe').hasClass('fa fa-globe')).toEqual(true);
  component.find('#globe').simulate('click');
  const updatedClass = 'fa fa-globe fa-2x';
  expect(component.find('#globe').node.props.className).toEqual(updatedClass);
});
