const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const submit = document.querySelector(".input_submit")




  document.addEventListener('input', (e)=> {
    e.preventDefault()
    if(validarNombre() && validarEmail() && validarTelefono() && validarContraseña()){
      submit.removeAttribute('disabled')
    }else {
      submit.setAttribute('disabled', true)
    }
  })



function validarNombre(){
    
    const nombreValue = nombre.value.trim();
    const regexName = /^[a-zA-Z '.-]*$/;

    if (nombreValue.length >= 2 && nombreValue.length <= 20  && regexName.test(nombreValue)) {
      set_correct(nombre);
      //console.log(regexName.test(nombreValue));
      return true
  
    } else if (nombreValue === "") {
      set_default(nombre);
      
      return false
    } else {
      set_error(nombre, "Por favor rellena el campo");
      return false
      
    }
}
function validarEmail() {
  
    const emailValue = email.value.trim();
    // tuEmail = emailValue.toString();
    const regexEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
    if (regexEmail.test(emailValue)) {
      set_correct(email);
      return true
    } else if (emailValue === "") {
      set_default(email);
      return false
    } else {
      set_error(email, "El Email Ingresado es incorrecto");
      return false
    }
}
//Validacion de Contraseña
function validarContraseña() {
    const contraseñaValue = contraseña.value.trim();
    if (contraseñaValue.length >= 8 && contraseñaValue.length <= 15) {
      set_correct(contraseña);
      return true
    } else if (contraseñaValue === "") {
      set_default(contraseña);
      return false
    } else {
      set_error(contraseña, "La contraseña debe tener al menos 8-20 digitos");
      return false
    }
}

function validarTelefono (){

    const telefonoValue = telefono.value.trim();
    if ( telefonoValue.length >=8 && telefonoValue.length <= 15){
      set_correct(telefono);
      return true
    } else if(telefonoValue === ""){
      set_default(telefono)
      return false
    }else{
      set_error(telefono, 'Por favor ingresa el numero de telefono correcto')
      console.log(typeof telefonoValue)
      return false
    }
}

/*
// Validacion de Nombre
function validarNombre(){
  nombre.addEventListener("input", () => {
    
    const nombreValue = nombre.value.trim();
    const regexName = /^[a-zA-Z '.-]*$/;

    if (nombreValue.length >= 2 && nombreValue.length <= 20  && regexName.test(nombreValue)) {
      set_correct(nombre);
      console.log(regexName.test(nombreValue));
      return true
  
    } else if (nombreValue === "") {
      set_default(nombre);
      submit.removeAttribute('disabled')
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
      return true
    } else if (emailValue === "") {
      set_default(email);
    } else {
      set_error(email, "El Email Ingresado es incorrecto");
    }
  });
}

//Validacion de Contraseña
function validarContraseña() {
  contraseña.addEventListener("input", () => {
    const contraseñaValue = contraseña.value.trim();
    if (contraseñaValue.length >= 8 && contraseñaValue.length <= 15) {
      set_correct(contraseña);
      return true
    } else if (contraseñaValue === "") {
      set_default(contraseña);
    } else {
      set_error(contraseña, "La contraseña debe tener al menos 8-20 digitos");
    }
  });
}

//Validacion de Telefono

function validarTelefono (){
  
  telefono.addEventListener('input',()=>{
    const telefonoValue = telefono.value.trim();
    if ( telefonoValue.length <= 10 ){
      set_correct(telefono);
      return true
      
      
    } else if(telefonoValue === ""){
      set_default(telefono)
    }else{
      set_error(telefono, 'Por favor ingresa el numero de telefono correcto')
      console.log(typeof telefonoValue)
    }
  })
}

*/

// Funciones de Errores y Validaciones

function set_default(input) {
  const grupoCampos = input.parentElement;
  const parrafo = grupoCampos.querySelector("p");
  parrafo.style.display = "none";
  input.style.border = "";
  parrafo.innerText = "";
  submit.setAttribute('disabled', true)
  
}
function set_error(input, msj) {
  const formCotrol = input.parentElement;
  const parrafo = formCotrol.querySelector("p");
  input.style.border = "2px solid rgb(190, 36, 9)";
  parrafo.style.display = "block";
  parrafo.innerText = msj;
  submit.setAttribute('disabled', true)

}
function set_correct(input) {
  const grupoCampos = input.parentElement;
  const parrafo = grupoCampos.querySelector("p");
  input.style.border = "2px solid rgb(2, 184, 2)";
  parrafo.style.display = "none";
  parrafo.innerText = "";
  
  
  
  
  
}

/* validarContraseña()
validarEmail()
validarNombre()
validarTelefono()

 */