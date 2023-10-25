let currentSectionIndex = 0;
const maxSections = 7;  // Sekcí ISO v dotazníku
const sections = document.querySelectorAll(".section");
const progressBar = document.getElementById("progress-bar-ISO");
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
                    console.log(`Question ${qIndex} in subsection ${subsection.id} changed from ${oldValue} to ${radios[i].value}`);
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
        "Ne": 0
    };
    /* Každá odpověď na začátku začíná 0, poté celkový počet bodů pro každou možnou odpověď ve všech sekcích a otázkách*/
    let totalScores = {
        "Ano": 0,
        "Částečně": 0,
        "Ne": 0
    };
    /* Začíná na začátku dotazníku 0*/
    let maxScore = 0;
    /* Skore za každou sekci, začíná prázdný objekt */
    let sectionScores = {};

    questionnaireData.sections.forEach(section => {
        let sectionScore = {
            "Ano": 0,
            "Částečně": 0,
            "Ne": 0
        };
        let sectionMaxScore = 0;

        // Nový vnější cyklus pro projití všech podsekcí
        section.subsections.forEach(subsection => {
            subsection.questions.forEach(question => {
                //console.log(question.response);  // Debugging output
                if (question.response in scoring) {
                    sectionScore[question.response]++;
                    totalScores[question.response]++;
                }
                sectionMaxScore += 2;
                maxScore += 2;
            });
        });
        //console.log(totalScores);  // Debugging output

        sectionScores[section.id] = {
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: (sectionScore["Ano"] * 2 / sectionMaxScore) * 100
        };
    });

    const results = {
        totalScores: totalScores,
        maxScore: maxScore,
        percentage: (totalScores["Ano"] * 2 / maxScore) * 100,
        sections: sectionScores
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

submitButton.addEventListener("click", function () {
    if (!validateSectionAnswers()) {
        alert("Prosím vyplňte všechny otázky.");
        return;
    }
    storeAnswers();
    calculateScoreAndRedirect();
});

// Initialize
updateButtonVisibility();
showSection(currentSectionIndex);