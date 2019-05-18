'use strict';

$(document).ready(function(){
	var createUrl = function(){

		//DEMO page github
		var headlineCustom = $('input.headlineCustom').val();
		var overlayCustom = $('input.overlayCustom').val();
		var epicname = $('input.epicnameCustom').val();
		var buttonCustom = $('input.buttonCustom').val();
		var alertValue = $('input.value').val();
		var direction = $('input.direction').val();

		var url = 'file:///C:/CodeRepository/creator/creatorcode/alertbox.html?' + '&' + headlineCustom + '&' + overlayCustom + '&' + epicname + '&' + buttonCustom + '&' + alertValue + '&' + direction;

		window.location.href = url;

	}

	$('.createAlert').click(function(){
		createUrl();
	});

});