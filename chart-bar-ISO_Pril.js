// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Funkce pro formátování čísel
function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + "").replace(",", "").replace(" ", "");
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point,
        s = "",
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return "" + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
}

// Sloupcový graf
var ctx = document.getElementById("myBarChart-Prilohy");

// Statický seznam názvů os
var labels = [
    "A.5",
    "A.6",
    "A.7",
    "A.8",
    "A.9",
    "A.10",
    "A.11",
    "A.12",
    "A.13",
    "A.14",
    "A.15",
    "A.16",
    "A.17",
    "A.18",
];


// Získání výsledků z localStorage
var barChartresults = JSON.parse(localStorage.getItem("isoResults"));

// Mapování názvů na klíče
var sectionKeyMap = {
    "A.5": "section8",
    "A.6": "section9",
    "A.7": "section10",
    "A.8": "section11",
    "A.9": "section12",
    "A.10": "section13",
    "A.11": "section14",
    "A.12": "section15",
    "A.13": "section16",
    "A.14": "section17",
    "A.15": "section18",
    "A.16": "section19",
    "A.17": "section20",
    "A.18": "section21",
};

// Vytvoření pole hodnot z výsledků, které odpovídají statickým názvům os
var dataValues = labels.map((label) => {
    var sectionKey = sectionKeyMap[label];
    var section = barChartresults.sections[sectionKey];
    return section ? section.percentage : 0;
});

var backgroundColors = dataValues.map((value) => {
    if (value >= 75) {
        return "#1cc88a"; // Modrá barva pro hodnoty 75% a vyšší
    } else if (value >= 50) {
        return "#f6c23e"; // Světle oranžová barva pro hodnoty mezi 50% a 75%
    } else {
        return "#e74a3b"; // Červená barva pro hodnoty pod 50%
    }
});

// Funkce pro vytvoření grafu
function createBarChartPrilohy() {
    var myBarChartPrilohy = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
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
                    bottom: 0,
                },
            },
            scales: {
                xAxes: [
                    {
                        time: {
                            unit: "category",
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            maxTicksLimit: 15,
                        },
                        // maxBarThickness: 40,
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 100,
                            stepSize: 25,
                            maxTicksLimit: 5,
                            padding: 10,
                            callback: function (value, index, values) {
                                return number_format(value) + " %";
                            },
                        },
                        gridLines: {
                            color: "rgb(234, 236, 244)",
                            zeroLineColor: "rgb(234, 236, 244)",
                            drawBorder: false,
                            borderDash: [2],
                            zeroLineBorderDash: [2],
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: "#6e707e",
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: "#dddfeb",
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
                callbacks: {
                    title: function (tooltipItems, data) {
                        // Assuming tooltipItems[0] is available
                        var index = tooltipItems[0].index;
                        var label = data.labels[index];
                        // Custom labels for each bar
                        var customLabels = {
                            "A.5": "Politiky bezpečnosti informací",
                            "A.6": "Organizace bezpečnosti informací",
                            "A.7": "Bezpečnost lidských zdrojů",
                            "A.8": "Řízení aktiv",
                            "A.9": "Řízení přístupů",
                            "A.10": "Kryptografie",
                            "A.11": "Fyzická bezpečnost a bezpečnost prostředí",
                            "A.12": "Bezpečnost provozu",
                            "A.13": "Bezpečnost komunikací",
                            "A.14": "Akvizice, vývoj a údržba systémů",
                            "A.15": "Dodavatelské vztahy",
                            "A.16": "Řízení incidentů bezpečnosti informací",
                            "A.17": "Aspekty řízení kontinuity činností organizace z hlediska bezpečnosti informací",
                            "A.18": "Soulad s požadavky",
                        };
                        return customLabels[label] || label; // Fallback to the original label if custom label is not found
                    },
                    label: function (tooltipItem, chart) {
                        var datasetLabel =
                            chart.datasets[tooltipItem.datasetIndex].label || "";
                        return (
                            datasetLabel + ": " + number_format(tooltipItem.yLabel) + " %"
                        );
                    },
                },
            },
        },
    });
}
// Funkce pro izolování odpovědí NE
function listUnansweredQuestionsPrilohy() {
    var barChartresults = JSON.parse(localStorage.getItem("isoResults"));
    var htmlOutput = "";
    var nonApplicableOutput = "";
    let messageDisplayed = false;
    let nonApplicableMessageDisplayed = false;

    questionnaireData.sections.forEach((section) => {
        var sectionKey = section.id;

        var sectionNumber = parseInt(sectionKey.replace("section", ""));
        if (sectionNumber < 8 || sectionNumber > 21) {
            return;
        }

        section.subsections.forEach((subsection) => {
            var subsectionResults = barChartresults.sections[sectionKey];
            if (subsectionResults) {
                if (subsectionResults.percentage === null) {
                    if (!nonApplicableMessageDisplayed) {
                        nonApplicableOutput += `<div class="alert alert-info">Následující oblasti nejsou pro vaši organizaci relevantní ("Neaplikováno"):`;
                        nonApplicableMessageDisplayed = true;
                    }
                    nonApplicableOutput += `<li><strong> ${subsection.title} </strong></li>`;
                } else if (subsectionResults.percentage < 50) {
                    if (!messageDisplayed) {
                        htmlOutput += `<div class="alert alert-danger">Na následující oblasti by se vaše organizace měla zaměřit, jelikož zde máte zavedeno <b>méně než 50 %</b> požadovaných bezpečnostních opatření:`;
                        messageDisplayed = true;
                    }
                    htmlOutput += `<li><strong>${subsection.title}</strong></li>`;
                }
            }
        });
    });

    if (messageDisplayed) {
        htmlOutput += "</ul></div>";
    }

    if (nonApplicableMessageDisplayed) {
        nonApplicableOutput += "</ul></div>";
    }

    var outputContainer = document.getElementById("otazkypod50-Prilohy");
    outputContainer.innerHTML = htmlOutput + nonApplicableOutput;
}

// Volání funkce pro vytvoření grafu
createBarChartPrilohy();
listUnansweredQuestionsPrilohy();
