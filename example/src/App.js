import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import {
  Upload,
  UploadField,
  MoneyField,
  AutocompleteField,
} from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

const provinces = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

const App = () => {
  const [files, setFiles] = useState([]);

  const onSubmit = (values) => {
    console.log('values:', values);
  };

  const options = Object.keys(provinces).map((key) => ({
    label: provinces[key],
    value: key,
  }));

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Inovando React Components</h1>
      <div className="container">
        <h2>Upload Component</h2>

        <Upload
          onChange={(files) => {
            setFiles(files);
          }}
          label="Arraste arquivos ou clique aqui para fazer upload"
          value={files}
          accept="image/*" // accept only images (Optional)
          maxSize={3} // in mb (Optional)
          style={{ margin: '0 auto', maxWidth: 400 }}
        />

        <h2 style={{ textAlign: 'center', marginTop: 80 }}>
          <a
            href="https://final-form.org/react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Final-Form
          </a>{' '}
          Adapters
        </h2>
        <h3>UploadField</h3>

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
                style={{ margin: '0 auto', maxWidth: 400 }}
              />
              <button disabled={submitting} type="submit">
                submit
              </button>
            </form>
          )}
        />

        <h3 style={{ marginTop: 80 }}>
          UploadField (with{' '}
          <a href="https://final-form.org/docs/react-final-form/types/FormProps#initialvalues">
            initialValues
          </a>
          )
        </h3>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            files: [
              {
                name: 'beach.jpg',
                size: 1902381,
                preview:
                  'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',
              },
            ],
          }}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <pre style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {JSON.stringify(values, null, 2)}
              </pre>
              <Field
                name="files"
                component={UploadField}
                label="Arraste arquivos ou clique aqui para fazer upload"
                validate={(value) =>
                  value.length ? undefined : 'Campo obrigatório'
                }
                style={{ margin: '0 auto', maxWidth: 400 }}
              />
              <button disabled={submitting} type="submit">
                submit
              </button>
            </form>
          )}
        />

        <h3 style={{ marginTop: 80 }}>MoneyField</h3>

        <Form
          onSubmit={onSubmit}
          initialValues={{
            anotherMoney: 0.5,
            thousandExample: 1000,
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
              <Field
                name="anotherMoney"
                component={MoneyField}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Valor (R$) (with initialValues as 0.5)"
                validate={(value) => (value ? undefined : 'Campo obrigatório')}
              />
              <Field
                name="thousandExample"
                component={MoneyField}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Valor (R$) (with initialValues as 1000)"
                validate={(value) => (value ? undefined : 'Campo obrigatório')}
              />
              <button disabled={submitting} type="submit">
                submit
              </button>
            </form>
          )}
        />

        <h3 style={{ marginTop: 80 }}>AutocompleteField</h3>

        <Form
          onSubmit={onSubmit}
          initialValues={{
            anotherState: { value: 'PR', label: 'Paraná' },
            stateAsValue: 'PR',
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Field
                name="state"
                component={AutocompleteField}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Estado"
                onSearch={(text) => {
                  console.log('text:', text);
                }}
                options={options}
                validate={(value) => (value ? undefined : 'Campo obrigatório')}
              />
              <Field
                name="anotherState"
                component={AutocompleteField}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Estado (with initialValues as an object)"
                onSearch={(text) => {
                  console.log('text:', text);
                }}
                options={options}
                validate={(value) => (value ? undefined : 'Campo obrigatório')}
              />
              <Field
                name="stateAsValue"
                component={AutocompleteField}
                fullWidth
                margin="normal"
                variant="outlined"
                kind="value"
                label="Estado (with initialValues as a 'string' or 'number')"
                onSearch={(text) => {
                  console.log('text:', text);
                }}
                options={options}
                validate={(value) => (value ? undefined : 'Campo obrigatório')}
              />
              <button disabled={submitting} type="submit">
                submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default App;
