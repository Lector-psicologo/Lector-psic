/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, SectorItem, VideoItem, TestimonialItem } from './types';

export const PSYCHOLOGIST_INFO = {
  name: "Miguel Angel Del Campo",
  title: "Psicólogo Colegiado & Psicoterapeuta",
  license: "C.Ps.P. 25871",
  degree: "Magíster por la UPC",
  approach: "Terapia Cognitivo-Conductual",
  clinicalExperience: "Más de 11 años de experiencia clínica y corporativa",
  teachingExperience: "Docente en liderazgo y desarrollo personal desde hace 4 años",
  phone: "+51 949958214",
  email: "miguelangel.delcampo@outlook.com",
  whatsappUrl: "https://wa.me/qr/7JKJKEUA4VIRO1",
  youtubeUrl: "https://www.youtube.com/@lectorpsicólogo",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590379689289",
  instagramUrl: "https://www.instagram.com/lectorpsicologo/",
  schedule: "Lunes a Domingo - 24/7 (Atención en Lima y Provincias)",
  youtubeChannelName: "Lector psicólogo",
  tagline: "Libros · Ciencia · Mente"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "psicoterapia-individual",
    title: "Psicoterapia Individual (TCC)",
    description: "Atención psicológica científica y personalizada para niños, adolescentes y adultos, enfocada en la superación de dificultades emocionales y conductuales.",
    details: [
      "Tratamiento eficaz de ansiedad, depresión, estrés y fobias.",
      "Terapia Cognitivo-Conductual (TCC) adaptada a cada etapa de vida.",
      "Acompañamiento en crisis existenciales, duelo y transiciones difíciles.",
      "Toma de decisiones guiada por objetivos terapéuticos claros."
    ],
    icon: "User",
    category: "individual",
    price: "Desde S/ 120.00 por sesión (Presencial, Virtual, a domicilio y en la playa)"
  },
  {
    id: "habilidades-sociales",
    title: "Entrenamiento en Habilidades Sociales y Blandas",
    description: "Programa práctico para potenciar la asertividad, la empatía, el manejo de la timidez y la comunicación asertiva en entornos sociales y académicos.",
    details: [
      "Desarrollo de liderazgo personal y autoestima.",
      "Herramientas contra el miedo al hablar en público o interactuar.",
      "Gestión constructiva de conflictos interpersonales.",
      "Técnicas de negociación, empatía y escucha activa."
    ],
    icon: "Users",
    category: "individual",
    price: "Desde S/ 120.00 por sesión"
  },
  {
    id: "evaluaciones-psicologicas",
    title: "Evaluaciones Psicológicas Organizacionales",
    description: "Evaluaciones rigurosas y diagnósticos psicológicos completos del talento humano para selección, línea de carrera y clima de trabajo.",
    details: [
      "Pruebas psicométricas y proyectivas de vanguardia.",
      "Identificación de perfiles de liderazgo, idoneidad y competencias.",
      "Informes ejecutivos listos para la toma de decisiones en RRHH.",
      "Evaluación del clima y cultura organizacional."
    ],
    icon: "FileCheck",
    category: "empresarial",
    price: "Desde S/ 10.00 por persona en evaluaciones masivas"
  },
  {
    id: "talleres-sbs",
    title: "Talleres y Programas en SBC (Seguridad basada en el comportamiento)",
    description: "Programas preventivos y capacitaciones alineadas a la SBC y salud mental en el trabajo para mitigar riesgos psicosociales.",
    details: [
      "Prevención y manejo del síndrome de Burnout (agotamiento).",
      "Talleres prácticos de ergonomía mental y pausas activas emocionales.",
      "Cumplimiento normativo y asesoría para comités de SST.",
      "Diagnóstico y control de factores estresores de la organización."
    ],
    icon: "ShieldAlert",
    category: "empresarial",
    price: "Desde S/ 10.00 por persona (Evaluaciones masivas) o S/ 250.00 por hora (Talleres)"
  },
  {
    id: "capacitaciones-hostigamiento",
    title: "Capacitaciones en Prevención del Hostigamiento Sexual",
    description: "Capacitaciones obligatorias por ley, dictadas con un enfoque humano, preventivo, ético y legal para consolidar un ambiente de trabajo libre de acoso.",
    details: [
      "Sensibilización a directivos, comités y colaboradores de la empresa.",
      "Definiciones legales, canales de denuncia y protocolos de actuación.",
      "Talleres de concientización y fomento de conductas respetuosas.",
      "Certificado oficial de cumplimiento de capacitación laboral."
    ],
    icon: "HeartOff",
    category: "empresarial",
    price: "Desde S/ 250.00 por hora de ponencia"
  },
  {
    id: "talleres-blandas-corporativo",
    title: "Talleres de Habilidades Blandas para Empresas",
    description: "Dinámicas grupales de alto rendimiento para mejorar la sinergia del equipo, liderazgo directivo, resolución de problemas y adaptabilidad.",
    details: [
      "Desarrollo de liderazgo ágil, comunicación corporativa y empatía.",
      "Trabajo colaborativo y técnicas de alto rendimiento bajo presión.",
      "Gestión del cambio organizativo y adaptabilidad rápida.",
      "Fomento de la motivación intrínseca en equipos multidisciplinarios."
    ],
    icon: "Briefcase",
    category: "empresarial",
    price: "Desde S/ 250.00 por hora de capacitación"
  },
  {
    id: "psicologia-coaching-empleados",
    title: "Sesiones de Psicología y Coaching para Colaboradores",
    description: "Programa de soporte emocional corporativo para mantener el equilibrio entre vida laboral y familiar, optimizando la concentración y el bienestar.",
    details: [
      "Acompañamiento individual confidencial en horario flexible.",
      "Técnicas avanzadas de coaching de vida y coaching ejecutivo.",
      "Soporte inmediato ante situaciones de crisis personales o de equipo.",
      "Desarrollo de la resiliencia personal y enfoque en metas profesionales."
    ],
    icon: "Activity",
    category: "empresarial",
    price: "Desde S/ 120.00 por sesión personalizada"
  }
];

