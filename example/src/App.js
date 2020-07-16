import React, { useState } from 'react';

import { Upload } from '@inovando/react-components';
import '@inovando/react-components/dist/index.css';

const App = () => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <h1>Inovando React Components</h1>
      <Upload
        onChange={(files) => {
          setFiles(files);
        }}
        label="Arraste arquivos ou clique aqui para fazer upload"
        value={files}
        accept="image/*" // accept only images (Optional)
        maxSize={3} // in mb (Optional)
      />
    </div>
  );
};

export default App;
