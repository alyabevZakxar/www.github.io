$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger ,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
/*scroll*/
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
	anchor.addEventListener("click", function(e){
		e.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior:"smooth",
			block:"start"
		})
	});
}

