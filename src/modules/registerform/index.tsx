import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router';

import { Input, InputPassword } from 'common/form';
import { Button } from 'common/button';
import PersonIcon from 'vectors/person.svg';
import MailIcon from 'vectors/mail.svg';
import { validations } from 'services/validations';
import { useAuth } from 'context/AuthContext';

import { FormContainer, HeadingContainer } from './styled';

type RegisterFormValues = {
  email: string;
  password: string;
  displayName: string;
  password2: string;
};

type RegisterUserValues = {
  email: string;
  password: string;
  displayName: string;
};

// TODO:
// - ADD LOADING STATE
// - PLACE THE TYPES IN A SEPERATE FILE
// - ADD TOAST MESSAGE

export const RegisterForm = () => {
  const router = useRouter();
  const [registerFailed, setRegisterFailed] = React.useState<boolean>(false);
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<RegisterFormValues>();
  const enableButton = watch('email') && watch('password') && watch('displayName') && watch('password2');
  const { createUserWithEmailAndPassword, sendUserVerificationEmail, signInWithEmailAndPassword } = useAuth();

  const validatePasswords = (values: Partial<RegisterFormValues>) => {
    if (values.password !== values.password2) {
      return {
        validated: false,
        message: 'Zorg dat de wachtwoorden overeen komen',
      };
    }

    return {
      validated: true,
      message: 'Passwords match',
    };
  };

  const handleFormRegistration: SubmitHandler<RegisterUserValues> = (data) => {
    // if (loading) return;

    const validatedPassword: {validated: boolean, message: string} = validatePasswords(data);
    if (validatedPassword.validated) {

      createUserWithEmailAndPassword(data.email, data.password, data.displayName)
        .then((response) => {
          signInWithEmailAndPassword(data.email, data.password)
          .then(() => {
            sendUserVerificationEmail();
            router.push('/profile');
          })
        })
        .catch((error) => {
          alert('error')
        })
    } else {
      setRegisterFailed(true);
      setError('password', { type: 'required', message: validatedPassword.message });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleFormRegistration)}>
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
      <Input 
        {...register("displayName", { 
          ...validations.required, 
          ...validations.minLength 
        })}
        label="Gebruikersnaam"
        type="text"
        placeholder="kies een unieke gebruikersnaam"
        icon={<PersonIcon />}
        error={errors.displayName}
      />
      <InputPassword
        {...register("password", { 
          ...validations.required, 
          ...validations.minLength, 
          ...validations.password 
        })}
        label="Wachtwoord"
        placeholder="Kies een wachtwoord"
        error={errors.password}
      />
      <InputPassword
        {...register("password2", {
          ...validations.required, 
          ...validations.minLength, 
          ...validations.password  
        })}
        label="Bevestig wachtwoord"
        placeholder="Zorg dat je wachtwoord overeenkomt"
        error={errors.password}
      />
      <Button 
        size="fullWidth" 
        variant="primary" 
        type="submit"
        disabled={Boolean(!enableButton)}
      >
        Registreer
      </Button>
    </FormContainer>
  )
}