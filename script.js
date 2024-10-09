const mail = document.querySelector(".name");
const pwd = document.querySelector(".pwd");

const btnSumbit = document.querySelector(".submit");

const error = document.querySelector(".error");

/**
 *
 * @param {string} text email|password
 * @returns
 */
function validationInputNbrCaractere(text) {
  if (text.length <= 3) return false;
  else return true;
}

/**
 *
 * @param {string} email email
 * @returns
 */
function verifyEmail(email) {
  const masque = /@gmail.com|@yahoo.com/;
  return masque.test(email);
}

/**
 *
 * @param {string} pwd  password
 * @returns
 */
function caracterContain(pwd) {
  const cfr = /[0-9]/;
  const alph = /[a-z]/;

  if (alph.test(pwd)) {
    if (cfr.test(pwd)) return true;
    else return false;
  } else return false;
}

function printError(textcont) {
  error.style.display = "block";
  error.style.textAlign = "center";
  error.style.color = "red";
  error.textContent = textcont;
}

btnSumbit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    validationInputNbrCaractere(mail.value) &&
    validationInputNbrCaractere(pwd.value)
  ) {
    error.style.display = "none";
    if (verifyEmail(mail.value)) {
      error.style.display = "none";
      window.location.href = "index.html"
      if (caracterContain(pwd.value)) {
        error.style.display = "none";
      } else
        printError(
          "le mot de pass doit contenir au moins une lettre et un chifrre"
        );
    } else printError("le mail n'est correct");
  } else {
    printError("password ou email a moins de 4 caractere");
  }
});

