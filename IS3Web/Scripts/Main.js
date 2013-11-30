
$(document).on("pageinit", function (event) {
    //alert("This page was just enhanced by jQuery Mobile!");
    
    generateCoutries();
    $("input[type='checkbox']").checkboxradio();
    $("input[type='checkbox']").bind("change", function (event, ui) {
        alert($(this).attr("name"));
    });
});