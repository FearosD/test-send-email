import Form from './form.js';

const btn = document.querySelector('.form__send-button');
const emailInput = document.querySelector('.email__field');
const textInput = document.querySelector('.message__field');

const form = new Form(emailInput);

emailInput.addEventListener('focusout', function () {
    form.checkValidateEmail();
});
