/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/app.module.css';

const Dropdown = ({
  buttonText, filterItems, selectedItem, setSelectedItem, enabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (enabled !== undefined && enabled === 0) {
      return;
    }
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (filterItems && filterItems.length > 0 && !selectedItem) {
      setSelectedItem(buttonText);
    }
  }, []);

  return (
    <div ref={dropdownRef} className={`${styles.box} ${styles.investment_dropdown} ${isOpen ? styles['is-open'] : ''}`}>
      <button type="button" className={`${styles.dropdown} ${styles.dropdown}`} onClick={toggleDropdown}>
        {selectedItem || buttonText}
        {' '}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <ul className={`${styles.select} ${isOpen ? `${styles['is-open']} ${styles['modal-open']}` : ''}`}>
        {filterItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? styles.selectedOption : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
