// EKAI Architecture — Master Projects Directory
// Curated with precision, architectural fact sheets, and high-fidelity photography

export const DISCIPLINES = [
  'All',
  'Architecture',
  'Interiors',
  'Miscellaneous',
  'Landscape',
  'Furniture'
];

export const TYPOLOGIES = [
  'All',
  'Homes',
  'Retail',
  'Hospitality',
  'Workplace',
  'Heritage'
];

export const PROJECTS = [
  // --- 7 REQUIRED RETAIL PROJECTS ---
  {
    id: 'sohni-sco-37',
    title: 'Sohni SCO 37',
    discipline: 'Architecture',
    typology: 'Retail',
    year: '2024',
    location: 'Sector 8-C, Chandigarh',
    area: '4,850 sq.ft',
    status: 'Completed',
    client: 'Sohni Luxury Apparels',
    materials: ['Wire-cut Brick', 'Lime Plaster', 'Blackened Steel', 'Terrazzo Plinths'],
    shortDesc: 'A monolithic retail pavilion sculpted in exposed aggregate lime plaster, wire-cut brick, and blackened stainless steel with double-height northern skylight.',
    fullDesc: 'Conceived as an introspective sanctuary amidst the bustling commercial boulevard of Chandigarh, Sohni SCO 37 reinterprets the Modernist arcade discipline through an artisanal lens. The facade presents a disciplined screen of deep brick reveals that temper harsh daylight while inviting gentle, indirect ambient luminescence into the interior volume. A central double-height void anchors the circulation, framed by hand-troweled lime wash surfaces and monolithic water-jet cut stone blocks functioning as display altars.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Axonometric Massing: Vertical light funnel intersecting staggered structural bays with 450mm thermal brick cavity walls.',
    featured: true,
    stripIndex: '01'
  },
  {
    id: 'sohni-sco-18',
    title: 'Sohni SCO 18',
    discipline: 'Interiors',
    typology: 'Retail',
    year: '2023',
    location: 'Sector 9-D, Chandigarh',
    area: '3,400 sq.ft',
    status: 'Completed',
    client: 'Sohni Couture',
    materials: ['Roman Travertine', 'Fluted Glass', 'Brushed Champagne Brass', 'Acoustic Wool'],
    shortDesc: 'Minimalist retail galleria exploring tactile travertine stone, fluted glass screens, and integrated brass shadow gaps.',
    fullDesc: 'Sohni SCO 18 focuses on the tactile experience of haute couture fabric through a restrained architectural envelope. Vein-cut Roman travertine clads the perimeter walls, interspersed with slender vertical brass shadow reveals that house hidden warm LED channels. The fitting suites are designed as acoustic chambers wrapped in natural raw wool felt, offering quiet reprieve and unhurried discernment.',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Plan Diagram: Linear procession through calibrated thresholds of compressed and expanded ceiling planes.',
    featured: true,
    stripIndex: '02'
  },
  {
    id: 'sohni-sco-19',
    title: 'Sohni SCO 19',
    discipline: 'Architecture',
    typology: 'Retail',
    year: '2023',
    location: 'Sector 9-D, Chandigarh',
    area: '3,920 sq.ft',
    status: 'Completed',
    client: 'Sohni Pret & Bridal',
    materials: ['Cast Concrete', 'Belgian Linen', 'Smoked White Oak', 'Raw Steel'],
    shortDesc: 'An unhurried sequence of vaulted stone chambers framing luxury artisanal garments, grounded in quiet earth tones.',
    fullDesc: 'Adjacent to SCO 18, SCO 19 establishes an architectural dialogue of mass and void. A sequence of three shallow barrel vaults constructed from micro-cement defines the ceiling topography. Natural daylight filters through north-facing clerestories, illuminating hanging garment rails fabricated from blackened solid round-bar steel anchored directly into the structural soffit.',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Tectonic Section: Triple barrel vaults casting soft shadows across low-iron glass vitrines.',
    featured: true,
    stripIndex: '03'
  },
  {
    id: 'rasa',
    title: 'Rasa',
    discipline: 'Architecture',
    typology: 'Retail',
    year: '2024',
    location: 'Mehrauli, New Delhi',
    area: '5,600 sq.ft',
    status: 'Completed',
    client: 'Rasa Design Collective',
    materials: ['Poured Terrazzo', 'Dholpur Sandstone', 'Oxidized Bronze', 'Reclaimed Teak'],
    shortDesc: 'Haute couture retail sanctuary balancing poured terrazzo floors with acoustic linen drapery and cantilevered bronze rails.',
    fullDesc: 'Set within the historic stone fabric of Mehrauli, Rasa engages in a delicate negotiation between Delhi’s architectural antiquity and contemporary restraint. Hand-carved Dholpur sandstone panels line the outer courtyard, leading into an expansive hall featuring a seamless light grey poured terrazzo floor embedded with river pebbles. Custom cantilevered bronze hanging fixtures seem to hover weightlessly against textured lime walls.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Courtyard Diagram: Peripheral stone colonnade flanking a central reflective water basin and retail rotunda.',
    featured: true,
    stripIndex: '04'
  },
  {
    id: 'jute-mill',
    title: 'Jute Mill',
    discipline: 'Architecture',
    typology: 'Retail',
    year: '2022',
    location: 'Howrah, Kolkata',
    area: '8,200 sq.ft',
    status: 'Completed',
    client: 'Bengal Heritage Revival Trust',
    materials: ['Salvaged Kiln Brick', 'Corten Steel', 'Reclaimed Sal Timber', 'Polished Concrete'],
    shortDesc: 'Adaptive reuse of a 19th-century industrial brick jute warehouse into an experimental retail and design experience centre.',
    fullDesc: 'Jute Mill honors the industrial heritage of the Hooghly River banks. The original load-bearing masonry arches and timber king-post trusses were painstakingly restored and stabilized using minimal seismic steel bracing. The retail experience unfolds like an architectural gallery, with sunken display pits and floating steel bridges that allow visitors to experience both the artifacts and the monumental historic shell.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Restoration Elevation: 1880s brick clerestory juxtaposed with 2022 steel insertion portal.',
    featured: true,
    stripIndex: '05'
  },
  {
    id: 'akriti-by-shakun',
    title: 'Akriti by Shakun',
    discipline: 'Interiors',
    typology: 'Retail',
    year: '2024',
    location: 'Sarabha Nagar, Ludhiana',
    area: '4,100 sq.ft',
    status: 'Completed',
    client: 'Akriti Jewels & Textiles',
    materials: ['Beige Jodhpur Stone', 'Translucent Alabaster', 'Woven Cane', 'Charcoal Oak'],
    shortDesc: 'A tactile jewelry and textile atelier featuring carved sandstone portals, soft diffused alabaster luminaires, and concealed joinery.',
    fullDesc: 'Designed to evoke the intimate atmosphere of a collector’s private salon, Akriti by Shakun is an exercise in warm materiality. Visitors pass through a thick portal of bush-hammered Jodhpur sandstone into an acoustic chamber where jewelry showcases are illuminated solely by custom alabaster diffusers calibrated to simulate natural morning light.',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Display Module Detail: 12mm shadow gap with concealed security locking and integrated fiber-optic luminaires.',
    featured: true,
    stripIndex: '06'
  },
  {
    id: 'akriti-ritika',
    title: 'Akriti Ritika',
    discipline: 'Architecture',
    typology: 'Retail',
    year: '2023',
    location: 'Defence Colony, New Delhi',
    area: '4,500 sq.ft',
    status: 'Completed',
    client: 'Ritika Pret Atelier',
    materials: ['Hand-troweled Lime Wash', 'Black Granite Monoliths', 'Muted Linen', 'Brushed Steel'],
    shortDesc: 'High-fashion bridal studio conceived as a quiet architectural courtyard, with hand-troweled lime wash and water-cut granite blocks.',
    fullDesc: 'Akriti Ritika rejects the sensory overload typical of bridal fashion environments. The design creates an austere, monastic envelope where textiles and silhouettes take center stage. Monolithic water-cut black granite blocks anchor the ground plane, contrasting with gossamer-thin linen partitions and warm raked plaster walls.',
    heroImage: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Spatial Matrix: Inward-facing courtyard typology screening out urban noise via double-glazed acoustic buffers.',
    featured: true,
    stripIndex: '07'
  },

  // --- HOMES ---
  {
    id: 'courtyard-house-alibaug',
    title: 'House in the Coconut Grove',
    discipline: 'Architecture',
    typology: 'Homes',
    year: '2024',
    location: 'Awas, Alibaug',
    area: '11,200 sq.ft',
    status: 'Completed',
    client: 'Private Residence',
    materials: ['Rammed Earth', 'Basalt Stone', 'Laterite Soil Plaster', 'Reclaimed Teak'],
    shortDesc: 'An earth-sheltered coastal villa organized around three interconnected reflecting courtyards and porous verandahs.',
    fullDesc: 'Drawing inspiration from tropical modernism and Geoffrey Bawa’s courtyard traditions, the residence blurs the boundary between interior shelter and monsoon landscape. Thick rammed earth walls cast with native clay provide deep thermal inertia against tropical heat, while overhanging timber eaves shade generous verandahs oriented to coastal evening breezes.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Microclimate Section: Passive stack ventilation induced by central lotus pond and high-level operable louvers.',
    featured: false,
    stripIndex: '08'
  },
  {
    id: 'pavilion-of-stillness',
    title: 'Pavilion of Stillness',
    discipline: 'Architecture',
    typology: 'Homes',
    year: '2023',
    location: 'Kasauli Hills, Himachal Pradesh',
    area: '6,800 sq.ft',
    status: 'Completed',
    client: 'Private Residence',
    materials: ['Field Stone', 'Charred Cedar (Shou Sugi Ban)', 'Glass Curtain', 'Cast Iron'],
    shortDesc: 'A cantilevered mountain home resting lightly on stone retaining terraces, gazing across pine valleys.',
    fullDesc: 'Perched on a 35-degree pine-covered ridge, Pavilion of Stillness negotiates extreme slope through a dry-stacked fieldstone podium. The living volume is enveloped in floor-to-ceiling structural glazing and charred cedar timber, allowing mist and shifting mountain light to constantly paint the interior planes.',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Structural Axo: 4-meter cantilevered steel frame anchored into bedrock via micropiles.',
    featured: false,
    stripIndex: '09'
  },
  {
    id: 'residence-104',
    title: 'Residence 104',
    discipline: 'Interiors',
    typology: 'Homes',
    year: '2024',
    location: 'Golf Links, New Delhi',
    area: '8,500 sq.ft',
    status: 'Completed',
    client: 'Private Residence',
    materials: ['Florentine Travertine', 'Cast Bronze', 'Smoked Eucalyptus', 'Natural Raw Linen'],
    shortDesc: 'Quiet luxury urban residence celebrating unhurried proportions, museum lighting, and custom millwork.',
    fullDesc: 'Every junction in Residence 104 was detailed to eliminate unnecessary ornament. Seamless slab travertine floors flow effortlessly into private garden loggias, while bespoke eucalyptus wood joinery conceals all service ducts, AV units, and thermal climate controls.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Millwork Detail: Seamless pocket door transitions with integrated floor guides.',
    featured: false,
    stripIndex: '10'
  },

  // --- HOSPITALITY ---
  {
    id: 'amaya-sanctuary',
    title: 'Amaya Sanctuary',
    discipline: 'Architecture',
    typology: 'Hospitality',
    year: '2023',
    location: 'Kasauli Forest, Himachal',
    area: '22,000 sq.ft',
    status: 'Completed',
    client: 'Amaya Hospitality',
    materials: ['Local Slate', 'Timber Formwork Concrete', 'Deodar Wood', 'Copper Flashing'],
    shortDesc: 'Eco-sensitive wellness retreats clustered along forested contour lines, rooted in Himalayan vernacular tectonics.',
    fullDesc: 'Built entirely without felling a single pine or deodar tree, Amaya Sanctuary comprises twelve private chalets stepped along natural Himalayan contour terraces. Rainwater harvested from copper gutter valleys replenishes geothermal storage reservoirs, achieving complete off-grid thermal equilibrium.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Contour Masterplan: 12 timber lodges interconnected via elevated boardwalks preserving root zones.',
    featured: false,
    stripIndex: '11'
  },
  {
    id: 'verandah-tea-lodge',
    title: 'Verandah Tea Estate Lodge',
    discipline: 'Landscape',
    typology: 'Hospitality',
    year: '2022',
    location: 'Glenburn, Darjeeling',
    area: '14,000 sq.ft',
    status: 'Completed',
    client: 'Glenburn Estates',
    materials: ['Fieldstone Masonry', 'Corrugated Weathering Steel', 'Pinewood', 'Glass'],
    shortDesc: 'A panoramic tea plantation lodge framing Kanchenjunga sunrises through wrap-around covered colonnades.',
    fullDesc: 'Deep 3-meter verandahs wrap the entire perimeter of this tea estate lodge, offering panoramic vistas while providing rain shelter during heavy monsoons. The materiality draws directly from regional tea factory traditions.',
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Verandah Overhang: 3000mm timber bracket detail resisting high Himalayan wind loads.',
    featured: false,
    stripIndex: '12'
  },

  // --- WORKPLACE ---
  {
    id: 'the-monolith-atelier',
    title: 'The Monolith Atelier',
    discipline: 'Architecture',
    typology: 'Workplace',
    year: '2024',
    location: 'Cyber City Fringe, Gurugram',
    area: '16,500 sq.ft',
    status: 'Completed',
    client: 'Stoa Ventures',
    materials: ['Board-formed Concrete', 'Perforated Aluminum Brise-Soleil', 'Acoustic Felt', 'Oak'],
    shortDesc: 'A sculptural corporate headquarters defined by board-formed concrete cores and triple-height green lightwells.',
    fullDesc: 'Rejecting generic glass curtain-wall office towers, The Monolith Atelier responds to Delhi-NCR’s intense solar exposure through deep thermal concrete mass and sculptural brise-soleil fins. Three internal landscaped atriums organize workflow around daylight and acoustic comfort.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Solar Shading Study: South-facing concrete fins angled at 27 degrees to eliminate direct glare.',
    featured: false,
    stripIndex: '13'
  },
  {
    id: 'studio-ekai-hq',
    title: 'EKAI Atelier & Archive',
    discipline: 'Interiors',
    typology: 'Workplace',
    year: '2023',
    location: 'Sector 8-C, Chandigarh',
    area: '4,200 sq.ft',
    status: 'Completed',
    client: 'EKAI Practice',
    materials: ['Raw Concrete', 'Wire-cut Brick', 'Steel Plate Shelving', 'Cotton Canvas Drapery'],
    shortDesc: 'The studio’s own working laboratory: a continuous 18-meter model-making bench and material archive.',
    fullDesc: 'EKAI’s own atelier serves as a testing ground for raw materiality and tectonic joints. An unpartitioned open workspace is anchored by an 18-meter-long cast concrete worktable where scale models, material swatches, and working drawings coexist.',
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Plan Ledger: Model laboratory, drawing archive, library, and contemplative garden verandah.',
    featured: false,
    stripIndex: '14'
  },

  // --- HERITAGE ---
  {
    id: 'haveli-shekhawati',
    title: 'Havelis of Mandawa Restoration',
    discipline: 'Heritage',
    typology: 'Heritage',
    year: '2022',
    location: 'Shekhawati, Rajasthan',
    area: '18,000 sq.ft',
    status: 'Completed',
    client: 'Shekhawati Heritage Trust',
    materials: ['Araish Lime Plaster', 'Natural Mineral Pigments', 'Carved Teak', 'Kandla Grey Stone'],
    shortDesc: 'Meticulous micro-conservation and adaptive stabilization of 18th-century frescoed merchant courtyards.',
    fullDesc: 'Working alongside generational Rajasthani craftsmen, EKAI restored the fragile vegetable and mineral pigment frescoes of this two-tier merchant haveli. Using traditional slaked lime (araish) polished with agate stones, moisture degradation was arrested while inserting discreet modern environmental controls.',
    heroImage: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Restoration Elevation: Micro-mortar stabilization and hidden structural ties across five courtyard bays.',
    featured: false,
    stripIndex: '15'
  },
  {
    id: 'old-mint-conservatory',
    title: 'The Old Mint Conservatory',
    discipline: 'Miscellaneous',
    typology: 'Heritage',
    year: '2023',
    location: 'Fort, Mumbai',
    area: '9,400 sq.ft',
    status: 'Completed',
    client: 'Mumbai Arts Foundation',
    materials: ['Cast Iron', 'Kurla Basalt', 'Low-Iron Glass', 'Oxidized Zinc'],
    shortDesc: 'A crystalline glass and cast-iron cultural gallery inserted within a Victorian neoclassical banking vault.',
    fullDesc: 'An architectural dialogue between 1870s stone vaulting and lightweight 21st-century glass engineering. The intervention touches the historic fabric at only four pinned points.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Reversible Tectonic Joint: Pin-supported glass diagrid with zero chemical anchors into historic basalt.',
    featured: false,
    stripIndex: '16'
  },

  // --- LANDSCAPE ---
  {
    id: 'terrace-of-reflection',
    title: 'Terrace of Reflection',
    discipline: 'Landscape',
    typology: 'Homes',
    year: '2024',
    location: 'Sadashivanagar, Bengaluru',
    area: '7,200 sq.ft',
    status: 'Completed',
    client: 'Private Commission',
    materials: ['Black Granite Water Mirror', 'Wild Native Grasses', 'Corten Planters', 'Basalt Pavers'],
    shortDesc: 'A contemplative rooftop garden with a 40mm deep water mirror reflecting monsoon clouds and Bangalore rain trees.',
    fullDesc: 'Conceived as an urban sanctuary, the terrace utilizes a wafer-thin skimming pool of water to visually expand sky horizons while dropping building envelope surface temperatures by up to 4 degrees Celsius.',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Water Circulation Plan: Overflow weir details and subterranean filtration chambers.',
    featured: false,
    stripIndex: '17'
  },

  // --- FURNITURE ---
  {
    id: 'series-01-monolith',
    title: 'Series 01: Monolith & Plinth',
    discipline: 'Furniture',
    typology: 'Retail',
    year: '2024',
    location: 'Limited Studio Edition',
    area: 'Bespoke Dimensions',
    status: 'Available to Commission',
    client: 'EKAI Object Editions',
    materials: ['Cast Concrete', 'Roman Travertine', 'Oxidized Gunmetal Bronze'],
    shortDesc: 'A numbered series of monolithic benches and display plinths sculpted from solid travertine and sand-cast bronze.',
    fullDesc: 'Born from off-cuts and architectural details developed for the Sohni retail commissions, Series 01 reduces the furniture piece to an elemental tectonic act: stone resting upon bronze shadow rails.',
    heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=85'
    ],
    axonometric: 'Exploded Joinery: Single mechanical pin interlocking 280kg stone block with cast bronze foot.',
    featured: false,
    stripIndex: '18'
  }
];

