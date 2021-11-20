import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

function Alert({ alert, setAlert }) {
  // pass message
  // Optionally, pass error (boolean) to change to error style
  // Optionally, pass position to change default position from the top

  useEffect(() => {
    if (alert.status) {
      setTimeout(() => {
        setAlert({ ...alert, status: false });
      }, 5000);
    }
  }, [alert, setAlert]);
  return (
    <CSSTransition
      in={alert.status}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <AlertContainer
        error={alert.error}
        position={alert.position}
        status={alert.status}
      >
        {alert.message}
      </AlertContainer>
    </CSSTransition>
  );
}

export default Alert;

const AlertContainer = styled.div`
  min-height: 40px;
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 5px;
  top: ${({ position }) => position || '10%'};
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 700;
  color: ${({ error }) => (error ? '#e06b6b' : '#6bbd9b')};
  background-color: ${({ error }) =>
    error ? 'rgb(241, 241, 241)' : 'rgb(237, 248, 246)'};
  border-radius: 4px;
  border: ${({ error }) => (error ? '1px solid #e06b6b' : '1px solid #5fe0aa')};
  box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.15);
`;
