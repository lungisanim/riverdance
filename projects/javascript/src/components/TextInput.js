import React from 'react';

function TextInput({ type = 'text', name, label, onChange, required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        required={required}
        className="form-control"
      />
    </div>
  );
}

export default TextInput;