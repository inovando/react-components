import React, { useMemo, useState } from 'react';
import Link from '@material-ui/core/Link';
import { useDropzone } from 'react-dropzone';
import styles from './styles.module.css';
import { activeStyle, rejectStyle } from './styles';
import Cloud from '../Cloud';
import trash from '../images/trash.svg';
import close from '../images/close.svg';
import { locales } from './i18n';
import template from 'lodash.template';

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function Upload({
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onDelete = () => {},
  onDeleteAll = () => {},
  name = 'upload',
  label = '',
  errorText = '',
  value = [],
  locale = 'pt',
  maxSize = null,
  style = {},
  enableDeleteEvent = false,
  ...rest
}) {
  const [rejectedFiles, setRejectedFiles] = useState([]);

  const maxSizeInBytes = useMemo(() => {
    if (!maxSize) return null;
    return maxSize * (1024 * 1024);
  }, [maxSize]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      onChange([
        ...value,
        ...acceptedFiles.map((file) => {
          if (!file.type.includes('image/')) return file;
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        }),
      ]);
    },
    onDropRejected: (rejectedFiles) => {
      setRejectedFiles(rejectedFiles);
    },
    maxSize: maxSizeInBytes,
    ...rest,
  });

  const thumbs = value.map((file, index) => {
    const href = file.preview?.includes('http')
      ? { onClick: () => window.open(file.preview) }
      : {};

    return (
      <div className={styles.thumb} key={file.name} {...href}>
        <div className={styles.image}>
          {file.preview && <img src={file.preview} />}
          {!file.preview &&
            file.name &&
            file.name.split('.')[file.name.split('.').length - 1]}
        </div>
        <aside>
          <div className={styles.file}>
            <div className={styles.filename}>
              {file.name.split('.').slice(0, -1).join('.')}
            </div>
            <div className={styles.extension}>
              .{file.name.split('.')[file.name.split('.').length - 1]}
            </div>
          </div>
          <div className={styles.size}>{formatBytes(file.size)}</div>
        </aside>
        <button
          onClick={(event) => {
            event.stopPropagation();
            if (enableDeleteEvent) {
              onDelete(file, index);
            } else {
              onChange(value.filter((file, fileIndex) => index !== fileIndex));
            }
          }}
          className={styles.delete}
          type="button"
        >
          <img src={trash} />
        </button>
      </div>
    );
  });

  const conditionalStyle = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject || !!errorText ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, errorText],
  );

  return (
    <section className={styles.container} style={style}>
      <div
        className={styles.box}
        {...getRootProps({ style: conditionalStyle, onBlur, onFocus })}
      >
        <input name={name} {...getInputProps()} />
        <Cloud
          color={
            isDragReject ? '#f44336' : isDragActive ? '#25abf2' : '#CECFD1'
          }
        />
        <p>{label || locales[locale]['label']}</p>
      </div>
      {rejectedFiles.map(({ errors, file: { name } }, rejectedIndex) => (
        <div key={name} className={styles.rejected}>
          <p>
            {template(locales[locale][errors[0].code], {
              interpolate: /{{([\s\S]+?)}}/g,
            })({ maxSize: formatBytes(maxSizeInBytes) })}
            : <strong>{name}</strong>
          </p>
          <button
            onClick={() =>
              setRejectedFiles(
                rejectedFiles.filter((_item, index) => index !== rejectedIndex),
              )
            }
            type="button"
          >
            <img src={close} />
          </button>
        </div>
      ))}
      {errorText && <div className={styles.error}>{errorText}</div>}
      {!!value.length && (
        <Link
          style={{
            marginLeft: 'auto',
            marginTop: '15px',
          }}
          component="button"
          type="button"
          onClick={() => {
            if (enableDeleteEvent) {
              onDeleteAll();
            } else {
              onChange([]);
            }
          }}
        >
          {locales[locale]['remove-all']}
        </Link>
      )}
      <div className={styles.preview}>{thumbs}</div>
    </section>
  );
}

export default Upload;
