$( document ).ready(function() {
	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});

	var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4500); // Change image every 4.5 seconds
	}

});