const form = document.getElementById('contact-form');

if (form) {
  const submitBtn = form.querySelector('.contact-form-btn');
  const statusText = form.querySelector('.form-status');
  let statusTimer = null;

  const showStatus = (message, isSuccess = true) => {
    clearTimeout(statusTimer);
    statusText.textContent = message;
    statusText.classList.remove('is-success', 'is-error');
    statusText.classList.add('is-visible', isSuccess ? 'is-success' : 'is-error');

    // Плавно скрываем сообщение через 5 секунд
    statusTimer = setTimeout(() => {
      statusText.classList.remove('is-visible');
    }, 5000);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const nameValue = form.elements.name.value.trim();
    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    // 1. Проверка на пустые пробелы и минимальную длину
    if (nameValue.length < 2) {
      showStatus('Пожалуйста, введите имя (минимум 2 символа).', false);
      form.elements.name.focus();
      return;
    }

    // 2. Проверка корректного email с доменной зоной (.ru, .com и т.д.)
    if (!isValidEmail(emailValue)) {
      showStatus('Введите корректный email (например, name@example.com).', false);
      form.elements.email.focus();
      return;
    }

    // 3. Проверка текста сообщения
    if (messageValue.length < 10) {
      showStatus('Сообщение слишком короткое (минимум 10 символов).', false);
      form.elements.message.focus();
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    statusText.classList.remove('is-visible');

    const formData = new FormData(form);
    // Перезаписываюм поля уже очищенными от лишних пробелов по краям значениями
    formData.set('name', nameValue);
    formData.set('email', emailValue);
    formData.set('message', messageValue);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showStatus('Сообщение успешно отправлено!', true);
        form.reset();
      } else {
        showStatus(`Ошибка: ${data.message || 'Не удалось отправить сообщение'}`, false);
      }
    } catch (error) {
      showStatus('Ошибка сети. Проверьте подключение и попробуйте снова.', false);
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
