import { Baby, Home, Scissors, Apple, Heart, Dog, LucideIcon } from "lucide-react";

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  icon: LucideIcon;
  sections: ArticleSection[];
  faq: ArticleFAQ[];
  canDoBox?: string[];
  vetBox?: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "vychova-stenete-ruske-barevne-bolonky",
    title: "Výchova štěněte ruské barevné bolonky",
    seoTitle: "Výchova štěněte ruské bolonky: plán 0-16 týdnů a 4-12 měsíců",
    metaDescription: "Praktický a laskavý průvodce výchovou bolonky. Rutina, čistota, socializace, samota, kousání i puberta – krok za krokem, zvládnutelně.",
    excerpt: "Ruská barevná bolonka je typicky citlivý, společenský pes. To je výhoda: učí se rychle a ráda spolupracuje. Základem je rutina, krátké tréninky, hodně spánku a práce s emocemi.",
    category: "Výchova",
    readTime: "12 min",
    date: "25. ledna 2025",
    icon: Baby,
    canDoBox: [
      "Rutina + krátké tréninky = klíč k úspěchu",
      "Učte samotu od prvního týdne po malých krocích",
      "Když štěně zlobí, často potřebuje víc spánku, ne víc procházky"
    ],
    vetBox: [
      "Štěně panikaří při samotě, ničí věci, slintá, zvrací ze stresu",
      "Agresivní reakce ze strachu",
      "Náhlá změna chování (vyloučit bolest / zdravotní problém)"
    ],
    sections: [
      {
        id: "proc-mene-casteji",
        title: "Proč u bolonky funguje méně a častěji",
        content: "Bolonka se učí rychle, ale snadno se přetíží. Když je přetažená, začne kousat, běhat, štěkat, zlobit – ve skutečnosti jen nezvládá stres a únavu.",
        subsections: [
          {
            title: "Jak na to",
            content: "Trénink 1-3 minuty, několikrát denně. Po každé nové zkušenosti pauza a spánek. Odměňovat klid a spolupráci, ne jen výkon."
          },
          {
            title: "Zlaté pravidlo",
            content: "Raději 10 malých výher denně než 1 velká lekce, která skončí přestřelením."
          }
        ]
      },
      {
        id: "obdobi-0-16-tydnu",
        title: "0-16 týdnů: období, které rozhoduje o budoucí pohodě",
        content: "Toto je kritické období pro socializaci a nastavení správných návyků.",
        subsections: [
          {
            title: "Příprava domova",
            content: "Bezpečný klidový kout (pelíšek/klec/ohrádka – jako domeček, ne trest). Režimové pomůcky: čichací kobereček, lízací podložka, bezpečné žvýkání. Management bytu: kabely, boty, květiny, odpadky – pryč z dosahu. Domluva v rodině: stejná pravidla pro všechny."
          },
          {
            title: "První 72 hodin doma",
            content: "Klid (minimum návštěv, minimum nových míst). Spánek (štěně spí velmi mnoho – je to v pořádku). Stejné krmivo aspoň první dny, změny pozvolna. Krátké venčení po spánku, po jídle a po hře. Neřešte hned přivolání venku. Nejdřív vztah, režim, pocit bezpečí."
          }
        ]
      },
      {
        id: "cistota",
        title: "Čistota: jak naučit venčení bez stresu",
        content: "Bolonka je chytrá – čistotu zvládne rychle, když jí dáte šanci uspět.",
        subsections: [
          {
            title: "Kdy chodit ven",
            content: "Po spánku, po jídle, po hře / velkém vzrušení, a preventivně v rozumných intervalech (u malého štěněte klidně po 2-3 hodinách). Nejčastější chyba je chodíme málo."
          },
          {
            title: "Co dělat venku",
            content: "Nic neříkat, jen dát prostor, klidně čekat. Jakmile se to povede: odměna + pochvala + 10 vteřin radosti. Pak domů (nebo krátká procházka), aby štěně pochopilo, že venčení je výhra."
          },
          {
            title: "Co dělat doma, když se to nepovede",
            content: "Beze slov uklidit. Žádné tresty (zvyšují stres a mohou vést k tomu, že se štěně bude bát udělat to před Vámi)."
          }
        ]
      },
      {
        id: "spanek",
        title: "Spánek: největší tajná zbraň výchovy",
        content: "Většina problémů u štěňat je z únavy. Typicky potřebují velmi vysoký podíl spánku a klidu. Pokud štěně divoce kouše, lítá po bytě, nejde vypnout – často nepomůže víc procházky, ale víc klidu.",
        subsections: [
          {
            title: "Praktický tip",
            content: "Po každé aktivitě dejte štěněti klidové okno (ohrádka/klec + lízací podložka)."
          }
        ]
      },
      {
        id: "socializace",
        title: "Socializace: bezpečně, řízeně, po dávkách",
        content: "Socializace není ať si ho pohladí každý. Socializace znamená: svět je předvídatelný a bezpečný.",
        subsections: [
          {
            title: "Co socializovat (a jak)",
            content: "Různé povrchy (dlažba, koberec, výtah), zvuky (tramvaj z dálky, fén potichu), lidi (muži, děti, brýle, čepice), manipulace (tlapky, uši, kartáč), prostředí (krátká návštěva města, pak spánek)."
          },
          {
            title: "Setkání se psy",
            content: "Vyhněte se rizikovým místům (psí parky, místa s výkaly), ale seznamování se zdravými, prověřenými psy je velmi přínosné. Lepší je 1 dobré setkání než 10 chaotických."
          }
        ]
      },
      {
        id: "samota",
        title: "Samota: prevence separačních potíží",
        content: "Bolonka je kontaktní. Samota se musí učit.",
        subsections: [
          {
            title: "Mikrokroky (fungují nejlépe)",
            content: "Odejdu za dveře na 5-10 vteřin. Vrátím se dřív, než začne kňučet. Postupně přidávám vteřiny a minuty."
          },
          {
            title: "Důležité",
            content: "Odchody a příchody dělejte nudné. Žádné loučení, žádné vítací drama."
          }
        ]
      },
      {
        id: "kousani",
        title: "Kousání: normální vývoj, jen potřebuje pravidla",
        content: "Kousání je u štěňat běžné. Cílem je nabídnout legální kousání (hračky, žvýkání) a naučit: když koušu člověka, hra končí.",
        subsections: [
          {
            title: "Postup",
            content: "Když štěně kouše ruce: ztuhnout, odstranit ruce, 3-5 vteřin pauza. Pak nabídnout hračku, pochvala, když kouše hračku."
          }
        ]
      },
      {
        id: "zakladni-dovednosti",
        title: "Základní dovednosti do 16 týdnů",
        content: "Cíl není dokonalost. Cíl je nastavit návyky a důvěru.",
        subsections: [
          {
            title: "Realistické cíle",
            content: "Reakce na jméno. Přivolání v bytě / na zahradě (krátká vzdálenost). Místo (deka) – odměna za klid. Chůze na vodítku bez tahání v klidném prostředí. Manipulace: kartáč, tlapky, uši (po vteřinách)."
          }
        ]
      },
      {
        id: "puberta",
        title: "4-12 měsíců: puberta a stabilizace",
        content: "V pubertě často přijde horší přivolání, víc štěkání, větší citlivost, zapomínání. To neznamená, že jste něco pokazili.",
        subsections: [
          {
            title: "Jak reagovat",
            content: "Zjednodušit trénink, zvýšit odměny, posílit rutinu a klidové aktivity."
          },
          {
            title: "Co do 12 měsíců opravdu chcete",
            content: "Klid v domácnosti (umí odpočívat). Zvládnutelná samota (postupně). Bezpečná manipulace (srst, vet, tlapky). Přivolání v běžných situacích (ne vždy a všude)."
          }
        ]
      },
      {
        id: "nejcastejsi-chyby",
        title: "Nejčastější chyby (a jednoduché opravy)",
        content: "Moc podnětů, málo spánku – přidejte klidový režim. Dlouhé procházky místo rutiny – zkraťte ven, přidejte mentální práci doma. Tresty – přejděte na odměny a management prostředí. Samota až někdy – trénujte od první týdne po vteřinách. Nekonzistence v rodině – sepište 5 pravidel a držte je."
      }
    ],
    faq: [
      { question: "Je lepší klec nebo ohrádka?", answer: "Záleží na bytě a štěněti. Důležité je, aby to byl bezpečný domeček, ne trest." },
      { question: "Kolik má štěně spát?", answer: "Hodně. U štěňat je velká část dne spánek a klid – je to normální a zdravé." },
      { question: "Kdy začít s vodítkem?", answer: "Hned doma na pár vteřin až minut – nejdřív zvyk, pak chůze." },
      { question: "Mám ho brát mezi lidi před ukončením očkování?", answer: "Ano, ale bezpečně: čistá místa, prověřené kontakty, žádné psí parky." },
      { question: "Co když kouše děti?", answer: "Vždy management (branka/ohrádka), krátké interakce, dohled, hračky na přesměrování." },
      { question: "Kdy začne puberta?", answer: "U malých plemen často dřív než u velkých – sledujte změny a vraťte se o krok zpět v tréninku." },
      { question: "Jak často trénovat přivolání?", answer: "Denně, ale krátce – pár opakování v bytě, pak na zahradě." },
      { question: "Jak dlouho může být štěně samo?", answer: "Učí se postupně – nezačínejte na hodinách, ale na vteřinách." },
      { question: "Kdy řešit štěkání?", answer: "Pokud ruší byt/sousedy nebo roste. Čím dřív nastavíte rutinu a klid, tím lépe." },
      { question: "Co je nejdůležitější věc v prvním měsíci?", answer: "Rutina + spánek + bezpečná socializace." }
    ]
  },
  {
    id: 2,
    slug: "bolonka-do-bytu",
    title: "Proč je bolonka ideální do bytu",
    seoTitle: "Bolonka do bytu: proč funguje a jak zvládnout samotu, citlivost a štěkání",
    metaDescription: "Ruská barevná bolonka je skvělá do bytu – když víte, jak pracovat se samotou, citlivostí a štěkáním. Praktické tipy bez stresu.",
    excerpt: "Bolonka bývá skvělý bytový pes, protože je kontaktní, dobře se učí rutinu a nepotřebuje hektary zahrady. Zároveň je férové říct: vyžaduje blízkost lidí, trénink samoty a klidové návyky.",
    category: "Životní styl",
    readTime: "8 min",
    date: "20. ledna 2025",
    icon: Home,
    canDoBox: [
      "Bolonka se v bytě často cítí skvěle díky blízkosti rodiny",
      "Stačí krátké procházky a mentální práce doma",
      "Rutina je klíč – předvídatelný režim = spokojený pes"
    ],
    vetBox: [
      "Pes se při samotě zraňuje nebo ničí věci",
      "Štěkání, které nereaguje na běžné úpravy",
      "Apatie, nechutenství nebo jiné náhlé změny"
    ],
    sections: [
      {
        id: "proc-bolonka-v-byte",
        title: "Proč bolonka v bytě často prospívá",
        content: "Bolonka má několik vlastností, které ji předurčují pro spokojený bytový život.",
        subsections: [
          {
            title: "Společenská povaha",
            content: "Bolonka je typicky pes, který chce být u Vás. Bytový život jí často sedí, protože je součástí dění."
          },
          {
            title: "Malá velikost",
            content: "Snadno ji vezmete do auta, na návštěvu, do salonu, k veterináři – což pomáhá socializaci i pohodě."
          },
          {
            title: "Dobře funguje na rutinu",
            content: "Bytový režim (ráno–odpoledne–večer) je pro bolonku ideální, když je předvídatelný."
          }
        ]
      },
      {
        id: "limity",
        title: "Limity (a jak je zvládnout)",
        content: "Každé plemeno má své výzvy. U bolonky je důležité znát je předem.",
        subsections: [
          {
            title: "Samota: nejčastější bolončí téma",
            content: "Bolonka může být citlivá na odloučení. Řešení je: začít trénink brzy, mikrokroky, klidové aktivity (lízací podložka), odchody a příchody dělat nudně. Samota se trénuje jako sval – po troškách."
          },
          {
            title: "Citlivost",
            content: "U citlivých psů tresty často zvyšují nejistotu. Mnohem lépe funguje: jasné hranice, odměňování žádoucího chování, management prostředí."
          }
        ]
      },
      {
        id: "stekani",
        title: "Štěkání: jak mu předejít v paneláku",
        content: "Štěkání v bytě bývá reakce na zvuky (chodba, výtah), zvonek, nuda / přebuzení, frustrace.",
        subsections: [
          {
            title: "Co funguje",
            content: "Místo (deka) jako bezpečný bod. Přepis zvonku: zvonek = pamlsek na místo. Bílý šum / závěs (snížení podnětů). Dostatek klidu a spánku."
          },
          {
            title: "Co často zhorší situaci",
            content: "Křik, chaotické uklidňování, dlouhé vyběhávání přetaženého štěněte."
          }
        ]
      },
      {
        id: "pohyb",
        title: "Kolik pohybu bolonka potřebuje",
        content: "Bolonka nepotřebuje maratony. Potřebuje pravidelné krátké procházky, čichání, mentální práci doma a hlavně klid.",
        subsections: [
          {
            title: "Měřítko",
            content: "Pokud je pes po procházce ještě víc na pružině, je přetažený. Zkraťte a přidejte klid."
          }
        ]
      },
      {
        id: "deti",
        title: "Bolonka a děti v bytě",
        content: "Bolonka může být skvělá rodinná, pokud děti mají pravidla (nesahat, když spí / jí), interakce jsou krátké a pod dohledem, pes má možnost odejít do klidového kouta."
      },
      {
        id: "pro-koho-ne",
        title: "Pro koho bolonka do bytu není ideální",
        content: "Férově: pokud víte, že bude často a dlouho sama bez možnosti tréninku, nebo v prostředí s velkým chaosem bez režimu, může být lepší jiné plemeno nebo jiné nastavení dne."
      }
    ],
    faq: [
      { question: "Je bolonka tichý pes?", answer: "Může být, když se učí klidu a má režim. Bez práce může štěkat." },
      { question: "Kolik samoty zvládne dospělá bolonka?", answer: "Individuálně – klíč je trénink a postupnost." },
      { question: "Hodí se do bytu bez výtahu?", answer: "Ano, ale myslete na schody u štěněte (přenášení, šetrnost)." },
      { question: "Je vhodná pro alergiky?", answer: "Neexistuje 100% hypoalergenní pes. U některých lidí může být snesitelnější, ale negarantujte to." },
      { question: "Jak často ven?", answer: "U štěněte často, u dospělého podle režimu – důležitá je pravidelnost." },
      { question: "Co když sousedi slyší každé pípnutí?", answer: "Nastavte místo, přepis zvonku a management podnětů co nejdřív." }
    ]
  },
  {
    id: 3,
    slug: "pece-o-srst-bolonky-bez-stresu",
    title: "Péče o srst bolonky bez stresu",
    seoTitle: "Srst bolonky bez stresu: kartáč, hřebínek, koupání a salon vs domácí péče",
    metaDescription: "Praktický návod na srst bolonky: pomůcky, rutina, technika česání, rozčesání zacuchání, koupání a sušení. Bez boje, s respektem.",
    excerpt: "Srst bolonky je nádherná, ale vyžaduje pravidelnost. Dobrá zpráva: stačí krátká rutina a naučit psa spolupracovat. Nejde o sílu – jde o systém.",
    category: "Péče",
    readTime: "7 min",
    date: "15. ledna 2025",
    icon: Scissors,
    canDoBox: [
      "5-10 minut 2-4× týdně udrží srst krásnou",
      "Česat po sekcích, od konečků ke kořínkům",
      "Naučte manipulaci co nejdříve – štěně to přijme snáz"
    ],
    vetBox: [
      "Zacuchání, které nejde rozčesat bez bolesti – salon",
      "Zápach, zarudnutí kůže, svědění – veterinář",
      "Pes se při česání agresivně brání – trenér/behaviorista"
    ],
    sections: [
      {
        id: "co-cekat",
        title: "Co od srsti bolonky čekat",
        content: "Srst bolonky se snadno cuchá v třecích zónách (pod postrojem, za ušima, v tříslech). Po koupání bez správného vysušení se cuchá rychleji. Když se česání odkládá, vznikne boj a stres."
      },
      {
        id: "vybava",
        title: "Výbava, která opravdu dává smysl",
        content: "Kartáč (vhodný pro typ srsti, jemný), kovový hřebínek (kontrola), rozčesávač / kondicionér (snižuje tah), fén (spíš nižší teplota, postupné zvykání), malé nůžky na hygienu.",
        subsections: [
          {
            title: "Tip",
            content: "Nejdražší kartáč není automaticky nejlepší. Důležité je, aby netahal a nelámal srst."
          }
        ]
      },
      {
        id: "rutina",
        title: "Rutina: nejjednodušší plán",
        content: "5-10 minut 2-4× týdně (podle délky a střihu). Jednou za čas kontrolní den: třecí zóny (pod postrojem, za ušima).",
        subsections: [
          {
            title: "Nejlepší moment na česání",
            content: "Po procházce, když je pes klidný, nebo večer, kdy stejně zpomaluje."
          }
        ]
      },
      {
        id: "technika",
        title: "Technika česání, která minimalizuje stres",
        content: "Správná technika dělá obrovský rozdíl.",
        subsections: [
          {
            title: "Po sekcích, ne po povrchu",
            content: "Rozdělte srst na malé části. Česejte od konečků ke kořínkům. Hřebínek použijte jako kontrolu: když projde, je hotovo."
          },
          {
            title: "Když se pes ošívá",
            content: "To je informace, ne vzdor. Zkraťte dobu, přidejte odměny a vraťte se k jednodušším místům."
          },
          {
            title: "Jak řešit zacuchání",
            content: "Nikdy netrhat na sucho. Použít kondicionér/rozčesávač. Prsty nejdřív uvolnit uzlík, až pak kartáč/hřebínek. Když je to velké: raději salon než bolestivý boj."
          }
        ]
      },
      {
        id: "koupani",
        title: "Koupání a sušení",
        content: "Koupejte podle potřeby (často 1× za 3-6 týdnů, individuálně). Po koupání důkladně vysušit, jinak se srst rychle zacuchá. Fén učte postupně: nejdřív zvuk na dálku + pamlsky."
      },
      {
        id: "salon",
        title: "Salon vs domácí péče",
        content: "Domácí péče je skvělá pro rutinu. Salon je skvělý pro střih, záchranu zacuchané srsti, udržovací plán, když máte málo času. Ideál: doma udržujete, salon 1× za čas nastaví základ."
      },
      {
        id: "manipulace",
        title: "Naučte bolonku na manipulaci",
        content: "20-60 vteřin denně: kartáč, odměna, konec. Tlapky a uši po vteřinách. Čím dřív, tím lépe (u štěněte je to nejrychlejší). Tajemství pohodové srsti je v tom, že pes spolupracuje."
      }
    ],
    faq: [
      { question: "Jak často česat štěně?", answer: "Krátce a často – i 1-2 minuty denně jsou skvělé." },
      { question: "Je nutné fénovat?", answer: "U dlouhé srsti je to velmi užitečné, aby se netvořily dredy." },
      { question: "Co postroj?", answer: "Zvyšuje tření – po každé delší procházce zkontrolujte pod postrojem." },
      { question: "Kdy do salonu poprvé?", answer: "Jakmile štěně zvládá základní manipulaci; první návštěva spíš seznamovací." },
      { question: "Mám chloupky v uších trhat?", answer: "Individuálně, často je lepší řešit s groomerem/vetem podle konkrétního ucha." },
      { question: "Jak poznám, že česání bolí?", answer: "Pes uhýbá, ztuhne, olizuje se, snaží se odejít – zkraťte dobu a změňte techniku." }
    ]
  },
  {
    id: 4,
    slug: "spravna-vyziva-bolonky",
    title: "Správná výživa bolonky",
    seoTitle: "Výživa bolonky: štěně vs dospělý, pamlsky a citlivé trávení",
    metaDescription: "Praktický průvodce krmením bolonky. Kolik porcí, jak vybrat kompletní krmivo, přechod na nové, pamlsky ve výchově a co dělat při citlivém bříšku.",
    excerpt: "U malých plemen dělá výživa obrovský rozdíl: energie, kondice, zuby i srst. Nemusíte být nutriční specialista – stačí jednoduchý systém a konzistence.",
    category: "Výživa",
    readTime: "6 min",
    date: "10. ledna 2025",
    icon: Apple,
    canDoBox: [
      "Sledujte kondici – žebra nahmatatelná, ale ne trčící",
      "Pamlsky započítávejte do denní dávky",
      "Změny krmiva vždy postupně (7-10 dní)"
    ],
    vetBox: [
      "Opakované průjmy nebo zvracení",
      "Nechutenství trvající déle než den",
      "Svědění, problémy s kůží nebo ušima"
    ],
    sections: [
      {
        id: "zakladni-princip",
        title: "Základní princip",
        content: "Cíl je: stabilní stolice, dobrá kondice (ne nadváha), lesklá srst, chuť k jídlu bez přejídání. Kondice je důležitější než dokonalá značka.",
        subsections: [
          {
            title: "Praktická pomůcka",
            content: "Hlídejte tělesnou kondici (žebra by měla být nahmatatelná, ale ne trčet; pas z boku i shora)."
          }
        ]
      },
      {
        id: "stene",
        title: "Štěně (cca 2-12 měsíců)",
        content: "Jak krmit, aby rostlo rovnoměrně.",
        subsections: [
          {
            title: "Kolik porcí denně",
            content: "Malé štěně obvykle více menších porcí. S věkem postupně méně porcí. Konkrétní počet vždy přizpůsobte věku, aktivitě a doporučení na obalu."
          },
          {
            title: "Přechod na nové krmivo",
            content: "7-10 dní postupně míchat. Neřešit jednorázovou měkčí stolici panikou, ale trend. Při průjmu/apatii konzultovat veterináře."
          }
        ]
      },
      {
        id: "dospely",
        title: "Dospělý pes",
        content: "Jednoduché pravidlo pro udržení kondice: krmná dávka podle kondice, ne jen podle tabulky. Pamlsky započítávat do denní energie."
      },
      {
        id: "pamlsky",
        title: "Pamlsky ve výchově",
        content: "Používejte miniaturní pamlsky (drobky). Odměňujte i běžným krmivem, když to jde. Orientačně držte pamlsky v rozumné části denního příjmu (a když je tréninkový den, uberte večeři)."
      },
      {
        id: "citlive-traveni",
        title: "Citlivé trávení",
        content: "Citlivé bříško může být: rychlá změna krmiva, stres, příliš mnoho pamlsků, paraziti, intolerance.",
        subsections: [
          {
            title: "Praktický postup",
            content: "Zklidnit režim (víc spánku, méně podnětů). Na pár dní zjednodušit pamlsky. Žádné rychlé skokové změny. Při opakovaných potížích řešit s veterinářem (včetně parazitologického vyšetření)."
          }
        ]
      },
      {
        id: "voda-zvykani-doplnky",
        title: "Voda, žvýkání, doplňky",
        content: "Voda má být dostupná stále. Žvýkání je fajn, ale vybírejte bezpečné varianty (ne extrémně tvrdé věci, které mohou poškodit zuby). Doplňky mají smysl jen cíleně – nesypejte pro jistotu vše možné."
      }
    ],
    faq: [
      { question: "Je lepší granule, konzerva nebo BARF?", answer: "Dá se vychovat a krmit kvalitně různými směry. Důležitá je vyváženost a stabilita." },
      { question: "Může bolonka tloustnout snadno?", answer: "Ano – malé plemeno má malé energetické okno. Sledujte kondici." },
      { question: "Co dělat, když štěně nechce jíst?", answer: "Zkontrolujte zdraví, režim, pamlsky a stres. Někdy pomůže pravidelnost a nepřemlouvat." },
      { question: "Jak poznám alergii?", answer: "Často svědění, uši, kůže, opakované průjmy – řešit s veterinářem." },
      { question: "Mám dávat vitamíny?", answer: "U kompletního krmiva obvykle ne, pokud k tomu není důvod." }
    ]
  },
  {
    id: 5,
    slug: "zdravi-a-prevence-bolonky",
    title: "Zdraví a prevence u bolonky",
    seoTitle: "Zdraví bolonky: prevence, očkování, paraziti, zuby, kolena a varovné signály",
    metaDescription: "Přehled prevence pro ruskou bolonku: očkování a veterinární plán, paraziti, péče o zuby, kolena (patella) a kdy vyrazit k veterináři hned.",
    excerpt: "Profesionální chov a spokojený život se psem stojí na prevenci. Ne proto, abyste se báli – ale aby většina věcí byla včas a v klidu.",
    category: "Zdraví",
    readTime: "7 min",
    date: "5. ledna 2025",
    icon: Heart,
    canDoBox: [
      "Pravidelné veterinární kontroly = klid a jistota",
      "Zuby u malých plemen: učte kartáček co nejdřív",
      "Sledujte pohyb – občasné poskakování může signalizovat patelu"
    ],
    vetBox: [
      "Apatie + zvracení/průjem",
      "Krev ve stolici nebo zvratcích",
      "Potíže s dýcháním nebo náhlá bolest",
      "Podezření na otravu"
    ],
    sections: [
      {
        id: "veterinarni-plan",
        title: "Veterinární plán: jednoduchá kostra",
        content: "Vstupní prohlídka po příchodu domů (klidně jen kontrola a domluva plánu). Očkování podle věku, rizika a doporučení veterináře. Pravidelné kontroly (zuby, srdce, pohyb, hmotnost). U očkování se držte veterináře – schémata se mohou lišit podle použité vakcíny a prostředí."
      },
      {
        id: "paraziti",
        title: "Paraziti: klíšťata, blechy, odčervení",
        content: "Důležité je nastavit ochranu podle ročního období, toho, kde chodíte (město/les), kontaktu s jinými psy.",
        subsections: [
          {
            title: "Praktické minimum",
            content: "Pravidelná kontrola srsti po procházce. Ochrana proti klíšťatům dle rizika. Odčervení podle domluvy s veterinářem (ne naslepo pořád stejně)."
          }
        ]
      },
      {
        id: "zuby",
        title: "Zuby: u malých plemen kritické",
        content: "U malých psů je častější zubní kámen a záněty dásní. Nejlepší prevence: naučit kartáček (krátce, pravidelně), kontrola tlamy doma (1× týdně), veterinární dentální kontrola dle potřeby.",
        subsections: [
          {
            title: "Signály problému",
            content: "Zápach, krvácení dásní, nechutenství, pouštění hraček."
          }
        ]
      },
      {
        id: "kolena",
        title: "Kolena (patella): na co si dát pozor",
        content: "U malých plemen se může objevit luxace pately.",
        subsections: [
          {
            title: "Sledujte",
            content: "Občasné poskočení na třech, opakované odlehčování nohy, citlivost při manipulaci. Když se to opakuje, řešte s veterinářem – čím dřív se ví, tím lépe se plánuje režim."
          }
        ]
      },
      {
        id: "oci-usi-kuze",
        title: "Oči, uši, kůže: běžná prevence doma",
        content: "Oči: pravidelně otírat, sledovat výtok a zarudnutí. Uši: kontrola, zápach nebo třepání hlavou = vet. Kůže: svědění a šupiny často souvisí s dietou, parazity nebo alergií."
      },
      {
        id: "kdy-hned",
        title: "Kdy k veterináři hned",
        content: "Apatie + zvracení/průjem. Krev ve stolici nebo zvratcích. Potíže s dýcháním. Náhlá výrazná bolest / kulhání. Podezření na otravu. Štěně, které najednou úplně jiné."
      }
    ],
    faq: [
      { question: "Mám řešit preventivní prohlídky, když je pes zdravý?", answer: "Ano – prevence je levnější a méně stresující než řešit akutní problém." },
      { question: "Jak poznám bolest u psa?", answer: "Ztuhnutí, nechuť k pohybu, změna chování, olizování místa, neklid." },
      { question: "Co když štěně často jí trávu?", answer: "Někdy normální, ale při zvracení a apatii řešit." },
      { question: "Je normální, že štěně občas kulhá po hře?", answer: "Může se přetížit – pokud se to opakuje, řešit s vetem." }
    ]
  },
  {
    id: 6,
    slug: "10-duvodu-proc-ruska-bolonka",
    title: "10 důvodů, proč zvolit ruskou bolonku",
    seoTitle: "10 důvodů, proč zvolit ruskou barevnou bolonku (a pro koho se nehodí)",
    metaDescription: "Konkrétní a férové důvody, proč je bolonka skvělý společník. Plus limity: samota, citlivost, srst a štěkání – aby rozhodnutí bylo správné.",
    excerpt: "Bolonka je plemeno, které si lidé často pořizují na pohodu. A ono to jde – když se k tomu přistoupí rozumně. Tady je 10 důvodů, proč bolonku lidé milují, a zároveň férově i to, na co si dát pozor.",
    category: "O plemeni",
    readTime: "5 min",
    date: "1. ledna 2025",
    icon: Dog,
    canDoBox: [
      "Bolonka se přizpůsobí Vašemu životnímu stylu",
      "Vhodná pro začátečníky i zkušené chovatele",
      "Ideální společník do bytu i domu"
    ],
    vetBox: [
      "Výběr plemene konzultujte upřímně – ne každý režim sedí každému psu"
    ],
    sections: [
      {
        id: "10-duvodu",
        title: "10 důvodů, proč milovat bolonku",
        content: "Každý důvod má svou světlou stránku i věc, na kterou dát pozor.",
        subsections: [
          {
            title: "1) Je to skutečný společenský pes",
            content: "Pro: chce být u Vás a s Vámi. Pozor: učte samotu postupně, jinak může být stresová."
          },
          {
            title: "2) Skvěle se hodí do bytu",
            content: "Pro: nepotřebuje zahradu, potřebuje režim. Pozor: pracujte se štěkáním a klidem v domácnosti."
          },
          {
            title: "3) Dobře se učí",
            content: "Pro: spolupráce bolonku baví (když je výcvik krátký a pozitivní). Pozor: dlouhé lekce ji přetíží."
          },
          {
            title: "4) Dá se udělat pohodový rodinný pes",
            content: "Pro: při správné socializaci je vyrovnaná. Pozor: socializace není chaos – dávkujte podněty."
          },
          {
            title: "5) Je skladná a praktická na cestování",
            content: "Pro: snadná logistika, auto, návštěvy. Pozor: naučte přepravku/klid v autě."
          },
          {
            title: "6) Srst je krásná a variabilní",
            content: "Pro: různé střihy, vzhled na míru. Pozor: vyžaduje rutinu a manipulaci."
          },
          {
            title: "7) Umí být aktivní i domácí pohodář",
            content: "Pro: přizpůsobí se dni. Pozor: unavený pes není přetažený pes. Hlídejte spánek."
          },
          {
            title: "8) Dělá radost lidem, kteří chtějí parťáka",
            content: "Pro: silná vazba, společné rituály. Pozor: stanovte hranice (místo, klid, samota)."
          },
          {
            title: "9) Při správné prevenci může být velmi nenáročná",
            content: "Pro: když je prevence, je klid. Pozor: zuby a kolena u malých plemen nepodceňujte."
          },
          {
            title: "10) Je to plemeno, které se dá vychovat normálně",
            content: "Pro: rutina + laskavá důslednost = funguje. Pozor: chaos a tresty dělají z citlivého psa nejistého psa."
          }
        ]
      },
      {
        id: "pro-koho",
        title: "Pro koho se bolonka hodí nejvíc",
        content: "Lidé, kteří chtějí psa do rodiny a doma mu věnují čas. Lidé, kteří zvládnou krátkou rutinu péče o srst. Domácnosti, kde se dá trénovat samota postupně."
      },
      {
        id: "pro-koho-ne",
        title: "Pro koho se hodí méně",
        content: "Domácnosti, kde bude pes dlouho sám bez možnosti tréninku. Lidé, kteří nechtějí řešit srst vůbec. Prostředí s neustálým chaosem bez režimu."
      }
    ],
    faq: [
      { question: "Je bolonka pro začátečníky?", answer: "Často ano – když přijmete rutinu a pozitivní přístup." },
      { question: "Je vhodná k dětem?", answer: "Ano, ale s pravidly a dohledem." },
      { question: "Je náročná na pohyb?", answer: "Spíš na kontakt a klid než na kilometry." },
      { question: "Je vhodná pro alergiky?", answer: "Nelze garantovat – vždy individuální." },
      { question: "Kolik péče vyžaduje srst?", answer: "Krátká, ale pravidelná rutina." }
    ]
  }
];

export const categories = ["Všechny", "Výchova", "Životní styl", "Péče", "Výživa", "Zdraví", "O plemeni"];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
