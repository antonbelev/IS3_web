// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);
	  chartEnum = {
		LINE : 0,
		BAR : 1,
		SCATTER : 2
	  };
	  var chartChoice = chartEnum.BAR;
	  var list = [];
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
		
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', '#Gold');
		//data.addColumn('number', '#Silver');
		for (var i = 0; i < json.length; i++) {
			if (list.indexOf(json[i]["CountryID"]) < 0) 
			data.addRow([json[i]["Country"], parseInt(json[i]["Gold"]) + parseInt(json[i]["Silver"]) + parseInt(json[i]["Bronze"])]);
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
				var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.BAR): 
				var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
				break;
			case(chartEnum.SCATTER): 
				var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
				break;
		}
		chart.draw(data, options);
      }