// let menuOpenBtn = document.getElementById("mobile-menu-open");
// let menuCloseBtn = document.getElementById("mobile-menu-close");
// let menu = document.getElementById("menu");

// let isMenuOpen = false;


// function burgerMenuClicked() {
// 	if (isMenuOpen == false){
// 		menuOpenBtn.classList.toggle("hide");
// 		menuCloseBtn.classList.toggle("show");
// 		menu.classList.toggle("menu");
// 		isMenuOpen = true;
// 	}

// 	else if (isMenuOpen == true){
// 		menuOpenBtn.classList.toggle("hide");
// 		menuCloseBtn.classList.toggle("show");
// 		menu.classList.toggle("menu");
// 		isMenuOpen = false;
	
// 	}	
	
// }



// function initialize() {
// 	console.log("Initialized")
// }






// $(window).load(function(){
//    		// PAGE IS FULLY LOADED  
//    		// FADE OUT YOUR OVERLAYING DIV
//    		
// 	});

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
	$('#load').fadeOut();
});