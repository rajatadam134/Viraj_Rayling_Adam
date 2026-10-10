export const siteConfig = {
  brandName: "Viraj Rayling Adam",
  brandSubtitle: "Weavers & Manufacturers of Premium Terry Towels",
  established: "Est. Heritage Quality",
  catalogEdition: "Vol. I — Curated Assortments",
  contact: {
    phone: "9326829031",
    phoneDisplay: "+91 93268 29031",
    whatsapp: "9326829031",
    whatsappClean: "919326829031",
    email: "info@virajraylingadam.com",
    location: "India",
  },
  tagline: "Uncompromising cotton comfort, jacquard precision, and radiant reactive-dyed colorways.",
  narrative: "Specializing in premium bath and leisure towels crafted for luxury, hospitality, and wholesale retail. Each series is manufactured in assorted vibrant palettes with intricate dobby and jacquard border details.",
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(message)}`;
};
