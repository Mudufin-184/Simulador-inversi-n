function inversion() {
    // Variables
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cCorreo = document.getElementById("email").value;
    let contPre = document.querySelector(".pre-simulation");
    let contPost = document.querySelector(".post-simulation");
    let cMonto = document.getElementById("inversion").value;
    let cTiempo = document.getElementById("tiempo").value;

    // Mostramos y ocultamos el panel de la derecha, pre y post simulacion
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");


    // Capturamos los espacios para nombrar el nombre y email
    document.querySelector("#nombres-show").innerHTML = cNombres;
    document.querySelector("#email-show").innerHTML = cCorreo;

    // existen dos formas de insertar los textos en el HTML:
    // 1. let sTiempo = document.getElementById("tiempo-show");
    // sTiempo.innerHTML = "12 Meses";
    // 2. document.querySelector("#tiempo-show").innerHTML = "12 Meses";

    switch (cTiempo) {
        case '1':
            document.querySelector("#tiempo-show").innerHTML = "12 Meses";
            document.querySelector("#interes-show").innerHTML = "0.8%";
            let unAño = parseInt(cMonto * 0.096);
            let totalunAño = parseInt(cMonto) + parseInt(unAño);
            document.querySelector("#total-show").innerHTML = totalunAño ;
            document.querySelector("#ganancia-show").innerHTML = unAño;
            break;
        case '2':
            document.querySelector("#tiempo-show").innerHTML = "24 Meses";
            document.querySelector("#interes-show").innerHTML = "1.3%";
            let dosAños = parseInt(cMonto * 0.312);
            let totaldosAños = parseInt(cMonto) + parseInt(dosAños);
            document.querySelector("#total-show").innerHTML = totaldosAños;
            document.querySelector("#ganancia-show").innerHTML = dosAños;
            break;
        case '3':
            document.querySelector('#tiempo-show').innerHTML = "36 Meses";
            document.querySelector("#interes-show").innerHTML = "1.7%";
            let tresAños = parseInt(cMonto * 0.612);
            let totaltresAños = parseInt(cMonto) + parseInt(tresAños);
            document.querySelector("#total-show").innerHTML = totaltresAños;
            document.querySelector("#ganancia-show").innerHTML = tresAños;
        default:
            break;
    }



    // alert ("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);
    // console.log("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);

    // let i = 100;
    // while (i >= 0){
    //     console.log(i);
    //     alert (i);
    //     i--;
    // }


}