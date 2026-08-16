export type Category = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string; // matches an icon key in CategoryIcon.astro
};

// Categories mirror the real Jasonic navigation/product range (Aggregates,
// Timber & Joinery, Concrete Products, Roofing, Insulation, Plaster, Doors,
// Bathrooms, Kitchens, Garden, DIY & Tools, Plumbing, UPVC).
export const categories: Category[] = [
  {
    slug: "timber-joinery",
    name: "Timber & Joinery",
    shortDescription: "Sheet materials, structural and non-structural timber, mouldings.",
    icon: "timber",
  },
  {
    slug: "aggregates",
    name: "Aggregates",
    shortDescription: "Sand, ballast, decorative stone and paving slabs.",
    icon: "aggregates",
  },
  {
    slug: "concrete-products",
    name: "Concrete Products",
    shortDescription: "Blocks, bricks, lintels and concrete building products.",
    icon: "concrete",
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription: "Roof tiles, trusses, felt and roofline accessories.",
    icon: "roofing",
  },
  {
    slug: "insulation",
    name: "Insulation",
    shortDescription: "Thermal and acoustic insulation for trade and public.",
    icon: "insulation",
  },
  {
    slug: "plaster",
    name: "Plaster",
    shortDescription: "Plasters, plasterboard and finishing products.",
    icon: "plaster",
  },
  {
    slug: "doors",
    name: "Doors",
    shortDescription: "Internal and external doors, frames and ironmongery.",
    icon: "doors",
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    shortDescription: "Suites, showers, tiling accessories and fittings.",
    icon: "bathrooms",
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    shortDescription: "Sinks, taps and kitchen fittings.",
    icon: "kitchens",
  },
  {
    slug: "garden-decking",
    name: "Garden & Decking",
    shortDescription: "Timber decking, fencing and outdoor living.",
    icon: "garden",
  },
  {
    slug: "diy-tools",
    name: "DIY & Tools",
    shortDescription: "Hand and power tools, fixings and site consumables.",
    icon: "tools",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDescription: "Pipework, fittings and heating essentials.",
    icon: "plumbing",
  },
  {
    slug: "upvc",
    name: "UPVC",
    shortDescription: "Windows, fascia, soffit and guttering.",
    icon: "upvc",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
