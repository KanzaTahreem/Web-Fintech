import React, { useState } from 'react';
import styles from '../styles/tooltip.module.css';

const CustomTooltip = ({ text, children, onClick }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={styles.custom_tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={() => null}
      role="button"
      tabIndex="0"
    >
      {children}
      {isTooltipVisible && <p className={styles.tooltip_text}>{text}</p>}
    </div>
  );
};

export default CustomTooltip;
