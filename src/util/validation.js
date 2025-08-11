export function validateBio(bio, setBioError) {
  if (bio.length > 150) {
    setBioError("Bio must be 150 characters or less.");
    return false;
  }
  return true;
}

export const validateUsername = (name, setUsernameError) => {
  const regex =
    /^(?=.{3,20}$)(?!.*[._]{2})[a-zA-Z0-9](?:[a-zA-Z0-9._]*[a-zA-Z0-9])?$/;
  if (!regex.test(name)) {
    setUsernameError(
      "Username must be 3–20 chars, letters/numbers/._ only, no spaces or special chars.",
    );
    return false;
  }
  setUsernameError("");
  return true;
};

export const validateEmail = (email, setEmailError) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    setEmailError("Invalid email format.");
    return false;
  }
  setEmailError("");
  return true;
};

export const validatePassword = (password, setPasswordError) => {
  if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters long.");
    return false;
  }
  setPasswordError("");
  return true;
};

export const validateConfirmPassword = (
  password,
  confirmPassword,
  setError,
) => {
  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return false;
  }
  setError("");
  return true;
};
