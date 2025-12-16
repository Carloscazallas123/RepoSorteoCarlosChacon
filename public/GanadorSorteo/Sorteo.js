var Usuarios=[];
ObtenerGanador();



//Metodo para obtener el usuario ganador
async function ObtenerGanador() {
    try {
        const resultado = await fetch('http://localhost:3000/users');
        const datos = await resultado.json();
        DescargarExcel(datos);
        const usuarioGanador = datos[Math.floor(Math.random() * datos.length)];
        document.getElementById("nombreGanador").innerHTML = usuarioGanador.nombre;
        for(let i=0; i<datos.length; i++){
            Usuarios.push(datos[i].nombre);
            
            
        }
        console.log(Usuarios);
    } catch (error) {
        console.log(error);
    }

}

function DescargarExcel(objArray)
{
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = new Array();

        for (var index in array[i]) {
           line.push('"' + array[i][index] + '"');
        }

        str += line.join(';');
        str += '\r\n';

    }
    window.open("data:text/csv;charset=utf-8," + encodeURIComponent(str));
    console.log(str)
}


