import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const MatAutocomplete = ({ getInputProps, suggestions, variant }) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      className="Place-autocomplete"
      options={suggestions}
      getOptionLabel={(option) => option.description}
      style={{ width: 500 }}
      renderInput={(params) => <TextField {...params} {...getInputProps} variant={variant} />}
    />
  );
};

export default MatAutocomplete;
