import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Paragraph, Button, Heading } from 'common';

import {
  ModalActionsContainer,
  ModalCloseIcon,
  ModalBody, 
  ModalHeader, 
  ModalContainer, 
  ModalOverlay,
} from "./styled";

export const Modal = ({ show, onClose, title, bodyText, actions }: ModalWrapperProps) => {
  const [mounted, setMounted] = useState(false);
  const modalRootEl = document.getElementById("modal-root");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalCloseIcon onClick={handleClickClose} />
        </ModalHeader>
        {title && <Heading margin="0" as="h3">{title}</Heading>}
        <ModalBody>
          <Paragraph margin="0">{bodyText}</Paragraph>
          <ModalActionsContainer>
            {actions && actions.map(({ key, variant, onClick, children}) => (
              <Button
                key={key}
                variant={variant}
                onClick={onClick}
              >
                {children}
              </Button>
            ))}
          </ModalActionsContainer>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  ) : null;

  return modalRootEl && mounted ? 
    ReactDOM.createPortal(
      modalContent,
      modalRootEl
    ) : null;
};

type ModalWrapperProps = {
  show: boolean;
  bodyText: string;
  actions?: any;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

