function generateColumns() {
    var html = "";//style=\"width: 275px; float: left;\"
    var li = "<li class=\"ui-li ui-li-static ui-btn-up-c\"><table><tr><td width='100%'><div class=\"ui-checkbox\"><input id=\"";
    var jqmBottom1 = " data-corners=\"true\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"span\" data-icon=\"checkbox-off\" data-theme=\"c\" data-mini=\"true\"><span class=\"ui-btn-inner ui-btn-corner-all\"><span class=\"ui-btn-text\">"
    var jqmBottom2 = "</span><span class=\"ui-icon ui-icon-checkbox-off ui-icon-shadow\"> </span></span></label></div></td><td width='30%'>";
    var uiSelector = $('.ulColumns');
    var invSlider1 = "<div class=\"invSlider\"><select name=\""; //style=\"float: right; \"
    var invSlider2 = "\" id=\"";
    var invSlider3 = "\" data-role=\"slider\" class=\"invSlider ui-slider-switch\" data-mini=\"true\"><option value=\"same\">Same</option>";
    var invSlider4 = "<option value=\"inv\">Inv</option></select></div>"; //close div
    var result = $.parseJSON(JSON.stringify(json[0], undefined, 2));
    $.each(result, function (k, v) {
        //display the key and value pair
        html += li + k + "\" type=\"checkbox\" class=\"chckColumn\" data-mini=\"true\" name=\"" + k
            + "\">"
            + "<label class=\"chck ui-btn ui-btn-corner-all ui-mini ui-btn-icon-left ui-checkbox-off ui-btn-up-c\" for=\""
            + k + "\""
            + jqmBottom1
            + k
            + jqmBottom2
            + invSlider1 + k
            + invSlider2 + k + "Sld"
            + invSlider3
            + invSlider4
            + "</td></tr></table></li>";
    });
    uiSelector.append(html).trigger('create');
}


