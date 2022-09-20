// we have to edit this whole below area

let usernameValid = false;
let emailValid = false;
let passwordValid = false;
let passwordConfirmValid = false;

const form = document.querySelector("#register-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  validateRegistration();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
};

const isValidUsername = (username) => {
  const reg = /[^a-zA-Z0-9\-]/;
  return reg.test(String(username).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (isValidUsername(usernameValue)) {
    setError(username, "Username has invalid character(s).");
  } else {
    setSuccess(username);
    usernameValid = true;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
    emailValid = true;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character");
  } else {
    setSuccess(password);
    passwordValid = true;
  }

  if (passwordConfirmValue === "") {
    setError(passwordConfirm, "Please confirm your password");
  } else if (passwordConfirmValue !== passwordValue) {
    setError(passwordConfirm, "Password doesn't match");
  } else {
    setSuccess(passwordConfirm);
    passwordConfirmValid = true;
  }
};

function validateRegistration() {
  if (
    usernameValid === true &&
    emailValid === true &&
    passwordValid === true &&
    passwordConfirmValid === true
  ) {
    window.location.replace("home.html");
  }
}
