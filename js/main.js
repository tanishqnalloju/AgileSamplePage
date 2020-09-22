var main_val = {
  "Food": "Product, Coffee, Ice Cream",
  "Clothing": "Product, Pants, Shirts",
  "Coffee": "Brand, Coffe Day, StarBucks",
  "IceCream": "Brand, Cream Stone, Baskin and Robin",
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


var month_sales = {
  "CoffeeD": [      
			{ y: 28, label: "January" },
			{ y: 16,  label: "February" },
			{ y: 76,  label: "March" },
			{ y: 35,  label: "April" },
		],
  "StarB": [      
			{ y: 78, label: "January" },
			{ y: 35,  label: "February" },
			{ y: 65,  label: "March" },
			{ y: 31,  label: "April" },
		],
  "CreamStone": [      
			{ y: 23, label: "January" },
			{ y: 26,  label: "February" },
			{ y: 36,  label: "March" },
			{ y: 89,  label: "April" },
		],
  "BaskinAR": [      
			{ y: 2, label: "January" },
			{ y: 34,  label: "February" },
			{ y: 85,  label: "March" },
			{ y: 58,  label: "April" },
		],
  "LP": [      
			{ y: 75, label: "January" },
			{ y: 16,  label: "February" },
			{ y: 66,  label: "March" },
			{ y: 33,  label: "April" },
		],
  "PeterE": [      
			{ y: 25, label: "January" },
			{ y: 46,  label: "February" },
			{ y: 56,  label: "March" },
			{ y: 13,  label: "April" },
		],
  "Polo":[      
			{ y: 63, label: "January" },
			{ y: 46,  label: "February" },
			{ y: 26,  label: "March" },
			{ y: 13,  label: "April" },
		],
  "Marco":[      
			{ y: 34, label: "January" },
			{ y: 56,  label: "February" },
			{ y: 16,  label: "March" },
			{ y: 43,  label: "April" },
		],
}


//$("#brand").change(function () {
//
//	var $dropdown = $(this);
// 
//    var key = $dropdown.val();
//    var vals = []
// 
//		switch(key) {
//			case 'Coffee Day':
//				vals = month_sales.CoffeeD
//				break;
//			case 'Star Bucks':
//				vals = month_sales.StarB;
//                break;
//			case 'Cream Stone':
//				vals = month_sales.CreamStone;
//				break;
//			case 'Baskin and Robins':
//				vals = month_sales.BaskinAR;
//				break;    
//			case 'Louis Phillipe':
//				vals = month_sales.LP;
//				break;
//			case 'Peter England':
//				vals = month_sales.PeterE;
//				break;
//			case 'Polo':
//				vals = month_sales.Polo;
//				break;
//			case 'Marco':
//				vals = month_sales.Marco;
//				break;           
//			default:
//				vals = [23, 26, 56, 33,];
//		}
// 
//    chart.options.data[0].dataPoints = vals;
//    chart.render();
//});

