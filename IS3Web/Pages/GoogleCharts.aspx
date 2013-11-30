<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GoogleCharts.aspx.cs" Inherits="Pages_GoogleCharts" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Google Charts IS3</title>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="../Scripts/google_charts_pie.js" type="text/javascript"></script>
    <link href="../Styles/Main.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.css" />
    <script src="http://code.jquery.com/jquery-1.8.3.min.js" type="text/javascript">></script>
    <script src="http://code.jquery.com/mobile/1.2.1/jquery.mobile-1.2.1.min.js" type="text/javascript">></script>
</head>
<body>
    <div id="divChart" class="divChart">
        <div id="chart_div" class="divInnderChar">
        </div>
    </div>
    <div id="divMenu" class="divMenu">
        <div data-role="controlgroup" data-type="horizontal" class="center">
            <a href="#" data-role="button" data-mini="true" data-theme="b">Line Chart</a> <a
                href="#" data-role="button" data-mini="true" data-theme="b">Bar Chart</a> <a href="#"
                    data-role="button" data-mini="true" data-theme="b">Scatter Plot</a>
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
                <ul data-role="listview" data-filter="true">
                    <li>
                        <input type="checkbox" name="checkbox-1" data-mini="true" id="checkbox1" class="custom" />
                        <label for="checkbox1">
                            Australia</label></li>
                    <li>
                        <input type="checkbox" name="checkbox-2" data-mini="true" id="checkbox2" class="custom" />
                        <label for="checkbox2">
                            Brazil</label></li>
                    <li>
                        <input type="checkbox" name="checkbox-3" data-mini="true" id="checkbox3" class="custom" />
                        <label for="checkbox3">
                            Bulgaria</label></li>
                    <li>
                        <input type="checkbox" name="checkbox-4" data-mini="true" id="checkbox4" class="custom" />
                        <label for="checkbox4">
                            United Kingdom</label></li>
                </ul>
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
</body>
</html>
