import { create, test, enforce, optional } from 'vest';

export default class FormValidation {
  constructor() {
    this.formValues = {};
  }

validationContact = create((data = {}, currentField) => {
		test('fullName', 'This field cannot be blank', () => {
				enforce(data.fullName.value).isNotEmpty();
		});

		test('contacts', 'This field cannot be blank', () => {
				enforce(data.contacts.value).isNotEmpty();
		});

		test('message', 'This field cannot be blank', () => {
				enforce(data.message.value).isNotEmpty();
		});

		test('privacyPolicy', 'Please aggree to our Privacy Policy', () => {
      enforce(data.privacyPolicy.checked).isTruthy();
    });    

});

handleResult = (result) => {
	const allFormInputs = document.querySelectorAll('[data-validate="validation-required"]');
	
		allFormInputs.forEach((input) => {

				const messageBlank = result.getErrors(input.name);
				const parent = input.parentElement;
				const inputMessage = parent.querySelector(".input__message");

				if(messageBlank.length > 0) {
					input.classList.remove("form-element--success");
					input.classList.add("form-element--empty");
					inputMessage.innerText = messageBlank[0];
				} else if(messageBlank.length === 0) {
					input.classList.add("form-element--success");
					input.classList.remove("form-element--empty");
					inputMessage.innerText = '';
				}
				
		});

	};

handleChange = (e) => {
  e.preventDefault();
	
	const form = e.target.closest('.js-form');
  const formBtn = e.target;
	const allFormInputs = Array.from(form.querySelectorAll('[data-validate="validation-required"]'));

	allFormInputs.forEach(({ name, value, checked }) => {
		Object.assign(this.formValues, {
			[name]: { value, checked }
		});
	});

	let res = this.validationContact(this.formValues, name).done(this.handleResult);

	if(!res.hasErrors()) {
		formBtn.removeEventListener('click', handleChange);
		formBtn.click();
	}
		
}

}