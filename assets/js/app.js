// JavaScript Document

function init() {

	window.addEventListener('scroll', function (e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300,
			header = document.querySelector("header");
		if (distanceY > shrinkOn) {
			classie.add(header, "smaller");
		} else {
			if (classie.has(header, "smaller")) {
				classie.remove(header, "smaller");
			}
		}
	});

	$.ajax({
		method: 'GET',
		url: 'assets/data/menu.json',
		datatype: 'json',
		success: function (data) {
			console.log('all good');
			console.log(data.menu.length);
			console.log(data.menu);
			if (data.menu.length > 0) {
				data.menu.forEach(function (data) {

					console.log(data.MenuName);
					console.log(data.MenuLink);

					$('nav').append('<ahref="' + data.MenuLink + '">' + data.MenuName + '</a>');
				});
			}
		},
		error: function () {
			console.log('all is not good');
		}
	});




}
window.onload = init();
