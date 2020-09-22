var main_val = {
  "Food": "Product, Coffee, Ice Cream",
  "Clothing": "Product, Pants, Shirts",
  "Coffee": "Brand, Coffee Day, StarBucks",
  "IceCream": "Brand, Cream Stone, Baskin and Robins",
  "Pants": "Brand, Louis Phillipe, Peter England",
  "Shirts": "Brand, Polo, Marco",
}

$("#categoryType").change(function() {

	var $dropdown = $(this);

	
		var key = $dropdown.val();
		var vals = [];
 
		switch(key) {
			case 'Food':
				vals = main_val.Food.split(",");
				break;
			case 'Clothing':
				vals = main_val.Clothing.split(",");
				break;
			case 'Category':
				vals = ['Product'];
		}
				
		
		var $secondChoice = $("#product");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

});

$("#product").change(function() {

	var $dropdown = $(this);

	
		var key = $dropdown.val();
		var vals = [];
 
		switch(key) {
			case 'Coffee':
				vals = main_val.Coffee.split(",");
				break;
			case 'Ice Cream':
				vals = main_val.IceCream.split(",");
				break;
			case 'Pants':
				vals = main_val.Pants.split(",");
				break;
			case 'Shirts':
				vals = main_val.Shirts.split(",");
				break;
           case 'Product':
               vals=['Brand'];
               break;
			default:
				vals = ['Brand'];
		}
				
		
		var $secondChoice = $("#brand");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

});

