
$(document).on("pageinit", function (event) {
    //alert("This page was just enhanced by jQuery Mobile!");

    generateCoutries();
    generateColumns();
    $("input[type='checkbox']").checkboxradio();
    $("input[type='checkbox']").bind("change", function (event, ui) {
        if ($(this).hasClass("chckCountry")) {
            if (!$(this).attr('checked')) {
                unselectedCountries.push($(this).attr("name"));
            } else {
                var newlist = [];
                for (var i = 0; i < unselectedCountries.length; i++) {
                    if ($.trim(unselectedCountries[i].toString()) != $.trim($(this).attr("name").toString())) {
                        newlist.push(unselectedCountries[i]);
                    }
                }
                unselectedCountries = newlist;
            }
            drawChart();
        }
        else if ($(this).hasClass("chckColumn")) {
            if ($(this).attr('checked')) {
                selectedColumns.push($(this).attr("name"));
            } else {
                var newlist = [];
                for (var i = 0; i < selectedColumns.length; i++) {
                    if ($.trim(selectedColumns[i].toString()) != $.trim($(this).attr("name").toString())) {
                        newlist.push(selectedColumns[i]);
                    }
                }
                selectedColumns = newlist;
            }
            drawChart();
        }
    });
	$("input[type='radio']").bind("change", function(event,ui){
		switch(chartChoice) {
			case($(this).attr('value')== 'choice-1'): 
				chart = chartEnum.LINE;
				break;
			case($(this).attr('value')== 'choice-2'): 
				chart = chartEnum.BAR;
				break;
			case($(this).attr('value')== 'choice-3'): 
				chart = chartEnum.SCATTER;
				break;
			case($(this).attr('value')== 'choice-4'):
				chart = chartEnum.GEO;
				break;
		}
		chartChoice = chartEnum.SCATTER;
		drawChart();
	});
});