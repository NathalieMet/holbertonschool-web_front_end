document.addEventListener('DOMContentLoaded', (event) => {
	const button_1 = document.querySelector('.button-1');
	button_1.addEventListener('click', setCookies);

	const button_2 = document.querySelector('.button-2');
	button_2.addEventListener('click', showCookies);

	function setCookies() {
		const first_name = document.querySelector('#firstname').value;
		document.cookie = `firstname=${first_name}`;

		const email = document.querySelector('#email').value;
		document.cookie = `email=${email}`
	}

	function showCookies() {
		const paragraph = document.createElement('p');
		const textNode = document.createTextNode(`Cookies: ${document.cookie}`);
		paragraph.appendChild(textNode);
		document.body.appendChild(paragraph);
	}

});
