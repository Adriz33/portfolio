import katan from "../assets/proyectos/katan.png";
import lavanderia from "../assets/proyectos/lavanderia.png";

export interface Project {
  name: string;
  context: string;
  problem: string;
  role: string;
  tech: string[];
  url: string;
  image: ImageMetadata;
}

export const projects: Project[] = [
  {
    name: "Katan Studio",
    context: "Freelance · Colaboración",
    problem:
      "Estudio de diseño y desarrollo web sin web propia para presentar sus servicios.",
    role: "Participación colaborativa: planificación, diseño de la interfaz y desarrollo en React.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://katan.es/",
    image: katan,
  },
  {
    name: "Lavandería Gómez",
    context: "Proyecto personal · Negocio",
    problem: "Lavandería industrial sin presencia online.",
    role: "Diseñé y desarrollé la web completa: servicios, horario, ubicación y contacto directo por WhatsApp, teléfono y email.",
    tech: ["Astro", "Tailwind", "JavaScript", "HTML", "CSS"],
    url: "https://lavanderia-gomez.vercel.app/",
    image: lavanderia,
  },
];
