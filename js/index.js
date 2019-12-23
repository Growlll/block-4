let brands = document.querySelector('.brands')
let btnShowBrands = document.querySelector('.show')
let isShow = false


btnShowBrands.addEventListener('click', function () {

	let btnShowBrandsValue = btnShowBrands.innerHTML

	if (isShow) {
		brands.classList.remove('brands-show')
		btnShowBrands.classList.remove('show-active')
		btnShowBrands.innerHTML = btnShowBrands.dataset.show
		btnShowBrands.dataset.show = btnShowBrandsValue
		isShow = false
	} else {
		brands.classList.add('brands-show')
		btnShowBrands.classList.add('show-active')
		btnShowBrands.innerHTML = btnShowBrands.dataset.show
		btnShowBrands.dataset.show = btnShowBrandsValue
		isShow = true
	}

})

