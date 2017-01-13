import React from 'react';
import { shallow } from 'enzyme';
import Drugs from 'components//Drugs.js';

describe('<Drugs />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Drugs />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "drugs-component"', () => {
      expect(component.hasClass('drugs-component')).to.equal(true);
    });
  });
});
