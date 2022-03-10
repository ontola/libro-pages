const asset = (path) => url(`https://dptr8y9slmfgv.cloudfront.net${path}`);

const commonHeaderBGProps = {
  [sales.backgroundImage]: asset('/sales/images/header.svg'),
  [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
  [sales.backgroundImageXL]: asset('/sales/images/header_xl.svg'),
};

const commonProductProps = {
  [sales.backgroundImage]: asset('/sales/images/header_productpages.svg'),
  [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
  [sales.buttonLink]: url('https://calendly.com/argu_co/online-demo'),
  [sales.buttonText]: 'Plan een demo',
  [sales.propositions]: url('https://argu.co/info#propositions'),
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
};
/***************** HOME PAGE *****************/

[({
  "@id": "https://argu.co/info",
  [rdfx.type]: sales.HomePage,
  [schema.name]: 'Argu - Beslis samen beter',
  [schema.description]: 'Argu is een gebruiksklaar participatieplatform voor iedere organisatie. Betrek meer burgers, bouw een community en beslis beter.  Vraag vrijblijvend een demo aan.',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Beslis samen beter',
    [schema.text]: 'Wij helpen jou om je doelgroep te betrekken. Simpel, interactief en toegankelijk.',
    [sales.buttonLink]: url('https://calendly.com/argu_co/online-demo'),
    [sales.buttonText]: 'Plan een demo',
    ...commonHeaderBGProps,
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [ontola.navigationsMenu]: {
    [rdfx.type]: ontola.MenuItem,
    [sales.callToAction]: {
      [rdfx.type]: sales.CallToActionButton,
      [schema.text]: "Plan een demo",
      [ontola.href]: url('https://calendly.com/argu_co/online-demo'),
    },
    [ontola.menuItems]: seq([
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.image]: {
          [rdfx.type]: ontola.PictureSet,
          [ontola.ariaLabel]: "Logo",
          [ontola['format/svg']]: asset("/sales/images/argu-logo.svg"),
          [ontola['format/png']]: asset("/sales/images/argu-logo.png")
        },
        [schema.isPartOf]: url("https://argu.co/info"),
        [schema.name]: "Argu",
        [ontola.href]: url("https://argu.co/info"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Functionaliteiten",
        [ontola.href]: url("https://argu.co/info/functionaliteiten"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Prijzen",
        [ontola.href]: url("https://argu.co/info/prijzen"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Cases",
        [ontola.href]: url("https://argu.co/info/cases"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Werkwijze",
        [ontola.href]: url("https://argu.co/info/werkwijze"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Over",
        [ontola.href]: url("https://argu.co/info/over-ons"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Academy",
        [ontola.href]: url("https://argu.co/academy"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Blog",
        [ontola.href]: url("https://argu.co/info/blog"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Contact",
        [ontola.href]: url("https://argu.co/info/contact"),
      },
      {
        [rdfx.type]: ontola.MenuItem,
        [schema.name]: "Help",
        [ontola.href]: url("https://argu.co/argu/help"),
      },
    ]),
  },

  [sales.showcase]: {
    [rdfx.type]: rdfx.Seq,
    [rdfx.ns('_01')]: url("https://argu.co/info/participatie"),
    [rdfx.ns('_02')]: url("https://argu.co/info/huurdersparticipatie"),
    [rdfx.ns('_03')]: url("https://argu.co/info/community"),
    [rdfx.ns('_04')]: url("https://argu.co/info/energietransitie"),
  },

  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Cases',
    [schema.text]: 'Van draagvlakmeting tot ideegeneratie: Argu is flexibel inzetbaar voor diverse participatietrajecten.',
    [schema.image]: {
      [rdfx.type]: ontola.ns('PictureSet'),
      [ontola.ariaLabel]: "Klantlogos - Heerugowaard, Den Haag, Hollands Kroon, GroenLinks, RIVM, Rochdale, Gemeente Utrecht, CvTE, KVK, Drechtsteden, Vroonermeer noord, Heerenveen",
      [ontola.ns('format/avif')]: asset('/sales/images/klantlogos.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/klantlogos.png'),
      [ontola.ns('format/jpg')]: asset('/sales/images/klantlogos.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/klantlogos.webp'),
    },

    [sales.caseShowcase]: url('https://argu.co/info#highlightedCases'),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },

  [sales.propositions]: url('https://argu.co/info#propositions'),

  [sales.duoBlock]: {
    [rdfx.type]: rdfx.Seq,
    [rdfx.ns('_01')]: {
      [rdfx.type]: sales.Block,
      [schema.color]: '#2D7080',
      [sales.textColor]: "#FFF",
      [schema.text]: 'Argu is het meest complete pakket voor online besluitvorming. Laat mensen eenvoudig meedenken, krijg inzicht in draagvlak en maak samen betere beslissingen.',
      [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
      [sales.buttonText]: "Functionaliteiten",
    },
    [rdfx.ns('_02')]: {
      [rdfx.type]: sales.Block,
      [schema.color]: '#FFF',
      [sales.textColor]: "#000",
      [schema.name]: "Hoe werkt het?",
      [schema.text]: 'Na het begeleiden van meer dan 150 online trajecten voor onder anderen gemeenten, provincies, ministeries, woningcorporaties en bedrijven hebben we uitgebreide kennis en ervaring opgebouwd en gebundeld in een efficiënte aanpak',
      [sales.buttonLink]: url("https://argu.co/info/werkwijze"),
      [sales.buttonText]: "Onze werkwijze",
    },
  },


  [sales.blogs]: {
    [rdfx.type]: sales.Blogs,
    [schema.name]: 'Blijf op de hoogte van het laatste nieuws',
    [schema.description]: 'Blijf op de hoogte van het laatste nieuws',
    [sales.blogShowcase]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      [rdfx.ns('_02')]: url('https://argu.co/info/blogs/5-checks-voordat-je-aan-e-participatie-begint'),
      [rdfx.ns('_03')]: url('https://argu.co/info/blogs/argu-lanceert-openBesluitvorming'),
    },
  },

}),

/***************** FOOTER *****************/

{
  '@id': 'https://argu.co/menus/footer/argu',
  [rdfx.type]: ontola.MenuItem,
  [schema.name]: 'Argu',
  [argu.ns('menuLabel')]: 'Argu',
  [argu.ns('labelTranslation')]: false,
  //[ontola.menuItems]: app.ns('info/menus/footer/items'),
  [rdfx.type]: ontola.MenuItem,
  [schema.name]: 'Kennisbank',
  [argu.ns('menuLabel')]: 'Kennisbank',
  [argu.ns('labelTranslation')]: false,
  [rdfx.type]: ontola.MenuItem,
  [schema.name]: 'Contact',
  [argu.ns('menuLabel')]: 'Contact',
  [argu.ns('labelTranslation')]: false,
},

/***************** PRODUCT PAGES *****************/

{
  "@id": "https://argu.co/info/participatie",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Participatie',
  [dbo.abstract]: 'Met een online participatieplatform laat je mensen eenvoudig meedenken bij veranderingen. Argu is het meest complete pakket voor burgerparticipatie en is snel online!',
  [sales.tagline]: "Betrek inwoners bij relevante thema’s",
  [schema.description]: 'Burgerparticipatie: betrek inwoners bij relevante thema’s',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/productpage_example_image.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/productpage_example_image.png'),
    [ontola.ns('format/jpg')]: asset('/sales/images/productpage_example_image.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/productpage_example_image.webp'),
  },
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Beslissingen binnen de openbare ruimte vragen steeds meer om inspraak van inwoners. Maar hoe zorg je ervoor dat je belanghebbende bereikt en de ruimte geeft om mee te denken? Met een participatiewebsite van Argu wordt het gehele participatieproces eenvoudig ingericht.',
          },
        ]),
      },
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Denk bijvoorbeeld aan een ',
          }, // END Text
          {
            [rdfx.type]: elements.A,
            [ontola.href]: url('https://argu.co/info/inwonerspanel'),
            [elements.children]: seq([
              {
                [rdfx.type]: elements.InnerText,
                [schema.text]: 'inwonerspanel',
              }, // END Text
            ]),
          }, // END A
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: ' of ',
          }, // END Text
          {
            [rdfx.type]: elements.A,
            [ontola.href]: url('https://argu.co/info/forum'),
            [elements.children]: seq([
              {
                [rdfx.type]: elements.InnerText,
                [schema.text]: 'forum',
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
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De kracht van online burgerparticipatie',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Meer en meer voelen mensen zich betrokken bij de omgeving waarin zij wonen. Er zijn ideeën en meningen. Ben jij als beleidsbepaler ook zo benieuwd naar deze geluiden?',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Om onder anderen gemeenten, overheden en provincies te helpen bij het vergroten van inspraak bij publieke beslissingen hebben wij Argu opgericht. Met een participatiewebsite van Argu bent jij in staat inwoners te betrekken en gebruik te maken van de waardevolle informatie die iedere inwoner te bieden heeft.',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Waar traditionele bewonersavonden vaak een beperkte opkomst hebben, kan je met een online participatieplatform veel meer mensen bereiken. Hoe meer mensen meedoen, stemmen en hun ideeën delen hoe groter het draagvlak is bij aanpassingen in de openbare ruimte.',
          },
        ]),
      }, // END P
    ])
  },
  [sales.featureTitle]: 'Waarom een burgerparticipatie platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot ideegeneratie: Argu is flexibel inzetbaar voor diverse participatietrajecten.',
    [sales.caseShowcase]: url('https://argu.co/info#highlightedCases'),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket voor online burgerparticipatie. Laat mensen eenvoudig meedenken, krijg inzicht in draagvlak en maak betere beslissingen.',
    [sales.featuresShowcase]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.co/info#vote'),
      [rdfx.ns('_02')]: url('https://argu.co/info#filtration'),
      [rdfx.ns('_03')]: url('https://argu.co/info#flag'),
      [rdfx.ns('_04')]: url('https://argu.co/info#infographic'),
      [rdfx.ns('_05')]: url('https://argu.co/info#checklist'),
    },
    [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      },
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/community",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Community',
  [dbo.abstract]: 'Met een communityplatform breng je mensen samen, deel je informatie of bespreek je onderwerpen. Met de functionaliteiten van Argu bouw je eenvoudig een community.',
  [sales.tagline]: "Vergroot de betrokkenheid",
  [schema.description]: 'Community platform: simpel, interactief en toegankelijk',
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Een hechte band creëren tussen jouw collega’s, klanten of leveranciers? Met een online community kun je dit realiseren. Met Argu maak je het laagdrempelig voor jouw doelgroep om kennis en ervaringen met elkaar uit te wisselen.',
          },
        ]),
      },
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Argu biedt verschillende vormen van online communities:',
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
                    [schema.text]: 'Kennisplatform, voor het stimuleren van onderling kennisdelen',
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
                    [schema.text]: 'Participatieplatform, voor het betrekken van bewoners bij beleid',
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
                    [schema.text]: 'Productcommunity, voor productgerichte kennisuitwisseling',
                  }, // END Text
                ]),
              }, // END P
            ]),
          }, // END Li
        ]),
      }, // END Ul
    ]),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/community.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/community.png'),
    [ontola.ns('format/jpg')]: asset('/sales/images/community.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/community.webp'),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Hoe werkt het?',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Met een online community van Argu kun je:',
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
                    [schema.text]: 'Jouw doelgroep eenvoudig uitnodigen',
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
                    [schema.text]: 'Mensen vragen laten stellen aan elkaar',
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
                    [schema.text]: 'Snel peilen en onderzoek doen via korte vragenlijsten',
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
            [schema.text]: 'Wij bieden het kant-en-klare platform aan samen met persoonlijke begeleiding. We begeleiden je stap voor stap bij het uitwerken van content en een effectieve campagne om jouw doelgroep te betrekken.',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Welke resultaten kun je verwachten?',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Door in te zetten op een online community...',
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
                    [schema.text]: 'Versterk je de band tussen de deelnemers van jouw community',
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
                    [schema.text]: 'Bereik je meer mensen, waardoor kennis zich onderling meer verspreidt',
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
                    [schema.text]: 'Bouw je een community op die je steeds binnen een paar kliks kunt raadplegen',
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
                    [schema.text]: 'Kun je je laten adviseren door jouw doelgroep',
                  }, // END Text
                ]),
              }, // END P
            ]),
          }, // END Li
        ]),
      }, // END Ul
    ]),
  },
  [sales.featureTitle]: 'Waarom een community platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Het samen oplossen van uitdagingen. Of experts kennis laten delen. Benieuwd hoe anderen het doen? Lees onze cases.',
    [sales.caseShowcase]: url('https://argu.co/info#highlightedCases'),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket voor een succesvolle community. Laat mensen eenvoudig meedenken, Deel informatie en help elkaar. Enkele relevante functionaliteiten voor een community platform worden hieronder toegelicht. ',
    [sales.featuresShowcase]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.co/info#notification'),
      [rdfx.ns('_02')]: url('https://argu.co/info#filtration'),
      [rdfx.ns('_03')]: url('https://argu.co/info#bullhorn'),
      [rdfx.ns('_04')]: url('https://argu.co/info#lock'),
    },
    [sales.buttonLink]: url('https://argu.co/info/functionaliteiten'),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      },
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/energietransitie",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Energietransitie',
  [dbo.abstract]: 'Met Argu laat je inwoners eenvoudig participeren bij het verkrijgen van waardevolle inzichten en zorg je voor een breed gedragen beleid rondom de energietransitie.',
  [sales.tagline]: "Vergroot het draagvlak",
  [schema.description]: 'De energietransitie: hoe ga je er mee om?',
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Het klimaat verandert wereldwijd en ook in Nederland. Middels het klimaatakkoord werken wij samen naar het doel om in 2050 de uitstoot van broeikasgassen te hebben verminderd met 95-100%. Maar hoe geef je hier als gemeente, provincie, organisatie en individu invulling aan? Met Argu zorg je voor breed gedragen plannen en maak je eenvoudig gebruik van de kennis om je heen.',
          },
        ]),
      },
    ]),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/energietransitie.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/energietransitie.png'),
    [ontola.ns('format/jpg')]: asset('/sales/images/energietransitie.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/energietransitie.webp'),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De kracht van participatie bij de energietransitie',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Door de energietransitie zal het Nederlandse landschap er de komende jaren anders uit gaan zien.De fysieke omgeving krijgt onder meer te maken met lokale en schone energiebronnen als zon en wind.',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Draagvlak en acceptatie onder omwonenden, andere burgers en bedrijven uit de omgeving van projecten zijn daarbij van cruciaal belang.Een van de afspraken binnen het klimaatakkoord is meer in te zetten op participatie van de lokale omgeving.',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.P,
        [elements.align]: 'center',
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De kennis en inzichten die inwoners hebben op de omgeving waarin zij wonen kan waardevol zijn bij het bepalen van beleid omtrent de energietransitie. Met Argu laat je inwoners eenvoudig participeren bij het verkrijgen van waardevolle inzichten en zorg je voor een breed gedragen beleid.',
          },
        ]),
      }, // END P
    ]),
  },
  [sales.featureTitle]: 'Waarom een energietransitie platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot idee generatie: Argu is flexibel inzetbaar voor diverse participatietrajecten omtrent de energietransitie.',
    [sales.caseShowcase]: url('https://argu.co/info#highlightedCases'),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket om participatie te stimuleren bij de energietransitie. Laat mensen eenvoudig meedenken, krijg inzicht in draagvlak en maak betere beslissingen. Enkele relevante functionaliteiten voor een energietransitie platform worden hieronder toegelicht.',
    [sales.featuresShowcase]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.co/info#infographic'),
      [rdfx.ns('_02')]: url('https://argu.co/info#lock'),
      [rdfx.ns('_03')]: url('https://argu.co/info#photo'),
      [rdfx.ns('_04')]: url('https://argu.co/info#checklist'),
    },
    [sales.buttonLink]: url('https://argu.co/info/functionaliteiten'),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      },
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/huurdersparticipatie",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Huurdersparticipatie',
  [dbo.abstract]: 'Als woningcorporatie heb je de keuze om traditionele methoden, zoals huurdersorganisaties, inspraakavonden of enquêtes, in te zetten. Echter komen daar steeds weer dezelfde valkuilen om de hoek: desinteresse en tijdgebrek. Hoe kan dit beter? Simpel. Maak gebruik van het internet!',
  [sales.tagline]: "Betrek jouw huurders",
  [schema.description]: 'Huurdersparticipatie: Hoe betrek je huurders?',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/huurdersparticipatie.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/huurdersparticipatie.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/huurdersparticipatie.webp'),
  },
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De meeste woningcorporaties gebruiken traditionele methoden om hun huurders te betrekken bij veranderingen. Helaas leidt dat vaak tot beperkte resultaten:',
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
                    [schema.text]: 'Er wordt slechts een kleine groep mensen bereikt',
                  },
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
                    [schema.text]: 'De deelnemers zijn niet representatief',
                  },
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
                    [schema.text]: 'Jongeren zijn ondervertegenwoordigd',
                  },
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
                    [schema.text]: 'De terugkoppeling bereikt maar een klein deel van de deelnemers',
                  },
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
            [schema.text]: 'Met Argu kun je hier verandering in brengen. Omdat het een online platform is dat op pc, tablet en smartphone werkt kunnen mensen deelnemen op een moment dat het ze zelf uitkomt. Dat maakt het laagdrempeliger voor huurders om deel te nemen.',
          },
        ]),
      }, // END P
    ]),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Hoe werkt het?',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Met het platform kun je:',
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
                    [schema.text]: 'Eenvoudig ideeën verzamelen van huurders',
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
                    [schema.text]: 'Snel peilen en onderzoek doen via korte vragenlijsten',
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
                    [schema.text]: 'Huurders laten stemmen op verschillende scenario’s',
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
                    [schema.text]: 'Geautomatiseerd terugkoppelen en updaten',
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
            [schema.text]: 'Wij bieden het kant-en-klare platform aan samen met persoonlijke begeleiding. We begeleiden je stap voor stap bij het uitwerken van participatievraagstukken en een effectieve campagne om huurders te betrekken.',
          },
        ]),
      }, // END P
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Welke resultaten kun je verwachten?',
          },
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Door in te zetten op online huurdersparticipatie…',
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
                    [schema.text]: 'Bereik je meer mensen, waardoor je een representatiever beeld krijgt',
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
                    [schema.text]: 'Bouw je een online community op die je steeds binnen een paar kliks kunt raadplegen',
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
                    [schema.text]: 'Bespaar je op termijn op communicatiekosten',
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
                    [schema.text]: 'Versterk je het vertrouwen van huurders omdat besluitvormingsprocessen transparant worden',
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
                    [schema.text]: 'Versterk je het vertrouwen van huurders omdat je zichtbaar maakt wat je doet met hun input',
                  }, // END Text
                ]),
              }, // END P
            ]),
          }, // END Li
        ]),
      }, // END Ul
    ]),
  },
  [sales.featureTitle]: 'Waarom een huurdersparticipatie platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot idee generatie: Argu is flexibel inzetbaar voor diverse participatietrajecten omtrent de huurdersparticipatie.',
    [sales.caseShowcase]: seq([
      url('https://argu.co/info/cases/online-huurdersparticipatie-bij-thuisvester'),
      url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
      url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
    ]),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },


  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket om huurders te laten participeren bij beleid en nauw contact te onderhouden. Laat huurders eenvoudig meedenken, krijg inzicht in draagvlak en maak betere beslissingen. Enkele relevante functionaliteiten voor een huurdersparticipatie platform worden hieronder toegelicht.',
    [sales.featuresShowcase]: {
      [rdfx.type]: rdfx.Seq,
      [rdfx.ns('_01')]: url('https://argu.co/info#notification'),
      [rdfx.ns('_02')]: url('https://argu.co/info#tenantFiltration'),
      [rdfx.ns('_03')]: url('https://argu.co/info#bullhorn'),
      [rdfx.ns('_04')]: url('https://argu.co/info#checklist'),
      [rdfx.ns('_05')]: url('https://argu.co/info#budgetting'),
    },
    [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: url('https://argu.co/info/blogs/online-huurdersparticipatie-is-de-toekomst'),
      },
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/inwonerspanel",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Inwonerspanel',
  [dbo.abstract]: 'Met een online participatieplatform laat je mensen eenvoudig meedenken bij veranderingen. Argu is het meest complete pakket voor burgerparticipatie en is snel online!',
  [sales.tagline]: "Betrek periodiek inwoners bij beleid",
  [schema.description]: 'Inwonerspanel: betrek periodiek inwoners bij beleid',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/inwonerspanel.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/inwonerspanel.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/inwonerspanel.webp'),
  },
  [schema.text]: {
    [rdfx.type]: [elements.Document],
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Bij veel participatietrajecten wordt een selecte groep inwoners uitgenodigd door een organisatie om mee te denken over beleid of veranderingen in de fysieke omgeving. Na het terugkoppelen van de uitkomsten eindigt meestal het contact tussen de organisatie en de inwoners. Dat is jammer want veel mensen willen graag over meerdere onderwerpen meedenken. Met een inwonerspanel kun je een groep betrokken inwoners bij elkaar brengen die periodiek worden geraadpleegd.',
          }, // END Text
        ]),
      }, // END P
    ]),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Hoe werkt het?',
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
                    [schema.text]: 'Je nodigt mensen uit om minimaal een jaar deel te nemen aan het inwonerspanel',
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
                    [schema.text]: 'Periodiek raadpleeg je de deelnemers, bijvoorbeeld elk kwartaal',
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
                    [schema.text]: 'Op het platform kun je vraagstukken, stellingen en enquêtes plaatsen',
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
                    [schema.text]: 'Je kunt reageren op de reacties die de deelnemers geven',
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
                    [schema.text]: 'Via het platform blijven de deelnemers op de hoogte van wat er met hun input gebeurt',
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
            [schema.text]: 'Wij bieden het kant-en-klare platform aan samen met persoonlijke begeleiding. We begeleiden je stap voor stap bij het uitwerken van een effectieve campagne om inwoners te werven en met het platform te laten werken. Vervolgens helpen we bij het uitwerken van content waar de panelleden op kunnen reageren.',
          }, // END Text
        ]),
      }, // END P
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Welke resultaten kun je verwachten?',
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
                    [schema.text]: 'Je bouwt een betrokken groep inwoners op die je periodiek kunt raadplegen',
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
                    [schema.text]: 'Krijg input van inwoners op proefballonnetjes of complexe vraagstukken',
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
                    [schema.text]: 'De deelnemers worden steeds beter in het geven van nuttige input',
                  }, // END Text
                ]),
              }, // END P
            ]),
          }, // END Li
        ]),
      }, // END Ul
    ]),
  },
  [sales.featureTitle]: 'Waarom een participatie platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot idee generatie: Argu is flexibel inzetbaar voor diverse participatietrajecten omtrent inwonersparticipatie',
    [sales.caseShowcase]: seq([
      url('https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein'),
      url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
      url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
    ]),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket om inwoners te laten participeren bij beleid en nauw contact te onderhouden. Laat inwoners eenvoudig meedenken middels een inwonerspanel, krijg inzicht in draagvlak en maak betere beslissingen. Enkele relevante functionaliteiten voor een inwonerspanel worden hieronder toegelicht.',
    [sales.featuresShowcase]: seq([
      url('https://argu.co/info#notification'),
      url('https://argu.co/info#filtration'),
      url('https://argu.co/info#bullhorn'),
      url('https://argu.co/info#checklist'),
      url('https://argu.co/info#scenario-discussion'),
    ]),
    [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: seq([
        url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      ]),
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/forum",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'Forum',
  [dbo.abstract]: 'Met een online participatieplatform laat je mensen eenvoudig meedenken bij veranderingen. Argu is het meest complete pakket voor burgerparticipatie en is snel online!',
  [sales.tagline]: "Een plek om samen te komen",
  [schema.description]: 'Forum: Een plek om samen te komen',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/forum.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/forum.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/forum.webp'),
  },
  [schema.text]: {
    [rdfx.type]: [elements.Document],
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Of je nou een groep vakgenoten, collega’s, inwoners of gelijkdenkenden bent. Iedereen heeft de behoefte om met anderen te praten over relevante onderwerpen. Met een forum is het mogelijk gerichte gesprekken/ discussies te starten, al dan niet gekoppeld aan bepaalde thema’s. Daarnaast biedt een forum de mogelijkheid om informatie uit te wisselen of samen te werken aan een oplossing.',
          }, // END Text
        ]),
      }, // END P
    ]),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Hoe werkt het?',
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
                    [schema.text]: 'Je start een community waar mensen samen kunnen komen.',
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
                    [schema.text]: 'Op het platform kun je vraagstukken, stellingen en enquêtes plaatsen, al dan niet gekoppeld aan thema’s.',
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
                    [schema.text]: 'Je kunt reageren op de reacties die de deelnemers geven, maar ook kunnen deelnemers op elkaar reageren.',
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
                    [schema.text]: 'Via het platform blijven de deelnemers op de hoogte van wat er met hun input gebeurt.',
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
            [schema.text]: 'Wij bieden het kant-en-klare platform aan samen met persoonlijke begeleiding. Door de jaren heen hebben wij tal van forums/ discussieplatformen voorbij zien komen. Onze inzichten nemen wij graag mee om jou te helpen een effectief online forum te starten.',
          }, // END Text
        ]),
      }, // END P
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Welke resultaten kun je verwachten?',
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
                    [schema.text]: 'Je bouwt een betrokken groep van bijvoorbeeld inwoners, vakgenoten of collega’s.',
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
                    [schema.text]: 'Je helpt mensen om elkaar te helpen.',
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
                    [schema.text]: 'Meet draagvlak of krijg inzicht in het sentiment.',
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
                    [schema.text]: 'Hoe groter de groep deelnemers, hoe waardevoller de discussie wordt.',
                  }, // END Text
                ]),
              }, // END P
            ]),
          }, // END Li
        ]),
      }, // END Ul
    ]),
  },
  [sales.featureTitle]: 'Waarom een participatie platform bij Argu?',
  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot idee generatie: Argu is flexibel inzetbaar voor diverse participatietrajecten zoals het inzetten van een forum',
    [sales.caseShowcase]: seq([
      url('https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein'),
      url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
      url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
    ]),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete pakket om inwoners te laten participeren bij beleid en nauw contact te onderhouden. Breng mensen met elkaar in contact via een forum, krijg inzicht in draagvlak en maak betere beslissingen. Enkele relevante functionaliteiten voor een forum worden hieronder toegelicht.',
    [sales.featuresShowcase]: seq([
      url('https://argu.co/info#notification'),
      url('https://argu.co/info#filtration'),
      url('https://argu.co/info#bullhorn'),
      url('https://argu.co/info#checklist'),
      url('https://argu.co/info#scenario-discussion'),
      url('https://argu.co/info#lock'),
    ]),
    [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: seq([
        url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
      ]),
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},
{
  "@id": "https://argu.co/info/e-democracy",
  ...commonProductProps,
  [rdfx.type]: sales.ProductPage,
  [schema.name]: 'E-democracy',
  [dbo.abstract]: 'De beslissingen die overheden maken hebben een grote impact op levens van burgers. Met online tools is het mogelijk geworden om mensen op nieuwe manieren deel te laten nemen aan onze democratie. ',
  [sales.tagline]: "Digitale deliberatie",
  [schema.description]: 'E-democracy: digitale deliberatie',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/e-democracy.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/e-democracy.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/e-democracy.webp'),
  },
  [schema.text]: {
    [rdfx.type]: [elements.Document],
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De beslissingen die overheden maken hebben een grote impact op levens van burgers. Met online tools is het mogelijk geworden om mensen op nieuwe manieren deel te laten nemen aan onze democratie. ',
          }, // END Text
        ]),
      }, // END P
    ]),
  },
  [sales.productText]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Het internet laten werken voor onze democratie',
          }, // END Text
        ]),
      }, // END H2
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Met de komst van het internet is de relatie tussen burger en overheid veranderd. Mensen volgen hun eigen kanalen en zijn daarin meer dan passieve luisteraars: ze delen hun mening en plaatsen reacties. Dat biedt kansen, want al die mensen kunnen dankzij het internet makkelijker meedenken over hoe beleid kan worden verbeterd. Helaas zijn de grote social media platforms niet ontworpen voor inspraak, deliberatie of co-creatie. In de afgelopen jaren hebben we gezien hoe social media platform zorgen voor polarisatie en het verspreiden van misinformatie. Hoe zou een online platform eruitzien als het vanaf het begin af aan werd gemaakt om zo nuttig mogelijk te zijn voor onze democratie?',
          }, // END Text
        ]),
      }, // END P
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Wij begonnen Argu in 2015 met het doel om meer betere discussies op internet te krijgen. We ontwierpen een unieke structuur die helpt om oplossingsgericht samen te werken, en op een genuanceerde manier voor- en tegenargumenten uit te wisselen. Zo wordt het makkelijk om te zien welke problemen er zijn, welke ideeën mensen hebben en wat de voor- en nadelen van die ideeën zijn. We hebben sindsdien ons e-democracy platform ingezet bij vele overheden, en in die jaren steeds verder uitgebouwd.',
          }, // END Text
        ]),
      }, // END P
    ])
  },
  [sales.featureTitle]: 'Waarom een participatie platform bij Argu?',


  [sales.cases]: {
    [rdfx.type]: sales.Cases,
    [schema.name]: 'Vergelijkbare cases',
    [schema.text]: 'Van draagvlakmeting tot idee generatie: Argu is flexibel inzetbaar voor diverse participatietrajecten.',
    [sales.caseShowcase]: seq([
      url('https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein'),
      url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
      url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
    ]),
    [sales.caseButtonLink]: url('https://argu.co/info/cases'),
    [sales.caseButtonText]: 'Meer cases',
  },
  [sales.features]: {
    [rdfx.type]: sales.Features,
    [sales.backgroundImageMobile]: asset('/sales/images/header_mobile.svg'),
    [schema.image]: asset('/sales/images/parallax.svg'),
    [schema.name]: 'Functionaliteiten',
    [schema.text]: 'Argu is het meest complete e-democracy pakket om inwoners te laten participeren bij beleid en nauw contact te onderhouden. Breng mensen met elkaar in contact via een forum, krijg inzicht in draagvlak en maak betere beslissingen. Enkele relevante e-democracy functionaliteiten worden hieronder toegelicht.',
    [sales.featuresShowcase]: seq([
      url('https://argu.co/info#vote'),
      url('https://argu.co/info#filtration'),
      url('https://argu.co/info#flag'),
      url('https://argu.co/info#infographic'),
      url('https://argu.co/info#checklist'),
      url('https://argu.co/info#budgetting'),
    ]),
    [sales.buttonLink]: url("https://argu.co/info/functionaliteiten"),
    [sales.buttonText]: 'Alle functionaliteiten',
    [sales.blogs]: {
      [rdfx.type]: sales.Blogs,
      [schema.name]: 'Relevante blogs',
      [sales.blogShowcase]: seq([
        url('https://argu.co/info/blogs/3-succesvolle-strategieen-om-te-starten-met-e-participatie'),
      ]),
    },
    [sales.moreInformationBlock]: url('https://argu.co/info#moreInformation'),
  },
},

