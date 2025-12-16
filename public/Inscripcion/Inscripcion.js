//Metodo Para añadir un usuario al sorteo
function AnadirUsuario() {
    // Obtener los valores de los campos del formulario
    let nombrep = document.getElementById('nombre');
    let nombre= nombrep.value;


    let apellidosp = document.getElementById('apellidos');
    let apellidos= apellidosp.value;

    
    let telefonop = document.getElementById('phone');
    let telefono= telefonop.value;

    let emailp = document.getElementById('email');
    let email= emailp.value;

    let fechap = document.getElementById('Nacimiento');
    let fecha= fechap.value;
    console.log("Recopilando datos del usuario...");

    // Enviar los datos al servidor mediante una solicitud POST
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            apellidos: apellidos,
            phone: telefono,
            fechaNacimiento: fecha,
            email: email
        })
    })
        .then(response => response.json())
        .then(data => document.getElementById('result') = JSON.stringify(data))
        .catch(error => console.log('Error:', error));

    console.log("Usuario añadido:");
    console.log("____________________");
    console.log("Nombre: " + nombre);
    console.log("Apellidos: " + apellidos);
    console.log("Email: " + email);
    console.log("Telefono: " + telefono);
    console.log("Fecha de Nacimiento: " + fecha);

    // Crear la fecha para el sorteo
    let fechaSorteo = new Date("2025-12-27T11:09:00");
    let FechaActual = new Date();

    //Guardar la informacion del usuario en cookies
    document.cookie = "nombre=" + nombre + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    "apellidos=" + apellidos + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "email=" + email + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "telefono=" + telefono + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
    document.cookie = "fechaNacimiento=" + fecha + "; expires=" + fechaSorteo.toUTCString() + "; path=/";
        
    let ArrayCookies = document.cookie.split("; ");
    console.log(ArrayCookies);
    
    alert("¡Usuario añadido al sorteo con éxito! El sorteo se realizará el " + fechaSorteo.toLocaleString());
}




async function ModeloEjemplo() {
        cabezera = fetch('http://localhost:3000/');


        resultado = await promesa;

        promesa_datos = resultado.json();


        datos = await promesa_datos;

        for (i = 0; i < datos.length; i++) {
            console.log("usuario "+ i)
            console.log(datos[i])
        }

    
}

  