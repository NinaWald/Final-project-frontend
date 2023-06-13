import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const PopupTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PopupContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const PopupLink = styled.a`
  color: #669999;
  text-decoration: none;
`;

const PopupButton = styled.button`
  background-color: #669999;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const PopupMessage = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem('popupClosed');
    if (!popupClosed) {
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    localStorage.setItem('popupClosed', 'true');
    onClose();
  };

  if (!showPopup) {
    return null;
  }

  return (
    <PopupWrapper>
      <PopupTitle>Get 10% off when becoming a member!</PopupTitle>
      <PopupContent>
        Click <PopupLink href="/member">here</PopupLink> to go to the member page.
      </PopupContent>
      <PopupButton type="button" onClick={handlePopupClose}>
        Close
      </PopupButton>
    </PopupWrapper>
  );
};

export default PopupMessage;

