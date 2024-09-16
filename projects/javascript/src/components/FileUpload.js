import React from 'react';

function FileUpload({ name, label, accept, onChange, required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        id={name}
        name={name}
        accept={accept}
        onChange={onChange}
        required={required}
        className="form-control-file"
      />
    </div>
  );
}

export default FileUpload;