import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import cafePetros from './image-price/cafePetros/20231206_35706_2_11zon.webp'
import cafePetros2 from './image-price/cafePetros/20231206_35717_1_11zon.webp'
import welcomeClub1 from './image-price/велком клуб 700х700 14500р/20240130_195329.jpg'
import welcomeClub2 from './image-price/велком клуб 700х700 14500р/20240130_195324.jpg'
import inRaspberries1 from './image-price/В малине 800х545 13500р/20231202_160830.jpg'
import inRaspberries2 from './image-price/В малине 800х545 13500р/20231202_160910.jpg'
import giLaser1 from './image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015107.jpg'
import giLaser2 from './image-price/Gi лазер студио Татьяна яковлева 1000х1500мм  18,500тр/20231015_015203.jpg'
import matreshka1 from './image-price/Матрёшка 1000х250 14500р/matreshka.jpg'
import matreshka2 from './image-price/Матрёшка 1000х250 14500р/20240225_132601.jpg'
import least1 from './image-price/лист 250х300мм  2000р/20240314_001806.jpg'
import least2 from './image-price/лист 250х300мм  2000р/20240314_002442.jpg'



export let popularPrice = [
  {
    id : 1234,
    image: cafePetros,
    image2: cafePetros2,
    title: "Cafe Petros",
    discription: "прозрачное оргстекло 5 мм",
    size: "500x350",
    price: "7300р",
  },
  {
    id : 1235,
    image: welcomeClub1,
    image2: welcomeClub2,
    title: "Welcome club",
    discription: "прозрачное оргстекло 5 мм",
    size: "700x700",
    price: "14500р",
  },
  {
    id : 12346,
    image: inRaspberries1,
    image2: inRaspberries2,
    title: "В малине",
    discription: "прозрачное оргстекло 5 мм",
    size: "800x545",
    price: "13500р",
  },
  {
    id : 12347,
    image: giLaser1,
    image2: giLaser2,
    title: "GI Laser",
    discription: "прозрачное оргстекло 5 мм",
    size: "1000x1500",
    price: "18500р",
  },
  {
    id : 12348,
    image: matreshka1,
    image2: matreshka2,
    title: "Матрешка",
    discription: "прозрачное оргстекло 5 мм",
    size: "100x250",
    price: "1500р",
  },
  {
    id : 12349,
    image: least1,
    image2: least2,
    title: "Лист",
    discription: "прозрачное оргстекло 5 мм",
    size: "250x300",
    price: "2000р",
  }
];


  // Получаем доступ к блоку slider-block
const sliderBlock = document.getElementById('slider-block');
const sliderBlockBlur = document.getElementById('sliderContainer');

// Создаем элемент swiper с классом mySwiper
const swiperContainer = document.createElement('div');
swiperContainer.className = 'swiper mySwiper';

// Создаем элемент wrapper с классом swiper-wrapper
const swiperWrapper = document.createElement('div');
swiperWrapper.className = 'swiper-wrapper';


// Проходимся по массиву popularPrice и создаем для каждого элемента слайд
popularPrice.forEach((item) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide containerSlide";
  slide.innerHTML = `
    <div class="image-popular"><img src="${item.image}"></div>
    <div class="title-popular">${item.title}</div>
    <p class="baseTitle">Основание:</p>
    <p class="baseDiscription">${item.discription}</p>
    <p class="sizeBase">Размер основания:</p>
    <p class="itemSize">${item.size}</p>
    <p class="price"><span>Цена:</span> ${item.price}</p>
    <button class="order" data-id="${item.id}">Заказать</button>
  `;
  swiperWrapper.appendChild(slide);
  const orderButton = slide.querySelector('.order');
  orderButton.addEventListener('click', () => openModal(item.id));

});

// Создаем элементы для кнопок навигации и пагинации
const nextButton = document.createElement("div");
nextButton.className = 'swiper-button-next';


const prevButton = document.createElement('div');
prevButton.className = 'swiper-button-prev';

// Добавляем все созданные элементы в swiperContainer
swiperContainer.appendChild(swiperWrapper);
sliderBlockBlur.appendChild(nextButton);
sliderBlockBlur.appendChild(prevButton);
// swiperContainer.appendChild(pagination);

// Добавляем swiperContainer в блок slider-block
sliderBlock.appendChild(swiperContainer);


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 10,
  loop: true,
  autoplay: false, // Остановка автоматического переключения
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    980: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20
    }
  },
});


// Находим все кнопки "Заказать" с классом "order"
const orderButtons = document.querySelectorAll('.order');



// Проходимся по каждой кнопке и добавляем обработчик события на клик
orderButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productId = button.getAttribute('data-id');
    openModal(productId);
  });
});

// const botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU';
// const chatId = '-4245946360';

function openModal(productId) {
  const product = popularPrice.find(item => item.id === productId);

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
          <p class="decription-product"><strong>Основание:</strong> ${product.description || 'Описание отсутствует'}</p>
          <p class="decription-product"><strong>Размер основания:</strong> ${product.size || 'Размер не указан'}</p>
          <p class="decription-product"><strong>Цена:</strong> ${product.price || 'Цена не указана'}</p>
          <form class="form-header" id="modal-form">
              <label for="namePrice">Ваше Имя</label>
              <input id="namePrice" type="text" placeholder="Введите Имя">
              <label for="phonePrice">Ваш телефон</label>
              <input id="phonePrice" type="tel" placeholder="Введите телефон">
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
console.log(submitButton);


submitButton.addEventListener('click', async function(event) {
  console.log(submitButton);
  const botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU';
  const chatId = '-4245946360';
    
    const productName = product.title || 'Название не указано';
    const productDescription = product.description || 'Описание отсутствует';
    const name = document.getElementById('namePrice').value;
    const phone = document.getElementById('phonePrice').value;
console.log(name);
    const data = {
        productName,
        productDescription,
        name,
        phone
    };

    // Sending data to the server
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${JSON.stringify(data)}`;

    const toastContainer = document.querySelector('.toast-container');

    try {
        const response = await fetch(url, { method: 'GET' });
        const responseData = await response.json();

        if (responseData.ok) {
            const toast = document.createElement('div');
            toast.className = 'toast fade show';
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');
            toast.setAttribute('aria-atomic', 'true');

            toast.innerHTML = `
                <div class="toast-header">
                    <strong class="me-auto">Ваша заявка ${data.name}</strong>
                    <small>${new Date().toLocaleTimeString()}</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                   Успешно отправлена
                </div>`;

            toastContainer.appendChild(toast);

            new bootstrap.Toast(toast).show();
            myModal.hide();
        } else {
            console.error('Ошибка при отправке данных в Telegram.');
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
});


  } else {
      
  }
}





