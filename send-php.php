<?php
// Получаем данные из POST запроса
$name = isset($_POST['name']) ? $_POST['name'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';

// Данные из FormData
$productName = isset($_POST['productName']) ? $_POST['productName'] : '';
$productDescription = isset($_POST['productDescription']) ? $_POST['productDescription'] : '';
$price = isset($_POST['price']) ? $_POST['price'] : '';
$size = isset($_POST['size']) ? $_POST['size'] : '';

// Здесь можно добавить логику обработки данных, например сохранение в файл или базу данных

// Формируем сообщение для отправки в Telegram
$message = "Новая заявка!\nИмя: $name\nТелефон: $phone";

// Добавляем данные из FormData в сообщение, если они есть
if ($productName) {
    $message .= "\nПродукт: $productName";
}
if ($productDescription) {
    $message .= "\nОписание: $productDescription";
}
if ($price) {
    $message .= "\nЦена: $price";
}
if ($size) {
    $message .= "\nРазмер: $size";
}

// Данные для отправки сообщения в Telegram
$botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU'; // Замените на ваш токен бота
$chatId = '-4245946360'; // Замените на ваш chat_id

// Формируем URL для отправки сообщения
$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message);

// Отправляем запрос к API Telegram
$response = file_get_contents($url);

// Проверяем ответ от Telegram и возвращаем JSON строку
if ($response) {
    echo json_encode(array('status' => 'success', 'message' => 'Данные успешно отправлены в Telegram'));
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Ошибка отправки данных в Telegram'));
}
?>