import React from 'react';
import { shallow } from 'enzyme';
import Candy from '../../src/components/Candy';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Candy />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Candy store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Candy />', () => {
      expect(component.instance()).to.be.instanceOf(Candy);
    });
  });
});
