// Central place for real Jasonic business facts (name, branches, contact
// details, categories) pulled from the live jasonic.co.uk site. Keeping
// this in one file makes it obvious what's real vs. placeholder when this
// gets handed over, and easy to update later.

export const site = {
  name: "Jasonic",
  legalName: "Jasonic Ltd",
  foundedYear: 1988,
  tagline: "Builders merchants for Cardiff, Merthyr Tydfil, Taffs Well and South & Mid Wales",
  strapline:
    "Independent, family-run builders merchants supplying trade and DIY customers across South & Mid Wales since 1988.",
  vatNumber: "484 2706 32",
  companyRegNumber: "2216515",
  email: "info@jasonic.co.uk",
} as const;

export type Branch = {
  slug: string;
  name: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  isHeadOffice?: boolean;
};

export const branches: Branch[] = [
  {
    slug: "merthyr-tydfil",
    name: "Merthyr Tydfil",
    addressLines: ["Units 8 & 9 Merthyr Industrial Estate", "Dowlais", "Merthyr Tydfil", "CF48 2TD"],
    phone: "01685 723344",
    phoneHref: "tel:01685723344",
    isHeadOffice: true,
  },
  {
    slug: "taffs-well",
    name: "Taffs Well",
    addressLines: ["Taffs Well", "South Wales"],
    phone: "02920 820999",
    phoneHref: "tel:02920820999",
  },
];

export const valueProps = [
  {
    title: "Free advice",
    description: "Our branch teams know the trade — call in or phone for guidance before you order.",
  },
  {
    title: "Fast delivery",
    description: "Free local delivery on orders over £150 + VAT, with next-day options across the region.",
  },
  {
    title: "Friendly, efficient staff",
    description: "The same family-run service we've offered South & Mid Wales since 1988.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
