import ContactForm from "./contact-form.class";

document.addEventListener("DOMContentLoaded", function(){
  try {
    const formValidator = new ContactForm();
    const formBtn = document.querySelector('[data-validate="validate"]');
    
    formBtn.addEventListener('click', formValidator.handleChange);
  } catch (e) {
    // do nothing
  }
});