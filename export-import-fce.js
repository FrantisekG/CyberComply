function handleFileSelect(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            var json;
            try {
                json = JSON.parse(contents);
            } catch (e) {
                // If there's a parsing error, log it but proceed with the raw contents
                console.error("Error parsing JSON file:", e);
                json = contents;
            }

            for (var key in json) {
                if (json.hasOwnProperty(key)) {
                    // Attempt to JSON.stringify only if the value is an object
                    if (typeof json[key] === 'object') {
                        localStorage.setItem(key, JSON.stringify(json[key]));
                    } else {
                        // Otherwise, store the raw value (string, number, etc.)
                        localStorage.setItem(key, json[key]);
                    }
                }
            }

            // Provide feedback to the user
            alert("Soubor byl úspěšně nahrán.");

            // Hide the text and the upload button
            document.getElementById('uploadText').style.display = 'none';
            document.getElementById('uploadButton').style.display = 'none';

            // Show the "Create Dashboard" button
            document.getElementById('createDashboardContainer').style.display = 'block';
        };
        reader.readAsText(file);
    }
}

// Function to identify and redirect to the appropriate dashboard
function redirectToDashboard() {
    var dashboardURL = "";

    // Check which dashboard to load based on the critical keys present in the local storage
    if (localStorage.getItem("isoScores")) {
        dashboardURL = "dashboard-NIS-ISO.html";
    } else if (localStorage.getItem("SOC2Scores")) {
        dashboardURL = "SOC 2/dashboard-NIS-SOC2.html";
    } else if (localStorage.getItem("zkbScores")) {
        dashboardURL = "dashboard-NIS-ZKB.html";
    }
    // ... and so on for other dashboards

    // Redirect to the identified dashboard
    if (dashboardURL) {
        window.location.href = dashboardURL;
    } else {
        alert("No matching dashboard found for the imported data.");
    }
}

// Add event listener to the "Create Dashboard" button
document.getElementById('createDashboardButton').addEventListener('click', redirectToDashboard);

// Function to export data from localStorage based on the dashboard type
function exportLocalStorageDataByDashboard(dashboardType) {
    var commonKeys = [
        "individualMeasurePercentages",
        "overallAveragePercentage",
        "NIS2FinalVerdict",
        "measureScores",
        "1.opatreniScores",
        "2.opatreniScores",
        "3.opatreniScores",
        "4.opatreniScores",
        "5.opatreniScores",
        "6.opatreniScores",
        "7.opatreniScores",
        "8.opatreniScores",
        "9.opatreniScores",
        "10.opatreniScores",
        "DoraFinalVerdict",
        "VerejnaSpravaFinalVerdict"
    ];

    var dashboardSpecificKeys = {
        "ISO": ["isoScores"],
        "SOC2": ["SOC2Scores"],
        "ZKB": ["zkbScores"],
    };

    var keysToExport = commonKeys.concat(dashboardSpecificKeys[dashboardType] || []);

    var dataToExport = {};
    keysToExport.forEach(function (key) {
        var rawData = localStorage.getItem(key);

        try {
            dataToExport[key] = JSON.parse(rawData);
        } catch (e) {
            // If it's not valid JSON, store the raw string
            dataToExport[key] = rawData;
            //console.error(`Error parsing data for key ${key}:`, e);
            //dataToExport[key] = "Error: Data not valid JSON";
        }
    });

    // Add indentation to the JSON stringify method
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", dashboardType + "_export-dat-cybercomply.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// Example usage: Call handleFileSelect when a file is selected
document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);