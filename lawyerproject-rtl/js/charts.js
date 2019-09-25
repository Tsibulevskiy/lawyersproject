google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        // ['Billable hours', 17],
        // ['Hours target', 50]
    ]);

    var options = {
        title: '',
        pieHole: 0.75,
        pieSliceTextStyle: {
            color: 'black',
            fontstyle: "bold"
        },
        colors: ['#FF2747', '#999']

    };

    var chart = new google.visualization.PieChart(document.getElementById('donutDay'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Billable hours', 22],
        ['Hours target', 50]
    ]);

    var options = {
        title: '',
        pieHole: 0.75,
        colors: ['#FF2747', '#999'],
        pieSliceTextStyle: {
            color: 'black',
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutWeek'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Billable hours', 33],
        ['Hours target', 50]
    ]);

    var options = {
        title: '',
        pieHole: 0.75,
        colors: ['#FF2747', '#999'],
        pieSliceTextStyle: {
            color: 'black',
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutMonth'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Billable hours', 44, ],
        ['Hours target', 50]
    ]);

    var options = {
        title: '',
        pieHole: 0.75,
        colors: ['#FF2747', '#999'],
        pieSliceTextStyle: {
            color: 'black',
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutYear'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Value', 'Money', { role: 'style' }, { role: 'annotation' }],
        ['Actual', 350, '#FF2747', 'USD'],
        ['Expected', 800, '#FF2747', 'USD'],
        ['Target', 1500, '#FF2747', 'USD'],
    ]);

    var options = {
        series: {
            1: { curveType: 'function' },
        },
        colors: ['#FF2747'],
        hAxis: {

            gridlines: {
                color: 'transparent',
                count: 0
            },
            baseline: 5,
            baselineColor: "lightgray",
            direction: -1
        },
        legend: {
            targetAxisIndex: -1,
           
            alignment: 'center'
        },
        legend: { position: 'none' },
        vAxis: {

            gridlines: {
                color: 'lightgray',
                count: 0,
            },
            baseline: 5,
            format: 'currency',
            baselineColor: "lightgray",
        }

    };


    var chart = new google.visualization.ColumnChart(document.getElementById('columnChartToday'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Value', 'Money', { role: 'style' }, { role: 'annotation' }],
        ['Actual', 350, '#FF2747', 'USD'],
        ['Expected', 800, '#FF2747', 'USD'],
        ['Target', 1500, '#FF2747', 'USD'],
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('columnChartWeek'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Value', 'Money', { role: 'style' }, { role: 'annotation' }],
        ['Actual', 350, '#FF2747', 'USD'],
        ['Expected', 800, '#FF2747', 'USD'],
        ['Target', 1500, '#FF2747', 'USD'],
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('columnChartMonth'));
    chart.draw(data, options);


    var data = google.visualization.arrayToDataTable([
        ['Value', 'Money', { role: 'style' }, { role: 'annotation' }],
        ['Actual', 350, '#FF2747', 'USD'],
        ['Expected', 800, '#FF2747', 'USD'],
        ['Target', 1500, '#FF2747', 'USD'],
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('columnChartYear'));
    chart.draw(data, options);

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Target');
    data.addColumn('number', 'Actual');

    data.addRows([
        [1, 5000, 1000],
        [2, 6000, -5000],
        [3, 7000, 1500],
        [4, 8000, 9000],
        [5, 9000, 1000],
        [6, 10000, 5000],
        [7, 11000, 3000],
        [8, 12000, 1900],
        [9, 13000, 2500],
        [10, 14000, 3200],
        [11, 15000, 24000],
        [12, 16000, 27000]
    ]);

    var options = {
        series: {
            1: { curveType: 'function' },
        },
        colors: ['#999', '#FF2747', ],
        hAxis: {
            gridlines: { color: '#f6f6f6' },
            direction: -1

        },
        reverseCategories: true,

        vAxis: {
            format: 'currency',
        },
        dir: 'rtl'

    };


    var chart = new google.visualization.LineChart(document.getElementById('yearStatChart'));
    chart.draw(data, options);
}
if (emptyData.getNumberOfRows() === 0) {
    emptyData.addRows([
        console.log('data is empty')['', 0, null, 'No Data Copy']
    ]);
}