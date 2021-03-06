export const validateEmail = (email) => (
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ));

export const validatePassword = (password) => String(password).length >= 6;

export const resetPassword = (setForm) => {
  setForm((prevState) => ({
    ...prevState,
    password: '',
  }));
};

export const resetPasswords = (setForm) => {
  setForm((prevState) => ({
    ...prevState,
    password: '',
    password2: '',
  }));
};
