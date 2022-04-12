async function postFormData(data) {
  return await fetch(`/wp-json/vsbl/v1/contact_form`, {
		method: 'POST',
    body: JSON.stringify(data)
	});
}

export { postFormData }