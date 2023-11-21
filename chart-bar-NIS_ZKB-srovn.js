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


// Mapping of internal representation to user-friendly labels
const labelMap = {
  "1.opatreni": "1. Opatření",
  "2.opatreni": "2. Opatření",
  "3.opatreni": "3. Opatření",
  "4.opatreni": "4. Opatření",
  "5.opatreni": "5. Opatření",
  "6.opatreni": "6. Opatření",
  "7.opatreni": "7. Opatření",
  "8.opatreni": "8. Opatření",
  "9.opatreni": "9. Opatření",
  "10.opatreni": "10. Opatření"
};

// Mapping of user-friendly labels back to internal representation
const reverseLabelMap = {};
for (const key in labelMap) {
  reverseLabelMap[labelMap[key]] = key;
}

// Mapping of internal representation to user-friendly labels
const hoverLabelMap = {
  "1.opatreni": "Analýza rizik a politiky bezpečnosti informací",
  "2.opatreni": "Zvládání incidentů",
  "3.opatreni": "Kontinuita činností, krizové řízení, zálohování, zotavení",
  "4.opatreni": "Bezpečnost dodavatelského řetězce",
  "5.opatreni": "Bezpečnost v rámci pořízení, vývoje a údržby systémů",
  "6.opatreni": "Interní audit a postupy hodnocení",
  "7.opatreni": "Počítačová hygiena a vzdělávání",
  "8.opatreni": "Využívání kryptografie",
  "9.opatreni": "Bezpečnost lidských zdrojů, řízení přístupů a aktiv",
  "10.opatreni": "Vícefaktorová autentizace, bezpečné komunikační nástroje a nástroje pro nouzovou komunikaci"
};

// Statický seznam názvů os
var labels = [
  "1.opatreni",
  "2.opatreni",
  "3.opatreni",
  "4.opatreni",
  "5.opatreni",
  "6.opatreni",
  "7.opatreni",
  "8.opatreni",
  "9.opatreni",
  "10.opatreni",
];

// Získání výsledků z localStorage
var barChartNISSrovnavacresults = JSON.parse(localStorage.getItem('individualMeasurePercentages'));

// Now, when you create the chart, map your internal labels to the user-friendly ones
var userFriendlyLabels = labels.map(label => labelMap[label] || label); // Fallback to the original label if not found in the map


// Vytvoření pole hodnot z výsledků, které odpovídají statickým názvům os
var dataValues = labels.map((label) => {
  var percentageNISBar = barChartNISSrovnavacresults[label];
  return percentageNISBar || 0; // Return 0 if percentage is undefined
});

// Výpis dat do konzole
console.log(JSON.parse(localStorage.getItem('individualMeasurePercentages')));


var backgroundColors = dataValues.map((value) => {
  if (value >= 75) {
    return "#1cc88a"; // Modrá barva pro hodnoty 75% a vyšší
  } else if (value >= 50) {
    return "#f6c23e"; // Světle oranžová barva pro hodnoty mezi 50% a 75%
  } else {
    return "#e74a3b"; // Červená barva pro hodnoty pod 50%
  }
});

const sceneMessages = {
  "1.opatreni": "Vaše organizace nemá zavedená opatření a procesy pro efektivní analýzu rizik a řízení bezpečnostní politiky informací. Analýza rizik je klíčová pro odhalení hrozeb a zranitelností s ohledem na dostupná aktiva. ",
  "2.opatreni": "Proces zvládání incidentů je ve vaší organizaci nedostatečný, což znamená, že v případě bezpečnostního incidentu může dojít k prodloužení doby obnovy a zvýšeným finančním a reputačním ztrátám.",
  "3.opatreni": "Nedostatečná kontinuita činností, včetně zálohování a disaster recovery, znamená, že vaše organizace není připravena efektivně reagovat na mimořádné události, což ohrožuje její dlouhodobou udržitelnost.",
  "4.opatreni": "Bezpečnost v rámci dodavatelského řetězce není ve vaší organizaci dostatečně řešena, což zvyšuje riziko infiltrace škodlivými aktéry do vašich systému.",
  "5.opatreni": "Nedostatečné postupy v pořízení, vývoji a údržbě systémů mohou vést k zavádění zranitelností do organizace, čímž se zvyšuje riziko útoků.",
  "6.opatreni": "Vaše organizace nemá adekvátně zavedené politiky a postupy pro hodnocení účinnosti bezpečnostních opatření (interní audit). To má za následek, že organizace nevidí, jaké se v kritických systémech skýtají slabiny a kde je nutné zavést účinnější procesy.",
  "7.opatreni": "Ve vaší organizaci je určitá absence praktik základní počítačové hygieny a vzdělávání v oblasti kybernetické bezpečnosti, což zvyšuje riziko incidentů způsobených lidskou chybou.",
  "8.opatreni": "Nemáte dostatečně nasazené kryptografické prostředky a šifrování, což znamená, že citlivé informace nejsou řádně chráněny a existuje značné riziko jejich kompromitace.",
  "9.opatreni": "Dle výsledků je evidentní, že nemáte zavedené procesy pro dostatečné řízení bezpečnosti lidských zdrojů. Tato zranitelnost může vést k neoprávněnému přístupu k citlivým informacím a aktivům.",
  "10.opatreni": "Absence vícefaktorového ověření identity a bezpečných komunikačních nástrojů zvyšuje riziko úniku informací a neautorizovaného přístupu do systémů."
};

// Function to create messages based on the completion percentage, 
function createMessages(dataValues, userFriendlyLabels, containerID) {
  var warningBoxHtml = "";

  dataValues.forEach((value, index) => {
    var userFriendlyLabel = userFriendlyLabels[index];
    var internalLabel = reverseLabelMap[userFriendlyLabel] || userFriendlyLabel; // Map back to internal representation
    var sceneMessage = sceneMessages[internalLabel]; // Get the specific scene message
    if (value < 50) {
      warningBoxHtml += `<div class="alert alert-danger"> U <b>${userFriendlyLabel}</b> máte míru souladu s požadavky směrnice NIS 2 pod <b>50 %</b>. <br><span style="display: block; padding-top: 10px;">${sceneMessage}</span></div>`;
    }
  });
  // Append the messages to the respective container
  var warningBoxContainer = document.getElementById(containerID);
  warningBoxContainer.innerHTML = warningBoxHtml;
}

// Call the function after you have the dataValues and userFriendlyLabels
// Call the function with the desired container ID
createMessages(dataValues, userFriendlyLabels, "warningContainer1");
createMessages(dataValues, userFriendlyLabels, "warningContainer2");
createMessages(dataValues, userFriendlyLabels, "warningContainer3");
createMessages(dataValues, userFriendlyLabels, "warningContainer4");
createMessages(dataValues, userFriendlyLabels, "warningContainer5");

// Funkce pro vytvoření grafu
document.querySelectorAll('.myBarChartNISZKBBar').forEach(function (canvas) {
  var myBarChartNISZKBBar = new Chart(canvas, {
    type: "bar",
    data: {
      labels: userFriendlyLabels,
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
              maxTicksLimit: 10,
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
          title: function (tooltipItem, data) {
            var label = data.labels[tooltipItem[0].index];
            var internalLabel = reverseLabelMap[label] || label; // Map back to internal representation
            var hoverLabel = hoverLabelMap[internalLabel] || label; // Get the detailed hover label
            return hoverLabel; // This will be displayed as the title
          },
          label: function (tooltipItem, data) {
            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toFixed(1);
            return "Plnění: " + value + ' %'; // Display only the percentage value here
          },
        },
      },
    },
  });
});


