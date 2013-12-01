
$(document).on("pageinit", function (event) {
    //alert("This page was just enhanced by jQuery Mobile!");
    $(".selectAllCountry").attr('checked', true).checkboxradio().checkboxradio('refresh');

    generateCoutries();
    generateColumns();
    $("input[type='checkbox']").checkboxradio();
    $("input[type='checkbox']").bind("change", function (event, ui) {
        if ($(this).hasClass("chckCountry")) {
            if (!$(this).attr('checked')) {
                unselectedCountries.push($(this).attr("name"));
                $(".selectAllCountry").attr('checked', false).checkboxradio().checkboxradio('refresh');
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
                $(".selectAllColumns").attr('checked', false).checkboxradio().checkboxradio('refresh');
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
                $("input.chckCountry[type='checkbox']").each(function () {
                    $(this).attr('checked', true).checkboxradio().checkboxradio('refresh');
                });
                unselectedCountries = [];
                drawChart();
            } else {
                var newlist = [];
                $("input.chckCountry[type='checkbox']").each(function () {
                    $(this).attr('checked', false).checkboxradio().checkboxradio('refresh');
                    newlist.push($(this).attr("name"));
                });
                unselectedCountries = newlist;
                drawChart();
            }
        }
        else if ($(this).hasClass("selectAllColumns")) {
            if ($(this).attr('checked')) {
                var newlist = [];
                $("input.chckColumn[type='checkbox']").each(function () {
                    $(this).attr('checked', true).checkboxradio().checkboxradio('refresh');
                    newlist.push($(this).attr("name"));
                });
                selectedColumns = newlist;
                drawChart();
            } else {
                $("input.chckColumn[type='checkbox']").each(function () {
                    $(this).attr('checked', false).checkboxradio().checkboxradio('refresh');
                });
                selectedColumns = [];
                drawChart();
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

    $('.clpsColumns').bind('expand', function () {
        $(".clpsCountries").trigger("collapse");
    })
    $('.clpsCountries').bind('expand', function () {
        $(".clpsColumns").trigger("collapse");
    })

    $( ".normSlider" ).bind( "change", function(event, ui) {
        
    });
});