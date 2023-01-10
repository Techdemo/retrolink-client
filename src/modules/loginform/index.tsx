import { useRouter } from "next/router";
import { useEffect } from 'react';
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
  const { signInWithEmailAndPassword, verifyUser, authUser } = useAuth();
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<LoginFormValues>();
  const enableButton = watch('email') && watch('password');
  const router = useRouter();

  useEffect(() => {
    if (authUser) {
      router.push('/profile');
    }
  }, [authUser]);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data: LoginFormValues) => {
    signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      verifyUser();
      router.push('/profile');
    })
    .catch((err) => {
      alert(err);
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