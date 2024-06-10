<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$encryptedMessage = $input['message'];

$response = [
    'message' => $encryptedMessage
];

echo json_encode($response);
?>