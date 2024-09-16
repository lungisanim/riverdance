import React from 'react';
import './terms.css';

function TextArea({ name, label, onChange, required = false }) {
  return (
    <div className="form-group wide-form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <textarea
        id={name}
        name={name}
        onChange={onChange}
        required={required}
        className="form-control custom-textarea wide-textarea"
        rows={5}
      />
    </div>
  );
}

export default TextArea;