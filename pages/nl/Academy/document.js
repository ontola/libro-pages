const asset = (path) => url(`https://dptr8y9slmfgv.cloudfront.net${path}`);

[
  {
    '@id': 'https://argu.localdev/academy',
    [rdfx.type]: argu.Book,
    [schema.image]: asset('/academy/images/header.svg'),
    [schema.name]: 'Argu Academy',
    [schema.title]: 'Academy voor gemeenten',
    [schema.contentUrl]: asset('/academy/documents/argu-academy.pdf'),
    [ontola.navigationsMenu]: {
      [rdfx.type]: ontola.MenuItem,
      [ontola.menuItems]: seq([
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.ariaLabel]: "Logo",
            [ontola['format/svg']]: asset("/sales/images/argu-logo.svg"),
            [ontola['format/png']]: asset("/sales/images/argu-logo.png")
          },
          [schema.isPartOf]: url("https://argu.localdev/academy"),
          [schema.name]: "Argu",
          [ontola.href]: url("https://argu.localdev/academy"),
        },
      ]),
    },
    [argu.chapters]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.localdev/academy/online-participatie'),
      [rdfx.ns('_02')]: url('https://argu.localdev/academy/trajectmanagement'),
    },
    [schema.text]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.H1,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Welkom!'
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Met de Argu academy leer je alles over (online) participatie. Onze kennis en ervaring met meer dan 150 online participatietrajecten is hier gebundeld. De inhoud wordt regelmatig geüpdatet om nieuwe inzichten te delen.',
            },
          ]),
        },
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Hoe werkt de academy',
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Deze academy bestaat uit twee thema’s. Je kan meer leren over online participatie door te starten met de informatie onder ‘online participatie’. Daarnaast kan je onder ‘trajectmanagement’ meer lezen over de fasen binnen een participatietraject en geven wij handige tips en handleidingen.',
            },
          ]),
        },
      ])
    }
  },
  // CHAPTER: Online Participatie
  {
    '@id': 'https://argu.localdev/academy/online-participatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Online participatie',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.ns('icon')]: 'comments',
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Wat is participatie? Wat zijn de vormen van online participatie en de verschillen met offline?',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'In dit hoofdstuk worden deze vragen behandeld. Daarnaast vertellen wij meer over de verschillende participatie instrumenten die wij bieden. Dit doen wij door middel van voorbeelden, video’s en handige tips voor een optimaal resultaat.',
            }, // END Text
          ]),
        }, // END P
      ]),
    },
    [argu.subChapters]: seq([
      url('https://argu.localdev/academy/online-participatie/wat-is-participatie'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten'),
    ]),
  },
  // CHAPTER: Wat is participatie?
  {
    '@id': 'https://argu.localdev/academy/online-participatie/wat-is-participatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Wat is participatie',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Participatie (of vaak burgerparticipatie genoemd) is een proces waarbij je een bepaalde doelgroep via communicatiekanalen betrekt bij een of meerdere onderwerpen. Vaak zijn er verschillende doelen van participatie:',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Informatie verstrekken over (mogelijke) veranderingen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Algemene betrokkenheid creëren rondom een onderwerp',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Draagvlak creëren voor een voorstel of denkrichting',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Ideeën verzamelen waarmee een probleem opgelost kan worden',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Een beeld krijgen van het draagvlak voor een of meerdere plannen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Argumenten en meningen verzamelen voor bepaalde plannen of ideeën',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Mensen inspraak geven in een besluitvormingsproces',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Vertrouwen wekken door open kaart te spelen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Ondervertegenwoordigde groepen betrekken',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    },
    [argu.subChapters]: seq([
      url('https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-is-online-participatie'),
      url('https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-zijn-de-verschillen-tussen-online-en-fysieke-participatie'),
      url('https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-is-beter-online-of-fysieke-participatie'),
    ]),
  },
  // CHAPTER: Wat is online participatie
  {
    '@id': 'https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-is-online-participatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Wat is online participatie?',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Online participatie houdt in dat een digitaal communicatiemiddel wordt ingezet om mensen te bereiken en te betrekken bij een beleidsthema waarbij om inspraak gevraagd wordt. ',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Welke vormen van online participatie zijn er?',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Er zijn verschillende communicatiekanalen en manieren waarmee je een communicatiekanaal kunt inzetten om mensen te betrekken bij een onderwerp. Voor het gemak noemen we dit participatie-instrumenten. Je kunt participatie-instrumenten indelen in interactieve en niet-interactieve instrumenten. Bij interactieve instrumenten kunnen deelnemers elkaars inbreng zien of horen en daarop reageren. Zo kunnen mensen inhaken en voortborduren op elkaars ideeën. Over het algemeen is het eenvoudiger om een niet-interactief participatie-instrument in te zetten.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Niet-interactieve participatie-instrumenten',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.A,
                  [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/maatwerk-en-planning'),
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Polls',
                    }, // END Text
                  ]),
                }, // END A
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.A,
                  [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/enquete'),
                  [elements.children]: seq([
                    {
                      // TODO: Add Link
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Enquêtes',
                    }, // END Text
                  ]),
                }, // END A
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Interactieve participatie-instrumenten',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Online ideeën verzamelen',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Er zijn verschillende vormen van de “ideeënbus”. De essentie is dat mensen ideeën kunnen plaatsen op een website waar andere mensen op kunnen reageren. Zo kan dialoog ontstaan',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Met Argu kun je mensen oproepen om ideeën in te dienen voor een specifiek probleem. Ook kunnen mensen zelf ideeën plaatsen zonder dat daar een specifiek probleem bij hoort.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Online meetings via Teams etc.',
                    }, // END Text

                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Tijdens de corona-uitbraak kwamen veel organisaties erachter dat een online bijeenkomst door middel van videochat een redelijk alternatief is voor een fysieke bijeenkomst',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Via Teams, Zoom, Google en vergelijkbare tools kun je met potentieel grote groepen in gesprek gaan. Naast het geven van een live presentatie kun je met mensen in gesprek. Ook kun je mensen laten reageren via de chat. Dat kan nuttig zijn omdat potentieel iedereen die iets wil zeggen iets kan typen via de chat. Bij een fysieke bijeenkomst met een grote groep is het vrijwel onmogelijk om iedereen aan het woord te laten.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    }
  },
  // CHAPTER: Wat zijn de verschillen tussen online en fysieke participatie?
  {
    '@id': 'https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-zijn-de-verschillen-tussen-online-en-fysieke-participatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Wat zijn de verschillen tussen online en fysieke participatie?',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'De belangrijkste verschillen tussen online en fysiek zijn:',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bij fysieke participatie is er vrijwel altijd een beperking op het aantal mensen dat kan deelnemen. Bij een inspraakavond kun je vaak niet meer dan 50 mensen toelaten in een zaal. Online heb je in principe geen beperking in het aantal deelnemers. Dat geeft de mogelijkheid om meer mensen te betrekken en een representatiever beeld te krijgen. Online trajecten waarbij meer dan 1.000 mensen deelnemen komen regelmatig voor.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Deelnemen aan een fysieke inspraakbijeenkomst kost de deelnemers tijd en moeite. Online participatie is een stuk laagdrempeliger omdat mensen vanuit huis of onderweg kunnen deelnemen via hun telefoon, tablet of laptop op een moment dat het ze zelf uitkomt.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Doordat online laagdrempelig en toegankelijk is bereik je meestal meer en / of andere mensen dan de ‘usual suspects’. Dat komt de representativiteit ook ten goede.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bij online participatie is de dynamiek van een gesprek anders. Bij een fysiek gesprek kun je direct reageren op wat iemand zegt en kun je mensen onderbreken. Online zit daar vrijwel altijd meer tijd tussen. Aan de andere kant kun je bij een fysieke bijeenkomst niet iedereen tegelijk laten praten. Online heeft iedereen de mogelijkheid om zijn verhaal te doen of uitgebreid te reageren op een idee van een ander.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Moderatie bij een fysieke bijeenkomst is altijd nodig om mensen het woord te geven en te voorkomen dat mensen door elkaar gaan praten. Het succes van een bijeenkomst hangt sterk af van de moderator. Online is die moderatie nauwelijks tot niet nodig. Online is het vooral belangrijk dat je van te voren goede participatievraagstukken uitwerkt. Lees daarover meer in volgende hoofdstukken.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'De responstijd heeft invloed op de interactie',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bij een fysieke bijeenkomst kun je mensen iets vragen en waarschijnlijk krijg je bijna direct antwoord. Op een online forum duurt het vaak langer voordat je een antwoord krijgt omdat niet iedereen op hetzelfde moment online is.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Het voordeel van fysiek is dat je vrij snel kunt doorvragen en tot de kern van iets kunt komen omdat mensen snel reageren op een vraag. Online hebben mensen iets meer tijd om na te denken over een antwoord met onderbouwing, wat ook weer voordelen heeft.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    }
  },
  // CHAPTER: Wat is beter: online of fysieke participatie?
  {
    '@id': 'https://argu.localdev/academy/online-participatie/wat-is-participatie/wat-is-beter-online-of-fysieke-participatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Wat is beter: online of fysieke participatie?',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Online en fysiek hebben beide voor- en nadelen. Elk participatietraject is anders en het is dus ook niet te zeggen dat online of fysiek beter is. Door online en fysiek te combineren kun je een heel krachtig participatietraject neerzetten.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'De belangrijkste voordelen van online en fysiek die je wil benutten zijn:',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Het zo laagdrempelig mogelijk maken voor mensen om deel te nemen. Voor de meeste mensen is dat online, voor sommige mensen is dat fysiek. Biedt naast een bijeenkomst dus ook online mogelijkheden om mee te denken en andersom.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Zorg dat het centrale informatiepunt online is. Als je een fysieke bijeenkomst organiseert is het verstandig om de inzichten uit die bijeenkomst te delen op het online platform waar andere mensen ook op kunnen reageren. Zo voorkom je dat de online deelnemers en de fysieke deelnemers op verschillende ideeën en vragen gaan reageren.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    }
  },
  // CHAPTER: Participatie-instrumenten
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Participatie-instrumenten',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Argu beschikt over meerdere participatie-instrumenten waarmee vrijwel elke vorm van interactie kan worden ingezet. In de volgende hoofdstukken worden onderstaande participatie-instrumenten besproken. Klik op één van de participatie-instrumenten om verder te gaan.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Grid,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-uitdaging',
              [ontola.ariaLabel]: 'Uitdaging. Deel een vraagstuk, verzamel ideeën en neem een besluit.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/uitdaging'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Ideeën verzamelen uitgebeeld doormiddel van lampen in een kom.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-uitdaging.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-scenario-discussie',
              [ontola.ariaLabel]: 'Scenario discussie. Als je mensen wil laten kiezen tussen een aantal scenario\'s.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/scenario-discussie'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Verschillende keuzes uitgebeeld door een geordende lijst met drie lampjes.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-scenario-discussie.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-idee',
              [ontola.ariaLabel]: 'Idee. Verzamel losse initiatieven en ideeën.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/idee'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Een motie uitgebeeld door een kaart met de volgende drie knoppen: Een groene duim omhoog, een grijze pauze knop en een rode duim omlaag.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-idee.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-enquete',
              [ontola.ariaLabel]: 'Enquête. Stel een lijst samen van gesloten en open vragen.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/enquete'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Een enquête uitgebeeld met de silhouetten van verschillende open en meerkeuzen vragen.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-enquete.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-topic',
              [ontola.ariaLabel]: 'Topic. Start een gesprek over een bepaald onderwerp.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/topic'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Een gesprek uitgebeeld door meerdere silhouetten van reacties op een bericht.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-topic.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-traject',
              [ontola.ariaLabel]: 'Traject. Betrek mensen over een langere periode.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/traject'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Een traject uitgebeeld door genummerde pijlen die de stappen van het traject voorstellen met daaronder het silhouet van een gesprek.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-traject.svg'),
                }, // END Image
              ]),
            }, // END A
            {
              [rdfx.type]: elements.A,
              [argu.trackingId]: 'instrumenten-begrotingstool',
              [ontola.ariaLabel]: 'Begrotingstool. Als je mensen budget wil laten verdelen.',
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/begrotingstool'),
              [elements.children]: seq([
                {
                  [rdfx.type]: ontola.PictureSet,
                  [ontola.alt]: 'Het toekennen van een budget uitgebeeld door een lijst met 3 prijzen, 10000 euro, 12500 euro en 5000 euro. Aan de zijkant staat een pictogram van een winkelwagentje.',
                  [ontola.ns('format/svg')]: asset('/academy/images/instrumenten-budgettool.svg'),
                }, // END Image
              ]),
            }, // END A
          ]),
        },
      ]),
    },
    [argu.subChapters]: seq([
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/uitdaging'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/scenario-discussie'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/idee'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/enquete'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/topic'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/traject'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/begrotingstool'),
      url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/maatwerk-en-planning'),
    ]),
  },
  // CHAPTER: Uitdaging
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/uitdaging',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Uitdaging',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een Uitdaging - ook wel participatievraagstuk genoemd - is een tool waarmee je mensen oproept om met concrete ideeën te komen voor het oplossen van een probleem. Dit instrument is bedacht door Argu en zorgt ervoor dat je optimaal kunt samenwerken aan het oplossen van complexe vraagstukken met grote groepen mensen.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'In de Uitdaging wordt een probleem beschreven en mensen worden gevraagd om daaronder ideeën te plaatsen. Vervolgens kan men voor- en nadelen plaatsen onder het idee.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Img,
          [elements.ns('float')]: 'right',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Het concept van een uitdaging uitgebeeld. Boven een donkerblauwe rechthoek met de tekst: “Uitdaging”, daaronder een lichtblauwe rechthoek met de tekst: “Idee” en aan weerszijden een groene duim omhoog en een rode duim omlaag, daaronder twee groenen rechthoeken met de tekst: “voordeel” en twee rode rechthoeken met de tekst: “Nadeel” ernaast.',
            [ontola.ns('format/png')]: asset('/academy/images/uitdaging0.png'),
            [ontola.ns('format/webp')]: asset('/academy/images/uitdaging0.webp'),
            [ontola.ns('format/avif')]: asset('/academy/images/uitdaging0.avif'),
          },
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Ook kun je voor of tegen een idee stemmen, en stemmen op de voor- en nadelen die daaronder staan. De voor- en nadelen staan gesorteerd op meeste stemmen. Zo wordt binnen één pagina zichtbaar welke ideeën er zijn om een probleem op te lossen, hoeveel draagvlak daarvoor is en wat de belangrijkste voor- en nadelen van ieder idee zijn. Zo blijft de nuance in beeld.',
            },
          ]),
        }, // END P

        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een belangrijk voordeel van deze structuur is dat alle deelnemers een prikkel hebben om iets inhoudelijks bij te dragen aan de discussie. Negatieve of nutteloze reacties hoeven niet verwijderd te worden maar komen automatisch onderaan te staan als andere deelnemers er niet op stemmen.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'Een schermafbeelding	van een uitdaging met de titel: “Hoe willen we het Schildplein inrichten?”. Onder de uitdaging staat een idee met de titel: “Markt op zaterdag” en een plaatje van een fruitkraam. Het idee heeft 21 stemmen voor, drie anders en zeven tegen. Onder het idee staan de voordelen: “Goedkoop”, “Sfeervol” en “Hoort erbij”. Daarnaast staan de nadelen: “Stank”, “Maakt troep” en “Genoeg andere winkels”. Het idee heeft 10 reacties.',
          [ontola.ns('format/jpg')]: asset('/academy/images/uitdagin1.jpg'),
          [ontola.ns('format/webp')]: asset('/academy/images/uitdagin1.webp'),
          [ontola.ns('format/avif')]: asset('/academy/images/uitdagin1.avif'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Het uitwerken van een participatievraagstuk kan ingewikkeld zijn. Het is verstandig om in twee stappen te werken. Werk eerst de vraag en achtergrondinformatie uit en voeg daarna zelf alvast een aantal ideeën toe die het onderliggende probleem kunnen oplossen. Zo werk je een oplossingsgerichte dialoog uit waar inwoners aan mee kunnen doen.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Hoe werk je een goede Uitdaging uit?',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Note,
          [elements.color]: '#BFBFBF',
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H3,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Voorbeeld',
                },
              ]),
            }, // END H3
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [elements.bold]: true,
                  [schema.text]: 'Titel:',
                },
              ]),
            }, // END P
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [elements.align]: 'center',
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Hoe kunnen we als gemeente verduurzamen?',
                },
              ]),
            }, // END P
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [elements.bold]: true,
                  [schema.text]: 'Toelichting:',
                },
              ]),
            }, // END P
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [elements.align]: 'center',
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'In het kader van de nota duurzaamheid 2020 zijn we als gemeente op zoek naar de beste manieren om te verduurzamen. We zoeken concrete ideeën op het gebied van duurzame energie, het tegengaan van verspilling en het verminderen van CO2-uitstoot.',
                },
              ]),
            }, // END P
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [elements.align]: 'center',
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Denk met ons mee: hoe kunnen we verduurzamen? Deel jouw idee!',
                },
              ]),
            }, // END P
          ]),
        }, // END Note
        {
          [rdfx.type]: elements.H3,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Tips voor titels:',
            },
          ]),
        }, // END H3
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Meestal is een Uitdaging een open vraag: wie, wat, waar, wanneer, waarom, hoe?',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Hou het concreet:',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.bold]: true,
                              [elements.color]: '#C91729',
                              [schema.text]: 'Niet: ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.italic]: true,
                              [schema.text]: '“wat moet er in het nieuwe beleidsplan komen?”',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.bold]: true,
                              [elements.color]: '#00882C',
                              [schema.text]: 'Wel: ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.italic]: true,
                              [schema.text]: '“welke ideeën heb jij voor het de nieuwe inrichting van het plein?”',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.H3,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Tips voor de tekst in de toelichting:',
            },
          ]),
        }, // END H3
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Zorg dat de toelichting duidelijk maakt wat je van mensen nodig hebt',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Welke kaders / randvoorwaarden geven we mee?',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Waaraan moet een voorstel / idee voldoen?',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Wat is mogelijk en wat niet?',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Je kunt ook afbeeldingen en filmpjes toevoegen in de toelichting. Zorg dat het beeldmateriaal de tekst ondersteunt, in plaats van andersom.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Sluit af met een oproep tot actie. Bijvoorbeeld: “deel jouw idee!”',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.H3,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Zelf ideeën toevoegen',
            },
          ]),
        }, // END H3
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Om ervoor te zorgen dat je zoveel mogelijk interactie krijgt op jouw Uitdaging is het slim om zelf alvast een paar ideeën toe te voegen onder jouw Uitdaging. Per idee plaats je ook voor- en nadelen.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Uit gebruikersstatistieken van Argu blijkt dat er veel ideeën en reacties worden toegevoegd onder een Uitdaging als daar al ideeën onder staan. Waarschijnlijk heeft dat de volgende redenen:',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Het is makkelijker voor mensen om op een bestaand idee te stemmen dan zelf een idee te bedenken en te plaatsen.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Met goed uitgewerkte ideeën wordt het voor nieuwe gebruikers snel duidelijk hoe het platform werkt: ideeën, stemmen, voor- en nadelen, stemmen op voor- en nadelen.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Met uitgewerkte ideeën krijgen mensen waarschijnlijk inspiratie om te reageren of om zelf een idee toe te voegen. Zo help je mensen dus goed op weg.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Veel mensen zijn bang om ideeën te plaatsen onder hun eigen Uitdaging. Vaak is er de angst dat je dan teveel ‘stuurt’. Uiteraard is het niet de bedoeling om mensen van je eigen mening te proberen overtuigen. Maar als je feitelijke informatie deelt, kun je veel toevoegen aan het participatieproces. Je helpt mensen dan aan goede informatie om hun standpunt op te baseren. En statistisch gezien krijg je meer reacties en interactie met je doelgroep.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [elements.bold]: true,
              [schema.text]: 'Bijvoorbeeld:',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Centrale vraag: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Hoe kunnen we als stad verduurzamen?”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 1: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Zonneweides subsidiëren in de polder”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Zorgt voor meer duurzame energie',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Neemt veel plek in beslag waar ook woningen gebouwd kunnen worden',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 2: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Windmolen plaatsen aan de rand van de stad”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Levert veel duurzame energie op',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Relatief weinig mensen hebben er last van',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Veel mensen vinden het niet mooi',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Dalende waarde omliggende woningen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 3: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Duurzame energie inkopen bij externe leveranciers / landen”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Eenvoudige manier om te verduurzamen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Kan snel gerealiseerd worden',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Passieve manier van verduurzaming; je voegt weinig toe',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Afhankelijkheid van leveranciers / andere landen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    },
  },
  // CHAPTER: Scenario discussie
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/scenario-discussie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Scenario discussie',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een variatie op de Uitdaging is een scenario discussie. Het is technisch gezien hetzelfde als een Uitdaging maar de invulling van teksten is anders. Een scenario discussie is een slimme manier om mensen te laten kiezen uit opties die ieder hun eigen voor- en nadelen hebben.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Bedenk dat mensen aanvankelijk niet in scenario\'s denken. Als je mensen vraagt: wat vind jij belangrijk als je brood koopt? - dan hoop je eigenlijk dat mensen reacties geven over de zaken die zij het belangrijkst vinden.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Maar theoretisch levert deze vraag een lange lijst met antwoorden op waaruit blijkt dat mensen alles belangrijk vinden. Waarschijnlijk krijg je antwoorden als: de smaak moet goed zijn, de verpakking moet mooi zijn, de prijs moet laag zijn, de houdbaarheid moet lang zijn, het moet duurzaam zijn. En het is natuurlijk onmogelijk om dat allemaal tegelijk te realiseren.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Om nog iets dieper in de psychologie van de mens te duiken: mensen willen zoveel mogelijk geluk, zo min mogelijk leed, de oplossing moet gratis zijn en de oplossing moet morgen uitgevoerd zijn. En dat is natuurlijk in de meeste gevallen niet mogelijk.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een goede manier om hiermee om te gaan is door een open vraag centraal te stellen en daarbij zelf alvast verschillende scenario’s voor te leggen. Per scenario plaats je ook voor- en nadelen. ',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [elements.bold]: true,
              [schema.text]: 'Voorbeeld:',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Centrale vraag: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Hoe kunnen we als stad verduurzamen?”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 1: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Zonneweides subsidiëren in de polder”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Zorgt voor meer duurzame energie',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Neemt veel plek in beslag waar ook woningen gebouwd kunnen worden',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 2: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Windmolen plaatsen aan de rand van de stad”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Levert veel duurzame energie op',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Relatief weinig mensen hebben er last van',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Veel mensen vinden het niet mooi',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Dalende waarde omliggende woningen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Idee 3: ',
            },
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: '“Duurzame energie inkopen bij externe leveranciers / landen”',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Eenvoudige manier om te verduurzamen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'pro',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Kan snel gerealiseerd worden',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Passieve manier van verduurzaming; je voegt weinig toe',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.variant]: 'con',
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Afhankelijkheid van leveranciers / andere landen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Door op deze manier verschillende scenario’s uiteen te zetten geef je mensen de belangrijkste informatie om hun keuze op te baseren. Ook maak je duidelijk dat elk scenario voor- en nadelen heeft.',
            },
          ]),
        }, // END P
      ]),
    },
  },
  // CHAPTER: Idee
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/idee',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Idee',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Wanneer zet je een idee in?',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als je draagvlak wil meten voor één voorstel',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als je wil peilen waarom mensen voor of tegen een bepaald idee zijn',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'Een schermafbeelding	van een idee met de titel: “Plein autovrij, garage ondergronds” en een plaatje van een parkeergarage. Het idee heeft twintig stemmen voor, drie anders en zes tegen. Onder het idee staan de voordelen: “Best of both worlds”, “Meer parkeerplaatsen” en de nadelen: “Kost veel geld”. Het idee heeft drie reacties.',
          [ontola.ns('format/jpg')]: asset('/academy/images/idee0.jpg'),
          [ontola.ns('format/webp')]: asset('/academy/images/idee0.webp'),
          [ontola.ns('format/avif')]: asset('/academy/images/idee0.avif'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een idee op Argu is een item waar je op kunt stemmen en waar je voor- en nadelen onder kunt plaatsen. Die worden naast elkaar getoond. Op voor- en nadelen kun je ook stemmen zodat aan beide kanten naar boven filtert waar de belangrijkste voor- en nadelen zijn.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Tip,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H2,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Tip!',
                },
              ]),
            }, // END H2
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Veel mensen die Argu voor het eerst gebruiken beginnen met het plaatsen van een idee. Maar vaak is het slim om te beginnen met de achterliggende vraag van het idee: de uitdaging. In plaats van te peilen “bent u voor of tegen een windmolen?” kun je beter beginnen met het plaatsen van een Uitdaging: “hoe kunnen we het beste verduurzamen?”. Onder de Uitdaging kun je dan het idee “windmolens bouwen” plaatsen, met de bijbehorende voor- en nadelen. Zo geef je mensen de gelegenheid om met betere ideeën te komen om het onderliggende probleem op te lossen. Dat leidt meestal tot betere resultaten. ',
                },
              ]),
            }, // END P
          ]),
        }, // END Tip
      ]),
    },
  },
  // CHAPTER: Enquête
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/enquete',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Enquête',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Wanneer zet je een enquête in?',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als je behoefteonderzoek wil doen ',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als je kwaliteitsmetingen wil doen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als je een peiling wil doen over een simpel onderwerp. Bijvoorbeeld: “De gemeente moet meer ruimte bieden voor terrassen in het uitgaansgebied”.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Als het belangrijk is om antwoord te krijgen op veel vragen tegelijk.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Met een vragenlijst kun je onderzoeken wat goed gaat en wat beter kan. Met gesloten vragen kun je bepaalde aannames testen. Met Likert-schalen kun je kwaliteitsmetingen doen.',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Video,
          [ontola.href]: asset('/academy/videos/enquete.mp4'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Hoewel een enquête nog steeds een van de meest gangbare instrumenten is bij participatietrajecten, zitten er ook nadelen aan enquêtes: het is niet interactief, niet transparant, mensen kunnen niet op elkaars ideeën inhaken en het verwerken van vragen met open antwoorden kost veel tijd. ',
            },
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Voorbeelden van enquêtevragen',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Hoe tevreden bent u met het contact aan de balie?',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: '1 - 5 sterren',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Maakt u gebruik van thuiszorg?',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Ja',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Nee',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Van welke van onderstaande voorzieningen maakt u gebruik?',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'A',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'B',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'C',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'De basis voor het samenstellen van een goede enquête',
            },
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: '(Deze tips zijn samengesteld door ',
            }, // END Text
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url('https://www.onderzoekdoen.nl/enquete-onderzoek/enquete-maken-tips/'),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'onderzoekdoen.nl',
                },
              ]),
            }, // END A
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: ')',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Kort is krachtig. Hoe langer het duurt om een enquête in te vullen, hoe kleiner de kans is dat mensen de hele lijst zullen invullen.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bij een enquête is het belangrijk dat de vragen goed te begrijpen en te beantwoorden zijn. Hieronder een aantal richtlijnen om dit te bewerkstelligen:',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Houd vraag en antwoord kort en bondig',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Stel zoveel mogelijk multiple-choice vragen, benoem de antwoordopties',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Pas taalgebruik aan aan de respondent.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Omschrijf moeilijke begrippen',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Stel concrete vragen',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Vermijd suggestieve vragen',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Vermijd twee vragen ineen',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Vermijd dubbele ontkenning',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Vermijd woorden met emotionele waardes',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Beslis of je een respondent de mogelijkheid geeft tot het geven van een neutraal antwoord of “dwingt” tot het maken van een keuze.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Gebruik zoveel mogelijk dezelfde antwoordschalen (bijvoorbeeld 3-, 4-, 5- of 7-puntsschaal)',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Groepeer vragen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Stel gevoelige vragen aan het eind van de vragenlijst. De respondent is na het beantwoorden van andere vragen eerder geneigd om gevoelige informatie (zoals leeftijd, opleidingsniveau etc.) te delen.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.Note,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [elements.bold]: true,
                  [schema.text]: 'Let op:',
                }, // END Text
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: ' veel mensen die Argu voor het eerst gebruiken beginnen met het bedenken van enquêtevragen terwijl ze eigenlijk een inhoudelijk gesprek willen aangaan met hun doelgroep. En dat werkt beter in de vorm van een Uitdaging, een scenario discussie of een Idee. Enquêtes zijn namelijk niet interactief dus de deelnemers kunnen niet van elkaar zien wat zij hebben ingevuld bij de enquête en dus ook niet op elkaars ideeën inhaken.',
                }, // END Text
              ]),
            }, // END P
          ]),
        }, // END Note
      ]),
    },
  },
  // CHAPTER: Topic
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/topic',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Topic',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een topic is de simpelste vorm van interactie op het platform.',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Note,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Een topic zet je in als je mensen wil laten reageren op een simpele vraag, stelling of oproep.',
                }, // END Text
              ]),
            }, // END P
          ]),
        }, // END Note
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'Een schermafbeelding	van een topic op Argu met de titel: “Welke mooie herinnering heb je aan de wijk of het dorp waar je woont?”. Het topic heeft twee reacties.',
          [ontola.ns('format/png')]: asset('/academy/images/topic0.png'),
          [ontola.ns('format/webp')]: asset('/academy/images/topic0.webp'),
          [ontola.ns('format/avif')]: asset('/academy/images/topic0.avif'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'De volgorde waarin de reacties worden weergegeven is de ‘gemaakt op datum’, waar de meest recent geplaatste reacties bovenaan komen te staan. Bij een Topic is het mogelijk dat gebruikers op elkaars reacties reageren. Daarnaast adviseren wij ook altijd om als gemeente actief te reageren op geplaatste reacties.',
            }, // END Text
          ]),
        }, // END P
      ]),
    },
  },
  // CHAPTER: Traject
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/traject',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Traject',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een traject gebruik je als je mensen over een langere periode wil betrekken. Een traject kenmerkt zich door meerdere fasen die elk een andere invulling hebben. Zo kan je in de eerste fase mensen uitnodigen ideeën in te dienen omtrent een vraagstuk, in een tweede fase worden de ingediende ideeën op haalbaarheid getoetst, in een derde fase nodig je mensen uit te stemmen welke van de haalbare ideeën hun voorkeur naar uitgaat. En tot slot koppel je in de vierde en laatste fase de winnaars terug. ',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'De fasen van een traject op Argu uitgebeeld door 4 naar rechts wijzende pijlen met de getallen één tot en met vier erin. Onder de pijlen staan de namen van de bijbehorende fase. De eerste fase heet: “Ideeën verzamelen”, de tweede heet: “Haalbaarheidscheck”, de derde: “2e stemronde” en de vierde: “Winnaars”.',
          [ontola.ns('format/png')]: asset('/academy/images/traject0.png'),
          [ontola.ns('format/webp')]: asset('/academy/images/traject0.webp'),
          [ontola.ns('format/avif')]: asset('/academy/images/traject0.avif'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Voordelen van een traject',
            }, // END Text
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Creëert overzicht in de vaak lang durende trajecten.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Er kunnen meerdere vormen van participatie worden ingezet.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    },
  },
  // CHAPTER: Begrotingstool
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/begrotingstool',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Begrotingstool',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een tool die vaak in combinatie met een traject wordt ingezet is de begrotingstool. Deze tool stelt je bijvoorbeeld in staat ideeën te (laten) plaatsen waarbij je de bijkomende investering aangeeft. De derde fase (2e stemronde) zoals bij ',
            }, // END Text
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/traject'),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Traject',
                }, // END Text
              ]),
            }, // END A
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: ' omschreven is een goed voorbeeld waar de begrotingstool ingezet kan worden. In de eerste fase zijn mensen uitgenodigd ideeën in te dienen, waarbij in de omschrijving aangegeven diende te worden wat het benodigde budget is. In de derde fase zijn de haalbare ideeën vervolgens nogmaals ter stemming voorgelegd aan de inwoners, maar nu met de uitnodiging om ideeën te selecteren die zij het gunnen. Onderstaand het voorbeeld van de gemeente Langedijk waar inwoners € 75.000,- mochten verdelen over de ideeën. ',
            }, // END Text
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url('https://samenwerkenlangedijk.nl/projects/471'),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Bekijk het platform',
                }, // END Text
              ]),
            }, // END A
          ]),
        }, // END P
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'Een rooster van eerder ingezamelde ideeën met daarbij het benodigde budget om het idee uit te voeren en daarnaast een blauwe knop met een pictogram van een winkelwagentje en de tekst: “Toevoegen”.',
          [ontola.ns('format/jpg')]: asset('/academy/images/budget0.jpg'),
          [ontola.ns('format/webp')]: asset('/academy/images/budget0.webp'),
          [ontola.ns('format/avif')]: asset('/academy/images/budget0.avif'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Als gemeente wil je natuurlijk dat alleen inwoners van de gemeente kunnen meedoen aan de bovengenoemde uitvragen. In dat geval werken wij dan ook met stemcodes. Deze codes kan je als gemeente via brieven verspreiden onder de inwoners waarmee zij toegang krijgen tot de stemming.',
            }, // END Text
          ]),
        }, // END P
      ]),
    },
  },
  // CHAPTER: Maatwerk en planning
  {
    '@id': 'https://argu.localdev/academy/online-participatie/participatie-instrumenten/maatwerk-en-planning',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Maatwerk en planning',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Wij kunnen ons voorstellen dat je naast de genoemde participatie-instrumenten wellicht een andere manier van interactie voor ogen hebt. Neem hiervoor contact met ons op, dan kunnen we je helpen met een maatwerkoplossing.',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Uiteraard zitten wij niet stil! Er wordt momenteel gewerkt aan de volgende instrumenten:',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Swipetool',
            }, // END Text
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Een snelle en eenvoudige manier van participeren die zich uitstekend leent voor mobiel gebruik.',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Poll',
            }, // END Text
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [elements.italic]: true,
              [schema.text]: 'Concept ontwerp',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: ontola.PictureSet,
          [ontola.alt]: 'Een schermafbeelding	van een poll met de titel: “Zou je mee willen doen met een inwonerspanel?”. De drie stem opties zijn: “Ja”, “Nee” en “Hangt van de intensiteit af”. De eerste optie heeft 324 stemmen, de tweede heeft er 19 en de derde 215.',
          [ontola.ns('format/svg')]: asset('/academy/images/maatwerk-en-planning0.svg'),
        }, // END IMAGE
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Stel één gesloten vraag om meningen of draagvlak te peilen',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Dit is verreweg de simpelste manier om een doelgroep te betrekken bij een onderwerp of vraagstuk',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Hoewel het bij sommige polls mogelijk is om je antwoord aan te passen nadat je de uitslag ziet van wat andere mensen hebben ingevuld, is een poll toch een zeer beperkte vorm van interactiviteit',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Sommige poll-tools staan toe dat je ook reacties kunt plaatsen onder de poll. Dat biedt kansen voor meer interactie.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
      ]),
    },
  },
  // CHAPTER: Trajectmanagement
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement',
    [rdfx.type]: argu.Chapter,
    [schema.title]: 'Trajectmanagement',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.ns('icon')]: 'list-ul',
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Introductie trajectbegeleiding"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Een participatietraject is een project met een duidelijke tijdsplanning waarbij een bepaalde doelgroep wordt betrokken bij een of meerdere onderwerpen. In dit onderdeel van de academy leren we je alles over het plannen en uitvoeren van een succesvol participatietraject. Onze kennis en ervaring met meer dan 150 online participatietrajecten is hier gebundeld. De inhoud wordt regelmatig geüpdatet om nieuwe inzichten te delen."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Hoe ziet een online participatietraject er meestal uit?"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "In de volgende hoofdstukken beschrijven we alle stappen die worden gezet bij de meeste online participatietrajecten."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": ""
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        [rdfx.ns('_05')]: {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: sales.Step,
              [schema.name]: 'Platform inrichten',
              [schema.text]: 'In deze fase wordt het platform aangemaakt, collega’s uitgenodigd als beheerder en gezorgd dat het platform past binnen de huisstijl van jouw organisatie.',
              [ontola.href]: url('https://argu.localdev/academy/trajectmanagement/platform-inrichten'),
              [argu.trackingId]: 'stepper-platform-inrichten',
            },
            {
              [rdfx.type]: sales.Step,
              [schema.name]: 'Content uitwerken',
              [schema.text]: 'Nu het vraagstuk helder is, wordt de website ingericht. Zo krijgt iedereen het gevoel van hoe het er uiteindelijk uit komt te zien.',
              [ontola.href]: url('https://argu.localdev/academy/trajectmanagement/content-uitwerken'),
              [argu.trackingId]: 'stepper-content-uitwerken',
            },
            {
              [rdfx.type]: sales.Step,
              [schema.name]: 'Voorbereiden lancering',
              [schema.text]: 'Wij bespreken de eerste versie en passen waar nodig enkele zaken aan. Dit alles met als doel om de betrokkenheid te vergroten.',
              [ontola.href]: url('https://argu.localdev/academy/trajectmanagement/voorbereiding-lancering'),
              [argu.trackingId]: 'stepper-voorbereiding-lancering',
            },
            {
              [rdfx.type]: sales.Step,
              [schema.name]: 'Starten met het traject',
              [schema.text]: 'De website staat klaar om live te gaan en de verbinding te maken met jouw community. Nu komt het aan op het genereren van bezoekers. Wij adviseren jou hierin.',
              [ontola.href]: url('https://argu.localdev/academy/trajectmanagement/start-van-het-traject'),
              [argu.trackingId]: 'stepper-start-van-het-traject',
            },
            {
              [rdfx.type]: sales.Step,
              [schema.name]: 'Rapporteren en evalueren',
              [schema.text]: 'Wij zijn uiteraard net zoals jij benieuwd naar het succes van het traject. Wij evaluaren gezamelijk de gang van zaken en kijken naar de mate van betrokkenheid gedurende het traject.',
              [ontola.href]: url('https://argu.localdev/academy/trajectmanagement/rapportage-en-evaluatie'),
              [argu.trackingId]: 'stepper-rapportage-en-evaluatie',
            },
          ]),
        }, // END P
      },
    },
    [argu.subChapters]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_00')]: url('https://argu.localdev/academy/trajectmanagement/platform-inrichten'),
      [rdfx.ns('_01')]: url('https://argu.localdev/academy/trajectmanagement/content-uitwerken'),
      [rdfx.ns('_02')]: url('https://argu.localdev/academy/trajectmanagement/voorbereiding-lancering'),
      [rdfx.ns('_03')]: url('https://argu.localdev/academy/trajectmanagement/start-van-het-traject'),
      [rdfx.ns('_04')]: url('https://argu.localdev/academy/trajectmanagement/rapportage-en-evaluatie'),
    },
  },
  // CHAPTER: 1. Platform inrichten
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement/platform-inrichten',
    [rdfx.type]: argu.Chapter,
    [schema.title]: '1. Platform inrichten',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "In de eerste fase wordt het platform aangemaakt door een projectbegeleider van Argu. De projectleider van jouw organisatie ontvangt een uitnodigingslink. Als je de link opent wordt gevraagd om een Argu-account aan te maken als je dat nog niet had gedaan. Je Argu-account is persoonlijk en je kunt dan ook je eigen voor- en achternaam gebruiken. Vervolgens heb je beheerrechten gekregen van jouw organisatie."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Met beheerrechten kun je alle content aanpassen en / of verwijderen, kun je statistieken over het gebruik inzien en kun je andere collega’s beheerrechten geven. "
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Acties en tips:"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Deel de uitnodigingslink met jouw betrokken collega’s. Je kunt een onbeperkt aantal beheerders uitnodigen."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Zoek goede afbeeldingen voor het "
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<https://ns.ontola.io/elements#bold>": true,
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "logo"
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": " van je organisatie, de "
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
                      "<https://ns.ontola.io/elements#bold>": true,
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "omslagfoto (coverfoto)"
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": " van de website en als achtergrond van alle content die je op het platform wil plaatsen."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Kies het liefst voor "
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                              "<https://ns.ontola.io/elements#bold>": true,
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "grote, hoge resolutie foto’s"
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": " waar "
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
                              "<https://ns.ontola.io/elements#bold>": true,
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "geen teksten in beeld"
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": " staan. De website is namelijk responsive en schaalt dus mee naar de schermgrootte van de gebruiker. Wanneer er teksten in de afbeelding staan, is de kans groot dat het niet goed wordt uitgelijnd."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Let op dat de meeste foto’s auteursrechtelijk beschermd zijn. Kies dus voor foto’s uit de beeldbank van jouw organisatie of maak gebruik van Creative Commons afbeeldingen van het internet. Bijvoorbeeld via "
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                              "<https://ns.ontola.io/core#href>": url("http://Pexels.com"),
                              "<https://ns.ontola.io/elements#children>": {
                                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                                  "<http://schema.org/text>": "Pexels.com"
                                }
                              }
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": " of "
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                              "<https://ns.ontola.io/core#href>": url("https://www.google.com/search?q=zoek&tbm=isch&hl=nl&tbs=il:cl&sa=X&ved=0CAAQ1vwEahcKEwjw7eCczJbuAhUAAAAAHQAAAAAQAw&biw=2545&bih=1361"),
                              "<https://ns.ontola.io/elements#children>": {
                                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                                  "<http://schema.org/text>": "Google Images waarbij je filtert op rechtenvrije foto’s"
                                }
                              }
                            },
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Logo wijzigen"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Instellingen → Algemeen → Thema → Profielfoto"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
          [rdfx.type]: elements.Video,
          [ontola.href]: asset('/academy/videos/logo-wijzigen.mp4'),
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Omslagfoto wijzigen"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Op de pagina waarvan je de omslagfoto wil bewerken klik je op de drie bolletjes naast de paginatitel (zie onderstaande afbeelding) → Instellingen → bij coverfoto kan je de afbeelding toevoegen of wijzigen."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": ""
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
          [rdfx.type]: elements.Img,
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'De banner van een forum op Argu.',
            [ontola.ns('format/jpg')]: asset('/academy/images/platform-inrichten0.jpg'),
            [ontola.ns('format/webp')]: asset('/academy/images/platform-inrichten0.webp'),
            [ontola.ns('format/avif')]: asset('/academy/images/platform-inrichten0.avif'),
          }, // END IMAGE
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": ""
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        }
      },
    },
  },
  // CHAPTER: 2. Content uitwerken
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement/content-uitwerken',
    [rdfx.type]: argu.Chapter,
    [schema.title]: '2. Content uitwerken',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'In deze fase wordt de content op het platform uitgewerkt. Het doel van het platform is om met zoveel mogelijk mensen uit de betreffende doelgroep een dialoog te voeren. Online is de dynamiek anders dan bij een fysiek gesprek waarbij je mensen kunt onderbreken of snel verdiepende vragen kunt stellen. Het is online dus extra belangrijk om scherpe vragen te stellen',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Begin simpel: maak een lijst met de onderwerpen die je wil plaatsen op het platform.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bepaal of het platform openbaar of besloten moet zijn.',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Een open platform biedt de meeste kans op interactie omdat het makkelijk te vinden is.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'De kans dat mensen die niet tot de doelgroep behoren gaan meedoen is heel klein.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Als je zeker wilt zijn dat de deelnemers tot de doelgroep behoren kun je het platform besloten houden. Je kunt mensen dan uitnodigen via ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.bold]: true,
                              [schema.text]: 'e-mail',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: ' of een ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.bold]: true,
                              [schema.text]: 'uitnodigingslink',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: ' of via een ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [elements.bold]: true,
                              [schema.text]: 'unieke stemcode',
                            }, // END Text
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: '. Lees meer over de verschillende manieren om ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.A,
                              [ontola.href]: url('https://argu.co/argu/t/10528'),
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'items te delen en mensen uit te nodigen',
                                }, // END Text
                              ]),
                            }, // END A
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: '.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'De zichtbaarheid van het platform kan je op twee verschillende niveaus instellen. namelijk op groepsniveau en forum niveau. Meer over deze instellingen lees je in het helpdesk artikel: ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.A,
                              [ontola.href]: ('https://argu.co/argu/t/10536'),
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'Groepen- en rechtenbeheer',
                                }, // END Text
                              ]),
                            }, // END A
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Bepaal of er één of meerdere thema’s zijn die je wil voorleggen. Het kan nuttig zijn om voor elk thema een aparte pagina aan te maken op het platform. Zo houd je een visuele scheiding tussen de thema’s.',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Img,
                  [schema.image]: {
                    [rdfx.type]: ontola.PictureSet,
                    [ontola.alt]: 'Een schermafbeelding van een navigatie balk op Argu met de volgende links: “Wonen”, “Economie”, “Bereikbaar en veilig”, “Aantrekkelijk”, “Verbonden”, “Scenario”.',
                    [ontola.ns('format/jpg')]: asset('/academy/images/content-uitwerken0.jpg'),
                    [ontola.ns('format/webp')]: asset('/academy/images/content-uitwerken0.webp'),
                    [ontola.ns('format/avif')]: asset('/academy/images/content-uitwerken0.avif'),
                  }, // END IMAGE
                }
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Om een nieuwe pagina aan te maken kan je in de menubalk klikken op “Pagina toevoegen” → Nieuwe forum. Een tweede manier is om in de menubalk naar instellingen → componenten → het plusje rechtsboven → Nieuw forum.',
                    }, // END Text
                  ]),
                }, // END P
                // {
                //   // TODO: VIDEO
                //   [rdfx.type]: ontola.PictureSet,
                //   [ontola.ns('format/png')]: url('https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png'),
                // }, // END IMAGE
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Nu moet je bepalen welke interactie je straks wil aangaan met de deelnemers.',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Wil je kwantitatieve informatie ophalen? Maak dan een ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.A,
                              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/enquete'),
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'enquête',
                                }, // END Text
                              ]),
                            }, // END A
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: ' aan.',
                            }, // END Text
                          ]),
                        }, // END P
                        {
                          [rdfx.type]: elements.Tip,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.P,
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'In dit artikel geven we tips voor het opstellen van een goede enquête',
                                }, // END Text
                              ]),
                            }, // END P
                          ]),
                        }, // END Tip
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Wil je goede ideeën verzamelen of mensen laten stemmen en reageren op verschillende scenario’s? Maak dan een ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.A,
                              [ontola.href]: url('https://argu.localdev/academy/online-participatie/participatie-instrumenten/uitdaging'),
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'uitdaging',
                                }, // END Text
                              ]),
                            }, // END A
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: ' aan.',
                            }, // END Text
                          ]),
                        }, // END P
                        {
                          [rdfx.type]: elements.Note,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Lees: ',
                            }, // END Text
                            {
                              [rdfx.type]: elements.A,
                              [ontola.href]: url('https://argu.co/argu/posts/11007'),
                              [elements.children]: seq([
                                {
                                  [rdfx.type]: elements.InnerText,
                                  [schema.text]: 'stappenplan voor het formuleren van een goed participatievraagstuk (uitdaging)',
                                }, // END Text
                              ]),
                            }, // END A
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: ' voor goede en slechte voorbeelden.',
                            }, // END Text
                          ]),
                        }, // END Note
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Promotieplan',
            }, // END Text
          ]),
        }, // END H2
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Nadat het platform is ingericht moet worden nagedacht over promotie van het online traject. Een goed ingericht platform biedt namelijk nog geen garantie dat het ook gebruikt gaat worden door de doelgroep. Daarvoor zul je mensen moeten uitnodigen.',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Er zijn natuurlijk de bekende communicatiekanalen die je kunt inzetten:',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Brief met uitnodiging',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Eventueel een brief met stemcode als je een besloten stemronde wil organiseren. Neem daarvoor ',
                    }, // END Text
                    {
                      [rdfx.type]: elements.A,
                      [ontola.href]: url('mailto:info@argu.co'),
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'contact',
                        }, // END Text
                      ]),
                    }, // END A
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: ' op met Argu.',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Vragen aan wijkorganisaties of zij hun achterban kunnen uitnodigen via e-mail of WhatsApp',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Social media berichten',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Social media-advertenties',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Posters in de wijk',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Flyeren in de wijk',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Artikel in lokale media',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Linkje op de website van de gemeente',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Ludieke acties',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
          ]),
        }, // END Ul
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Gebruik onze gids promotieplan voor een online participatietraject.',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [elements.bold]: true,
              [schema.text]: 'Relevante downloads voor jouw promotieplan',
            }, // END Text
          ]),
        }, // END P
        {
          [rdfx.type]: schema.MediaObject,
          [dbo.filename]: 'checklist-toegankelijkheid-e-participatie.pdf',
          [schema.contentUrl]: asset('/academy/documents/checklist-toegankelijkheid-e-participatie.pdf'),
          [schema.encodingFormat]: 'application/pdf',
        },
        {
          [rdfx.type]: schema.MediaObject,
          [dbo.filename]: 'het-promotieplan-voor-jouw-online-participatietraject.pdf',
          [schema.contentUrl]: asset('/academy/documents/het-promotieplan-voor-jouw-online-participatietraject.pdf'),
          [schema.encodingFormat]: 'application/pdf',
        },
      ])
    },
  },
  // CHAPTER: 3. Voorbereiding lancering
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement/voorbereiding-lancering',
    [rdfx.type]: argu.Chapter,
    [schema.title]: '3. Voorbereiding lancering',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Nadat alle content op het platform is geplaatst moet er een plan worden uitgewerkt voor de lancering. "
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Nodig collega’s uit om het platform te bekijken. Verzamel en verwerk feedback."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Controleer of alle teksten kloppen en toegankelijk zijn geschreven. Probeer daarbij taalniveau B1 aan te houden. Gebruik bij twijfel "
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                      "<https://ns.ontola.io/core#href>": url("https://www.ishetb1.nl/"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "deze website"
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": " om te checken of woorden B1 niveau zijn."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Loop het gemaakte promotieplan nog eens door."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Stel deadlines in bij alle items op de website. Zo kunnen deelnemers snel zien hoeveel tijd ze hebben om te reageren. Tevens creëert dat een gevoel van urgentie waardoor je meestal meer interactie krijgt op jouw platform. Je kunt per item een deadline instellen bij de "
                    },
                    [rdfx.ns('_01')]: {
                      [rdfx.type]: elements.InnerText,
                      [elements.bold]: true,
                      [schema.text]: 'geavanceerde instellingen.',
                    }, // END Text
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Loop onze "
                    },
                    [rdfx.ns('_01')]: {
                      [rdfx.type]: elements.A,
                      [ontola.href]: asset('/academy/documents/checklist-toegankelijkheid-e-participatie.pdf'),
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'checklist toegankelijkheid',
                        }, // END Text
                      ]),
                    }, // END A,
                    [rdfx.ns('_02')]: {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: ' na.',
                    }, // END Text
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Lanceer het platform!"
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Neem contact op met Argu, dan lanceren wij het platform wanneer jij wil."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
      },
    },
  },
  // CHAPTER: 4. Start van het traject
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement/start-van-het-traject',
    [rdfx.type]: argu.Chapter,
    [schema.title]: '4. Start van het traject',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Nu het traject gelanceerd is zullen mensen jouw platform gaan gebruiken. Het doel is om de input van zoveel mogelijk mensen te verzamelen. Naast de promotie-acties om mensen naar het platform te leiden kun je tijdens het traject een aantal dingen doen om de interactie op het platform te stimuleren."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Actief reageren op content"
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Bedank deelnemers en geef complimenten voor goede bijdragen."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Vraag door op ideeën en opmerkingen van deelnemers."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Beantwoord vragen van deelnemers of verbind ze met collega’s die hun vraag kunnen beantwoorden."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    }
                  }
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Tussentijdse evaluatie"
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Vraag een tussentijdse rapportage aan bij Argu"
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Bekijk de statistieken en bepaal of je nog extra tijd en middelen wil steken in het betrekken van de doelgroep."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Verwerk eventuele feedback van deelnemers op het platform. Maak teksten bijvoorbeeld duidelijker of voeg ondersteunend beeldmateriaal doe. Je kunt ook veelgestelde vragen toevoegen aan de tekst."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    }
                  }
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Blijf promoten. Na de lancering zal een deel van de doelgroep het platform gaan bezoeken en gebruiken. Maar mensen die nog niet hebben deelgenomen vergeten snel dat je ze hebt uitgenodigd."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Stuur een reminder van de uitnodiging."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    },
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Gebruik ook andere communicatiekanalen om mensen naar het platform toe te leiden."
                            }
                          },
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Lees onze gids "
            },
            [rdfx.ns('_01')]: {
              [rdfx.type]: elements.A,
              [ontola.href]: asset('/academy/documents/handleiding-wat-doen-we-tijdens-het-traject.pdf'),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: '“wat te doen tijdens het traject?”',
                }, // END Text
              ]),
            }, // END A
            [rdfx.ns('_02')]: {
              [rdfx.type]: elements.InnerText,
              [schema.text]: '.',
            }, // END Text
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        [rdfx.ns('_03')]: {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Tijdens het traject',
            }, // END Text
          ]),
        }, // END H2
        [rdfx.ns('_04')]: {
          [rdfx.type]: elements.Ul,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Actief reageren op content. Maak gebruik van onze tips wat betreft het moderatiebeleid (onderdeel van de gids “Wat te doen tijdens het traject?”). ',
                    }, // END Text
                  ]),
                }, // END P
              ]),
            }, // END Li
            {
              [rdfx.type]: elements.Li,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.P,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'Doe een tussentijdse evaluatie',
                    }, // END Text
                  ]),
                }, // END P
                {
                  [rdfx.type]: elements.Ul,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Hoeveel procent van de doelgroep doet nu mee?',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                    {
                      [rdfx.type]: elements.Li,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.P,
                          [elements.children]: seq([
                            {
                              [rdfx.type]: elements.InnerText,
                              [schema.text]: 'Hoeveel procent van de genodigden doet nu mee? Dit zou ongeveer 10% moeten zijn.',
                            }, // END Text
                          ]),
                        }, // END P
                      ]),
                    }, // END Li
                  ]),
                }, // END Ul
              ]),
            }, // END Li
          ]),
        }, // END Ul
      },
    },
  },
  // CHAPTER: 5. Rapportage en evaluatie
  {
    '@id': 'https://argu.localdev/academy/trajectmanagement/rapportage-en-evaluatie',
    [rdfx.type]: argu.Chapter,
    [schema.title]: '5. Rapportage en evaluatie',
    [schema.isPartOf]: url('https://argu.localdev/academy'),
    [argu.chapterContent]: {
      [rdfx.type]: elements.Document,
      [elements.children]: {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Na de start van jouw traject wil je monitoren hoe het gaat met het aantal bezoekers, gebruikers en reacties op je platform."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Tijdens het traject"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Houd de statistiekenpagina bij per pagina."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Bekijk de reacties op het platform in chronologische volgorde via de knop “activiteit”."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Vraag om een tussentijdse rapportage bij jouw Argu projectleider en ontvang de bezoekers- en gebruikersstatistieken van jouw platform."
                    },
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Bekijk de statistieken en bepaal of je nog extra tijd en middelen wil steken in het betrekken van de doelgroep."
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            },
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "Verwerk eventuele feedback van deelnemers op het platform. Maak teksten bijvoorbeeld duidelijker of voeg ondersteunend beeldmateriaal doe. Je kunt ook veelgestelde vragen toevoegen aan de tekst"
                    }
                  },
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
                }
              }
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Na het traject"
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Na het traject ontvang je een eindrapportage met alle relevante statistieken. Argu stuurt je ook een vragenlijst om het traject mee te evalueren."
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": ""
            }
          },
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
        }
      },
    },
  },
  {
    '@id': 'https://argu.localdev/academy/menus/footer',
    [rdfx.type]: argu.ns('Footer'),
    [argu.ns('columns')]: seq([
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: 'Contact',
        [ontola.menuItems]: seq([
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'Argu B.V.'
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'Maliebaan 100'
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: '3581 CZ Utrecht',
            [ontola.href]: url('https://goo.gl/maps/Nm9NpNCFdDo8jHyW9'),
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'KVK: 65684168'
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'BTW: NL856213408B01'
          },
        ]),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: 'Kennisbank',
        [ontola.menuItems]: seq([
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'Cases',
            [ontola.href]: url('https://argu.co/info/cases'),
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'Blog',
            [ontola.href]: url('https://argu.co/info/blog'),
          },
          {
            [rdfx.type]: ontola.MenuItem,
            [schema.name]: 'Helpdesk',
            [ontola.href]: 'https://argu.co/argu/help',
          },
        ]),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: 'Hulp nodig?',
        [ontola.menuItems]: seq([
          {
            [rdfx.type]: schema.Person,
            [schema.name]: 'Michiel',
            [schema.telephone]: '+316 360 20 942',
            [schema.email]: 'michiel@argu.co',
            [schema.image]: {
              [rdfx.type]: ontola.PictureSet,
              [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
              [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
              [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
              [ontola.alt]: '',
            }
          },
          {
            [rdfx.type]: schema.Person,
            [schema.name]: 'Marcel',
            [schema.telephone]: '+316 1808 8926',
            [schema.email]: 'marcel@argu.co',
            [schema.image]: {
              [rdfx.type]: ontola.PictureSet,
              [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
              [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
              [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
              [ontola.alt]: '',
            }
          },
        ]),
      },
    ]),
    [argu.lowerSection]: {
      [rdfx.type]: argu.LowerSecion,
      [schema.image]: asset("/sales/images/argu-logo.svg"),
      [argu.policy]: url('https://argu.co/argu/policy'),
      [argu.privacy]: url('https://argu.co/argu/privacy'),
      [argu.socials]: seq([
        {
          [rdfx.type]: argu.SocialButton,
          [ontola.ariaLabel]: 'Bekijk onze Facebook pagina',
          [ontola.href]: url('https://www.facebook.com/argu.co/'),
          [argu.icon]: url('http://fontawesome.io/icon/facebook-square'),
        },
        {
          [rdfx.type]: argu.SocialButton,
          [ontola.ariaLabel]: 'Bekijk onze LinkedIn pagina',
          [ontola.href]: url('https://www.linkedin.com/company/argu/'),
          [argu.icon]: url('http://fontawesome.io/icon/linkedin-square'),
        },
        {
          [rdfx.type]: argu.SocialButton,
          [ontola.ariaLabel]: 'Volg ons Twitter account',
          [ontola.href]: url('https://twitter.com/argu_co'),
          [argu.icon]: url('http://fontawesome.io/icon/twitter-square'),
        },
      ])
    }
  }
];
