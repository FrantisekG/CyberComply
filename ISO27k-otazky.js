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
              text: "Jsou evidovány všechny vlivy, které působí na systém řízení bezpečnosti informací?",
              comment:
                "Např. kulturní, společenské, politické, regulační, finanční, technologické, ekonomické, přírodní a konkurenční.",
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
              text: "Jsou určeny všechny zainteresované strany, které mají zájem o fungování ISMS organizace?",
              comment:
                "Strany mohou být zainteresovány pozitivně (např. zákazník) nebo negativně (např. hacker).",
              response: null,
            },
            {
              id: "q4.2_2",
              text: "Má organizace přehled o všech smlouvách, dohodách a úmluvách týkajících se funkce jejího ISMS?",
              comment:
                "Sem může patřit například dohoda se zákazníkem o nakládání s informacemi po ukončení smlouvy.",
              response: null,
            },
            {
              id: "q4.2_3",
              text: "Jsou dodržovány všechny smlouvy, dohody a úmluvy týkající se ISMS?",
              comment: "",
              response: null,
            },
            {
              id: "q4.2_4",
              text: "Má organizace přehled o všech zákonech a nařízení týkajících se funkce jejího ISMS?",
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
              text: "Je k dispozici dokumentace o rozsahu ISMS?",
              comment: "Může obsahovat např. aktivní prvky, databáze, seznamy dokumentů.",
              response: null,
            },
            {
              id: "q4.3_2",
              text: "Má organiazce přehled o všech rozšiřujících částech sahajících mimo rozsah ISMS?",
              comment: "",
              response: null,
            },
          ],
        },

        {
          id: "4.4",
          title: "Systém řízení bezpečnosti informací (4.4)",
          questions: [
            {
              id: "q4.4_1",
              text: "Jsou nastaveny procesy, které zaručují implementaci, údžbu a zlepšování ISMS dle ISO/IEC 27001?",
              comment: "",
              response: null,
            },
            {
              id: "q4.4_2",
              text: "Má organizace plnou autoritu, zodpovědnost a autonomii při plnění požadavků ISMS?",
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
      title: "Vůdčí role",
      subsections: [
        {
          id: "5.1",
          title: "Vůdčí role a závazek (5.1)",
          questions: [
            {
              id: "q5.1_1",
              text: "Je zajišťováno vedením organizace, aby politika bezpečnosti informací byla shodná se strategickým směřováním?",
              comment:
                'Při tvorbě bezpečnostní politiky je přihlíženo k tomu, kam organizace směruje.',
              response: null,
            },
            {
              id: "q5.1_2",
              text: "Jsou zavedeny procesy na neustálé zlepšování ISMS?",
              comment: "Např. upgrade systému, školení zaměstnanců.",
              response: null,
            },
            {
              id: "q5.1_3",
              text: "Je zajišťována vedením organizace dostupnost všech zdrojů potřebných pro správné fungování ISMS?",
              comment: "Např. finanční nebo lidské zdroje.",
              response: null,
            },
            {
              id: "q5.1_4",
              text: "Je podniková kultura nastavena tak, aby vedla zaměstnance k dodržování požadavků informační bezpečnosti?",
              comment:
                "Např. pravidelná školení o bezpečnosti informací nebo postihy při nedodržování bezpečnostních požadavků.",
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
              text: "Je jasně specifikována bezpečnostní politiku informací?",
              comment:
                "Informační bezpečnostní politika existuje v písemné nebo elektronické podobě.",
              response: null,
            },
            {
              id: "q5.2_2",
              text: "Je informační bezpečnostní politika organizace pravidelně udržována a kontrolována?",
              comment:
                "Např. pravidelná školení o bezpečnosti informací nebo postihy při nedodržování bezpečnostních požadavků.",
              response: null,
            },
            {
              id: "q5.2_3",
              text: "Je informační bezpečnostní politika dostupná všem zainteresovaným stranám?",
              comment:
                "Předpokládají se pouze pozitivně zainteresované strany, viz. bod 4.2.",
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
              text: "Jsou v organizaci osoby zodpovědné za provoz a údržbu ISMS?",
              comment:
                'Vyplňte "ano", pokud v organizaci existuje osoba s rolí CIO (Chief Information Officer) nebo obdobnou rolí.',
              response: null,
            },
            {
              id: "q5.3_2",
              text: "Má vrcholové vedení přehled o aktuálním fungování ISMS?",
              comment:
                'Vychází z komunikace vedení a CIO, "ano" v případě pravidelných schůzek, "ne" v případě nepravidelných.',
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
              text: "Je organizace připravena čelit scénářům, které mohou mít dopad na funkci ISMS?",
              comment:
                "Např. Delší výpadek elektrického proudu, hackerský útok, úprava zákonů.",
              response: null,
            },
            {
              id: "q6.1_2",
              text: "Jsou dostupné plány pro údržbu a zlepšování ISMS?",
              comment:
                "Plány mohou být v elektronické nebo písemné podobě. Předpokládá se existence krátkodobých, střednědobých i dlouhodobých plánů.",
              response: null,
            },
            {
              id: "q6.1_3",
              text: "Je dostupná dokumentace se seznamem všech rizik týkajících se ISMS a jejich hodnocení?",
              comment:
                "Plány mohou být v elektronické nebo písemné podobě. Předpokládá se existence krátkodobých, střednědobých i dlouhodobých plánů.",
              response: null,
            },
            {
              id: "q6.1_4",
              text: "Je dokumentace rizik, plánů a rizikových scénářů pravidelně udržována?",
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
              comment: "Existují v písemné nebo elektronické formě.",
              response: null,
            },
            {
              id: "q6.2_2",
              text: "Všechny cíle ISMS jsou měřitelné a dá se zjistit míra jejich naplnění",
              comment:
                "Měřitelné např. dle standardu ISO/IEC 27004 nebo vlastních měřítek.",
              response: null,
            },
            {
              id: "q6.2_3",
              text: "Jsou cíle ISMS pravidelně hodnoceny?",
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
              text: "Jsou zajištěny dostatečné zdroje pro fungování ISMS?",
              comment:
                '"Ano" v případě nadbytku zdrojů, "ne" v případě nedostatku zdrojů.',
              response: null,
            },
            {
              id: "q7.1_2",
              text: "Jsou zajištěné dostatečné zdroje pro údržbu a neustálé zlepšování ISMS?",
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
              text: "Je zajišťováno adekvátní vzdělání a školení zaměstnanců z hlediska bezpečnosti informací?",
              comment:
                "Školení je prováděno v adekvátní době po nástupu a poté v pravidelných intervalech.",
              response: null,
            },
            {
              id: "q7.2_2",
              text: "je vedená dokumentace o kompetenci zaměstnanců zabezpečit informace organizace?",
              comment: "Např. protokoly o školení, informace z pohovorů.",
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
              text: "Jsou zaměstnanci informováni a vědomi bezpečnostní politiky organizace?",
              comment:
                "Kladen důraz na osoby pracující s PII (Personally Identifiable Information).",
              response: null,
            },
            {
              id: "q7.3_2",
              text: "Jsou zaměstnanci obeznámeni s možnými následky při nedodržování požadavků ISMS?",
              comment:
                "Následky mohou být sděleny na bezpečnostním školení nebo jinou formou.",
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
              text: "Jsou definované role pro externí a interní komunikaci?",
              comment:
                "Interní - V rámci podniku, Externí - Mimo podnik (např.zákazník).",
              response: null,
            },
            {
              id: "q7.4_2",
              text: "Je nastaven formální komunikační plán?",
              comment:
                "Formální plán komunikace v tištěné nebo elektronické formě obsahující postupy pro interní a externí komunikaci.",
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
              text: "Je veškerá dokumentace identifikovatelná podle definovaného klíče?",
              comment:
                "Může se jednat o unikátní ID, datum, jméno zadávajícího a jiné.",
              response: null,
            },
            {
              id: "q7.5_2",
              text: "Dokumentace je dostupná všem zaměstnancům, kteří k ní potřebují přístup?",
              comment: "Případně je přístup udělen v odpovídajícím čase.",
              response: null,
            },
            {
              id: "q7.5_3",
              text: "Je dokumentace zabezpečená proti neautorizovanému přístupu nebo nevhodné manipulaci?",
              comment: "Zabezpečení jak fyzické, tak elektronické dokumentace.",
              response: null,
            },
            {
              id: "q7.5_4",
              text: "Jsou změny v dokumentaci dohledatelné a lze je vrátit do původního stavu?",
              comment: "Je zaveden např. verzovací systém s historií změn.",
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
              text: "Je k dispozici seznam plánovaných změn a možných následků, které mohou tyto změny způsobit?",
              comment: "Např. upgrade systému, zvýšení počtu zaměstnanců.",
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
    {
      id: "section8",
      title: "Příloha A: A.5",
      subsections: [
        {
          id: "A5",
          title: "Politiky bezpečnosti informací (A.5)",
          questions: [
            {
              id: "A5_1",
              text: "Jsou definovány a pravidelně přezkoumávány politiky bezpečnosti informací, které udávají směr řízení?",
              comment:
                "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section9",
      title: "Příloha A: A.6",
      subsections: [
        {
          id: "A6",
          title: "Organizace bezpečnosti informací (A.6)",
          questions: [
            {
              id: "A6_1",
              text: "Byl vytvořen rámec řízení pro kontrolu provádění a fungování bezpečnosti v rámci organizace, včetně přidělení odpovědností a oddělení protichůdných úkolů?",
              comment:
                "",
              response: null,
            },
            {
              id: "A6_2",
              text: "Jsou udržovány vhodné kontakty s úřady a zájmovými skupinami?",
              comment: "",
              response: null,
            },
            {
              id: "A6_3",
              text: "Je v projektech řešena bezpečnost informací?",
              comment: "",
              response: null,
            },
            {
              id: "A6_4",
              text: "Je zavedena politika mobilních zařízení a práce na dálku?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section10",
      title: "Příloha A: A.7",
      subsections: [
        {
          id: "A7",
          title: "Bezpečnost lidských zdrojů (A.7)",
          questions: [
            {
              id: "A7_1",
              text: "Existuje soupis majetku spojeného s informacemi a jejich zpracováním, jsou určeni vlastníci a jsou definována pravidla pro přijatelné použití majetku a jeho vrácení?",
              comment:
                "",
              response: null,
            },
            {
              id: "A7_2",
              text: "Jsou zaměstnanci povinni dodržovat zásady a postupy v oblasti bezpečnosti informací, pokud jsou informováni, vzděláváni a školeni, a existuje disciplinární řízení?",
              comment: "",
              response: null,
            },
            {
              id: "A7_3",
              text: "Jsou odpovědnosti a povinnosti v oblasti bezpečnosti informací sdělovány a vymáhány u zaměstnanců, kteří ukončují nebo mění zaměstnání?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section11",
      title: "Příloha A: A.8",
      subsections: [
        {
          id: "A8",
          title: "Řízení aktiv (A.8)",
          questions: [
            {
              id: "A8_1",
              text: "Existuje inventář aktiv spojených s informacemi a zpracováním informací, byli přiřazeni vlastníci a jsou definována pravidla pro přijatelné použití aktiv a vrácení aktiv?",
              comment:
                "",
              response: null,
            },
            {
              id: "A8_2",
              text: "Jsou informace klasifikovány a odpovídajícím způsobem označeny?",
              comment: "",
              response: null,
            },
            {
              id: "A8_3",
              text: "Byly definovány postupy pro zacházení s aktivy v souladu s jejich klasifikací?",
              comment: "",
              response: null,
            },
            {
              id: "A8_4",
              text: "Existují postupy pro odstranění, likvidaci a přepravu médií obsahujících informace?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section12",
      title: "Příloha A: A.9",
      subsections: [
        {
          id: "A9",
          title: "Řízení přístupů (A.9)",
          questions: [
            {
              id: "A9_1",
              text: "Je definována a přezkoumána politika řízení přístupu a je uživatelský přístup do sítě kontrolován v souladu s touto politikou?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_2",
              text: "Existuje formální proces registrace uživatelů, který přiřazuje a odebírá přístup a přístupová práva k systémům a službám?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_3",
              text: "Jsou přístupová práva pravidelně přezkoumávána a odstraněna po ukončení zaměstnání?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_4",
              text: "Jsou privilegovaná přístupová oprávnění omezena a kontrolována a je informace pro tajné ověření kontrolována?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_5",
              text: "Jsou uživatelé seznámeni s postupy pro použití?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_6",
              text: "Je přístup k informacím omezen v souladu s politikou řízení přístupů a je přístup kontrolován prostřednictvím bezpečného přihlašovacího postupu?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_7",
              text: "Jsou systémy správy hesel interaktivní a vynucují kvalitní heslo?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_8",
              text: "Je použití pomocných programů a přístup ke zdrojovému kódu programu omezeno?",
              comment:
                "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section13",
      title: "Příloha A: A.10",
      subsections: [
        {
          id: "A10",
          title: "Kryptografie (A.10)",
          questions: [
            {
              id: "A10_1",
              text: "Existuje politika pro použití kryptografie a správy klíčů?",
              comment:
                "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section14",
      title: "Příloha A: A.11",
      subsections: [
        {
          id: "A11",
          title: "Fyzická bezpečnost a bezpečnost prostředí (A.11)",
          questions: [
            {
              id: "A11_1",
              text: "Existují politiky a kontrolní mechanismy k zabránění neoprávněného fyzického přístupu a poškození informací a zařízení pro zpracování informací?",
              comment:
                "",
              response: null,
            },
            {
              id: "A11_2",
              text: "Existují politiky a kontrolní mechanismy k zabránění ztrátě, poškození, krádeži nebo kompromitaci aktiv a přerušení provozu?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section15",
      title: "Příloha A: A.12",
      subsections: [
        {
          id: "A12",
          title: "Bezpečnost provozu (A.12)",
          questions: [
            {
              id: "A12_1",
              text: "Jsou provozní postupy zdokumentovány a jsou změny v organizaci, obchodních procesech a informačních systémech kontrolovány?",
              comment:
                "",
              response: null,
            },
            {
              id: "A12_2",
              text: "Jsou zdroje monitorovány a jsou prováděny projekce budoucích kapacitních požadavků?",
              comment: "",
              response: null,
            },
            {
              id: "A12_3",
              text: "Existuje oddělení vývojového, testovacího a provozního prostředí?",
              comment: "",
              response: null,
            },
            {
              id: "A12_4",
              text: "Existuje ochrana proti škodlivému softwaru?",
              comment: "",
              response: null,
            },
            {
              id: "A12_5",
              text: "Jsou informace, software a systémy předmětem zálohování a pravidelného testování?",
              comment: "",
              response: null,
            },
            {
              id: "A12_6",
              text: "Existují kontrolní mechanismy pro zaznamenávání událostí a generování důkazů?",
              comment: "",
              response: null,
            },
            {
              id: "A12_7",
              text: "Jsou získávány informace o technických zranitelnostech a jsou přijímána vhodná opatření k mitigaci rizika?",
              comment: "",
              response: null,
            },
            {
              id: "A12_8",
              text: "Je implementace softwaru na provozních systémech kontrolována a existují pravidla upravující instalaci softwaru uživateli?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section16",
      title: "Příloha A: A.13",
      subsections: [
        {
          id: "A13",
          title: "Bezpečnost komunikací (A.13)",
          questions: [
            {
              id: "A13_1",
              text: "Jsou sítě spravovány, v případě potřeby segmentovány a kontrolovány k ochraně informačních systémů a jsou síťové služby předmětem služebních dohod?",
              comment:
                "",
              response: null,
            },
            {
              id: "A13_2",
              text: "Existují politiky a dohody k zachování bezpečnosti informací přenášených v rámci organizace nebo mimo ni?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section17",
      title: "Příloha A: A.14",
      subsections: [
        {
          id: "A14",
          title: "Akvizice, vývoj a údržba systémů (A.14)",
          questions: [
            {
              id: "A14_1",
              text: "Jsou definovány požadavky na informační bezpečnost pro informační systémy?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_2",
              text: "Je informace přenášená přes veřejné sítě a transakce aplikačních služeb chráněna?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_3",
              text: "Jsou stanoveny systémy a pravidla pro vývoj softwaru a jsou změny v systémech během vývojového cyklu formálně kontrolovány?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_4",
              text: "Jsou kritické podnikové aplikace prověřovány a testovány pro změny operačních systémových platforem?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_5",
              text: "Existují omezení pro změny softwarových balíčků?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_6",
              text: "Byly stanoveny principy bezpečného inženýrství a jsou udržovány a implementovány, včetně bezpečného vývojového prostředí, testování bezpečnosti, využití testovacích dat a testování přijetí systému?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_7",
              text: "Je outsourcovaný vývoj softwaru dozorován a monitorován?",
              comment:
                "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section18",
      title: "Příloha A: A.15",
      subsections: [
        {
          id: "A15",
          title: "Dodavatelské vztahy (A.15)",
          questions: [
            {
              id: "A15_1",
              text: "Existují politiky a dohody k ochraně informačních aktiv, které jsou dostupné dodavatelům?",
              comment:
                "",
              response: null,
            },
            {
              id: "A15_2",
              text: "Je dohodnutá úroveň informačního bezpečnosti a poskytování služeb monitorována a řízena, včetně změn v poskytování služeb?",
              comment:
                "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section19",
      title: "Příloha A: A.16",
      subsections: [
        {
          id: "A16",
          title: "Řízení incidentů bezpečnosti informací (A.16)",
          questions: [
            {
              id: "A16_1",
              text: "Je přístup k řízení bezpečnostních incidentů a zranitelností konzistentní?",
              comment:
                "Včetně přiřazení odpovědností, hlášení, hodnocení, reakce, analýzy a sběru důkazů.",
              response: null,
            },
            {
              id: "A16_2",
              text: "Existují politiky a kontrolní mechanismy k zabránění ztrátě, poškození, krádeži nebo kompromitaci aktiv a přerušení provozu?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section20",
      title: "Příloha A: A.17",
      subsections: [
        {
          id: "A17",
          title: "Aspekty řízení kontinuity činností organizace (A.17)",
          questions: [
            {
              id: "A17_1",
              text: "Je kontinuita informačního bezpečnosti začleněna do systému řízení kontinuity podnikání? ",
              comment:
                "Včetně stanovení požadavků v nepříznivých situacích, postupů a kontrol a ověření účinnosti",
              response: null,
            },
            {
              id: "A17_2",
              text: "Jsou informační zpracovávací zařízení implementovány s redundancí k splnění požadavků na dostupnost?",
              comment: "",
              response: null,
            },
          ],
        },
      ],
    },
    {
      id: "section21",
      title: "Příloha A: A.18",
      subsections: [
        {
          id: "A18",
          title: "Soulad s požadavky (A.18)",
          questions: [
            {
              id: "A18_1",
              text: "Byly definovány všechny legislativní, zákonné, regulační a smluvní požadavky a přístup k jejich splnění pro každý informační systém a organizaci?",
              comment:
                "Včetně, ale nejen, postupů pro autorská práva, ochranu záznamů, ochranu soukromí a ochranu osobních údajů a regulaci kryptografických kontrol",
              response: null,
            },
            {
              id: "A18_2",
              text: "Provedl se nezávislý přezkum informačního bezpečnosti?",
              comment: "",
              response: null,
            },
            {
              id: "A18_3",
              text: "Prověřují manažeři pravidelně dodržování informačního zpracování a postupů v jejich odpovědných oblastech?",
              comment: "",
              response: null,
            },
            {
              id: "A18_4",
              text: "Jsou informační systémy pravidelně prověřovány z hlediska technického souladu s politikami a standardy?",
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

        optionsWrapper.appendChild(radioElement);

        const label = document.createElement("label");
        label.htmlFor = radioElement.id;
        label.textContent = option;
        label.style.marginRight = "100px";
        optionsWrapper.appendChild(label);

        // Tooltip vysvětlující "Neaplikováno"
        if (option === "Neaplikováno") {
          const tooltipWrapper = document.createElement('div');
          tooltipWrapper.className = "info-tooltip";

          const iconElement = document.createElement('i');
          iconElement.className = "fas fa-info-circle";
          iconElement.style.marginLeft = '5px';  // Adjust as needed
          tooltipWrapper.appendChild(iconElement);

          const tooltipTextElement = document.createElement('span');
          tooltipTextElement.className = "tooltiptext bottom";
          tooltipTextElement.textContent = "Opatření není pro organizaci relevantní";
          tooltipWrapper.appendChild(tooltipTextElement);

          label.appendChild(tooltipWrapper);
        }
        // Tooltip vysvětlující "Ano"
        if (option === "Ano") {
          const tooltipWrapper = document.createElement('div');
          tooltipWrapper.className = "info-tooltip";

          const iconElement = document.createElement('i');
          iconElement.className = "fas fa-info-circle";
          iconElement.style.marginLeft = '5px';  // Adjust as needed
          tooltipWrapper.appendChild(iconElement);

          const tooltipTextElement = document.createElement('span');
          tooltipTextElement.className = "tooltiptext bottom";
          tooltipTextElement.textContent = "Opatření máte plně zavedeno a dokumentováno";
          tooltipWrapper.appendChild(tooltipTextElement);

          label.appendChild(tooltipWrapper);
        }
        // Tooltip vysvětlující "Ano"
        if (option === "Částečně") {
          const tooltipWrapper = document.createElement('div');
          tooltipWrapper.className = "info-tooltip";

          const iconElement = document.createElement('i');
          iconElement.className = "fas fa-info-circle";
          iconElement.style.marginLeft = '5px';  // Adjust as needed
          tooltipWrapper.appendChild(iconElement);

          const tooltipTextElement = document.createElement('span');
          tooltipTextElement.className = "tooltiptext bottom";
          tooltipTextElement.textContent = "Některé aspekty opatření jsou zavedeny, ale ne všechny";
          tooltipWrapper.appendChild(tooltipTextElement);

          label.appendChild(tooltipWrapper);
        }
        // Tooltip vysvětlující "Ano"
        if (option === "Ne") {
          const tooltipWrapper = document.createElement('div');
          tooltipWrapper.className = "info-tooltip";

          const iconElement = document.createElement('i');
          iconElement.className = "fas fa-info-circle";
          iconElement.style.marginLeft = '5px';  // Adjust as needed
          tooltipWrapper.appendChild(iconElement);

          const tooltipTextElement = document.createElement('span');
          tooltipTextElement.className = "tooltiptext bottom";
          tooltipTextElement.textContent = "Opatření není vůbec zavedeno";
          tooltipWrapper.appendChild(tooltipTextElement);

          label.appendChild(tooltipWrapper);
        }
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
  // Příloha A
  displaySection("section8", "questionnaireContainer8");
  displaySection("section9", "questionnaireContainer9");
  displaySection("section10", "questionnaireContainer10");
  displaySection("section11", "questionnaireContainer11");
  displaySection("section12", "questionnaireContainer12");
  displaySection("section13", "questionnaireContainer13");
  displaySection("section14", "questionnaireContainer14");
  displaySection("section15", "questionnaireContainer15");
  displaySection("section16", "questionnaireContainer16");
  displaySection("section17", "questionnaireContainer17");
  displaySection("section18", "questionnaireContainer18");
  displaySection("section19", "questionnaireContainer19");
  displaySection("section20", "questionnaireContainer20");
  displaySection("section21", "questionnaireContainer21");
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
