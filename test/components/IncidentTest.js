import React from 'react';
import { shallow } from 'enzyme';
import Incident from '../../src/components/Incident';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Incident />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Incident store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Incident />', () => {
      expect(component.instance()).to.be.instanceOf(Incident);
    });
  });
});
