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
              text: "Má organizace přehled o všech rozšiřujících částech sahajících mimo rozsah ISMS?",
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
              text: "Jsou nastaveny procesy, které zaručují implementaci, údržbu a zlepšování ISMS dle ISO/IEC 27001?",
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
                "Interní - V rámci podniku, Externí - Mimo podnik (např. zákazník).",
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
              text: "Je organizace připravena vyřešit negativní následky způsobené provedením změny procesů?",
              comment:
                "Předpokládá se řešení následků v odpovídající době od jejich vzniku.",
              response: null,
            },
            {
              id: "q8.1_3",
              text: "Jsou všechny outsourcované procesy kontrolovány?",
              comment:
                'Pokud v organizaci tyto procesy neexistují, zvolte "ne".',
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
              text: "Jsou v pravidelných intervalech hodnoceny rizika bezpečnosti informací nebo po každé větší změně?",
              comment: "Může být součástí interního auditu.",
              response: null,
            },
            {
              id: "q8.2_2",
              text: "Je udržována dokumentace výsledků hodnocení rizik bezpečnosti informací?",
              comment:
                '"Ano" v případě pravidelné údržby, "Částečně" v případě nepravidelné údržby, "Ne" v případě žádné údržby.',
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
              text: "Je k dispozici plán pro ošetření rizik bezpečnosti informací?",
              comment: "V tištěné nebo elektronické podobě.",
              response: null,
            },
            {
              id: "q8.3_2",
              text: "Je uchovávána dokumentace o výsledcích ošetření rizik bezpečnosti informací?",
              comment:
                '"Ano" v případě pravidelné údržby, "Částečně" v případě nepravidelné údržby, "Ne" v případě žádné údržby.',
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
              text: "Je vyhodnocována bezpečnost informací a efektivnost ISMS?",
              comment: "",
              response: null,
            },
            {
              id: "q9.1_2",
              text: "Je k dispozici aktuální seznam procesů a kontrol, které se dle požadavků normy musí monitorovat a měřit?",
              comment: "V písemné nebo elektronické formě.",
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
              text: "Je prováděn pravidelný interní audit bezpečnosti informací?",
              comment: "Standard požaduje minimálně 1x ročně.",
              response: null,
            },
            {
              id: "q9.2_2",
              text: "Jsou výsledky interních auditů jsou zaznamenány a uchovávány?",
              comment: "V písemné nebo elektronické formě.",
              response: null,
            },
            {
              id: "q9.2_3",
              text: "Je interní audit prováděn adekvátně zkušenými a proškolenými osobami?",
              comment:
                "Auditorům bylo poskytnuto dostatečné školení příp. kurzy.",
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
              text: "Je vedením organizace pravidelně přezkoumávána bezpečnost informací a efektivita ISMS? ",
              comment:
                '"Ano" v případě častého přezkoumání, "Ne" v případě žádného přezkoumání.',
              response: null,
            },
            {
              id: "q9.3_2",
              text: "Reaguje vedení organizace na odhalené nedostatky v ISMS?",
              comment: "Předpokládá se včasná reakce při zjištění nedostatku.",
              response: null,
            },
            {
              id: "q9.3_3",
              text: "Jsou závěry z přezkoumání zaznamenány a uchovávány?",
              comment: "V písemné nebo elektronické formě.",
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
              text: "Reaguje organizace v rozumné době na neshody jejího ISMS se standardem ISO/IEC 27001?",
              comment:
                "Dle velikosti neshody může být rozumná doba brána různě, nutno rozhodnout z pohledu CIO.",
              response: null,
            },
            {
              id: "q10.1_2",
              text: "Je po odstranění neshody vytvořená dokumentace a je zajištěno, že se neshoda nebude opakovat?",
              comment:
                '"Ano" v případě, že dokumentace je vytvářena, "Ne" v případě, že dokumentace není vytvářena.',
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
              text: "Existuje plán zlepšování ISMS?",
              comment:
                "Plán může obsahovat např. upgrade systému, školení zaměstnanců.",
              response: null,
            },
            {
              id: "q10.2_2",
              text: "Vylepšuje organizace pravidelně ISMS?",
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
              text: "Jsou definovány a pravidelně přezkoumávány politiky bezpečnosti informací?",
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
              text: "Jsou vymezené a dokumentované role a odpovědnosti pro zajištění a provozování bezpečnosti informací?",
              comment:
                "",
              response: null,
            },
            {
              id: "A6_2",
              text: "Jsou zavedené principy oddělující povinnosti a odpovědnosti?",
              comment:
                "Pro snížení hrozby neoprávněného nebo neúmyslného zneužití aktiv.",
              response: null,
            },
            {
              id: "A6_3",
              text: "Jsou udržovány přiměřené vztahy s úřady a zájmovými skupinami?",
              comment: "",
              response: null,
            },
            {
              id: "A6_4",
              text: "Je zohledněna bezpečnost informací v řízení projektů?",
              comment: "",
              response: null,
            },
            {
              id: "A6_5",
              text: "Je zavedena politika pro využívání mobilních zařízení a práce na dálku?",
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
              text: "Existuje soupis majetku a jsou určeni vlastníci, včetně pravidel pro přijatelné použití majetku a jeho vrácení?",
              comment:
                "",
              response: null,
            },
            {
              id: "A7_2",
              text: "Jsou zaměstnanci adekvátně proškolení o povinnostech, zásadách a postupech bezpečnosti informací?",
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
              text: "Jsou aktiva identifikována a je jejich seznam pravidelně udržován a aktualizován?",
              comment:
                "Včetně určení vlastního těchto aktiv.",
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
              text: "Jsou zavedeny postupy pro zacházení s aktivy v souladu s jejich klasifikací?",
              comment: "",
              response: null,
            },
            {
              id: "A8_4",
              text: "Jsou zavedeny postupy pro odstranění, likvidaci a přepravu médií obsahujících klasifikované informace?",
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
              text: "Je nastaven formální proces registrace uživatelů, který přiřazuje a odebírá přístupová práva k systémům a službám?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_3",
              text: "Jsou přístupová práva pravidelně přezkoumávána a odstraněna po ukončení smluvního vztahu?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_4",
              text: "Jsou privilegovaná přístupová oprávnění omezena a kontrolována?",
              comment:
                "",
              response: null,
            },
            {
              id: "A9_5",
              text: "Jsou uživatelé seznámeni s postupy pro používání tajných autentizačních informací?",
              comment:
                "Např. hesla, kryptografické klíče",
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
              text: "Je nastaven proces pro řízení přístupů ke zdrojovým kódům?",
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
              text: "Je vytvořena politika pro používání kryptografických opatření včetně správy klíčů?",
              comment:
                "Politika musí být vytvořena a implementována po celou dobu jejich životního cyklu.",
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
              text: "Jsou vytvořeny politiky a kontrolní mechanismy k zamezení neoprávněnému vstupu a poškození zařízení obsahující citlivé nebo kritické informace?",
              comment:
                "",
              response: null,
            },
            {
              id: "A11_2",
              text: "Jsou vytvořeny politiky a kontrolní mechanismy k zamezení ztrátě, poškození, krádeži, kompromitaci aktiv a přerušení provozu?",
              comment: "Návrh fyzické bezpečnosti, který chrání aktiva proti přírodním katastrofám, havariím, záplavám atd.",
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
              text: "Jsou provozní postupy zdokumentovány a jsou změny v organizaci, obchodních procesech a informačních systémech řízeny?",
              comment:
                "",
              response: null,
            },
            {
              id: "A12_2",
              text: "Jsou kritické prvky monitorovány a nastaveny na neočekávatelné navýšení výkonů a kapacit?",
              comment: "",
              response: null,
            },
            {
              id: "A12_3",
              text: "Je pro zabránění neoprávněného přístupu odděleno provozní, vývojové a testovací prostředí?",
              comment: "",
              response: null,
            },
            {
              id: "A12_4",
              text: "Jsou zavedena opatření na detekci a ochranu před škodlivým kódem?",
              comment: "Např. antivirus, EDR.",
              response: null,
            },
            {
              id: "A12_5",
              text: "Jsou zaznamenávány udá a systémy pravidelně zálohovány a testovány v souladu se schválenou politikou zálohování?",
              comment: "",
              response: null,
            },
            {
              id: "A12_6",
              text: "Jsou zavedeny efektivní mechanismy pro zaznamenávání logů, které zahrnují identifikaci událostí bezpečnosti informací a jsou tyto záznamy pravidelně kontrolovány a analyzovány?",
              comment: "",
              response: null,
            },
            {
              id: "A12_7",
              text: "Jsou získávány informace o technických zranitelnostech a přijímána vhodná opatření k mitigaci rizik?",
              comment: "",
              response: null,
            },
            {
              id: "A12_8",
              text: "Jsou zavedeny postupy a řízení pro instalaci softwaru na provozních systémech?",
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
              text: "Jsou zavedena opatření pro segmentaci a řízení ochrany sítě a jejích prvků?",
              comment:
                "Např. formou fyzické nebo virtuální segmentace, pravidel pro řízení síťového provozu, firewall, IDS, IPS.",
              response: null,
            },
            {
              id: "A13_2",
              text: "Je zajištěna bezpečnost informací při jejich přenosu v rámci organizace i s externími subjekty?",
              comment: "Např. se zákazníkem, dodavatelem atd.",
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
              text: "Jsou definovány požadavky na zajištění informační bezpečnosti pro informační systémy v jejich celém životním cyklu?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_2",
              text: "Jsou informace přenášené přes veřejné sítě dostatečně chráněny před podvodnými aktivitami?",
              comment:
                "Např. pomocí elektronického podpisu, certifikátů, šifrování.",
              response: null,
            },
            {
              id: "A14_3",
              text: "Jsou zavedeny postupy pro řízení změn systémů v rámci jejich životního cyklu vývoje?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_4",
              text: "Jsou zavedeny procesy, které při změně operačního systému nebo platformy umožní prověření a otestování funkčnosti kritických aplikací?",
              comment:
                "Musí být ověřena kompatibilita aplikací a systémů s nově zavedenými operačními systémy nebo platformami.",
              response: null,
            },
            {
              id: "A14_5",
              text: "Jsou modifikace softwarových balíků omezeny pouze na nezbytné změny a jsou tyto změny přísně řízeny?",
              comment:
                "",
              response: null,
            },
            {
              id: "A14_6",
              text: "Jsou stanoveny a dokumentovány principy budování bezpečných systémů, včetně testování jejich funkčnosti?",
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
              text: "Jsou vytvořeny politiky a procesy zajišťující ochranu informačních aktiv, ke kterým mají dodavatelé přístup?",
              comment:
                "",
              response: null,
            },
            {
              id: "A15_2",
              text: "Jsou monitorovány a pravidelně auditovány dodávky služeb od dodavatelů?",
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
              text: "Jsou zavedeny postupy pro identifikaci, sběr a uchování informací, které mohou sloužit jako důkazy?",
              comment: "",
              response: null,
            },
            {
              id: "A16_3",
              text: "Jsou znalosti z analýz a řešení incidentů použity ke snížení pravděpodobnosti dalších incidentů?",
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
              text: "Jsou stanoveny požadavky pro kontinuitu informační bezpečnosti a zohledněny při vývoji plánů kontinuity informační bezpečnosti? ",
              comment:
                "Včetně verifikace, že jsou dostatečně efektivní v případě nastalých nepříznivých situací.",
              response: null,
            },
            {
              id: "A17_2",
              text: "Je kontinuita činností informační bezpečnosti zavedena a pravidelně hodnocena pro případ nastalých krizí?",
              comment: "Záznamy o provedených testech.",
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
              text: "Je si organizace vědoma všech zákonných a regulatorních požadavků kladených na ISMS a jsou tyto požadavky dokumentovány?",
              comment:
                "Např. ochrana duševního vlastnictví, ochrana soukromí a osobních údajů, regulace týkající se kryptografických opatření.",
              response: null,
            },
            {
              id: "A18_2",
              text: "Jsou cíle, postupy a politiky bezpečnostni informací pravidelně nebo při významné změně přezkoumány?",
              comment: "",
              response: null,
            },
            {
              id: "A18_3",
              text: "Je vedoucími pracovníky pravidelně prověřována shoda s bezpečnostními politikami a normami?",
              comment: "",
              response: null,
            },
            {
              id: "A18_4",
              text: "Jsou informační systémy pravidelně prověřovány, zda jsou v souladu s politikami a normami bezpečnosti informací?",
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

// Nové okno bude automaticky začínat nahoře
function scrollToTop() {
  window.scrollTo(0, 0);
}

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

  // Při kliknutí na "Další" zavolá funkci, která scrolluje nahoru
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
      nextButton.addEventListener('click', scrollToTop);
  }

      // Zavolá funkci pro scroll nahoru u "Zpět"
      const prevButton = document.getElementById('prevButton');
      if (prevButton) {
          prevButton.addEventListener('click', scrollToTop);
      }
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
