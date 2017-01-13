import React from 'react';
import { shallow } from 'enzyme';
import Summary from 'components//Summary.js';

describe('<Summary />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Summary />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "summary-component"', () => {
      expect(component.hasClass('summary-component')).to.equal(true);
    });
  });
});
