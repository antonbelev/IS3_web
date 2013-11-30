﻿// Load the Visualization API and the piechart package.
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
      var selectedColumns = [];
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
		
        // Create the data table.
        var data = new google.visualization.DataTable();
        if(chartChoice != chartEnum.SCATTER) {data.addColumn('string', 'Country');}
        for (var i = 0; i < selectedColumns.length; i++) {
            data.addColumn('number', selectedColumns[i]);
		}

		//data.addColumn('number', '#Silver');
		for (var i = 0; i < json.length; i++) {
			if (unselectedCountries.indexOf(json[i]["CountryID"]) < 0){
                var content = [];
				if(chartChoice != chartEnum.SCATTER) {content.push(json[i]["Country"]);}
                for (var j = 0; j < selectedColumns.length; j++) {
                     content.push(parseFloat(json[i][selectedColumns[j]]));
		        } 
                console.log(content);           
            } 
			data.addRow(content);
		}
		

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
			hAxis: {textPosition:'none', viewWindow: {min:0, max:200}},
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