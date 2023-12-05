document.addEventListener('DOMContentLoaded', () => {
	new TypeIt('#header', {
		speed: 150,
	})
		.type('Do you know what day is it today??!')
		.pause(1000)
		.go()
})

let lmao = document.querySelector('#lame')
let pop = document.querySelector('#pop-out')

const myPopup = new Popup({
	id: 'my-popup',
	title: 'lmao you suck',
	content: `
	<img src="img/giphy.gif" alt="giphy" />
	`,
})

lmao.addEventListener('click', () => {
	myPopup.show()
})
