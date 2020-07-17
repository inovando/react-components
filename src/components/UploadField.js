import React from 'react';
import Upload from './Upload';

function UploadField({ input, meta, ...rest }) {
  return (
    <Upload {...input} errorText={meta.touched ? meta.error : ''} {...rest} />
  );
}

export default UploadField;
