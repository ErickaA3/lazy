
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('btnPrimero').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'block';
            document.getElementById('SegundoMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'none';
        });

        document.getElementById('btnSegundo').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'none';
            document.getElementById('SegundoMaterias').style.display = 'block';
        });

        document.getElementById('btnTercero').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'block';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'none';
            document.getElementById('SegundoMaterias').style.display = 'none';
        });

        document.getElementById('btnCuarto').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'block';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'none';
            document.getElementById('SegundoMaterias').style.display = 'none';
        });

        document.getElementById('btnQuinto').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'block';
            document.getElementById('SextoMaterias').style.display = 'none';
            document.getElementById('SegundoMaterias').style.display = 'none';
        });

        document.getElementById('btnSexto').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'block';
            document.getElementById('SegundoMaterias').style.display = 'none';
        });

        document.getElementById('btnSeptimo').addEventListener('click', function() {
            document.getElementById('PrimeroMaterias').style.display = 'none';
            document.getElementById('TerceroMaterias').style.display = 'none';
            document.getElementById('CuartoMaterias').style.display = 'none';
            document.getElementById('QuintoMaterias').style.display = 'none';
            document.getElementById('SextoMaterias').style.display = 'none';
            document.getElementById('SegundoMaterias').style.display = 'none';
            document.getElementById('SeptimoMaterias').style.display = 'block';
        });
    });


