// An array of links for navigation bar (only what converts dentists)
const navBarLinks = [
  { name: "How It Works", url: "/#how-it-works" },
  { name: "Results", url: "/#results" },
  { name: "Pricing", url: "/#pricing" },
]

// An array of links for footer (clean & focused)
const footerLinks = [
  {
    section: "For Dentists",
    links: [
      { name: "Get More Patients", url: "/#how-it-works" },
      { name: "Free Audit", url: "/#audit-form" },
      { name: "Success Stories", url: "/#results" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
]

// An object of links for social icons (keep only professional networks)
const socialLinks = {
  linkedin: "https://www.linkedin.com/company/patientflow",
  twitter: "https://twitter.com/patientflow",
  instagram: "https://instagram.com/patientflow",
  // Removed: facebook, google, slack, github (not relevant for dental B2B)
}

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
}
