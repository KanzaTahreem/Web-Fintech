import React, { useState } from "react";
import styles from "../styles/modal.module.css";

const Checkbox = ({ label, checked }) => {

  const defaultChecked = checked !== undefined ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          className={`${isChecked ? styles.checked : ""} ${styles.checkbox}`}
          onChange={handleCheck}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