/***************** PROCESS PAGE *****************/

{
  "@id": "https://argu.co/info/werkwijze",
  [rdfx.type]: sales.ProcessPage,
  [schema.name]: 'Werkwijze participatiewebsite',
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Participatie doe je samen.',
    [schema.text]: 'Hoe? Door jou waar nodig te ondersteunen bij het inrichten van een participatieplatform.',
    ...commonHeaderBGProps,
  },
  [schema.description]: 'Onze ervaring heeft tot een gefaseerde werkwijze geleid waarmee wij zorgen dat jij het meeste rendement haalt uit jouw participatietraject. Start vandaag nog!',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/processpage_one.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/processpage_one.png'),
    [ontola.ns('format/webp')]: asset('/sales/images/processpage_one.webp'),
  },
  [sales.secondaryImage]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/processpage_two.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/processpage_two.png'),
    [ontola.ns('format/webp')]: asset('/sales/images/processpage_two.webp'),
  },
  [sales.tertiaryImage]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/processpage_three.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/processpage_three.png'),
    [ontola.ns('format/webp')]: asset('/sales/images/processpage_three.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [sales.textTitle]: 'Het Argu proces: van uitdaging naar beslissing',
  [sales.textBlock]: 'Argu is ontworpen om het gehele proces van besluitvorming transparanter, overzichtelijker en interactief te maken. Onze ervaring heeft tot een gefaseerde werkwijze geleid waarmee wij zorgen dat jij het meeste rendement haalt uit jouw participatietraject.',
  [sales.stepper]: {
    [rdfx.type]: rdfx.Seq,
    [rdfx.ns('_01')]: {
      [rdfx.type]: sales.Step,
      [schema.name]: 'Platform inrichten',
      [schema.text]: 'In deze fase wordt het platform aangemaakt, collega’s uitgenodigd als beheerder en gezorgd dat het platform past binnen de huisstijl van jouw organisatie.'
    },
    [rdfx.ns('_02')]: {
      [rdfx.type]: sales.Step,
      [schema.name]: 'Content uitwerken',
      [schema.text]: 'Nu het vraagstuk helder is, wordt de website ingericht. Zo krijgt iedereen het gevoel van hoe het er uiteindelijk uit komt te zien.'
    },
    [rdfx.ns('_03')]: {
      [rdfx.type]: sales.Step,
      [schema.name]: 'Voorbereiden lancering',
      [schema.text]: 'Wij bespreken de eerste versie en passen waar nodig enkele zaken aan. Dit alles met als doel om de betrokkenheid te vergroten.'
    },
    [rdfx.ns('_04')]: {
      [rdfx.type]: sales.Step,
      [schema.name]: 'Starten met het traject',
      [schema.text]: 'De website staat klaar om live te gaan en de verbinding te maken met jouw community. Nu komt het aan op het genereren van bezoekers. Wij adviseren jou hierin.'
    },
    [rdfx.ns('_05')]: {
      [rdfx.type]: sales.Step,
      [schema.name]: 'Rapporteren en evalueren',
      [schema.text]: 'Wij zijn uiteraard net zoals jij benieuwd naar het succes van het traject. Wij evaluaren gezamelijk de gang van zaken en kijken naar de mate van betrokkenheid gedurende het traject.'
    },
  },
  [argu.lowerSection]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.H2,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'De Argu academy',
          }
        ])
      },
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Naast onze bewezen werkwijze hebben wij een academy ingericht waarmee wij jou in staat stellen Argu zo optimaal mogelijk in te zetten voor jouw vraagstuk. Bekijk ',
          },
          {
            [rdfx.type]: elements.A,
            [argu.trackingId]: 'process-page-academy-link',
            [ontola.href]: url('https://argu.co/academy'),
            [elements.children]: seq([
              {
                [rdfx.type]: elements.InnerText,
                [schema.text]: 'de academy'
              }
            ])
          },
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: '.',
          },
        ])
      },
    ])
  }
},

/***************** ABOUT PAGE *****************/

{
  "@id": 'https://argu.co/info/over-ons',
  [rdfx.type]: sales.AboutPage,
  [schema.name]: 'Over ons - Argu',
  [schema.description]: 'Argu is gestart met een simpele missie: het internet gebruiken om mensen te betrekken bij besluitvorming.  Benieuwd naar ons team?',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Beslis samen beter',
    [schema.text]: 'Dat is waar Argu voor staat.',
    ...commonHeaderBGProps,
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [sales.sections]: seq([
    {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.H2,
          [elements.align]: 'center',
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Missie',
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.align]: 'center',
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Argu is gestart in 2015 met een simpele missie: het internet gebruiken om mensen te betrekken bij besluitvorming. We ontwikkelden een online tool met focus op oplossingsgerichte discussie.',
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.align]: 'center',
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Sindsdien hebben we meer dan 150 online participatietrajecten begeleid. We hebben daardoor niet alleen een krachtig, gespecialiseerd platform kunnen maken, maar ook veel ervaring opgedaan over hoe online participatie succesvol is in te zetten.',
            },
          ]),
        },
      ]),
    },
    {
      [rdfx.type]: sales.Values,
      [schema.name]: 'Onze waarden',
      [sales.values]: seq([
        {
          [rdfx.type]: elements.Document,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H3,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Persoonsgegevens zijn geen verdienmodel',
                },
              ]),
            },
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Jouw data is van jou. Wij willen geen geld verdienen door persoonsgegevens te verzamelen en door te verkopen. Persoonlijke advertenties horen niet thuis in onze software.',
                },
              ]),
            },
          ])
        },
        {
          [rdfx.type]: elements.Document,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H3,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Maatschappelijke relevantie',
                },
              ]),
            },
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Wij vinden het belangrijk om kennis en kunde in te zetten voor maatschappelijke vooruitgang. Geld verdienen is nodig om de rekeningen te betalen, maar het is geen doel op zich.',
                },
              ]),
            },
          ])
        },
        {
          [rdfx.type]: elements.Document,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H3,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Transparantie',
                },
              ]),
            },
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Wanneer kennis en informatie vrij toegankelijk is, gaat alles makkelijker. Daarom delen we zo veel mogelijk van onze kennis en kunde. Dat betekent onder andere dat we zo onze broncode delen onder open licenties en onze lessen delen in blogposts.',
                },
              ]),
            },
          ])
        },
        {
          [rdfx.type]: elements.Document,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.H3,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Discussie is waardevol',
                },
              ]),
            },
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Meningsverschillen zijn er altijd, en die zijn nuttig. Kritiek moet altijd kunnen worden gedeeld en bespreekbaar zijn, zodat je daar als organisatie en als mens van kan leren.',
                },
              ]),
            },
          ])
        },
      ])
    },
    {
      [rdfx.type]: sales.Team,
      [schema.name]: 'Ons team',
      [sales.teamMembers]: seq([
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Joep',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Joep',
            [ontola.ns('format/avif')]: asset('/sales/images/joep.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/joep.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/joep.webp'),
          },
          [schema.text]: 'CEO',
          [schema.telephone]: '+316 360 20 942',
          [schema.email]: 'joep@argu.co',
          [ontola.href]: url('https://www.linkedin.com/in/joepmeindertsma/'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Michiel',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Michiel',
            [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
          },
          [schema.text]: 'CFO',
          [schema.telephone]: '+316 360 20 942',
          [schema.email]: 'michiel@argu.co',
          [ontola.href]: url('https://www.linkedin.com/in/michiel-van-den-ingh/'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Thom',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Thom',
            [ontola.ns('format/avif')]: asset('/sales/images/thom.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/thom.png'),
            [ontola.ns('format/jpg')]: asset('/sales/images/thom.jpg'),
            [ontola.ns('format/webp')]: asset('/sales/images/thom.webp'),
          },
          [schema.text]: 'CTO / Software developer',
          [ontola.href]: url('https://www.linkedin.com/in/rescribet/'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Arthur',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Arthur',
            [ontola.ns('format/avif')]: asset('/sales/images/arthur.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/arthur.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/arthur.webp'),
          },
          [schema.text]: 'Software developer',
          [ontola.href]: url('https://www.linkedin.com/in/awdingemans/'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Marcel',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Marcel',
            [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
          },
          [schema.text]: 'Projectmanager',
          [schema.telephone]: '+316 1808 8926',
          [schema.email]: 'marcel@argu.co',
          [ontola.href]: url('https://www.linkedin.com/in/marceljongsma/'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Polle',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Polle',
            [ontola.ns('format/avif')]: asset('/sales/images/polle.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/polle.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/polle.webp'),
          },
          [schema.text]: 'Software developer',
          [ontola.href]: url('https://www.linkedin.com/in/polle-pas-a60647183'),
        },
        {
          [rdfx.type]: schema.Person,
          [schema.name]: 'Job',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola.alt]: 'Job',
            [ontola.ns('format/avif')]: asset('/sales/images/job.avif'),
            [ontola.ns('format/png')]: asset('/sales/images/job.png'),
            [ontola.ns('format/webp')]: asset('/sales/images/job.webp'),
          },
          [schema.text]: 'Software developer',
          [ontola.href]: url('https://www.linkedin.com/in/job-eijdems-3b08551b8/'),
        },
      ])
    }
  ])
},

/***************** FACET PAGE *****************/

{
  "@id": "https://argu.co/info/functionaliteiten",
  [rdfx.type]: sales.FacetPage,
  [schema.name]: 'Functionaliteiten van Argu',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [schema.description]: 'Met de functionaliteiten van Argu start je eenvoudig een krachtig participatieplatform waarmee je inwoners kan betrekken bij veranderingen.',
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ns('format/avif')]: asset('/sales/images/processpage_one.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/processpage_one.png'),
    [ontola.ns('format/jpg')]: asset('/sales/images/processpage_one.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/processpage_one.webp'),
  },
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Alle functionaliteiten in huis',
    [schema.text]: 'Argu is een krachtig en flexibel platform waarmee je snel online bent. Mis je iets? Dan bouwen wij precies dat wat jij nodig hebt.',
    ...commonHeaderBGProps,
  },
  [schema.color]: '#FBFBFB',
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [sales.textTitle]: 'Het Argu proces: Van uitdaging naar beslissing',
  [sales.textBlock]: 'Argu is ontworpen om het gehele proces van besluitvorming transparanter, overzichtelijker en interactief te maken. Onze ervaring heeft tot een gefaseerde werkwijze geleid waarmee wij zorgen dat jij het meeste rendement haalt uit jouw participatietraject.',
  [sales.ns('moreTitle')]: 'En wat kost dat?',
  [sales.ns('moreDescription')]: 'Bekijk onze ',
  [sales.ns('morePageName')]: 'tarieven',
  [sales.ns('morePageLink')]: url('https://argu.co/info/prijzen'),
  [sales.facets]: {
    [rdfx.type]: rdfx.Seq,
    [rdfx.ns('_01')]: {
      [rdfx.type]: sales.Facet,
      [schema.name]: 'Gebruiksvriendelijk',
      [schema.text]: 'Toegankelijke participatie voor iedereen',
      [schema.color]: '#A30555',
      [sales.flexDirection]: 'row',
      [as.items]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: {
          [schema.color]: '#2271b3',
          [schema.name]: 'Eenvoudig registratieproces',
          [schema.text]: 'Gebruikers kunnen alle content zien en hoeven pas te registreren nádat ze ergens op hebben gestemd. Liever een besloten omgeving? Dan kan je mensen uitnodigen via een veilige stemcode.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/eenvoudig_registratieproces.mp4'),
          },
        },
        [rdfx.ns('_02')]: {
          [schema.color]: '#42145f',
          [schema.name]: 'Gebruiksvriendelijk platform dat op alle apparaten werkt',
          [schema.text]: 'Argu is een responsive webapplicatie.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/gebruiksvriendelijk_platform_dat_op_alle_apparaten_werkt.mp4'),
          },
        },
        [rdfx.ns('_03')]: {
          [schema.color]: '#c31a1a',
          [schema.name]: 'Look and feel aanpassen naar huisstijl',
          [schema.text]: 'Het platform is eenvoudig aan te passen naar jouw huisstijl.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/look_and_feel_aanpassen_naar_huisstijl.mp4'),
          },
        },
        [rdfx.ns('_04')]: {
          [schema.color]: '#2D7080',
          [schema.name]: 'Voldoet aan WCAG standaarden',
          [schema.text]: 'Voor mensen met een visuele of auditieve beperking is het platform goed te gebruiken.',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola['format/svg']]: asset('/sales/images/WCAG_image.svg'),
          },
        },
      },
    },
    [rdfx.ns('_02')]: {
      [rdfx.type]: sales.Facet,
      [schema.name]: 'Verhogen van de betrokkenheid',
      [schema.text]: 'Ontworpen om interactie te stimuleren',
      [sales.flexDirection]: 'row-reverse',
      [as.items]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: {
          [schema.color]: '#0072ba',
          [schema.name]: 'Meldingen / notifications',
          [schema.text]: 'Volg items en ontvang e-mails bij nieuwe berichten. Zo krijg je tot 350% meer interactie.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/meldingen_notifications.mp4'),
          },
        },
        [rdfx.ns('_02')]: {
          [schema.color]: '#457f34',
          [schema.name]: 'Updates',
          [schema.text]: 'Houd mensen op de hoogte en koppel terug via updates.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/updates.mp4'),
          },
        },
        [rdfx.ns('_03')]: {
          [schema.color]: '#457f34',
          [schema.name]: 'Interactief gebruik van kaarten',
          [schema.text]: 'Laat gebruikers items op de kaart prikken.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/interactief_gebruik_van_kaarten.mp4'),
          },
        },
        [rdfx.ns('_04')]: {
          [schema.color]: '#0072ba',
          [schema.name]: 'Groepen- en rechtenbeheer',
          [schema.text]: 'Bepaal per item of forum wie wat mag bekijken of kan reageren.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/groepen_en_rechtenbeheer.mp4'),
          },
        },
      },
    },
    [rdfx.ns('_03')]: {
      [rdfx.type]: sales.Facet,
      [schema.name]: 'Veiligheid & privacy',
      [schema.text]: 'Privacyvriendelijk',
      [sales.flexDirection]: 'row',
      [as.items]: {
        [rdfx.type]: rdfx.Seq,
        [rdfx.ns('_01')]: {
          [schema.color]: '#0072ba',
          [schema.name]: 'We verwerken zo min mogelijk persoonsgegevens',
          [schema.text]: 'Alleen e-mailadres en gebruikersnaam zijn verplicht.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/we_verwerken_zo_min_mogelijk_persoonsgegevens.mp4'),
          },

        },
        [rdfx.ns('_02')]: {
          [schema.color]: '#2D7080',
          [schema.name]: 'Privacy-vriendelijke user tracking',
          [schema.text]: 'Geen tracking via Facebook, Google of anderen.',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola['format/png']]: asset('/sales/images/privacy-vriendelijke_user_tracking.png'),
          },
        },
        [rdfx.ns('_03')]: {
          [schema.color]: '#2D7080',
          [schema.name]: 'Privacy-vriendelijke statistieken',
          [schema.text]: 'In plaats van Google Analytics gebruiken we Matomo.',
          [schema.image]: {
            [rdfx.type]: ontola.PictureSet,
            [ontola['format/png']]: asset('/sales/images/privacy-vriendelijke_statistieken.png'),
          },
        },
      },
    },
    [rdfx.ns('_04')]: {
      [rdfx.type]: sales.Facet,
      [schema.name]: 'Inzetbaar voor alle vraagstukken',
      [schema.text]: 'Keuze uit verschillende tools',
      [schema.color]: '#3B7333',
      [sales.flexDirection]: 'row-reverse',
      [as.items]: seq([
        {
          [schema.color]: '#475668',
          [schema.name]: 'Ideegeneratie',
          [schema.text]: 'Met onze unieke discussietool kun je ideeën verzamelen en draagvlak meten.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/ideegeneratie.mp4'),
          },
        },
        {
          [schema.color]: '#2271b3',
          [schema.name]: 'Scenario discussie',
          [schema.text]: 'Laat mensen kiezen uit opties die ieder hun eigen voor- en nadelen hebben.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/scenario-discussie.mp4'),
          },
        },
        {
          [schema.color]: '#42145f',
          [schema.name]: 'Stemmen',
          [schema.text]: 'Via Argu kun je gebruikers laten stemmen op ideeën. Met losse voor- en tegenargumenten blijven discussies overzichtelijk.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/stemmen.mp4'),
          },
        },
        {
          [schema.color]: '#475668',
          [schema.name]: 'Vragenlijsten',
          [schema.text]: 'Maak een professionele enquête en analyseer de resultaten.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/vragenlijsten.mp4'),
          },
        },
        {
          [schema.color]: '#0072ba',
          [schema.name]: 'Traject',
          [schema.text]: 'Met een traject betrek je mensen over een langere periode en ga je gefaseerd te werk.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/traject.mp4'),
          },
        },
        {
          [schema.color]: '#0072ba',
          [schema.name]: 'Begrotingstool',
          [schema.text]: 'Laat mensen meedenken bij het verdelen en toekennen van budgetten.',
          [schema.image]: {
            [rdfx.type]: ontola.VideoSet,
            [ontola['format/mp4']]: asset('/sales/videos/features/budgettool.mp4'),
          },
        },
      ]),
    },
  },
},

