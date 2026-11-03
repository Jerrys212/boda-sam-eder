const SEP = " · ";

export const wedding = {
  dateISO: "2027-06-14T14:00:00",

  meta: {
    title: "Margot & Henry, 14 June 2027",
    // TODO: dato real
    siteUrl: "https://example.com",
    ogImage: "/img/hero.jpg",
  },

  nav: {
    monogram: { first: "M", amp: "&", second: "H" },
    links: [
      { href: "#day", label: "the day" },
      { href: "#travel", label: "getting there" },
      { href: "#faq", label: "questions" },
    ],
  },

  hero: {
    first: "Margot",
    amp: "and",
    second: "Henry",
    details: `14 . 06 . 2027 ${SEP} Ashfield House, Hertfordshire`,
    image: { src: "/img/hero.jpg", alt: "Margot and Henry" },
    caption: "Norfolk, last September",
  },

  countdown: {
    daysToGo: (days: number) => `${days} days to go`,
    tomorrow: "Tomorrow. Tomorrow!",
    today: "Today is the day",
    married: "Happily married",
  },

  statement: {
    lead: "Together with our families",
    title: "We invite you to celebrate our marriage",
    lines: [
      "Saturday the fourteenth of June, two thousand and twenty seven",
      `Ceremony at two o’clock ${SEP} Ashfield House, Hertfordshire`,
    ],
    flourish: "M & H",
  },

  itinerary: {
    label: "Saturday 14 June",
    title: "Order of the day",
    image: { src: "/img/aisle.jpg", alt: "The ceremony" },
    caption: "The walled garden",
    events: [
      { time: "1.30pm", name: "Guests arrive", note: "Find your seat, say hello, settle in" },
      { time: "2.00pm", name: "The ceremony", note: "In the walled garden, weather permitting" },
      { time: "3.00pm", name: "Champagne on the lawn", note: "Drinks, canapés and croquet" },
      { time: "5.00pm", name: "The wedding breakfast", note: "Three courses in the orangery" },
      { time: "7.30pm", name: "Speeches & cake", note: "Short ones, we promise" },
      { time: "8.30pm", name: "First dance", note: "Then the floor is yours" },
      { time: "12.00am", name: "Carriages", note: "Taxis pre-booked from the front gate" },
    ],
  },

  breather: {
    main: { src: "/img/beach.jpg", alt: "Margot and Henry by the sea" },
    inset: { src: "/img/hands.jpg", alt: "Two rings" },
    note: "see you there",
  },

  locations: {
    label: "Getting there",
    venue: "Ashfield House",
    address: "Ashfield Lane, Little Gaddesden, Hertfordshire HP4 1LT",
    intro:
      "The house sits at the end of a long beech drive, ten minutes from Berkhamsted and forty from central London. Come early if you like; the gardens are yours from one.",
    map: { label: "Open the map", href: "https://maps.google.com/?q=Ashridge+House" },
    columns: [
      {
        label: "By car",
        title: "Forty minutes from London",
        text: "Leave the M1 at junction 8 and follow the estate signs. Parking is free in the paddock beside the house, and cars may be left overnight.",
      },
      {
        label: "By train",
        title: "Berkhamsted station",
        // TODO: dato real (teléfono)
        text: "Thirty five minutes from Euston, then a ten minute taxi. We recommend booking ahead with Ashfield Cars on 01632 960 445.",
      },
      {
        label: "Where to stay",
        title: "Rooms nearby",
        text: "We have reserved rooms at The Gaddesden Arms, five minutes away. Mention our names for the wedding rate before the first of May.",
      },
    ],
  },

  dressCode: {
    label: "What to wear",
    title: "Garden party formal",
    paragraphs: [
      {
        bold: "Suits and summer dresses.",
        text: " Jackets encouraged for the ceremony, happily shed by the first dance.",
      },
      {
        text: "The ceremony and drinks are on grass, so consider your heels warned. Evenings at Ashfield run cool; bring a layer for the terrace.",
      },
      {
        text: "We would love you in soft colours. Please leave white to the bride and lycra to the honeymoon.",
      },
    ],
    image: { src: "/img/fashion.jpg", alt: "Dress code" },
  },

  faq: {
    label: "A few small things",
    title: "Questions, answered",
    items: [
      {
        question: "Can we bring the children?",
        answer:
          "We adore them, but this one is grown-ups only, with the exception of babes in arms. Consider it a night off.",
      },
      {
        question: "What about gifts?",
        answer:
          "Your company is honestly enough. If you would like to give something, a contribution to our honeymoon fund would be wonderful.",
      },
      {
        question: "Will there be photos?",
        answer:
          "A photographer will be with us all day. We would love the ceremony itself unplugged: phones away for twenty minutes, then snap freely.",
      },
      {
        question: "Confetti?",
        answer: "Yes please, dried petals only. We will have baskets of them ready outside the walled garden.",
      },
    ],
  },

  footer: {
    date: "The fourteenth of June, two thousand and twenty seven",
    first: "Margot",
    amp: "&",
    second: "Henry",
    credit: {
      template: "Forever Lite by ",
      author: { label: "Mike Smith Design", href: "https://github.com/mikesmithdesign" },
      middle: " — free template • Distributed by ",
      distributor: { label: "ThemeWagon", href: "https://themewagon.com" },
      upsell: {
        label: "Get the full theme with RSVP →",
        href: "https://mikesmithdesign.gumroad.com/l/forever-astro-theme",
      },
    },
  },
} as const;
