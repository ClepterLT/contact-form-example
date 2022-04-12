import Forms from "./forms.class";

document.addEventListener("DOMContentLoaded", function(){
  try {
    const forms = new Forms();
    const formBtns = document.querySelectorAll('[data-submit]');
    
    formBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        forms.handleSubmit(btn.dataset.submit);
      })
    });
  } catch (e) {
    // do nothing
  }
});