import React from 'react';
import styles from '../styles/app.module.css';

const Checkbox = ({
  label, checked = false, onChange, getClassName, disabled,
}) => {
  const handleCheck = () => {
    onChange(label);
  };

  return (
    <div>
      <label className={styles.label}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          className={getClassName ? getClassName() : `${checked ? styles.checked : ''} ${styles.checkbox}`}
          onChange={handleCheck}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
