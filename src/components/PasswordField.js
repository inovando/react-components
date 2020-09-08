import React, { useState } from 'react';
import {
  FormControl,
  makeStyles,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

function PasswordField({ input, meta, label, ...rest }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <FormControl className={classes.textField} variant="outlined">
      <InputLabel
        error={!!(meta.touched && meta.error)}
        htmlFor="outlined-adornment-password"
      >
        {label}
      </InputLabel>
      <OutlinedInput
        label={label}
        type={show ? 'text' : 'password'}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        error={!!(meta.touched && meta.error)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShow(!show)}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        {...input}
        {...rest}
      />
      {meta.touched && meta.error && (
        <FormHelperText error={true} id="component-error-text">
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordField;
