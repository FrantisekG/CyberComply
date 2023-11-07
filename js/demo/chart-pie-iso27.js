// Výchozí nastavení
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const storedResults = localStorage.getItem('isoResults');
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
var ctx = document.getElementById("PieChartISO27");
var PieChartISO27 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Zavedeno", "Nezavedeno"],
        datasets: [{
            data: results ? [results.percentage, 100 - results.percentage] : [], // Zbytek vyplňuje, když nejsou hodnoty
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

// Koláčový graf pro rozdělení jednotlivých odpovědí

// Funkce pro zobrazení největší hodnoty uprostřed koláčového grafu - ZATÍM VYPNUTÁ
function displayMaxValue(chart) {
    var ctx = chart.chart.ctx;
    var fontSize = 24;
    var fontWeight = 'bold';
    var colors = ['#4e73df', '#36b9cc', '#d3dcf7', '#858796'];  // Colors for "Ano", "Částečně", "Ne" respectively
    ctx.font = Chart.helpers.fontString(fontSize, fontWeight, Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    var maxValue = Math.max(...chart.data.datasets[0].data);
    var maxIndex = chart.data.datasets[0].data.indexOf(maxValue);  // Get the index of the max value
    ctx.fillStyle = colors[maxIndex];  // Set the color based on the index of the max value

    ctx.fillText(maxValue.toFixed(1) + '%', chart.chart.width / 2, (chart.chart.height / 2) + 10);
}

// Výpočet celkového počtu odpovědí a procentuálních hodnot
var totalResponses = results ? (results.totalScores["Ano"] + results.totalScores["Částečně"] + results.totalScores["Ne"] + results.totalScores["Neaplikováno"]) : 100;
var percentageData = results ? [
    (results.totalScores["Ano"] / totalResponses) * 100,
    (results.totalScores["Částečně"] / totalResponses) * 100,
    (results.totalScores["Ne"] / totalResponses) * 100,
    (results.totalScores["Neaplikováno"] / totalResponses) * 100
] : [30, 20, 25, 25];

var ctxAnswers = document.getElementById("AnswersPieChart");
var AnswersPieChart = new Chart(ctxAnswers, {
    type: 'pie',
    data: {
        labels: ["Ano", "Částečně", "Ne", "Neaplikováno"],
        datasets: [{
            data: percentageData,  // Použití procentuálních hodnot
            backgroundColor: ['#4e73df', '#36b9cc', '#d3dcf7', '#858796'],
            hoverBorderColor: ['#4e73df', '#36b9cc', '#d3dcf7', '#858796'],
        }]
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            onComplete: function () {
                // Aktualizace hodnot ve shrnutí
                var anoValue = this.data.datasets[0].data[0].toFixed(1);  // Zaokrouhlení na jedno desetinné místo
                var castecneValue = this.data.datasets[0].data[1].toFixed(1);  // Zaokrouhlení na jedno desetinné místo
                var neValue = this.data.datasets[0].data[2].toFixed(1);  // Zaokrouhlení na jedno desetinné místo
                var neaplikovanoValue = this.data.datasets[0].data[3].toFixed(1);
                document.getElementById('ano').textContent = anoValue;
                document.getElementById('castecne').textContent = castecneValue;
                document.getElementById('ne').textContent = neValue;
                document.getElementById('neaplikovano').textContent = neaplikovanoValue;
            }
        },
        tooltips: {
            enabled: true,
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index].toFixed(1) + '%';
                }
            }
        },
        legend: {
            display: false
        },
        //cutoutPercentage: 60,
    },
});

// NOVÉ KVŮLI UPLOAD: Function to update the pie chart with new data
function updatePieChart() {
    var isoScores = JSON.parse(localStorage.getItem('isoScores'));
    if (isoScores && PieChartISO27) {
        PieChartISO27.data.datasets[0].data = [isoScores.percentage, 100 - isoScores.percentage];
        PieChartISO27.update();
    }
}



