import React from 'react';
import { shallow } from 'enzyme';
import Incident from 'components//Incident.js';

describe('<Incident />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Incident />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "incident-component"', () => {
      expect(component.hasClass('incident-component')).to.equal(true);
    });
  });
});
