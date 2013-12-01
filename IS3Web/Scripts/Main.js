
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
        else if ($(this).hasClass("selectAllCountry")) {
            if ($(this).attr('checked')) {
                ("input.chckCountry[type='checkbox']").each
            } else {
            }
        }
        else if ($(this).hasClass("selectAllColumns")) {
            if ($(this).attr('checked')) {
                
            } else {
            }
        }
    });
    $("input[type='radio']").bind("change", function (event, ui) {
        switch ($(this).attr('value')) {
            case ('choice-1'):
                chartChoice = chartEnum.LINE;
                break;
            case ('choice-2'):
                chartChoice = chartEnum.BAR;
                break;
            case ('choice-3'):
                chartChoice = chartEnum.SCATTER;
                break;
            case ('choice-4'):
                console.log("i am in geo");
                chartChoice = chartEnum.GEO;
                break;
        }
        drawChart();
    });
});