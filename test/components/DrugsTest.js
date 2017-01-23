import React from 'react';
import { shallow } from 'enzyme';
import Drugs from '../../src/components/Drugs';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Drugs />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Drugs store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Drugs />', () => {
      expect(component.instance()).to.be.instanceOf(Drugs);
    });
  });
});
