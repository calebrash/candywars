import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pickLocation } from '../actions';
import Header from './Header';

class Locations extends React.Component {
  locationList() {
    return this.props.game.locations.map(location =>
      <li key={`location-${location.toLowerCase()}`}>
        <button className="btn" onClick={() => this.props.actions.pickLocation(location)}>
          {location}
        </button>
      </li>
    );
  }
  render() {
    return (
      <div className="locations">
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
Locations.propTypes = {
  actions: PropTypes.shape({
    pickLocation: PropTypes.func.isRequired,
  }),
  game: PropTypes.shape({
    locations: PropTypes.array,
  }),
};

function mapStateToProps(state) {
  return {
    game: state.game
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
