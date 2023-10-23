let contador = 0;
let tiempoInicio; // Variable para almacenar el tiempo de inicio
let tiempoIntervalo; // Variable para almacenar el ID del intervalo
function iniciar() {
    setTimeout(function() {
        document.getElementById('paso1').style.display = 'flex';
        document.getElementById('primero').style.display = 'block';
        iniciarContador();
    }, 2000);
}


function iniciarContador() {
    tiempoInicio = new Date().getTime(); // Guardar el tiempo de inicio

    tiempoIntervalo = setInterval(function() {
        let tiempoActual = new Date().getTime(); // Obtener el tiempo actual
        let tiempoTranscurrido = tiempoActual - tiempoInicio; // Calcular el tiempo transcurrido

        let segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000); // Calcular los segundos

        // Actualizar el elemento con el tiempo transcurrido
        document.getElementById('tiempo').textContent = 'Tiempo transcurrido: ' + segundos + ' segundos';
        
    }, 1000); // Actualizar cada segundo (1000 ms)
}
function detenerContador() {
    clearInterval(tiempoIntervalo); // Detener el intervalo
}
function respuesta1() {
    document.getElementById('r1').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
        contador =contador+1
        paso2(); 
    });

    document.getElementById('r2').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
    });

    document.getElementById('r3').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
    });
}

function paso2(){
    setTimeout(function() {
        var video = document.getElementById('video');
        video.pause();
        video.currentTime = 0; 
        video.play();
        document.getElementById('paso1').style.display = 'none';
        document.getElementById('primero').style.display = 'none';
        document.getElementById('correcto').style.display = 'none';
        respuesta2();
    }, 1000);
}

function respuesta2() {
    setTimeout(function() {
        document.getElementById('paso2').style.display = 'flex';
        document.getElementById('segundo').style.display = 'block';
    }, 2000);
    document.getElementById('r5').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
        contador=contador+1
        paso3();
    });

    document.getElementById('r4').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
        if (contador>0){
            contador =contador-1
        }
    });
}

function paso3(){
    setTimeout(function() {
        var video = document.getElementById('video');
        video.pause();
        video.currentTime = 0; 
        video.play();
        document.getElementById('paso2').style.display = 'none';
        document.getElementById('segundo').style.display = 'none';
        document.getElementById('correcto').style.display = 'none';
        respuesta3();
    }, 1000);
}

function respuesta3() {
    setTimeout(function() {
        document.getElementById('paso3').style.display = 'flex';
        document.getElementById('tercero').style.display = 'block';
    }, 2000);
    document.getElementById('r7').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
        contador=contador+1
        resultado();
    });

    document.getElementById('r6').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
        if (contador>0){
            contador =contador-1
        }
    });

    document.getElementById('r8').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
    });
}

function resultado(){
    setTimeout(function() {
        var video = document.getElementById('video');
        video.pause();
        video.currentTime = 0; 
        video.play();
        document.getElementById('paso3').style.display = 'none';
        document.getElementById('tercero').style.display = 'none';
        document.getElementById('correcto').style.display = 'none';
        detenerContador()
    }, 2000);

    setTimeout(function() {
        
        document.getElementById('paso4').style.display = 'block';
        
        
        

    }, 4000);
}

document.addEventListener("DOMContentLoaded", function() {
    iniciar();
    respuesta1();
});

