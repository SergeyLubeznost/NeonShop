import './style.css';

let promiseArray = [];

promiseArray.push(import('./slider-popular/popular-slider'));
promiseArray.push(import('./slider-popular/pop-slider.css'));
promiseArray.push(import('./slider-popular/pop-slider-mobile.css'));
promiseArray.push(import('./feedback/feedback-send'));
promiseArray.push(import('./more-neon/more-neon'));
promiseArray.push(import('./more-neon/data_products'));
promiseArray.push(import('./Our advantages/advantagesImg'));
promiseArray.push(import('./social_block/social_block_img'));
promiseArray.push(import('./about-us/about-us.js'));

Promise.all(promiseArray)
  .then(() => {
    
  })
  .catch((error) => {
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarCollapse.classList.remove('show');
        });
    });
});

// Находим все ссылки-якори на странице
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Обработчик клика по ссылке-якорю
anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offset = 70; // насколько пикселей сместить элемент выше
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const checkbox = document.getElementById('confPolice');
    const sendButton = document.querySelector('.send-btn');
  
    checkbox.addEventListener('change', function() {
      sendButton.disabled = !this.checked; // блокировка кнопки при выключенном чекбоксе
      if (!this.checked) {
        sendButton.style.backgroundColor = '#ccc'; // Изменение фона кнопки
    } else {
        sendButton.style.backgroundColor = ''; // Сброс изменений фона кнопки
    }
    });
  
    nameInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, ''); // Оставляем только буквы (на основе указанных символов)
    });
  
    phoneInput.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, ''); // Оставляем только цифры
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('namePrice');
    const phoneInput = document.getElementById('phonePrice'); // Исправлено здесь

    nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, ''); // Оставляем только буквы (на основе указанных символов)
    });

    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Оставляем только цифры
    });
});

