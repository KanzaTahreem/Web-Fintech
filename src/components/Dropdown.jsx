import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../styles/dashboard.module.css';
import modalStyles from '../styles/modal.module.css';

const Dropdown = ({ buttonText, menuItems, selectedItem, setSelectedItem, enabled }) => {
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
    if (menuItems && menuItems.length > 0 && !selectedItem) {
      setSelectedItem(buttonText);
    }
  }, []);

  return (
    <div ref={dropdownRef} className={`${styles.box} ${modalStyles.investment_dropdown} ${isOpen ? styles['is-open'] : ''}`}>
      <button type="button" className={`${styles.dropdown} ${modalStyles.dropdown}`} onClick={toggleDropdown}>
        {selectedItem ? selectedItem : buttonText} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <ul className={`${styles.select} ${isOpen ? `${styles['is-open']} ${modalStyles['modal-open']}` : ''}`}>
        {menuItems.map((item, index) => (
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
