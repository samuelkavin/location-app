import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { geocodeByAddress } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { slideInRight } from 'react-animations';

import { loadSearchLocations } from '../../redux/actions/locationActions';
import LocationList from './LocationList';
import LocationForm from './LocationForm';

function ManageLocationPage({ locations, loadSearchLocations, ...props }) {
  const [location, setLocation] = useState(...props.location);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadSearchLocations().catch((error) => {
      alert('loading failed ' + error);
    });
  }, []);

  //   handleChange = (address) => {
  //     const location = { ...this.state.location, title: address };
  //     this.setState({ location });
  //   };

  //   handleSelect = async (value) => {
  //     const result = await geocodeByAddress(value);
  //     this.props.actions.saveLocation(this.state.location);
  //     console.log('result', value);
  //   };

  return (
    <>
      <LocationForm locations={locations} error={errors} />
    </>
  );
}

ManageLocationPage.propTypes = {
  locations: PropTypes.array.isRequired,
  loadSearchLocations: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}

const mapDispatchToProps = {
  loadSearchLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLocationPage);
