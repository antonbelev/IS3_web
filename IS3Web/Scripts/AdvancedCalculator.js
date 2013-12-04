//var expr = "Gold Silver + Bronze +";

function parser(expr, index){
	var stack = expr.split(" ");
	if(stack.length < 3 || stack.length%2 == 0){
		throw ("Invalid expression");
	}
	var result = 0;
	while (stack.length > 1){
		var arg1 = stack[0];
		var arg2 = stack[1];
		var opp = stack[2];
		var num1 = parseFloat(arg1);
		var num2 = parseFloat(arg2);
		if (isNaN(num1)){
			num1 = parseFloat(json[index][arg1]);
		}
		if (isNaN(num2)){
			num2 = parseFloat(json[index][arg2]);
		}
		stack.shift();
		stack.shift();
		switch(opp){
			case "+":
				stack[0] = num1 + num2;
				break;
			case "-":
				stack[0] = num1 - num2;
				break;
			case "*":
				stack[0] = num1 * num2;
				break;
			case "/":
				stack[0] = num1 / num2;
				break;
			default:
				throw "invalid expression";
		}
	}
	return stack[0];
}

function drawChartAdvancedCalculator(expr) {

        // Create the data table.
        var data = new google.visualization.DataTable();
 
         data.addColumn('string', 'Country');
		 data.addColumn('number', 'Shit');
        
		
		//var extremeValues = getMinMaxForAttributes(selectedColumns);
		//countCountries = 0;
		for (var i = 0; i < json.length; i++) {
			if (unselectedCountries.indexOf(json[i]["CountryID"]) < 0){
			
				var currValue = parseFloat(parser(expr, i));
				var country = json[i]["Country"];
				
				var currList = [];
			currList.push(country);
			currList.push(currValue);
			data.addRow(currList);
            } 
		}


        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
            'height': 500,//$( document ).innerHeight() - 50,
            'width': '100%',};

        // Instantiate and draw our chart, passing in some options.
        var chart;
		switch(chartChoice) {
			case(chartEnum.LINE): 
				chart = new google.visualization.LineChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.BAR): 
				chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.GEO):
				chart = new google.visualization.GeoMap(document.getElementById('chart_div'));
				break;
		}
		$(".divInnderChar").show();
        $(".divInnderError").hide();
		chart.draw(data, options);
      }