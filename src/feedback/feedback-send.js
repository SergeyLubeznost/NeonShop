const form = document.querySelector('.feedback-form');

const submitButton = document.getElementById('submit-btn-feedback');
const checkbox = document.getElementById('chekcbox-feedback');

submitButton.disabled = false;


checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = ''; // Возвращает кнопке исходный цвет
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'lightgray'; // Меняет цвет кнопки при отключенном состоянии
    }
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name-feedback').value;
    const phone = document.getElementById('phone-feedback').value;
    const checkbox = document.getElementById('chekcbox-feedback');
    const toastContainer = document.querySelector('.toast-container');

    if (name && phone && checkbox.checked) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);

        try {
            const response = await fetch('https://neonshopspb.ru/send-php.php', {
              method: 'POST',
              body: formData
            });
            const data = await response.json();
            
            if (data.status === 'success') {
                console.log(data.message);

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
                document.getElementById('name-feedback').value = ""; // Очистка поля 'name-feedback'
                document.getElementById('phone-feedback').value = ""; // Очистка поля 'phone-feedback'
                new bootstrap.Toast(toast).show();
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
          
        }
    } else {
        const toast = document.createElement('div');
        toast.className = 'toast fade show';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');

        toast.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto">Ваша заявка</strong>
                <small>${new Date().toLocaleTimeString()}</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Заполните пожалуйста данные
            </div>`;

        toastContainer.appendChild(toast);
     
        new bootstrap.Toast(toast).show();
    }
});
const submitButtonFeed = document.querySelector('#submit-btn-feedback');

const nameInputFeed = document.getElementById('name-feedback');
const phoneInputFeed = document.getElementById('phone-feedback');


nameInputFeed.addEventListener('input', function() {
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
  if (nameInputFeed.value.trim() === '' || phoneInputFeed.value.trim() === '') {
    submitButtonFeed.setAttribute('disabled', 'disabled');
} else {
    submitButtonFeed.removeAttribute('disabled');
}
});

phoneInputFeed.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '');
  if (nameInputFeed.value.trim() === '' || phoneInputFeed.value.trim() === '') {
    submitButtonFeed.setAttribute('disabled', 'disabled');
} else {
    submitButtonFeed.removeAttribute('disabled');
}
});