const usu = document.getElementById('usuario');
const des = document.getElementById('descripcion');
const pass = document.getElementById('contrasenia');
const form = document.getElementById('formulario');
const formres=document.getElementById('res')

form.addEventListener('submit', e => {
  e.preventDefault();
  if (usu.value.length < 1 || des.value.length < 1 || pass.value.length < 1) {
    alert("Debe completar los datos correspondientes");
  } else {
    alert("Los datos se enviaron exitosamente");
    usu.value="";
    des.value="";
    pass.value="";
  }

});

formres.addEventListener('click', () => {
    usu.value = "";
    des.value = "";
    pass.value = "";
  });
