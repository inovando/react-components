import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import debounce from 'lodash.debounce';

function AutocompleteField({
  input: { onChange, value, ...inputProps },
  meta,
  onSearch = (text) => text,
  delay = 250,
  kind = 'object', // "object" or "value"
  options = [],
  getOptionSelected = (option) => option.value,
  loading = false,
  handleChange = (value) => value,
  ...rest
}) {
  const showError = !!(meta.touched && meta.error);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label || ''}
      getOptionSelected={(option) => {
        if (kind === 'object') {
          return getOptionSelected(option) === getOptionSelected(value);
        }

        return getOptionSelected(option) === value;
      }}
      loading={loading}
      autoHighlight
      renderInput={(params) => (
        <TextField
          {...params}
          helperText={showError ? meta.error : undefined}
          error={showError}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'no',
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          {...inputProps}
          {...rest}
        />
      )}
      onChange={(_event, value) => {
        if (kind === 'object') {
          onChange(value);
          handleChange(value);
          return;
        }

        onChange(getOptionSelected(value));
        handleChange(getOptionSelected(value));
      }}
      onInputChange={debounce((_event, value) => {
        if (!meta.visited) return;
        onSearch(value);
      }, delay)}
      value={
        kind === 'object'
          ? value || null
          : options.find((item) => getOptionSelected(item) === value) || null
      }
      {...rest}
    />
  );
}

export default AutocompleteField;
