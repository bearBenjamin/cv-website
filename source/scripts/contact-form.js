// const form = document.getElementById('contact-form');

// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);

//   // Меняем текст кнопки на время отправки
//   const submitBtn = form.querySelector('button');
//   submitBtn.textContent = 'Отправка...';
//   submitBtn.disabled = true;

//   fetch('https://web3forms.com', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: json
//   })
//     .then(async (response) => {
//       const res = await response.json();
//       if (response.status === 200) {
//         // Если всё прошло успешно, скрываем форму и пишем текст
//         form.innerHTML = '<h3>Спасибо! Ваше сообщение успешно отправлено.</h3>';
//       } else {
//         console.log(response);
//         alert('Что-то пошло не так. Попробуйте позже.');
//         submitBtn.textContent = 'Отправить сообщение';
//         submitBtn.disabled = false;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       alert('Ошибка сети. Проверьте подключение.');
//       submitBtn.textContent = 'Отправить сообщение';
//       submitBtn.disabled = false;
//     });
// });
