import styled from 'styled-components';
import { Heading } from 'common';
import CloseIcon from 'vectors/close.svg';

export const ModalActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

export const ModalCloseIcon = styled(CloseIcon)`
  width: 20px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: 48px;
  max-width: 480px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 12px;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 24px 48px 48px 48px;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalTitle = styled(Heading)``;