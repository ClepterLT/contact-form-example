async function postFormData(data) {
  const response = await fetch(`/wp-json/vsbl/v1/contact_form`, {
		method: 'POST',
    body: JSON.stringify(data)
	});

  return response.json();
}

export { postFormData }