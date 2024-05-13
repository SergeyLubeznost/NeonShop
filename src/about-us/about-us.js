import love from '../image/loon-image-high (1) 2.png'

// Создаем новый элемент изображения
var img = document.createElement('img');

// Устанавливаем путь к изображению
img.src = `${love}`;

// Добавляем класс, если необходимо
img.classList.add('someClassName');

// Добавляем изображение в указанный div
var div = document.getElementById('infoOfUsId');
div.appendChild(img);