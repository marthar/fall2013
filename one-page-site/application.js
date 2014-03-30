// Write our base functions
function showProduct(name){
		var earring= Earrings[name];
		$(".overlay").fadeIn("slow");
		$(".details").fadeIn("slow");

		
		$("#detail-title").text(earring.title);
		$("#detail-image").attr("src",earring.image);
		$("#detail-description").text(earring.description);
		$("#detail-price").text("$" + earring.price);
}


function hideProduct(){
		$(".overlay").fadeOut("slow");
		$(".details").fadeOut("slow");
	
}


// When the page loads, add in our event handlers
$(function() {

	$(".images").click(function() {
		
		var name = $(this).data("product-id")
		showProduct(name);
		});

	$(".overlay").click(function() {
		hideProduct();
	});

});
