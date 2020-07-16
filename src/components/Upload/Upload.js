import React, { useState, useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles.module.css";
import { activeStyle, rejectStyle } from "./styles";
import Cloud from "../Cloud";
import trash from "../images/trash.svg";

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function Upload({ onChange, label = "", errorText = "", ...rest }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onChange(files);
  }, [files]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          if (!file.type.includes("image/")) return file;
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
    ...rest,
  });

  const thumbs = files.map((file, index) => {
    return (
      <div className={styles.thumb} key={file.name}>
        <div className={styles.image}>
          {file.preview && <img src={file.preview} />}
          {!file.preview &&
            file.name &&
            file.name.split(".")[file.name.split(".").length - 1]}
        </div>
        <aside>
          <div className={styles.file}>
            <div className={styles.filename}>
              {file.name.split(".").slice(0, -1).join(".")}
            </div>
            <div className={styles.extension}>
              .{file.name.split(".")[file.name.split(".").length - 1]}
            </div>
          </div>
          <div className={styles.size}>{formatBytes(file.size)}</div>
        </aside>
        <button
          onClick={() =>
            setFiles(files.filter((file, fileIndex) => index !== fileIndex))
          }
          className={styles.delete}
          type="button"
        >
          <img src={trash} />
        </button>
      </div>
    );
  });

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  return (
    <section className={styles.container}>
      <div className={styles.box} {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Cloud
          color={
            isDragReject ? "#f44336" : isDragActive ? "#25abf2" : "#CECFD1"
          }
        />
        <p>{label}</p>
      </div>
      <div className={styles.preview}>{thumbs}</div>
      {errorText && <div className={styles.error}>{errorText}</div>}
    </section>
  );
}

export default Upload;
