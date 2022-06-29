import EmailField from './email-field.js';
import Email from './smtp.js';

const btn = document.querySelector('.form__send-button');
const emailInput = document.querySelector('.email__field');
const textInput = document.querySelector('.message__field');

const emailField = new EmailField(emailInput);

const checkInputs = () => {
  if (
    emailInput.classList.contains('confirm') &&
    !textInput.classList.contains('wrong') &&
    textInput.value !== ''
  )
    return true;
  return false;
};

emailInput.addEventListener('focusout', function () {
  emailField.checkValidateEmail();
  if (checkInputs()) {
    btn.classList.remove('disable');
  } else {
    btn.classList.add('disable');
  }
});

textInput.addEventListener('focusout', function () {
  if (textInput.value === '') {
    textInput.classList.add('wrong');
  } else {
    textInput.classList.remove('wrong');
  }

  if (checkInputs()) {
    btn.classList.remove('disable');
  } else {
    btn.classList.add('disable');
  }
});

const clearForm = () => {
    textInput.value = '';
    emailInput.value = '';
    emailInput.classList.remove('confirm');
    btn.classList.add('disable');

}

btn.addEventListener('click', function () {
  Email.send({
    SecureToken: process.env.SECURITY_TOKEN,
    To: emailInput.value,
    From: 'fearos@valar.ru',
    Subject: 'Test email sending',
    Body: textInput.value,
  }).then((message) => console.log(message));

  console.log('click');
  clearForm();
});
