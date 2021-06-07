import React from 'react';
import PropTypes from 'prop-types';
import MatCard from '../material/MatCard';

const LocationList = ({ locations }) => (
  <>
    <h2>Search History</h2>
    {locations.map((location, index) => {
      return <MatCard key={index} location={location} />;
    })}
  </>
);

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default LocationList;
