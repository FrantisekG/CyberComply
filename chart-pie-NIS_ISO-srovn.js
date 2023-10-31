// Výchozí nastavení
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const storedResults = localStorage.getItem('overallAveragePercentage');
const results = storedResults ? JSON.parse(storedResults) : null;
console.log(results);  // Přidejte tento řádek, abyste zkontrolovali, jak vypadají uložené výsledky.

// Funkce pro zobrazení procentuální hodnoty uprostřed koláčového grafu
function displayPercentage(chart) {
    var ctx = chart.chart.ctx;
    var fontSize = 24;
    var fontWeight = 'bold';
    var primaryColor = '#4e73df';
    ctx.font = Chart.helpers.fontString(fontSize, fontWeight, Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = primaryColor;
    var shodaPercentage = chart.data.datasets[0].data[0] / (chart.data.datasets[0].data[0] + chart.data.datasets[0].data[1]) * 100;
    ctx.fillText(shodaPercentage.toFixed(1) + '%', chart.chart.width / 2, (chart.chart.height / 2) + 10);
}

// Pie Chart
var ctx = document.getElementById("PieChartNISsrovnavac");
var PieChartZKB = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Zavedeno", "Nezavedeno"],
        datasets: [{
            data: results ? [results.percentage, 100 - results.percentage] : [49, 51], // Zbytek vyplňuje, když nejsou hodnoty
            backgroundColor: ['#4e73df', '#d3dcf7'],
            hoverBorderColor: ['#4e73df', '#d3dcf7'],
        }]
    },
    options: {
        maintainAspectRatio: false,
        events: [], // Add this line to disable hover events
        animation: {
            duration: 1000,
            onComplete: function () {
                displayPercentage(this);
                // Data pro vyplnění shrnutí pod graf
                var implementedValue = this.data.datasets[0].data[0].toFixed(1); // tofixed zaokrouhlí čísla
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