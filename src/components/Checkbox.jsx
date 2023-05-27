import React from 'react';
import styles from '../styles/modal.module.css';

const Checkbox = ({ label, checked, onChange }) => {

  const handleCheck = () => {
    onChange(label);
  };

  return (
    <div>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          className={`${checked ? styles.checked : ''} ${styles.checkbox}`}
          onChange={handleCheck}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
