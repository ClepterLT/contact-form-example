import { create, test, enforce, optional } from 'vest';
import 'vest/enforce/compounds';
import { postFormData } from './forms.api';

export default class Forms {
  constructor() {
    this.formValues = {};
  }

validate = create((data = {}) => {
		test('fullName', 'This field cannot be blank', () => {
				enforce(data.fullName.value).isNotEmpty();
		});

		test('contacts', 'This field cannot be blank', () => {
				enforce(data.contacts.value).isNotEmpty();
		});

		test('contacts', 'Please enter valid Phone or Email', () => {
			enforce(data.contacts.value).anyOf(enforce.matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/), enforce.isNumeric()).isTruthy();
		});

		test('message', 'This field cannot be blank', () => {
				enforce(data.message.value).isNotEmpty();
		});

		test('privacyPolicy', 'Please aggree to our Privacy Policy', () => {
      enforce(data.privacyPolicy.checked).isTruthy();
    });    

});

changeUi = (result, inputs) => {
	
		inputs.forEach((input) => {

				const messageBlank = result.getErrors(input.name);
				const parent = input.parentElement;
				const inputError = parent.querySelector(".form-item__error");
				const inputMessage = `<span class="form-item__error-icon"></span><span class="form-item__message">${messageBlank[0]}</span>`;
				const inputExclamation = `<span class="form-item__error-exclamation"></span>`;

				if(messageBlank.length > 0) {
					input.type !== 'checkbox' ? parent.insertAdjacentHTML('beforeend', inputExclamation) : '';
					parent.querySelector('.form-item__message') ? '' : inputError.insertAdjacentHTML('beforeend', inputMessage);
				} else if(messageBlank.length === 0) {
					inputError.innerHTML = '';
					parent.querySelector('.form-item__error-exclamation')?.remove();
				}
				
		});

	};

handleSubmit = (formName) => {
	const form = document.querySelector(`[data-form="${formName}"]`);
	const inputs = form.querySelectorAll('[required]');

	inputs.forEach(({ name, value, checked }) => {
		this.formValues[name] = { value, checked };
	});

	const res = this.validate(this.formValues).done((result) => this.changeUi(result, inputs));

	if(!res.hasErrors()) {
		const data = {};
		Object.keys(this.formValues).forEach((key) => {
			if (this.formValues[key].value !== 'on') data[key] = this.formValues[key].value;
		});
		postFormData(data)
		.then(res => {
			form.style = 'display:none;';
			document.querySelector('.success').style = 'display:flex;';
		})
		.catch(error => {
			console.log(error);
		})
		.finally(() => {
			this.formValues = {};
		});
	}
		
}

}