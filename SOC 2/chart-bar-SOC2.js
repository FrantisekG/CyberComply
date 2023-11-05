// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Funkce pro formátování čísel
function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

// Sloupcový graf
var ctx = document.getElementById("SOC2BarChart");

// Statický seznam názvů os
var labels = ["Řízení organizace a rizik", "Monitorování a správa přístupů", "Řízení systémů a změn", "Dostupnost a kontinuita provozu", "Důvěrnost informací", "Integrita procesů a dat", "Ochrana osobních údajů: Zásady, souhlas a sdílení osobních údajů", "Ochrana osobních údajů: Kvalita a dohled v oblasti ochrany soukromí"];

// Získání výsledků z localStorage
var barChartresults = JSON.parse(localStorage.getItem('SOC2Results'));

// Mapování názvů na klíče
var sectionKeyMap = {
    "Řízení organizace a rizik": "section1",
    "Monitorování a správa přístupů": "section2",
    "Řízení systémů a změn": "section3",
    "Dostupnost a kontinuita provozu": "section4",
    "Důvěrnost informací": "section5",
    "Integrita procesů a dat": "section6",
    "Ochrana osobních údajů: Zásady, souhlas a sdílení osobních údajů": "section7",
    "Ochrana osobních údajů: Kvalita a dohled v oblasti ochrany soukromí": "section8",
};

// Vytvoření pole hodnot z výsledků, které odpovídají statickým názvům os
var dataValues = labels.map(label => {
    var sectionKey = sectionKeyMap[label];
    var section = barChartresults.sections[sectionKey];
    return section ? section.percentage : 0;
});

var backgroundColors = dataValues.map(value => {
    if (value >= 75) {
        return "#1cc88a";  // Modrá barva pro hodnoty 75% a vyšší
    } else if (value >= 50) {
        return "#f6c23e";  // Světle oranžová barva pro hodnoty mezi 50% a 75%
    } else {
        return "#e74a3b";  // Červená barva pro hodnoty pod 50%
    }
});


// Funkce pro vytvoření grafu
function createBarChart() {

    var SOC2BarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Plnění",
                backgroundColor: backgroundColors,
                hoverBackgroundColor: backgroundColors,
                borderColor: "#4e73df",
                data: dataValues,
                maxBarThickness: 50,
            },
            ],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'category'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 10
                    },
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        maxTicksLimit: 5,
                        padding: 10,
                        callback: function (value, index, values) {
                            return number_format(value) + ' %';
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + ' %';
                    }
                }
            },

        }
    });
};
// Funkce pro izolování odpovědí NE
function listUnansweredQuestions() {
    var barChartresults = JSON.parse(localStorage.getItem('SOC2Results'));
    var htmlOutput = '';
    var nonApplicableOutput = ''; // Output for "Neaplikováno" sections
    let messageDisplayed = false;  // Přidejte tuto novou proměnnou
    let nonApplicableMessageDisplayed = false;

    // Map section IDs to custom messages
    var customMessages = {
        "section1": "Kritérium: Bezpečnost CC1-CC3 - Řízení organizace a rizik",
        "section2": "Kritérium: Bezpečnost CC4-CC6 - Monitorování a správa přístupů",
        "section3": "Kritérium: Bezpečnost CC7-CC9 - Řízení systémů a změn",
        "section4": "Kritérium: Dostupnost A1 - Dostupnost a kontinuita provozu",
        "section5": "Kritérium: Důvěrnost C1 - Důvěrnost informací",
        "section6": "Kritérium: Integrita zpracování PI1 - Integrita procesů a dat",
        "section7": "Kritérium: Ochrana osobních údajů P1-P6 - Zásady, souhlas a sdílení osobních údajů",
        "section8": "Kritérium: Bezpečnost P7-P8 - Kvalita a dohled v oblasti ochrany soukromí",

    };

    questionnaireData.sections.forEach(section => {
        var sectionKey = section.id;
        var sectionResults = barChartresults.sections[sectionKey];
        console.log(`Checking section ${sectionKey}`, sectionResults); // Debugging output

        if (sectionResults) {
            if (sectionResults.percentage === null) {
                console.log(`Section ${sectionKey} is 'Neaplikováno'`); // Debugging output
                if (!nonApplicableMessageDisplayed) {
                    nonApplicableOutput += `<div class="alert alert-info">Následující oblasti nejsou pro vaši organizaci relevantní ("Neaplikováno"):`;
                    nonApplicableMessageDisplayed = true;
                }
                nonApplicableOutput += `<li><strong>${customMessages[sectionKey] || section.title}</strong></li>`;
            }
            else if (sectionResults.percentage < 50) {
                if (!messageDisplayed) {
                    htmlOutput += `<div class="alert alert-danger">Na následující oblasti by se vaše organizace měla zaměřit, jelikož zde máte zavedeno <b>méně než 50 %</b> požadovaných bezpečnostních opatření:`;
                    messageDisplayed = true;
                }
                htmlOutput += `<li><strong>${customMessages[sectionKey]}</strong></li>`;
            }
        }
    });

    if (nonApplicableMessageDisplayed) {
        nonApplicableOutput += "</ul></div>";
    }

    if (messageDisplayed) {
        htmlOutput += "</ul></div>";
    }

    var outputContainer = document.getElementById('otazkypod50');
    outputContainer.innerHTML = htmlOutput + nonApplicableOutput; // Ensure both messages are combined
    console.log(htmlOutput); // Debugging output
    console.log(nonApplicableOutput); // Debugging output
}

// Volání funkce pro vytvoření grafu
createBarChart();
listUnansweredQuestions();


