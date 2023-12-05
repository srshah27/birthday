document.addEventListener('DOMContentLoaded', () => {
	new TypeIt('#header', {
		speed: 150,
	})
		.type('Good Evening!')
		.pause(1000)
		.type(' Dhara!!')
		.go()
})
