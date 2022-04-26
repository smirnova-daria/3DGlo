const menu = () => {
	const menu = document.querySelector('menu')
	let link

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	const scroll = (link) => {
		const id = link.getAttribute('href').substring(1)
		const section = document.getElementById(id)

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			})
		}
	}

	document.body.addEventListener('click', e => {
		if (e.target.closest('.menu')) {
			handleMenu()
		} else if (e.target.matches('menu a')) {
			e.preventDefault()
			handleMenu()
			link = e.target
			scroll(link)
		} else if (e.target.closest('main>a')) {
			e.preventDefault()
			link = e.target.closest('main>a')
			scroll(link)
		} else if (!e.target.closest('menu')) {
			if (menu.classList.contains('active-menu')) {
				handleMenu()
			}
		}
	})
}

export default menu