<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ваши данные из Telegram
    $botToken = '7917009620:AAFrtRgCuP9-nxWkUBR4GhTQdk8v0hQsyFE';
    $chatId = '925104406';
    
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    
    // Формируем сообщение
    $text = "🔥 Новая заявка с сайта:\n";
    $text .= "——————————————\n";
    $text .= "👤 Имя: $name\n";
    $text .= "📞 Телефон: $phone\n";
    $text .= "💼 Услуга: $service\n";
    $text .= "——————————————\n";
    $text .= date('d.m.Y H:i');
    
    // Отправляем в Telegram
    $url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($text);
    
    // Отправка и ответ пользователю
    if (file_get_contents($url)) {
        // Перенаправляем на страницу "спасибо"
        header('Location: thank-you.html');
    } else {
        echo "Ошибка при отправке. Пожалуйста, попробуйте позже.";
    }
} else {
    header('Location: index.html');
}
?>