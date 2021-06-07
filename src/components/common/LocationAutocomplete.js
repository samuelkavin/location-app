import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import MatAutocomplete from '../material/MatAutocomplete';

const LocationAutocomplete = ({ value, onChange, onSelect }) => {
  return (
    <>
      <PlacesAutocomplete value={value} onChange={onChange} onSelect={onSelect}>
        {({ getInputProps, suggestions }) => (
          <div>
            <MatAutocomplete
              getInputProps={getInputProps({
                placeholder: 'Select & press enter to save the search history',
              })}
              suggestions={suggestions}
              variant="outlined"
            />
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationAutocomplete;
