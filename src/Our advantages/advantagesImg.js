import diamond from '../image/Group (2).svg';
import sqrt from '../image/Group 5.svg';
import gaika from '../image/Group 1.svg';



// Массив путей к изображениям
const images = [
    diamond,
    sqrt,
    gaika
  ];
  
  // Выбираем все элементы с классом block-advantages
  const blocks = document.querySelectorAll('.block-advantages');
  
  // Проходим по каждому блоку и добавляем изображение перед заголовком h4
  blocks.forEach((block, index) => {
    // Создаем элемент img
    const img = document.createElement('img');
    
    // Устанавливаем путь к изображению из массива
    img.src = images[index];
    
    // Добавляем атрибуты, если необходимо
    img.alt = `Image ${index + 1}`;
    
    // Находим заголовок h4 в текущем блоке и вставляем изображение перед ним
    const heading = block.querySelector('.container-title');
    if (heading) {
      heading.parentNode.insertBefore(img, heading);
    } else {
      // Если заголовок h4 не найден, просто добавляем изображение в начало блока
      block.insertBefore(img, block.firstChild);
    }
  });