const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");


const apellidoValue = apellido.value.trim();

//Validacion de Contraseña

function validarContraseña() {
  contraseña.addEventListener("input", () => {
    const contraseñaValue = contraseña.value.trim();
    if (contraseñaValue.length >= 8 && contraseñaValue.length <= 15) {
      set_correct(contraseña);
    } else if (contraseñaValue === "") {
      set_default(contraseña);
    } else {
      set_error(contraseña, "La contraseña debe tener al menos 8-20 digitos");
    }
  });
}
// Validacion de Nombre

function validarNombre() {
  nombre.addEventListener("input", () => {
    const nombreValue = nombre.value.trim();
    const regexName = /^[a-zA-Z '.-]*$/;

    if (nombreValue.length >= 2 && regexName.test(nombreValue)) {
      set_correct(nombre);
      console.log(regexName.test(nombreValue));
    } else if (nombreValue === "") {
      set_default(nombre);
    } else {
      set_error(nombre, "Por favor rellena el campo");
    }
  });
}
// Validacion de Email
function validarEmail() {
  email.addEventListener("input", () => {
    const emailValue = email.value.trim();
    // tuEmail = emailValue.toString();
    const regexEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
    if (regexEmail.test(emailValue)) {
      set_correct(email);
      console.log("ajjdja");
    } else if (emailValue === "") {
      set_default(email);
    } else {
      set_error(email, "El Email Ingresado es incorrecto");
    }
  });
}

// Funciones de Errores y Validaciones

function set_default(input) {
  const grupoCampos = input.parentElement;
  const parrafo = grupoCampos.querySelector("p");
  parrafo.style.display = "none";
  input.style.border = "";
  parrafo.innerText = "";
}
function set_error(input, msj) {
  const formCotrol = input.parentElement;
  const parrafo = formCotrol.querySelector("p");
  input.style.border = "2px solid rgb(190, 36, 9)";
  parrafo.style.display = "block";
  parrafo.innerText = msj;
}
function set_correct(input) {
  const grupoCampos = input.parentElement;
  const parrafo = grupoCampos.querySelector("p");
  input.style.border = "2px solid rgb(2, 184, 2)";
  parrafo.style.display = "none";
  parrafo.innerText = "";
}

validarContraseña()
validarEmail()
validarNombre()