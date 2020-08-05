# @inovando/react-components

> :atom: Very opinionated reusable components (some binded to final-form exclusively)

[![NPM](https://img.shields.io/npm/v/@inovando/react-components.svg)](https://www.npmjs.com/package/@inovando/react-components) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[Demo](https://inovando.github.io/react-components)

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
      value={files}

      // This overrides "locale" prop
      label="Arraste arquivos ou clique aqui para fazer upload"

      // Only "pt" or "en" yet, defaults to "pt"
      locale="pt"

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

### `<UploadField />` (based on [React Dropzone](https://react-dropzone.js.org/))
> [Check out "initialValues" example](https://inovando.github.io/react-components/)

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

### `<MoneyField />` (based on [React Number Format](https://github.com/s-yadav/react-number-format))
> [Check out "initialValues" example](https://inovando.github.io/react-components/)

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import { MoneyField } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

function ExampleForm() {
  const onSubmit = values => {
    console.log('values:', values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        money: 0.5,
      }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="money"
            component={MoneyField}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Valor (R$)"
            validate={(value) => (value ? undefined : 'Campo obrigatório')}
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

### `<AutocompleteField />` (based on [Material-UI Autocomplete](https://material-ui.com/api/autocomplete/))
> [Check out "initialValues" example](https://inovando.github.io/react-components/)

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import { AutocompleteField } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function ExampleForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = values => {
    console.log('values:', values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="state"
            component={AutocompleteField}
            fullWidth
            margin="normal"
            variant="outlined"
            label="Estado"
            options={[
              { label: 'Paraná', value: 'PR'},
              // ...
            ]}
            handleChange={(value) => {
              console.log('value:', value);
            }}
            onSearch={async (text) => {
              setLoading(true);
              await sleep(1000);
              setLoading(false);
            }}
            kind="value" // expects "initialValue" as anything but an object, defaults to "object"
            delay={500} // "onSearch" debounce delay in ms, defaults to 250
            loading={loading}
            validate={(value) => (value ? undefined : 'Campo obrigatório')}
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

### `<DateField />` (based on [Material-UI Pickers](https://material-ui-pickers.dev/))
> [Check out "initialValues" example](https://inovando.github.io/react-components/)

```jsx
import React from 'react';
import { Form, Field } from 'react-final-form';
import { DateField } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

// Material-UI Pickers Dependencies
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptLocale from 'date-fns/locale/pt';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function ExampleForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = values => {
    console.log('values:', values)
  }

  return (
     // this tag can be at your global scope, such as "App.js"
     <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Field
              name="dataInicio"
              component={DateField}
              minDate={new Date()} // final-form validation logic must be at "validate" prop
              fullWidth
              margin="normal"
              variant="outlined"
              label="Data de início"
              validate={(value) =>
                value && isBefore(subDays(new Date(), 1), parseISO(value))
                  ? undefined
                  : 'Campo inválido'
              }
            />
            <button disabled={submitting} type="submit">
              submit
            </button>
          </form>
        )}
      />
    </MuiPickersUtilsProvider>
  );
}
```

## License

MIT © [inovando](https://github.com/inovando)
