import 'react-native';
import React from 'react';
import Intro from '../';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Intro />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(typeof tree).toBe('object');
});