/***************** CONTACT *****************/

{
  '@id': 'https://argu.co/info/contact',
  [rdfx.type]: sales.ns('ContactPage'),
  [schema.name]: 'Contact - Argu',
  [schema.description]: 'Meer weten over de kracht van een participatieplatform? Kom met ons in contact of plan een demo met een van onze participatie adviseurs.',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Contact',
    [schema.text]: 'Heb je een vraag of wil je meer informatie over onze producten? Vul het contactformulier in en we komen snel bij je terug. Wij zijn ook bereikbaar per e-mail, telefoon, chat en onze social media kanalen.',
    ...commonHeaderBGProps,
  },
  [sales.ns('email')]: 'info@argu.co',
  [sales.ns('tel')]: '+316 360 20 942',
  [sales.ns('streetAddress')]: 'Maliebaan 100',
  [sales.ns('postalCode')]: '3581 CZ',
  [sales.ns('locality')]: ' Utrecht',
  [sales.ns('logo')]: 'https://dptr8y9slmfgv.cloudfront.net/sales/logo.png',
  [sales.ns('logoText')]: 'Argu Logo',
  [sales.ns('discordLink')]: 'https://discord.gg/zMxyYNN',
  [sales.ns('discordText')]: 'Chat met ons',
  [sales.ns('website')]: 'Website',
  [sales.ns('websiteUrl')]: 'https://argu.co',

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
  ]),
  [schema.members]: seq([
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.alt]: 'Joep',
      [ontola.ns('format/avif')]: asset('/sales/images/joep.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/joep.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/joep.webp'),
    },
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.alt]: 'Michiel',
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.alt]: 'Marcel',
      [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
    }
  ])
},

/***************** PRICING *****************/

{
  "@id": "https://argu.co/info/prijzen",
  [rdfx.type]: sales.PricingPage,
  [schema.name]: "Prijs - Argu",
  [schema.description]: "Van burgerparticipatie tot community. Wij werken met vaste tarieven. Zo weet jij wat je kan verwachten van het begin tot de eindevaluatie.",
  [ontola.coverPhoto]: url("https://argu.co/info#CoverImage"),
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: "Onze prijzen",
    [schema.text]: 'Precies weten waar je aan toe bent. Wij werken met vaste tarieven.',
    [sales.backgroundImage]: url("https://dptr8y9slmfgv.cloudfront.net/sales/images/header.svg"),
    [sales.backgroundImageMobile]: url("https://dptr8y9slmfgv.cloudfront.net/sales/images/header_mobile.svg"),
    [sales.backgroundImageXL]: url("https://dptr8y9slmfgv.cloudfront.net/sales/images/header_xl.svg"),
  },
  [sales.callToActionBlock]: url("https://argu.co/info#CTABlock"),
  [sales.tiers]: seq([
    url('https://argu.co/info/prijzen#basisTier'),
    url('https://argu.co/info/prijzen#standaardTier'),
    url('https://argu.co/info/prijzen#customTier'),
  ]),
  [sales.sections]: seq([
    {
      [rdfx.type]: sales.ComparisonTable,
      [schema.text]: 'Belijk de volledige lijst met functionaliteiten',
      [sales.tiers]: seq([
        url('https://argu.co/info/prijzen#basisTier'),
        url('https://argu.co/info/prijzen#standaardTier'),
      ]),
      [sales.sections]: seq([
        {
          [rdfx.type]: sales.ComparisonTableGroup,
          [schema.text]: 'Gebruiksvriendelijk',
          [as.items]: seq([
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Gebruiksvriendelijk platform dat op alle apparaten werkt',
              [schema.text]: 'Argu is een responsive webapplicatie.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Look and feel aanpassen naar huisstijl',
              [schema.text]: 'Het platform is eenvoudig aan te passen naar jouw huisstijl.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Voldoet aan WCAG standaarden',
              [schema.text]: 'Voor mensen met een visuele of auditieve beperking is het platform goed te gebruiken.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Eenvoudig registratieproces',
              [schema.text]: 'Gebruikers kunnen alle content zien en hoeven pas te registreren nádat ze ergens op hebben gestemd. Liever een besloten omgeving? Dan kan je mensen uitnodigen via een veilige stemcode.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Zoeken',
              [schema.text]: 'Alle Items die je op Argu kan bekijken, zijn doorzoekbaar. Je kunt de zoekresultaten ook filteren en sorteren',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Exporteren',
              [schema.text]: 'Alle Items op Argu kunnen worden geëxporteerd. Dat kan per discussie, maar ook per forum.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Hergebruik (API)',
              [schema.text]: 'Alle informatie die je ziet op Argu, wordt middels de API gecommuniceerd. Deze API kan je ook zelf hergebruiken in andere applicaties.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Redirects',
              [schema.text]: 'Maak handige, leesbare URLs aan om het delen makkelijker te maken.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
          ])
        },
        {
          [rdfx.type]: sales.ComparisonTableGroup,
          [schema.text]: 'Verhogen van de betrokkenheid',
          [as.items]: seq([
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Meldingen/ notifications',
              [schema.text]: 'Volg items en ontvang e-mails bij nieuwe berichten. Zo krijg je tot 350% meer interactie.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Updates',
              [schema.text]: 'Houd mensen op de hoogte en koppel terug via updates.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Interactief gebruik van kaarten',
              [schema.text]: 'Laat gebruikers items op de kaart prikken.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Groepen- en rechtenbeheer',
              [schema.text]: 'Bepaal per item of forum wie wat mag bekijken of kan reageren.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Bijlagen en filmpjes',
              [schema.text]: 'Je kunt bestanden en externe (youtube) video\'s koppelen aan items.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Banners',
              [schema.text]: 'Gebruik een banner om een belangrijke boodschap te delen met al je bezoekers, zoals \"Dit forum is gesloten\".',
              [sales.tiers]: seq([
                { [rdfx.type]: schema.Thing, },
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
          ])
        },
        {
          [rdfx.type]: sales.ComparisonTableGroup,
          [schema.text]: 'Veiligheid & privacy',
          [as.items]: seq([
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'AVG-proof',
              [schema.text]: 'Alleen e-mailadres en gebruikersnaam zijn verplicht.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Privacy-vriendelijke user tracking',
              [schema.text]: 'Geen tracking via Facebook, Google of anderen.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Privacy-vriendelijke statistieken',
              [schema.text]: 'In plaats van Google Analytics gebruiken we Matomo.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
          ])
        },
        {
          [rdfx.type]: sales.ComparisonTableGroup,
          [schema.text]: 'Participatietools',
          [as.items]: seq([
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Ideegeneratie',
              [schema.text]: 'Met onze unieke discussietool kun je ideeën verzamelen en draagvlak meten.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Scenario discussie',
              [schema.text]: 'Laat mensen kiezen uit opties die ieder hun eigen voor- en nadelen hebben.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Stemmen',
              [schema.text]: 'Via Argu kun je gebruikers laten stemmen op ideeën. Met losse voor- en tegenargumenten blijven discussies overzichtelijk.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Vragenlijsten',
              [schema.text]: 'Maak een professionele enquête en analyseer de resultaten.',
              [sales.tiers]: seq([
                url('https://argu.co/info/prijzen#basisTier'),
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Traject',
              [schema.text]: 'Met een traject betrek je mensen over een langere periode en ga je gefaseerd te werk.',
              [sales.tiers]: seq([
                { [rdfx.type]: schema.Thing, },
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Begrotingstool',
              [schema.text]: 'Laat mensen meedenken bij het verdelen en toekennen van budgetten.',
              [sales.tiers]: seq([
                { [rdfx.type]: schema.Thing, },
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Swipetool',
              [schema.text]: 'Laat mensen eenvoudig stemmen door te swipen. Leent zich erg goed voor flits peilingen of een pol.',
              [sales.tiers]: seq([
                { [rdfx.type]: schema.Thing, },
                url('https://argu.co/info/prijzen#standaardTier'),
              ]),
            },
          ])
        },
        {
          [rdfx.type]: sales.ComparisonTableGroup,
          [schema.text]: 'Algemeen',
          [as.items]: seq([
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Aantal admins',
              [schema.text]: 'Met adminrechten kan je de instellingen van het platform wijzigen en bewerken.',
              [sales.tiers]: seq([
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: '1',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'Onbeperkt',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'URL keuze',
              [schema.text]: 'Maak gebruik van Argu op een argu.co subdomein of op een URL naar keuze.',
              [sales.tiers]: seq([
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'Op een argu.co subdomein',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'Naar keuze',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
              ]),
            },
            {
              [rdfx.type]: sales.ComparisonTableItem,
              [schema.name]: 'Aantal platformen',
              [schema.text]: 'Gebruik Argu zoveel als je wil',
              [sales.tiers]: seq([
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: '1',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
                {
                  [rdfx.type]: elements.Document,
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.P,
                      [elements.children]: seq([
                        {
                          [rdfx.type]: elements.InnerText,
                          [schema.text]: 'Onbeperkt',
                        }, // END Text
                      ]),
                    }, // END P
                  ]),
                },
              ]),
            },
          ])
        },
      ])
    },
    {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: "Stichting of vereniging?",
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url("https://argu.co/info/contact"),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: "Neem contact met ons op",
                },
              ]),
            },
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: " om de mogelijkheden te bespreken. Je ontvangt van ons een passend voorstel.",
            },
          ]),
        },
        {
          [rdfx.type]: elements.H2,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: "Partner worden?",
            },
          ]),
        },
        {
          [rdfx.type]: elements.P,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: "Dat kan! Wij bieden onze software aan voor resellers tegen andere tarieven. Neem ",
            },
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url("https://argu.co/info/contact"),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: "contact met ons op",
                },
              ]),
            },
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: " om de mogelijkheden te bespreken.",
            },
          ]),
        },
      ]),
    },
  ])
},
{
  '@id': 'https://argu.co/info/prijzen#basisTier',
  [rdfx.type]: sales.Tier,
  [schema.color]: '#DE9271',
  [schema.name]: "Basis",
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Ga zelf aan de slag met Argu aan de hand van de '
          },
          {
            [rdfx.type]: elements.A,
            [ontola.href]: url('https://argu.co/academy'),
            [elements.children]: seq([
              {
                [rdfx.type]: elements.InnerText,
                [schema.text]: 'Argu Academy'
              }
            ])
          },
        ]),
      },
    ])
  },
  [schema.price]: {
    [rdfx.type]: sales.Price,
    [schema.color]: '#DE9271',
    [sales.priceMonthly]: 95,
    [sales.priceYearly]: 1026,
  },
  [sales.includes]: seq([
    "Een community platform in jouw huisstijl",
    "Op een argu.co subdomein",
    "1 admin",
  ]),
  [sales.buttonLink]: url("https://argu.co/info/contact"),
},
{
  '@id': 'https://argu.co/info/prijzen#standaardTier',
  [rdfx.type]: sales.Tier,
  [schema.color]: '#2D7080',
  [schema.name]: "Standaard",
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Een volledig aanpasbaar community platform'
          },
        ]),
      },
    ])
  },
  [schema.price]: {
    [rdfx.type]: sales.Price,
    [schema.color]: '#2D7080',
    [sales.priceMonthly]: 395,
    [sales.priceYearly]: 4266,
  },
  [sales.tagline]: "Alles van Basic, plus:",
  [sales.includes]: seq([
    {
      [rdfx.type]: elements.Document,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.Span,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: "Beschikking over alle ",
            },
            {
              [rdfx.type]: elements.A,
              [ontola.href]: url("https://argu.co/info/functionaliteiten"),
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: "functionaliteiten",
                },
              ]),
            },
          ]),
        },
      ]),
    },
    "Eigen domeinnaam",
    "Meerdere platforms mogelijk",
  ]),
  [sales.buttonLink]: url("https://argu.co/info/contact"),
},
{
  '@id': 'https://argu.co/info/prijzen#customTier',
  [rdfx.type]: sales.Tier,
  [schema.color]: '#ACD9E3',
  [schema.name]: "Software op maat",
  [schema.text]: {
    [rdfx.type]: elements.Document,
    [elements.children]: seq([
      {
        [rdfx.type]: elements.P,
        [elements.children]: seq([
          {
            [rdfx.type]: elements.InnerText,
            [schema.text]: 'Wil je net even wat anders? Geen probleem! Wij houden ervan om nieuwe functionaliteiten te ontwikkelen.'
          },
        ]),
      },
    ])
  },
  [schema.price]: {
    [rdfx.type]: sales.Price,
    [schema.color]: 'inherit',
    [sales.priceStatic]: 'Op aanvraag',
  },
  [sales.tagline]: "Alles van Standaard is inbegrepen.",
  [sales.buttonLink]: url("https://argu.co/info/contact"),
},
/***************** CASES *****************/

{
  '@id': 'https://argu.co/info/cases',
  [rdfx.type]: sales.ns('CasesPage'),
  [schema.name]: 'Voorbeelden online participatie',
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Benieuwd hoe anderen het doen? Lees onze cases.',
    ...commonHeaderBGProps,
  },
  [schema.description]: 'Benieuwd naar de verhalen van andere gemeenten en organisaties? Laat onze klantcases je inspireren. Voor meer informatie kan je altijd contact opnemen!',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: "Klantlogos - Heerugowaard, Den Haag, Hollands Kroon, GroenLinks, RIVM, Rochdale, Gemeente Utrecht, CvTE, KVK, Drechtsteden, Vroonermeer noord, Heerenveen",
    [ontola.ns('format/avif')]: asset('/sales/images/klantlogos.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/klantlogos.png'),
    [ontola.ns('format/jpg')]: asset('/sales/images/klantlogos.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/klantlogos.webp'),
  },
  [schema.text]: 'Enkele van onze klanten',
  [as.items]: seq([
    url('https://argu.co/info/cases/de-drechtsteden-werken-samen-aan-de-energietransitie-en-warmtetransitie'),
    url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
    url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
    url('https://argu.co/info/cases/online-huurdersparticipatie-bij-thuisvester'),
    url('https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein'),
  ]),
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},

{
  '@id': 'https://argu.co/info/cases/de-drechtsteden-werken-samen-aan-de-energietransitie-en-warmtetransitie',
  [rdfx.type]: sales.CasePage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'De Drechtsteden werken samen aan de energietransitie & warmtetransitie',
    ...commonHeaderBGProps,
  },
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/case0.png'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.alt]: "Het schema waarin de energie transitie weergegeven wordt.",
    [ontola.ns('format/avif')]: asset('/sales/images/case0.avif'),
    [ontola.ns('format/png')]: asset('/sales/images/case0.png'),
    [ontola.ns('format/webp')]: asset('/sales/images/case0.webp'),
  },
  [schema.name]: 'De Drechtsteden werken samen aan de energietransitie & warmtetransitie',
  [sales.theme]: 'Energietransitie',
  [schema.description]: 'We gaan in Nederland over op duurzame energiebronnen. De aanleiding voor deze grootschalige transitie is iedereen bekend. De aarde warmt op met alle negatieve gevolgen voor ons klimaat. Dat proces willen we stoppen, zodat we een gezonde aarde kunnen doorgeven aan de generaties na ons. Gedreven door deze urgentie voelen de Drechtsteden (Dordrecht, Sliedrecht, Zwijndrecht, Alblasserdam, Hardinxveld-Giessendam en Hendrik-Ido-Ambacht) de noodzaak om met elkaar de schouders eronder te zetten.',
  [sales.tagline]: " De aarde warmt op met alle negatieve gevolgen voor ons klimaat. Dat proces willen we stoppen.",
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [schema.text]: url('https://argu.co/info/cases/de-drechtsteden-werken-samen-aan-de-energietransitie-en-warmtetransitie#content'),
  [schema.member]: {
    [schema.name]: 'Joep Meindertsma',
    [schema.telephone]: '+316 360 20 942',
    [schema.email]: 'joep@argu.co',
    [ontola.href]: 'https://www.linkedin.com/in/joepmeindertsma/',
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/joep.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/joep.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/joep.webp'),
    },
  }
},
{
  '@id': 'https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens',
  [rdfx.type]: sales.CasePage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Discussieplatform voor docenten over de centrale examens',
    ...commonHeaderBGProps,
  },
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/case1.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.alt]: "Drie scholieren die uit een schoolboek lezen.",
    [ontola.ns('format/avif')]: asset('/sales/images/case1.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/case1.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/case1.webp'),
  },
  [schema.name]: 'Discussieplatform voor docenten over de centrale examens',
  [sales.theme]: 'Community',
  [schema.description]: 'Het College voor Toetsen en Examens (CvTE) zorgt voor de uitvoering van de centrale examens. De coronacrisis zorgt voor enkele uitdagingen bij de organisatie en inrichting van deze examens. Om met docenten in contact te komen en docenten onderling van gedachte te laten wisselen heeft het CvTE Denkmee.cvte.nl gelanceerd. Dit is een discussieplatform waar je als docent en/of examensecretaris onder meer ideeën kan uitwisselen over de uitvoering van de centrale examens tijdens de coronacrisis.',
  [sales.tagline]: "Het College voor Toetsen en Examens (CvTE) zorgt voor de uitvoering van de centrale examens. De coronacrisis zorgt voor enkele uitdagingen bij de organisatie en inrichting van deze examens.",
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [schema.text]: url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens#content'),
  [schema.member]: {
    [rdfx.type]: schema.Person,
    [schema.name]: 'Marcel',
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
    },
    [schema.telephone]: '+316 1808 8926',
    [schema.email]: 'marcel@argu.co',
    [ontola.href]: url('https://www.linkedin.com/in/marceljongsma/'),
  }
},
{
  '@id': 'https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard',
  [rdfx.type]: sales.CasePage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Inwoners van Heerhugowaard denken mee over de herinrichting van Centrumwaard',
    ...commonHeaderBGProps,
  },
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/case2.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.alt]: "De stad Heerhugowaard in vogelvlucht perspectief",
    [ontola.ns('format/avif')]: asset('/sales/images/case2.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/case2.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/case2.webp'),
  },
  [schema.name]: 'Inwoners van Heerhugowaard denken mee over de herinrichting van Centrumwaard',
  [sales.theme]: 'Participatiewebsite',
  [schema.description]: 'De Gemeente Heerhugowaard werkt aan een gebiedsvisie voor Centrumwaard. De maanden voorafgaand aan het discussieplatform hebben alle inwoners, ondernemers en organisaties uit Centrumwaard mee kunnen doen in het proces om tot een gebiedsvisie te komen. De opbrengsten hebben geleid tot een aantal "richtinggevende uitspraken"',
  [sales.tagline]: "De Gemeente Heerhugowaard werkt aan een gebiedsvisie voor Centrumwaard.",
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [schema.text]: url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard#content'),
  [schema.member]: {
    [rdfx.type]: schema.Person,
    [schema.name]: 'Marcel',
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
    },
    [schema.telephone]: '+316 1808 8926',
    [schema.email]: 'marcel@argu.co',
    [ontola.href]: url('https://www.linkedin.com/in/marceljongsma/'),
  },
},
{
  '@id': 'https://argu.co/info/cases/online-huurdersparticipatie-bij-thuisvester',
  [rdfx.type]: sales.CasePage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Online huurdersparticipatie bij Thuisvester',
    ...commonHeaderBGProps,
  },
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/case3.png'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.alt]: "Drie flats langs een kanaal",
    [ontola.ns('format/avif')]: asset('/sales/images/case3.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/case3.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/case3.webp'),
  },
  [schema.name]: 'Online huurdersparticipatie bij Thuisvester',
  [sales.theme]: 'Huurdersparticipatie',
  [schema.description]: 'In september 2018 vroeg woningcorporatie Thuisvester haar huurders om initiatieven te bedenken in de wijk. De corporatie stelde namelijk een budget beschikbaar voor ondersteuning van initiatieven in de wijk. In plaats van dit via de traditionele communicatiemiddelen (bijvoorbeeld krant, folders) te doen, is er gekozen voor online participatie, om zo een bredere groep te betrekken en het besluitvormingsproces transparant te maken.',
  [sales.tagline]: "In september 2018 vroeg woningcorporatie Thuisvester haar huurders om initiatieven te bedenken in de wijk.",
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [schema.text]: url('https://argu.co/info/cases/online-huurdersparticipatie-bij-thuisvester#content'),
  [schema.member]: {
    [schema.name]: 'Michiel',
    [schema.telephone]: '+316 360 20 942',
    [schema.email]: 'michiel@argu.co',
    [ontola.href]: 'https://www.linkedin.com/in/michiel-van-den-ingh/',
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
  }
},
{
  '@id': 'https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein',
  [rdfx.type]: sales.CasePage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Inwoners laten meedenken bij nieuwe locaties voor  ondergrondse containers in IJsselstein',
    ...commonHeaderBGProps,
  },
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/case4.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.alt]: "Schermafbeelding van het argu platform met daar in een kaart die alle concept locaties voor ondergrondse afval containers aangeeft.",
    [ontola.ns('format/avif')]: asset('/sales/images/case4.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/case4.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/case4.webp'),
  },
  [schema.name]: 'Inwoners laten meedenken bij nieuwe locaties voor  ondergrondse containers in IJsselstein',
  [sales.theme]: 'Participatiewebsite',
  [schema.description]: 'Met het nieuwe afvalbeleid van de gemeente IJsselstein wordt er een overstap gemaakt naar ‘dynamisch inzamelen’. Dit betekent o.a. dat bewoners gebruik gaan maken van ondergrondse containers voor hun restafval. De gemeente IJsselstein wilde inwoners de mogelijkheid bieden te reageren op het concept locatieplan.',
  [sales.tagline]: "Met het nieuwe afvalbeleid van de gemeente IJsselstein wordt er een overstap gemaakt naar ‘dynamisch inzamelen’. ",
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
  [schema.text]: url('https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein#content'),
  [schema.member]: {
    [rdfx.type]: schema.Person,
    [schema.name]: 'Marcel',
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/marcel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/marcel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/marcel.webp'),
    },
    [schema.telephone]: '+316 1808 8926',
    [schema.email]: 'marcel@argu.co',
    [ontola.href]: url('https://www.linkedin.com/in/marceljongsma/'),
  },
},
/***************** FOOTER *****************/

