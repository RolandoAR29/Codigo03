<?php
// Array with names
$a[] = "Anna";
$a[] = "11sasASDx1a616x5as";


$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

// get the q parameter from URL
$n = $_REQUEST["nombre"];
$p = $_REQUEST["pass"];

$p = desencriptar($p);

$hint = "";

if ($q !== "") { // Validar que la cadena no esté vacía
    $q = strtolower($q); // convertir a minúsculas // -->  $q = 'a'
    $len = strlen($q); // lngitud de cadena // $len -> 1
    foreach($a as $name) {
        //stristr -> Compara dos cadenas y captura la primera aparición
        if (stristr($q, substr($name, 0, $len))) {  // $name = 'Amanda' -> 'A' // 'a' == 'A'
            //$name -> 'Anna' / 'Amanda'
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no ha sugerencias" : $hint;
?>