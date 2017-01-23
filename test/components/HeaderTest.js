import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Header />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Header store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Header />', () => {
      expect(component.instance()).to.be.instanceOf(Header);
    });
  });
});
