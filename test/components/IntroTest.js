import React from 'react';
import { shallow } from 'enzyme';
import Intro from 'components//Intro.js';

describe('<Intro />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Intro />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "intro-component"', () => {
      expect(component.hasClass('intro-component')).to.equal(true);
    });
  });
});
