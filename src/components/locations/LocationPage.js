import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { slideInRight } from 'react-animations';
import { toast } from 'react-toastify';

import * as locationActions from '../../redux/actions/locationActions';
import LocationList from './LocationList';
import LocationForm from './LocationForm';

const styles = {
  slideInRight: {
    animation: '400ms',
    animationName: Radium.keyframes(slideInRight, 'slideInRight'),
  },
};

class LocationPage extends React.Component {
  state = {
    location: {
      title: '',
    },
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.loadSearchLocations().catch((error) => {
      toast.error(`Something went wrong! ${error}`);
    });
  }

  handleChange = (address) => {
    const location = { ...this.state.location, title: address };
    this.setState({ location });
  };

  handleSelect = async (value) => {
    await geocodeByAddress(value)
      .then((result) => {
        getLatLng(result[0]);
        toast.success('Location successfully added!');
      })
      .catch((error) => {
        toast.error('Invalid input. Please try again!');
        throw error;
      });
    this.props.actions.saveLocation(this.state.location);
  };

  render() {
    return (
      <>
        <div className="Col">
          <div className="Content Autocomplete">
            <section>
              <LocationForm
                value={this.state.location.title}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              />
            </section>
          </div>
        </div>

        {this.props.locations.length > 0 ? (
          <StyleRoot>
            <div className="Col" style={styles.slideInRight}>
              <div className="Content Rightbar">
                <section>
                  <LocationList
                    onDeleteClick={this.handleDeleteLocation}
                    locations={this.props.locations}
                  />
                </section>
              </div>
            </div>
          </StyleRoot>
        ) : null}
      </>
    );
  }
}

LocationPage.propTypes = {
  locations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSearchLocations: bindActionCreators(locationActions.loadSearchLocations, dispatch),
      saveLocation: bindActionCreators(locationActions.saveLocation, dispatch),
      deleteLocation: bindActionCreators(locationActions.deleteLocation, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
