import React from 'react';
import './terms.css';

function TextArea({ name, label, onChange, required = false }) {
  return (
    <div className="form-group wide-form-group">
      <textarea
        id={name}
        name={name}
        onChange={onChange}
        required={required}
        className="form-control custom-textarea"
        rows={5}
      />
    </div>
  );
}

export default TextArea;