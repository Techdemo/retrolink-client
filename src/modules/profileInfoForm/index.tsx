import * as React from 'react';
import { useForm } from "react-hook-form";

import { Input } from 'common';
import { validations } from 'services/validations';
import { useAuth } from 'context/AuthContext';

import { ProfileDataFormContainer, PencilIcon } from './styled';

type ProfileInfoFormValues = {
  email: string;
  displayName: string;
};

export const ProfileDataForm = () => {
  const { authUser } = useAuth();
  const { register, formState: { errors } } = useForm<ProfileInfoFormValues>();

  return (
    <ProfileDataFormContainer>
      <Input
        {...register("email", {
          ...validations.required, 
          ...validations.email }
        )}
        // @ts-ignore
        defaultValue={authUser.email}
        label="Email"
        type="email"
        placeholder="vul hier je email in"
        error={errors.email}
        disabled
        iconPosition='right'
        icon={<PencilIcon />}
      />
      <Input
        {...register("displayName", {
          ...validations.required, 
          ...validations.email }
        )}
        label="Gebruikersnaam"
        type="text"
        placeholder="Kies een unieke gebruikersnaam"
        error={errors.displayName}
        disabled
        // @ts-ignore
        defaultValue={authUser.displayName}
        iconPosition='right'
        icon={<PencilIcon />}
      />
    </ProfileDataFormContainer>
  )
}