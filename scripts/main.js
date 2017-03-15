$(document).on("click", ".focus", function(event){
	event.preventDefault();

	$("html, body").animate({
		scrollTop: $( $.attr(this, "href") ).offset().top - 100
	}, 500);
});