import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

function DateField({
  input: { onChange, value, ...inputProps },
  meta,
  variant,
  ...rest
}) {
  const showError = !!(meta.touched && meta.error);

  return (
    <KeyboardDatePicker
      {...inputProps}
      autoOk
      helperText={showError ? meta.error : undefined}
      error={showError}
      inputVariant={variant}
      format="dd/MM/yyyy"
      value={value || null}
      onChange={(date) => {
        Date.parse(date) ? onChange(date.toISOString()) : onChange(null);
      }}
      {...rest}
    />
  );
}

export default DateField;
