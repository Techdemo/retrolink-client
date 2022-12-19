import * as React from 'react';

import { FormField } from '../FormField';
import { StyledInput, InputWrapper, InputIcon } from './styled';
import { InputProps } from '../types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  autoFocus, disabled, name, label, icon, iconPosition = 'left', error, dirty, onFocus, onBlur,
  readOnly, description, handleIconClick, onChange, as, variant, type, ...props
}, ref) => {
  const [isActive, setIsActive] = React.useState(Boolean(props?.defaultValue));
  const IconComponent = icon as React.ElementType;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsActive(Boolean(value));

    if (onChange) onChange(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(true);

    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) setIsActive(false);
    if (onBlur) onBlur(event);
  };

  return (
    <FormField {...{ name, label, error, description, isActive, variant, type }}>
      <InputWrapper iconPosition={iconPosition}>
        <StyledInput
          {...{
            ...{ autoFocus, disabled, name, readOnly },
            ...(ref && { ref }),
          }}
          id={name}
          error={!!error}
          isActive={isActive}
          hasIcon={!!icon}
          onFocus={handleFocus}
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
          variant={variant}
          {...props}
        />
        {icon && (
          <InputIcon
            readOnly={!handleIconClick}
            onClick={handleIconClick}
            disabled={disabled}
            isActive={isActive}
          >
            {/* @ts-ignore */}
            {IconComponent}
          </InputIcon>
        )}
      </InputWrapper>
    </FormField>
  );
});
