import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { FormFieldDescription } from '../FormFieldDescription';
import { Label } from '../Label';
import { FormFieldContainer, FormFieldsWrapper } from './styled';
import { InputTypes } from '../types';

export const FormField: React.FC<FormFieldProps> = ({
  children, label, name, error, description, isActive 
}) => {
  return (
    <FormFieldContainer>
      <FormFieldsWrapper>
        {label && (
          <Label htmlFor={name} isActive={isActive}>{label}</Label>
        )}
        {children}
      </FormFieldsWrapper>
      {(error || description) && (
        <FormFieldDescription isError={!!error}>
          {error?.message || description || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldContainer>
  );
};

type FormFieldProps = {
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  name: string;
  error?: FieldError;
  description?: string;
  isActive?: boolean;
  type?: InputTypes;
}