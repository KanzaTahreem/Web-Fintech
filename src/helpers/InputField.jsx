import React from 'react';

const InputField = ({
  text, placeholder, value, enabled, onChange, name,
}) => (
  <div>
    <label htmlFor={name}>{text}</label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={enabled > 0}
    />
  </div>
);

export default InputField;
