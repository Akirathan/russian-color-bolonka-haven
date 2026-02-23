import {
  Baby,
  Home,
  Scissors,
  Apple,
  Heart,
  Dog,
  Clock,
  Droplets,
  Volume2,
  Sofa,
  ShieldCheck,
  Sparkles,
  LucideIcon,
} from "lucide-react";

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
    metaDescription:
      "Praktický a laskavý průvodce výchovou bolonky. Rutina, čistota, socializace, samota, kousání i puberta – krok za krokem, zvládnutelně.",
    excerpt:
      "Ruská barevná bolonka bývá citlivý, společenský pes. To je výhoda: často se učí rychle a ráda spolupracuje. Základem je rutina, krátké tréninky, hodně spánku a práce s emocemi.",
    category: "Výchova",
    readTime: "12 min",
    date: "25. ledna 2025",
    icon: Baby,
    canDoBox: [
      "Rutina + krátké tréninky = klíč k úspěchu",
      "Učte samotu od prvního týdne po malých krocích",
      "Když štěně zlobí, často potřebuje víc spánku, ne víc procházky",
    ],
    vetBox: [
      "Štěně panikaří při samotě, ničí věci, výrazně sliní nebo zvrací ze stresu (nejdřív veterinář; po vyloučení zdravotní příčiny behaviorista)",
      "Agresivní reakce ze strachu nebo náhlé zhoršení chování (nejdřív veterinář kvůli bolesti / zdravotní příčině, potom behaviorista)",
      "Náhlá změna chování (vyloučit bolest / zdravotní problém u veterináře)",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "proc-mene-casteji",
        title: "Proč u bolonky funguje méně a častěji",
        content:
          "Bolonka se často učí rychle, ale může se snadno přetížit. Když je přetažená, začne kousat, běhat, štěkat nebo zlobit – často ve skutečnosti jen nezvládá stres a únavu.",
        subsections: [
          {
            title: "Jak na to",
            content:
              "Trénink 1-3 minuty, několikrát denně. Po každé nové zkušenosti pauza a spánek. Odměňovat klid a spolupráci, ne jen výkon.",
          },
          {
            title: "Zlaté pravidlo",
            content: "Raději 10 malých výher denně než 1 velká lekce, která skončí přestřelením.",
          },
        ],
      },
      {
        id: "obdobi-0-16-tydnu",
        title: "0-16 týdnů: období, které výrazně ovlivňuje budoucí pohodu",
        content: "Jde o důležité období pro socializaci a nastavování základních návyků.",
        subsections: [
          {
            title: "Příprava domova",
            content:
              "Bezpečný klidový kout (pelíšek/klec/ohrádka – jako domeček, ne trest). Režimové pomůcky: čichací kobereček, lízací podložka, bezpečné žvýkání. Management bytu: kabely, boty, květiny, odpadky – pryč z dosahu. Domluva v rodině: stejná pravidla pro všechny.",
          },
          {
            title: "První 72 hodin doma",
            content:
              "Klid (minimum návštěv, minimum nových míst). Spánek (štěně spí velmi mnoho – je to v pořádku). Stejné krmivo aspoň první dny, změny pozvolna. Krátké venčení po spánku, po jídle a po hře. Neřešte hned přivolání venku. Nejdřív vztah, režim a pocit bezpečí.",
          },
        ],
      },
      {
        id: "cistota",
        title: "Čistota: jak naučit venčení bez stresu",
        content: "Bolonka bývá chytrá – čistotu často zvládne rychle, když jí dáte šanci uspět.",
        subsections: [
          {
            title: "Kdy chodit ven",
            content:
              "Po spánku, po jídle, po hře / velkém vzrušení a preventivně v rozumných intervalech (u malého štěněte klidně po 2-3 hodinách). Nejčastější chyba je, že chodíme málo.",
          },
          {
            title: "Co dělat venku",
            content:
              "Nic neříkat, jen dát prostor a klidně čekat. Jakmile se to povede: odměna + pochvala + pár vteřin radosti. Pak domů (nebo krátká procházka), aby štěně pochopilo, že venčení je výhra.",
          },
          {
            title: "Co dělat doma, když se to nepovede",
            content:
              "Beze slov uklidit. Žádné tresty (zvyšují stres a mohou vést k tomu, že se štěně bude bát udělat to před Vámi).",
          },
        ],
      },
      {
        id: "spanek",
        title: "Spánek: největší tajná zbraň výchovy",
        content:
          "Mnoho problémů u štěňat souvisí s únavou. Typicky potřebují velmi vysoký podíl spánku a klidu. Pokud štěně divoce kouše, lítá po bytě a nejde vypnout – často nepomůže víc procházky, ale víc klidu.",
        subsections: [
          {
            title: "Praktický tip",
            content: "Po každé aktivitě dejte štěněti klidové okno (ohrádka/klec + lízací podložka).",
          },
        ],
      },
      {
        id: "socializace",
        title: "Socializace: bezpečně, řízeně, po dávkách",
        content:
          "Socializace není „ať si ho pohladí každý“. Socializace znamená, že svět je pro štěně postupně předvídatelný a bezpečný.",
        subsections: [
          {
            title: "Co socializovat (a jak)",
            content:
              "Různé povrchy (dlažba, koberec, výtah), zvuky (tramvaj z dálky, fén potichu), lidi (muži, děti, brýle, čepice), manipulace (tlapky, uši, kartáč), prostředí (krátká návštěva města, pak spánek).",
          },
          {
            title: "Setkání se psy",
            content:
              "Vyhněte se rizikovým místům (psí parky, místa s výkaly), ale seznamování se zdravými, prověřenými psy je velmi přínosné. Lepší je 1 dobré setkání než 10 chaotických.",
          },
        ],
      },
      {
        id: "samota",
        title: "Samota: prevence separačních potíží",
        content: "Bolonka bývá kontaktní. Samota se proto vyplatí učit cíleně a po malých krocích.",
        subsections: [
          {
            title: "Mikrokroky (fungují nejlépe)",
            content:
              "Odejdu za dveře na 5-10 vteřin. Vrátím se dřív, než začne kňučet. Postupně přidávám vteřiny a minuty.",
          },
          {
            title: "Důležité",
            content: "Odchody a příchody dělejte nudné. Žádné loučení, žádné vítací drama.",
          },
        ],
      },
      {
        id: "kousani",
        title: "Kousání: normální vývoj, jen potřebuje pravidla",
        content:
          "Kousání je u štěňat běžné. Cílem je nabídnout legální kousání (hračky, žvýkání) a naučit: když koušu člověka, hra končí.",
        subsections: [
          {
            title: "Postup",
            content:
              "Když štěně kouše ruce: ztuhnout, odstranit ruce, 3-5 vteřin pauza. Pak nabídnout hračku a pochválit, když kouše hračku.",
          },
        ],
      },
      {
        id: "zakladni-dovednosti",
        title: "Základní dovednosti do 16 týdnů",
        content: "Cíl není dokonalost. Cíl je nastavit návyky a důvěru.",
        subsections: [
          {
            title: "Realistické cíle",
            content:
              "Reakce na jméno. Přivolání v bytě / na zahradě (krátká vzdálenost). Místo (deka) – odměna za klid. Chůze na vodítku bez tahání v klidném prostředí. Manipulace: kartáč, tlapky, uši (po vteřinách).",
          },
        ],
      },
      {
        id: "puberta",
        title: "4-12 měsíců: puberta a stabilizace",
        content:
          "V pubertě často přijde horší přivolání, víc štěkání, větší citlivost nebo „zapomínání“. To neznamená, že jste něco pokazili.",
        subsections: [
          {
            title: "Jak reagovat",
            content: "Zjednodušit trénink, zvýšit odměny, posílit rutinu a klidové aktivity.",
          },
          {
            title: "Co do 12 měsíců opravdu chcete",
            content:
              "Klid v domácnosti (umí odpočívat). Zvládnutelná samota (postupně). Bezpečná manipulace (srst, veterinář, tlapky). Přivolání v běžných situacích (ne vždy a všude).",
          },
        ],
      },
      {
        id: "nejcastejsi-chyby",
        title: "Nejčastější chyby (a jednoduché opravy)",
        content:
          "Moc podnětů, málo spánku – přidejte klidový režim. Dlouhé procházky místo rutiny – zkraťte ven, přidejte mentální práci doma. Tresty – přejděte na odměny a management prostředí. Samota až někdy – trénujte od prvního týdne po vteřinách. Nekonzistence v rodině – sepište 5 pravidel a držte je.",
      },
    ],
    faq: [
      {
        question: "Je lepší klec nebo ohrádka?",
        answer: "Záleží na bytě a štěněti. Důležité je, aby to byl bezpečný domeček, ne trest.",
      },
      {
        question: "Kolik má štěně spát?",
        answer: "Hodně. U štěňat tvoří spánek a klid velkou část dne – je to normální a zdravé.",
      },
      { question: "Kdy začít s vodítkem?", answer: "Hned doma na pár vteřin až minut – nejdřív zvyk, pak chůze." },
      {
        question: "Mám ho brát mezi lidi před ukončením očkování?",
        answer: "Ano, ale bezpečně: čistá místa, prověřené kontakty, žádné psí parky.",
      },
      {
        question: "Co když kouše děti?",
        answer: "Vždy management (branka/ohrádka), krátké interakce, dohled a hračky na přesměrování.",
      },
      {
        question: "Kdy začne puberta?",
        answer:
          "U malých plemen často dřív než u velkých – sledujte změny a případně se vraťte o krok zpět v tréninku.",
      },
      {
        question: "Jak často trénovat přivolání?",
        answer: "Denně, ale krátce – pár opakování v bytě, pak na zahradě.",
      },
      {
        question: "Jak dlouho může být štěně samo?",
        answer: "Učí se postupně – nezačínejte na hodinách, ale na vteřinách.",
      },
      {
        question: "Kdy řešit štěkání?",
        answer: "Pokud ruší byt / sousedy nebo se zhoršuje. Čím dřív nastavíte rutinu a klid, tím lépe.",
      },
      { question: "Co je nejdůležitější věc v prvním měsíci?", answer: "Rutina + spánek + bezpečná socializace." },
    ],
  },
  {
    id: 2,
    slug: "bolonka-do-bytu",
    title: "Proč je bolonka ideální do bytu",
    seoTitle: "Bolonka do bytu: proč funguje a jak zvládnout samotu, citlivost a štěkání",
    metaDescription:
      "Ruská barevná bolonka je skvělá do bytu – když víte, jak pracovat se samotou, citlivostí a štěkáním. Praktické tipy bez stresu.",
    excerpt:
      "Bolonka bývá skvělý bytový pes, protože je kontaktní, dobře se učí rutinu a nepotřebuje hektary zahrady. Zároveň je fér říct: vyžaduje blízkost lidí, trénink samoty a klidové návyky.",
    category: "Životní styl",
    readTime: "8 min",
    date: "20. ledna 2025",
    icon: Home,
    canDoBox: [
      "Bolonka se v bytě často cítí skvěle díky blízkosti rodiny",
      "Stačí krátké procházky a mentální práce doma",
      "Rutina je klíč – předvídatelný režim = spokojený pes",
    ],
    vetBox: [
      "Pes se při samotě zraňuje nebo ničí věci (nejdřív veterinář; po vyloučení zdravotní příčiny behaviorista)",
      "Štěkání, které nereaguje na běžné úpravy režimu a management podnětů (po vyloučení bolesti trenér / behaviorista podle příčiny)",
      "Apatie, nechutenství nebo jiné náhlé změny = veterinář",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "proc-bolonka-v-byte",
        title: "Proč bolonka v bytě často prospívá",
        content: "Bolonka má několik vlastností, které ji předurčují pro spokojený bytový život.",
        subsections: [
          {
            title: "Společenská povaha",
            content:
              "Bolonka je typicky pes, který chce být u Vás. Bytový život jí často sedí, protože je součástí dění.",
          },
          {
            title: "Malá velikost",
            content:
              "Snadno ji vezmete do auta, na návštěvu, do salonu nebo k veterináři – což pomáhá socializaci i pohodě.",
          },
          {
            title: "Dobře funguje na rutinu",
            content: "Bytový režim (ráno–odpoledne–večer) bývá pro bolonku vhodný, když je předvídatelný.",
          },
        ],
      },
      {
        id: "limity",
        title: "Limity (a jak je zvládnout)",
        content: "Každé plemeno má své výzvy. U bolonky je dobré znát je předem.",
        subsections: [
          {
            title: "Samota: časté bolončí téma",
            content:
              "Bolonka může být citlivá na odloučení. Řešení je: začít trénink brzy, mikrokroky, klidové aktivity (lízací podložka), odchody a příchody dělat nudně. Samota se trénuje jako sval – po troškách.",
          },
          {
            title: "Citlivost",
            content:
              "U citlivých psů tresty často zvyšují nejistotu. Mnohem lépe funguje: jasné hranice, odměňování žádoucího chování a management prostředí.",
          },
        ],
      },
      {
        id: "stekani",
        title: "Štěkání: jak mu předejít v paneláku",
        content: "Štěkání v bytě bývá reakce na zvuky (chodba, výtah), zvonek, nudu / přebuzení nebo frustraci.",
        subsections: [
          {
            title: "Co funguje",
            content:
              "Místo (deka) jako bezpečný bod. Přepis zvonku: zvonek = pamlsek na místo. Bílý šum / závěs (snížení podnětů). Dostatek klidu a spánku.",
          },
          {
            title: "Co často zhorší situaci",
            content: "Křik, chaotické uklidňování, dlouhé vyběhávání přetaženého štěněte.",
          },
        ],
      },
      {
        id: "pohyb",
        title: "Kolik pohybu bolonka potřebuje",
        content:
          "Bolonka nepotřebuje maratony. Potřebuje pravidelné krátké procházky, čichání, mentální práci doma a také dostatek klidu.",
        subsections: [
          {
            title: "Měřítko",
            content:
              "Pokud je pes po procházce ještě víc „na pružině“, může být přetažený. Zkraťte aktivitu a přidejte klid.",
          },
        ],
      },
      {
        id: "deti",
        title: "Bolonka a děti v bytě",
        content:
          "Bolonka může být skvělý rodinný pes, pokud děti mají pravidla (nesahat, když spí / jí), interakce jsou krátké a pod dohledem a pes má možnost odejít do klidového kouta.",
      },
      {
        id: "pro-koho-ne",
        title: "Pro koho bolonka do bytu není ideální",
        content:
          "Férově: pokud víte, že bude často a dlouho sama bez možnosti tréninku, nebo v prostředí s velkým chaosem bez režimu, může být vhodnější jiné plemeno nebo jiné nastavení dne.",
      },
    ],
    faq: [
      { question: "Je bolonka tichý pes?", answer: "Může být, když se učí klidu a má režim. Bez práce může štěkat." },
      { question: "Kolik samoty zvládne dospělá bolonka?", answer: "Individuálně – klíč je trénink a postupnost." },
      {
        question: "Hodí se do bytu bez výtahu?",
        answer: "Ano, ale myslete na schody u štěněte (přenášení, šetrnost).",
      },
      {
        question: "Je vhodná pro alergiky?",
        answer: "Neexistuje 100% hypoalergenní pes. U některých lidí může být snesitelnější, ale negarantujte to.",
      },
      { question: "Jak často ven?", answer: "U štěněte často, u dospělého podle režimu – důležitá je pravidelnost." },
      {
        question: "Co když sousedi slyší každé pípnutí?",
        answer: "Nastavte místo, přepis zvonku a management podnětů co nejdřív.",
      },
    ],
  },
  {
    id: 3,
    slug: "pece-o-srst-bolonky-bez-stresu",
    title: "Péče o srst bolonky bez stresu",
    seoTitle: "Srst bolonky bez stresu: kartáč, hřebínek, koupání a salon vs domácí péče",
    metaDescription:
      "Praktický návod na srst bolonky: pomůcky, rutina, technika česání, rozčesání zacuchání, koupání a sušení. Bez boje, s respektem.",
    excerpt:
      "Srst bolonky je nádherná, ale vyžaduje pravidelnost. Dobrá zpráva: stačí krátká rutina a naučit psa spolupracovat. Nejde o sílu – jde o systém.",
    category: "Péče",
    readTime: "7 min",
    date: "15. ledna 2025",
    icon: Scissors,
    canDoBox: [
      "5-10 minut 2-4× týdně může udržet srst krásnou",
      "Česat po sekcích, od konečků ke kořínkům",
      "Naučte manipulaci co nejdříve – štěně to obvykle přijme snáz",
    ],
    vetBox: [
      "Zacuchání, které nejde rozčesat bez bolesti – groomer / salon",
      "Zápach, zarudnutí kůže, svědění – veterinář",
      "Pes se při česání silně brání nebo reaguje strachem (nejdřív veterinář kvůli bolesti / kůži, potom trenér / behaviorista)",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "co-cekat",
        title: "Co od srsti bolonky čekat",
        content:
          "Srst bolonky se snadno cuchá v třecích zónách (pod postrojem, za ušima, v tříslech). Po koupání bez správného vysušení se může cuchat rychleji. Když se česání odkládá, snadno vznikne boj a stres.",
      },
      {
        id: "vybava",
        title: "Výbava, která opravdu dává smysl",
        content:
          "Kartáč (vhodný pro typ srsti, jemný), kovový hřebínek (kontrola), rozčesávač / kondicionér (snižuje tah), fén (spíš nižší teplota, postupné zvykání), malé nůžky na hygienu.",
        subsections: [
          {
            title: "Tip",
            content: "Nejdražší kartáč není automaticky nejlepší. Důležité je, aby netahal a nelámal srst.",
          },
        ],
      },
      {
        id: "rutina",
        title: "Rutina: nejjednodušší plán",
        content:
          "5-10 minut 2-4× týdně (podle délky a střihu). Jednou za čas kontrolní den: třecí zóny (pod postrojem, za ušima).",
        subsections: [
          {
            title: "Nejlepší moment na česání",
            content: "Po procházce, když je pes klidný, nebo večer, kdy stejně zpomaluje.",
          },
        ],
      },
      {
        id: "technika",
        title: "Technika česání, která minimalizuje stres",
        content: "Správná technika dělá obrovský rozdíl.",
        subsections: [
          {
            title: "Po sekcích, ne po povrchu",
            content:
              "Rozdělte srst na malé části. Česejte od konečků ke kořínkům. Hřebínek použijte jako kontrolu: když projde, je hotovo.",
          },
          {
            title: "Když se pes ošívá",
            content: "To je informace, ne vzdor. Zkraťte dobu, přidejte odměny a vraťte se k jednodušším místům.",
          },
          {
            title: "Jak řešit zacuchání",
            content:
              "Nikdy netrhat na sucho. Použijte kondicionér / rozčesávač. Prsty nejdřív uvolněte uzlík, až pak kartáč / hřebínek. Když je to velké: raději salon než bolestivý boj.",
          },
        ],
      },
      {
        id: "koupani",
        title: "Koupání a sušení",
        content:
          "Koupejte podle potřeby (často 1× za 3-6 týdnů, individuálně). Po koupání srst důkladně vysušte, jinak se může rychleji zacuchat. Fén učte postupně: nejdřív zvuk na dálku + pamlsky.",
      },
      {
        id: "salon",
        title: "Salon vs domácí péče",
        content:
          "Domácí péče je skvělá pro rutinu. Salon je skvělý pro střih, záchranu zacuchané srsti a udržovací plán, když máte málo času. Ideál: doma udržujete, salon občas nastaví základ.",
      },
      {
        id: "manipulace",
        title: "Naučte bolonku na manipulaci",
        content:
          "20-60 vteřin denně: kartáč, odměna, konec. Tlapky a uši po vteřinách. Čím dřív, tím lépe (u štěněte to bývá nejrychlejší). Tajemství pohodové srsti je v tom, že pes spolupracuje.",
      },
    ],
    faq: [
      { question: "Jak často česat štěně?", answer: "Krátce a často – i 1-2 minuty denně jsou skvělé." },
      { question: "Je nutné fénovat?", answer: "U delší srsti je to velmi užitečné, aby se netvořily zacuchance." },
      { question: "Co postroj?", answer: "Zvyšuje tření – po každé delší procházce zkontrolujte srst pod postrojem." },
      {
        question: "Kdy do salonu poprvé?",
        answer: "Jakmile štěně zvládá základní manipulaci; první návštěva bývá spíš seznamovací.",
      },
      {
        question: "Mám chloupky v uších trhat?",
        answer: "Individuálně; často je lepší řešit to s groomerem nebo veterinářem podle konkrétního ucha.",
      },
      {
        question: "Jak poznám, že česání bolí?",
        answer: "Pes uhýbá, ztuhne, olizuje se, snaží se odejít – zkraťte dobu a změňte techniku.",
      },
    ],
  },
  {
    id: 4,
    slug: "spravna-vyziva-bolonky",
    title: "Správná výživa bolonky",
    seoTitle: "Výživa bolonky: štěně vs dospělý, pamlsky a citlivé trávení",
    metaDescription:
      "Praktický průvodce krmením bolonky. Kolik porcí, jak vybrat kompletní krmivo, přechod na nové, pamlsky ve výchově a co dělat při citlivém bříšku.",
    excerpt:
      "U malých plemen dělá výživa velký rozdíl: energie, kondice, zuby i srst. Nemusíte být nutriční specialista – stačí jednoduchý systém a konzistence.",
    category: "Výživa",
    readTime: "6 min",
    date: "10. ledna 2025",
    icon: Apple,
    canDoBox: [
      "Sledujte kondici – žebra nahmatatelná, ale ne trčící",
      "Pamlsky započítávejte do denní dávky",
      "Změny krmiva vždy postupně (7-10 dní)",
    ],
    vetBox: [
      "Opakované průjmy nebo zvracení = veterinář",
      "Nechutenství u štěněte nebo malého psa řešte neodkladně (zvlášť při apatii, zvracení nebo průjmu)",
      "Svědění, problémy s kůží nebo ušima = veterinář",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "zakladni-princip",
        title: "Základní princip",
        content:
          "Cíl je: stabilní stolice, dobrá kondice (ne nadváha), lesklá srst a chuť k jídlu bez přejídání. Kondice je důležitější než „dokonalá“ značka krmiva.",
        subsections: [
          {
            title: "Praktická pomůcka",
            content: "Hlídejte tělesnou kondici (žebra by měla být nahmatatelná, ale ne trčet; pas z boku i shora).",
          },
        ],
      },
      {
        id: "stene",
        title: "Štěně (cca 2-12 měsíců)",
        content: "Jak krmit, aby rostlo rovnoměrně.",
        subsections: [
          {
            title: "Kolik porcí denně",
            content:
              "Malé štěně obvykle potřebuje více menších porcí. S věkem postupně méně porcí. Konkrétní počet vždy přizpůsobte věku, aktivitě a doporučení na obalu / od veterináře.",
          },
          {
            title: "Přechod na nové krmivo",
            content:
              "7-10 dní postupně míchat. Neřešit jednorázovou měkčí stolici panikou, ale sledovat trend. Při průjmu, apatii nebo zvracení konzultovat veterináře.",
          },
        ],
      },
      {
        id: "dospely",
        title: "Dospělý pes",
        content:
          "Jednoduché pravidlo pro udržení kondice: krmná dávka podle kondice, ne jen podle tabulky. Pamlsky započítávat do denní energie.",
      },
      {
        id: "pamlsky",
        title: "Pamlsky ve výchově",
        content:
          "Používejte miniaturní pamlsky (drobky). Odměňujte i běžným krmivem, když to jde. Orientačně držte pamlsky v rozumné části denního příjmu (a když je tréninkový den, uberte večeři).",
      },
      {
        id: "citlive-traveni",
        title: "Citlivé trávení",
        content:
          "Citlivé bříško může souviset s rychlou změnou krmiva, stresem, příliš mnoha pamlsky, parazity nebo intolerancí.",
        subsections: [
          {
            title: "Praktický postup",
            content:
              "Zklidnit režim (víc spánku, méně podnětů). Na pár dní zjednodušit pamlsky. Žádné rychlé skokové změny. Při opakovaných potížích řešit s veterinářem (včetně parazitologického vyšetření podle potřeby).",
          },
        ],
      },
      {
        id: "voda-zvykani-doplnky",
        title: "Voda, žvýkání, doplňky",
        content:
          "Voda má být dostupná stále. Žvýkání je fajn, ale vybírejte bezpečné varianty (ne extrémně tvrdé věci, které mohou poškodit zuby). Doplňky mají smysl hlavně cíleně – nesypejte preventivně vše možné.",
      },
    ],
    faq: [
      {
        question: "Je lepší granule, konzerva nebo BARF?",
        answer:
          "Použitelné mohou být různé směry, pokud je krmení vyvážené a pes prospívá. U BARF je důležité hlídat nutriční vyváženost (zejména u štěňat) a hygienická rizika syrového masa; u štěněte je rozumné postup konzultovat s veterinářem nebo veterinárním nutričním specialistou.",
      },
      {
        question: "Může bolonka tloustnout snadno?",
        answer: "Ano – malé plemeno má malé energetické okno. Sledujte kondici.",
      },
      {
        question: "Co dělat, když štěně nechce jíst?",
        answer:
          "Zkontrolujte zdraví, režim, pamlsky a stres. U malého štěněte nečekejte dlouho – zvlášť při apatii, zvracení nebo průjmu řešte veterináře ještě tentýž den.",
      },
      {
        question: "Jak poznám alergii?",
        answer: "Často svědění, uši, kůže nebo opakované zažívací potíže – řešit s veterinářem.",
      },
      {
        question: "Mám dávat vitamíny?",
        answer: "U kompletního krmiva obvykle ne, pokud k tomu není konkrétní důvod doporučený veterinářem.",
      },
    ],
  },
  {
    id: 5,
    slug: "zdravi-a-prevence-bolonky",
    title: "Zdraví a prevence u bolonky",
    seoTitle: "Zdraví bolonky: prevence, očkování, paraziti, zuby, kolena a varovné signály",
    metaDescription:
      "Přehled prevence pro ruskou bolonku: očkování a veterinární plán, paraziti, péče o zuby, kolena (patella) a kdy vyrazit k veterináři hned.",
    excerpt:
      "Spokojený život se psem stojí na prevenci. Ne proto, abyste se báli – ale aby většina věcí byla včas a v klidu.",
    category: "Zdraví",
    readTime: "7 min",
    date: "5. ledna 2025",
    icon: Heart,
    canDoBox: [
      "Pravidelné veterinární kontroly = klid a jistota",
      "Zuby u malých plemen: učte kartáček co nejdřív",
      "Sledujte pohyb – občasné poskakování může signalizovat patelu",
    ],
    vetBox: [
      "Apatie + zvracení/průjem",
      "Krev ve stolici nebo zvratcích",
      "Potíže s dýcháním nebo náhlá bolest",
      "Podezření na otravu",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "veterinarni-plan",
        title: "Veterinární plán: jednoduchá kostra",
        content:
          "Vstupní prohlídka po příchodu domů (klidně jen kontrola a domluva plánu). Očkování podle věku, rizika a doporučení veterináře. Pravidelné kontroly (zuby, srdce, pohyb, hmotnost). U očkování se držte veterináře – schémata se mohou lišit podle použité vakcíny a prostředí.",
      },
      {
        id: "paraziti",
        title: "Paraziti: klíšťata, blechy, odčervení",
        content:
          "Důležité je nastavit ochranu podle ročního období, toho, kde chodíte (město/les), a kontaktu s jinými psy.",
        subsections: [
          {
            title: "Praktické minimum",
            content:
              "Pravidelná kontrola srsti po procházce. Ochrana proti klíšťatům dle rizika. Odčervení podle domluvy s veterinářem (ne naslepo pořád stejně).",
          },
        ],
      },
      {
        id: "zuby",
        title: "Zuby: u malých plemen kritické",
        content:
          "U malých psů je častější zubní kámen a záněty dásní. Nejlepší prevence: naučit kartáček (krátce, pravidelně), kontrola tlamy doma (např. 1× týdně) a veterinární dentální kontrola dle potřeby.",
        subsections: [
          {
            title: "Signály problému",
            content: "Zápach, krvácení dásní, nechutenství, pouštění hraček.",
          },
        ],
      },
      {
        id: "kolena",
        title: "Kolena (patella): na co si dát pozor",
        content: "U malých plemen se může objevit luxace pately.",
        subsections: [
          {
            title: "Sledujte",
            content:
              "Občasné poskočení na třech, opakované odlehčování nohy, citlivost při manipulaci. Když se to opakuje, řešte s veterinářem – čím dřív se ví, tím lépe se plánuje režim.",
          },
        ],
      },
      {
        id: "oci-usi-kuze",
        title: "Oči, uši, kůže: běžná prevence doma",
        content:
          "Oči: pravidelně otírat, sledovat výtok a zarudnutí. Uši: kontrola, zápach nebo třepání hlavou = veterinář. Kůže: svědění a šupiny často souvisí s dietou, parazity nebo alergií.",
      },
      {
        id: "kdy-hned",
        title: "Kdy k veterináři hned",
        content:
          "Apatie + zvracení/průjem. Krev ve stolici nebo zvratcích. Potíže s dýcháním. Náhlá výrazná bolest / kulhání. Podezření na otravu. Štěně, které je najednou úplně jiné.",
      },
    ],
    faq: [
      {
        question: "Mám řešit preventivní prohlídky, když je pes zdravý?",
        answer: "Ano – prevence bývá levnější a méně stresující než řešit akutní problém.",
      },
      {
        question: "Jak poznám bolest u psa?",
        answer: "Ztuhnutí, nechuť k pohybu, změna chování, olizování místa, neklid.",
      },
      {
        question: "Co když štěně často jí trávu?",
        answer: "Někdy to může být v normě, ale při zvracení, apatii nebo dalších potížích řešte veterináře.",
      },
      {
        question: "Je normální, že štěně občas kulhá po hře?",
        answer: "Může se přetížit – pokud se to opakuje, řešte s veterinářem.",
      },
    ],
  },
  {
    id: 6,
    slug: "10-duvodu-proc-ruska-bolonka",
    title: "10 důvodů, proč zvolit ruskou bolonku",
    seoTitle: "10 důvodů, proč zvolit ruskou barevnou bolonku (a pro koho se nehodí)",
    metaDescription:
      "Konkrétní a férové důvody, proč je bolonka skvělý společník. Plus limity: samota, citlivost, srst a štěkání – aby rozhodnutí bylo správné.",
    excerpt:
      "Bolonka je plemeno, které si lidé často pořizují „na pohodu“. A ono to jde – když se k tomu přistoupí rozumně. Tady je 10 důvodů, proč bolonku lidé milují, a zároveň férově i to, na co si dát pozor.",
    category: "O plemeni",
    readTime: "5 min",
    date: "1. ledna 2025",
    icon: Dog,
    canDoBox: [
      "Bolonka se často přizpůsobí Vašemu životnímu stylu",
      "Může být vhodná pro začátečníky i zkušené chovatele",
      "Často je skvělý společník do bytu i domu",
    ],
    vetBox: [
      "Výběr plemene konzultujte upřímně – ne každý režim sedí každému psu",
      "Při jakýchkoli pochybnostech o zdravotním stavu psa nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "10-duvodu",
        title: "10 důvodů, proč milovat bolonku",
        content: "Každý důvod má svou světlou stránku i věc, na kterou dát pozor.",
        subsections: [
          {
            title: "1) Je to skutečný společenský pes",
            content: "Pro: chce být u Vás a s Vámi. Pozor: učte samotu postupně, jinak může být stresová.",
          },
          {
            title: "2) Skvěle se hodí do bytu",
            content: "Pro: nepotřebuje zahradu, potřebuje režim. Pozor: pracujte se štěkáním a klidem v domácnosti.",
          },
          {
            title: "3) Dobře se učí",
            content:
              "Pro: spolupráce bolonku baví (když je výcvik krátký a pozitivní). Pozor: dlouhé lekce ji mohou přetížit.",
          },
          {
            title: "4) Dá se z ní udělat pohodový rodinný pes",
            content:
              "Pro: při správné socializaci může být vyrovnaná. Pozor: socializace není chaos – dávkujte podněty.",
          },
          {
            title: "5) Je skladná a praktická na cestování",
            content: "Pro: snadná logistika, auto, návštěvy. Pozor: naučte přepravku / klid v autě.",
          },
          {
            title: "6) Srst je krásná a variabilní",
            content: "Pro: různé střihy, vzhled na míru. Pozor: vyžaduje rutinu a manipulaci.",
          },
          {
            title: "7) Umí být aktivní i domácí pohodář",
            content: "Pro: může se přizpůsobit dni. Pozor: unavený pes není totéž co přetažený pes. Hlídejte spánek.",
          },
          {
            title: "8) Dělá radost lidem, kteří chtějí parťáka",
            content: "Pro: silná vazba, společné rituály. Pozor: stanovte hranice (místo, klid, samota).",
          },
          {
            title: "9) Při správné prevenci může být péče dobře zvládnutelná",
            content: "Pro: když je prevence, bývá víc klidu. Pozor: zuby a kolena u malých plemen nepodceňujte.",
          },
          {
            title: "10) Je to plemeno, které se dá vychovat normálně",
            content:
              "Pro: rutina + laskavá důslednost často fungují dobře. Pozor: chaos a tresty mohou z citlivého psa dělat nejistého psa.",
          },
        ],
      },
      {
        id: "pro-koho",
        title: "Pro koho se bolonka hodí nejvíc",
        content:
          "Lidé, kteří chtějí psa do rodiny a doma mu věnují čas. Lidé, kteří zvládnou krátkou rutinu péče o srst. Domácnosti, kde se dá trénovat samota postupně.",
      },
      {
        id: "pro-koho-ne",
        title: "Pro koho se hodí méně",
        content:
          "Domácnosti, kde bude pes dlouho sám bez možnosti tréninku. Lidé, kteří nechtějí řešit srst vůbec. Prostředí s neustálým chaosem bez režimu.",
      },
    ],
    faq: [
      { question: "Je bolonka pro začátečníky?", answer: "Často ano – když přijmete rutinu a pozitivní přístup." },
      { question: "Je vhodná k dětem?", answer: "Ano, ale s pravidly a dohledem." },
      { question: "Je náročná na pohyb?", answer: "Spíš na kontakt a klid než na kilometry." },
      { question: "Je vhodná pro alergiky?", answer: "Nelze garantovat – vždy individuální." },
      { question: "Kolik péče vyžaduje srst?", answer: "Spíš krátkou, ale pravidelnou rutinu." },
    ],
  },
  {
    id: 7,
    slug: "samota-bolonka-14denni-plan",
    title: "Samota u bolonky: 14denní plán prevence separačních potíží",
    seoTitle: "Samota u bolonky: 14denní plán, který zvládnete doma (bez stresu)",
    metaDescription:
      "Praktický plán nácviku samoty pro ruskou bolonku: mikrokroky, chyby, signály stresu, jak nastavit odchody a co dělat, když to nejde.",
    excerpt:
      "Ruská barevná bolonka je kontaktní a často velmi na člověka. To je její kouzlo — a zároveň důvod, proč je potřeba samotu učit cíleně. Dobrá zpráva: když začnete brzy a po malých dávkách, dá se samota zvládnout bez dramat.",
    category: "Výchova",
    readTime: "10 min",
    date: "28. ledna 2025",
    icon: Clock,
    canDoBox: [
      "Postup po vteřinách, ne po hodinách",
      "Vracejte se dřív, než začne protestovat",
      "Odchody i příchody nudně – žádné drama",
    ],
    vetBox: [
      "Panické chování (intenzivní štěkání, ničení, slinění) – nejdřív veterinář, po vyloučení zdravotní příčiny behaviorista",
      "Štěně se nedokáže zklidnit ani při velmi krátkém odchodu (po vyloučení bolesti / zdravotní příčiny behaviorista)",
      "Problém trvá i po týdnech postupného tréninku (behaviorista)",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "proc-bolonka-resi-samotu",
        title: "Proč bolonka samotu někdy řeší víc než jiná plemena",
        content:
          "Bolonka často vyrůstá v blízkosti lidí a má silnou motivaci být u Vás. Pokud se samota nechá na náhodě, může se z ní stát stresový spouštěč. Cíl tréninku samoty není, „aby to vydržela“, ale aby se štěně učilo: odchod = bezpečná nuda.",
      },
      {
        id: "test-pripravenosti",
        title: "Nejdřív rychlý test: je štěně připravené trénovat samotu?",
        content:
          "Trénink samoty dělejte ideálně, když štěně je vyvenčené, má za sebou krátkou aktivitu (mentální, ne vyčerpání), je nakrmené a má šanci vypnout. Pokud štěně jede na doraz, odchod spíš spustí paniku.",
      },
      {
        id: "5-pravidel",
        title: "5 pravidel, která rozhodují o úspěchu",
        content:
          "Postup po vteřinách, ne po hodinách. Vracejte se dřív, než začne protestovat (trénujete klid, ne hysterii). Odchody i příchody nudně – žádné loučení, žádné „jsem zpátky!“. Kvalitní klidové místo (ohrádka/klec jako domeček, ne trest). Když to nejde, zmenšete krok.",
      },
      {
        id: "14denni-plan",
        title: "14denní plán (realistický, zvládnutelný)",
        content: "Každý pes je jiný — pokud štěně některý den nezvládne, nic se neděje: zopakujte předchozí úroveň.",
        subsections: [
          {
            title: "Den 1–3: mikrokroky (5–30 vteřin)",
            content:
              "10–20 krátkých odchodů denně. Odchod = Vy jdete za dveře / do jiné místnosti. Návrat = tichý, neutrální. Cíl: štěně si ani nestihne říct, kde jste.",
          },
          {
            title: "Den 4–7: krátké minuty (30–120 vteřin)",
            content:
              "5–10 opakování denně. Přidejte reálnější odchod: vezmete klíče, otevřete dveře, zavřete. Stále se vracejte před protestem.",
          },
          {
            title: "Den 8–10: 2–5 minut",
            content: "3–6 opakování denně. Jeden z odchodů udělejte snadný (krátký), aby mělo štěně úspěch.",
          },
          {
            title: "Den 11–14: 5–15 minut",
            content: "2–4 opakování denně. Postupně přidávejte minuty, ale ne každý odchod prodlužujte (střídejte).",
          },
        ],
      },
      {
        id: "co-dat-bolonce",
        title: "Co dát bolonce, když odcházíte",
        content:
          "Volte jen bezpečné věci: lízací podložka (klidová aktivita), čichací hra (pár granulí do ručníku), případně bezpečné žvýkání. Proč lízání může fungovat: pomáhá některým psům zpomalit a přepnout do klidovějšího režimu.",
      },
      {
        id: "signaly-stresu",
        title: "Jak poznáte, že už je to stres",
        content:
          "Signály, že jste šli moc rychle: kňučení / štěkání hned po odchodu, škrábání dveří, neklidné pobíhání, zrychlené dýchání, slinění, odmítání pamlsku. Co udělat: další trénink zkrátit, vrátit se o 1–2 úrovně zpět.",
      },
      {
        id: "nejcastejsi-chyby",
        title: "Nejčastější chyby (a rychlé opravy)",
        content:
          "„Zkusíme to rovnou na hodinu“ – vraťte se k vteřinám. „Ať si zvykne, nebudu se vracet“ – u citlivých plemen to často zhorší paniku. Samotu trénujete, když je štěně přetažené – zkraťte podněty, přidejte spánek. Velká emoce při odchodu / příchodu – odchody i příchody jako by nic.",
      },
    ],
    faq: [
      {
        question: "Má štěně být při samotě v kleci?",
        answer: "Může, pokud ji vnímá jako bezpečný domeček. Pokud klec stresuje, začněte ohrádkou bez zavírání.",
      },
      {
        question: "Pomůže druhý pes?",
        answer: "Někdy ano, někdy ne. Separace je vztah k člověku, ne jen otázka „být sám“.",
      },
      { question: "Jak rychle přidávat čas?", answer: "Jen když předchozí krok probíhá klidně. Raději pomaleji." },
      {
        question: "Co když štěně štěká hned, jak zavřu dveře?",
        answer: "Jdete příliš rychle. Začněte odchodem na 1–2 vteřiny a vraťte se ještě před reakcí.",
      },
    ],
  },
  {
    id: 8,
    slug: "cistota-stenete-bolonky",
    title: "Čistota u štěněte bolonky: venčení bez trestů",
    seoTitle: "Čistota u bolonky: jak naučit venčení bez trestů (praktický plán)",
    metaDescription:
      "Jak naučit štěně bolonky venčit venku: frekvence, signály, odměny, noční režim, podložky a řešení nehod doma.",
    excerpt:
      "Čistota není o poslušnosti. Je to kombinace biologie (malý měchýř), rutiny a správného načasování. Když štěněti dáte šanci uspět, bývá bolonka často čistotná poměrně rychle.",
    category: "Výchova",
    readTime: "7 min",
    date: "27. ledna 2025",
    icon: Droplets,
    canDoBox: [
      "Venčit po spánku, jídle a hře – klíčové momenty",
      "Odměna ihned po úspěchu venku",
      "Nehody uklidit beze slov, bez trestů",
    ],
    vetBox: [
      "Extrémně časté močení, bolest nebo tlačení při močení = veterinář",
      "Krev v moči nebo stolici = veterinář",
      "Apatie, nechutenství, náhlá změna = veterinář",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "nejcastejsi-duvod",
        title: "Nejčastější důvod nehod: štěně to nestihne",
        content:
          "U malého štěněte je normální, že po spánku musí ven téměř hned, po jídle to může přijít rychle a po hře se to spustí během chvilky. Pokud nehody pokračují, často to znamená, že chodíme ven pozdě – ne že štěně „to nechápe“.",
      },
      {
        id: "kdy-chodit-ven",
        title: "Jednoduchý režim: kdy chodit ven",
        content:
          "Povinné momenty: po probuzení (i krátkém šlofíku), po jídle, po hře / vzrušení, před spaním. Preventivní intervaly: na začátku klidně po 2–3 hodinách. Postupně se interval prodlužuje.",
      },
      {
        id: "co-delat-venku",
        title: "Co dělat venku, aby se to naučilo rychle",
        content:
          "Venku klid — žádné pobíhání a „pojď sem“. Po vykonání potřeby okamžitě odměna (pamlsek + pochvala). Teprve potom procházka / zábava. Proč to funguje: štěně pochopí, že tohle chování venku mu přináší odměnu.",
      },
      {
        id: "signaly",
        title: "Signály, že to přijde",
        content:
          "Čichání země, točení, odchod do rohu. Náhlé přerušení hry a hledání místa. Neklidné pobíhání. Jakmile to vidíte: beze slov ven.",
      },
      {
        id: "nehoda-doma",
        title: "Co dělat při nehodě doma",
        content:
          "Uklidit a hotovo. Žádné trestání, žádné ukazování, žádné zvýšené emoce. Tresty mohou vést k tomu, že se pes začne bát vykonat potřebu před Vámi — a paradoxně se to zhorší.",
      },
      {
        id: "podlozky",
        title: "Podložky: ano, ne, kdy a jak",
        content:
          "Podložka může být užitečná: když bydlíte vysoko a štěně to fyzicky nestíhá, při nemoci, jako přechodné řešení. Riziko: štěně si zvykne vykonávat potřebu na textilii. Jak tomu předejít: podložku dávejte jen na jedno místo a jakmile to jde, přenášejte návyk ven.",
      },
      {
        id: "nocni-rezim",
        title: "Noční režim",
        content:
          "Poslední venčení těsně před spaním. Pokud je nutné noční venčení: jen vyvenčit, pochválit, zpět do klidu. Ráno hned ven (i když je zima a nechce se).",
      },
      {
        id: "kdyz-se-zasekne",
        title: "Když se čistota zasekne",
        content:
          "Mini-audit: Chodíte ven opravdu po spánku / jídle / hře? Odměňujete venku opravdu hned? Není štěně přetažené a ve stresu? Nedostává večer moc vody / málo venčení? Není tu zdravotní důvod?",
      },
    ],
    faq: [
      {
        question: "Jak dlouho trvá, než bude čistotné?",
        answer: "U většiny štěňat je to otázka týdnů, ne dnů. Důležitá je konzistence.",
      },
      {
        question: "Co když venku jen běhá a doma se vyčůrá?",
        answer: "Venku nejdřív klid, žádné rozptylování. Odměna až po úspěchu.",
      },
      {
        question: "Je normální, že se občas „zapomene“?",
        answer: "Ano, hlavně při změně režimu, návštěvě nebo přetažení.",
      },
      { question: "Mám omezit vodu?", answer: "Ne. Vodu neomezujte, raději přidejte venčení." },
    ],
  },
  {
    id: 9,
    slug: "stekani-bolonka-v-byte",
    title: "Štěkání bolonky v bytě: prevence a řešení",
    seoTitle: "Štěkání bolonky v bytě: proč vzniká a jak ho řešit (zvonek, chodba, okno)",
    metaDescription:
      "Praktické kroky proti štěkání v bytě: management podnětů, trénink místo, přepis zvonku, plán na 7 dní a nejčastější chyby.",
    excerpt:
      "Bolonka umí být tichý pohodář — ale v bytě se často spouští štěkání na zvuky z chodby, zvonek nebo pohyb za oknem. Dobrá zpráva: štěkání je řešitelné, když víte, co ho spouští a co má pes dělat místo něj.",
    category: "Životní styl",
    readTime: "8 min",
    date: "26. ledna 2025",
    icon: Volume2,
    canDoBox: [
      "Management podnětů: závěs, bílý šum, zástěna",
      "Naučte místo (deka) jako bezpečný bod",
      "Přepis zvonku: zvonek = pamlsky na deku",
    ],
    vetBox: [
      "Štěkání spojené s panikou, výrazným strachem nebo agresí (nejdřív veterinář, potom behaviorista)",
      "Náhlá změna chování bez zjevné příčiny = veterinář",
      "Štěkání doprovázené bolestí nebo nepohodou = veterinář",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "proc-steka",
        title: "Proč bolonka štěká (nejčastější důvody)",
        content:
          "Hlídání zvuků: chodba, výtah, sousedi. Zvonek: vzrušení, očekávání návštěvy. Okno: pohyb lidí / psů venku. Přetažení / nuda: pes je unavený a neumí vypnout. Nejistota: pes se snaží zahnat podnět. Nezačínejte tím, že budete štěkání jen zakazovat. Začněte tím, že psovi dáte alternativu.",
      },
      {
        id: "nejrychlejsi-kombinace",
        title: "Nejrychlejší kombinace, která funguje",
        content: "Tři kroky, které ve většině bytů pomohou.",
        subsections: [
          {
            title: "1) Management podnětů",
            content:
              "Závěs / fólie na spodní část okna. Zástěna, aby pes nehlídal chodbu. Bílý šum / rádio potichu u citlivých jedinců. Tím snížíte počet spouštěčů.",
          },
          {
            title: "2) Místo (deka) jako bezpečný bod",
            content: "Naučte bolonku, že na dece se vyplácí být v klidu.",
          },
          {
            title: "3) Přepis zvonku",
            content: "Cíl: místo alarmu bude zvonek signál „běž na deku“, kde se odměňuje.",
          },
        ],
      },
      {
        id: "7denni-plan",
        title: "7denní plán",
        content:
          "Den 1–2: trénujte deku bez zvonku (odměny za klid). Den 3–4: pusťte si zvonek potichu z telefonu, okamžitě odměna na dece. Den 5–6: reálný zvonek, poslat na deku, odměnit. Den 7: přidejte návštěvu nanečisto (kamarád zazvoní, vejde, ignoruje psa, Vy odměňujete klid).",
      },
      {
        id: "v-momente-stekani",
        title: "Co dělat v momentě štěkání",
        content:
          "Zachovejte klid, žádné křičení. Přerušte přístup k podnětu (zavřít dveře, stáhnout roletu). Nabídněte místo a odměňte první vteřiny ticha. Proč nekřičet: pes to může vyhodnotit jako „štěkáme spolu“.",
      },
      {
        id: "nejcastejsi-chyby",
        title: "Nejčastější chyby",
        content:
          "Odměňování štěkání pozorností („co je? ticho!“). Příliš rychlé zvyšování obtížnosti. Žádný klidový režim (přetažený pes = hlasitější pes). Nekonzistence (jednou se štěká, jednou ne).",
      },
    ],
    faq: [
      {
        question: "Mám štěkání ignorovat?",
        answer: "Někdy ano, ale v bytě často potřebujete kombinaci managementu + naučit alternativu.",
      },
      {
        question: "Pomůže antištěkací obojek?",
        answer: "Nedoporučujeme jako první volbu. U citlivých psů může zvýšit stres.",
      },
      {
        question: "Co když štěká jen večer?",
        answer: "Často jde o přetažení. Zkraťte podněty, přidejte klidové aktivity a spánek.",
      },
      {
        question: "Jak rychle se to zlepší?",
        answer: "Často je posun vidět během 1–2 týdnů, když je plán konzistentní.",
      },
    ],
  },
  {
    id: 10,
    slug: "klid-na-dece-bolonka",
    title: "Klid na dece: návyk, který bolonce zlepší život v bytě",
    seoTitle: "Klid na dece: jak naučit bolonku odpočívat (návod krok za krokem)",
    metaDescription:
      "Jak naučit bolonku vypnout na dece: postup po vteřinách, odměňování klidu, využití u zvonku, návštěv a večerního přetažení.",
    excerpt:
      "Mnoho lidí trénuje sedni/lehni, ale neřeší schopnost psa opravdu odpočívat. Deka (místo) je jednoduchý nástroj, jak bolonku naučit klidu v bytě — a využijete ho u zvonku, návštěv, jídla i večer.",
    category: "Výchova",
    readTime: "6 min",
    date: "24. ledna 2025",
    icon: Sofa,
    canDoBox: [
      "Začněte bez povelu – pes objeví, že deka je výhodná",
      "Odměňujte skutečný klid, ne jen polohu",
      "1–3 minuty denně stačí, ale pravidelně",
    ],
    vetBox: [
      "Pes se nedokáže uvolnit ani v klidném prostředí (nejdřív veterinář k vyloučení bolesti / zdravotní příčiny)",
      "Výrazný neklid spojený s bolestí nebo nepohodou = veterinář",
      "Přetrvávající úzkost / panika po vyloučení zdravotní příčiny = behaviorista",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "co-je-klid",
        title: "Co je klid na dece",
        content:
          "Nejde jen o to, že pes leží. Jde o to, že zpomalí dech, uvolní tělo a méně skenuje okolí. To je skutečný klid.",
      },
      {
        id: "jak-zacit",
        title: "Jak začít (bez povelu)",
        content:
          "Položte deku na zem. Pes se na ni podívá – odměna. Pes udělá krok směrem – odměna. Tlapka na dece – odměna. Nechte psa objevit, že deka je výhodná.",
      },
      {
        id: "budovani-vydrze",
        title: "Budování výdrže (po vteřinách)",
        content:
          "Když už pes na dece stojí nebo si lehne: odměňte klid (ticho, uvolnění), prodlužujte po 1–3 vteřinách, raději 10 krátkých úspěchů než jeden dlouhý neúspěch. Tip: Odměňujte nejdřív často. Jakmile pes chápe, odměny postupně řídněte.",
      },
      {
        id: "pridejte-signal",
        title: "Přidejte signál (až když to umí)",
        content: "Až když pes na deku chodí sám, přidejte slovo: místo / deka. Řeknete slovo, pes jde na deku, odměna.",
      },
      {
        id: "vyuziti",
        title: "Jak deku využít v reálném životě",
        content:
          "Zvonek: zvonek = místo, odměna na dece. Hosté psa ignorují první minuty. Návštěvy: deka je bezpečná zóna, kam má pes možnost odejít. Večerní přetažení: deka + lízací podložka + ticho.",
      },
      {
        id: "nejcastejsi-chyby",
        title: "Nejčastější chyby",
        content:
          "Chtít, aby vydržel na dece 10 minut hned první den. Odměňovat jen „lehni“, ne skutečný klid. Používat deku jako trest („běž na místo!“). Deka je pokaždé jinde (na začátku držte stejné místo).",
      },
    ],
    faq: [
      { question: "Mám psa na dece fixovat vodítkem?", answer: "Ne na začátku. Cílem je dobrovolnost." },
      { question: "Co když z deky odchází?", answer: "Zkraťte dobu a odměňujte častěji." },
      { question: "Můžu deku přesunout?", answer: "Ano, ale až když návyk drží, a dělejte to postupně." },
      { question: "Jak často trénovat?", answer: "1–3 minuty denně stačí, ale pravidelně." },
    ],
  },
  {
    id: 11,
    slug: "jak-poznat-seriozniho-chovatele-bolonka",
    title: "Jak poznat seriózního chovatele bolonky",
    seoTitle: "Jak poznat seriózního chovatele bolonky: checklist a otázky pro zájemce",
    metaDescription:
      "Praktický seznam toho, na co se ptát a co sledovat u chovatele bolonky: socializace, podmínky, smlouva, transparentnost, zdraví a podpora po odběru.",
    excerpt:
      "Když si vybíráte štěně, vybíráte si i start do života: genetiku, rané prostředí, socializaci i přístup chovatele. Tady je přehledný checklist, podle kterého rychle poznáte, jestli jednáte se seriózním chovatelem.",
    category: "O plemeni",
    readTime: "8 min",
    date: "22. ledna 2025",
    icon: ShieldCheck,
    canDoBox: [
      "Ptejte se na konkrétní plán socializace",
      "Žádejte transparentnost o prostředí a psech",
      "Očekávejte podporu i po odběru štěněte",
    ],
    vetBox: [
      "Nátlak na rychlé rozhodnutí nebo zálohu = varovný signál",
      "Žádné informace o prostředí nebo rodičích = varovný signál",
      "Neochota odpovídat na otázky = varovný signál",
      "Při jakýchkoli pochybnostech o zdravotním stavu štěněte po odběru nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "transparentnost",
        title: "1) Transparentnost: ukazuje chovatel své psy a prostředí?",
        content:
          "Seriózní chovatel má dohledatelné informace o psech (fotky, původ, výsledky, povaha), otevřeně popíše, jak štěňata vyrůstají, a nevyhýbá se otázkám. Varovné signály: „neptejte se, hlavně pošlete zálohu“, žádné fotky prostředí, nátlak na rychlé rozhodnutí.",
      },
      {
        id: "socializace",
        title: "2) Socializace a režim: co konkrétně chovatel dělá?",
        content:
          "Ptejte se: Jak štěňata seznamujete s běžným chodem domácnosti? Zvykáte je na manipulaci (tlapky, kartáč, uši)? Jak řešíte klid a spánek? Seriózní odpověď je konkrétní (denní rutina, krátké podněty, klidový režim), ne jen obecné „socializujeme“.",
      },
      {
        id: "zdravi",
        title: "3) Zdraví: co je standard a co je navíc",
        content:
          "U malých plemen dává smysl řešit: preventivní prohlídky, plán očkování a odčervení, konzultace k zubům, kondici, pohybu a případně zdravotní vyšetření rodičů. Seriózní chovatel bude umět vysvětlit, co sleduje a proč.",
      },
      {
        id: "smlouva",
        title: "4) Smlouva, předání, dokumenty",
        content:
          "Seriózní chovatel předává štěně s jasnou smlouvou, dá vám instrukce k režimu, krmení a péči a zajímá se, kam štěně jde (ne komukoli). Varovné signály: žádná smlouva, nejasné informace, ochota předat štěně hned bez ohledu na věk.",
      },
      {
        id: "podpora",
        title: "5) Podpora po odběru: tohle je obrovský rozdíl",
        content:
          "Kvalitní chovatel nekončí předáním. Nabízí radu k čistotě, samotě, výchově, pomoc při prvních problémech a lidskou, neodsuzující komunikaci.",
      },
      {
        id: "cena",
        title: "6) Cena: levné štěně bývá drahé později",
        content:
          "V ceně bývá chov, péče o matku, krmení, veterinární péče, čas socializace, dokumenty, administrativa a hlavně odpovědnost. Nejde o to, aby bylo štěně nejdražší. Jde o to, aby bylo poctivě odchované.",
      },
      {
        id: "checklist",
        title: "Checklist (rychlá verze)",
        content:
          "✅ ukázané prostředí a způsob odchovu ✅ konkrétní plán socializace a manipulace ✅ smlouva a jasné podmínky předání ✅ chovatel se ptá na váš režim (samota, děti, zkušenosti) ✅ podpora po odběru ⚠️ nátlak, tajnosti, „rychle poslat zálohu“, neochota odpovídat",
      },
    ],
    faq: [
      {
        question: "Jak poznám, že jde o podvodníka?",
        answer: "Nátlak, neochota ukázat prostředí, žádné dokumenty, podezřele nízká cena.",
      },
      {
        question: "Je důležitý průkaz původu?",
        answer: "Ano, je to doklad o původu a kontrole chovu. Není to ale záruka povahy.",
      },
      { question: "Mohu navštívit chovatele předem?", answer: "Seriózní chovatel návštěvu po domluvě obvykle umožní." },
      {
        question: "Co když chovatel nechce odpovídat?",
        answer: "Varovný signál. Seriózní chovatel se otázkám nevyhýbá.",
      },
    ],
  },
  {
    id: 12,
    slug: "zuby-bolonka-cisteni-plan",
    title: "Zuby u bolonky: 14denní plán na čištění bez boje",
    seoTitle: "Zuby bolonky: jak začít čistit bez boje (14denní plán pro začátečníky)",
    metaDescription:
      "Jednoduchý návykový plán na čištění zubů u bolonky: postup po vteřinách, pomůcky, motivace, chyby a kdy řešit veterináře.",
    excerpt:
      "U malých plemen jsou zuby téma, které se vyplatí řešit včas. Ne proto, abyste měli dokonalého psa, ale protože pravidelná péče umí ušetřit bolesti i veterinární zákroky. A ano — dá se to naučit klidně a bez boje.",
    category: "Péče",
    readTime: "7 min",
    date: "20. ledna 2025",
    icon: Sparkles,
    canDoBox: [
      "Postup po vteřinách – nejdřív spolupráce, pak čištění",
      "Psí pasta bez lidských sladidel",
      "Kratší intervaly jsou lepší než dlouhé zápasy",
    ],
    vetBox: [
      "Zápach z tlamy, krvácení dásní = veterinář",
      "Bolest při jídle, pouštění hraček = veterinář",
      "Viditelný zubní kámen nebo otok = veterinář",
      "Při jakýchkoli pochybnostech nečekejte a kontaktujte veterináře. Lepší zbytečný telefonát než neštěstí.",
    ],
    sections: [
      {
        id: "proc-dulezite",
        title: "Proč je u bolonky péče o zuby důležitá",
        content:
          "Malá tlama, často těsnější zuby a sklon k tvorbě zubního kamene znamenají, že prevence dává velký smysl. Nejvíc funguje krátké, pravidelné čištění, zvykání od štěněte, klid a spolupráce.",
      },
      {
        id: "pomucky",
        title: "Pomůcky (jednoduše)",
        content:
          "Psí zubní pasta (bez lidských sladidel), malý měkký kartáček / prstový kartáček (na start), pamlsky na odměnu (mini), klidné místo (ideálně deka). Neřešte první týden dokonalé vyčištění. Řešte nácvik spolupráce.",
      },
      {
        id: "14denni-plan",
        title: "14denní plán (po vteřinách, bez tlaku)",
        content: "Postupný plán, který buduje spolupráci.",
        subsections: [
          {
            title: "Dny 1–3: pasta je dobrá",
            content: "Jen ochutnání pasty z prstu. 5–10 vteřin, 1× denně. Cíl: pes se těší, ne utíká.",
          },
          {
            title: "Dny 4–6: dotyk zubů prstem",
            content: "Prst s pastou na špičáky a přední zuby. 5–15 vteřin. Odměna, konec.",
          },
          {
            title: "Dny 7–9: prstový kartáček / gáza",
            content: "1–2 jemné tahy po zubech. Jen přední část, žádné „lovení“ vzadu. Odměna, konec.",
          },
          {
            title: "Dny 10–12: kartáček (krátce)",
            content:
              "Měkký kartáček, 5–10 vteřin. Zaměřit se na vnější stranu zubů (tam se plak drží nejčastěji). Odměna, konec.",
          },
          {
            title: "Dny 13–14: prodlužování",
            content: "Přidat pár vteřin. Stále raději kratší, ale klidné.",
          },
        ],
      },
      {
        id: "moc-rychle",
        title: "Jak poznáte, že jdete moc rychle",
        content:
          "Pes uhýbá hlavou, ztuhne, olizuje se, snaží se odejít. To není vzdor. To je informace. Zkraťte krok a vraťte se o 1–2 dny zpět.",
      },
      {
        id: "motivace",
        title: "Co může pomoct, když motivace kolísá",
        content:
          "Dělat to ve stejný čas (např. po večeři). Odměna, kterou má pes opravdu rád. Kratší intervaly (klidně 5 vteřin je úspěch).",
      },
      {
        id: "kdy-veterinar",
        title: "Kdy řešit veterináře",
        content:
          "Zápach z tlamy, krvácení dásní. Bolest při jídle, pouštění hraček. Viditelný kámen nebo otok. Štěně, které má výrazně špatný dech dlouhodobě.",
      },
    ],
    faq: [
      { question: "Jak často čistit?", answer: "Ideálně pravidelně (čím častěji, tím kratší a snazší to obvykle je)." },
      { question: "Pomůžou dentální pamlsky místo kartáčku?", answer: "Jsou doplněk, ale kartáček bývá nejúčinnější." },
      {
        question: "Co když pes pastu nesnáší?",
        answer: "Zkuste jinou příchuť nebo začněte jen dotykem bez pasty a přidejte ji později.",
      },
      { question: "Mám držet tlamu násilím?", answer: "Ne. Cíl je spolupráce, ne zápas." },
    ],
  },
];

export const categories = ["Všechny", "Výchova", "Životní styl", "Péče", "Výživa", "Zdraví", "O plemeni"];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};
