import * as React from 'react';
import { toast } from 'react-toastify';

import { Paragraph } from 'common';

import { ToastContainer, ToastMessageContainer } from './styled';

interface ToastProps {
  type: 'success' | 'error' | 'info';
  message: string;
};

export const displayIcon = (type: Partial<ToastProps>) => {
  switch (type) {
    case 'success':
      return '✔';
    case 'error':
      return '✖';
    case 'info':
      return 'i';
    default:
      return '!';
  }
};

const ToastMessage = ({ type, message }: ToastProps) => {
  toast[type](  
  <ToastContainer>
    <ToastMessageContainer>
      <Paragraph $size={16} margin="0">{message}</Paragraph>
    </ToastMessageContainer>
  </ToastContainer>);
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;