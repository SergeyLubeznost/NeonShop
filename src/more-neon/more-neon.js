
import {combinedArray} from "./data_products";

let price_more_block = document.querySelector("#block_more_price");

let currentPage = 1; // Инициализация переменной currentPage с начальным значением 1

const itemsPerPage = 6; // Константа, определяющая количество элементов на каждой странице

const paginationWrapper = document.querySelector("#pagination"); // Поиск и сохранение элемента с id "pagination" в переменной paginationWrapper

function createPaginatedItems(items) { // Объявление функции для создания пагинированных элементов из переданного массива items
  return items.reduce((acc, item, index) => { // Использование функции reduce для разделения элементов на страницы
    const pageIndex = Math.floor(index / itemsPerPage); // Вычисление номера страницы для текущего элемента
    if (!acc[pageIndex]) { // Если текущей страницы не существует, создаем пустой массив
      acc[pageIndex] = [];
    }
    acc[pageIndex].push(item); // Добавляем элемент в соответствующую страницу
    return acc;
  }, []); // Начальное значение аккумулятора - пустой массив
}

function displayItems(page) { // Объявление функции для отображения элементов текущей страницы
  const paginatedItems = createPaginatedItems(combinedArray); // Создание пагинированных элементов из объединенного массива combinedArray
  price_more_block.innerHTML = ''; // Очистка текущего блока товаров
  if (page < 1 || page > paginatedItems.length) return; // Проверка на правильность номера страницы
  paginatedItems[page - 1].forEach(item => { // Для каждого элемента на текущей странице
    let card_price = document.createElement('div'); // Создаем элемент div для карточки товара
    card_price.className = "card-more-neon"; // Добавляем класс стиля карточки
    card_price.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <p class="title-card-neon">${item.title}</p>
    <p class="description-title">Основание:</p>
    <p class="description-title-more">${item.discription}</p>
    <p class="description-title">Размер основания:</p>
    <p class="description-title-more">${item.size}</p>
    <p class="price-neon-more"><span>Цена:</span>${item.price}</p>
    <button class="order-price-more" data-id="${item.id}">Заказать</button>
`;
    price_more_block.appendChild(card_price); // Добавляем карточку в блок товаров

    

  });
  updatePagination(paginatedItems.length); // Обновление пагинации
  
  // Находим все кнопки "Заказать" с классом "order-price-more"
const orderPriceButtons = document.querySelectorAll('.order-price-more');


orderPriceButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = button.getAttribute('data-id'); // Получаем data-id кнопки на которую нажали
        const product = combinedArray.find(item => item.id.toString() === productId.toString());
        openModal(product);
    });
});
}
function openModal(product) {
  if (product) {
      const modalTitle = document.querySelector('#exampleModalLabelNew');
      modalTitle.textContent = product.title || 'Название не указано';

      const modalBody = document.querySelector('#exampleModalNew .modal-body');
      modalBody.innerHTML = `
          <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="${product.image}" alt="Product Image">
                  </div>
                  <div class="carousel-item">
                      <img src="${product.image2}" alt="Product Image">
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
          <p class="decription-product"><strong>Основание:</strong> ${product.discription || 'Описание отсутствует'}</p>
          <p class="decription-product"><strong>Размер основания:</strong> ${product.size || 'Размер не указан'}</p>
          <p class="decription-product"><strong>Цена:</strong> ${product.price || 'Цена не указана'}</p>
          <form class="form-header" action="">
              <label for="name-more">Ваше Имя</label>
              <input id="name-more" type="text" placeholder="Введите Имя">
              <label for="phone-more">Ваш телефон</label>
              <input id="phone-more" type="tel" placeholder="Введите телефон">
          </form>
      `;

      const carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
          interval: false // Чтобы карусель не переключалась автоматически
      });

      const myModal = new bootstrap.Modal(document.getElementById('exampleModalNew'), {
          keyboard: false
      });

      myModal.show();

      const submitButton = document.querySelector('#send-price');

      const nameInput = document.getElementById('name-more');
      const phoneInput = document.getElementById('phone-more');

      if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
          submitButton.setAttribute('disabled', 'disabled');
      } else {
          submitButton.removeAttribute('disabled');
      }

      nameInput.addEventListener('input', function() {
          this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
          if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
              submitButton.setAttribute('disabled', 'disabled');
          } else {
              submitButton.removeAttribute('disabled');
          }
      });

      phoneInput.addEventListener('input', function() {
          this.value = this.value.replace(/\D/g, '');
          if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
              submitButton.setAttribute('disabled', 'disabled');
          } else {
              submitButton.removeAttribute('disabled');
          }
      });

      // Удаляем предыдущий обработчик события, если он существует
      submitButton.removeEventListener('click', handleSubmitData);

      submitButton.addEventListener('click', handleSubmitData);

      async function handleSubmitData(event) {
        const name = document.getElementById('name-more').value;
          const phone = document.getElementById('phone-more').value;
          const data = {
              productName: product.title || 'Название не указано',
              productDescription: product.description || 'прозрачное оргстекло 5',
              price: product.price || 'Описание отсутствует',
              size: product.size || 'Описание отсутствует',
              name,
              phone
          };

          const toastContainer = document.querySelector('.toast-container');

          const formData = new FormData();
          formData.append('productName', data.productName);
          formData.append('productDescription', data.productDescription);
          formData.append('price', data.price);
          formData.append('size', data.size);
          formData.append('name', data.name);
          formData.append('phone', data.phone);

          try {
              const response = await fetch('https://neonshopspb.ru/send-php.php', {
                  method: 'POST',
                  body: formData
              });
              const responseData = await response.json();

              if (responseData.status === 'success') {
                  console.log(responseData.message);

                  const toast = document.createElement('div');
                  toast.className = 'toast fade show';
                  toast.setAttribute('role', 'alert');
                  toast.setAttribute('aria-live', 'assertive');
                  toast.setAttribute('aria-atomic', 'true');

                  toast.innerHTML = `
                      <div class="toast-header">
                          <strong class="me-auto">Ваша заявка ${name}</strong>
                          <small>${new Date().toLocaleTimeString()}</small>
                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                      </div>
                      <div class="toast-body">
                          Успешно отправлена
                      </div>`;

                  toastContainer.appendChild(toast);

               

                  new bootstrap.Toast(toast).show();
                  myModal.hide();
                     // Удаляем предыдущий обработчик события, если он существует
                     submitButton.removeEventListener('click', handleSubmitData);
              } else {
                  console.error('Ошибка при отправке данных в Telegram.');
              }
          } catch (error) {
              console.error('Ошибка при выполнении запроса:', error);
          }
      }
  } else {
      console.error('Продукт с указанным productId не найден.');
  }
}


function updatePagination(numberOfPages) { // Обновление элементов пагинации
  paginationWrapper.innerHTML = ''; // Очистка текущих элементов пагинации
  for (let i = 1; i <= numberOfPages; i++) { // Создание кнопок для каждой страницы
    const pageButton = document.createElement('button'); // Создание элемента кнопки
    pageButton.innerText = i; // Установка текста на кнопке
    pageButton.addEventListener('click', () => { // Добавление обработчика события на клик по кнопке
      currentPage = i; // Обновление текущей страницы
      displayItems(currentPage); // Перерисовка элементов для выбранной страницы
      highlightCurrentPage(); // Выделение текущей страницы
    });
    paginationWrapper.appendChild(pageButton); // Добавление кнопки в пагинацию
  }
  highlightCurrentPage(); // Выделение текущей страницы
}

function highlightCurrentPage() { // Выделение текущей страницы в пагинации
  const buttons = paginationWrapper.querySelectorAll('button'); // Получаем все кнопки пагинации
  buttons.forEach(button => { // Для каждой кнопки
    if (Number(button.innerText) === currentPage) { // Если номер кнопки совпадает с текущей страницей
      button.style.fontWeight = 'bold'; // Выделяем текст жирным шрифтом
      button.style.backgroundColor = '#D012FF'; // Меняем цвет фона кнопки
      button.style.border = '#D012FF'; // Меняем цвет фона кнопки
    } else {
      button.style.fontWeight = 'normal'; // Сбрасываем выделение
      button.style.backgroundColor = ''; // Сбрасываем цвет фона
    }
  });
}

displayItems(currentPage); // Инициализация отображения первой страницы


