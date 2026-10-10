export const siteConfig = {
  brandName: "Viraj Rayling Adam",
  brandSubtitle: "Filament and cotton terry towels",
  contact: {
    phone: "9326829031",
    phoneDisplay: "+91 93268 29031",
    whatsapp: "9326829031",
    whatsappClean: "919326829031",
  },
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(message)}`;
};
