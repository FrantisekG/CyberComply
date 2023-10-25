// Variables related to navigation and progress update
let currentSectionIndex = 0;
const maxSections = 6; // Total sections
const sections = document.querySelectorAll(".section");
const progressBar = document.getElementById("progress-bar-ISO");
const nextButton = document.getElementById("nextButton");

function updateProgress() {
    currentSectionIndex += 1;
    const increment = 100 / maxSections; // Dividing by the number of total sections
    const newWidth = (currentSectionIndex * increment).toFixed(2);
    progressBar.style.width = newWidth + "%";
    progressBar.setAttribute("aria-valuenow", newWidth);
}

nextButton.addEventListener("click", function () {
    updateProgress();
    // Here you can also add the code to hide the current section and show the next section
});
