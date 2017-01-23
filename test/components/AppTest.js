import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/Header';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<App />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<App store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <App />', () => {
      expect(component.instance()).to.be.instanceOf(App);
    });
  });
});
