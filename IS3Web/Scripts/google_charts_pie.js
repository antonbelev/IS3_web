// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
	  google.load('visualization', '1.0', {'packages':['geomap']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);
	  chartEnum = {
		LINE : 0,
		BAR : 1,
		SCATTER : 2,
		GEO : 3
	  };
	  var chartChoice = chartEnum.LINE;
	  var unselectedCountries = [];
	  var invertedAttributes = [];
      var selectedColumns = [];
	  var isNormalized = false;
	  var zoomFactor = 180;
	  var minIndexToDisplay = 0;
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
		if (selectedColumns.length <= 0) {
            $(".divInnderChar").hide();
            $(".divInnderError").show().height($( document ).innerHeight() - 50);            
            return;
        }
        else{
            $(".divInnderChar").show();
            $(".divInnderError").hide();
        }
        // Create the data table.
        var data = new google.visualization.DataTable();
        if(chartChoice != chartEnum.SCATTER) {
            data.addColumn('string', 'Country');
        }

        for (var i = 0; i < selectedColumns.length; i++) {
            data.addColumn('number', selectedColumns[i]);
		}
		
		var extremeValues = getMinMaxForAttributes(selectedColumns);
		console.log(invertedAttributes + " : "+selectedColumns);
		//data.addColumn('number', '#Silver');
		for (var i = 0; i < json.length; i++) {
			if (unselectedCountries.indexOf(json[i]["CountryID"]) < 0){
                var content = [];
				if(chartChoice != chartEnum.SCATTER) {
                    content.push(json[i]["Country"]);
                }
				
                for (var j = 0; j < selectedColumns.length; j++) {
					var min = extremeValues[j][0];
					var max = extremeValues[j][1];
					var currValue = parseFloat(json[i][selectedColumns[j]]);
					console.log(min + " : "+max );
					if(invertedAttributes.indexOf(selectedColumns[j]) >= 0) {
						if(currValue > 0){
							currValue = 1.0/currValue;
						}
						else{
							currValue = max;
						}
					}
					if (isNormalized)
						content.push( (currValue - min) * 100.0 / (max - min));
					else
						content.push(currValue);
		        }
				data.addRow(content);
            } 
			
		}
		
        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
            'height': 500,//$( document ).innerHeight() - 50,
            'width': '100%',
            hAxis: {textPosition:'none', viewWindow: {min:minIndexToDisplay, max:(parseInt(zoomFactor) + parseInt(minIndexToDisplay))}},
            animation: {duration: 1000, easing: 'inAndOut'},
        };

        // Instantiate and draw our chart, passing in some options.
        var chart;
		switch(chartChoice) {
			case(chartEnum.LINE): 
				chart = new google.visualization.LineChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.BAR): 
				chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.SCATTER): 
				chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.GEO):
				chart = new google.visualization.GeoMap(document.getElementById('chart_div'));
				break;
		}

		chart.draw(data, options);
      }
	  
	  function getMinMaxForAttributes(attributes) {
		var result = [];
		for (var i = 0; i < attributes.length; i++) {
			var currMinMax = [];
			var min = Infinity;
			var max = -Infinity;
			for (var j = 0; j < json.length; j++) {
				if (unselectedCountries.indexOf(json[j]["CountryID"]) < 0) {
					var currNumber = parseFloat(json[j][attributes[i]]);
					if(invertedAttributes.indexOf(attributes[i]) >= 0 && currNumber > 0){
						currNumber = 1.0/currNumber;
					}
					if (currNumber > max){
						max = currNumber;
					}
					if (currNumber < min){
						min = currNumber;
					}
				}
			}
			currMinMax.push(min);
			currMinMax.push(max);
			result.push(currMinMax);
		}
		return result;
	  }
	  
	  
	  
	  
	  
	  
	  
