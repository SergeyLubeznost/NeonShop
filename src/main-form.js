const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
});

const submitButton = document.querySelector('#send-main-btn');

const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

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
// // Удаляем предыдущий обработчик события, если он существует
// submitButton.removeEventListener('click', handleSubmitData);

submitButton.addEventListener('click', handleSubmitData);

async function handleSubmitData(event) {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const data = {
      name,
      phone
  };

  const toastContainer = document.querySelector('.toast-container');

  const formData = new FormData();
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
            // submitButton.removeEventListener('click', handleSubmitData);
      } else {
          console.error('Ошибка при отправке данных в Telegram.');
          myModal.hide();
      }
  } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      myModal.hide();
  }
}  




