import { FieldError } from 'react-hook-form';

export type InputTypes = 'password' | 'text' | 'textarea' | 'input' | 'number' | 'email' | 'date';

export type DefaultInputProps = {
  name: string;
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  autoComplete?: string;
  placeholder?: string;
  iconPosition?: 'left' | 'right';
  width?: string;
  value?: string;
  type?: InputTypes;
  as?: string;
  variant?: 'white';
  handleIconClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export type FormFieldProps = {
  name?: string;
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  description?: string;
  error?: FieldError;
  dirty?: boolean;
  direction?: 'horizontal' | 'vertical';
};

export type InputProps =
  DefaultInputProps
  & FormFieldProps;