{
  '@id': 'https://argu.co/info/menus/footer',
  [rdfx.type]: argu.ns('Footer'),
  [argu.ns('columns')]: seq([
    {
      [rdfx.type]: ontola.MenuItem,
      [schema.name]: 'Argu',
      [ontola.menuItems]: seq([
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Functionaliteiten',
          [ontola.href]: url('https://argu.co/info/functionaliteiten'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Prijs',
          [ontola.href]: url('https://argu.co/info/prijzen'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Werkwijze',
          [ontola.href]: url('https://argu.co/info/werkwijze'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Over ons',
          [ontola.href]: url('https://argu.co/info/over-ons'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Contact',
          [ontola.href]: url('https://argu.co/info/contact'),
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
          [schema.name]: 'Academy',
          [ontola.href]: url('https://argu.co/academy'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Meer blogs',
          [ontola.href]: url('https://argu.co/argu/blog'),
        },
        {
          [rdfx.type]: ontola.MenuItem,
          [schema.name]: 'Helpdesk',
          [ontola.href]: url('https://argu.co/argu/help'),
        },
      ]),
    },
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
          [ontola.href]: 'https://goo.gl/maps/Nm9NpNCFdDo8jHyW9',
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
      [rdfx.type]: sales.MailchimpForm,
      [ontola.href]: url('https://argu.us14.list-manage.com/subscribe/post?u=4c95c28c97fc4b1bf460ca76f&amp;id=80b59a6f28'),
      [schema.name]: 'Schrijf je in',
      [schema.text]: 'Blijf op de hoogte rondom participatie. Door je in te schrijven voor onze nieuwsbrief ontvang je periodiek het laatste nieuws, updates aan het platform en klant cases.',
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
},

/***************** BLOG PAGE *************/

{
  '@id': 'https://argu.co/info/blog',
  [rdfx.type]: sales.Blogs,
  [schema.name]: 'Blijf op de hoogte met onze blogs',
  [schema.description]: 'Wij houden jou op de hoogte van ontwikkelingen rondom burgerparticipatie en andere vormen van participatie.',
  [ontola.coverPhoto]: url('https://argu.co/info#CoverImage'),
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Blog',
    ...commonHeaderBGProps,
  },
  [sales.blogs]: seq([
    url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie'),
    url('https://argu.co/info/blogs/5-checks-voordat-je-aan-e-participatie-begint'),
    url('https://argu.co/info/blogs/argu-lanceert-openBesluitvorming'),
    url('https://argu.co/info/blogs/waarom-een-wijkbudget'),
    url('https://argu.co/info/blogs/wat-kost-e-participatie'),
    url('https://argu.co/info/blogs/online-huurdersparticipatie-is-de-toekomst'),
    url('https://argu.co/info/blogs/verwachtingsmanagement-bij-participatie'),
    url('https://argu.co/info/blogs/participatieladder-bij-online-participatie'),
    url('https://argu.co/info/blogs/online-participatie-biedt-een-betere-dynamiek'),
    url('https://argu.co/info/blogs/een-succesvol-participatietraject-hoe-doe-je-dat-als-gemeente'),
    url('https://argu.co/info/blogs/de-vloeken-van-burgerparticipatie'),
    url('https://argu.co/info/blogs/3-succesvolle-strategieen-om-te-starten-met-e-participatie'),
  ]),
  [schema.text]: 'Hoe wil jij Argu inzetten?',
  [sales.showcase]: {
    [rdfx.type]: rdfx.Seq,
    [rdfx.ns('_01')]: url("https://argu.co/info/participatie"),
    [rdfx.ns('_02')]: url("https://argu.co/info/huurdersparticipatie"),
    [rdfx.ns('_03')]: url("https://argu.co/info/community"),
    [rdfx.ns('_04')]: url("https://argu.co/info/energietransitie"),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},

/***************** BLOGS *****************/
{
  '@id': 'https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Hoe toegankelijk is online participatie?',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-01-28T10:28:57+01:00',
  [schema.dateModified]: '2021-01-28T10:29:14.002+01:00',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Hoe toegankelijk is online participatie?',
  [sales.theme]: "Participatie",
  [schema.description]: 'In de afgelopen jaren heb ik als participatieadviseur bij Argu in gesprekken over online participatie vaak kritische vragen gekregen over de toegankelijkheid van een online platform. Steeds meer participatietrajecten worden online gefaciliteerd. Gemeenten en andere organisaties zien de voordelen van online tools om meer mensen en een diversere groep mensen te betrekken dan via de traditionele inspraakavond. Maar wat betekent dat voor mensen die geen goede digitale vaardigheden hebben? En is een online platform ook bruikbaar voor mensen met een visuele beperking? Kortom: hoe toegankelijk is online participatie?',
  [schema.text]: url('https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs1.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Hand die wijst naar een computerscherm',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs1.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs1.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs1.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/5-checks-voordat-je-aan-e-participatie-begint',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: '5 checks voordat je aan e-participatie begint',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-04-21T16:55:59+02:00',
  [schema.dateModified]: '2021-04-22T11:22:55.231+02:00',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: '5 checks voordat je aan e-participatie begint',
  [sales.theme]: "Participatie",
  [schema.description]: 'Participatietrajecten worden vaak geïnitieerd vanuit een plicht. Overheden moeten inwoners bijvoorbeeld betrekken bij veranderingen in de fysieke omgeving. Maar bedenk dat "mensen betrekken" een behoorlijk vaag doel is.',
  [schema.text]: url('https://argu.co/info/blogs/5-checks-voordat-je-aan-e-participatie-begint#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs2.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Klembord met een pen',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs2.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs2.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs2.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/argu-lanceert-openBesluitvorming',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Argu lanceert OpenBesluitvorming.nl',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2019-12-31T14:03:11.022+01:00',
  [schema.dateModified]: '2019-12-31T14:03:11.147+01:00',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/joep.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/joep.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/joep.webp'),
    },
    [schema.name]: 'Joep Meindertsma',
  },
  [schema.name]: 'Argu lanceert OpenBesluitvorming.nl',
  [sales.theme]: "Overig",
  [schema.description]: 'Argu lanceert OpenBesluitvorming.nl; een web app waarmee door vergaderstukken van meer dan 120 gemeenten en provincies kan worden gezocht.',
  [schema.text]: url('https://argu.co/info/blogs/argu-lanceert-openBesluitvorming#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs3.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Schermafbeelding van de OpenBesluitvorming.nl website',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs3.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs3.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs3.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/waarom-een-wijkbudget',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Waarom een wijkbudget?',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-07-13T13:48:43.796Z',
  [schema.dateModified]: '2021-07-13T13:48:43.796Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Waarom een wijkbudget?',
  [sales.theme]: "Participatie",
  [schema.description]: 'In de afgelopen jaren hebben een aantal Nederlandse gemeenten geëxperimenteerd met online platforms waarmee inwoners een budget kunnen verdelen over initiatieven van medebewoners in de wijk. In dit artikel zet ik uiteen waarom je als gemeente of woningcorporatie gebruik zou willen maken van een wijkbudget.',
  [schema.text]: url('https://argu.co/info/blogs/waarom-een-wijkbudget#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs4.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Schermafbeelding van de OpenBesluitvorming.nl website',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs4.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs4.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs4.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/wat-kost-e-participatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Wat kost e-participatie?',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-07-13T13:48:43.796Z',
  [schema.dateModified]: '2021-07-13T13:48:43.796Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Wat kost e-participatie?',
  [sales.theme]: "Participatie",
  [schema.description]: 'E-participatie is het betrekken van inwoners bij beleid en veranderingen in de leefomgeving door middel van online instrumenten. Naast de bekende online enquêtes zijn er de afgelopen jaren ook participatieplatforms ontwikkeld die specifieke tools aanbieden om burgerparticipatie laagdrempelig en effectief te maken. Een logische vraag is dan ook “wat kost dat?”.',
  [schema.text]: url('https://argu.co/info/blogs/wat-kost-e-participatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs5.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Schermafbeelding van de OpenBesluitvorming.nl website',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs5.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs5.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs5.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/online-huurdersparticipatie-is-de-toekomst',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Online huurdersparticipatie is de toekomst',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-07-22T07:38:26.055Z',
  [schema.dateModified]: '2021-07-22T07:38:26.055Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Online huurdersparticipatie is de toekomst',
  [sales.theme]: "Huurdersparticipatie",
  [schema.description]: 'In de afgelopen jaren heeft Argu veel woningcorporaties geholpen met het betrekken van huurders bij beleid. In dit artikel noem ik de meest herkenbare uitdagingen op het gebied van huurdersparticipatie en hoe online participatie daar oplossingen voor kan bieden.',
  [schema.text]: url('https://argu.co/info/blogs/online-huurdersparticipatie-is-de-toekomst#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs6.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Een hand die schrijft, er ligt een sleutelbos naast.',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs6.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs6.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs6.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/verwachtingsmanagement-bij-participatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Verwachtingsmanagement bij participatie',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Verwachtingsmanagement bij participatie',
  [sales.theme]: "Participatie",
  [schema.description]: 'Iedereen die weleens een participatietraject heeft georganiseerd kent het woord ‘verwachtingsmanagement’. Dit begrip gaat over het zorgvuldig formuleren van teksten om te voorkomen dat inwoners bepaalde informatie verkeerd begrijpen. Het belangrijkste doel van verwachtingsmanagement is het voorkomen van wantrouwen, bezwaarprocedures en rechtszaken. Maar welke verwachtingen hebben mensen eigenlijk bij participatietrajecten? En kun je die wel managen?',
  [schema.text]: url('https://argu.co/info/blogs/verwachtingsmanagement-bij-participatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs7.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Een hand die schrijft, er ligt een sleutelbos naast.',
    [ontola.ns('format/avif')]: asset('/sales/images/blogs7.avif'),
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs7.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs7.webp'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/participatieladder-bij-online-participatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Participatieladder bij online participatie',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Participatieladder bij online participatie',
  [sales.theme]: "Participatie",
  [schema.description]: 'Gemeenten en andere overheden starten ieder jaar meerdere participatietrajecten. Met een participatietraject probeer je een doelgroep te betrekken bij het vormen van beleid. Je kunt daarbij bepalen hoeveel invloed die doelgroep kan uitoefenen op het uiteindelijke besluit. Maar hoe bepaal je dit? ',
  [schema.text]: url('https://argu.co/info/blogs/participatieladder-bij-online-participatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs8.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Een hand die schrijft, er ligt een sleutelbos naast.',
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs8.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs8.webp'),
    [ontola.ns('format/avif')]: asset('/sales/images/blogs8.avif'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/online-participatie-biedt-een-betere-dynamiek',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Online participatie biedt een betere dynamiek',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Online participatie biedt een betere dynamiek',
  [sales.theme]: "Participatie",
  [schema.description]: 'Mocht je weleens een inspraakavond hebben bezocht dan is het je vast wel opgevallen hoe de deelnemers van elkaar verschillen. Sommige mensen zitten aandachtig te luisteren maar komen nooit aan het woord. Andere mensen schromen niet om hun hand op te steken als ze iets willen zeggen - of erger - onderbreken de spreker om hun mening te verkondigen. Hierdoor werkt het participatieproces niet optimaal. Wie hard roept krijgt aandacht maar wie nadenkt voordat hij zich uitspreekt komt niet of nauwelijks aan het woord.',
  [schema.text]: url('https://argu.co/info/blogs/online-participatie-biedt-een-betere-dynamiek#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs9.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Playmobile poppetjes die rond een tafel staan alsof ze discussieren.',
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs9.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs9.webp'),
    [ontola.ns('format/avif')]: asset('/sales/images/blogs9.avif'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/een-succesvol-participatietraject-hoe-doe-je-dat-als-gemeente',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'Een succesvol participatietraject, hoe doe je dat als gemeente?',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'Een succesvol participatietraject, hoe doe je dat als gemeente?',
  [sales.theme]: "Participatie",
  [schema.description]: 'Veel gemeenten organiseren jaarlijks meerdere participatietrajecten. Maar hoe laat je zo’n traject nou slagen? In de afgelopen jaren heb ik als participatieadviseur meer dan 150 trajecten begeleid. In dit artikel deel ik mijn ervaringen en de inzichten van de communicatieadviseurs, beleidsadviseurs en projectleiders waar ik mee heb samengewerkt.',
  [schema.text]: url('https://argu.co/info/blogs/een-succesvol-participatietraject-hoe-doe-je-dat-als-gemeente#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs10.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Uit karton genkipte denk- en spreekwolkjes met een vraagteken er in.',
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs10.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs10.webp'),
    [ontola.ns('format/avif')]: asset('/sales/images/blogs10.avif'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/de-vloeken-van-burgerparticipatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: 'De vloeken van burgerparticipatie',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: 'De vloeken van burgerparticipatie',
  [sales.theme]: "Participatie",
  [schema.description]: 'Als je als projectleider wordt aangesteld voor een participatietraject maak je een goed plan voor de komende tijd. Waarschijnlijk begin je met een stakeholderanalyse en een inventarisatie van de middelen die je kunt inzetten om mensen te betrekken. Het is best een tijdsinvestering om dit voor te bereiden. En daarmee ben je er helaas nog niet! Voordat je begint liggen er al beren op de weg. Er berusten namelijk een aantal vloeken op ieder participatietraject. Maar wees gerust, in dit artikel lees je hoe je hiermee om kunt gaan.',
  [schema.text]: url('https://argu.co/info/blogs/de-vloeken-van-burgerparticipatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs11.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Pictogrammen die boze spanborden uitbeelden.',
    [ontola.ns('format/png')]: asset('/sales/images/blogs11.png'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs11.webp'),
    [ontola.ns('format/avif')]: asset('/sales/images/blogs11.avif'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},
{
  '@id': 'https://argu.co/info/blogs/3-succesvolle-strategieen-om-te-starten-met-e-participatie',
  [rdfx.type]: sales.BlogPage,
  [sales.header]: {
    [rdfx.type]: sales.Header,
    [schema.name]: '3 succesvolle strategieën om te starten met e-participatie',
    ...commonHeaderBGProps,
  },
  [schema.datePublished]: '2021-10-27T08:29:24.082Z',
  [schema.dateModified]: '2021-10-27T08:29:24.082Z',
  [schema.creator]: {
    [schema.image]: {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/michiel.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/michiel.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/michiel.webp'),
    },
    [schema.name]: 'Michiel van den Ingh',
  },
  [schema.name]: '3 succesvolle strategieën om te starten met e-participatie',
  [sales.theme]: "Participatie",
  [schema.description]: 'Veel organisaties willen starten met online participatie. De voordelen zijn inmiddels bekend: het is laagdrempeliger voor mensen om deel te nemen, je bereikt meer mensen, kunt eenvoudiger input verzamelen en resultaten terugkoppelen is een fluitje van een cent. Maar hoe begin je?',
  [schema.text]: url('https://argu.co/info/blogs/3-succesvolle-strategieen-om-te-starten-met-e-participatie#content'),
  [ontola.coverPhoto]: {
    [rdfx.type]: schema.ImageObject,
    [ontola.imgUrl1500x2000]: asset('/sales/images/blogs12.jpg'),
  },
  [schema.image]: {
    [rdfx.type]: ontola.ns('PictureSet'),
    [ontola.ariaLabel]: 'Een mindmap met in het midden een gloeilamp.',
    [ontola.ns('format/jpg')]: asset('/sales/images/blogs12.jpg'),
    [ontola.ns('format/webp')]: asset('/sales/images/blogs12.webp'),
    [ontola.ns('format/avif')]: asset('/sales/images/blogs12.avif'),
  },
  [sales.callToActionBlock]: url('https://argu.co/info#CTABlock'),
},


/***************** PARTIALS *****************/
{
  '@id': 'https://argu.co/info#CTABlock',
  [rdfx.type]: sales.CallToActionBlock,
  [sales.callToActionTitle]: 'Ontdek de kansen voor jouw vraagstuk',
  [sales.callToActionText]: 'Plan een vrijblijvende demo in!',
  [sales.callToActionBackgroundImage]: asset('/sales/images/call_to_action_background.svg'),
  [sales.callToAction]: {
    [rdfx.type]: sales.CallToActionButton,
    [schema.text]: "Plan een demo",
    [ontola.href]: url('https://calendly.com/argu_co/online-demo'),
  },
},
{
  '@id': 'https://argu.co/info#propositions',
  [rdfx.type]: rdfx.Seq,
  [rdfx.ns('_01')]: {
    [rdfx.type]: sales.Proposition,
    [schema.color]: '#B33A00',
    [sales.textColor]: '#000',
    [schema.image]: url('http://fontawesome.io/icon/heart'),
    [schema.name]: "Onze kracht",
    [schema.text]: seq([
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: 'Meer dan ',
      },
      {
        [rdfx.type]: elements.InnerText,
        [elements.bold]: true,
        [schema.text]: '150',
      },
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: ' klanten gingen je voor',
      },
    ]), // END seq
  }, // END Proposition
  [rdfx.ns('_02')]: {
    [rdfx.type]: sales.Proposition,
    [schema.color]: '#2D7080',
    [sales.textColor]: '#000',
    [schema.image]: url('http://fontawesome.io/icon/comments'),
    [schema.name]: "Meer betrokkenheid",
    [schema.text]: seq([
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: 'Gemiddeld ',
      },
      {
        [rdfx.type]: elements.InnerText,
        [elements.bold]: true,
        [schema.text]: '75%',
      },
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: ' meer betrokkenheid',
      },
    ]), // END seq
  }, // END Proposition
  [rdfx.ns('_03')]: {
    [rdfx.type]: sales.Proposition,
    [schema.color]: '#ACD9E3',
    [sales.textColor]: '#000',
    [schema.image]: url('http://fontawesome.io/icon/bolt'),
    [schema.name]: "Snel online",
    [schema.text]: seq([
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: 'Binnen ',
      },
      {
        [rdfx.type]: elements.InnerText,
        [elements.bold]: true,
        [schema.text]: '2',
      },
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: ' werkdagen online',
      },
    ]), // END seq
  }, // END Proposition
  [rdfx.ns('_04')]: {
    [rdfx.type]: sales.Proposition,
    [schema.color]: '#DE9271',
    [sales.textColor]: '#000',
    [schema.image]: url('http://fontawesome.io/icon/unlock-alt'),
    [schema.name]: "Volledig veilig",
    [schema.text]: seq([
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: 'Voldoet aan ',
      },
      {
        [rdfx.type]: elements.InnerText,
        [elements.bold]: true,
        [schema.text]: 'alle',
      },
      {
        [rdfx.type]: elements.InnerText,
        [schema.text]: '  wet- en regelgeving (AVG, WCAG)',
      },
    ]), // END seq
  }, // END Proposition
},

{
  '@id': 'https://argu.co/info#moreInformation',
  [rdfx.type]: sales.MoreInformationBlock,
  [schema.name]: 'Wij staan voor jou klaar',
  [sales.sections]: seq([
    {
      [rdfx.type]: sales.MoreInformationBlockSection,
      [sales.buttonLink]: url('https://argu.co/info/werkwijze'),
      [sales.buttonText]: 'Onze werkwijze',
      [schema.text]: 'Samen zorgen voor een succesvol participatietraject.',
    },
    {
      [rdfx.type]: sales.MoreInformationBlockSection,
      [sales.buttonLink]: url('https://argu.co/academy'),
      [sales.buttonText]: 'Onze academy',
      [schema.text]: 'Bordevol handige tips en uitleg waarmee jij aan de slag kan.',
    },
  ]),
},

{
  '@id': 'https://argu.co/info#vote',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/thumbs_up.svg'),
  [schema.name]: "Stemmen",
  [schema.text]: 'Via Argu kun je gebruikers laten stemmen op ideeën. Met losse voor- en tegenargumenten blijven discussies overzichtelijk.',
},
{
  '@id': 'https://argu.co/info#filtration',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/filtration.svg'),
  [schema.name]: "Ideegeneratie",
  [schema.text]: 'Met onze unieke discussietool kun je ideeën verzamelen en draagvlak meten.',
},
{
  '@id': 'https://argu.co/info#tenantFiltration',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/filtration.svg'),
  [schema.name]: "Ideegeneratie",
  [schema.text]: 'Zet ingewikkelde beleidsvraagstukken om in interessante uitdagingen',
},
{
  '@id': 'https://argu.co/info#flag',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/flag.svg'),
  [schema.name]: "Interactieve Kaarten",
  [schema.text]: 'Laat gebruikers items op de kaart prikken.',
},
{
  '@id': 'https://argu.co/info#infographic',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/infographic.svg'),
  [schema.name]: "Traject",
  [schema.text]: 'Met een traject betrek je mensen over een langere periode en ga je gefaseerd te werk.',
},
{
  '@id': 'https://argu.co/info#checklist',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/checklist.svg'),
  [schema.name]: "Vragenlijsten",
  [schema.text]: 'Maak een professionele enquête en analyseer de resultaten.',
},
{
  '@id': 'https://argu.co/info#photo',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/photo.svg'),
  [schema.name]: "Eigen huisstijl",
  [schema.text]: 'Het platform is eenvoudig aan te passen naar jouw huisstijl.',
},
{
  '@id': 'https://argu.co/info#lock',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/lock.svg'),
  [schema.name]: "Groepen- en rechtenbeheer",
  [schema.text]: 'Bepaal per item of per forum wie wat mag bekijken, of mag reageren.',
},
{
  '@id': 'https://argu.co/info#notification',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/notification.svg'),
  [schema.name]: 'Meldingen',
  [schema.text]: 'Volg items en ontvang e-mails bij nieuwe berichten. Zo krijg je tot 350% meer interactie.',
},
{
  '@id': 'https://argu.co/info#bullhorn',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icons/bullhorn.svg'),
  [schema.name]: 'Updates',
  [schema.text]: 'Houd mensen op de hoogte en koppel terug via updates.',
},
{
  '@id': 'https://argu.co/info#budgetting',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/icon_budgetting.svg'),
  [schema.name]: 'Budgetten',
  [schema.text]: 'Laat huurders meedenken bij het verdelen van budget. Stel een prijsvraag of laat huurders ideeën indienen.',
},
{
  '@id': 'https://argu.co/info#scenario-discussion',
  [rdfx.type]: sales.Feature,
  [schema.image]: asset('/sales/images/scenario-discussion.svg'),
  [schema.name]: 'Scenario discussie',
  [schema.text]: 'Laat mensen kiezen uit opties die ieder hun eigen voor- en nadelen hebben.',
},
{
  '@id': 'https://argu.co/info#highlightedCases',
  ...seq([
    url('https://argu.co/info/cases/de-drechtsteden-werken-samen-aan-de-energietransitie-en-warmtetransitie'),
    url('https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens'),
    url('https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard'),
  ]),
},

{
  '@id': 'https://argu.co/info#CoverImage',
  [rdfx.type]: schema.ImageObject,
  [ontola.imgUrl1500x2000]: asset('/sales/images/argu-cover-photo.jpg'),
},


/******* BLOG CONTENT 1 */

{
  '@id': 'https://argu.co/info/blogs/hoe-toegankelijk-is-online-participatie#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "In de afgelopen jaren heb ik als participatieadviseur bij Argu in gesprekken over online participatie vaak kritische vragen gekregen over de toegankelijkheid van een online platform. Steeds meer participatietrajecten worden online gefaciliteerd. Gemeenten en andere organisaties zien de voordelen van online tools om meer mensen en een diversere groep mensen te betrekken dan via de traditionele inspraakavond. "
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Maar wat betekent dat voor mensen die geen goede digitale vaardigheden hebben? En is een online platform ook bruikbaar voor mensen met een visuele beperking? Kortom: hoe toegankelijk is online participatie?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Wat is online participatie precies?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Online participatie houdt in dat een digitaal communicatiemiddel wordt ingezet om mensen te bereiken en te betrekken bij een beleidsthema waarbij om inspraak gevraagd wordt. Denk bijvoorbeeld aan een digitale enquête, een Zoom-vergadering met bewoners en beleidsmakers, een online forum of een stem-app. Er zijn allerlei varianten en de meeste tools bieden ook verschillende vormen van gebruik aan. Met een online forum kun je bijvoorbeeld stellingen poneren en vragen stellen. Maar je kunt mensen ook vragen waar ze de nieuwe windmolen willen hebben door dat op een interactieve kaart te prikken."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Niet iedereen kunnen bereiken?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De logische kritiek op online participatie is dat je met online tools sommige mensen uitsluit, omdat niet iedereen digitaal vaardig is. Er zijn nog altijd mensen die thuis geen internetverbinding hebben, willen of kunnen betalen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Maar helaas geldt dit voor iedere manier van participeren. Bij een inspraakavond sluit je iedereen uit die op dat moment geen tijd of zin heeft - en dat is waarschijnlijk een veel grotere groep. In de praktijk zie je dat er via online participatie simpelweg veel grotere groepen worden bereikt dan met een offline-only aanpak. Dat gaat soms over duizenden, in plaats van tientallen. Daarnaast is de demografie via online inspraak vaak een stuk diverser - mensen die minder vrije tijd hebben of mensen die gemeentelijk beleid minder interessant vinden, zullen online eenvoudiger aanhaken. Daarnaast worden inspraakavonden overmatig bezocht door een beperkte demografie. "
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Toegankelijkheid van video-bijeenkomsten"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De manier waarop je online participatie invult bepaalt de toegankelijkheid. In het afgelopen jaar zijn door Corona de meeste inspraakbijeenkomsten vervangen door video-meetings. Deze zijn vaak iets toegankelijker dan fysieke bijeenkomsten, omdat er geen reistijd en reiskosten hoeven te worden gemaakt. Helaas blijft het nog wel een relatief tijdrovende manier van inspraak - een bijeenkomst bijwonen kost al snel meer dan een uur, en het moet maar net in je agenda passen. Daarnaast is een video-meeting tool aan de praat krijgen soms toch technisch een obstakel. Overweeg daarom altijd om naast een video-meeting nog andere vormen van participatie aan te bieden, zoals een manier om online te reageren of een idee in te dienen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De belangrijkste vragen over online toegankelijkheid op een rijtje"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoeveel mensen gebruiken het internet?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Slechts "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.cbs.nl/nl-nl/nieuws/2019/01/zes-procent-nooit-op-internet"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "6% van alle Nederlanders zegt geen gebruik te maken van het internet"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ". Dat getal daalt heel snel; in 2012 zei 66 procent van de personen in de leeftijdscategorie 75+ nog nooit internet te hebben gebruikt. Vervolgens daalde dit naar 50 procent in 2015 en 32 procent in dit jaar. (CBS 2019). Daar komt nog bij dat Nederland koploper is qua internetverbindingen per huishouden in de EU. 98% van de Nederlandse huishoudens heeft een internetverbinding. (CBS 2018)"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Dat getal staat dus niet in verhouding tot de opkomst bij traditionele fysieke bijeenkomsten. In plaats van enkele tientallen inwoners kun je nu potentieel 98% van de inwoners betrekken."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoe digitaal vaardig zijn Nederlanders eigenlijk?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Goed nieuws! Nederland staat in 2020 bovenaan in de "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.cbs.nl/nl-nl/nieuws/2020/07/nederlanders-in-europese-kopgroep-digitale-vaardigheden"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Europese lijst van digitale vaardigheden"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ". Laten we daar trots op zijn en het goede voorbeeld geven aan andere landen. Tegelijk geeft dit geen vrijbrief om alle communicatie tussen overheid en burgers dan maar digitaal te gaan doen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoe betrek je ook mensen die niet zo goed met computers kunnen werken?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Dat veel Nederlanders goede digitale vaardigheden hebben betekent natuurlijk nog niet dat er alsnog een groep inwoners is met beperkte digitale vaardigheden. Daar moet je dus altijd rekening mee houden. Wat kun je doen?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_17>": {
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
                  "<http://schema.org/text>": "Zorg ervoor dat je naast online tools ook altijd de mogelijkheid biedt om telefonisch contact te hebben voor inwoners die geen computer of smartphone hebben of willen gebruiken."
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
                  "<http://schema.org/text>": "Biedt ondersteuning bij het gebruiken van de website, bijvoorbeeld in een bibliotheek, op het gemeentehuis of in een buurthuis."
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
                  "<http://schema.org/text>": "Zorg voor korte teksten en B1-taalniveau. Veel websites bevatten te veel en onduidelijke teksten wat er bij veel mensen voor zorgt dat ze de website snel weer verlaten."
                }
              },
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_18>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoe betrek je mensen die de Nederlandse taal niet goed machtig zijn?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_19>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Dit is een interessant punt. Tegenwoordig bieden alle webbrowsers automatische vertaalopties aan. Dat betekent dat websitebezoekers die bijvoorbeeld Pools als voorkeurstaal hebben ingesteld op hun computer of smartphone de website automatisch in hun eigen taal te zien krijgen. Dat is een uniek voordeel ten opzichte van fysieke bijeenkomsten. Het is namelijk niet te doen om voor elke taal een tolk in te huren. Mensen die de Nederlandse taal niet goed machtig zijn krijgen dus opeens een stem die ze hiervoor niet hadden!"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_20>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Let op: (mobiele) websites worden automatisch vertaald door bijvoorbeeld Google Translate. Maar native apps (dat zijn apps die je download op je telefoon of tablet via de App Store of Play Store) zijn geen websites en worden dus niet automatisch vertaald. De maker van de app moet dus zorg dragen voor vertalingen. Dat gebeurt meestal niet. Dat is duidelijk een minpunt van native participatie-apps."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_21>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoe betrek je ook mensen met een beperking?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_22>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Naast fysieke ondersteuning bieden, telefonisch contact, simpele teksten hanteren en fysieke alternatieven bieden zijn er nog meer mogelijkheden om online participatie toegankelijk te maken."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_23>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Visuele toegankelijkheid"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H4")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_24>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Gelukkig zijn websites in de afgelopen jaren veel toegankelijker geworden voor mensen met een visuele beperking. Vooral voorleessoftware is veel beter geworden. Dat zorgt ervoor dat online participatie in sommige opzichten veel toegankelijker is dan fysieke participatie. Alleen de uitnodigingsbrief voor een participatietraject gaat al veel makkelijker voor blinden en slechtzienden. Een voorleesapparaat kost al snel €2.000 terwijl voorleessoftware tegenwoordig gratis is. Het is dan wel belangrijk om ervoor te zorgen dat alle teksten op de website staan (in HTML) en dat je geen PDF's gebruikt. PDF is namelijk niet bruikbaar voor voorleessoftware. Lees meer informatie op "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.digitoegankelijk.nl/uitleg-van-eisen/pdf-documenten"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Digitoegankelijk.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_25>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Auditieve toegankelijkheid"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H4")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_26>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bij een fysieke inspraakavond wordt er bijna altijd een presentatie gegeven die enigszins wordt ondersteund met een paar PowerPoint slides. Voor mensen met een auditieve beperking zijn websites natuurlijk veel prettiger. Je kunt alles lezen. Het enige waar je rekening mee moet houden is het toevoegen van ondertiteling bij videomateriaal op de website. Dit wordt vaak vergeten. Gelukkig is het in de afgelopen jaren veel eenvoudiger geworden om automatische ondertiteling toe te voegen aan videomateriaal. Lees daarover meer in "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.frankwatching.com/archive/2019/05/20/videos-snel-ondertitelen-handige-apps-websites/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "dit artikel"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_27>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Welke standaarden zijn er voor online toegankelijkheid?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_28>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De Nederlandse overheid schrijft de Web Content Accessibility Guidelines (ook wel WCAG) voor. Dat is een lange checklist voor het toegankelijk maken van digitale kanalen. Er wordt veel aandacht besteed aan instellingen en maatregelen die websitebouwers moeten verzorgen om de website goed leesbaar en bruikbaar te maken. Enkele voorbeelden:"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_29>": {
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
                  "<http://schema.org/text>": "De website moet navigeerbaar en bruikbaar zijn zonder muis"
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
                  "<http://schema.org/text>": "Plaatjes en icoontjes moeten worden voorzien van onzichtbare extra velden voor slechtzienden"
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
                  "<http://schema.org/text>": "Het gebruik van kleuren en contrast moet toegankelijk of aanpasbaar zijn zodat mensen met kleurenblindheid zich niet kunnen vergissen tussen concepten die met kleuren worden aangeduid."
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
                  "<http://schema.org/text>": "De opbouw van de website moet consistent en voorspelbaar zijn."
                }
              },
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_30>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Lees hier meer over de "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://wcag.nl/wat-is-wcag/richtlijnen"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "WCAG richtlijnen"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ". Met Argu proberen we te voldoen aan de strengste eisen. Lees "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/argu/t/10484"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "de uitgebreide rapportage"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " hier terug."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_31>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Wat kan de overheid nog verbeteren?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_32>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "In de afgelopen jaren heb ik meer dan 150 online participatietrajecten begeleid. Het valt me op dat er steeds vaker vragen komen over toegankelijkheid en dat gemeenten zelf ook goede acties ondernemen om participatie toegankelijk te maken. Ik denk dat de WCAG daar enorm bij heeft geholpen. Ook de campagne \""
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://directduidelijk.gebruikercentraal.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Direct Duidelijk Tour"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "\" zorgt voor meer bewustwording bij overheidsorganisaties. Toch zie ik nog een paar verbeterpunten:"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_33>": {
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
                  "<http://schema.org/text>": "Bij communicatie omtrent participatie wordt nog teveel ambtelijke taal gebruikt. Je kunt dit eenvoudig laten checken door een vriend of kennis die niet bij een overheid werkt. Zo kom je er snel achter dat woorden als participatieverordening, co-creatiesessie en volledigheidshalve niet helpen om een website toegankelijk te maken."
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
                  "<http://schema.org/text>": "Chronologische verslaglegging van de stappen van een participatietraject wordt vaak pas achteraf gedeeld. Als er een fysieke bijeenkomst is of als er een presentatie gegeven wordt is het slim om daar een samenvatting van te schrijven en die te delen op het online platform zodat anderen dat kunnen teruglezen."
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
                  "<http://schema.org/text>": "Er wordt veel gebruik gemaakt van landingspagina's. Dat houdt in dat inwoners bijvoorbeeld worden uitgenodigd per brief om naar een website te gaan. Daar vinden ze eerst een pagina met veel uitleg en achtergrondinformatie. Ergens halverwege staat dan een linkje naar het participatieplatform. Hoewel de bedoeling goed is, zorgt dit ervoor dat er weer een extra drempel wordt opgeworpen om te participeren. Je kunt de achtergrondinformatie beter in de participatietool zelf zetten. Dan kun je het aan de gebruiker zelf overlaten of die gelijk wil participeren of dat die eerst achtergrondinformatie wil lezen."
                }
              },
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_34>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Gaat online het dan helemaal overnemen?"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_35>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Dat lijkt me geen goed idee. Hoewel online tools enorm veel mogelijkheden bieden om laagdrempelig inwoners te betrekken bij beleid is het onverstandig om de fysieke participatie los te laten. Er zijn nog altijd mensen die geen internet gebruiken of willen gebruiken en het is niet democratisch om die mensen daarom buiten te sluiten. Ook zijn er veel mensen die online tools ingewikkeld vinden en daar hulp bij nodig hebben. Het is erg belangrijk om dat te faciliteren. Want sommige mensen zullen zonder die hulp buitengesloten worden van inspraakprocessen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_36>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Ook moet men niet onderschatten wat de kracht is van een fysiek gesprek. Hoewel je met een kleine gesprekskring vooral heel veel mensen buitensluit, kun je in een gesprek veel beter begrijpen wat mensen bedoelen, wat hun drijft en welke emoties zij voelen. Communicatie is voor een groot deel non-verbaal en dat is een groot gemis op een online platform. Je kunt dat ietwat verbeteren door online ook gebruik te maken van beeldmateriaal maar toch zal iedereen gevoelsmatig begrijpen dat het soms veel fijner is om een gesprek met iemand te voeren in een fysieke ruimte."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_37>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Overigens merk ik dat alle overheden die ik spreek deze punten onderschrijven. Ik ben nog geen overheid tegengekomen die volledig wil overstappen op online participatie."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_38>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Andere tips voor betere toegankelijkheid"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_39>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Naast de verplichte onderdelen zijn er nog meer acties die je kunt ondernemen om (online) participatie toegankelijker te maken. Naast de basisvereisten van toegankelijkheid voor mensen met een beperking kun je namelijk ook veel doen om participatie eenvoudiger te maken voor iedereen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_40>": {
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
                  "<http://schema.org/text>": "Gebruik QR-codes. Ze zijn terug van weggeweest! Tegenwoordig is het vaak sneller om een QR-code te scannen met je telefoon dan een lange URL in te typen."
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
                  "<http://schema.org/text>": "Gebruik een website in plaats van een native app (app die je installeert op je telefoon)."
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
                  "<http://schema.org/text>": "Een website hoeft niet te worden geïnstalleerd, en werkt op ieder apparaat. Dat kost minder tijd en vereist niets van apparaten en app stores."
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
                  "<http://schema.org/text>": "Websites kunnen eenvoudiger (automatisch) worden vertaald."
                }
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
                  "<http://schema.org/text>": "Websites zijn beter deelbaar, gewoon met een linkje. Zo worden grotere groepen bereikt, omdat mensen elkaar ook kunnen uitnodigen."
                }
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
                  "<http://schema.org/text>": "Websites zijn vaak beter toegankelijk voor mensen met een beperking (denk aan navigatie met alleen toetsenbord voor slechtzienden, wat zelden in apps werkt)."
                }
              },
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_41>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Conclusie"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_42>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoewel je met online tools nooit iedereen zal bereiken zijn er vele voorbeelden die aantonen dat online participatie een fijne verrijking is voor overheden die inwoners willen betrekken. Overheden kunnen online tools gebruiken om beter te communiceren met meer inwoners maar daarbij moet je altijd fysieke alternatieven blijven bieden. Het is slim om bij elk participatietraject een checklist na te lopen om te controleren of je alle onderdelen van het participatieproces zo toegankelijk mogelijk hebt gemaakt. Zo kun je online tools gebruiken ter verrijking van fysieke manieren van participatie."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_43>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Heb jij ervaringen of tips om participatie nog toegankelijker te maken? Deel het hieronder in de reacties of stuur een mail naar "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": "url(mailto:michiel@argu.co)",
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "michiel@argu.co"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_44>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_45>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_46>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_47>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_48>": {
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

/** BLOG CONTENT 2 */

{
  '@id': 'https://argu.co/info/blogs/5-checks-voordat-je-aan-e-participatie-begint#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Kijk kritisch naar het doel van de participatie"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Participatietrajecten worden vaak geïnitieerd vanuit een plicht. Overheden moeten inwoners bijvoorbeeld betrekken bij veranderingen in de fysieke omgeving. Maar bedenk dat \"mensen betrekken\" een behoorlijk vaag doel is. "
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Stel jezelf de volgende vragen:"
        }
      }
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Wanneer heb je het idee dat mensen betrokken zijn?"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Welke invloed kunnen mensen uitoefenen op jouw vraagstuk? Als je deze vraag niet goed kunt beantwoorden dan moet je je afvragen of je wel een participatietraject aan het faciliteren bent. Mogelijk ben je alleen aan het informeren en kun je dat ook doen door een informatiebrief of advertentie te verspreiden. Zorg ervoor dat je helder hebt welke invloed mensen precies kunnen uitoefenen."
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Wat moet de participatie concreet opleveren? Ga je voor concrete plannen die worden uitgevoerd? Wil je budget toekennen aan het uitwerken van plannen? Wil je peilen voor welke beleidsoptie het meeste draagvlak is? Wil je toetsen of er genoeg draagvlak is voor een specifiek beleidsvoorstel?"
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Werk goede participatievraagstukken uit"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Veel participatietrajecten worden opgetuigd met een onduidelijk participatievraagstuk. Met een participatievraagstuk wordt bedoeld wat er concreet wordt gevraagd aan inwoners om over mee te denken. Bijvoorbeeld:"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Hoe kunnen we als gemeente verduurzamen?"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Hoe kunnen we kosten besparen?"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Hoe kunnen we de veiligheid op straat verbeteren?"
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Lees in dit artikel meer over hoe je een "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/argu/posts/11007"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "goed participatievraagstuk kunt formuleren"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bedenk hoe je mensen gaat bereiken"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Online participatietools geven sommige mensen het gevoel dat je een platform kunt inrichten en dat mensen het dan vanzelf weten te vinden en gaan gebruiken. Maar zoals met ieder participatietraject moet je mensen actief uitnodigen om deel te nemen. Promotie van een traject kan behoorlijk arbeidsintensief zijn."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De eerste stap is het maken van een stakeholderanalyse. Welke groepen kun je onderscheiden en hoe kun je die het beste benaderen? Een brief sturen naar omwonenden kan bijvoorbeeld werken maar misschien kan de lokale ondernemersvereniging je helpen om het linkje naar je website te delen in hun WhatsApp-groep."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De volgende stap is het verspreiden van uitnodigingen via de best passende kanalen. Zorg er daarbij voor dat je zoveel mogelijk inzicht krijgt in de effectiviteit van je acties. Via social mediaplatforms kun je bijvoorbeeld goed zien hoeveel mensen een bericht bekijken en klikken op een link. Maar het is bijvoorbeeld ook mogelijk om te testen hoe vaak een website wordt bezocht op basis van een uitnodigingsbrief. Je kunt dat instellen bij software voor gebruikersstatistieken, iets wat wij bij Argu standaard instellen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Waarborg toegankelijkheid"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Online participatie biedt duidelijke voordelen: je kunt theoretisch veel meer mensen bereiken dan via een fysieke bijeenkomst en je kunt het participatieproces laagdrempeliger maken voor deelnemers. Maar niet iedereen is even vaardig met online platforms, inloggen en accounts. Ook is het belangrijk om rekening te houden met laaggeletterdheid en visuele beperkingen van deelnemers."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Lees meer in dit artikel over "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/argu/posts/11023"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "toegankelijkheid van online participatie"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Geef de doelgroep het gevoel dat er naar ze geluisterd wordt"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "\"U hoort nog van ons\" - en andere dooddoeners zorgen er meestal niet voor dat mensen zich gehoord voelen. Zorg er in je communicatieplan voor dat je mensen het gevoel geeft dat er naar ze geluisterd wordt. Dat kost tijd en energie maar levert wel betere resultaten op. Investeer dus bewust tijd in het inhoudelijk reageren op de inwoners die deel gaan nemen aan jouw partiicpatietraject."
        }
      }
    }
  }
},

