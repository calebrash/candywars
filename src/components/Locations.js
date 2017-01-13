import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import pickLocation from '../actions/pickLocation';
import Header from './Header';

class Locations extends React.Component {
  locationList() {
    return this.props.gameReducer.locations.map((location) => {
      return (
        <li key={`location-${location.toLowerCase()}`}>
          <button onClick={() => this.props.actions.pickLocation(location)}>
            {location}
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="game">
        <h2>Where do you want to go?</h2>
        <Header />
        <ul>
          {this.locationList()}
        </ul>
      </div>
    );
  }
}

Locations.displayName = 'Locations';
Locations.propTypes = {};
Locations.defaultProps = {};

function mapStateToProps(state) {
  return {
    gameReducer: state.gameReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      pickLocation,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
