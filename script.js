const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passMatchCheck = document.querySelector(".pass-match-check");

const submitBtn = document.querySelector('[type=submit]');

passMatchCheck.textContent = "* Passwords do not match";

function checkPassword()
{
  if (password.value === confirmPassword.value 
    && !(password.value === "" && confirmPassword.value === "")) 
  {
    passMatchCheck.textContent = "Passwords matched";
    passMatchCheck.style.color = "green";
  }
  else
  {
    passMatchCheck.textContent = "* Passwords do not match";
    passMatchCheck.style.color = "red";
  }
}

password.addEventListener('input', () => checkPassword());
confirmPassword.addEventListener('input', () => checkPassword());

