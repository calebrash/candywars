import React, { PropTypes } from 'react';
import Intro from './Intro';
import Locations from './Locations';
import Drugs from './Drugs';
import Summary from './Summary';
import Incident from './Incident';
import { VIEWS } from '../reducers/const';
import '../styles/index.scss';

class AppComponent extends React.Component {
  render() {
    switch (this.props.gameReducer.view) {
      case VIEWS.LOCATIONS:
        return <Locations />;
      case VIEWS.DRUGS:
        return <Drugs />;
      case VIEWS.SUMMARY:
        return <Summary />;
      case VIEWS.INCIDENT:
        return <Incident />;
      case VIEWS.INTRO:
      default:
        return <Intro />;
    }
  }
}

AppComponent.propTypes = {
  gameReducer: PropTypes.shape({
    view: PropTypes.number,
  }),
};

export default AppComponent;
