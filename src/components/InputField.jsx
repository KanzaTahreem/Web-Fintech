import React from 'react';

const InputField = ({text, placeholder}) => {
  return (
    <div>
      <label htmlFor="text">{text}</label>
      <input type="text" name="text" placeholder={placeholder} />
    </div>
  );
}

export default InputField;
