import FormValidation from "./form-validation.class";

document.addEventListener("DOMContentLoaded", function(){
  try {
    const formValidator = new FormValidation();
    const formBtn = document.querySelector('[data-validate="validate"]');
    
    formBtn.addEventListener('click', formValidator.handleChange);
  } catch (e) {
    // do nothing
  }
});