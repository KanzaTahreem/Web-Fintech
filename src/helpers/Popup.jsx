import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import error from '../assets/images/error.svg';
import saved from '../assets/images/saved.svg';
import { SAVED } from '../utils/messages';
import styles from '../styles/popup.module.css';

const Popup = ({
  message, onClose, onCancel, onCancelText,
}) => (
  <div className={styles.popup}>
    <div className={styles.popup_content}>
      <div className={styles.popup_header}>
        {message === SAVED ? <img src={saved} alt="saved_icon" /> : <img src={error} alt="error_icon" />}

        <HiXMark onClick={onCancel || onClose} />
      </div>
      <div className={styles.popup_footer}>
        <p>{message}</p>
        <div>
          <button type="submit" className={styles.popup_btn} onClick={onClose}>확인</button>
          {onCancel && (
          <button type="submit" className={`${styles.popup_btn} ${styles.popup_cancel}`} onClick={onCancel}>
            {onCancelText}
          </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Popup;
