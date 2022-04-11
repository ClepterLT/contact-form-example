import { create, test, enforce, optional } from 'vest';
import { postFormData } from './contact-form.api';

export default class ContactForm {
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
				const inputError = parent.querySelector(".input__error");
				const inputMessage = `<span class="input__error-icon"></span><span class="input__message">${messageBlank[0]}</span>`;
				const inputExclamation = `<span class="input__error-exclamation"></span>`;

				if(messageBlank.length > 0) {
					input.type !== 'checkbox' ? parent.insertAdjacentHTML('beforeend', inputExclamation) : '';
					parent.querySelector('.input__message') ? '' : inputError.insertAdjacentHTML('beforeend', inputMessage);
				} else if(messageBlank.length === 0) {
					inputError.innerHTML = '';
					parent.querySelector('.input__error-exclamation')?.remove();
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
		formBtn.removeEventListener('click', this.handleChange);

		postFormData(this.formValues)
		.then(res => {
			form.style = 'display:none;';
			document.querySelector('.success').style = 'display:flex;';
		})
	}
		
}

}