/** BLOG CONTENT 3 */

{
  '@id': 'https://argu.co/info/blogs/argu-lanceert-openBesluitvorming#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#bold>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Argu lanceert "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("http://openbesluitvorming.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<https://ns.ontola.io/elements#bold>": true,
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "OpenBesluitvorming.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<https://ns.ontola.io/elements#bold>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "; een web app waarmee door vergaderstukken van meer dan 120 gemeenten en provincies kan worden gezocht."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Achtergrond"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "In 2014 begonnen we ons e-participatie platform Argu, met het doel om mensen te betrekken bij besluitvorming. We werkten met diverse overheden en lanceerden online discussies waar mensen ideeën konden delen, discussie voerden en stemden over thema's. Hoewel burgerparticipatie op deze manier vaak goed werkt, mist er een belangrijk onderdeel: de daadwerkelijke besluitvormingsprocessen. De agendapunten, documenten en moties die door een gemeenteraad worden behandeld zijn de feitelijke kern van besluitvorming en zouden daarom ook net zo goed interactief moeten zijn voor burgers. Het is daarom al een tijd onze wens om burgerparticipatie en raadsinformatie samen te brengen. De eerste stap om dit te realiseren, is het samenbrengen en het standaardiseren van raadsinformatie, zodat er op één punt, met één standaard kan worden gezocht door alle vergaderstukken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Open Data"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De Open State Foundation was begonnen met Open Raadsinformatie. Wij raakten daar vroeg bij betrokken, en werkten sindsdien in opdracht van VNG Realisatie als software ontwikkelaars aan de zoekmachine en de API. We hielpen met het opschalen van zes naar meer dan 120 gemeenten, en later zijn daar ook zes provincies bij gekomen. Op dit moment stellen we meer dan een miljoen documenten beschikbaar via de API. Deze dataset blijft groeien, elke nacht komen er honderden nieuwe documenten bij. Alle informatie die is verzameld, is gratis te gebruiken middels de "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://ontola.io/what-is-linked-data/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "linked data"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("http://docs.openraadsinformatie.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "API"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ". Al deze open informatie maakt het eenvoudiger voor journalisten, ambtenaren en burgers om de overheid te volgen en controleren."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Alle software die we voor dit project hebben ontwikkeld staat "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://github.com/ontola/ori-search/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "open source op GitHub"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ". Het is een technisch uitdagend project, omdat de informatie uit verschillende bronnen (vergadersystemen / raadsinformatiestystemen) moet komen die allemaal op een andere manier werken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bezoek "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://openbesluitvorming.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "OpenBesluitvorming.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " om vergaderstukken vanaf het jaar 2000 van meer dan 127 overheden te doorzoeken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Van PDF naar verrijkte text"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Nederlandse gemeenten produceren een hoop informatie. Ze gebruiken allemaal een raadsinformatiesysteem om vergaderingen, documenten, moties en rapportages te organiseren en te publiceren. Er zijn echter verschillende raadsinformatiesystemen beschikbaar die allemaal anders werken en een eigen informatiemodel hebben. Daarnaast zijn de meeste stukken en documenten opgeslagen in PDF formaat, en vaak niet publiekelijk toegankelijk beschikbaar. Doordat wij toegang hebben tot al deze systemen, kunnen wij alles samenbrengen in een altijd publiek beschikbare centrale dataset."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De meest interessante informatie zit in PDF bestanden verborgen en kan niet worden doorzocht. Door de teksten uit al deze miljoenen PDF bestanden te extraheren, hebben we al deze teksten voor het eerst doorzoekbaar gemaakt. We slaan de bestanden op voor caching in Google Cloud Storage, samen met de bronnen en metadata. Daardoor kunnen we altijd een specifieke versie terughalen of zien wat er is gewijzigd tussen versies. Daarnaast hebben we twee zogeheten 'enrichers' die de informatie verrijken:"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#bold>": true,
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Thema herkenning"
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": ": een "
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                  "<https://ns.ontola.io/core#href>": url("https://github.com/openstate/ori-theme-classifier"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "machine-learning classifier"
                    }
                  }
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": " gemaakt door de Open State Foundation. Geeft relevantie scores van een document op basis van een set gespecificeerde thema's waaronder: Economie, Veiligheid en Onderwijs."
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<https://ns.ontola.io/elements#bold>": true,
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Locatie herkenning"
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": ": gebaseerd op het project "
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                  "<https://ns.ontola.io/core#href>": url("https://bitbucket.org/aolieman/loclinkvis/"),
                  "<https://ns.ontola.io/elements#children>": {
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                      "<http://schema.org/text>": "LocLinkVis"
                    }
                  }
                },
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": " van onder andere Alex Olieman en de Universiteit van Amsterdam. Het zoekt straten en locaties in document teksten en koppelt het aan de geografische coördinaten van een buurt of wijk."
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Deze enrichers zorgen dat alle gebruikers van Open Raadsinformatie kunnen filteren op thema tags en kunnen zoeken welke documenten er binnen een geografisch gebied vallen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hergebruikers"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Er zijn op dit moment al verschillende applicaties die gebruik maken van de vrij beschikbare data via de "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://docs.openraadsinformatie.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "API"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ":"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "OpenBesluitvorming.nl"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Deze zoekapplicatie ondersteunt het zoeken op locatie met een kaart, heeft diverse filter opties, kan PDFjes weergeven in de browser en ondersteunt het vinden van definities door tekst in PDFjes te selecteren. Bekijk de broncode "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://github.com/ontola/ori-search/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "hier"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Img"),
      "<https://ns.ontola.io/core#href>": url("https://ontola.io/_next/image/?url=%2Fimages%2Fposts%2Fori%2Fzoek-openraadsinformatie.jpg&w=3840&q=75"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_17>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "RaadsTalk.nl"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_18>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "VNG heeft ons gevraagd om de webapplicatie "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.vngrealisatie.nl/producten/raadstalk"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "RaadsTalk"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " te bouwen, waarmee te zien is welke woorden er per maand trending zijn in gemeenten. De app is als widget toe te voegen binnen je eigen website. Bekijk voor meer informatie de "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://github.com/ontola/raadstalk/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "broncode en technische uitleg"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_19>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Img"),
      "<https://ns.ontola.io/core#href>": url("https://ontola.io/_next/image/?url=%2Fimages%2Fposts%2Fori%2Fraadstalk.jpg&w=3840&q=75"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_20>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Waaroverheid.nl"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_21>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://waaroverheid.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "WaarOverheid"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " toont documenten die een locatie bevatten in jouw buurt of wijk. Op een kaart kun je tussen buurten navigeren om documenten in de daargelegen straten te vinden. De technologie voor deze app wordt ook gebruikt voor het locatie zoeken binnen OpenBesluitvorming.nl."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_22>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Img"),
      "<https://ns.ontola.io/core#href>": url("https://ontola.io/_next/image/?url=%2Fimages%2Fposts%2Fori%2Fwaaroverheid.jpg&w=3840&q=75"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_23>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H3"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "1848.nl"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_24>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://1848.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "1848"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " verzamelt politieke informatie en nieuws van verschillende bronnen. Door te zoeken en notificaties te ontvangen kan je zo op de hoogte blijven van ontwikkelingen in besluitvorming."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_25>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Img"),
      "<https://ns.ontola.io/core#href>": url("https://ontola.io/_next/image/?url=%2Fimages%2Fposts%2Fori%2F1848.jpg&w=3840&q=75"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_26>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Nu en de toekomst"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_27>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het begon allemaal met Open Raadsinformatie, maar het project bevat al lang niet enkel raadsinformatie meer. De scope van het project is verbreed naar provinciale data en binnenkort wordt ook nationale data toegevoegd. Op dit moment werken we samen met De Tweede Kamer der Staten-Generaal om hun nieuwe API in het project te integreren. Daarnaast werken we aan de integratie met het Argu platform zelf, zodat de vergaderstukken kunnen worden gekoppeld aan inspraak van bewoners."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_28>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "PDF als bottleneck - gestructureerde data als oplossing"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_29>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Zoeken door documenten is leuk en handig, maar er is in theorie veel meer mogelijk. We zouden profielen kunnen maken van politici, waar te zien is hoe ze gestemd hebben. We zouden kunnen tonen wie welke moties heeft ingediend. We zouden burgers automatisch op de hoogte kunnen houden over het verloop van zaken via mail."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_30>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Helaas kan dit met de huidige data nog niet. Het probleem is dat er nog veel te veel gebruik wordt gemaakt van PDF als format. Hoewel PDFjes handig zijn voor printen, bevat het vaak erg weinig gestructureerde data, waardoor computers er niets mee kunnen (op weergeven na dan). Zo staat er onder een motie misschien de naam van de indieners, maar staat dit niet in de data beschreven. Ook zijn stemmingen vaak met pen genoteerd en ingescand, in plaats van in een machineleesbaar format opgeslagen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_31>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Om meer te kunnen doen met open data, moet het anders worden aangemaakt. De software die wordt gebruikt om de vergaderingen aan te maken zal op een andere manier informatie moeten opslaan - in datavelden, niet in documenten. Ook moeten we werken aan het standaardiseren van de manier waarop de informatie zelf word gestructureerd. Gelukkig is VNG hier "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://github.com/VNG-Realisatie/ODS-Open-Raadsinformatie"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "goed mee op weg"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_32>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Doe mee!"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_33>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Open Besluitvorming is mogelijk gemaakt dankzij het werk van vele gemeenten, provincies, de VNG en de Open State Foundation. Door nieuwe gemeenten en provincies toe te voegen hopen we nog meer impact te maken. Als u een gemeente vertegenwoordigt en deel zou willen nemen, kunt u "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://formulieren.vngrealisatie.nl/deelname_openraadsinformatie"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "dit formulier"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " in vullen. Meedoen als gemeente aan het project is kosteloos, meer informatie over deelname en het project kunt u "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.vngrealisatie.nl/producten/open-raadsinformatie"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "hier"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " vinden. Provincies of waterschappen kunnen mailen naar "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": "url(mailto:joep@argu.co)",
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "joep@argu.co"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "."
        }
      }
    }
  }
},

