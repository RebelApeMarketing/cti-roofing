// src/config/branding.ts
// Centralized configuration for quick updates across the entire site

export const BRANDING = {
  // Company Information
  companyName: "CTI Roofing",
  phone: "(801) 316-8799",
  email: "info@ctiroofing.com",
  address: "450 S 400 E, Suite #701",
  city: "Bountiful",
  state: "UT",
  zip: "84010",
  site: "inspect.ctiroofing.com",
  
  // Colors
  colors: {
    primary: "#76ba41",      // CTI Green
    primaryDark: "#5fa033",  // CTI Green Dark (hover state)
    primaryLight: "#76ba41", // CTI Green Light (accent)
    secondary: "#1d3466",    // CTI Blue
    text: "#1f2937",         // Dark Gray
    textLight: "#6b7280",    // Light Gray
    border: "#e5e7eb",       // Light Border
    background: "#f9fafb",   // Light Background
  },
  
  // Social Media Links
  socials: {
    facebook: "https://facebook.com/ctiroofing",
    instagram: "https://instagram.com/ctiroofing",
    linkedin: "https://linkedin.com/company/ctiroofing",
  },
  
  // Hours of Operation
  hours: {
    weekday: "Mon–Fri 8am–7pm",
    saturday: "Sat 9am–12pm",
    emergency: "24/7 Emergencies",
  },
  
  // Business Info
  businessInfo: {
    established: "2003",
    roofReplaced: "1,000+",
    rating: "4.9★",
    guarantee: "5-Year Workmanship Guarantee",
    accreditation: "BBB-Accredited",
  },
  
  // Form & CTA Links
  forms: {
    inspectionForm: "https://api.leadconnectorhq.com/widget/form/GfiVsSSUgAOa0vHc2xHQ",
  },
  
  // Service Areas
  serviceAreas: "Salt Lake City, Bountiful, Davis County, Ogden, Logan, Tooele",
}

// Helper to convert phone to tel: format
export function phoneToTel(phone: string): string {
  return "tel:" + phone.replace(/[^\d+]/g, "")
}

// Helper to get full address
export function getFullAddress(): string {
  return `${BRANDING.address}, ${BRANDING.city}, ${BRANDING.state} ${BRANDING.zip}`
}

// Helper for RGB conversion if needed for opacity
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return "0, 0, 0"
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}