function generateColumns() {
    var html = "";
    var li = "<li class=\"ui-li ui-li-static ui-btn-up-c\"><div class=\"ui-checkbox\"><input id=\"";
    var jqmBottom1 = " data-corners=\"true\" data-shadow=\"false\" data-iconshadow=\"true\" data-wrapperels=\"span\" data-icon=\"checkbox-off\" data-theme=\"c\" data-mini=\"true\"><span class=\"ui-btn-inner ui-btn-corner-all\"><span class=\"ui-btn-text\">"
    var jqmBottom2 = "</span><span class=\"ui-icon ui-icon-checkbox-off ui-icon-shadow\"> </span></span></label></div></li>";
    var uiSelector = $('.ulCountries');
    for (var i = 0; i < json.length; i++) {
        html += li + json[i]["CountryID"] + "\" type=\"checkbox\" checked=\"checked\" data-mini=\"true\" name=\"" + json[i]["CountryID"]
            + "\">"
            + "<label class=\"chck ui-btn ui-btn-corner-all ui-mini ui-btn-icon-left ui-checkbox-on ui-btn-up-c\" for=\""
            + json[i]["CountryID"] + "\""
            + jqmBottom1
            + json[i]["Country"]
            + jqmBottom2;
    }
    uiSelector.append(html);
}