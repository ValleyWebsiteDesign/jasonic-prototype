// Groups the 13 real product departments into a handful of nav-friendly
// buckets — mirrors how builders-merchant sites (e.g. the Wern Wood
// reference) present a short category row instead of 13 flat links.
// Each group can map to more than one underlying category slug; the shop
// page accepts a comma-separated ?category= list to filter by a whole group.
export type NavGroup = {
  slug: string;
  label: string;
  categorySlugs: string[];
};

export const navGroups: NavGroup[] = [
  {
    slug: "timber-joinery",
    label: "Timber & Joinery",
    categorySlugs: ["timber-joinery"],
  },
  {
    slug: "aggregates-concrete",
    label: "Aggregates & Concrete",
    categorySlugs: ["aggregates", "concrete-products"],
  },
  {
    slug: "roofing-insulation",
    label: "Roofing & Insulation",
    categorySlugs: ["roofing", "insulation"],
  },
  {
    slug: "plaster-plumbing",
    label: "Plaster & Plumbing",
    categorySlugs: ["plaster", "plumbing"],
  },
  {
    slug: "doors-bathrooms-kitchens",
    label: "Doors, Bathrooms & Kitchens",
    categorySlugs: ["doors", "bathrooms", "kitchens"],
  },
  {
    slug: "garden-upvc",
    label: "Garden & UPVC",
    categorySlugs: ["garden-decking", "upvc"],
  },
  {
    slug: "diy-tools",
    label: "DIY & Tools",
    categorySlugs: ["diy-tools"],
  },
];
