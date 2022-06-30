export default class Form {
  constructor(emailField, messageField, sendButton) {
    this.emailField = emailField;
    this.messageField = messageField;
    this.sendButton = sendButton;
  }

  addClass(input, className) {
    const removeClassName = className === 'disable' ? 'confirm' : 'disable';
    input.classList.remove(removeClassName);
    input.classList.add(className);
  }

  validateEmail() {
    return String(this.emailField.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? 'confirm'
      : 'disable';
  }

  checkValidateEmail() {
    this.addClass(this.emailField, this.validateEmail());
    return this.validateEmail();
  }

  checkMessageText() {
    const validateMessage =
      this.messageField.value === '' ? 'disable' : 'confirm';
    this.addClass(this.messageField, validateMessage);
    return validateMessage;
  }

  checkSendButton() {
    const statusButton =
      this.checkValidateEmail() === 'confirm' &&
      this.checkMessageText() === 'confirm'
        ? 'confirm'
        : 'disable';
    this.addClass(this.sendButton, statusButton);
  }

  clearForm() {
    this.emailField.value = '';
    this.messageField.value = '';
    this.emailField.classList.remove('confirm');
    this.messageField.classList.remove('confirm');
    this.addClass(this.sendButton, 'disable');
  }
}
