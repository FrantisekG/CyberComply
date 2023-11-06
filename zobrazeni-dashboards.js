// JavaScript to check localStorage and display menu items accordingly
document.addEventListener("DOMContentLoaded", function() {
    // Define the keys associated with each dashboard
    var keysForNISISO = ["isoScores"]; // replace ... with other keys
    var keysForNISZKB = ["ZKBScores"]; // replace ... with other keys
    var keysForNISSOC2 = ["SOC2Scores"]; // replace ... with other keys
  
    // Check for NIS/ISO keys
    if (keysForNISISO.every(key => localStorage.getItem(key))) {
      document.getElementById('dashboardNISISO').style.display = 'block';
    } else {
      document.getElementById('dashboardNISISO').style.display = 'none';
    }
  
    // Check for NIS/ZKB keys
    if (keysForNISZKB.every(key => localStorage.getItem(key))) {
      document.getElementById('dashboardNISZKB').style.display = 'block';
    } else {
      document.getElementById('dashboardNISZKB').style.display = 'none';
    }
  
    // Check for NIS/SOC2 keys
    if (keysForNISSOC2.every(key => localStorage.getItem(key))) {
      document.getElementById('dashboardNISSOC2').style.display = 'block';
    } else {
      document.getElementById('dashboardNISSOC2').style.display = 'none';
    }
  });
  