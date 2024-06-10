<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Encriptado</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="chat-container">
        <div id="chat-header">
            <h2>Chat Encriptado</h2>
        </div>
        <div id="chat-window">
            <div id="output"></div>
        </div>
        <div id="chat-input">
            <input type="text" id="message" placeholder="Escribe tu mensaje...">
            <button id="send">Enviar</button>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script src="script.js"></script>
</body>
</html>