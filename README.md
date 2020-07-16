# @inovando/react-components

> :atom: Very opinionated reusable components (some binded to final-form exclusively)

[![NPM](https://img.shields.io/npm/v/@inovando/react-components.svg)](https://www.npmjs.com/package/@inovando/react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @inovando/react-components
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
      accept="image/*" // accept only images (Optional)
      maxSize={3} // in mb (Optional)
    />
  );
};
```

## License

MIT © [inovando](https://github.com/inovando)
