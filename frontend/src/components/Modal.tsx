import React, { FC } from 'react';

interface ModalProps {
    isOpen: boolean,
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;