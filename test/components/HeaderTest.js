import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components//Header.js';

describe('<Header />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "header-component"', () => {
      expect(component.hasClass('header-component')).to.equal(true);
    });
  });
});
