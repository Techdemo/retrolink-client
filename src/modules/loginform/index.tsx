import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import { Input, InputPassword } from 'common/form';
import MailIcon from 'vectors/mail.svg';
import { Button } from 'common/button';
import { validations } from 'services/validations';
import { useAuth } from 'context/AuthContext';

import { FormContainer } from './styled';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { signInWithEmailAndPassword } = useAuth();
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<LoginFormValues>();
  const enableButton = watch('email') && watch('password');

  const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
    signInWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      alert(res);
      console.log('res', res);
    })
    .catch((err) => {
      alert(err);
      console.log('err', err);
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email", { 
          ...validations.required, 
          ...validations.email }
        )}
        label="Email"
        type="email"
        placeholder="vul hier je email in"
        icon={<MailIcon />}
        error={errors.email}
      />
      <InputPassword
        {...register("password", { 
          ...validations.required, 
          ...validations.minLength, 
          ...validations.password 
        })}
        label="Wachtwoord"
        placeholder="Vul wachtwoord in"
        error={errors.password}
      />
      <Button 
        size="fullWidth" 
        variant="primary" 
        type="submit"
        disabled={Boolean(!enableButton)}
      >
        Log in
      </Button>
    </FormContainer>
  )
}