/* ============================================================
   PROJECT DATA — one object per project.
   Every field is optional except slug, client, cover, logo.
   Missing fields simply don't render, so a project can be
   tiny (lite) or rich (full case study) with the same template.

   Gallery item types:
     desktop – screen in a browser frame
     mobile  – phone frame (consecutive mobiles sit side by side)
     tall    – long page, scrolls inside a window
     board   – very wide image (process boards, flows), full width
     image   – plain image, full width
   ============================================================ */
window.PROJECTS = [
  {
    slug: "gatwick",
    client: "London Gatwick",
    title: "Clearer journeys for airport parking & checkout",
    tagline: "Focused component work that removes doubt at the moment customers are about to pay.",
    cover: "p_gatwick.jpg", logo: "logo_gatwick.png", tags: ["travel"],
    meta: { Role: "UX Design Lead", Industry: "Travel & Aviation", Platform: "Responsive web", Year: "2026" },
    challenge: "Parking and lounge bookings run through a dense checkout. Price changes, upgrades and vehicle rules can confuse customers right before payment.",
    approach: "A series of focused component projects inside the booking flow — each designed for desktop and mobile, documented in Figma and handed over with annotations.",
    outcome: "Clearer pricing and fewer dead-ends in checkout, with designs built to be A/B tested and measured.",
    highlights: [
      ["Payment Summary for upgrades", "Replaced a confusing price breakdown with Original booking → Updated booking → Amount due, including free-upgrade states."],
      ["Urgency timer", "A countdown component with initial, counting, near-expiry and expired states — designed for an A/B test against the current journey."],
      ["Robotic parking validation", "Clear, early messaging when a vehicle isn't suitable for robotic parking, right after the registration lookup."],
      ["Site-wide components", "Comparison tables, strip banners, lounge messaging and car hire modules."]
    ],
    gallery: []
  },
  {
    slug: "cricut",
    client: "Cricut",
    title: "Rewarding makers and helping them find their next project",
    tagline: "Loyalty, marketplace and mobile UX across the Cricut ecosystem.",
    cover: "p_cricut.jpg", logo: "logo_cricut.png", tags: ["ecom"],
    meta: { Role: "UX Design Lead", Industry: "E-commerce & Crafting", Platform: "Web · Mobile" },
    challenge: "Cricut spans machines, Design Space, a pattern marketplace and a loyalty programme — each with its own entry points and audiences.",
    approach: "Competitor reviews, heuristic audits and rapid prototypes across Rewards, Patterns and e-commerce pages.",
    outcome: "A clearer rewards dashboard and tested directions for discovery, upsells and community sharing.",
    highlights: [
      ["Rewards dashboard", "Points balance, dollars available now and a progress bar to the next reward — with an expandable activity log."],
      ["Patterns marketplace", "Competitor review, filtering & browsing, upsells and community sharing — plus a full UX audit of the listing page."],
      ["Mobile CX", "Review of the Design Space mobile setup journey, from download to first connected machine."]
    ],
    gallery: [
      { src: "pj/cr-1.jpg", type: "mobile" },
      { src: "pj/cr-2.jpg", type: "mobile" },
      { src: "pj/cr-3.jpg", type: "mobile" },
      { src: "pj/cr-4.jpg", type: "mobile", caption: "Design Space mobile setup journey — screens reviewed in the Mobile CX audit." }
    ]
  },
  {
    slug: "birkenstock",
    client: "Birkenstock",
    title: "One global experience for every regional store",
    tagline: "Leading the re-platforming and redesign of Birkenstock's online stores worldwide.",
    cover: "p_birkenstock.jpg", logo: "logo_birkenstock.png", tags: ["ecom", "fashion"],
    meta: { Role: "UX Team Lead", Industry: "Fashion & Footwear", Platform: "Salesforce Commerce Cloud", Scope: "All regional stores" },
    challenge: "Each regional store had its own UX, functionality and pain points. The brand needed one integrated approach that respected regional differences without diluting the brand.",
    approach: "A phased programme: UX maps and regional analysis, solution-modelling workshops in Munich with every regional team, then agile delivery of high-fidelity prototypes for all scenarios and viewports.",
    outcome: "A more intuitive store with stronger engagement and consistent branding across regions. Detailed results are under NDA.",
    stats: [["7", "regional teams aligned"], ["3", "project phases"], ["1", "unified platform"]],
    process: ["Data collection & analysis", "Solution modelling workshops", "Agile hi-fi prototyping", "Testing & iterations", "Implementation & launch"],
    gallery: [
      { src: "pj/bk-cover.jpg", type: "image" },
      { src: "pj/bk-process.jpg", type: "board", caption: "UX process board — roadmap, sprints and cross-department work distribution." },
      { src: "pj/bk-design.jpg", type: "tall", caption: "Design phase — user journeys, wireframes, mid-fi prototypes and iterations." },
      { src: "pj/bk-hifi.jpg", type: "image", caption: "Hi-fi prototyping, agile sprints and stakeholder reviews." },
      { src: "pj/bk-testing.jpg", type: "image", caption: "User testing — planning, sessions and analysis." }
    ]
  },
  {
    slug: "dsquared2",
    client: "DSQUARED2",
    title: "A competitive e-commerce platform for a global fashion house",
    cover: "p_dsq.jpg", logo: "logo_dsq.png", tags: ["fashion", "ecom"],
    meta: { Role: "UX Lead", Industry: "Luxury fashion" },
    challenge: "Build an e-commerce experience worthy of one of the world's best-known apparel brands.",
    approach: "Led a tight-knit UX team through research, prototyping and delivery."
  },
  {
    slug: "toms",
    client: "TOMS",
    title: "A complete rework of the online experience",
    cover: "p_toms.jpg", logo: "logo_toms.png", tags: ["fashion", "ecom"],
    meta: { Role: "UX Designer", Industry: "Fashion" },
    approach: "Took the existing solution through discovery, ideation, definition and enhancement phases.",
    process: ["Discovery", "Ideation", "Definition", "Enhancements"]
  },
  {
    slug: "steven-singer",
    client: "Steven Singer Jewelers",
    title: "A new checkout built on heuristic analysis",
    cover: "p_singer.jpg", logo: "logo_singer.png", tags: ["checkout", "ecom"],
    meta: { Role: "UX Designer", Industry: "Jewellery" },
    approach: "Ideated, planned and analysed a comprehensive new checkout flow based on a detailed heuristic analysis.",
    outcome: "Measurable profit improvement after launch."
  }
];
