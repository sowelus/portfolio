/**
 * ------------------------------------f--------------------------------------
 * MOCK DATA (Simulating /src/constants and /src/assets/mock.json)
 * --------------------------------------------------------------------------
 */

export const mockProjects = [
  {
    id: 1,
    title: "Insurance Portal",
    fullTitle: "Insurance Portal — Enterprise Platform",
    tags: "React, SCSS, Design System",
    image: "https://picsum.photos/id/1/900/600",
    role: "Front-End Developer",
    technologies: ["React", "SCSS", "Design System", "Jest"],
    description: {
      "pt-BR":
        "Portal de seguros corporativo com foco em performance e escalabilidade.",
      "en-US":
        "Enterprise insurance portal focused on performance and scalability.",
    },
    problem: {
      "pt-BR": "Alta latência em picos de acesso e inconsistência visual.",
      "en-US": "High latency during traffic peaks and visual inconsistency.",
    },
    impact: {
      "pt-BR": "Redução de 35% no tempo de carga e maior retenção.",
      "en-US": "35% load time reduction and improved retention.",
    },
    gallery: [
      "https://picsum.photos/id/1011/800/500",
      "https://picsum.photos/id/1012/800/500",
    ],
  },
  {
    id: 2,
    title: "Mobile App & Design System",
    fullTitle: "Lavore Mio — Mobile App & Design System",
    tags: "Figma, Tokens, Accessibility",
    image: "/src/assets/projects/lavore-mio.svg",
    role: "UI/UX Designer and Front-End Developer (No-Code)",
    projectStatus: "MVP",
    technologies: [
      "Bubble.io (No-Code)",
      "Design System (Figma)",
      "UI/UX Design",
      "Product Strategy",
    ],
    description: {
      "pt-BR":
        "Lavore Mio é uma plataforma de desenvolvimento profissional com feedback contínuo para preparação de entrevistas.",
      "en-US":
        "Lavore Mio is a professional development platform with continuous feedback to help interview preparation.",
    },
    problem: {
      "pt-BR": "Falta de feedback estruturado no processo seletivo.",
      "en-US": "Lack of structured feedback in the hiring process.",
    },
    impact: {
      "pt-BR": "MVP lançado com validação de usuários.",
      "en-US": "MVP launched and validated with users.",
    },
    gallery: [],
  },
  {
    id: 3,
    title: "Android App (Personal project)",
    fullTitle: "Seven Hangul — Android App",
    tags: "Angular",
    image: "/src/assets/projects/seven-hangul.svg",
    role: "Developer",
    technologies: ["Angular"],
    description: {
      "pt-BR": "Projeto pessoal em Android para aprendizado.",
      "en-US": "Personal Android project for learning.",
    },
    problem: {
      "pt-BR": "Aprendizado de novas tecnologias e padrões.",
      "en-US": "Learning new technologies and patterns.",
    },
    impact: {
      "pt-BR": "Prototipagem e melhoria de habilidades técnicas.",
      "en-US": "Prototyping and technical skills improvement.",
    },
    gallery: [],
  },
];