export const SECTORS_DATA: SectorItem[] = [
  { id: "mineria", name: "Minería", icon: "HardHat" },
  { id: "finanzas", name: "Finanzas y Banca", icon: "Coins" },
  { id: "consultoria", name: "Consultorías de Negocios", icon: "Lightbulb" },
  { id: "retail", name: "Consumo Masivo y Retail", icon: "ShoppingBag" },
  { id: "educacion", name: "Instituciones Educativas", icon: "GraduationCap" }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "video-1",
    title: "¿Qué hace que una persona tenga doble vida?",
    description: "Una explicación sobre por qué algunas personas son infieles and qué herramientas prácticas de la TCC podemos usar.",
    youtubeId: "W7oH7_U0H0w", // Mock/Placeholder YouTube IDs
    thumbnailUrl: "https://scontent.flim38-1.fna.fbcdn.net/v/t39.30808-1/715512016_122099220243353572_98516494649347457_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=c2CtZhVRjSYQ7kNvwFCsMWx&_nc_oc=AdrXdMpkjH4BSfapErooy_E7t0DITkLHhfdbxDgmc7NLpriaR47pSNtmCUyPfVNGlUo&_nc_zt=24&_nc_ht=scontent.flim38-1.fna&_nc_gid=LJ7vx-WidRHygvVgVJHqIQ&_nc_ss=7c2a8&oh=00_AQA9zn3nQ0M5Br_HZVkSPvbt9iLtH7Ci1NWt-bJNijirAw&oe=6A48F917",
    href: "https://www.facebook.com/reel/24640220422288219"
  },
  {
    id: "video-2",
    title: "Autismo Comprendiendo el TEA",
    description: "Reflexiones basadas en la experiencia como conductor del programa de cable 'Latidos azules' para concientizar sobre el autismo y derribar mitos.",
    youtubeId: "vA_S_FIsFaw",
    thumbnailUrl: "https://scontent.flim38-1.fna.fbcdn.net/v/t39.30808-1/715512016_122099220243353572_98516494649347457_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=c2CtZhVRjSYQ7kNvwFCsMWx&_nc_oc=AdrXdMpkjH4BSfapErooy_E7t0DITkLHhfdbxDgmc7NLpriaR47pSNtmCUyPfVNGlUo&_nc_zt=24&_nc_ht=scontent.flim38-1.fna&_nc_gid=LJ7vx-WidRHygvVgVJHqIQ&_nc_ss=7c2a8&oh=00_AQA9zn3nQ0M5Br_HZVkSPvbt9iLtH7Ci1NWt-bJNijirAw&oe=6A48F917",
    href: "https://www.youtube.com/@LatidosAzules"
  },
  {
    id: "video-3",
    title: "¿Cómo afrontar a un hijo rebelde?",
    description: "Lecciones sobre crianza e inteligencia emocional.",
    youtubeId: "Z5h5pB-x_lI",
    thumbnailUrl: "https://scontent.flim38-1.fna.fbcdn.net/v/t39.30808-1/715512016_122099220243353572_98516494649347457_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=c2CtZhVRjSYQ7kNvwFCsMWx&_nc_oc=AdrXdMpkjH4BSfapErooy_E7t0DITkLHhfdbxDgmc7NLpriaR47pSNtmCUyPfVNGlUo&_nc_zt=24&_nc_ht=scontent.flim38-1.fna&_nc_gid=LJ7vx-WidRHygvVgVJHqIQ&_nc_ss=7c2a8&oh=00_AQA9zn3nQ0M5Br_HZVkSPvbt9iLtH7Ci1NWt-bJNijirAw&oe=6A48F917",
    href: "https://www.facebook.com/reel/1836196306837207"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    quote: "La consultoría del psicólogo Miguel Angel nos permitió estructurar un plan preventivo de hostigamiento laboral excelente. Su dominio docente en habilidades blandas conectó de inmediato con nuestro personal.",
    author: "Gerente de Recursos Humanos",
    role: "Empresa Financiera Líder en Perú"
  },
  {
    id: "t-2",
    quote: "Gracias a la terapia cognitivo-conductual con Miguel, logré superar un cuadro de ansiedad severa que afectaba mi rendimiento laboral y familiar. Es un profesional íntegro, científico y muy humano.",
    author: "Ing. A.R.L",
    role: "Paciente de Terapia de Adultos (Lima)"
  },
  {
    id: "t-3",
    quote: "El taller de habilidades sociales para adolescentes ayudó muchísimo a mi hijo a ganar confianza, expresarse asertivamente y mejorar su liderazgo escolar. Muy recomendado.",
    author: "E.S.D",
    role: "Madre de familia (Acompañamiento a Menores)"
  }
];
