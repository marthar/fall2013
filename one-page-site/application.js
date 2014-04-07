var total = 0;

// Write our base functions
function showProduct(name){
		var earring= Earrings[name];
		$(".overlay").fadeIn("slow");
		$(".details").fadeIn("slow");

		
		$("#detail-title").text(earring.title);
		$("#detail-image").attr("src",earring.image);
		$("#detail-description").text(earring.description);
		$("#detail-price").text("$" + earring.price);

		$("#add-to-cart").click(function() {
			var quantity=parseInt($("#detail-quantity").val())
			addItem(name, quantity)

		});
}

function addItem(name, quantity){
	if(!cart[name]) {cart[name] = 0;}
	cart[name] += 1*quantity;
	updateCart()
}


var cart = {};

function updateCart(){
	total = 0;

	for(var itemName in cart) {
		var earring= Earrings[itemName];
		var quantity = cart[itemName];
		var price = earring.price;
		var itemPrice= earring.price*quantity;
		total += itemPrice;
	}

	$("#cart").text("Cart" + ":" + " " + "$" + total)
}


function hideProduct(){
		$(".overlay").fadeOut("slow");
		$(".details").fadeOut("slow");

		$("#add-to-cart").off("click");
	
}


$('.inner').text('itemPrice')
    
function checkOut() {

  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = total * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'http://www.astutegraphics.com/images/blog/tutorials/widthscribe_patterns_18_mar_2013/floral-seamless-pattern.png',
    token: function(token, args) {
    
    }
  });












  handler.open({
    name: 'Dangles & Bangles',
    description: description,
    amount: amount
  });

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

		$("#cart").click(function() {
	checkOut();
});

});
