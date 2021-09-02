/* Responsive Navbar Dropdown Burger */
$(document).ready(function() {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu, .header__link').toggleClass('active');
	});
});

/* Move to Left&Right Signin+Signup blocks with click */
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
var left = $(document).ready(function() {
	$('.main__form:first-of-type .form__link').click(function(event) {
		event.preventDefault();
		$('.main__form:first-of-type, .main__form:last-of-type').removeClass('right').addClass('left');
	});
});
var right = $(document).ready(function() {
	$('.main__form:last-of-type .form__link').click(function(event) {
		event.preventDefault();
		$('.main__form:first-of-type, .main__form:last-of-type').addTemporaryClass('right', 1500).removeClass('left');
	});
});

/* Remove placeholder attribute by click to <input> & <textarea> */
$(document).ready(function () {
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
});

/* LocalStorage for Signin&Signup */
function signUp(e) {
	let email = document.getElementById("signup_email").value,
		pass = document.getElementById("signup_pass").value,
		passRepeat = document.getElementById("signup_pass_repeat").value,
		date = document.getElementById("signup_date").value,
		male = document.getElementById("signup_male").value,
		female = document.getElementById("signup_female").value,
		btn = document.getElementById("signup_btn").value;

	let formData = JSON.parse(localStorage.getItem('formData')) || [];

	let exist = formData.length && 
		JSON.parse(localStorage.getItem('formData')).some(data => 
			data.email == email && 
			data.pass == pass && 
			data.passRepeat == passRepeat && 
			data.date == date && 
			data.male == male && 
			data.female == female
		);

	if(!exist){
		if(pass !== passRepeat){
			alert("Ooopppssss... Your password is incorrect!\nPlease try again");
		} else {
			formData.push({ email, pass, date, male, female });
			localStorage.setItem('formData', JSON.stringify(formData));
			document.querySelector('#signup').reset();
			// document.getElementById('signin_email').focus();
			alert("Account Created.\n\nPlease Sign In using the link below.");
			right();
		}
	}
	else{
		document.querySelector('#signup').reset();
		alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
		right();
	}
	e.preventDefault();
}

function signIn(e) {
	let email = document.getElementById("signin_email").value,
		pass = document.getElementById("signin_pass").value,
		btn = document.getElementById("signin_btn").value;
	let formData = JSON.parse(localStorage.getItem('formData')) || [];
	let exist = formData.length && 
		JSON.parse(localStorage.getItem('formData')).some(data => 
			data.email == email && 
			data.pass == pass
		);
		
	if(!exist){
		alert("Incorrect login credentials");
		document.querySelector('#signin').reset();
	}
	else{
		localStorage.setItem("loggedUser", email);
		location.href = "./main.html";
	}
	e.preventDefault();
}

let headerUserName = document.getElementById("user_name");
let userName = localStorage.getItem("loggedUser") || '...';
headerUserName.innerText = userName.replace(/^(.{30}).{2,}/, "$1…");

/* Clear Storage with Exceptions */
let headerLink = document.getElementsByClassName("header__link");
headerLink[headerLink.length - 1].addEventListener("click", function() {
	for (let key in localStorage){
		console.log(key)
		if(key !== "formData") {
			localStorage.removeItem(key);
		}
	}
})