document.getElementById('send').addEventListener('click', function() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    const encryptedMessage = CryptoJS.AES.encrypt(message, 'clave-secreta').toString();
    
    // Enviar el mensaje encriptado al servidor
    fetch('chat.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: encryptedMessage })
    })
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('output');
        const decryptedMessage = CryptoJS.AES.decrypt(data.message, 'clave-secreta').toString(CryptoJS.enc.Utf8);
        
        // Añadir mensaje encriptado
        const encryptedMsgElement = document.createElement('div');
        encryptedMsgElement.className = 'message encrypted';
        encryptedMsgElement.innerText = data.message;
        output.appendChild(encryptedMsgElement);
        
        // Añadir mensaje desencriptado
        const decryptedMsgElement = document.createElement('div');
        decryptedMsgElement.className = 'message decrypted';
        decryptedMsgElement.innerText = decryptedMessage;
        output.appendChild(decryptedMsgElement);
        
        // Limpiar el campo de entrada
        messageInput.value = '';
        
        // Hacer scroll hacia abajo
        output.scrollTop = output.scrollHeight;
    });
});