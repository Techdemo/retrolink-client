export const validations = {
  required: {
    required: 'Dit veld is verplicht',
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Dit is geen valide e-mailadres',
    },
  },
  password: {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,99}$/,
      message: 'Wachtwoord moet tenminste 8 tekens, 1 hoofdletter, 1 cijfer en 1 speciaal teken bevatten',
    },
  },
  minLength: {
    pattern: {
      value: /[0-9a-zA-Z]{6,}/,
      message: 'Needs to contain at least 6 characters.',
    }
  },
};
