// Výchozí nastavení
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Fetch the stored results from localStorage
const storedResultsNISsrovnavac = localStorage.getItem('overallAveragePercentage'); // !Nejsem si jistý tímto
const resultsNISsrvn = storedResultsNISsrovnavac ? parseFloat(storedResultsNISsrovnavac) : null;
console.log(resultsNISsrvn);  // Přidejte tento řádek, abyste zkontrolovali, jak vypadají uložené výsledky.

// Funkce pro zobrazení procentuální hodnoty uprostřed koláčového grafu
function displayPercentageNISZKBsrv(chart) {
    var ctx = chart.chart.ctx;
    var fontSize = 24;
    var fontWeight = 'bold';
    var primaryColor = '#36b9cc';
    ctx.font = Chart.helpers.fontString(fontSize, fontWeight, Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = primaryColor;
    var shodaPercentage = chart.data.datasets[0].data[0];
    ctx.fillText(shodaPercentage.toFixed(1) + '%', chart.chart.width / 2, (chart.chart.height / 2) + 10);
}

// Pie Chart se volá přes class, aby mohl být využíván na víceromístech
// .PieChartNISZKBsrv třída v HTML
document.querySelectorAll('.PieChartNISZKBsrv').forEach(function (canvas) {
    var PieChartNISZKBsrv = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ["Zavedeno", "Nezavedeno"],
            datasets: [{
                data: resultsNISsrvn !== null ? [resultsNISsrvn, 100 - resultsNISsrvn] : [49, 51], // Use the number directly
                backgroundColor: ['#36b9cc', '#b0e3eb'],
                hoverBorderColor: ['#36b9cc', '#b0e3eb'],
            }]
        },
        options: {
            maintainAspectRatio: false,
            events: [], // Add this line to disable hover events
            animation: {
                duration: 1000,
                onComplete: function () {
                    displayPercentageNISZKBsrv(this);
                    // Data to fill the summary under the chart
                    var implementedValue = this.data.datasets[0].data[0].toFixed(1); // tofixed rounds numbers
                    var notImplementedValue = (100 - implementedValue).toFixed(1);
                    document.getElementById('zavedeno').textContent = implementedValue;
                    document.getElementById('nezavedeno').textContent = notImplementedValue;
                }
            },
            tooltips: {
                enabled: false
            },
            legend: {
                display: false
            },
            cutoutPercentage: 60,
        },
    });
});