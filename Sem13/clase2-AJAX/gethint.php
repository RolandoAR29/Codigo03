<?php
// Arreglo de nombres y contraseñas de usuario
$a[] = [
    "nombre" => "Anna",
    "pass" => "lb6vtISJgg=="
];
$a[] = [
    "nombre" => "Pancha",
    "pass" => "pLGvtru4gIR3"
];
$a[] = [
    "nombre" => "María",
    "pass" => "obGzFgC4gIR3"
];
$a[] = [
    "nombre" => "Ricolás",
    "pass" => "prmkwr8a8MV1kXc="
];
$a[] = [
    "nombre" => "Roberto",
    "pass" => "pr+juMXLvoN2kg=="
];
$a[] = [
    "nombre" => "Juana",
    "pass" => "nsWiwbSIgYU="
];
$a[] = [
    "nombre" => "Doki",
    "pass" => "mL+svISJgg=="
];
$a[] = [
    "nombre" => "Nandito",
    "pass" => "orGvt7zLvoN2kg=="
];

function encrypt($string, $key) {
    $result = '';
    for($i=0; $i<strlen($string); $i++) {
       $char = substr($string, $i, 1);
       $keychar = substr($key, ($i % strlen($key))-1, 1);
       $char = chr(ord($char)+ord($keychar));
       $result.=$char;
    }
    return base64_encode($result);
}

function decrypt($string, $key) {
    $result = '';
    $string = base64_decode($string);
    for($i=0; $i<strlen($string); $i++) {
       $char = substr($string, $i, 1);
       $keychar = substr($key, ($i % strlen($key))-1, 1);
       $char = chr(ord($char)-ord($keychar));
       $result.=$char;
    }
    return $result;
}

// Recibir los parámetros de la URL
$nombre = $_REQUEST["nombre"];
$pass = $_REQUEST["pass"];

//$claveCifrada = encrypt($pass, 'PASSWORD_DEFAULT');
//$claveDescifrada = decrypt('lb6vtISJgg==', 'PASSWORD_DEFAULT');

$bandera = false;
if($nombre !== "" && $pass !== ""){
    foreach($a as $name){
        $nombreBd = strtolower($name['nombre']); //convertir a mínusculas el nombre sacado de la BD
        $nombre = strtolower($nombre); //convertir a mínusculas el nombre ingresado desde el formulario
        if($nombreBd == $nombre){
            $claveCifrada = encrypt($pass, 'PASSWORD_DEFAULT');
            if($name['pass'] == $claveCifrada){
                echo "Clave correcto";
            break;
            } else {
                echo "Contraseña incorrecta";
            break;
            }
        } else {
            $bandera = true;
        }
    }
}

echo $bandera ? "Usuario no existe" : "";







// $p = desencriptar($p);

// $hint = "";

// if ($q !== "") { // Validar que la cadena no esté vacía
//     $q = strtolower($q); // convertir a minúsculas // -->  $q = 'a'
//     $len = strlen($q); // lngitud de cadena // $len -> 1
//     foreach($a as $name) {
//         //stristr -> Compara dos cadenas y captura la primera aparición
//         if (stristr($q, substr($name, 0, $len))) {  // $name = 'Amanda' -> 'A' // 'a' == 'A'
//             //$name -> 'Anna' / 'Amanda'
//             if ($hint === "") {
//                 $hint = $name;
//             } else {
//                 $hint .= ", $name";
//             }
//         }
//     }
// }

// // Output "no suggestion" if no hint was found or output correct values
// echo $hint === "" ? "no ha sugerencias" : $hint;
//echo "<script>alert('$claveCifrada')</script>";
?>
<!-- <script language= javascript type= text/javascript >
    MiFuncionJS()
    {  alert (echo $claveCifrada)}
</script> -->

 