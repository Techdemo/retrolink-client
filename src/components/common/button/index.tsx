import * as React from 'react';

import { ButtonIcon, StyledButton } from './styled';
import { ButtonProps } from './types';

const ButtonContent: React.FC<ButtonProps> = ({ children, icon }) => (
  <>
    {icon && (
      <ButtonIcon>
        {icon}
      </ButtonIcon>
    )}
    <span>{children}</span>
  </>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children, href, icon, iconPosition = 'left', size = 'auto', isLoading,
  onClick, to, urlTarget, isValid, disabled, variant, iconOnlyOnMobile, ...otherProps
}, ref) => {
  const styledButtonProps = {
    disabled,
    isValid,
    iconOnly: !children && icon,
    iconOnlyOnMobile,
    iconPosition,
    variant,
    size,
    ref,
  };

  const buttonContentProps = {
    children,
    icon,
    isLoading,
  };

  return (
    <StyledButton
      onClick={onClick}
      {...styledButtonProps}
      {...otherProps}
    >
      <ButtonContent {...buttonContentProps} />
    </StyledButton>
  );
});
