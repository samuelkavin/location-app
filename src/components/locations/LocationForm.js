import React from 'react';
import LocationAutocomplete from '../common/LocationAutocomplete';
import Header from '../common/Header';

const LocationForm = ({ value, onChange, onSelect }) => {
  return (
    <>
      <Header />
      <div>
        <LocationAutocomplete value={value} onChange={onChange} onSelect={onSelect} />
      </div>
    </>
  );
};

export default LocationForm;
