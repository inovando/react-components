import React from 'react'

import { Upload } from '@inovando/react-components'
import '@inovando/react-components/dist/index.css'

const App = () => {
  return <div>
    <h1>Inovando React Components</h1>
    <Upload
      onChange={files => {
        console.log('files:', files)
      }}
      label="Arraste arquivos ou clique aqui para fazer upload"
    />
  </div>
}

export default App