/** BLOG CONTENT 4 */
{
  '@id': 'https://argu.co/info/blogs/waarom-een-wijkbudget#content',
  [rdfx.type]: elements.Document,
  [elements.children]: {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "In de afgelopen jaren hebben een aantal Nederlandse gemeenten geëxperimenteerd met online platforms waarmee inwoners een budget kunnen verdelen over initiatieven van medebewoners in de wijk. In dit artikel zet ik uiteen waarom je als gemeente of woningcorporatie gebruik zou willen maken van een wijkbudget."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/blogs4-1.avif'),
      [ontola.ns('format/jpg')]: asset('/sales/images/blogs4-1.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs4-1.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Hoe concreter hoe beter"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De meeste participatietrajecten zijn relatief saai voor veel bewoners. Denk aan afvalbeleid of het herinrichten van een industrieterrein. Met een wijkbudget maak je het doel van participatie heel duidelijk voor je doelgroep. Mensen kunnen een plan indienen om hun eigen wijk te verbeteren. Alle wijkbewoners kunnen vervolgens stemmen op plannen die door de gemeente zijn gecheckt op haalbaarheid."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Je krijgt concrete plannen van bewoners"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bij veel participatietrajecten is het lastig om goede input te verzamelen bij de doelgroep. Vaak delen mensen hun opinie over iets waar ze zich aan storen in plaats van dat ze met een goed onderbouwd voorstel komen om het probleem op te lossen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Doordat mensen zien dat er een maximaal bedrag is dat ze virtueel kunnen besteden, worden mensen bewust van de mogelijke kosten van een plan. Zo krijg je vaak heel concrete plannen."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/blogs4-2.avif'),
      [ontola.ns('format/jpg')]: asset('/sales/images/blogs4-2.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs4-2.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bewoners komen in contact met elkaar"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Meestal hebben bewoners bij een participatietraject een dialoog met de gemeente. Daar is op zich niets mis mee maar bij een wijkbudget heb je een unieke kans om mensen ook met elkaar in contact te brengen. Als mensen een plan indienen moeten zij er namelijk voor zorgen dat ze minimaal 25 likes krijgen voor hun plan om door te gaan naar de haalbaarheidscheck. Dat zorgt ervoor dat buurtbewoners elkaar aanspreken op straat of via een buurtapp."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/blogs4-3.avif'),
      [ontola.ns('format/jpg')]: asset('/sales/images/blogs4-3.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs4-3.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Zeer hoge betrokkenheid"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "In sommige wijken doet zelfs meer dan 30% van de bewoners mee. Dat is uitzonderlijk hoog vergeleken met de meeste participatietrajecten."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Wil jij starten met een wijkbudget? Neem dan "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/info/contact"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "contact"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " met ons op. We kunnen je helpen om binnen twee werkdagen de volledige projectplanning uit te werken zodat je snel aan de slag kunt met een online wijkbudget."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_17>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_18>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    }
  },
},

/** BLOG CONTENT 5 */
{
  '@id': 'https://argu.co/info/blogs/wat-kost-e-participatie#content',
  [rdfx.type]: elements.Document,
  [elements.children]: {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "E-participatie is het betrekken van inwoners bij beleid en veranderingen in de leefomgeving door middel van online instrumenten. Naast de bekende online enquêtes zijn er de afgelopen jaren ook participatieplatforms ontwikkeld die specifieke tools aanbieden om burgerparticipatie laagdrempelig en effectief te maken. Een logische vraag is dan ook “wat kost dat?”. In dit artikel zet ik de kosten van e-participatie uiteen en licht ik toe waar bepaalde investeringen toe kunnen leiden."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Kosten van online tools"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Zoals bij ieder participatietraject moet je bij e-participatie investeren in het instrument dat je wil gebruiken om met je doelgroep samen te werken. Er zijn verschillende online tools ter beschikking die je kunt inzetten:"
        }
      }
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Enquêtes / vragenlijsten"
                }
              }
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Hiermee kun je vooral (kwantitatief) onderzoek doen"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Let op: enquêtes zijn niet interactief. Mensen kunnen dus niet op elkaars ideeën inhaken"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Sommige enquêtetools zijn gratis. Maar vaak bieden ze dan beperkte functionaliteiten aan. Het maken van een goede enquête heeft ook professionele ondersteuning nodig en daar betaal je natuurlijk ook voor"
                        }
                      }
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
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Social media"
                }
              }
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Vooral nuttig om informatie te delen en mensen uit te nodigen voor participatie"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Let op: social media bieden geen plek voor oplossingsgericht samenwerken"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Social media is in principe gratis maar je betaalt wel voor gesponsorde content. Zonder gesponsorde content kom je niet makkelijk door het tijdlijnalgoritme van Facebook, Twitter en LinkedIn heen, en ontvangt je doelgroep jouw berichten dus niet"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Interactief platform"
                }
              }
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Platforms zoals "
                        },
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
                          "<https://ns.ontola.io/core#href>": url("http://argu.co"),
                          "<https://ns.ontola.io/elements#children>": {
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                              "<http://schema.org/text>": "Argu"
                            }
                          }
                        },
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": " bieden de mogelijkheid om ideeën te verzamelen bij inwoners. Daarnaast kunnen mensen stemmen en reageren op ideeën zodat men op elkaar ideeën kan voortborduren"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Je kunt ook interactieve kaarten gebruiken, mensen een budget laten verdelen en scenario’s voorleggen waar op gereageerd kan worden"
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
                      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
                      "<https://ns.ontola.io/elements#children>": {
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                          "<http://schema.org/text>": "Interactieve platforms, of beter gezegd participatieplatforms worden aangeboden vanaf €1.000 per maand of een vast bedrag voor een specifiek participatietraject"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Kosten van communicatie en promotie"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bij elk participatietraject moet je inwoners uitnodigen om deel te nemen. Dat kost in de meeste gevallen geld. Ook bij online participatietrajecten wil je je eigen communicatiekanalen inzetten om zoveel mogelijk mensen uit de doelgroep van het traject te bereiken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Er zijn interessante verschillen tussen online en fysieke participatie. Het activeren van inwoners die je online bereikt gaat namelijk eenvoudiger omdat mensen direct terechtkomen op het participatieplatform als ze klikken op de link in de uitnodiging."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/blogs5-1.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/blogs5-1.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs5-1.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Bij een uitnodiging voor een fysieke bijeenkomst moeten inwoners meer handelingen verrichten: je leest de uitnodiging, je zet de datum in je agenda, je moet naar de bijeenkomst toe (als je dan tijd hebt). Bij de meeste online participatietrajecten zie je dan ook dat je tegen "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<https://ns.ontola.io/elements#underline>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "lagere communicatiekosten"
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " meer mensen kunt bereiken en betrekken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Houd in ieder geval rekening met:"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "In ieder geval één brief ter aankondiging en voor mensen die minder digitaal vaardig zijn Gemiddeld kost een brief verzenden €0,35 per persoon voor gemeenten"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Berichten verspreiden op social media. Kost tijd van communicatiemedewerker"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Social media advertenties. Vanaf €200 bereik je meestal al een paar duizend mensen"
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Kosten van mensen"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Misschien denken sommige mensen dat je met een participatieplatform op een knop kunt drukken en dat er dan vanzelf participatie plaats gaat vinden. Maar helaas is het niet zo simpel. Een goed participatietraject is altijd het resultaat van goed projectmanagement en inspanning van een aantal collega’s."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Inhoudelijk projectleider"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Communicatieadviseur"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Participatieadviseur (kan ook inbegrepen zijn bij het pakket van een participatietool)"
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_17>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De tijd van deze collega’s moet altijd bekostigd worden. De kleinste participatietrajecten die ik ben tegengekomen hebben enkele uren van deze drie rollen gevraagd. De meeste online participatietrajecten vragen in totaal 20 tot 40 uur per projectgroep. Afhankelijk van hoe de organisatie met kosten omgaat kan dat al snel boven de €1.000 aan werkuren inhouden."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_18>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "En wat levert het op?"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_19>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Participatietrajecten zijn niet altijd de makkelijkste en goedkoopste projecten. Er zijn gevallen waarbij gemeenten "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("http://www.g1000.org/nl/budget.php"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "meer dan €100.000"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " uitgeven aan een traject of zelfs een enkele bijeenkomst. Het komt ook regelmatig voor dat participatietrajecten flink uitlopen en de kosten daarmee ook. Maar gelukkig biedt online participatie ook kansen om de kosten van participatie terug te dringen. Er zijn veel online participatietrajecten waarbij blijkt dat er veel lagere kosten zijn gemaakt dan voorheen, waarbij er tegelijkertijd meer mensen zijn bereikt en betrokken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_20>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Het belangrijkste voordeel van online participatie is dat je potentieel veel meer mensen kunt betrekken dan via fysieke participatie. De kosten per betrokken inwoner worden dan al snel goedkoop."
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Door gebruik te maken van een participatieplatform kunnen deelnemers zich abonneren op het traject. Dat kan bijvoorbeeld door een account aan te maken of door een e-mailadres achter te laten. Bij trajecten met meerdere contactmomenten kan dat veel geld schelen omdat je niet elke keer een brief hoeft te sturen. Mailen is gratis."
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Omdat online participatie laagdrempelig is, zijn deelnemers ook sneller geneigd om contact op te nemen voor vragen, opmerkingen of eventueel bezwaarschriften. Zo kun je het participatieproces gedurende het traject verbeteren en miscommunicatie voorkomen. Veel bezwaarschriften komen door miscommunicatie en het niet tijdig betrekken van belanghebbenden."
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_21>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Wil jij starten met een participatietraject? Neem dan "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/info/contact"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "contact"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " met ons op. We kunnen je helpen om binnen twee werkdagen de volledige projectplanning uit te werken zodat je snel aan de slag kunt met een online participatietraject."
        }
      }
    }
  },
},

/** BLOG CONTENT 6 */
{
  '@id': 'https://argu.co/info/blogs/online-huurdersparticipatie-is-de-toekomst#content',
  [rdfx.type]: elements.Document,

  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In de afgelopen jaren heeft Argu veel woningcorporaties geholpen met het betrekken van huurders bij beleid. In dit artikel noem ik de meest herkenbare uitdagingen op het gebied van huurdersparticipatie en hoe online participatie daar oplossingen voor kan bieden.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'U wil toch met ons meedenken?',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een brief valt ‘s ochtends bij Jan op de deurmat. Hij opent de envelop en ziet het logo van de woningbouw. Zuchtend schuifelt hij terug van de gang naar de woonkamer. “Of ik wil meedenken over het nieuwe beleidsplan” mompelt hij fronsend. Hij ploft neer op zijn stoel en de brief verdwijnt op de stapel.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Voor de meeste huurders is meedenken met de woningcorporatie geen prioriteit. Daar zijn verschillende oorzaken voor. Denk bijvoorbeeld aan huurders met schuldenproblemen die in de overlevingsstand staan, of huurders met een taalachterstand die de brieven van de woningcorporatie niet goed begrijpen. En laten we eerlijk zijn: de meeste huurders zitten ook niet te wachten op een “verdiepend gesprek over circulaire renovatie”.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Deelnemen aan een inspraakavond kost huurders veel tijd en mensen moeten op een specifiek moment beschikbaar zijn. Bovendien is het met een fysieke bijeenkomst onmogelijk om een significant deel van de huurders te spreken. De helft van alle woningcorporaties in Nederland heeft meer dan 3.000 huurders, dus zelfs als je maar 5% van de huurders wil spreken moet je al ruimte hebben voor 150 mensen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Interactief samenwerken is juist wat participatie zo krachtig maakt. Door samen vast te stellen welke problemen er zijn en welke oplossingen het meest geschikt zijn kun je passend beleid maken. En daarvoor moet je met elkaar in gesprek, het liefst fysiek én online.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Online lost het op',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Deelnemen wanneer het uitkomt',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het meest overtuigende argument om online participatie in te zetten is de laagdrempeligheid om deel te nemen. In plaats van deelnemen aan een bijeenkomst op dinsdagavond kun je met online participatie deelnemen op een moment dat het jou uitkomt. Vanaf je pc of met je smartphone op de bank - mensen bepalen zelf waar en wanneer ze deelnemen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Onbeperkt aantal deelnemers',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De meeste inspraakavonden worden door twintig tot dertig mensen bezocht. Bij online participatie is dat onbeperkt, waarmee je een meer representatieve groep kunt bereiken.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Betere dynamiek',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wanneer mensen in groepen bij elkaar komen merk je vaak dat de mensen die veel aandacht trekken ook veel aandacht krijgen. Het is onmogelijk om bij een fysieke bijeenkomst 50 mensen aan het woord te laten maar online is dat geen enkel probleem. Iedereen kan zijn mening of ideeën delen. Zo creëer je een eerlijk speelveld voor alle deelnemers en verzamel je meer inzichten.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Beter toegankelijk voor mensen met een beperking',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel mensen die voor het eerst over online participatie horen reageren met de kritiek dat je met online tools mensen uitsluit. Daar hebben ze natuurlijk een punt. Maar niemand zegt dat je moet kiezen tussen online en fysieke participatie. Online is juist een fijne verrijking van wat er al is. Mensen met een auditieve of visuele beperking zijn vaak beter af met een online platform dat voldoet aan de ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://www.digitoegankelijk.nl/uitleg-van-eisen'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'toegankelijkheidsnormen van WCAG',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Zo kunnen mensen met een auditieve beperking bijvoorbeeld niet deelnemen aan een fysieke bijeenkomst maar kunnen zij wel online deelnemen omdat er tekstueel wordt gecommuniceerd. Slechtziende en blinde mensen kunnen de website laten voorlezen zodat ze ook kunnen deelnemen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De kracht van een online community',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Trajecten waarbij huurders kunnen meedenken bestaan vaak uit meerdere contactmomenten. Naast de uitnodiging wil je ook terugkoppelen wat je met de input van huurders gaat doen. Het is behoorlijk prijzig om daar steeds brieven voor te sturen dus je kunt mensen beter gratis op de hoogte houden via e-mailberichten. Met Argu gaat dat vanzelf.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Helaas hebben veel mensen weinig vertrouwen in (semi) publieke instellingen. Doordat je participatie via online tools laagdrempeliger en transparanter maakt krijgen huurders te zien dat er daadwerkelijk iets gebeurt met hun input. En zo kan online huurdersparticipatie helpen om dat vertrouwen weer op te bouwen.',
        }, // END Text
      ]),
    }, // END P
  ])
},

/************ BLOG CONTENT 7 **************/

{
  '@id': 'https://argu.co/info/blogs/verwachtingsmanagement-bij-participatie#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Iedereen die weleens een participatietraject heeft georganiseerd kent het woord ‘verwachtingsmanagement’. Dit begrip gaat over het zorgvuldig formuleren van teksten om te voorkomen dat inwoners bepaalde informatie verkeerd begrijpen. Het belangrijkste doel van verwachtingsmanagement is het voorkomen van wantrouwen, bezwaarprocedures en rechtszaken. Maar welke verwachtingen hebben mensen eigenlijk bij participatietrajecten? En kun je die wel managen?',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mensen willen alles',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In de basis willen mensen zoveel mogelijk geluk, zo min mogelijk leed, een oplossing voor een probleem moet zo min mogelijk kosten en het probleem moet morgen zijn opgelost. ',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bij gebrek aan een betere definitie noem ik dit fenomeen “de vloek van onredelijke verwachtingen”. Het houdt in dat mensen alles willen dat ze zelf uitkomt, zonder dat ze beseffen dat er dilemma’s zijn.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Dit is een principe dat altijd terugkomt bij participatietrajecten. Je moet hier dus rekening mee houden bij het ontwerpen van het participatieproces.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Kijk maar eens wat er gebeurt als je mensen naar hun behoeften vraagt:',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.Ol,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.Li,
          [elements.children]: seq([
            {
              [rdfx.type]: elements.P,
              [elements.children]: seq([
                {
                  [rdfx.type]: elements.InnerText,
                  [schema.text]: 'Hoe belangrijk vindt u het dat er nieuwe betaalbare woningen komen in uw stad?',
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
                          [schema.text]: 'Niet belangrijk - neutraal - heel belangrijk',
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
                  [schema.text]: 'Hoe belangrijk vindt u het dat de polder en groenvoorzieningen intact blijven?',
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
                          [schema.text]: 'Niet belangrijk - neutraal - heel belangrijk',
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
                  [schema.text]: 'Hoe belangrijk vindt u het dat er geen hoogbouw komt die uw uitzicht verpest en voor meer parkeerdruk zorgt?',
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
                          [schema.text]: 'Niet belangrijk - neutraal - heel belangrijk',
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
    }, // END Ol
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De kans is groot dat mensen hierop antwoorden dat alles heel belangrijk is. En aan die uitkomst heb je niets want je zal toch moeten kiezen tussen het een óf het ander. Als je op deze manier behoefteonderzoek gaat doen dan kom je klem te zitten. Mensen verwachten dat hun uitgesproken wensen worden vervuld en dat is onmogelijk.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Er zijn verschillende manieren om dit op te lossen. Je kunt redelijke verwachtingen scheppen door:',
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
                  [schema.text]: 'Mensen te laten reageren op dilemma’s. Ze kunnen dan geen tegenstrijdige wensen uitspreken.',
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
                  [schema.text]: 'Scenario’s voor te leggen met uitleg over alle voor- en nadelen. Zo krijgen mensen meer begrip voor de mogelijkheden en beperkingen van oplossingen. Lees hier meer over ',
                }, // END Text
                {
                  [rdfx.type]: elements.A,
                  [ontola.href]: url('https://argu.co/academy/online-participatie/participatie-instrumenten/scenario-discussie'),
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'scenario discussies',
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
                  [schema.text]: 'Een ideeënwedstrijd te organiseren waarbij alle inzendingen worden beoordeeld door specialisten binnen de gemeente. Zo krijgen mensen inhoudelijke feedback op hun ideeën. Lees hier meer over het ',
                }, // END Text
                {
                  [rdfx.type]: elements.A,
                  [ontola.href]: url('https://argu.co/academy/online-participatie/participatie-instrumenten/uitdaging'),
                  [elements.children]: seq([
                    {
                      [rdfx.type]: elements.InnerText,
                      [schema.text]: 'starten van een uitdaging',
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
      ]),
    }, // END Ul
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mensen denken dat alles kan',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je aan inwoners vraagt welke ideeën zij hebben voor hun buurt of gemeente dan veronderstel je eigenlijk dat ze weten of hun eigen idee haalbaar is. Terwijl bijna niemand weet wat er binnen de talloze wetten en lokale beleidsregels mogelijk is. Om dan nog maar niet te spreken over politieke en financiële haalbaarheid.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Zonder mensen duidelijke kaders te geven van wat kan - en vooral wat niet kan, krijg je verkeerde verwachtingen. Mensen delen dan naar hartelust hun ideeën en verwachten dan dat de gemeente er iets mee gaat doen. En die gemeente zou er met alle liefde iets mee willen doen maar ook de gemeente is gebonden aan wet- en regelgeving.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mensen denken dat de gemeente overal voor bevoegd is',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Aanvullend denken veel mensen dat de overheid een soort grote entiteit is die alles voor het zeggen heeft in Nederland. Maar in realiteit weet maar een klein deel van de Nederlanders uit hoeveel laagjes de verschillende overheden bestaan. De gemiddelde inwoner denkt daar niet zoveel over na en reageert vaak heel begrijpelijk op degene die een vraag stelt. Als de gemeente vraagt welke behoeften er zijn op het gebied van woningbouw dan grijpen veel inwoners de kans aan om te klagen over de neoliberale samenleving, de foute bankiers en dat vroeger alles beter was. Het slechte nieuws is dat de gemeente daar niet over gaat en al deze mensen dus moet teleurstellen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het spreekt voor zich hoe belangrijk het is bij participatietrajecten aan te geven waar de gemeente verantwoordelijk voor is en welke mogelijkheden zij heeft om invloed uit te oefenen. Dit wordt naar mijn mening veel te weinig gedaan. Dat zorgt voor veel teleurstelling bij inwoners.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mensen vinden het lastig om kosten in te schatten',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je de gemiddelde inwoner vraagt hoeveel kost het om een rotonde of een speeltuin te bouwen die zit die er waarschijnlijk vele honderdduizenden euro’s naast. Die onwetendheid heeft een grote impact op het draagvlak voor bepaalde beleidskeuzes. Het draagvlak voor bloembakken op iedere straathoek verdwijnt als sneeuw voor de zon als mensen erachter komen hoeveel de gemeentelijke belastingen daardoor omhoog gaan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Gemeenten doen er meestal verstandig aan om een paar concrete scenario’s uit te werken voor participatietrajecten. Als ze daarbij aangeven wat elk scenario kost en / of wat het oplevert dan krijgen inwoners heldere verwachtingen van de financiële impact. Dat maakt het eenvoudiger om keuzes te maken.',
        }, // END Text
      ]),
    }, // END P
  ]),
},

/************ BLOG CONTENT 8 **************/

