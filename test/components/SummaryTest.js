import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../../src/components/Summary';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Summary />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Summary store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Summary />', () => {
      expect(component.instance()).to.be.instanceOf(Summary);
    });
  });
});
