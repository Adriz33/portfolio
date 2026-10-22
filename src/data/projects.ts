export interface Project {
  name: string;
  context: string;
  problem: string;
  role: string;
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    name: "Katan Studio",
    context: "Freelance · Colaboración",
    problem:
      "Un estudio de diseño y desarrollo web de Toledo necesitaba una web propia para presentar sus servicios.",
    role: "Proyecto realizado junto a un compañero, desde la planificación hasta el desarrollo final.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://katan.es/",
  },
  {
    name: "Lavandería Gómez",
    context: "Proyecto personal · Negocio",
    problem:
      "Una lavandería industrial que no tenía presencia online y los nuevos clientes no la encontraban.",
    role: "Una landing page diseñada con el fin de aportar una experiencia eficaz y sencilla para el usuario.",
    tech: ["Astro", "Tailwind", "JavaScript", "HTML", "CSS"],
    url: "https://lavanderia-gomez.vercel.app/",
  },
];
