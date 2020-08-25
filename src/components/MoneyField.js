import React from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

function MoneyField({
  input: { onChange, ...inputProps },
  meta,
  handleChange = (value) => value,
  ...rest
}) {
  const showError = !!(meta.touched && meta.error);

  return (
    <NumberFormat
      {...inputProps}
      customInput={TextField}
      helperText={showError ? meta.error : undefined}
      error={showError}
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
      decimalScale={2}
      fixedDecimalScale
      prefix={'R$ '}
      onValueChange={({ floatValue }) => {
        onChange(floatValue);
        handleChange(floatValue);
      }}
      {...rest}
    />
  );
}

export default MoneyField;
