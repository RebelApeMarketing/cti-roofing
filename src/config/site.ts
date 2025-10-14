// src/config/site.ts
export type Socials = {
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
  twitter?: string
}

export type SiteConfig = {
  companyName: string
  phone: string            // display phone number
  phoneHref?: string       // tel: formatted (optional; will be derived if missing)
  email?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  hours?: string
  socials?: Socials
  primaryColor?: string    // for quick theming later
  accentColor?: string
  logo?: string
  site?: string
}

const raw: SiteConfig = {
  companyName: "Client Company Name",
  logo: "/images/rebel-ape-marketing-logo.png",
  site: "url-example.com",
  phone: "(801) 555-1212",
  email: "hello@example.com",
  address: "123 Main St",
  city: "Ogden",
  state: "UT",
  zip: "84401",
  hours: "Mon–Fri 8am–6pm",
  socials: {
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    linkedin: "https://linkedin.com/company/example"
  },
  primaryColor: "#0b5fff",
  accentColor: "#00c389"
}

// helper to normalize phone for tel: links
function toTelHref(display: string): string {
  return "tel:" + display.replace(/[^\d+]/g, "")
}

export const site: SiteConfig = {
  ...raw,
  phoneHref: raw.phoneHref ?? toTelHref(raw.phone)
}