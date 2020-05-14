(function (){

	const openingBtn = document.querySelector('.sidebar__hamburger');
	const closegBtn = document.querySelector('.sidebar__close');
	const sdbr = document.querySelector('.sidebar');


	openingBtn.addEventListener('click', function(){
		sdbr.classList.add("sidebar--opened");
	});

	closegBtn.addEventListener('click', function(){
 		sdbr.classList.remove("sidebar--opened");
	});

}());


