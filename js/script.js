$(document).ready(function(){
	
//	картинка с лого появляется
	setTimeout(function(){
		$('.logo').fadeIn('slow');		
	},1000);
	
//	наведение на меню
	$('li').on('mouseover', function(){
		$(this).children('span').css({"opacity":"1"});
	});
	$('li').on('mouseleave', function(){
		$(this).children('span').css({"opacity":"0"});
	});
	
//	Якорьный скролл на нав
	$("#menu-nav").on("click","a", function (event) {
       
      event.preventDefault();
 		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
});

	
//	Появления кнопки посмотреть меню
	$('.list').on('mouseover', function(){
		$(this).children('.showLightbox').children('.open_modal').fadeIn('fast');
	});
	$('.list').on('mouseleave', function(){
		$(this).children('.showLightbox').children('.open_modal').fadeOut('fast');
	});
	
	
				//	нажатие на меню

	$('.open_modal, .open-modal').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay-popup').show(); // Открываем блок заднего фона
}) 
	$('.overlay-popup, .fa-times, .fa-times-circle').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay-popup, .wrappedMenu, .innermap').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})

//	карусель
	 var owl = $('.owl-carousel');
	owl.owlCarousel({
	animateOut: 'fadeOut',
    items:1,
	loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

	window.addEventListener('scroll', function() {
		$('ul li span').css({"opacity":"0"});  
	});
	
	
	
	
	
	
	
	
	
	
});					
						

	