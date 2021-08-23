// Responsive Navbar Dropdown Burger
$(document).ready(function() {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu, .header__link').toggleClass('active');
	});
});