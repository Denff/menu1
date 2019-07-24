// let navName = document.getElementsByClassName('nav__name'),
// 	navInfo = document.getElementsByClassName('nav__info'),
// 	navInfoClose = document.getElementsByClassName('item-info__close');
//
// for (let i = 0; i < navName.length; i++) {
// 	navName[i].addEventListener('click', function() {
// 		if(!(this.classList.contains('is-active'))){
// 			for(let i = 0; i < navName.length; i++) {
// 				navName[i].classList.remove('is-active');
// 			}
// 			this.classList.add('is-active');
// 		}
// 	});
// }
//
// navInfoClose.addEventListener('click', function() {
// 	for(let i = 0; i < navName.length; i++) {
// 		navName[i].classList.remove('is-active');
// 	}
// });



(function($) {
	$(document).ready( function() {

		let name = ".nav__name";
		let info = ".nav__info";
		let close = ".item-info__close";


		$(name).on('click', function(e) {
			e.preventDefault();
			if (!$(this).hasClass('is-active')) {
				$(name).removeClass("is-active");
				$(name).parent().find(info).removeClass('is-active');
				$(this).toggleClass("is-active");
				$(this).parent().find(info).addClass('is-active');
			} else {
				$(this).removeClass("is-active");
				$(this).parent().find(info).removeClass('is-active');
			}
		});
		$(close).on('click', function(e) {
			e.preventDefault();
			$(this).parent().removeClass('is-active');
			$(name).removeClass("is-active");
		});
    });
})(jQuery);
