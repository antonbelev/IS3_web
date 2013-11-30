
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
});