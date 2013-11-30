﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GoogleCharts.aspx.cs" Inherits="Pages_GoogleCharts" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Google Charts IS3</title>
    <link href="../Styles/Main.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
    <script src="http://code.jquery.com/jquery-1.8.3.min.js" type="text/javascript">></script>
    <script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="../Scripts/Data.js" type="text/javascript"></script>
    <script src="../Scripts/google_charts_pie.js" type="text/javascript"></script>
    <script src="../Scripts/countries_generator.js" type="text/javascript"></script>
    <script src="../Scripts/Main.js" type="text/javascript"></script>
</head>
<body>
    <div id="divChart" class="divChart">
        <div id="chart_div" class="divInnderChar">
        </div>
    </div>
    <div id="divMenu" class="divMenu">
        <div data-role="fieldcontain">
            <fieldset data-role="controlgroup" data-type="horizontal" class="center" data-mini="true">
                <legend>Chart type:</legend>
                <input type="radio" name="radio-choice-1" id="radio-choice-1" value="choice-1" checked="checked" />
                <label for="radio-choice-1">
                    Line Chart</label>
                <input type="radio" name="radio-choice-1" id="radio-choice-2" value="choice-2" />
                <label for="radio-choice-2">
                    Bar Chart</label>
                <input type="radio" name="radio-choice-1" id="radio-choice-3" value="choice-3" />
                <label for="radio-choice-3">
                    Scatter Plot</label>
            </fieldset>
        </div>
        <div class="clear">
        </div>
        <div data-role="collapsible" class="menuCollapse" data-theme="b">
            <h3>
                Columns</h3>
            <div class="columnsContent">
            </div>
        </div>
        <div class="clear">
        </div>
        <div data-role="collapsible" class="menuCollapse" data-theme="b">
            <h3>
                Countries</h3>
            <div class="countriesContent">
                <ul data-role="listview" data-filter="true" class="ulCountries" data-mini="true">
                    <%--<li>
                        <input type="checkbox" name="Australia" data-mini="true" id="checkbox1" />
                        <label for="checkbox1" class="chck">
                            Australia</label></li>
                    <li>
                        <input type="checkbox" name="Brazil" data-mini="true" id="checkbox2" />
                        <label for="checkbox2" class="chck">
                            Brazil</label></li>
                    <li>
                        <input type="checkbox" name="Bulgaria" data-mini="true" id="checkbox3" />
                        <label for="checkbox3" class="chck">
                            Bulgaria</label></li>
                    <li>
                        <input type="checkbox" name="United Kingdom" data-mini="true" id="checkbox4" />
                        <label for="checkbox4" class="chck">
                            United Kingdom</label></li>--%>
                </ul>
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
</body>
</html>
