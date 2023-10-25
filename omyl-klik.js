    var overlay = document.getElementById('omyl-klik');
    var questionnaire = document.getElementById('dotaznik');

    function startQuestionnaire() {
        // Show overlay and questionnaire when the questionnaire starts
        overlay.style.display = 'block';
        questionnaire.style.display = 'block';
    }

    function endQuestionnaire() {
        // Hide overlay and questionnaire when the questionnaire ends
        overlay.style.display = 'none';
        questionnaire.style.display = 'none';
    }