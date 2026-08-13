const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateData = (email, password) => {
  const isEmailValid = emailRegex.test(email);
  const isPasswordVaid = passwordRegex.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordVaid) return "Password is not valid";

  return null;
};
