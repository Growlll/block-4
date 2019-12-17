let brands = document.querySelector('.brands')
let item = document.querySelectorAll('.brands-name')
let items  = brands.children
let button = document.querySelector('.show')
let flag = true


button.addEventListener('click', function () {

	if (flag) {
			for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('hidden')
			}
			button.innerHTML = 'Скрыть'
			button.style.backgroundImage = 'url("img/icons/arrow-top.svg")'
			flag = false
	} else {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.add('hidden')
		}
		button.innerHTML = 'Показать все'
		button.style.backgroundImage = 'url("img/icons/arrow-bottom.svg")'
		flag = true
	}
})