{
  '@id': 'https://argu.co/info/blogs/participatieladder-bij-online-participatie#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Gemeenten en andere overheden starten ieder jaar meerdere participatietrajecten. Met een participatietraject probeer je een doelgroep te betrekken bij het vormen van beleid. Je kunt daarbij bepalen hoeveel invloed die doelgroep kan uitoefenen op het uiteindelijke besluit. Maar hoe bepaal je dit? Dat is een lastige vraag omdat de situatie bij elk participatietraject weer anders is. De participatieladder is een uiteenzetting van de verschillende maten van invloed die de doelgroep kan uitoefenen bij een participatietraject.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/svg')]: asset('/sales/images/blogs8_0.svg'),
    }, // END IMAGE
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Tips voor het gebruik van de participatieladder',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De participatieladder geeft zelf geen advies over welke mate van invloed je moet kiezen bij je participatievraagstuk. Dus welke trede moet je dan kiezen?',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '1. Probeer inwoners zoveel mogelijk invloed te geven.',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als inwoner deelnemen aan een participatietraject is niet verplicht. Daarom zullen mensen alleen geïnteresseerd zijn in deelname als ze beseffen dat deelnemen in hun eigen belang is. Het is dan ook logisch dat de meeste mensen niet worden geprikkeld als ze alleen informatie ontvangen over toekomstige veranderingen. Probeer dus bij elk vraagstuk om zo hoog mogelijk op de participatieladder te gaan zitten zodat mensen zien dat ze invloed kunnen uitoefenen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '2. Maak het laagdrempelig voor mensen om opmerkingen te geven en vragen te stellen',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het lijkt een open deur maar toch is het bij veel participatietrajecten niet zo eenvoudig om in contact te komen met de projectleider van het onderwerp. Bij elke verandering van beleid of wijziging in de fysieke ruimte is het nuttig om feedback te kunnen krijgen van belanghebbenden. Mensen kunnen je bijvoorbeeld wijzen op ontwerpfouten. En vaak krijg je ook complimenten, waarmee bevestigd wordt dat de juiste beslissingen zijn genomen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '3. Bedenk dat een participatietraject vaak uit meerdere participatievraagstukken bestaat en dus verschillende treden van de participatieladder kent',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bij de herinrichting van een straat staat bijvoorbeeld vast dat 10% van de parkeerplekken een laadpaal krijgt. Daarover deel je alleen informatie. Maar halverwege de straat is het mogelijk om nieuwe groenvoorzieningen aan te leggen. Hierbij zou je de buurtbewoners kunnen vragen welke groenvoorziening ze het liefst zouden willen. ',
        }, // END Text
      ]),
    }, // END P
  ]),
},

/************ BLOG CONTENT 9 **************/

{
  '@id': 'https://argu.co/info/blogs/online-participatie-biedt-een-betere-dynamiek#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mocht je weleens een inspraakavond hebben bezocht dan is het je vast wel opgevallen hoe de deelnemers van elkaar verschillen. Sommige mensen zitten aandachtig te luisteren maar komen nooit aan het woord. Andere mensen schromen niet om hun hand op te steken als ze iets willen zeggen - of erger - onderbreken de spreker om hun mening te verkondigen. Hierdoor werkt het participatieproces niet optimaal. Wie hard roept krijgt aandacht maar wie nadenkt voordat hij zich uitspreekt komt niet of nauwelijks aan het woord.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Online participatie biedt een welkome verrijking op de traditionele inspraakavond.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Informatieoverdracht gaat sneller',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Stel je voor dat de gemeente een inspraakavond organiseert over de komst van een windturbine. Bij zo’n onderwerp zijn de meningen vaak sterk verdeeld. Veel mensen hebben een sterke behoefte om hun zorgen te uiten en andere mensen te overtuigen van hun gelijk.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als 30 aanwezigen ieder vijf minuten spreektijd krijgen, dan duurt de avond al minstens tweeënhalf uur. En dan ben je nog niet eens met elkaar in gesprek gegaan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Kennisoverdracht gaat nou eenmaal sneller online. In plaats van in het kringgesprek op je beurt wachten kun je online direct reageren op alle content die je wil. Dat is erg nuttig omdat je kwantitatiever te werk kunt gaan. In plaats van een kleine (semi-) representatieve groep te spreken kun je online alle mensen uit de doelgroep laten meedoen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Op elkaar inhaken',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het unieke van online participatie is dat er geen spreektijd is en dat je niet hoeft te wachten tot andere mensen hebben gesproken. Je kunt reageren op alles wat andere mensen gezegd hebben. Hierdoor wordt het veel eenvoudiger om de diepte in te gaan op bepaalde details, zonder andere mensen daarmee in de weg te zitten. In het onderstaande voorbeeld ',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/jpg')]: asset('/sales/images/blogs9_0.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs9_0.webp'),
      [ontola.ns('format/avif')]: asset('/sales/images/blogs9_0.avif'),
    }, // END IMAGE
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Eerst denken, dan roepen',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een uniek voordeel van online participatietrajecten is dat mensen binnen een relatief lang tijdsbestek kunnen deelnemen. Vaak heb je bij een online participatietraject minstens vier weken de mogelijkheid om te reageren. Mensen kunnen zo de tijd nemen om de gepresenteerde informatie te laten bezinken voordat ze reageren. Daardoor krijg je beter onderbouwde reacties en ontstaat meer ruimte voor nuance.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Prikkel om inhoudelijk te reageren',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In de afgelopen jaren heb ik meer dan 150 online participatietrajecten begeleid. Een van de meest opvallende trajecten ging over de mogelijke komst van een asielzoekerscentrum. Iedereen wist dat dit een controversieel onderwerp zou worden. Na het uitwerken van het participatievraagstuk kwamen de eerste online reacties binnen. Veel mensen dachten dat er een stortvloed van scheldwoorden zou komen. Maar hoewel er zeker de nodige negativiteit was bleef de discussie beschaafd. Veel mensen spraken andere mensen er op aan dat ze liever geen AZC hadden, maar als het er toch moest komen, het dan beter op een specifieke plek moest komen.',
        }, // END Text
      ]),
    }, // END P
  ]),
},

/************ BLOG CONTENT 10 **************/

{
  '@id': 'https://argu.co/info/blogs/een-succesvol-participatietraject-hoe-doe-je-dat-als-gemeente#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel gemeenten organiseren jaarlijks meerdere participatietrajecten. Maar hoe laat je zo’n traject nou slagen? In de afgelopen jaren heb ik als participatieadviseur meer dan 150 trajecten begeleid. In dit artikel deel ik mijn ervaringen en de inzichten van de communicatieadviseurs, beleidsadviseurs en projectleiders waar ik mee heb samengewerkt.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bepaal je doelstellingen',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel gemeenten beginnen met een participatietraject zonder concrete verwachtingen. En dat is zonde. Door van tevoren een inschatting te maken van haalbare doelstellingen kun je ervoor zorgen dat je goede prioriteiten stelt tijdens de uitvoering van het traject. Denk aan de volgende doelen:',
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
                  [schema.text]: 'Minimaal 50% van de doelgroep bereikt hebben via een brief, flyer, advertentie of evenement.',
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
                  [schema.text]: 'Minimaal 10% van de doelgroep heeft actief deelgenomen aan het traject.',
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
                  [schema.text]: 'Er is inzicht gekregen in de verschillende belangen van de doelgroep.',
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
                  [schema.text]: 'Er is duidelijk geworden voor welke concrete oplossingen het meeste draagvlak is.',
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
          [schema.text]: 'Hierdoor maak je het makkelijker voor jezelf om tijdens het traject bij te sturen als dat nodig is.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bepaal je doelgroep',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel participatietrajecten starten omdat er ergens iets gaat veranderen in de fysieke omgeving. Er wordt bijvoorbeeld een nieuwe woonwijk aangelegd of een bestaande straat verbouwd.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In eerste instantie lijkt het vaak eenvoudig om de doelgroep te bepalen. Bij de herinrichting van een straat wil je de straatbewoners betrekken. Maar misschien zitten er ook wel winkeliers in die straat die niet op dat adres wonen en wel nuttige input kunnen geven. Vaak wordt dit opgelost door een brief te sturen naar alle adressen in de straat. Maar je kunt bedenken dat de mensen die regelmatig in de straat komen voor werk of boodschappen ook een nuttige bijdrage kunnen leveren aan het participatieproces. Je wil ook weten wat hun behoeften zijn.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Actie: maak een stakeholderanalyse',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een stakeholderanalyse zorgt ervoor dat je van tevoren weet wie betrokken moet worden bij het participatietraject. Daarin kun je ook per stakeholder aangeven wat diens belangen zijn. Dat komt later bij de besluitvorming van pas. Bekijk ook onze gids: het promotieplan van jouw online participatietraject ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/academy/trajectmanagement/content-uitwerken'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'onderaan deze pagina',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bepaal welke vraagstukken je wil voorleggen',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bij het ontwerpen van een participatieproces kijk je eerst of er een hoofdvraag is die je wil voorleggen aan mensen of dat er meerdere (sub)vragen zijn. Soms kan het zo simpel zijn als “hoe kunnen we uw straat beter inrichten?”. Door zo’n vraag te stellen kun je ideeën verzamelen van buurtbewoners. Maar naast de hoofdvraag wil je vaak ook behoefteonderzoek doen. Denk aan:',
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
                  [schema.text]: 'Hoe tevreden bent u met de parkeergelegenheden in uw straat?',
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
                  [schema.text]: 'Wilt u liever meer groenvoorzieningen of meer parkeerplekken?',
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
          [schema.text]: 'Meestal kom je uit op één of meer open vragen en daarnaast enkele gesloten vragen. Let er wel op dat je niet alleen maar behoefteonderzoek doet want je wil duidelijk maken aan mensen dat ze ook invloed kunnen uitoefenen. Een klassieke vragenlijst voelt passief aan en dat vinden mensen niet aantrekkelijk.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/argu/posts/11007'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Lees hier meer over hoe je een goed participatievraagstuk formuleert.',
            }, // END Text
          ]),
        }, // END A
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Kies bijpassende participatie-instrumenten',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je weet welke vraagstukken je wil voorleggen dan kun je aan de slag met een participatie-instrument. Er zijn allerlei participatie-instrumenten zoals de klassieke inspraakavond, een enquête, een discussieplatform, een begrotingstool, etc.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Verschil onderzoek en dialoog',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Participatietrajecten hebben eigenlijk altijd onderdelen waarbij de gemeente behoefteonderzoek doet en onderdelen waarbij er dialoog en inspraak plaatsvindt. Het is belangrijk om dit verschil te respecteren bij het kiezen welk participatie-instrument je inzet.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '“Hoe tevreden bent u met parkeren in uw straat?” is bijvoorbeeld een onderzoeksvraag die je in een enquête of poll zou willen stellen. “Hoe kunnen we de buurt vergroenen?” is een open vraag die goed kan werken in een dialoogvorm. Bij een fysieke bijeenkomst kun je zo’n vraag stellen aan het publiek, waarna je enkele mensen het woord geeft en ruimte biedt voor discussie.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Online is het eenvoudig om zowel onderzoeksvragen te stellen in de vorm van een enquête en een dialoog aan te gaan. Met een stelling of vraag kun je discussie uitlokken of ideeën verzamelen voor een lastige uitdaging.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bied online en fysieke mogelijkheden om deel te nemen',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Inmiddels hebben alle gemeenten ervaring met online participatietools en is er consensus dat je bij participatietrajecten altijd een mix van online en fysieke participatie moet aanbieden. Online kun je theoretisch de meeste mensen bereiken maar er blijven altijd mensen die voorkeur geven aan fysieke deelname.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het handige van een online tool zoals een participatieplatform is dat je alle informatie die betrekking heeft op het participatietraject kunt verzamelen op één plek. Op een participatiewebsite kunnen mensen achtergrondinformatie vinden, uitleg over de tijdlijn van het traject en reacties achterlaten. Je kunt hier ook aangeven dat mensen fysiek kunnen meedoen, bijvoorbeeld op geplande bijeenkomsten of via een telefoonnummer.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/argu/posts/11066'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Lees hier meer over hoe je online en offline participatie goed op elkaar kunt laten aansluiten.',
            }, // END Text
          ]),
        }, // END A
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bereik zoveel mogelijk mensen',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Door zoveel mogelijk mensen te bereiken met een participatietraject kun je goede ideeën verzamelen voor problemen, kun je draagvlak meten voor bepaalde oplossingen en kun je de kans minimaliseren dat er gegronde bezwaren zijn tegen beoogde oplossingen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Maar er zijn nog twee belangrijke redenen die vaak onderbelicht blijven.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Kwantiteit zorgt voor diversiteit',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Er zijn veel participatietrajecten waarbij wordt ingezet op het verzamelen van een representatieve groep bewoners die meedenken over een vraagstuk. Die worden dan uitgenodigd voor een bijeenkomst. Dat is natuurlijk goed bedoeld maar het grote nadeel van deze aanpak is dat je maar een heel klein deel van de inwoners betrekt.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een betere methode is om ervoor te zorgen dat je zoveel mogelijk mensen laat deelnemen. Daardoor ontstaat vanzelf diversiteit van de mensen die je betrekt.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het opbouwen van een betrokken community',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Online participatie maakt het mogelijk om mensen te verzamelen in een community die je vaker kunt raadplegen. Inwoners die deelnemen aan een participatietraject op een Argu platform worden bijvoorbeeld gebruiker van het platform. Bij een volgend onderwerp kan de gemeente die mensen dan weer eenvoudig uitnodigen. Zo kun je na verloop van tijd een grote community opbouwen waarmee je op termijn geld kunt besparen op het sturen van brieven en het plakken van posters om mensen uit te nodigen. ',
        }, // END Text
      ]),
    }, // END P
  ]),
},

/************ BLOG CONTENT 11 **************/

{
  '@id': 'https://argu.co/info/blogs/de-vloeken-van-burgerparticipatie#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je als projectleider wordt aangesteld voor een participatietraject maak je een goed plan voor de komende tijd. Waarschijnlijk begin je met een stakeholderanalyse en een inventarisatie van de middelen die je kunt inzetten om mensen te betrekken. Het is best een tijdsinvestering om dit voor te bereiden. En daarmee ben je er helaas nog niet! Voordat je begint liggen er al beren op de weg. Er berusten namelijk een aantal vloeken op ieder participatietraject. Maar wees gerust, in dit artikel lees je hoe je hiermee om kunt gaan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De vloek van hoge verwachtingen van inwoners',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wanneer je mensen vraagt om mee te denken of ideeën aan te leveren, schep je daarmee impliciet verwachtingen. Voor een inwoner is het lastig om in te schatten wat een gemeente precies wel of niet kan, maar meestal zijn de verwachtingen groter dan realistisch.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Mensen willen in principe alle voordelen, geen nadelen, een oplossing mag niks kosten en het moet morgen geregeld zijn. Dit leidt in eerste instantie tot extreem hoge verwachtingen van mensen die worden betrokken bij een participatietraject',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een ander punt is dat weinig mensen weten hoe de bestuurlijke rollen en verantwoordelijkheden zijn verdeeld in Nederland. De gemiddelde Nederlander ziet “de overheid” in principe als één entiteit die alle keuzes kan maken. Het grote probleem van dit misverstand is dat de meeste inwoners verwachten dat als ze met de gemeente in gesprek gaan, de gemeente ook de bevoegdheid heeft om hun wensen in vervulling te laten gaan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Hoe los je het op?',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Je ontkomt er niet aan dat je informatie moet overbrengen aan de mensen die je gaat betrekken. Ze moeten gaan begrijpen dat de gemeente niet kan toveren, dat alles geld kost en dat er altijd lastige dilemma’s zijn omdat er botsende belangen zijn tussen inwoners.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het schetsen van heldere kaders is dan ook een belangrijke stap. Geef aan wat er mogelijk is maar leg ook specifiek uit wat niet kan, en waarom. Het kan ook helpen om mensen te laten reageren op dilemma’s of scenario’s in plaats van te vragen wat ze zelf graag willen. ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/info/blogs/verwachtingsmanagement-bij-participatie'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Lees hierover meer in dit artikel',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Want alleen behoefteonderzoek doen is geen participatie. Je wil juist zoveel mogelijk in dialoog gaan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Hoe laat je mensen reageren op dilemma’s? Werk een paar scenario’s uit waar mensen op kunnen stemmen en reageren. Geef per scenario aan wat de voor- en nadelen zijn zodat mensen weten wat de consequenties zijn en beseffen dat je vaak moet kiezen tussen het een of het ander.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De vloek van NIMBY',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel mensen zien de voordelen van een windmolen maar willen er geen in hun achtertuin. Dat noemen we het “not in my backyard” fenomeen. Dit is een hardnekkig probleem bij ruimtelijke planning. Ironisch gezien leidt een participatietraject waarbij veel omwonenden worden betrokken vaak juist tot verenigde weerstand. Daarbij vallen dan vooral de tegenstanders op. Van de mensen die voor zijn of er neutraal over denken hoor je weinig tot niets. Dit geeft dan een vertekend beeld van de situatie.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Hoe los je het op?',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Zorg ervoor dat je duidelijk in kaart brengt hoeveel draagvlak er is voor de oplossing, los van waar de windmolen precies gaat komen. Dit kan ertoe leiden dat mensen hun bezwaren toch achter zich laten en accepteren dat er een windmolen in hun achtertuin komt.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/jpg')]: asset('/sales/images/blogs11_0.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/blogs11_0.webp'),
      [ontola.ns('format/avif')]: asset('/sales/images/blogs11_0.avif'),
    }, // END IMAGE
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '(Afbeelding: ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/utrecht/m/31'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'https://argu.co/utrecht/m/31',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: ')',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het is ook belangrijk om de voordelen van de oplossing te benadrukken. Let op: dit is een vorm van sturing en kan in sommige gevallen tegen je werken. Zorg er daarom voor dat je voordelen én nadelen noemt, waarbij je verwijst naar openbare bronnen. Zo help je de betrokkenen juist met het vormen van een volledig beeld, op basis waarvan mensen hun eigen mening kunnen bepalen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Politici hebben belang bij vaagheid',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Uiteindelijk moet er voor elke uitdaging die speelt in de openbare ruimte een concrete oplossing komen. Maar een politicus die een concrete oplossing aandraagt maakt zichzelf kwetsbaar. Vaak is het politiek gezien slimmer om in algemene termen te praten zoals “we moeten dit samen oplossen”. Dit leidt ertoe dat politici zich weinig bemoeien met participatietrajecten die over concrete dingen gaan. Daardoor krijgen inwoners niet het gevoel dat politici naar ze luisteren. Dat kan ertoe leiden dat veel mensen niet willen deelnemen aan het participatietraject omdat het nutteloos voelt.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Hoe los je het op?',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel gemeenten zijn geneigd om de standaard uitingen te doen zoals een poster in de wijk, een flyer en een bericht in de krant. Maar vaak wordt niet goed bijgehouden hoe effectief dat is. Zorg dat je kunt analyseren hoe effectief een promotiecampagne is. Kijk naar de verwachte kosten per betrokken inwoner om te bepalen welke communicatiemiddelen je inzet. ',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Hoewel je niemand wil uitsluiten moet je soms toch pragmatisch met je budget omgaan. Die advertentie op social media bereikt waarschijnlijk veel meer buurtbewoners dan die relatief dure advertentie in het lokale krantje. Daarmee sluit je de minder digitaal vaardige buurtbewoners misschien uit maar aan de andere kant heb je toch liever 100 betrokkenen dan 20. Vertrouw op je eigen creativiteit en organiseer bijvoorbeeld een actie op social media dat de mensen die hun bejaarde buren laten meedoen een prijs kunnen winnen. Zo bereik je potentieel alle leeftijdsgroepen, stimuleer je sociaal contact in de wijk en beperk je de kosten.',
        }, // END Text
      ]),
    }, // END P
  ]),
},

/************ BLOG CONTENT 12 **************/

