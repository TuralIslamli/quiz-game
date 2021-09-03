function changeContent() {
    if (document.querySelector('h1').textContent == 'Ваше письмо отправлено') {
      document.querySelectorAll('.remove').forEach(el => el.style.display = 'inline-block');
      document.querySelectorAll('.remove').forEach(el => el.value = "");
      document.querySelector('h1').textContent = 'Написать нам';
      document.querySelector('.send').value = 'Отправить'; 
    } else {
      inputs = document.querySelectorAll('.formEntry');
      validation = false;
      for (let i = 0; i<inputs.length; i++) {
        validation = inputs[i].checkValidity();
        if (!validation) break;
      }
      if (validation) {
        document.querySelectorAll('.remove').forEach(el => el.style.display = 'none');
        document.querySelector('h1').textContent = 'Ваше письмо отправлено';
        document.querySelector('.send').value = 'Отправить новое';
        sendEmail();
      } else {
        alert('Пожалуйста, заполните все поля');
      }
    }
}

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "aid.shirinova@gmail.com",
	Password : "forproject",
	To : 'aid.shirinova@gmail.com',
	From : document.querySelector('.email').value,
	Subject : "Сообщение от пользователя",
	Body : document.querySelector('.message').value
	})
}