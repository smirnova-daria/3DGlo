const sendForm = ({
	formId,
	someElem = []
}) => {
	const form = document.getElementById((formId))
	const statusBlock = document.createElement('div')

	// const loadText = 'Загрузка...'
	const errorText = 'Ошибка...'
	const successText = 'Спасибо! Наш менеджер с вами свяжется'

	const validate = (list) => {
		let success = true

		if (list) {
			list.forEach(input => {
				if (input.name === 'user_name') {
					if (/[^а-яА-Я-\s]/g.test(input.value)) {
						success = false
					}
				} else if (input.name === 'user_phone') {
					if (/[^0-9\-\(\)\+]/g.test(input.value)) {
						success = false
					}
				} else if (input.name === 'user_message') {
					if (/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(input.value)) {
						success = false
					}
				}
			})
		}

		return success
	}

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
	}

	const showMessage = (status, message = '') => {
		statusBlock.classList.remove('sk-circle-bounce')
		statusBlock.style.color = '#fff'
		statusBlock.innerHTML = ''

		if (status === 'error') {
			statusBlock.innerHTML = `<img src="images/icons/error.svg" width='30px;'/> ${errorText} ${message}`
		} else if (status === 'success') {
			statusBlock.innerHTML = `<img src="images/icons/success.svg" width='30px;'/> ${successText}`
		}

		setTimeout(() => {
			statusBlock.remove()
		}, 5000)
	}

	const submitForm = () => {
		const formElements = form.querySelectorAll('input')
		const formData = new FormData(form)
		const formBody = {}

		statusBlock.className = 'sk-circle-bounce'
		let temp = ``
		for (let i = 1; i <= 12; i++) {
			temp += `		
			<div class="sk-child sk-circle-${i}"></div>		
		`
		}
		statusBlock.innerHTML = temp

		form.append(statusBlock)

		formData.forEach((val, key) => {
			formBody[key] = val
		})

		someElem.forEach(elem => {
			const element = document.getElementById(elem.id)
			if (elem.type === 'block') {
				formBody[elem.id] = element.textContent
			} else if (elem.type === 'input') {
				formBody[elem.id] = element.value
			}
		})
		if (validate(formElements)) {
			sendData(formBody)
				.then(data => {
					showMessage('success')

					formElements.forEach(input => {
						input.value = ''
					})
				}).catch(error => {
					showMessage('error', 'Данные не удалось отправить')
				})
		} else {
			showMessage('error', 'Данные не валидны')
		}
	}

	try {
		if (!form) {
			throw new Error('Верните форму, пожалуйста')
		}
		form.addEventListener('submit', e => {
			e.preventDefault()
			submitForm()
		})
	} catch (error) {
		console.log(error.message)
	}
}

export default sendForm