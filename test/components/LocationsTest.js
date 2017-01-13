import React from 'react';
import { shallow } from 'enzyme';
import Locations from 'components//Locations.js';

describe('<Locations />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Locations />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "locations-component"', () => {
      expect(component.hasClass('locations-component')).to.equal(true);
    });
  });
});
