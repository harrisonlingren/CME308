$(document).ready(function() {
	
	var name = prompt("What is your name?");
	
	$('ul').append('<li>' + name + '</li>');
	$('div').append(name);
	
	$('input').click(function(event) {
		//event.preventDefault();
		$('div').animate({
        'marginLeft' : "+=200px", // moves right
		'width' : "300px", // adjusts width
		'font-size' : "24px",  // size
        }, 1000);
		$('div').animate({
        'marginTop' : "+=200px", // moves down
		'opacity' : "0.5",  // opacity --> 50%
		'font-size' : "34px",  // size
        }, 1000);
		$('div').animate({
        'marginLeft' : "-=200px", //moves left
		'opacity' : "0.2",   //adjusts width
		'font-size' : "24px", // size
        }, 1000);
		$('div').animate({
        'marginTop' : "-=200px", //moves up
		'width' : "200px", // adjusts width
		'opacity' : "1",  // opacity --> full
		'font-size' : "24px", // size
        }, 1000);
	});
});