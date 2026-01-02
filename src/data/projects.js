export const PROJECTS_DATA = [
  {
    id: 1,
    title: "CI&T",
    description: "Portal de seguros desenvolvido com React e SCSS para cliente do setor de seguros com mais de 500k acessos diários. Focado em performance e experiência do usuário.",
    tags: "React, SCSS, Design System",
    image: "https://picsum.photos/id/1/366/400",
    liveUrl: "https://example.com/insurance-portal",
    githubUrl: "https://github.com/example/insurance-portal",
    featured: true,
    keyTechnologies: [
      "React 18",
      "SCSS/SASS",
      "Design System",
      "TypeScript",
      "Jest & Testing Library",
      "Webpack",
      "REST APIs"
    ],
    problemSolved: {
      main: "Necessidade de modernizar um sistema legado de seguros com baixa performance e UX inadequada.",
      secondary: "Interface desatualizada causava alta taxa de abandono e dificultava a conversão de leads."
    },
    goals: [
      "Melhorar a performance do sistema em 60%",
      "Reduzir a taxa de abandono em 40%",
      "Implementar design responsivo e acessível",
      "Criar componentes reutilizáveis para futuras expansões"
    ],
    metrics: {
      launchTime: "6 meses",
      usersDaily: "500k+",
      performanceImprovement: "60%",
      bounceRateReduction: "40%"
    },
    styleGuide: "Desenvolvimento baseado em Design System próprio da empresa, garantindo consistência visual e funcional em toda a plataforma.",
    userInterfaceFocus: "Interface focada na simplicidade e clareza, priorizando a jornada do usuário e reduzindo fricções no processo de cotação."
  },
  {
    id: 2,
    title: "Lavore Mio - Professional Development Platform",
    description: "Plataforma gratuita de desenvolvimento profissional que oferece ferramentas para criação de currículos, planejamento de carreira e sistema de feedback contínuo para preparação em entrevistas.",
    tags: "Figma, Tokens, Accessibility, No-Code",
    image: "./src/assets/projects/lavore-mio.svg",
    liveUrl: "https://lavore-mio.bubble.io",
    githubUrl: null,
    role: "UI/UX Designer and Front-End Developer (No-Code - Bubble.io)",
    projectStatus: "MVP",
    featured: true,
    keyTechnologies: [
      "Bubble.io (No-Code)",
      "Design System (Figma)",
      "UI/UX Design",
      "Product Strategy",
      "Database Design",
      "User Research",
      "Prototyping"
    ],
    problemSolved: {
      main: "A falta de feedback estruturado no processo seletivo deixa candidatos sem direcionamento para melhorias.",
      secondary: "Ausência de orientação clara sobre áreas de desenvolvimento profissional que precisam ser aprimoradas."
    },
    goals: [
      "Oferecer uma plataforma que auxilie no desenvolvimento de habilidades profissionais",
      "Fornecer aos usuários um sistema de feedback contínuo e acionável",
      "Democratizar o acesso a ferramentas de desenvolvimento de carreira",
      "Criar uma comunidade de profissionais em crescimento"
    ],
    metrics: {
      launchTime: "MVP em desenvolvimento",
      usersRegistered: "Em fase de testes",
      retentionRate: "A ser medido pós-lançamento",
      feedbackScore: "Sistema em implementação"
    },
    styleGuide: "Estabelecimento de regras e padrões para garantir alinhamento com os objetivos do projeto, resultando em um produto final coeso e consistente. Design system focado em acessibilidade e usabilidade.",
    userInterfaceFocus: "Foco em garantir uma interação simples, direta e objetiva do usuário, priorizando a clareza das informações e facilidade de navegação para usuários de diferentes níveis técnicos."
  },
  {
    id: 3,
    title: "Seven Hangul - Korean Learning App",
    description: "Aplicativo Android para aprendizado do alfabeto coreano (Hangul) com exercícios interativos, sistema de progresso e gamificação para tornar o aprendizado mais engajante.",
    tags: "Angular, Mobile Development, Education",
    image: "./src/assets/projects/seven-hangul.svg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sevenhangul",
    githubUrl: "https://github.com/example/seven-hangul",
    featured: true,
    keyTechnologies: [
      "Angular",
      "Ionic Framework",
      "TypeScript",
      "Cordova",
      "Local Storage",
      "Progressive Web App",
      "Material Design"
    ],
    problemSolved: {
      main: "Dificuldade em encontrar recursos gratuitos e eficazes para aprender o alfabeto coreano.",
      secondary: "Falta de aplicativos móveis focados especificamente no Hangul com metodologia adequada."
    },
    goals: [
      "Criar uma ferramenta gratuita e acessível para aprender Hangul",
      "Implementar sistema de gamificação para aumentar engajamento",
      "Desenvolver exercícios progressivos e adaptativos",
      "Tornar o aprendizado divertido e eficiente"
    ],
    metrics: {
      launchTime: "4 meses",
      downloads: "10k+",
      userRating: "4.5/5",
      completionRate: "75%"
    },
    styleGuide: "Design inspirado na cultura coreana com paleta de cores suaves e tipografia clara. Interface minimalista focada na legibilidade dos caracteres Hangul.",
    userInterfaceFocus: "Interface intuitiva que prioriza a visualização clara dos caracteres coreanos, com navegação simples e feedback visual imediato para o progresso do usuário."
  }
];