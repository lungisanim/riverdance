import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ name, options, onChange }) {
  return React.createElement(
    'div',
    { className: 'form-group' },
    options.map((option) =>
      React.createElement(
        'div',
        { key: option.value, className: 'form-check' },
        React.createElement('input', {
          type: 'checkbox',
          id: `${name}-${option.value}`,
          name: name,
          value: option.value,
          onChange: onChange,
          className: 'form-check-input',
        }),
        React.createElement(
          'label',
          { htmlFor: `${name}-${option.value}`, className: 'form-check-label' },
          option.label
        )
      )
    )
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;