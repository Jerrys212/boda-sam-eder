const SEP = "\u00a0·\u00a0";

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const ceremony = {
  name: "Parroquia de San Antonio de Padua",
  address:
    "Plaza Principal No. 1, Col. Centro, C.P. 54900, Tultitlán de Mariano Escobedo, Estado de México",
};

const reception = {
  name: "Salón Rincón Colonial",
  address:
    "Jaime Torres Bodet 42, Nativitas, C.P. 54900, Tultitlán de Mariano Escobedo, Estado de México",
};

const giftRegistry = {
  store: "El Palacio de Hierro",
  // TODO: dato real
  eventNumber: "000000",
  // TODO: dato real
  bank: "[BANCO EJEMPLO]",
  // TODO: dato real
  holder: "Sam y Eder",
  // TODO: dato real
  clabe: "000 000 0000000000 0",
};

export const wedding = {
  dateISO: "2027-04-12T14:00:00",

  meta: {
    title: "Sam & Eder · 12 de abril de 2027",
    description:
      "Nos casamos el 12 de abril de 2027 en Tultitlán, Estado de México. Acompáñanos a celebrar este día tan especial.",
    // TODO: dato real
    siteUrl: "https://example.com",
    ogImage: "/img/hero.jpg",
  },

  nav: {
    monogram: { first: "S", amp: "&", second: "E" },
    links: [
      { href: "#day", label: "el día" },
      { href: "#travel", label: "ubicaciones" },
      { href: "#faq", label: "preguntas" },
    ],
  },

  hero: {
    first: "Sam",
    amp: "y",
    second: "Eder",
    details: `12 . 04 . 2027 ${SEP} Tultitlán, Estado de México`,
    image: { src: "/img/hero.jpg", alt: "Pareja de novios abrazados" },
  },

  countdown: {
    daysToGo: (days: number) => `Faltan ${days} días`,
    tomorrow: "¡Es mañana!",
    today: "¡Hoy es el día!",
    married: "Felizmente casados",
  },

  statement: {
    lead: "Junto con nuestras familias",
    title: "Te invitamos a celebrar nuestra\u00a0boda",
    lines: [
      "Doce de abril de dos mil veintisiete",
      `Ceremonia religiosa a las 2:00\u00a0p.m. ${SEP} ${ceremony.name}`,
    ],
    flourish: "S & E",
  },

  itinerary: {
    label: "12 de abril",
    title: "Itinerario",
    image: {
      src: "/img/aisle.jpg",
      alt: "Patio decorado con mesas largas, flores blancas y luces colgantes",
    },
    caption: "Todo listo para celebrar",
    events: [
      { time: "2:00 p.m.", name: "Ceremonia religiosa", note: `Nos damos el sí en la ${ceremony.name}` },
      { time: "3:30 p.m.", name: "Recepción", note: `Te esperamos con los brazos abiertos en el ${reception.name}` },
      { time: "4:00 p.m.", name: "Boda civil", note: "Firmamos rodeados de las personas que más queremos" },
      { time: "5:00 p.m.", name: "Inicia la fiesta", note: "Ponte cómodo, saluda y disfruta" },
      { time: "5:30 p.m.", name: "Comida", note: "A la mesa, que hay mucho que celebrar" },
      { time: "7:30 p.m.", name: "Brindis", note: "Unas palabras breves y a levantar las copas" },
      { time: "9:00 p.m.", name: "Baile", note: "Nuestro primer baile, y después la pista es tuya" },
      { time: "11:00 p.m.", name: "Tornafiesta", note: "Para los que aguantan, todavía hay más" },
      { time: "1:00 a.m.", name: "Fin de la fiesta", note: "Gracias por celebrar con nosotros" },
    ],
  },

  breather: {
    main: { src: "/img/beach.jpg", alt: "Pareja de novios bailando sobre la arena" },
    inset: {
      src: "/img/hands.jpg",
      alt: "Manos de los novios con sus anillos de boda junto a un ramo de rosas blancas",
    },
    note: "¡Te esperamos!",
  },

  locations: {
    label: "Ubicaciones",
    title: "Dónde celebraremos",
    intro:
      "Los dos lugares están en Tultitlán. Aquí tienes las direcciones para que llegues sin contratiempos.",
    mapLabel: "Ver en el mapa",
    places: [
      {
        schedule: `Ceremonia religiosa ${SEP} 2:00\u00a0p.m.`,
        ...ceremony,
        mapHref: mapsUrl(`${ceremony.name}, ${ceremony.address}`),
      },
      {
        schedule: `Recepción ${SEP} 3:30\u00a0p.m.`,
        ...reception,
        mapHref: mapsUrl(`${reception.name}, ${reception.address}`),
      },
    ],
  },

  dressCode: {
    label: "Código de vestimenta",
    title: "Formal",
    paragraphs: [
      {
        bold: "Hombres:",
        text: " traje, de preferencia azul marino. ¡Queremos verlos muy guapos!",
      },
      {
        bold: "Mujeres:",
        text: " vestido del color que más te guste, excepto blanco o rojo.",
      },
      {
        text: "La fiesta dura hasta la madrugada, así que trae zapatos con los que puedas bailar toda la noche y algo para abrigarte cuando refresque.",
      },
    ],
    image: { src: "/img/fashion.jpg", alt: "Novio de esmoquin tomando de las manos a la novia con velo" },
  },

  faq: {
    label: "Algunos detalles",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Puedo llevar a mis hijos?",
        answer:
          "Queremos mucho a sus pequeños, pero esta celebración es exclusiva para adultos. Tómalo como una noche para consentirte.",
      },
      {
        question: "¿Hay mesa de regalos?",
        answer: `Tu presencia es nuestro mejor regalo. Si quieres tener un detalle con nosotros, tenemos mesa de regalos en ${giftRegistry.store} con el número de evento ${giftRegistry.eventNumber}. También puedes hacer una transferencia a ${giftRegistry.bank}, a nombre de ${giftRegistry.holder}, CLABE ${giftRegistry.clabe}.`,
      },
      {
        question: "¿Habrá fotos?",
        answer:
          "Sí, un fotógrafo profesional nos acompañará todo el día. Si quieres una foto con nosotros, pídela con toda confianza.",
      },
    ],
  },

  footer: {
    date: "Doce de abril de dos mil veintisiete",
    first: "Sam",
    amp: "&",
    second: "Eder",
    credit: {
      template: "Forever Lite por ",
      author: { label: "Mike Smith Design", href: "https://github.com/mikesmithdesign" },
      middle: " — plantilla gratuita • Distribuida por ",
      distributor: { label: "ThemeWagon", href: "https://themewagon.com" },
    },
  },
} as const;
