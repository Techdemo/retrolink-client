import React from 'react';

import { Input } from 'common/form';
import { LockClosedIconStyled, LockOpenIconStyled } from './styled';

import { InputProps, InputTypes } from '../types';

type InputPasswordProps = InputProps & {
  register?: (ref: (HTMLSelectElement & HTMLTextAreaElement & HTMLInputElement) | (HTMLSelectElement & HTMLTextAreaElement & HTMLInputElement) | null) => void;
}

export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(({ register, ...props }, ref) => {
  const [inputType, setInputType] = React.useState<InputTypes>('password');

  return (
    <Input
      ref={ref}
      {...props}
      type={inputType}
      autoComplete="new-password"
      iconPosition="left"
      icon={inputType === 'password' ? <LockClosedIconStyled /> : <LockOpenIconStyled />}
      handleIconClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
    />
  );
});