# @inovando/react-components

> :atom: Very opinionated reusable components (some binded to final-form exclusively)

[![NPM](https://img.shields.io/npm/v/@inovando/react-components.svg)](https://www.npmjs.com/package/@inovando/react-components) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
