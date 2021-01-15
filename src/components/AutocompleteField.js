import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import debounce from 'lodash.debounce';

const filter = createFilterOptions();

function AutocompleteField({
  input: { onChange, value, ...inputProps },
  meta,
  onSearch = (text) => text,
  delay = 250,
  kind = 'object', // "object" or "value"
  labelAttr = 'label',
  valueAttr = 'value',
  options = [],
  getOptionSelected = (option) => (option ? option[valueAttr] : null),
  getOptionLabel = (option) => option[labelAttr] || '',
  loading = false,
  handleChange = (value) => value,
  enableDinamicOption = false,
  ...rest
}) {
  const showError = !!(meta.touched && meta.error);
  const freeProps = enableDinamicOption
    ? {
        filterOptions: (options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              [labelAttr]: params.inputValue,
              [valueAttr]: null,
            });
          }

          return filtered;
        },
      }
    : {};

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
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
            autoComplete: 'off',
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
      {...freeProps}
    />
  );
}

export default AutocompleteField;
