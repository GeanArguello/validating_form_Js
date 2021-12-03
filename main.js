const formulario = document.getElementById("formulario");

const submit_btn = document.getElementById("button");

const box_form = document.querySelectorAll('.form_control');

const checkbox = document.getElementById('checkbox');


const arrayCampos =[]
const regexName = /^[a-zA-Z]*$/;
const regexEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
const regexTel = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
const regexContra = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const errors = {
  nombre: true,
  email: true,
  telefono: true,
  contrasena: true,
}


// Itera el array de inputs y crea un evento que tiene una funcion para cada uno!
box_form.forEach((box) =>{
  const  input = box.querySelector('input');

  input.addEventListener('input',(event)=>{
    validationform(input)
  })
})


function validationform(input){
  if (input.name === 'nombre'){

    if (regexName.test(input.value) && input.value.length >= 3 && input.value.length <= 20 ) {
      set_correct(input)
    }else{
      set_error(input, 'El campo debe contener al menos 3-20 caracteres, sin simbolos ni')
    }
    if (input.value.trim() === ''){
      set_error(input, "Por favor Complete el campo con su nombre")
    }
   incompleteForm();
  }
  if (input.name === 'email'){

    if (regexEmail.test(input.value)) {
      set_correct(input)
    }else{
      set_error(input, 'Por favor ingrese su email correctamente')
    }
    if (input.value.trim() === ''){
      set_error(input, "Por favor Complete el campo con su email")
    }
    incompleteForm();
  }
  if (input.name === 'telefono'){
   
    if (regexTel.test(input.value)) {
      set_correct(input)
    }else{
      set_error(input, 'El campo deber contener su numero de telefono')
    }
    if (input.value.trim() === ''){
      set_error(input, "Por favor Complete el campo con su numero de telefono")
    }
    incompleteForm();
  }
  if (input.name === 'contrasena'){
  
    if (regexContra.test(input.value)) {
      set_correct(input)
    }else{
      set_error(input, 'El campo debe contener mínimo ocho caracteres, al menos una letra y un número')
    }
    if (input.value.trim() === ''){
      set_error(input, "Por favor Complete el campo con su contraseña")
    }
    incompleteForm();
  }
  if (input.name === 'checkbox'){
    const check = checkbox.checked;
    if (check){
      set_correct(checkbox)
    }else{
      set_error(checkbox, 'Por favor acepta los terminos y condiciones')
    }
    incompleteForm();
  }
}


function incompleteForm(){
  if(errors.nombre){
    submit_btn.setAttribute('disabled', true)
  }else {
    submit_btn.removeAttribute('disabled')
  }
  if(errors.email){
    submit_btn.setAttribute('disabled', true)
  }else {
    submit_btn.removeAttribute('disabled')
  }
  if(errors.telefono){
    submit_btn.setAttribute('disabled', true)
  }else {
    submit_btn.removeAttribute('disabled')
  }
  if(errors.contrasena){
    submit_btn.setAttribute('disabled', true)
  }else {
    submit_btn.removeAttribute('disabled')
  }
  
}





// Funciones de Errores y Validaciones


function set_error(input, msj) {
  const formCotrol = input.parentElement;
  const parrafo = formCotrol.querySelector("p");
  input.style.border = "2px solid rgb(190, 36, 9)";
  parrafo.style.display = "block";
  parrafo.innerText = msj;
  errors[input.name] = true;
}
function set_correct(input) {
  const grupoCampos = input.parentElement;
  const parrafo = grupoCampos.querySelector("p");
  input.style.border = "2px solid rgb(2, 184, 2)";
  parrafo.style.display = "none";
  parrafo.innerText = "";
  errors[input.name] = false;
}

