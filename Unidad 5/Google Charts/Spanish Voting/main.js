google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Party', '2018 Votes',],
        ['PP', 137],
        ['PSOE', 85],
        ['UNIDOS PODEMOS', 71],
        ["C's", 32],
        ['ESQUERRA', 9],
        ['CDC', 8],
        ['EAJ-PNV', 5],
        ['EH-BILDU', 2],
        ['Others', 0]
    ]);

    var options = {
        title: 'Spanish Deputies Congress',
        chartArea: {
            width: '50%'
        },
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Party'
        },
        height: 300
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Party', '2018 Votes',],
        ['PP', 137],
        ['PSOE', 85],
        ['UNIDOS PODEMOS', 71],
        ["C's", 32],
        ['ESQUERRA', 9],
        ['CDC', 8],
        ['EAJ-PNV', 5],
        ['EH-BILDU', 2],
        ['Others', 0]
    ]);

    var options = {
        title: 'Spanish Deputies Congress'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}