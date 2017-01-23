import React from 'react';
import { shallow } from 'enzyme';
import Locations from '../../src/components/Locations';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Locations />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Locations store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Locations />', () => {
      expect(component.instance()).to.be.instanceOf(Locations);
    });
  });
});
