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
var ctx = document.getElementById("myBarChart");

// Statický seznam názvů os
var labels = [
  "Kontext organizace",
  "Vedoucí role",
  "Plánování",
  "Podpora",
  "Provozování",
  "Hodnocení výkonnosti",
  "Zlepšování",
];

// Získání výsledků z localStorage
var barChartresults = JSON.parse(localStorage.getItem("isoScores"));

// Mapování názvů na klíče
var sectionKeyMap = {
  "Kontext organizace": "section1",
  "Vedoucí role": "section2",
  "Plánování": "section3",
  "Podpora": "section4",
  "Provozování": "section5",
  "Hodnocení výkonnosti": "section6",
  "Zlepšování": "section7",
};

// Set a minimum value for the bar height so a sliver is shown for zero values
const MIN_BAR_HEIGHT = 2;

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
function createBarChart() {
  window.myBarChart = new Chart(ctx, {
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
              maxTicksLimit: 6,
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
          label: function (tooltipItem, chart) {
            var value = tooltipItem.yLabel;
            // If the value is exactly MIN_BAR_HEIGHT, display "N/A"
            var displayValue = (value === MIN_BAR_HEIGHT) ? "N/A" : number_format(value) + " %";
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ": " + displayValue;
          },
        },
      },
    },
  });
}
// Funkce pro izolování odpovědí NE
function listUnansweredQuestions() {
  var barChartresults = JSON.parse(localStorage.getItem("isoScores"));
  var htmlOutput = "";
  let messageDisplayed = false; // Přidejte tuto novou proměnnou

  questionnaireData.sections.forEach((section) => {
    var sectionKey = section.id;

    // Ověřte, zda je section.id v rozsahu section8 až section21
    var sectionNumber = parseInt(sectionKey.replace("section", ""));
    if (sectionNumber < 1 || sectionNumber > 7) {
      return; // Pokud ne, přeskočte tuto iteraci cyklu
    }

    var sectionResults = barChartresults.sections[sectionKey];
    if (sectionResults && sectionResults.percentage < 50) {
      if (!messageDisplayed) {
        // Kontrola, zda byla zpráva již zobrazena
        htmlOutput += `<div class="alert alert-danger">Na následující oblasti by se vaše organizace měla zaměřit, jelikož zde máte zavedeno <b>méně než 50 %</b> požadovaných bezpečnostních opatření:`;
        messageDisplayed = true; // Nastavení, že zpráva byla zobrazena
      }
      htmlOutput += `<li><strong>${section.title}</strong></li>`;
    }
  });

  var outputContainer = document.getElementById("otazkypod50");
  outputContainer.innerHTML = htmlOutput;
}

// Volání funkce pro vytvoření grafu
createBarChart();
listUnansweredQuestions();