// Process Stages for Section E
export const PROCESS_STAGES = [
  {
    number: '01',
    title: 'Context & Site Study',
    duration: '04 — 08 Weeks',
    subtitle: 'Listening to soil, light, vernacular memory & climate',
    description: 'Every project originates not on paper, but on the earth of the site. We map micro-solar paths, wind vectors, seasonal water tables, local masonry traditions, and neighborhood histories. We do not impose form; we extract it from the inherent tensions and quietude of the place.',
    deliverables: ['Solar & Wind Microclimate Simulation', 'Geotechnical & Vernacular Survey', 'Tactile Material Sourcing Matrix', 'Contextual Photographic Ledger']
  },
  {
    number: '02',
    title: 'Spatial Concept & Massing',
    duration: '06 — 10 Weeks',
    subtitle: 'Sculpting voids, light apertures & unhurried volumes',
    description: 'We prioritize the void before the mass. Through physical basswood and cast plaster models, we study how daylight penetrates the interior core at solstices, how breezes circulate between courtyards, and how proportion evokes stillness and dignity.',
    deliverables: ['1:50 & 1:20 Physical Massing Models', 'Daylight Solstice Shadows Analysis', 'Circulation & Volumetric Porosity Diagrams', 'Spatial Manifesto & Concept Dossier']
  },
  {
    number: '03',
    title: 'Materiality & Detailing',
    duration: '08 — 12 Weeks',
    subtitle: 'Tectonic honesty, 1:1 joinery mockups & sensory tactile boards',
    description: 'Drawing inspiration from Sri Lankan tropical modernism and North Indian brick craft, we reject veneers and artificial coatings. We construct 1:1 physical mockups of junctions, shadow gaps, brass hardware, and lime-wash recipes to test weathering over decades.',
    deliverables: ['1:1 Physical Joinery & Shadow Gap Mockups', 'Slaked Lime & Stone Polish Formulations', 'Comprehensive Architectural Drawing Sets (BIM & CAD)', 'Lighting & Atmospheric Lux Specifications']
  },
  {
    number: '04',
    title: 'Tectonic Execution',
    duration: '12 — 24 Months',
    subtitle: 'Disciplined on-site atelier oversight with master craftsmen',
    description: 'Our architects do not remain behind desks. We embed ourselves on site during pourings of concrete, laying of brickwork, and carving of stone portals. We collaborate directly with hereditary master masons, carpenters, and metalsmiths to ensure structural truth in every millimeter.',
    deliverables: ['Bi-weekly Architectural Site Oversight', 'Structural Tolerance & Slump Audits', 'Craftsman Guild Coordination', 'Sample Approval Ledger & Milestone Log']
  },
  {
    number: '05',
    title: 'Handover & Curation',
    duration: '04 — 06 Weeks',
    subtitle: 'Atmospheric tuning, bespoke furniture placement & living archive',
    description: 'Architecture is complete only when inhabited by life, shadow, and silence. We curate the final tactile atmosphere—tuning luminaires, positioning bespoke furniture pieces, establishing landscape hydration rhythms, and delivering a bound linen architectural archive to the client.',
    deliverables: ['Archival Linen-Bound Project Monograph', 'Long-term Material Aging & Care Manual', 'Bespoke Object & Luminaire Calibration', 'Photographic Archival Documentation']
  }
];

// Studio Ethos & Principles
export const STUDIO_ETHOS = [
  {
    title: 'Tectonic Truth',
    desc: 'Structure is never concealed beneath veneers. Every column, beam, joint, and reveal declares its structural purpose with dignity.'
  },
  {
    title: 'Light as Material',
    desc: 'Light is not an afterthought; it is our primary building material. We sculpt mass to capture the quiet luminescence of dawn and dusk.'
  },
  {
    title: 'Contextual Permanence',
    desc: 'We build for generations, not seasons. Our buildings are designed to weather gracefully, acquiring character through monsoon and sun.'
  },
  {
    title: 'Poetic Negative Space',
    desc: 'Inspired by Kannangara and Vir.Mueller, what is left unbuilt is just as vital as the built form. Void is the vessel of human stillness.'
  }
];