{
  '@id': 'https://argu.co/info/blogs/3-succesvolle-strategieen-om-te-starten-met-e-participatie#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel organisaties willen starten met online participatie. De voordelen zijn inmiddels bekend: het is laagdrempeliger voor mensen om deel te nemen, je bereikt meer mensen, kunt eenvoudiger input verzamelen en resultaten terugkoppelen is een fluitje van een cent. Maar hoe begin je? In dit artikel deel ik drie succesvolle strategieën om een vlammende start te maken met e-participatie.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Waarom is starten eigenlijk moeilijk?',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Je hebt nog geen onderwerp',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Veel organisaties zien de voordelen van online participatie maar weten nog niet precies bij welke onderwerpen ze mensen willen betrekken. Vaak hoor ik bij het startgesprek dat er “genoeg onderwerpen zijn waar we mensen bij willen betrekken”. Maar als puntje bij paaltje komt is het toch lastig om het concreet te maken. Een participatietraject start je ook niet zomaar. Je hebt een een projectleider nodig, een helder doel van de participatie en capaciteit van de communicatieafdeling.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Je moet zelf wennen aan de werkwijze',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het organiseren van een goed online participatietraject vraagt om andere vaardigheden dan een fysiek traject. Je hebt uiteraard een degelijke basis van digitale vaardigheden nodig. Online communicatie vraagt ook om een andere stijl: minimalisme op het gebied van tekst en beeld zorgt voor goede resultaten. Terwijl je in een bewonersbrief waarschijnlijk meer woorden gebruikt om uitleg te geven.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Je hebt nog geen community',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je klaar bent voor de start begin je in principe met een leeg platform. Je kunt nog niet teren op inwoners die al eerder gebruik hebben gemaakt van het platform. Het is dus belangrijk om een stakeholderanalyse te doen en de bestaande netwerken uit te nodigen om online deel te nemen. Je moet hier in het begin best wel wat tijd in investeren.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Drie strategieën',
        }, // END Text
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In de afgelopen jaren hebben we met Argu meer dan 150 online participatietrajecten begeleid. Daarnaast houden we natuurlijk ook in de gaten hoe andere organisaties succesvolle participatietrajecten neerzetten. Daarbij zijn ons drie strategieën opgevallen die meestal leiden tot snelle resultaten.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Burgerforum',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Een burgerforum is een heel oude vorm van participatie. Er zijn veel gemeenten die een burgerforum hebben opgezet om betrokken inwoners periodiek te vragen om input. Er zijn allerlei vormen van burgerforums. Veel forums hebben de volgende kenmerken:',
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
                  [schema.text]: 'Een vaste groep van bijvoorbeeld 25 inwoners doet minstens een jaar mee aan het forum',
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
                  [schema.text]: 'De groep krijgt instructies en begeleiding waar nodig Het forum wordt periodiek geraadpleegd door de gemeenteraad over verschillende onderwerpen',
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
                  [schema.text]: 'Andere inwoners mogen ook reageren op de stellingen en vraagstukken die worden voorgelegd aan het burgerforum',
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
          [schema.text]: 'Starten met een burgerforum is een uitstekende strategie om te beginnen met e-participatie. Je kunt namelijk rekenen op een vaste kern van hoog betrokken inwoners. Deze mensen brengen de spreekwoordelijke steen aan het rollen als er een nieuwe stelling of vraagstuk wordt voorgelegd. Zij zullen sowieso reageren op het onderwerp. Daarna is het voor andere inwoners aantrekkelijker om ook te reageren. Het is namelijk makkelijker om je aan te sluiten bij een idee van een ander, of om daar juist tegenin te gaan. Ook kunnen de vaste deelnemers van het burgerforum  hun eigen netwerk inzetten om andere inwoners te betrekken bij actuele onderwerpen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wil jij starten met een burgerforum? ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/info/contact'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Vraag een demo aan',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Of lees meer over burgerforums.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wijkbudget',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'De meeste participatietrajecten zijn relatief saai voor veel bewoners. Denk aan afvalbeleid of het herinrichten van een industrieterrein. Met een wijkbudget maak je het doel van participatie heel duidelijk voor je doelgroep. Mensen kunnen een plan indienen om hun eigen wijk te verbeteren. Alle wijkbewoners kunnen vervolgens stemmen op plannen die door de gemeente zijn gecheckt op haalbaarheid.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Bij veel participatietrajecten is het lastig om goede input te verzamelen bij de doelgroep. Vaak delen mensen hun opinie over iets waar ze zich aan storen in plaats van dat ze met een goed onderbouwd voorstel komen om het probleem op te lossen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Doordat mensen zien dat er een maximaal bedrag is dat ze virtueel kunnen besteden, worden mensen bewust van de mogelijke kosten van een plan. Zo krijg je vaak heel concrete plannen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Omdat een wijkbudget altijd heel concreet is, tijdsgebonden en veel invloed geeft aan inwoners is een wijkbudget een uitstekende strategie om te starten met e-participatie.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wil jij starten met een wijkbudget? ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/info/contact'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'Vraag een demo aan',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Of ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/info/blogs/waarom-een-wijkbudget'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'lees meer over wijkbudgetten.',
            }, // END Text
          ]),
        }, // END A
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Begin met opinie peilen',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Als je rondkijkt op social media dan zie je dat het grootste deel van de content van gebruikers bestaat uit opinie. Mensen delen graag hun mening. Met een participatieplatform kun je inwoners vragen om hun mening over een specifiek voorstel. In tegenstelling tot social media-platforms heb je dan zelf de regie over het onderwerp. Je kunt mensen laten reageren op een idee of stelling, mensen voor of tegen laten stemmen en vragen welke voor- en nadelen ze zien.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Omdat een stelling vaak meer prikkelt dan een complex vraagstuk is beginnen met opinie peilen een uitstekende strategie om te starten met e-participatie. Het zal eenvoudig zijn om de eerste mensen te bereiken en te laten reageren op je participatieplatform. Vervolgens kun je diezelfde mensen later natuurlijk ook vragen om te reageren op andere vraagstukken.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [elements.bold]: true,
          [schema.text]: 'Met welke strategie begin jij?',
        }, // END Text
      ]),
    }, // END P
  ]),
},
/************ CASE_CONTENT 0 **************/
{
  '@id': 'https://argu.co/info/cases/de-drechtsteden-werken-samen-aan-de-energietransitie-en-warmtetransitie#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "We gaan in Nederland over op duurzame energiebronnen. De aanleiding voor deze grootschalige transitie is iedereen bekend. De aarde warmt op met alle negatieve gevolgen voor ons klimaat. Dat proces willen we stoppen, zodat we een gezonde aarde kunnen doorgeven aan de generaties na ons. Gedreven door deze urgentie voelen de Drechtsteden (Dordrecht, Sliedrecht, Zwijndrecht, Alblasserdam, Hardinxveld-Giessendam en Hendrik-Ido-Ambacht) de noodzaak om met elkaar de schouders eronder te zetten. "
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Samen met de Drechtsteden hebben wij gewerkt aan het platform: "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://denkmee.drechtstedenenergie.nl/denkmee"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "denkmee.drechstedenenergie.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " waarmee zij in meerdere participatierondes met inwoners en professionals in gesprek gaan, om te horen welke kansen er zijn en waar ze rekening mee moeten houden bij het opstellen van een Regionale energiestrategie (RES)."
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het doel"
        }
      },
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2")
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Alle dertig energieregio's in Nederland hebben de opdracht gekregen om een RES op te stellen. De RES beschrijft hoe de opwekking van duurzame elektriciteit, de warmtetransitie in de gebouwde omgeving, de opslag van energie én de energie-infrastructuur vorm krijgen. Voor de zomer van 2020 hebben de Drechtsteden een concept-RES uitgebracht. "
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Er wordt toegewerkt naar een RES 1.0 en dat wordt voor een groot deel gekenmerkt door de sterke focus op het gesprek met de samenleving. Draagvlak onder bewoners is van het grootste belang voor het slagen van de RES omdat de impact op de woonomgeving groot is. Uit onderzoek van "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://www.eigenhuis.nl/actueel/nieuwsoverzicht/2021/03/15/13/30/veh-bewoners-nog-nauwelijks-betrokken-bij-regionale-energiestrategieen#/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Vereniging Eigen Huis (VEH)"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " blijkt dat ruim 92% van de huiseigenaren geïnteresseerd zijn in de energieplannen in hun omgeving. Het is dan ook van belang dat bewoners bijvoorbeeld middels een participatieplatform betrokken worden."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Onderwerpen waar bewoners bij kunnen participeren zijn:"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Zonnepanelen in restruimtes (zoals op daken van parkeerplaatsen en langs de berm)"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Opwekking van grootschalige duurzame energie via zonnevelden en windturbines (zoekgebieden)"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "De warmtetransitie"
                }
              }
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Energiebesparing en onlangs hebben ze een enquête gehouden over de warmtetransitie (aardgasvrij)"
                }
              }
            }
          }
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De oplossing"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Deze opdracht bood ons enkele unieke uitdagingen. Naast de wens om iedere gemeente van de Drechtsteden een eigen platform te bieden, is er gewerkt aan een gezamenlijk platform waar alle informatie van de verschillende platformen gebundeld is. Dit is: "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://denkmee.drechtstedenenergie.nl/denkmee"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "denkmee.drechstedenenergie.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Voor het energietransitie platform van de Drechtsteden hebben wij enkele maatwerk software toepassingen ontwikkeld. Zo is er een tijdlijn geïmplementeerd waarmee de verschillende participatierondes overzichtelijk worden weergegeven."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/case0-1.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/case0-1.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/case0-1.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Daarnaast is het mogelijk voor deelnemers om ideeën te plaatsen middels een interactieve kaart van de omgeving. Dezelfde kaart kan ook gebruikt worden om een totaaloverzicht van (aangedragen) maatregelen te krijgen per gebied, wijk of straat."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/avif')]: asset('/sales/images/case0-2.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/case0-2.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/case0-2.webp'),
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het resultaat"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Ul"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Li"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Diverse enquêtes gedeeld, die samen meer dan 6.000 keer zijn ingevuld"
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
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
              "<https://ns.ontola.io/elements#children>": {
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
                "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
                  "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
                  "<http://schema.org/text>": "Er is 1.077 keer gestemd op locaties bij de vraag: “In welke restruimtes hebben wij plaats voor zonnepanelen?”"
                }
              }
            }
          }
        }
      }
    },
  }
},

/********** CASE_CONTENT 1 */

{
  '@id': 'https://argu.co/info/cases/discussieplatform-voor-docenten-over-de-centrale-examens#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het College voor Toetsen en Examens (CvTE) zorgt voor de uitvoering van de centrale examens. De coronacrisis zorgt voor enkele uitdagingen bij de organisatie en inrichting van deze examens. Om met docenten in contact te komen en docenten onderling van gedachte te laten wisselen heeft het CvTE "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://denkmee.cvte.nl/"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Denkmee.cvte.nl"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " gelanceerd. Dit is een discussieplatform waar je als docent en/of examensecretaris onder meer ideeën kan uitwisselen over de uitvoering van de centrale examens tijdens de coronacrisis. Zoals het CvTE het omschrijft:"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "“Dit platform is er voor jou; om met ons en met elkaar in gesprek te gaan, je mening te geven en ervaringen te delen over de centrale examens en alles wat daarmee samenhangt”."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het doel"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het doel van het discussieplatform is om docenten een plek te bieden waar ze kunnen praten over de centrale examens en vragen kunnen stellen waar andere docenten bij kunnen helpen. Belangrijk hierbij is dat docenten eenvoudig zelf onderwerpen kunnen starten en ideeën kunnen plaatsen bij de uitdagingen van anderen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Oplossing"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Samen met het CvTE hebben wij gewerkt aan een platform waar docenten samen kunnen komen om gesprekken te starten, inhaken op andere gesprekken en van gedachte te wisselen met het CvTE. Daarnaast biedt het platform algemene informatie en verwijzingen naar andere relevante websites en vakverenigingen. Moderators van het CvTE houden het platform scherp in de gaten en reageren op vragen van docenten wat zorgt voor veel interactie. Tot slot is de voorzitter van het CvTE een maand gastblogger geweest en heeft in deze periode actief deelgenomen aan verschillende gesprekken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het resultaat"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Op 21 januari 2021 ging het platform live en binnen 1 week hadden zich al "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<https://ns.ontola.io/elements#bold>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "65 docenten aangemeld"
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " en deelgenomen aan verschillende gesprekken en gestemt op stellingen die door het CvTE waren geplaatst. Op het moment van schrijven zijn er al twee keer zoveel docenten geregistreerd. Zoals gezegd is het platform nog volop in gebruik - dus neem af en toe eens een kijkje om de ontwikkelingen te volgen."
        }
      }
    },
  }
},

/********** CASE_CONTENT 2 */


{
  '@id': 'https://argu.co/info/cases/inwoners-van-heerhugowaard-denken-mee-over-de-herinrichting-van-centrumwaard#content',
  [rdfx.type]: elements.Document,
  "<https://ns.ontola.io/elements#children>": {
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De Gemeente Heerhugowaard werkt aan een gebiedsvisie voor Centrumwaard. De maanden voorafgaand aan het discussieplatform hebben alle inwoners, ondernemers en organisaties uit Centrumwaard mee kunnen doen in het proces om tot een gebiedsvisie te komen. De opbrengsten hebben geleid tot een aantal \"richtinggevende uitspraken\""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het doel"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Waar de richtinggevende uitspraken via offline bijeenkomsten tot stand zijn gekomen, heeft de komst van Corona gezorgd dat het vervolg van het traject op een andere manier moest worden ingevuld. Het concept van de gebiedsvisie voor Centrumwaard is op 6 januari 2021 middels een online bijeenkomst gepresenteerd aan de inwoners en ondernemers."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_03>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Maar om invulling te geven aan de wens om inwoners en ondernemers mee te laten denken, te stemmen en uiteindelijk gezamenlijk de koers te bepalen voor de ontwikkelingen van Centrumwaard, was er behoefte aan een online oplossing."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_04>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#bold>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het doel?"
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " Inwoners en ondernemers van Centrumwaard een plek bieden om hun stem te laten horen en mee te helpen bij de ontwikkeling van de gebiedsvisie."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_05>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Oplossing"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_06>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Met een beetje hulp van ons :wink: heeft de Gemeente het platform: "
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#A"),
          "<https://ns.ontola.io/core#href>": url("https://argu.co/heerhugowaard"),
          "<https://ns.ontola.io/elements#children>": {
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
            "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
              "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
              "<http://schema.org/text>": "Herinrichting Centrumwaard"
            }
          }
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_02>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " ingericht. Om ervoor te zorgen dat alleen inwoners van Centrumwaard konden meedoen is er gebruik gemaakt van een uitnodiging per post. Door de uitnodiging te voorzien van een unieke aanmeldcode hebben inwoners van Centrumwaard de mogelijkheid gehad om deel te nemen en hun stem te laten horen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_07>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Om het voor bezoekers makkelijker te maken om door de website te navigeren zijn de verschillende stellingen onderverdeeld in zes thema's."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_08>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Daarnaast zijn de stellingen dusdanig geformuleerd dat het uitnodigt tot participatie. Dit wil zeggen dat een stelling geen open eind kent maar bijvoorbeeld geformuleerd is als: We richten het gebied in volgens het principe \"auto te gast\"."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_09>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Tip"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<https://ns.ontola.io/elements#bold>": true,
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Tip:"
        },
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_01>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": " Wanneer je wil dat mensen stemmen op bepaalde stellingen. Zorg er dan altijd voor dat de stelling geen open eind heeft. Hierdoor maak je het makkelijker om 'voor' of 'tegen' iets te zijn. Wat uiteindelijk een beter beeld geeft van het draagvlak."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_10>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Een van de thema's bevatte scenario's die de Gemeente had uitgewerkt. Zoals het onderstaande voorbeeld laat zien zijn er voor de Middenweg drie scenario's geschetst waar de inwoners en ondernemers op mochten stemmen. Deze manier van 'scenario vergelijken' schept een helder beeld van de mogelijkheden en zorgt ervoor dat er gerichte discussies ontstaan. Door te stemmen op de verschillende scenario's hebben de inwoners en ondernemers de mogelijkheid gekregen om te stemmen op het scenario dat het beste aansluit bij de eigen wensen."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_11>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#Img"),
      "<https://ns.ontola.io/core#href>": url("https://lh5.googleusercontent.com/FyqmxDk30sutrnpyqlirWhcCmA4wYPEQPF4f35UE03qAeNYXrOmbSxaBWp0dPqwpeErKe4qHJrSdMzeetOik4cBxip5D0zdhMBZ7r1plTdYLVOX0XhavhhX9QKvuPwAY7-gSubvr"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": ""
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_12>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het resultaat"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_13>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "De inwoners van Centrumwaard hebben 1 maand de tijd gehad om middels het platform: Herinrichting Centrumwaard mee te denken over de verschillende maatregelen. Ongeveer 10% van de uitgenodigde inwoners hebben in totaal 549 bijdragen geleverd. Dit vertaalt zich in stemmen, reageren en ideeën aangedragen voor de herinrichting van Centrumwaard. Zoals hieronder in de reactie van Harry Mars is te lezen: een mooie resultaat!"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_14>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#H2"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Reactie van de klant"
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_15>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "\"Voor een gebiedsontwikkeling heeft de gemeente Heerhugowaard een uitgebreid participatietraject opgetuigd. Onderdeel hiervan was inwoners de kans te geven op richtinggevende uitspraken en dilemma's te reageren."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_16>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het is een zoektocht om met bewoners in gesprek te gaan wanneer dat live niet mogelijk is. Hiervoor hebben wij contact met Argu gezocht."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_17>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Wij zijn zeer tevreden over deze samenwerking. De medewerkers van Argu zijn zeer toegankelijk en hulpvaardig bij het inrichten van het platform. Vanuit hun ervaring konden zij ons tips en suggesties geven voor de opbouw van de site."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_18>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Het platform is zeer flexibel en daarmee voor tal van toepassingen te gebruiken."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_19>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Van de deelnemers/inwoners hebben wij begrepen dat het platform zeer gebruiksvriendelijk is. We hebben meer reacties dan verwacht binnen gekregen op de door ons geplaatste content."
        }
      }
    },
    "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_20>": {
      "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#P"),
      "<https://ns.ontola.io/elements#children>": {
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq"),
        "<http://www.w3.org/1999/02/22-rdf-syntax-ns#_00>": {
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>": url("https://ns.ontola.io/elements#InnerText"),
          "<http://schema.org/text>": "Indien u meer wilt weten over onze ervaringen kunt u contact opnemen met Harry Mars, Communicatie adviseur van de gemeente Heerhugowaard.\""
        }
      }
    },
  },
},

/************ CASE_CONTENT 3 */

{
  '@id': 'https://argu.co/info/cases/online-huurdersparticipatie-bij-thuisvester#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In september 2018 vroeg woningcorporatie Thuisvester haar huurders om ',
        }, // END TEXT
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/thuisvester/q/223'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'initiatieven te bedenken in de wijk',
            }, // END TEXT
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. De corporatie stelde namelijk een budget beschikbaar voor ondersteuning van initiatieven in de wijk. In plaats van dit via de traditionele communicatiemiddelen (bijvoorbeeld krant, folders) te doen, is er gekozen voor online participatie, om zo een bredere groep te betrekken en het besluitvormingsproces transparant te maken.',
        }, // END TEXT
      ]),
    }, //END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het doel',
        }, // END TEXT
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Via een oproep in de maandelijkse digitale nieuwsbrief en via de website, facebook en twitter, van Thuisvester werden huurders gevraagd om mee te denken over initiatieven in de wijk. Er werd een pakkende titel gekozen: ',
        }, // END TEXT
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/thuisvester/q/223'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: '"Hoe zou u €1.000 besteden?"',
            }, // END TEXT
          ]),
        }, // END A
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ariaLabel]: 'Een scherm afbeelding van de uitdaging: "Hoe zou u duizend euro besteden?".',
      [ontola.ns('format/avif')]: asset('/sales/images/case3-0.avif'),
      [ontola.ns('format/png')]: asset('/sales/images/case3-0.png'),
      [ontola.ns('format/webp')]: asset('/sales/images/case3-0.webp'),
    }, // END PICTURESET
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Voorwaarden',
        }, // END TEXT
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Thuisvester stelde een paar voorwaarden. Zo moest het initiatief zoveel mogelijk nut hebben voor huidige, en het liefst ook toekomstige bewoners. Ook was het belangrijk dat minimaal 20 mensen stemden op een initiatief. Naast het waarborgen van een democratisch proces had dit nog een ander voordeel: mensen met initiatieven werden zo aangespoord om buurtbewoners aan te spreken om op hun idee te stemmen, waardoor er meer interactie ontstond.',
        }, // END TEXT
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Oplossing',
        }, // END TEXT
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Op Argu kun je discussies starten aan de hand van een Uitdaging of een Idee. Een Uitdaging is een vraagstuk waarin achtergrondinformatie en voorwaarden worden gegeven. Vervolgens roep je mensen op om met goede ideeën te komen. Daar kunnen mensen op stemmen en reageren. Zo zie je duidelijk wat het probleem is en wat de mogelijk oplossingen daarvoor zijn. Die staan gesorteerd op draagvlak en per idee zijn de belangrijkste argumenten voor en tegen zichtbaar. Zo kun je als organisatie betere beslissingen nemen, op een transparante en democratische manier.',
        }, // END TEXT
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ariaLabel]: 'Een scherm afbeelding van één van de ingediende ideeën: "Plaatsen van voetbalgoaltjes". Het idee heeft 46 stemmen voor en 2 stemmen tegen.',
      [ontola.ns('format/avif')]: asset('/sales/images/case3-1.avif'),
      [ontola.ns('format/jpg')]: asset('/sales/images/case3-1.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/case3-1.webp'),
    }, // END PICTURESET
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het resultaat',
        }, // END TEXT
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Op het online platform hebben ',
        }, // END TEXT
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '242 huurders deelgenomen',
          [elements.bold]: true,
        }, // END TEXT
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Samen plaatsten zij ',
        }, // END TEXT
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '46 ideeën',
          [elements.bold]: true,
        }, // END TEXT
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '. Na een maand sloot de discussie en plaatste Thuisvester een update, die automatisch wordt verzonden aan alle deelnemers. Er werd gekozen voor een financiële bijdrage voor het Halloweenfeest en hulp bij contact leggen met de gemeente voor het creëren van een openbare fitnessplek in Oosterhout.',
        }, // END TEXT
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H3,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Vervolg',
        }, // END TEXT
      ]),
    }, // END H3
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Thuisvester heeft de winnaar van de VVV-bon bekendgemaakt en contact opgenomen met de indieners van de initiatieven. Aan het Halloweenfeest is een financiële bijdrage toegekend. Zo kan iedereen teruglezen hoe het besluit tot stand is gekomen. Na een half jaar wordt dit traject herhaald.',
        }, // END TEXT
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wil je ook ontdekken hoe online huurdersparticipatie werkt en hoe je een representatieve groep huurders kunt betrekken bij het verbeteren van beleid? Neem dan contact op!',
        }, // END TEXT
      ]),
    },
  ]),
},
{
  '@id': 'https://argu.co/info/cases/inwoners-laten-meedenken-bij-nieuwe-locaties-voor-ondergrondse-containers-in-ijsselstein#content',
  [rdfx.type]: elements.Document,
  [elements.children]: seq([
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Met het nieuwe afvalbeleid van de gemeente IJsselstein wordt er een overstap gemaakt naar ‘dynamisch inzamelen’. Dit betekent o.a. dat bewoners gebruik gaan maken van ondergrondse containers voor hun restafval. De gemeente IJsselstein wilde inwoners de mogelijkheid bieden te reageren op het concept locatieplan.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Met het online participatieplatform ',
        }, // END Text
        {
          [rdfx.type]: elements.A,
          [ontola.href]: url('https://argu.co/ijsselstein'),
          [elements.children]: seq([
            {
              [rdfx.type]: elements.InnerText,
              [schema.text]: 'https://argu.co/ijsselstein',
            }, // END Text
          ]),
        }, // END A
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: ' zijn de vier verschillende regio’s afzonderlijk van elkaar opengezet voor participatie.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het doel',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het concept locatieplan van de ondergrondse containers kent vier regio’s',
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
                  [schema.text]: 'Regio Noord met 10 concept locaties',
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
                  [schema.text]: 'Regio Zuid met 37 concept locaties',
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
                  [schema.text]: 'Regio West met 22 concept locaties',
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
                  [schema.text]: 'Regio Centrum met 6 concept locaties',
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
          [schema.text]: 'Het doel was om de inwoners per regio uit te nodigen om te reageren op de concept locaties. Daarnaast moest het mogelijk zijn de verschillende concept locaties op de kaart te kunnen zien.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Oplossing',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Om dit participatietraject zo overzichtelijk mogelijk te maken voor alle inwoners is gebruik gemaakt van de functionaliteit ‘Uitdaging’. Hiermee is het mogelijk onder een bepaald vraagstuk (in dit geval bijvoorbeeld regio Zuid) verschillende ideeën te plaatsen (in dit geval de verschillende concept locaties in regio Zuid). Dit heeft zich vertaald naar de onderstaande inrichting van het platform. ',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: ontola.PictureSet,
      [ontola.ns('format/jpg')]: asset('/sales/images/case4-0.jpg'),
      [ontola.ns('format/webp')]: asset('/sales/images/case4-0.webp'),
      [ontola.ns('format/avif')]: asset('/sales/images/case4-0.avif'),
    }, // END IMAGE
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Er kan door middel van de kaartweergave en daar onderstaande lijst naar de verschillende locaties genavigeerd worden. Iedere locatie is voorzien van een korte toelichting en een bijlage met kadastrale aanduiding. Dit ziet er als volgt uit:',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.Img,
      // [elements.float]: 'right',
      [schema.image]: {
        [rdfx.type]: ontola.PictureSet,
        [ontola.ns('format/jpg')]: asset('/sales/images/case4-1.jpg'),
        [ontola.ns('format/webp')]: asset('/sales/images/case4-1.webp'),
        [ontola.ns('format/avif')]: asset('/sales/images/case4-1.avif'),
      }, // END IMAGE
    },
    {
      [rdfx.type]: elements.Img,
      [elements.float]: 'right',
      [schema.image]: {
        [rdfx.type]: ontola.PictureSet,
        [ontola.ns('format/jpg')]: asset('/sales/images/case4-2.jpg'),
        [ontola.ns('format/webp')]: asset('/sales/images/case4-2.webp'),
        [ontola.ns('format/avif')]: asset('/sales/images/case4-2.avif'),
      }, // END IMAGE
    }, // END Img
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Inwoners konden vervolgens per concept locatie reageren en vragen stellen aan de gemeente IJsselstein.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Het resultaat',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Doordat de Gemeente IJsselstein actief reageerde op de binnenkomende reacties en vragen zijn er inhoudelijk goede dialogen gevoerd wat in sommige gevallen heeft geresulteerd in een wijziging van de locatie. Dit bewijst maar weer dat het betrekken van inwoners leidt tot waardevolle feedback!',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'In totaal zijn er ',
        }, // END Text
        {
          [rdfx.type]: elements.InnerText,
          [elements.bold]: true,
          [schema.text]: '205 reacties',
        }, // END Text
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: ' geplaatst en worden enkele locaties opnieuw in overweging genomen.',
        }, // END Text
      ]),
    }, // END P
    {
      [rdfx.type]: elements.H2,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: 'Wat zegt de Gemeente IJsselstein zelf',
        }, // END Text
      ]),
    }, // END H2
    {
      [rdfx.type]: elements.P,
      [elements.children]: seq([
        {
          [rdfx.type]: elements.InnerText,
          [schema.text]: '“We zijn blij om te zien dat veel bewoners gebruik hebben gemaakt van deze optie. Via Argu hebben we veel vragen m.b.t. het nieuwe afvalbeleid kunnen beantwoorden. Ook hebben we hierdoor een duidelijk beeld gekregen van de voor- en nadelen per locatie. Door het actief meedenken van omwonenden zijn we bij verschillende locaties snel tot een beter alternatief gekomen. Voor een groot project biedt Argu de mogelijkheid om op een eenvoudige en laagdrempelige manier met elkaar in contact te komen. We zijn tevreden met de goede samenwerking gedurende het proces.” ',
        }, // END Text
      ]),
    }, // END P
  ]),
}
];
