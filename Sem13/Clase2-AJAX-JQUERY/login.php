<?php

//data de "Base de datos"
$username = 'admin';
$password = '123';

if (isset($_POST['username']) && $_POST['username'] && isset($_POST['password']) && $_POST['password']) { //validación
    if($_POST['username'] == $username && $_POST['password'] == $password){ //autenticación
        //json_encode -> codifica data en formato JSON
        //array() -> crear un arreglo;
        echo json_encode(array('success' => 1, 'messi' => 'gol'));
    } else {
        echo json_encode(array('success' => 0));
    }
} else {
    echo json_encode(array('success' => 0));
}