// Responsive Navbar Dropdown Burger
$(document).ready(function() {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu, .header__link').toggleClass('active');
	});
});

// Move to Left&Right Signin+Signup blocks with click
(function($){
    $.fn.extend({
        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);
            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });
})(jQuery);
$(document).ready(function() {
	$('.main__form:first-of-type .form__link').click(function(event) {
		event.preventDefault();
		$('.main__form:first-of-type, .main__form:last-of-type').removeClass('right').addClass('left');
	});
});
$(document).ready(function() {
	$('.main__form:last-of-type .form__link').click(function(event) {
		event.preventDefault();
		$('.main__form:first-of-type, .main__form:last-of-type').addTemporaryClass('right', 1500).removeClass('left');
	});
});

// Remove placeholder attribute by click to <input> & <textarea>
$(document).ready(function () {
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
});