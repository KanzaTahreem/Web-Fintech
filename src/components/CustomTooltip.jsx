import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    >
      {children}
      {isTooltipVisible && <p className={styles.tooltip_text}>{text}</p>}
    </div>
  );
};

CustomTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default CustomTooltip;
