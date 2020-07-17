import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import { Upload, UploadField } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

const App = () => {
  const [files, setFiles] = useState([]);

  const onSubmit = (values) => {
    console.log('values:', values);
  };

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

        <h3>
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
      </div>
    </div>
  );
};

export default App;
