let selectedButtons = [];

function checkMatch(id, word) {
    const button = document.getElementById(id);
    button.disabled = true; // Deshabilitar el botón después de hacer clic
    
    selectedButtons.push({ id, word });
    
    if (selectedButtons.length === 2) {
        if (selectedButtons[0].word === selectedButtons[1].word) {
            showMessage('CORRECTO');
            button.style.backgroundColor = 'green';
            document.getElementById(selectedButtons[0].id).style.backgroundColor = 'green';
            selectedButtons = [];
        } else {
            showMessage('INCORRECTO');
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

function showMessage(message) {
    const messageContainer = document.querySelector('.message');
    messageContainer.textContent = message;
    setTimeout(() => {
        messageContainer.textContent = '';
    }, 1500);
}
