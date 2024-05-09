import tg from '../image/tg.svg';
import vk from '../image/vk.svg';

const blocksSocial = document.querySelector('.block_img_container');

// Создание элемента для изображения tg
const imgTg = document.createElement('img');
imgTg.src = tg;
imgTg.alt = 'Telegram Icon'; // Атрибут alt для доступности

// Создание ссылки для изображения tg
const linkTg = document.createElement('a');
linkTg.href = '#'; // Укажите ссылку для Telegram
linkTg.appendChild(imgTg); // Добавляем изображение внутрь ссылки

// Создание элемента для изображения vk
const imgVk = document.createElement('img');
imgVk.src = vk;
imgVk.alt = 'VK Icon'; // Атрибут alt для доступности

// Создание ссылки для изображения vk
const linkVk = document.createElement('a');
linkVk.href = '#'; // Укажите ссылку для VK
linkVk.appendChild(imgVk); // Добавляем изображение внутрь ссылки

// Добавление ссылок с изображениями в блок blocksSocial
blocksSocial.appendChild(linkTg);
blocksSocial.appendChild(linkVk);