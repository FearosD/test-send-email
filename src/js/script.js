import Form from './form.js';
import Email from './smtp.js';

const btn = document.querySelector('.form__send-button');
const emailInput = document.querySelector('.email__field');
const textInput = document.querySelector('.message__field');

const form = new Form(emailInput, textInput, btn);

emailInput.addEventListener('focusout', function () {
  form.checkValidateEmail();
  form.checkSendButton();
});

textInput.addEventListener('focusout', function () {
  form.checkMessageText();
  form.checkSendButton();
});

btn.addEventListener('click', function () {
  Email.send({
    SecureToken: process.env.SECURITY_TOKEN,
    To: emailInput.value,
    From: 'fearos@valar.ru',
    Subject: 'Test email sending',
    Body: textInput.value,
  }).then((message) => console.log(message));

  form.clearForm();
});
