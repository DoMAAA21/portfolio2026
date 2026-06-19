export const contact = {
  github: "https://github.com/DoMAAA21",
  linkedin: "https://linkedin.com/in/jharold-cataluna",
  email: "mailto:business.jharoldcataluna@gmail.com",
  instagram: "https://www.instagram.com/jharoldgc/",
};

export const contactLinks = [
  {
    label: "GitHub",
    href: contact.github,
    description: "See my code and open-source projects",
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    description: "Connect for collaboration and opportunities",
  },
  {
    label: "Email",
    href: contact.email,
    description: "Reach out directly for inquiries or project ideas",
  },
  {
    label: "Instagram",
    href: contact.instagram,
    description: "Follow me on Instagram",
  },
] as const;
