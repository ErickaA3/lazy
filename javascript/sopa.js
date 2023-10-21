document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.getElementById('sopaDeLetras');
    let celdasClickeadas1 = 0;
    let celdasClickeadas2= 0;
    let celdasClickeadas3= 0;
    let celdasClickeadas4= 0;
    let celdasClickeadas5= 0;
    let celdasClickeadas6= 0;
    let celdasClickeadas7= 0;
    let celdasClickeadas8= 0;
    const check = new Audio('audio/check.mp3');


    for(let i = 0; i < 14; i++) {
        const fila = document.createElement('tr');
        for(let j = 0; j < 14; j++) {
            const celda = document.createElement('td');
            let letra = String.fromCharCode(65 + Math.floor(Math.random() * 26)); 
            celda.textContent = letra;
            fila.appendChild(celda);

            celda.addEventListener('click', function() {
                if (j === 0 && i >= 1 && i <= 10) {
                   
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas1++;
            
                    if (celdasClickeadas1 === 10) {
                        document.getElementById('4').style.textDecoration = 'line-through';
                        document.getElementById('4').style.color = '#43ff26';

                        check.play();
                    }
                }
                if(i === 0 && j >= 1 && j <= 7){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas2++;
                    if (celdasClickeadas2 === 7) {
                        document.getElementById('6').style.textDecoration = 'line-through';
                        document.getElementById('6').style.color = '#43ff26';

                        check.play();
                    }

                }
                if(i === 7 && j >= 2 && j <= 5){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas3++;
                    if (celdasClickeadas3 === 4) {
                        document.getElementById('7').style.textDecoration = 'line-through';
                        document.getElementById('7').style.color = '#43ff26';

                        check.play();
                    }

                }
                if(j === 7 && i >= 2 && i <= 6){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas4++;
                    if (celdasClickeadas4 === 5) {
                        document.getElementById('1').style.textDecoration = 'line-through';
                        document.getElementById('1').style.color = '#43ff26';

                        check.play();
                    }

                }
                if(j === 13 && i >= 0 && i <= 6){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas5++;
                    if (celdasClickeadas5 === 7) {
                        document.getElementById('5').style.textDecoration = 'line-through';
                        document.getElementById('5').style.color = '#43ff26';

                        check.play();
                    }

                }
                if(i === 13 && j >= 0 && j <=3){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas6++;
                    if (celdasClickeadas6 === 4) {
                        document.getElementById('2').style.textDecoration = 'line-through';
                        document.getElementById('2').style.color = '#43ff26';

                        check.play();
                    }
                }
                if(i === 11 && j >= 5 && j <= 10){
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas7++;
                    if (celdasClickeadas7 === 6) {
                        document.getElementById('3').style.textDecoration = 'line-through';
                        document.getElementById('3').style.color = '#43ff26';

                        check.play();
                    }

                }
                if (j === 12 && i >= 4 && i <= 9) {
                    celda.style.backgroundColor = 'yellow';
                    celdasClickeadas8++;
                    if (celdasClickeadas8 === 6) {
                        document.getElementById('8').style.textDecoration = 'line-through';
                        document.getElementById('8').style.color = '#43ff26';

                        check.play();
                    }

                }
                //j=columna, i =fila
            });
        }
        tabla.appendChild(fila);
    }

    function colocarPalabraEnFila(palabra, fila, columna) {
        for (let i = 0; i < palabra.length; i++) {
            tabla.rows[fila].cells[columna + i].textContent = palabra[i];
        }
    }

    function colocarPalabraEnColumna(palabra, columna, fila) {
        for (let i = 0; i < palabra.length; i++) {
            tabla.rows[fila + i].cells[columna].textContent = palabra[i];
        }
    }
    
    

    // Palabras colocadas en posiciones específicas
    colocarPalabraEnColumna('WHITEBOARD', 0, 1);
    colocarPalabraEnColumna('PAPER', 7, 2);
    colocarPalabraEnColumna('STAPLER', 13, 0);
    colocarPalabraEnColumna('RESARE', 12, 4);
    
    colocarPalabraEnFila('TEACHER', 0, 1);
    colocarPalabraEnFila('DOOR', 7, 2);
    colocarPalabraEnFila('KSED', 13, 0);
    colocarPalabraEnFila('MARKER', 11, 5);
    

    
});
