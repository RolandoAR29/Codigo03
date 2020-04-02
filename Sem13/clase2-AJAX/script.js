// function showHint(str) {
//     if (str.length == 0) {
//         document.getElementById("txtHint").innerHTML = "";
//         return;
//     } else {
//         var xmlhttp = new XMLHttpRequest();
//         xmlhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 //lógica para mostrar repuesta
//                 document.getElementById("txtHint").innerHTML = this.responseText;
//             }
//         };
//         xmlhttp.open("GET", "gethint.php?q=" + str, true);
//         xmlhttp.send();
//     }
// }

function enviar(){
    var nombre = document.getElementById('nombre').value;
    var pass = document.getElementById('password').value;

    var nombre = nombre.trim();
    var pass = pass.trim();

    if (nombre.length == 0 && pass.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //lógica para mostrar repuesta
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?nombre=" + nombre + "&pass=" + pass, true); //open(MÉTODO, URL, VALOR BOOLEANO QUE DETERMINA SI ES SÍNCRONO O ASÍNCRONO)
        xmlhttp.send();
    }

}