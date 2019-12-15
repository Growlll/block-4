let brands = document.querySelector('.brands')
let items  = brands.children
let button = document.querySelector('.show')

button.addEventListener('click', function () {
	for (let i = 0; i < items.length; i++) {
		items[i].classList.remove('hidden-mobile')
	}
})

