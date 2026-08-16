export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  priceUnit: string; // e.g. "per sheet", "per pack"
  vatNote: string; // "+ vat" or "inc. vat"
  sku: string;
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
  callForPrice?: boolean;
};

// A representative spread of the Jasonic product range. The first four
// items (Pine Ply sheets, Raveena sandstone slabs) use the real names and
// prices published on jasonic.co.uk; the rest are realistic, industry-
// standard builders' merchant lines used to fill out the catalogue for
// this prototype and should be swapped for Jasonic's actual current
// stock list before go-live.
export const products: Product[] = [
  {
    slug: "pine-ply-9mm-non-structural",
    name: "2440 x 1220 x 9mm Pine Ply (Non-Structural)",
    categorySlug: "timber-joinery",
    price: 14.99,
    priceUnit: "per sheet",
    vatNote: "+ vat",
    sku: "TJ-PLY-09",
    description:
      "General-purpose non-structural pine plywood sheet, suitable for internal lining, cladding and light joinery work.",
    specs: [
      { label: "Size", value: "2440 x 1220mm" },
      { label: "Thickness", value: "9mm" },
      { label: "Grade", value: "Non-structural" },
    ],
    featured: true,
  },
  {
    slug: "pine-ply-12mm-non-structural",
    name: "2440 x 1220 x 12mm Pine Ply (Non-Structural)",
    categorySlug: "timber-joinery",
    price: 15.99,
    priceUnit: "per sheet",
    vatNote: "+ vat",
    sku: "TJ-PLY-12",
    description:
      "General-purpose non-structural pine plywood sheet, a step up in rigidity from the 9mm sheet for flooring underlay and cladding.",
    specs: [
      { label: "Size", value: "2440 x 1220mm" },
      { label: "Thickness", value: "12mm" },
      { label: "Grade", value: "Non-structural" },
    ],
    featured: true,
  },
  {
    slug: "pine-ply-18mm-non-structural",
    name: "2440 x 1220 x 18mm Pine Ply (Non-Structural)",
    categorySlug: "timber-joinery",
    price: 20.99,
    priceUnit: "per sheet",
    vatNote: "+ vat",
    sku: "TJ-PLY-18",
    description:
      "Heavier-duty non-structural pine plywood sheet for shelving, worktops and load-bearing internal joinery.",
    specs: [
      { label: "Size", value: "2440 x 1220mm" },
      { label: "Thickness", value: "18mm" },
      { label: "Grade", value: "Non-structural" },
    ],
    featured: true,
  },
  {
    slug: "raveena-sandstone-slabs",
    name: "Calibrated Raveena Sandstone Slabs",
    categorySlug: "aggregates",
    price: 309.0,
    priceUnit: "per pack (15.25m²)",
    vatNote: "+ vat",
    sku: "AG-SST-RVN",
    description:
      "Calibrated Indian sandstone paving, ideal for patios, paths and driveways. Consistent thickness for a simpler lay.",
    specs: [
      { label: "Coverage", value: "15.25m² per pack" },
      { label: "Finish", value: "Riven, calibrated" },
      { label: "Use", value: "Patio & pathway paving" },
    ],
    featured: true,
  },
  {
    slug: "building-sand-bulk-bag",
    name: "Building Sand — Bulk Bag",
    categorySlug: "aggregates",
    price: 68.5,
    priceUnit: "per bulk bag",
    vatNote: "+ vat",
    sku: "AG-SND-BLD",
    description: "Soft building sand for mortar mixes and general bricklaying, supplied in a bulk (jumbo) bag.",
    specs: [
      { label: "Volume", value: "~0.85m³ bulk bag" },
      { label: "Use", value: "Mortar & general building" },
    ],
  },
  {
    slug: "ballast-bulk-bag",
    name: "Ballast — Bulk Bag",
    categorySlug: "aggregates",
    price: 71.0,
    priceUnit: "per bulk bag",
    vatNote: "+ vat",
    sku: "AG-BAL-BLD",
    description: "Ready-mixed sand and gravel ballast for general concrete mixes and foundations.",
    specs: [
      { label: "Volume", value: "~0.85m³ bulk bag" },
      { label: "Use", value: "Concrete & foundations" },
    ],
  },
  {
    slug: "dense-concrete-block-100mm",
    name: "Dense Concrete Block 100mm",
    categorySlug: "concrete-products",
    price: 1.85,
    priceUnit: "per block",
    vatNote: "+ vat",
    sku: "CP-BLK-100",
    description: "Standard dense concrete building block for internal and external walling.",
    specs: [
      { label: "Size", value: "440 x 215 x 100mm" },
      { label: "Strength", value: "7.3N" },
    ],
  },
  {
    slug: "facing-bricks-mixed-red",
    name: "Facing Bricks — Mixed Red",
    categorySlug: "concrete-products",
    price: 0.62,
    priceUnit: "per brick",
    vatNote: "+ vat",
    sku: "CP-BRK-RED",
    description: "Traditional mixed red facing bricks for external walls, extensions and repairs.",
    specs: [
      { label: "Size", value: "215 x 102.5 x 65mm" },
      { label: "Colour", value: "Mixed red" },
    ],
  },
  {
    slug: "concrete-roof-tile",
    name: "Concrete Interlocking Roof Tile",
    categorySlug: "roofing",
    price: 1.35,
    priceUnit: "per tile",
    vatNote: "+ vat",
    sku: "RF-TILE-CON",
    description: "Durable interlocking concrete roof tile suitable for new-build and re-roofing projects.",
    specs: [
      { label: "Coverage", value: "~10 tiles per m²" },
      { label: "Colour", value: "Weathered slate grey" },
    ],
  },
  {
    slug: "roof-truss-bespoke",
    name: "Roof Truss (Made to Order)",
    categorySlug: "roofing",
    price: 0,
    priceUnit: "",
    vatNote: "",
    sku: "RF-TRS-BESP",
    description:
      "Engineered roof trusses manufactured to your project's specification. Bring us your drawings or building control specification for a quote.",
    specs: [
      { label: "Lead time", value: "Typically 1–2 weeks" },
      { label: "Spec", value: "Made to order" },
    ],
    callForPrice: true,
  },
  {
    slug: "loft-insulation-roll-170mm",
    name: "Loft Insulation Roll 170mm",
    categorySlug: "insulation",
    price: 24.5,
    priceUnit: "per roll",
    vatNote: "+ vat",
    sku: "IN-LFT-170",
    description: "Glass mineral wool loft insulation roll for thermal performance in roof spaces.",
    specs: [
      { label: "Thickness", value: "170mm" },
      { label: "Coverage", value: "~5.5m² per roll" },
    ],
  },
  {
    slug: "acoustic-insulation-slab",
    name: "Acoustic Insulation Slab",
    categorySlug: "insulation",
    price: 29.0,
    priceUnit: "per pack",
    vatNote: "+ vat",
    sku: "IN-ACU-SLB",
    description: "Sound-absorbing partition slab for internal stud walls, reducing noise transfer between rooms.",
    specs: [
      { label: "Thickness", value: "100mm" },
      { label: "Use", value: "Internal partitions" },
    ],
  },
  {
    slug: "thistle-multi-finish-25kg",
    name: "Thistle Multi-Finish Plaster 25kg",
    categorySlug: "plaster",
    price: 9.75,
    priceUnit: "per bag",
    vatNote: "+ vat",
    sku: "PL-THI-MF25",
    description: "The trade-standard finishing plaster for a smooth final coat on plasterboard and most backgrounds.",
    specs: [
      { label: "Weight", value: "25kg bag" },
      { label: "Use", value: "Finish coat" },
    ],
  },
  {
    slug: "internal-oak-veneer-door",
    name: "Internal Oak Veneer Door",
    categorySlug: "doors",
    price: 68.0,
    priceUnit: "per door",
    vatNote: "+ vat",
    sku: "DR-INT-OAK",
    description: "Pre-finished oak veneer internal door, available in a range of standard sizes.",
    specs: [
      { label: "Size", value: "1981 x 762 x 35mm" },
      { label: "Finish", value: "Oak veneer" },
    ],
  },
  {
    slug: "external-composite-door",
    name: "External Composite Door",
    categorySlug: "doors",
    price: 0,
    priceUnit: "",
    vatNote: "",
    sku: "DR-EXT-COMP",
    description: "Made-to-measure composite external door in a range of styles and colours — call for a quote.",
    specs: [
      { label: "Options", value: "Colours, glazing & furniture" },
      { label: "Lead time", value: "Typically 2–3 weeks" },
    ],
    callForPrice: true,
  },
  {
    slug: "bathroom-suite-3pc",
    name: "3-Piece Bathroom Suite",
    categorySlug: "bathrooms",
    price: 349.0,
    priceUnit: "per suite",
    vatNote: "+ vat",
    sku: "BA-STE-3PC",
    description: "Close-coupled WC, pedestal basin and bath — a straightforward, good-value bathroom suite.",
    specs: [
      { label: "Includes", value: "WC, basin, bath" },
      { label: "Bath size", value: "1700 x 700mm" },
    ],
  },
  {
    slug: "kitchen-sink-tap-set",
    name: "Stainless Kitchen Sink & Tap Set",
    categorySlug: "kitchens",
    price: 89.0,
    priceUnit: "per set",
    vatNote: "+ vat",
    sku: "KT-SNK-SS1",
    description: "1.5 bowl stainless steel kitchen sink with a matching mixer tap.",
    specs: [
      { label: "Bowl", value: "1.5 bowl, reversible" },
      { label: "Includes", value: "Mixer tap" },
    ],
  },
  {
    slug: "timber-decking-board-3.6m",
    name: "Timber Decking Board 3.6m",
    categorySlug: "garden-decking",
    price: 12.4,
    priceUnit: "per board",
    vatNote: "+ vat",
    sku: "GD-DCK-36",
    description: "Pressure-treated timber decking board, grooved for grip, for outdoor decking projects.",
    specs: [
      { label: "Length", value: "3.6m" },
      { label: "Section", value: "125 x 28mm" },
    ],
  },
  {
    slug: "cordless-combi-drill",
    name: "18V Cordless Combi Drill",
    categorySlug: "diy-tools",
    price: 89.99,
    priceUnit: "each",
    vatNote: "+ vat",
    sku: "DT-DRL-18V",
    description: "18V cordless combi drill with two batteries, charger and case — a solid site or DIY workhorse.",
    specs: [
      { label: "Voltage", value: "18V" },
      { label: "Includes", value: "2 batteries, charger, case" },
    ],
  },
  {
    slug: "copper-pipe-15mm",
    name: "Copper Pipe 15mm x 3m",
    categorySlug: "plumbing",
    price: 9.2,
    priceUnit: "per length",
    vatNote: "+ vat",
    sku: "PB-CU-15",
    description: "Standard 15mm copper pipe for domestic plumbing and heating installations.",
    specs: [
      { label: "Diameter", value: "15mm" },
      { label: "Length", value: "3m" },
    ],
  },
  {
    slug: "upvc-window-made-to-measure",
    name: "UPVC Window (Made to Measure)",
    categorySlug: "upvc",
    price: 0,
    priceUnit: "",
    vatNote: "",
    sku: "UP-WIN-MTM",
    description: "Energy-efficient UPVC windows made to your exact opening size — call in with your measurements.",
    specs: [
      { label: "Options", value: "Colours & glazing" },
      { label: "Lead time", value: "Typically 2–3 weeks" },
    ],
    callForPrice: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
