// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Calculate the percentage of "Shoda"

// Pie Chart Example
var ctx = document.getElementById("PieChartZKB");
var PieChartZKB = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Shoda", "Chybí"],
    datasets: [{
      data: [68, 32],
      backgroundColor: ['#4e73df', '#d3dcf7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
  },
  options: {
    maintainAspectRatio: false,
    events: [], // Add this line to disable hover events
    animation: {
      duration: 1000,
onComplete: function() {
  var ctx = this.chart.ctx;
  var fontSize = 24; // Set the font size you want
  var fontWeight = 'bold'; // Set font-weight to bold
  var primaryColor = '#4e73df'; // Set the primary color (replace with your primary color if different)
  ctx.font = Chart.helpers.fontString(fontSize, fontWeight, Chart.defaults.global.defaultFontFamily);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = primaryColor; // Set the text color to the primary color
  var shodaPercentage = this.data.datasets[0].data[0] / (this.data.datasets[0].data[0] + this.data.datasets[0].data[1]) * 100;
  ctx.fillText(shodaPercentage.toFixed(1) + '%', this.chart.width / 2, (this.chart.height / 2) + 10);
}
    },
    tooltips: {
      enabled: false // Disable tooltips
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});