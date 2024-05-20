//id -4245946360 token 7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU

const botToken = '7140577113:AAHgtOhZYa0H0wktR1yUv4R-XZ06aiqrlBU';
const chatId = '-4245946360';


const form = document.querySelector('.feedback-form');

const submitButton = document.getElementById('submit-btn');
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
        const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        try {
            const response = await fetch(url, { method: 'GET' });
            const data = await response.json();
            
            if (data.ok) {
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

                // Инициализация Bootstrap toast
                new bootstrap.Toast(toast).show();
            } else {
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

                // Инициализация Bootstrap toast
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

        // Инициализация Bootstrap toast
        new bootstrap.Toast(toast).show();
    }
});