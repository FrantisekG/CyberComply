let currentSectionIndex = 0;
const maxSections = 21;  // Sekcí
const sections = document.querySelectorAll(".section");
const progressBar = document.getElementById("progress-bar-ISO"); // Myslím, že by mohlo jít pryč
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

function storeAnswers() {
    const currentSectionElement = sections[currentSectionIndex];
    const currentSection = questionnaireData.sections[currentSectionIndex];

    // Procházení všech podsekcí v aktuální sekci
    currentSection.subsections.forEach((subsection) => {
        subsection.questions.forEach((question, qIndex) => {
            const radios = currentSectionElement.querySelectorAll(`input[name="question_${subsection.id}_${qIndex}"]`);
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    const oldValue = question.response;  // Stará hodnota pro srovnání
                    question.response = radios[i].value;
                    // Ladící výstup pro každou změnu odpovědi
                    //console.log(`Question ${qIndex} in subsection ${subsection.id} changed from ${oldValue} to ${radios[i].value}`);
                    break;
                }
            }
        });
    });
}

function validateSectionAnswers() {
    const currentSectionElement = sections[currentSectionIndex];
    const allRadios = currentSectionElement.querySelectorAll('input[type="radio"]');
    let allAnswered = true;

    for (const radio of allRadios) {
        const name = radio.name;
        const selectedOption = currentSectionElement.querySelector(`input[name="${name}"]:checked`);
        if (!selectedOption) {
            allAnswered = false;
            break;
        }
    }
    return allAnswered;
}

function updateProgress() {
    currentSectionIndex += 1;
    const increment = 100 / maxSections;
    const newWidth = (currentSectionIndex * increment).toFixed(2);
    progressBar.style.width = newWidth + "%";
    progressBar.setAttribute("aria-valuenow", newWidth);
}

function showSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function updateButtonVisibility() {
    if (currentSectionIndex === maxSections - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
    // Řízení viditelnosti tlačítka "Zpět"
    if (currentSectionIndex === 0) {
        prevButton.style.display = "none";  // Skrýt tlačítko "Zpět" v první sekci
    } else {
        prevButton.style.display = "inline-block";  // Zobrazit tlačítko "Zpět" ve všech dalších sekcích
    }
}

nextButton.addEventListener("click", function () {
    if (!validateSectionAnswers()) {
        alert("Prosím vyplňte všechny otázky.");
        return;
    }
    storeAnswers();
    if (currentSectionIndex < maxSections - 1) {
        updateProgress();
        showSection(currentSectionIndex);
        updateButtonVisibility();
    }
});

prevButton.addEventListener("click", function () {
    if (currentSectionIndex > 0) {
        currentSectionIndex -= 1;
        const decrement = 100 / maxSections;
        const newWidth = (currentSectionIndex * decrement).toFixed(2);
        progressBar.style.width = newWidth + "%";
        progressBar.setAttribute("aria-valuenow", newWidth);
        showSection(currentSectionIndex);
        updateButtonVisibility();
    }
});

const submitButton = document.getElementById("submitButton");

/* Funkce pro výpočet skore*/
function calculateScores() {
    /*Stanovení hodnot za odpověď*/
    const scoring = {
        "Ano": 2,
        "Částečně": 1,
        "Ne": 0,
        "Neaplikováno": 0
    };
    /* Každá odpověď na začátku začíná 0, poté celkový počet bodů pro každou možnou odpověď ve všech sekcích a otázkách*/
    let totalScores = {
        "Ano": 0,
        "Částečně": 0,
        "Ne": 0,
        "Neaplikováno": 0
    };
    /* Začíná na začátku dotazníku 0*/
    let maxScore = 0;
    /* Skore za každou sekci, začíná prázdný objekt */
    let sectionScores = {};
    // Přidáme proměnnou pro sledování celkového počtu otázek
    let totalQuestions = 0;

    questionnaireData.sections.forEach(section => {
        let sectionScore = {
            "Ano": 0,
            "Částečně": 0,
            "Ne": 0,
            "Neaplikováno": 0
        };
        let sectionMaxScore = 0;

        // Nový vnější cyklus pro projití všech podsekcí
        section.subsections.forEach(subsection => {
            subsection.questions.forEach(question => {
                //console.log(question.response);  // Debugging output
                totalQuestions++; // Zvyšujeme počet otázek při každé iteraci
                if (question.response in scoring) {
                    sectionScore[question.response]++;
                    totalScores[question.response]++;
                }
                // Přidáváme k max skóre pouze pokud otázka není označena jako "Neaplikováno"
                if (question.response !== "Neaplikováno") {
                    sectionMaxScore += 2;
                    maxScore += 2;
                }
            });
        });
        //console.log(totalScores);  // Debugging output

        sectionScores[section.id] = {
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: (
                (sectionScore["Ano"] * scoring["Ano"] + sectionScore["Částečně"] * scoring["Částečně"]) /
                sectionMaxScore
            ) * 100
        };
    });

    const results = {
        totalScores: totalScores,
        maxScore: maxScore,
        percentage: (((totalScores["Ano"] * 2) + totalScores["Částečně"])/ maxScore) * 100,
        sections: sectionScores,
        // Procentuální hodnota otázek označených jako "Neaplikováno"
        notApplicablePercentage: (totalScores["Neaplikováno"] / totalQuestions) * 100
    };

    // Uložení výsledků do localStorage
    localStorage.setItem('isoResults', JSON.stringify(results));

    return results;
}


function calculateScoreAndRedirect() {
    const scores = calculateScores();

    localStorage.setItem('isoScores', JSON.stringify(scores));
    console.log(scores);
    window.location.href = 'dashboard-ISO.html';
}

// Define the measure mappings
const measureMappings = {
    "1.opatreni": {
        subsections: ["5.2", "6.1", "8.2", "8.3"],
        sections: ["section8"]
    },
    "2.opatreni": {
        subsections: [], // Nejsou žádné 
        sections: ["section19"]
    },
    "3.opatreni": {
        subsections: [],
        sections: ["section20", "section15"]
    },
    "4.opatreni": {
        subsections: [],
        sections: ["section18"]
    },
    "5.opatreni": {
        subsections: [],
        sections: ["section15", "section16", "section21"]
    },
    "6.opatreni": {
        subsections: ["9.1", "9.2", "9.3"],
        sections: ["section9"]
    },
    "7.opatreni": {
        subsections: ["7.3", "7.4"],
        sections: ["section10"]
    },
    "8.opatreni": {
        subsections: [],
        sections: ["section13"]
    },
    "9.opatreni": {
        subsections: [],
        sections: ["section10", "section11", "section12", "section16"]
    },
    "10.opatreni": {
        subsections: [],
        sections: ["section12", "section16"]
    },

};

// Funkce pro NIS2 srovnávač

function calculateScoresForMeasure(measureName) {
    const subsectionIds = measureMappings[measureName].subsections;
    const sectionIds = measureMappings[measureName].sections;
    console.log(subsectionIds);
    console.log(sectionIds);
    // Objekt pro ukládání skóre z odpovědí
    let measureScores = {
        subsections: {},
        sections: {}
    };

    questionnaireData.sections.forEach(section => {
        let sectionScore = 0;
        let sectionMaxScore = 0;

        section.subsections.forEach(subsection => {
            let subsectionScore = 0;
            let subsectionMaxScore = subsection.questions.length * 2; // Assuming max score per question is 2

            subsection.questions.forEach(question => {
                // Scores based on responses
                switch (question.response) {
                    case "Ano":
                        subsectionScore += 2;
                        break;
                    case "Částečně":
                        subsectionScore += 1;
                        break;
                    case "Ne":
                    case "Neaplikováno":
                    default:
                        subsectionScore += 0;
                        break;
                }
            });

            // If the subsection is relevant to the measure, store its score
            if (subsectionIds.includes(subsection.id)) {
                measureScores.subsections[subsection.id] = {
                    score: subsectionScore,
                    maxScore: subsectionMaxScore,
                    percentage: (subsectionScore / subsectionMaxScore) * 100
                };
            }

            // Accumulate scores for the section
            sectionScore += subsectionScore;
            sectionMaxScore += subsectionMaxScore;
        });

        // If the section is relevant to the measure, store its score
        if (sectionIds.includes(section.id)) {
            measureScores.sections[section.id] = {
                score: sectionScore,
                maxScore: sectionMaxScore,
                percentage: (sectionScore / sectionMaxScore) * 100
            };
        }
    });

    // Handle the measure scores as needed, e.g., store in localStorage, display to the user, etc.
    localStorage.setItem('measureScores', JSON.stringify(measureScores));

    return measureScores;
}

submitButton.addEventListener("click", function () {
    event.preventDefault(); // Prevent default form submission if necessary
    if (!validateSectionAnswers()) {
        alert("Prosím vyplňte všechny otázky.");
        return;
    }
    storeAnswers();

    // Calculate and store the scores for each measure
    for (const measureName in measureMappings) {
        let scoresForMeasure = calculateScoresForMeasure(measureName);
        localStorage.setItem(`${measureName}Scores`, JSON.stringify(scoresForMeasure));
    }

    // Update progress bars and calculate overall percentage
    updateProgressBarsAndCalculateOverallPercentage();

    calculateScoreAndRedirect();
});

document.addEventListener('DOMContentLoaded', function () {
    updateProgressBarsAndCalculateOverallPercentage();
});


function updateProgressBarsAndCalculateOverallPercentage() {
    let overallTotalPercentage = 0;
    let overallCount = 0;
    let individualMeasurePercentages = {};

    console.log('measureMappings', measureMappings); // Debug output

    // Loop through each measure and update its progress bar
    for (const measureName in measureMappings) {
        console.log('measureName', measureName); // Debug output

        const measureScores = JSON.parse(localStorage.getItem(`${measureName}Scores`));
        console.log('measureScores', measureScores); // Debug output

        if (measureScores && measureScores.sections) {
            let totalPercentage = 0;
            let count = 0;

            // Sum up the percentage of each section
            for (const sectionId in measureScores.sections) {
                console.log('sectionId', sectionId); // Debug output

                totalPercentage += measureScores.sections[sectionId].percentage;
                overallTotalPercentage += measureScores.sections[sectionId].percentage;
                count++;
                overallCount++;
            }

            // Calculate the average percentage for the individual measure
            const averagePercentage = count > 0 ? totalPercentage / count : 0;
            individualMeasurePercentages[measureName] = averagePercentage;

            // Update the individual measure progress bar
            const progressBarId = `${measureName}ProgressBar`; // Construct the ID for the progress bar
            const progressBar = document.getElementById(progressBarId);
            if (progressBar) {
                progressBar.style.width = `${averagePercentage}%`;
                progressBar.setAttribute('aria-valuenow', averagePercentage);
            } else {
                console.log('ProgressBar not found:', progressBarId); // Debug output
            }

            // Update the percentage text
            const percentageTextId = `${measureName}Percentage`; // Construct the ID for the percentage text
            const percentageText = document.getElementById(percentageTextId);
            if (percentageText) {
                percentageText.textContent = `${averagePercentage.toFixed(2)}%`;
            } else {
                console.log('PercentageText not found:', percentageTextId); // Debug output
            }
        }
    }

    // Calculate the overall average percentage for all measures
    const overallAveragePercentage = overallCount > 0 ? overallTotalPercentage / overallCount : 0;

    // Store the overall and individual percentages for use in the pie chart
    localStorage.setItem('overallAveragePercentage', overallAveragePercentage);
    localStorage.setItem('individualMeasurePercentages', JSON.stringify(individualMeasurePercentages));

    // Now you can use these stored values to create your pie chart
}


// Initialize
updateButtonVisibility();
showSection(currentSectionIndex);




