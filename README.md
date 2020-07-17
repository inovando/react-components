# @inovando/react-components

> :atom: Very opinionated reusable components (some binded to final-form exclusively)

[![NPM](https://img.shields.io/npm/v/@inovando/react-components.svg)](https://www.npmjs.com/package/@inovando/react-components) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Install

```bash
npm install --save @inovando/react-components
# or
yarn add @inovando/react-components
```

## Usage

### `<Upload />`

![Upload Component Demo](docs/component-upload.gif)

```jsx
import React, { Component } from "react";

import { Upload } from "@inovando/react-components";
import "@inovando/react-components/dist/index.css";

const App = () => {
  const [files, setFiles] = useState([]);

  return (
    <Upload
      onChange={(files) => {
        setFiles(files);
      }}
      label="Arraste arquivos ou clique aqui para fazer upload"
      value={files}

      // Accept file type range (Optional)
      // https://react-dropzone.js.org/#section-accepting-specific-file-types
      accept="image/*"

      // in mb (Optional)
      maxSize={3}

      // custom style for container
      style={{ margin: '0 auto', maxWidth: 400 }}
    />
  );
};
```

## [Final-Form](https://final-form.org/react/) Adapters

### Install final-form
```bash
npm install --save final-form react-final-form
# or
yarn add final-form react-final-form
```

### `<UploadField />`

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import { UploadField } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

function ExampleForm() {
  const onSubmit = values => {
    console.log('values:', values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        files: [],
      }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="files"
            component={UploadField}
            label="Arraste arquivos ou clique aqui para fazer upload"
            validate={(value) =>
              value.length ? undefined : 'Campo obrigatório'
            }
          />
          <button disabled={submitting} type="submit">
            submit
          </button>
        </form>
      )}
    />
  );
}
```

## License

MIT © [inovando](https://github.com/inovando)
