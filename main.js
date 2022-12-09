$("#mobile-menu-open").click(function(){
	$("#mobile-menu-open").hide();
	$("#menu").slideDown();
	$("#mobile-menu-close").fadeIn();
});

$("#mobile-menu-close").click(function(){
	$("#mobile-menu-open").slideDown();
	$("#mobile-menu-close").hide();
	$("#menu").slideUp();
});

$(document).ready(function() {
	$('#load').hide();
});