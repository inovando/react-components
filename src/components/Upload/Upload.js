import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles.module.css";

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

function Upload({ onChange, label = '', ...rest }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) => {
          if (!file.type.includes("image/")) return file;
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
    ...rest
  });

  const thumbs = files.map((file) => {
    return (
      <div
        className={styles.thumb}
        key={file.name}
      >
        <div className={styles.image} style={file.preview && { backgroundImage: `url(${file.preview})` }}>
          {!file.preview && file.name && file.name.split('.')[file.name.split('.').length - 1]}
        </div>
        <aside>
          <div className={styles.file}>{file.name}</div>
          <div className={styles.size}>
            {formatBytes(file.size)}
          </div>
        </aside>
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <div className={`${styles.box} ${isDragActive && styles.active}`} {...getRootProps()}>
        <input {...getInputProps()} />
        <div>
          <p>{label}</p>
        </div>
      </div>
      <div className={styles.preview}>{thumbs}</div>
    </section>
  );
}

export default Upload;
