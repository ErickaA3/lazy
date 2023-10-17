function inicio(){
    setTimeout(function() {
        document.getElementById('paso1').style.display = 'flex';
        document.getElementById('primero').style.display = 'block';
    
    }, 2000);
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('r1').addEventListener('click', function() {
            document.getElementById('correcto').style.display = 'block';
            
        });
    })
}