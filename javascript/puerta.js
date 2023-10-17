function iniciar() {
    setTimeout(function() {
        document.getElementById('paso1').style.display = 'flex';
        document.getElementById('primero').style.display = 'block';
    }, 2000);
}

function respuesta1() {
    document.getElementById('r1').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
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
    }, 1000);
    document.getElementById('r5').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
        paso3();
    });

    document.getElementById('r4').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
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
    }, 1000);
    document.getElementById('r7').addEventListener('click', function() {
        document.getElementById('correcto').style.display = 'block';
        document.getElementById('incorrecto').style.display = 'none';
        resultado();
    });

    document.getElementById('r6').addEventListener('click', function() {
        document.getElementById('incorrecto').style.display = 'block';
        document.getElementById('correcto').style.display = 'none';
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
    }, 1000);

    setTimeout(function() {
        document.getElementById('paso4').style.display = 'block';
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    iniciar();
    respuesta1();
});

