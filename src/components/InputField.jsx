import React from 'react';

const InputField = ({text, placeholder, value, enabled, onChange}) => {
  return (
    <div>
      <label htmlFor="text">{text}</label>
      <input type="text" name="text" placeholder={placeholder} value={value} onChange={onChange} disabled={enabled > 0 ? true : false} />
    </div>
  );
}

export default InputField;
