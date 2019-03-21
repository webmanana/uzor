$('#fullpage').fullpage({
	//options here
	scrollHorizontally: true,
	keyboardScrolling: true,
	controlArrows: true,
	parallax: true,
	dragAndMove: true,
	setKeyboardScrolling: true,
	lazyLoading: true,
	loopHorizontal: false
});
//methods
$(document).on('click', '.arrow_up', function() {
	$.fn.fullpage.moveSectionUp();
});
$(document).on('click', '.arrow_down', function() {
	$.fn.fullpage.moveSectionDown();
});
$(window).on('load', function() {
	var $preloader = $('#page-preloader'),
		$spinner = $preloader.find('.preloader');
	$spinner.fadeOut();
	$preloader.delay(700).fadeOut('slow');
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
	relativeInput: true
});
var scene1 = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene1, {
	relativeInput: true
});
var scene1 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene1, {
	relativeInput: true
});
var scene1 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene1, {
	relativeInput: true
});
var scene1 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene1, {
	relativeInput: true
});

// search
$( ".search_trigger" ).click(function( event ) {
	$(".search_block").css("display", "flex");
	$(".header_text").css("display", "none");
	$(".search").focus();
	$(".search_trigger").css("border", "none");
});
$( ".search" ).keyup(function( event ) {
	$(".search_submit").css("color", "#9BC329");
});
$( ".search_trigger_mobile" ).on('click', function () {
	$(".search_canvas").focus();
});
