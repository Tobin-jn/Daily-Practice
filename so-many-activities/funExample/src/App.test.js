import React from 'react';
import { shallow, mount } from 'enzyme';
// import fetchMock from 'fetch-mock';

import App from './App';

describe('App', () => {
  it('mounts without props', () => {
    const wrapper = mount(<App />);
  });
});