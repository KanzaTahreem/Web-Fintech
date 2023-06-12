import React, { useState } from 'react';
import Popup from './Popup';

const Container = ({ children }) => {
  const [popupScreen, setPopupScreen] = useState(null);

  const displayPopup = (message, closeFunc, cancelFunc) => {
    setPopupScreen(
      <Popup
        message={message}
        onClose={closeFunc}
        onCancel={cancelFunc}
        onCancelText="취소"
      />,
    );
  };

  const closePopup = () => {
    setPopupScreen(null);
  };

  const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, { displayPopup, closePopup }));
  return (
    <>
      {childrenWithProps}
      {popupScreen}
    </>
  );
};

export default Container;
