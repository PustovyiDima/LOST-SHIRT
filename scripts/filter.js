(function(){

	let elem = document.querySelector('.products__list');
	let iso = new Isotope( elem, {
		// options
	  itemSelector: '.products__item',
  		filter:'.new'
	});

	const controlls = document.querySelectorAll('.filter__link');
	const activeClass = "filter__item--active";

	controlls.forEach(function(control){

		control.addEventListener('click', function(x){
			x.preventDefault();

			const filterName = control.getAttribute('data-filter');

			controlls.forEach(function(link){
				link.closest(".filter__item").classList.remove(activeClass);
			})

			control.closest('.filter__item').classList.add(activeClass);

			iso.arrange({
				filter: `.${filterName}`
			})
		});
	});
}());