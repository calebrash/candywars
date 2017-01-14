import React from 'react';
import './app.scss';
import { dispatch } from 'react-redux';

import { VIEWS } from '../reducers/const';
import Intro from './Intro';
import Locations from './Locations';
import Drugs from './Drugs';
import Summary from './Summary';
import Incident from './Incident';

class AppComponent extends React.Component {
  render() {
    console.log('props', this.props.gameReducer);
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

export default AppComponent;
