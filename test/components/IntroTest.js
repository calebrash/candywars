import React from 'react';
import { shallow } from 'enzyme';
import Intro from '../../src/components/Intro';
import configureStore from '../../src/stores';

const store = configureStore();

describe('<Intro />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Intro store={store} />);
  });

  describe('when rendering the component', () => {
    it('should should be an instance of <Intro />', () => {
      expect(component.instance()).to.be.instanceOf(Intro);
    });
  });
});
