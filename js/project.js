$(".button-collapse").sideNav();
$('.button-collapse').sideNav({
	menuWidth: 250, // Default is 300
	draggable: true, // Choose whether you can drag to open on touch screens,
  }
);


$(document).ready(function(){
	$('.scrollspy').scrollSpy({
		scrollOffset: 50
	});
});


$(document).ready(function(){
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});
