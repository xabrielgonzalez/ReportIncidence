<?php
// Obtener los valores del formulario
$usuario = $_POST['ususario'];
$departamento = $_POST['Departamento'];
$descripcion = $_POST['Descripcion'];
$contrasenia = $_POST['Contrasenia'];

// Realizar alguna operación con los datos (por ejemplo, guardarlos en una base de datos)

// Redirigir al usuario a otra página después de procesar los datos
header('Location: formulario_enviado.php');
print_r($_POST);
exit();
?>
