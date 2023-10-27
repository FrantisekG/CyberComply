const questionnaireData = {
  sections: [
    {
      id: "section1",
      title: "Kontext organizace",
      subsections: [
        {
          id: "4.1",
          title: "Porozumění organizaci a jejímu kontextu (4.1)",
          questions: [
            {
              id: "q4.1_1",
              text: "Organizace si je vědoma všech vlivů, které působí na její systém řízení bezpečnosti informací",
              comment:
                "Např. kulturní, společenské, politické, regulační, finanční, technologické, ekonomické, přírodní a konkurenční",
              response: null,
            },
          ],
        },
        {
          id: "4.2",
          title: "Porozumění potřebám a očekávání zainteresovaných stran (4.2)",
          questions: [
            {
              id: "q4.2_1",
              text: "Organizace si je vědoma všech zainteresovaných stran, které může zajímat fungování její ISMS",
              comment:
                "Strany mohou být zainteresovány pozitivně (např. zákazník) nebo negativně (např. hacker)",
              response: null,
            },
            {
              id: "q4.2_2",
              text: "Organizace má přehled o všech smlouvách, dohodách a úmluvách týkajících se funkce jejího ISMS",
              comment:
                "Sem může patřit například dohoda se zákazníkem o nakládání s informacemi po ukončení smlouvy",
              response: null,
            },
            {
              id: "q4.2_3",
              text: "Organizace dodržuje všechny smlouvy, dohody a úmluvy týkající se jejího ISMS",
              comment: "",
              response: null,
            },
            {
              id: "q4.2_4",
              text: "Organizace má přehled o všech zákonech a nařízení týkajících se funkce jejího ISMS",
              comment: "Např. GDPR, Zákon č. 412/2005 Sb.",
              response: null,
            },
          ],
        },
        {
          id: "4.3",
          title: "Stanovení rozsahu systému řízení bezpečnosti informací (4.3)",
          questions: [
            {
              id: "q4.3_1",
              text: "Organizace má dokumentaci rozsahu svého ISMS",
              comment: "Může obsahovat např. databáze, seznamy dokumentů",
              response: null,
            },
            {
              id: "q4.3_2",
              text: "Organizace má přehled o všech rozšiřujících částech sahajících mimo rozsah ISMS",
              comment: "Může obsahovat např. databáze, seznamy dokumentů",
              response: null,
            },
          ],
        },

        {
          id: "4.4",
          title: "Systém řízení bezpečnosti informací",
          questions: [
            {
              id: "q4.4_1",
              text: "Organizace se zavazuje k manipulaci se svým ISMS dle standardu ISO/IEC 27001",
              comment: "Může obsahovat např. databáze, seznamy dokumentů",
              response: null,
            },
            {
              id: "q4.4_2",
              text: "Organizace má plnou autoritu, zodpovědnost a autonomii při plnění požadavků ISMS",
              comment:
                'Pokud o ISMS organizace rozhoduje např. její mateřská společnost, vyplňte "ne"',
              response: null,
            },
          ],
        },
      ],
    },

    {
      id: "section2",
      title: "Vedoucí role",
      subsections: [
        {
          id: "5.1",
          title: "Vedoucí role a závazek (5.1)",
          questions: [
            {
              id: "q5.1_1",
              text: "Organizace má plnou autoritu, zodpovědnost a autonomii při plnění požadavků ISMS",
              comment:
                'Pokud o ISMS organizace rozhoduje např. její mateřská společnost, vyplňte "ne"',
              response: null,
            },
            {
              id: "q5.1_2",
              text: "V organizaci jsou zavedeny procesy na neustálé zlepšování ISMS",
              comment: "Např. upgrade systému, školení zaměstnanců",
              response: null,
            },
            {
              id: "q5.1_3",
              text: "Vedení organizace zajišťuje dostupnost všech zdrojů potřebných pro správné fungování ISMS",
              comment: "Např. finanční nebo lidské zdroje",
              response: null,
            },
            {
              id: "q5.1_4",
              text: "Podniková kultura vede zaměstnance k dodržování požadavků informační bezpečnosti",
              comment:
                "Např. pravidelná školení o bezpečnosti informací nebo postihy při nedodržování bezpečnostních požadavků",
              response: null,
            },
          ],
        },

        {
          id: "5.2",
          title: "Politika (5.2)",
          questions: [
            {
              id: "q5.2_1",
              text: "Organizace má jasně specifikovanou bezpečnostní politiku informací",
              comment:
                "Informační bezpečnostní politika existuje v písemné nebo elektronické podobě",
              response: null,
            },
            {
              id: "q5.2_2",
              text: "Informační bezpečnostní politika organizace je pravidelně udržována a kontrolována",
              comment:
                "Např. pravidelná školení o bezpečnosti informací nebo postihy při nedodržování bezpečnostních požadavků",
              response: null,
            },
            {
              id: "q5.2_3",
              text: "Informační bezpečnostní politika organizace je dostupná všem zainteresovaným stranám",
              comment:
                "Předpokládají se pouze pozitivně zainteresované strany, viz. bod 4.2",
              response: null,
            },
          ],
        },
        {
          id: "5.3",
          title: "Role, odpovědnosti a pravomoci organizace (5.3)",
          questions: [
            {
              id: "q5.3_1",
              text: "V organizaci existují osoby zodpovědné za provoz a údržbu ISMS",
              comment:
                'Vyplňte "ano", pokud v organizaci existuje osoba s rolí CIO (Chief Information Officer) nebo rolí podobnou',
              response: null,
            },
            {
              id: "q5.3_2",
              text: "Vrcholové vedení má přehled o aktuálním fungování ISMS",
              comment:
                'Vychází z komunikace vedení a CIO, "ano" v případě pravidelných schůzek, "ne" v případě nepravidelných',
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section3",
      title: "Plánování",
      subsections: [
        {
          id: "6.1",
          title: "Opatření zaměřená na rizika a příležitosti (6.1)",
          questions: [
            {
              id: "q6.1_1",
              text: "Organizace je připravena čelit scénářům, které mohou mít dopad na funkci ISMS",
              comment:
                "Např. Delší výpadek elektrického proudu, hackerský útok, úprava zákonů",
              response: null,
            },
            {
              id: "q6.1_2",
              text: "Organizace má plány pro údržbu a zlepšování ISMS",
              comment:
                "Plány mohou být v elektronické nebo písemné podobě. Předpokládá se existence krátkodobých, střednědobých i dlouhodobých plánů",
              response: null,
            },
            {
              id: "q6.1_3",
              text: "Organizace vlastní dokumentaci všech rizik týkajících se ISMS a jejich hodnocení",
              comment:
                "Plány mohou být v elektronické nebo písemné podobě. Předpokládá se existence krátkodobých, střednědobých i dlouhodobých plánů",
              response: null,
            },
            {
              id: "q6.1_4",
              text: "Dokumentace rizik, plánů a rizikových scénářů je pravidelně udržována",
              comment: "",
              response: null,
            },
          ],
        },
        {
          id: "6.2",
          title: "Cíle bezpečnosti informací a plánování jejich dosažení (6.2)",
          questions: [
            {
              id: "q6.2_1",
              text: "Organizace má definované cíle jejího ISMS",
              comment: "Existují v písemné nebo elektronické formě",
              response: null,
            },
            {
              id: "q6.2_2",
              text: "Všechny cíle ISMS jsou měřitelné a dá se zjistit míra jejich naplnění",
              comment:
                "Měřitelné např. dle standardu ISO/IEC 27004 nebo vlastních měřítek",
              response: null,
            },
            {
              id: "q6.2_3",
              text: "Cíle ISMS organizace jsou pravidelně udržovány",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section4",
      title: "Podpora",
      subsections: [
        {
          id: "7.1",
          title: "Zdroje (7.1)",
          questions: [
            {
              id: "q7.1_1",
              text: "Organizace má dostatečné zdroje pro fungování ISMS",
              comment:
                '"Ano" v případě nadbytku zdrojů, "ne" v případě nedostatku zdrojů',
              response: null,
            },
            {
              id: "q7.1_2",
              text: "Organizace má dostatečné zdroje pro údržbu a neustálé zlepšování ISMS",
              comment:
                '"Ano" v případě nadbytku zdrojů, "ne" v případě nedostatku zdrojů',
              response: null,
            },
          ],
        },
        {
          id: "7.2",
          title: "Kompetence (7.2)",
          questions: [
            {
              id: "q7.2_1",
              text: "Organizace zajišťuje adekvátní trénink, vzdělání a školení zaměstnanců z hlediska bezpečnosti informací",
              comment:
                "Školení je prováděno v adekvátní době po nástupu a poté v pravidelných intervalech",
              response: null,
            },
            {
              id: "q7.2_2",
              text: "Organizace udržuje dokumentaci o schopnostech zaměstnanců zabezpečit informace organizace",
              comment: "Např. protokoly o školení, informace z pohovorů",
              response: null,
            },
          ],
        },
        {
          id: "7.3",
          title: "Povědomí (7.3)",
          questions: [
            {
              id: "q7.3_1",
              text: "Všichni lidé pracující pro organizaci si jsou vědomi bezpečnostní politiky organizace",
              comment:
                "Kladen důraz na osoby pracující s PII (Personally Identifiable Information)",
              response: null,
            },
            {
              id: "q7.3_2",
              text: "Lidé pracující v organizaci rozumí možným následkům při nedodržování požadavků ISMS",
              comment:
                "Následky mohou být sděleny na bezpečnostním školení nebo jinou formou",
              response: null,
            },
          ],
        },
        {
          id: "7.4",
          title: "Komunikace (7.4)",
          questions: [
            {
              id: "q7.4_1",
              text: "Organizace má definované role pro externí a interní komunikaci",
              comment:
                "Interní - V rámci podniku, Externí - Mimo podnik (např.zákazník)",
              response: null,
            },
            {
              id: "q7.4_2",
              text: "Organizace má formální komunikační plán",
              comment:
                "Formální plán komunikace v tištěné nebo elektronické formě obsahující postupy pro interní a externí komunikaci",
              response: null,
            },
          ],
        },
        {
          id: "7.5",
          title: "Dokumentované informace (7.5)",
          questions: [
            {
              id: "q7.5_1",
              text: "Veškerá dokumentace organizace je identifikovatelná podle nějakého klíče",
              comment:
                "Může se jednat o unikátní ID, datum, jméno zadávajícího a jiné",
              response: null,
            },
            {
              id: "q7.5_2",
              text: "Dokumentace je dostupná všem zaměstnancům, kteří k ní potřebují přístup",
              comment: "Případně je přístup udělen v odpovídajícím čase",
              response: null,
            },
            {
              id: "q7.5_3",
              text: "Dokumentace je zabezpečená proti nechtěnému přístupu nebo nevhodné manipulaci",
              comment: "Zabezpečení jak fyzické, tak elektronické dokumentace",
              response: null,
            },
            {
              id: "q7.5_4",
              text: "Změny v dokumentaci jsou dohledatelné a lze je vrátit zpět",
              comment: "Je zaveden např. verzovací systém s historií změn",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section5",
      title: "Provozování",
      subsections: [
        {
          id: "8.1",
          title: "Plánování a řízení provozu (8.1)",
          questions: [
            {
              id: "q8.1_1",
              text: "Organizace má seznam plánovaných změn a možných následků, které mohou tyto změny způsobit",
              comment: "Např. upgrade systému, zvýšení počtu zaměstnanců",
              response: null,
            },
            {
              id: "q8.1_2",
              text: "Organizace je připravena vyřešit negativní následky způsobené provedením změny procesů",
              comment:
                "Předpokládá se řešení následků v odpovídající době od jejich vzniku",
              response: null,
            },
            {
              id: "q8.1_3",
              text: "Všechny outsourcované procesy jsou kontrolovány",
              comment:
                'Pokud v organizaci tyto procesy neexistují, zvolte "ano',
              response: null,
            },
          ],
        },
        {
          id: "8.2",
          title: "Posuzování rizik bezpečnosti informací (8.2)",
          questions: [
            {
              id: "q8.2_1",
              text: "Organizace provádí vyhodnocení rizik bezpečnosti informací v pravidelných intervalech nebo po každé větší změně",
              comment: "Může být součástí interního auditu",
              response: null,
            },
            {
              id: "q8.2_2",
              text: "Organizace udržuje dokumentaci výsledků hodnocení rizik bezpečnosti informací",
              comment:
                '"Ano" v případě pravidelné údržby, "Částečně" v případě nepravidelné údržby, "Ne" v případě žádné údržby',
              response: null,
            },
          ],
        },
        {
          id: "8.3",
          title: "Ošetření rizik bezpečnosti informací (8.3)",
          questions: [
            {
              id: "q8.3_1",
              text: "Organizace má plán řešení rizik bezpečnosti informací",
              comment: "V tištěné nebo elektronické podobě",
              response: null,
            },
            {
              id: "q8.3_2",
              text: "Organizace udržuje dokumentaci výsledků řešení rizik bezpečnosti informací",
              comment:
                '"Ano" v případě pravidelné údržby, "Částečně" v případě nepravidelné údržby, "Ne" v případě žádné údržby',
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section6",
      title: "Hodnocení výkonnosti",
      subsections: [
        {
          id: "9.1",
          title: "Monitorování, měření, analýza a hodnocení (9.1)",
          questions: [
            {
              id: "q9.1_1",
              text: "Organizace vyhodnotila bezpečnost informací a efektivnost ISMS",
              comment: "",
              response: null,
            },
            {
              id: "q9.1_2",
              text: "Organizace má aktuální seznam procesů a kontrol, které se musí monitorovat a měřit ",
              comment: "V písemné nebo elektronické formě",
              response: null,
            },
          ],
        },
        {
          id: "9.2",
          title: "Interní audit (9.2)",
          questions: [
            {
              id: "q9.2_1",
              text: "Organizace provádí pravidelný interní audit bezpečnosti informací",
              comment: "Standard požaduje minimálně 1x ročně",
              response: null,
            },
            {
              id: "q9.2_2",
              text: "Výsledky interních auditů jsou zaznamenány a uchovávány",
              comment: "V písemné nebo elektronické formě",
              response: null,
            },
            {
              id: "q9.2_3",
              text: "Interní audit je prováděn dostatečně zaškolenými osobami",
              comment:
                "Auditorům bylo poskytnuto dostatečné školení příp. kurzy",
              response: null,
            },
          ],
        },
        {
          id: "9.3",
          title: "Přezkoumání vedením organizace (9.3)",
          questions: [
            {
              id: "q9.3_1",
              text: "Vedení organizace pravidelně přezkoumává bezpečnost informací a efektivitu ISMS v organizaci ",
              comment:
                '"Ano" v případě častého přezkoumání, "Ne" v případě žádného přezkoumání',
              response: null,
            },
            {
              id: "q9.3_2",
              text: "Vedení organizace reaguje na odhalené nedostatky v ISMS organizace",
              comment: "Předpokládá se včasná reakce při zjištění nedostatku",
              response: null,
            },
            {
              id: "q9.3_3",
              text: "Závěry z přezkoumání jsou zaznamenány a uchovávány",
              comment: "V písemné nebo elektronické formě",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section7",
      title: "Zlepšování",
      subsections: [
        {
          id: "10.1",
          title: "Neshody a nápravná opatření (10.1)",
          questions: [
            {
              id: "q10.1_1",
              text: "Organizace v rozumné době reaguje na neshody jejího ISMS se standardem ISO/IEC 27001",
              comment:
                "Dle velikosti neshody může být rozumná doba brána různě, nutno rozhoudnout z pohledu CIO",
              response: null,
            },
            {
              id: "q10.1_2",
              text: "Po odstranění neshody je vytvořená dokumentace a je zajištěno, že se neshoda nebude opakovat",
              comment:
                '"Ano" v případě, že dokumentace je vytvářena, "Ne" v případě, že dokumentace není vytvářena',
              response: null,
            },
          ],
        },
        {
          id: "10.2",
          title: "Neustálé zlepšování (10.2)",
          questions: [
            {
              id: "q10.2_1",
              text: "Má plán zlepšování jejího ISMS",
              comment:
                "Plán může obsahovat např. upgrade systému, školení zaměstnanců",
              response: null,
            },
            {
              id: "q10.2_2",
              text: "Organizace pravidelně vylepšuje svůj ISMS",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
  ],
};

/*Funkce displaySection je volána s dvěma argumenty: sectionId a containerId. sectionId je ID oddílu, 
který chcete zobrazit, a containerId je ID HTML elementu, ve kterém chcete oddíl zobrazit. 
Pokud containerId není poskytnuto, použije se výchozí hodnota 'questionnaireContainer'.*/

// Proměnná sledující, zda uživatel zahájil vyplňování dotazníku
let hasStartedQuestionnaire = false;

function displaySection(sectionId, containerId) {
  const container = document.getElementById(
    containerId || "questionnaireContainer"
  );
  container.innerHTML = "";

  const section = questionnaireData.sections.find((s) => s.id === sectionId);
  if (!section) return;

  /*Tvorba elementů HTML*/
  /*Název sekce*/
  const sectionElement = document.createElement("div");
  sectionElement.className = "section";

  const titleElement = document.createElement("h4");
  titleElement.textContent = section.title;
  sectionElement.appendChild(titleElement);

  const optionsDescription = ["Ano", "Částečně", "Ne", "Neaplikováno"];

  section.subsections.forEach((subsection) => {
    const subsectionElement = document.createElement("div");
    subsectionElement.className = "card shadow mb-4";

    const headerElement = document.createElement("div");
    headerElement.className = "card-header py-3";
    const headerTitleElement = document.createElement("h6");
    headerTitleElement.className = "m-0 font-weight-bold text-primary";
    headerTitleElement.textContent = subsection.title;
    headerElement.appendChild(headerTitleElement);
    subsectionElement.appendChild(headerElement);

    const bodyElement = document.createElement("div");
    bodyElement.className = "card-body";

    subsection.questions.forEach((question, qIndex) => {
      const questionWrapper = document.createElement("div");
      questionWrapper.style.marginBottom = "30px"; // Přidáný řádek
      const questionElement = document.createElement("span");
      questionElement.style.fontWeight = "bold";
      questionElement.textContent = question.text;
      questionWrapper.appendChild(questionElement);

      if (question.comment) {
        const commentElement = document.createElement("li");
        commentElement.textContent = question.comment;
        commentElement.style.marginTop = "5px";
        questionWrapper.appendChild(commentElement);
      }

      const optionsWrapper = document.createElement("div");
      optionsWrapper.style.textAlign = "center";
      optionsWrapper.style.marginTop = "20px";
      optionsDescription.forEach((option, index) => {
        const radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = `question_${subsection.id}_${qIndex}`;
        radioElement.value = option;
        radioElement.style.marginLeft = "20px";
        radioElement.style.marginRight = "10px";
        radioElement.style.transform = "scale(1.7)";
        radioElement.addEventListener("change", function () {
          if (this.checked) {
            question.response = option;
            hasStartedQuestionnaire = true; // Nastaví hasStartedQuestionnaire na true, jakmile uživatel zvolí odpověď
          }

        });

          // Add tooltip attributes for "Neaplikováno" option
  if (option === "Neaplikováno") {
    radioElement.setAttribute("data-toggle", "tooltip");
    radioElement.setAttribute("data-placement", "bottom");
    radioElement.setAttribute("title", "Opatření není pro organizaci relevantní");
  }
        
        optionsWrapper.appendChild(radioElement);

        const label = document.createElement("label");
        label.htmlFor = radioElement.id;
        label.textContent = option;
        label.style.marginRight = "100px";
        optionsWrapper.appendChild(label);
      });

      questionWrapper.appendChild(optionsWrapper);

      // Pokud není aktuální otázka poslední v daném subsection
      if (qIndex !== subsection.questions.length - 1) {
        const hrElement = document.createElement("hr");
        questionWrapper.appendChild(hrElement);
      }

      bodyElement.appendChild(questionWrapper);
    });

    subsectionElement.appendChild(bodyElement);
    sectionElement.appendChild(subsectionElement);
  });

  container.appendChild(sectionElement);

}

window.onload = function () {
  displaySection("section1", "questionnaireContainer1");
  displaySection("section2", "questionnaireContainer2");
  displaySection("section3", "questionnaireContainer3");
  displaySection("section4", "questionnaireContainer4");
  displaySection("section5", "questionnaireContainer5");
  displaySection("section6", "questionnaireContainer6");
  displaySection("section7", "questionnaireContainer7");
// Initialize the tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
};

// Funkce, která zobrazí výzvu, pokud uživatel pokusí opustit stránku po zahájení vyplňování dotazníku
window.onbeforeunload = function (event) {
  if (hasStartedQuestionnaire) {
    const message =
      "Opravdu chcete opustit stránku? Veškerý váš pokrok bude ztracen.";
    event.returnValue = message;
    return message;
  }
};
