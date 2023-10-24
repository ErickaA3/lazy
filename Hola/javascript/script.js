let selectedButtons = [];
let correctMatches = 0; // Lleva un registro de las respuestas correctas

function checkMatch(id, word) {
    const button = document.getElementById(id);
    button.disabled = true; // Deshabilitar el botón después de hacer clic

    selectedButtons.push({ id, word });

    if (selectedButtons.length === 2) {
        if (selectedButtons[0].word === selectedButtons[1].word) {
            correctMatches++; // Incrementa el contador de respuestas correctas
            updateCorrectAnswers(); // Actualiza el contador de respuestas correctas
            showMessage('¡CORRECTO!', 'green');
            button.style.backgroundColor = 'green';
            document.getElementById(selectedButtons[0].id).style.backgroundColor = 'green';
            selectedButtons = [];
        } else {
            showMessage('¡INCORRECTO!', 'red');
            button.style.backgroundColor = 'red';
            document.getElementById(selectedButtons[0].id).style.backgroundColor = 'red';
            setTimeout(() => {
                button.style.backgroundColor = '';
                document.getElementById(selectedButtons[0].id).style.backgroundColor = '';
                selectedButtons = [];
            }, 1000);
        }
    }
}

function showMessage(message, color) {
    const messageContainer = document.querySelector('.message');
    messageContainer.textContent = message;
    messageContainer.style.color = color;
    setTimeout(() => {
        messageContainer.textContent = '';
        messageContainer.style.color = '';
    }, 1500);
}

function updateCorrectAnswers() {
    const correctAnswersContainer = document.getElementById('correct-answers');
    correctAnswersContainer.textContent = `Respuestas correctas: ${correctMatches}`;
}