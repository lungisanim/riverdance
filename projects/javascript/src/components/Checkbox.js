import React from 'react';

function Checkbox({ name, options, onChange }) {
  return (
    <div className="form-group">
      {options.map((option) => (
        <div key={option.value} className="form-check">
          <input
            type="checkbox"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            onChange={onChange}
            className="form-check-input"
          />
          <label htmlFor={`${name}-${option.value}`} className="form-check-label">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;