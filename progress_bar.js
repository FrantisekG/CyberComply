document.addEventListener("DOMContentLoaded", function () {
  let questions = {};
  document.querySelectorAll("#questions > div").forEach(question => {
    questions[question.id] = question;
  });

  // Začít dotazník

  startQuestionnaire();

  let entityStatus = ""; // Proměnná pro určení velikosti subjektu, která se využije podle potřeby
  let sector = ""; // Promměná sektoru pro zobrazení v NIS2 dashboardu
  let currentQuestionId = "question1"; // Proměnná první otázky

  const outerProgressBar = document.getElementById("outer-progress-bar");
  const progressBar = document.getElementById("progress-bar");
  const finalVerdictNe = document.getElementById("finalVerdictNe");
  const finalVerdictAno = document.getElementById("finalVerdictAno");
  const finalVerdictAnoZakladni = document.getElementById("finalVerdictAnoZakladni");
  const finalVerdictAnoDulezity = document.getElementById("finalVerdictAnoDulezity");

  // Mechanismus pro ukládání výsledku
  function saveNIS2ResultsToLocalStorage(verdictShown) {
    const isUnderNIS =
      finalVerdictAnoZakladni.style.display === "block" ||
      finalVerdictAnoDulezity.style.display === "block";

    const isNotUnderNIS =
      finalVerdictNe.style.display === "block" ||
      finalVerdictNe2.style.display === "block";

    const nis2Results = {
      isUnderNIS: isUnderNIS,
      isNotUnderNIS: isNotUnderNIS,  // Přidali jsme nový klíč
      sector: sector,
      verdict: finalVerdictAnoZakladni.style.display === "block" ? "Základní" :
        (finalVerdictAnoDulezity.style.display === "block" ? "Důležitý" :
          (finalVerdictNe.style.display === "block" ? "Ne" :
            (finalVerdictNe2.style.display === "block" ? "Ne2" : ""))),
      entityStatus: entityStatus,
      finalVerdictShown: verdictShown
    };

    localStorage.setItem('NIS2Results', JSON.stringify(nis2Results));
  }

  // ----- Funkce další otázka ----------------- //
  function showNextQuestion(nextQuestionId) {
    console.log('Current question id:', currentQuestionId);
    console.log('Next question id:', nextQuestionId);

    questions[currentQuestionId].style.display = "none";
    currentQuestionId = nextQuestionId;
    questions[currentQuestionId].style.display = "block";
    updateProgress();
  }
  ////////////////////////////////////////////////////

  let totalAnsweredQuestions = 0;
  let maxQuestions = 6;  // Set this to the maximum number of questions in your questionnaire

  function updateProgress() {
    totalAnsweredQuestions += 1;
    const increment = 100 / maxQuestions;
    const newWidth = (totalAnsweredQuestions * increment).toFixed(2);
    progressBar.style.width = newWidth + "%";
    progressBar.setAttribute("aria-valuenow", newWidth);
  }


  // Otázka č. 1 - Má vaše organizace sídlo v Evropské unii? 
  document.getElementById("activityYes").addEventListener("click", function () {
    showNextQuestion("question2"); // 
  });

  document.getElementById("activityNo").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictNe.style.display = "block";
    finalVerdictAno.style.display = "none";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictNe');  // Uložení ID zobrazeného verdiktu
  });

  document.getElementById("activityYes2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAno.style.display = "block";
    finalVerdictNe.style.display = "none";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAno');  // Uložení ID zobrazeného verdiktu
  });
  // KONEC Otázka č. 1

  // Otážka č. 2 - Spadáte pod ZKB?
  document.getElementById("activityNo2").addEventListener("click", function () {
    showNextQuestion("question3");
  });
  // Konec Otázka č. 2

  // Otázka č. 3 - Nezávislý podnik? Odpověď NE
  document.getElementById("activityNo3_1").addEventListener("click", function () {
    showNextQuestion("question3_2");
  });
  // Otázka č. 3 - Nezávislý podnik? Odpověď ANO
  document.getElementById("activityYes3_1").addEventListener("click", function () {
    showNextQuestion("question4");
  }); // KONEC

  // Otázka č. 3.1 - Partnerský podnik? NE
  document.getElementById("activityNo3_2").addEventListener("click", function () {
    showNextQuestion("question3_3");
  }); // KONEC

  // Otázka č. 3.2 - Propojený?
  document.getElementById("activityYes3_2").addEventListener("click", function () {
    showNextQuestion("question7");
  });

  document.getElementById("activityYes3_3").addEventListener("click", function () {
    showNextQuestion("question7");
  });

  document.getElementById("activityNo3_3").addEventListener("click", function () {
    showNextQuestion("question7");
  });
  // KONEC

  // question3 - Vyberte, kolik zaměstnanců má v současnosti vaše společnost:
  document.getElementById("activityZamMikro").addEventListener("click", function () {
    showNextQuestion("question4_1");
  });
  document.getElementById("activityZamMaly").addEventListener("click", function () {
    showNextQuestion("question4_2");
  });
  document.getElementById("activityZamStredni").addEventListener("click", function () {
    showNextQuestion("question4_3");
  });
  document.getElementById("activityZamVelky").addEventListener("click", function () {
    entityStatus = "velky"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question8");
  });


  // question7 - Vyberte, kolik zaměstnanců po přepočtu:
  document.getElementById("activityZamMikro2").addEventListener("click", function () {
    entityStatus = "mikro"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question5");
  });
  document.getElementById("activityZamMaly2").addEventListener("click", function () {
    entityStatus = "maly"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question5");
  });
  document.getElementById("activityZamStredni2").addEventListener("click", function () {
    entityStatus = "stredni"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question8"); // Bug, že v otázce po přepočtu je určen tento podnik
  });
  document.getElementById("activityZamVelky2").addEventListener("click", function () {
    entityStatus = "velky"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question8");
  });

  // URČENÍ VELIKOSTI PODNIKŮ NA ZÁKLADĚ OTÁZEK
  // question4_1 - Přesahuje 2 mil? NE -> Mikro
  document.getElementById("activityNo4_1").addEventListener("click", function () {
    entityStatus = "mikro"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question5");
  });
  // question4_1 - Přesahuje 2 mil? ANO -> Malý
  document.getElementById("activityYes4_1").addEventListener("click", function () {
    entityStatus = "maly"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question4_2");
  });
  // question4_2 - Přesahuje 10 mil? NE -> Malý
  document.getElementById("activityNo4_2").addEventListener("click", function () {
    entityStatus = "maly"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question5");
  });
  // question4_2 - Přesahuje 10 mil? ANO -> Střední
  document.getElementById("activityYes4_2").addEventListener("click", function () {
    entityStatus = "stredni"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question4_3");
  });
  // question4_3 - Přesahuje 50 mil? NE -> Střední
  document.getElementById("activityNo4_3").addEventListener("click", function () {
    entityStatus = "stredni"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question8");
  });
  // question4_3 - Přesahuje 50 mil? ANO -> Velký
  document.getElementById("activityYes4_3").addEventListener("click", function () {
    entityStatus = "velky"; // Nastavení stavu entity od této otázky dál
    console.log('entityStatus is now:', entityStatus);
    showNextQuestion("question8");
  });

  // Function to update the final verdict ZÁKLADNÍ
  function updateFinalVerdict() {
    document.getElementById("finalVerdictSector").textContent = sector;
    if (entityStatus === "mikro") {
      document.getElementById("finalVerdictSize").textContent = "Mikropodnik";
    } else if (entityStatus == "maly") {
      document.getElementById("finalVerdictSize").textContent = "Malý podnik";
    } else if (entityStatus === "stredni") {
      document.getElementById("finalVerdictSize").textContent = "Střední podnik";
    } else if (entityStatus == "velky") {
      document.getElementById("finalVerdictSize").textContent = "Velký podnik";
    }
  }

  // Function to update the final verdict DŮLEŽITÝ
  function updateFinalVerdictD() {
    document.getElementById("finalVerdictSectorD").textContent = sector;
    if (entityStatus === "mikro") {
      document.getElementById("finalVerdictSizeD").textContent = "Mikropodnik";
    } else if (entityStatus == "maly") {
      document.getElementById("finalVerdictSizeD").textContent = "Malý podnik";
    } else if (entityStatus === "stredni") {
      document.getElementById("finalVerdictSizeD").textContent = "Střední podnik";
    } else if (entityStatus == "velky") {
      document.getElementById("finalVerdictSizeD").textContent = "Velký podnik";
    }
  }

  // PŘÍLOHA I - STAV ENTITY NA ZÁKLADĚ VELIKOSTI
  // question8 - Poskytujete služby v jednom z uvedených odvětví? Energetika
  document.getElementById("activityEnergetika").addEventListener("click", function () {
    sector = "Energetika";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12");
  });

  // question8-12 - Výběr pododvětví Energetika
  var activityIds = ["activityElektrina", "activityVytapeni", "activityRopa", "activityPlyn", "activityVodik"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      showNextQuestion("question12");
      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD(); // delay the call to updateFinalVerdict
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu


        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Doprava
  document.getElementById("activityDoprava").addEventListener("click", function () {
    sector = "Doprava";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_1");
  });

  // question8-12 - Výběr pododvětví Doprava
  var activityIds = ["activityLet", "activityZeleznice", "activityVodni", "activitySilnicni"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      showNextQuestion("question12");
      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Bankovnictví
  document.getElementById("activityBanky").addEventListener("click", function () {
    sector = "Bankovnictví";
    console.log('Subjekt je v sektoru:', sector);
    // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
    if (entityStatus === "stredni") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      // Uložení ID zobrazeného verdiktu
      updateFinalVerdictD();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');

      // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
    } else if (entityStatus == "velky") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoZakladni.style.display = "block";
      updateFinalVerdict();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
    }
  });
  // question8 - Poskytujete služby v jednom z uvedených odvětví? Infrastruktura finančních trhů
  document.getElementById("activityFinance").addEventListener("click", function () {
    sector = "Finanční trh";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_2");
  });

  // question8-12 - Výběr pododvětví Infrastruktura fin. trhů
  var activityIds = ["activityObchod", "activityProtistrany"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      document.getElementById("dora").style.display = "block";
      // Store the ID of the dora element in localStorage
      localStorage.setItem('DoraFinalVerdict', 'dora');

      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Zdravotnictví
  document.getElementById("activityZdravi").addEventListener("click", function () {
    sector = "Zdravotnictví";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_3");
  });

  // question8-12 - Výběr pododvětví zdravotnictví
  var activityIds = ["activityPece", "activityLabs", "activityLeciva", "activityFarmacie", "activityZdravotniprostredky"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      showNextQuestion("question12");
      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Pitná voda
  document.getElementById("activityPitVoda").addEventListener("click", function () {
    sector = "Vodní hospodářství";
    console.log('Subjekt je v sektoru:', sector);
    // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
    if (entityStatus === "stredni") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      updateFinalVerdictD();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

      // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
    } else if (entityStatus == "velky") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoZakladni.style.display = "block";
      updateFinalVerdict();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
    }
  });
  // question8 - Poskytujete služby v jednom z uvedených odvětví? Odpadní voda
  document.getElementById("activityOdpVoda").addEventListener("click", function () {
    sector = "Odpadní hospodářství";
    console.log('Subjekt je v sektoru:', sector);
    // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
    if (entityStatus === "stredni") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      updateFinalVerdictD();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

      // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
    } else if (entityStatus == "velky") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoZakladni.style.display = "block";
      updateFinalVerdict();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu

    }
  });
  // VÝJIMKA U DIGITÁLNÍ 
  // -----------------------------------------
  // question8 - Poskytujete služby v jednom z uvedených odvětví? Digitální infrastruktura
  document.getElementById("activityDigi").addEventListener("click", function () {
    sector = "Digitální infrastruktura";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_4");
  });

  // question8-12 - Výběr pododvětví digitální infrastruktura
  var activityIds = ["activityIXP", "activityDNS3", "activityRegistry", "activityCloud2", "activityDatoveCentrum", "activityCDN1", "activityCertifikace3", "activityVerejneKom"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Řízené služby ICT
  document.getElementById("activityICT").addEventListener("click", function () {
    sector = "Řízení ICT služeb";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_5");
  });

  // question8-12 - Výběr pododvětví Řízené služby ICT
  var activityIds = ["activityMSP", "activityMSSP"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
      if (entityStatus === "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoDulezity.style.display = "block";
        updateFinalVerdictD();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu

        // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      } else if (entityStatus == "velky") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // DODĚLAT !!!! //
  // Služba vytvářející důvěru
  document.getElementById("activityCertifikace2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });
  // Služba DNS s výjimkou operátorů
  document.getElementById("activityDNS2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });
  // Registry domén nejvyšší úrovně
  document.getElementById("activityTLD2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });
  // Sítě elektronických komunikací 
  document.getElementById("activityElektro2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });
  document.getElementById("activityJine2").addEventListener("click", function () {
    showNextQuestion("question11");
  });

  // Stále DIGITÁLNÍ - question11 - Poskytujete služby v jednom z uvedených odvětví

  document.getElementById("activityCloud").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";;
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  document.getElementById("activityDataCentra").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";;
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  document.getElementById("activityCDN").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";;
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  document.getElementById("activityZadna").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictNe.style.display = "block";
    finalVerdictAno.style.display = "none";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictNe');  // Uložení ID zobrazeného verdiktu
  });

  // --------------------------------------------------------------------------

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Veřejná správa
  document.getElementById("activitySprava").addEventListener("click", function () {
    sector = "Veřejná správa";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_6");
  });

  // PODODVĚTVÍ - Výběr pododvětví Veřejná správa
  var activityIds = ["activityUstredniSprava", "activityRegionalniSprava"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      document.getElementById("verejnasprava").style.display = "block";
      // Store the ID of the verejnasprava element in localStorage
      localStorage.setItem('VerejnaSpravaFinalVerdict', 'verejnasprava');

      // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
      if (entityStatus == "velky" || entityStatus == "stredni") {
        outerProgressBar.style.display = "none";
        questions[currentQuestionId].style.display = "none";
        finalVerdictAnoZakladni.style.display = "block";
        updateFinalVerdict();
        localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
      }
    });
  }

  // question8 - Poskytujete služby v jednom z uvedených odvětví? Vesmir
  document.getElementById("activityVesmir").addEventListener("click", function () {
    sector = "Vesmírný průmysl";
    // Kontrola velikosti entity - pro střední podnik výsledek DŮLEŽITÝ
    if (entityStatus === "stredni") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      updateFinalVerdictD();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
      // Velikost podniku je velký, proto subjekty ZÁKLADNÍ"
    } else if (entityStatus == "velky") {
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoZakladni.style.display = "block";
      updateFinalVerdict();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
    }
  });


  // PŘÍLOHA II - Vybočení z PŘÍLOHA I. Otázka question9
  document.getElementById("activityJine").addEventListener("click", function () {
    showNextQuestion("question9");
  });
  // Pošta
  document.getElementById("activityPosta").addEventListener("click", function () {
    sector = "Poštovní služby"
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  // Odpady
  document.getElementById("activityOdpady").addEventListener("click", function () {
    sector = "Odpadové hospodářství";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  // Výroba chemie
  document.getElementById("activityVyrobaCh").addEventListener("click", function () {
    sector = "Chemický průmysl"
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  // Výroba potravin
  document.getElementById("activityPotraviny").addEventListener("click", function () {
    sector = "Potravinářský průmysl";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });

  // Výroba ostatní
  document.getElementById("activityVyroba").addEventListener("click", function () {
    sector = "Výrobní průmysl";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_7");
  });

  //  Výběr pododvětví Výroba
  var activityIds = ["activityVyrobaPC", "activityVyrobaElek", "activityVyrobaStroje", "activityVyrobaMotor", "activityVyrobaOstatni"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      updateFinalVerdictD();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
    });
  }

  // Digitální poskytovatelé
  document.getElementById("activityDigPosk").addEventListener("click", function () {
    sector = "Digitální poskytovatelé";
    console.log('Subjekt je v sektoru:', sector);
    showNextQuestion("question12_8");
  });
  // Výběr pododvětví Digitální poskytovatelé
  var activityIds = ["activityTrziste", "activityVyhledavac", "activityPlatforma"];

  for (var i = 0; i < activityIds.length; i++) {
    document.getElementById(activityIds[i]).addEventListener("click", function () {
      console.log('Subjekt je v sektoru:', sector);
      outerProgressBar.style.display = "none";
      questions[currentQuestionId].style.display = "none";
      finalVerdictAnoDulezity.style.display = "block";
      updateFinalVerdict();
      localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
    });
  }

  // Výzkum
  document.getElementById("activityVyzkum").addEventListener("click", function () {
    sector = "Věda, výzkum a vzdělávání";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });

  // Žádné z nabízených
  document.getElementById("activityNic2").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictNe2.style.display = "block";
    finalVerdictAno.style.display = "none";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictNe2');  // Uložení ID zobrazeného verdiktu
  });

  // ------------------------------------------------------------------------------- //
  // PŘÍLOHA I - Mikro a malý podnik
  // Služba vytvářející důvěru
  document.getElementById("activityCertifikace").addEventListener("click", function () {
    sector = "Digitální infrastruktura";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    updateFinalVerdict();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });
  // Služba DNS s výjimkou operátorů
  document.getElementById("activityDNS").addEventListener("click", function () {
    sector = "Digitální infrastruktura";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    updateFinalVerdict();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });

  // Registry domén nejvyšší úrovně
  document.getElementById("activityTLD").addEventListener("click", function () {
    sector = "Digitální infrastruktura";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    updateFinalVerdict();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });

  // Sítě elektronických komunikací 
  document.getElementById("activityElektro").addEventListener("click", function () {
    sector = "Digitální infrastruktura";
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoDulezity.style.display = "block";
    updateFinalVerdictD();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoDulezity');  // Uložení ID zobrazeného verdiktu
  });
  // Veřejná správa
  document.getElementById("activityVerejnost").addEventListener("click", function () {
    sector = "Veřejná správa";
    document.getElementById("verejnasprava").style.display = "block";
    // Store the ID of the verejnasprava element in localStorage
    localStorage.setItem('VerejnaSpravaFinalVerdict', 'verejnasprava');
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictAnoZakladni.style.display = "block";
    updateFinalVerdict();
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictAnoZakladni');  // Uložení ID zobrazeného verdiktu
  });

  document.getElementById("activityNic").addEventListener("click", function () {
    outerProgressBar.style.display = "none";
    questions[currentQuestionId].style.display = "none";
    finalVerdictNe2.style.display = "block";
    finalVerdictAno.style.display = "none";
    localStorage.setItem('NIS2FinalVerdict', 'finalVerdictNe2');  // Uložení ID zobrazeného verdiktu
  });

});

endQuestionnaire();


// Variable to track whether the user has started the questionnaire
let hasStartedQuestionnaire = false;

// Event listener for changes in the questionnaire (e.g., when a user answers a question)
// This can be adapted to your specific scenario
document.querySelector("#questions").addEventListener("change", function () {
  hasStartedQuestionnaire = true;
});

// Okno upozorňující na možné přerušení dotazníku
window.onbeforeunload = function (event) {
  if (hasStartedQuestionnaire) {
    // Custom message for the confirmation dialog
    // Note: Some browsers might display their default message regardless of this custom message
    const message = "Are you sure you want to leave? Any progress you've made will be lost.";
    event.returnValue = message;
    return message;
  }
};

function downloadPDF(elementID) {
  // Capture the content of the dashboard with the given elementID
  html2canvas(document.querySelector("#" + elementID)).then(canvas => {
    var imgData = canvas.toDataURL('image/png');

    // Create a new instance of jsPDF
    const pdf = new jsPDF();

    // Add the captured image to the PDF
    pdf.addImage(imgData, 'PNG', 0, 0);

    // Download the PDF
    pdf.save("dashboard-report.pdf");
  });
}



