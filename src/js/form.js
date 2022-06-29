export default class Form {
  constructor(emailField) {
    this.emailField = emailField;
  }

  validateEmail() {
    return String(this.emailField.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  checkValidateEmail() {
    if (this.emailField.value === '') {
      this.emailField.classList.remove('wrong');
      this.emailField.classList.remove('confirm');
      return;
    }
    if (this.validateEmail()) {
      this.emailField.classList.remove('wrong');
      this.emailField.classList.add('confirm');
    } else {
      this.emailField.classList.remove('confirm');
      this.emailField.classList.add('wrong');
    }
  }
}
