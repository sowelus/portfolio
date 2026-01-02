export const PROJECTS_DATA = [
  {
    id: 1,
    title: "CI&T",
    description: "Experiência completa na CI&T desenvolvendo soluções inovadoras para grandes clientes do setor de seguros e saúde, com foco em performance, experiência do usuário e modernização de sistemas legados.",
    tags: "React, Design System, UX/UI",
    image: "/src/assets/projects/ciandt-2022-2026.svg",
    liveUrl: "https://ciandt.com",
    githubUrl: null,
    featured: true,
    isCompanyProject: true, 
    companyPeriod: "2022 - Atual", 
    role: "Frontend Developer & UI/UX Designer",
    keyTechnologies: [
      "React 18",
      "SCSS/SASS",
      "Design System",
      "TypeScript",
      "Jest & Testing Library",
      "Webpack",
      "REST APIs",
      "Healthcare Technology",
      "Multi-Frontend Architecture"
    ],
    problemSolved: {
      main: "Necessidade de modernizar sistemas legados em diferentes setores (seguros e saúde) com baixa performance e UX inadequada.",
      secondary: "Falta de padronização entre diferentes projetos e tecnologias, resultando em experiências fragmentadas para os usuários finais."
    },
    goals: [
      "Modernizar sistemas legados mantendo alta performance",
      "Implementar design systems consistentes em múltiplos projetos",
      "Criar soluções inovadoras para setores de seguros e saúde",
      "Desenvolver arquiteturas escaláveis e reutilizáveis"
    ],
    metrics: {
      projectsDelivered: "4+ projetos principais",
      clientSectors: "Seguros e Saúde",
      teamCollaboration: "Múltiplas equipes e tecnologias",
      impactReach: "500k+ usuários diários combinados"
    },
    styleGuide: "Desenvolvimento baseado em Design Systems específicos de cada cliente, garantindo consistência visual e funcional em todas as plataformas desenvolvidas durante a experiência na CI&T.",
    userInterfaceFocus: "Foco em criar experiências centradas no usuário, priorizando performance, acessibilidade e usabilidade em diferentes contextos (seguros, saúde e corretagem).",
    
    subProjects: [
      {
        id: "1-1",
        title: "Altais - Healthcare Technology Platform",
        description: "Plataforma de tecnologia em saúde apoiada pela Blue Shield of California, oferecendo soluções tecnológicas para médicos passarem mais tempo cuidando de pacientes e menos tempo gerenciando negócios.",
        tags: "UI/UX Design, Design System Web & Mobile",
        image: "/src/assets/projects/altais-2022.svg",
        liveUrl: "https://altais.com",
        githubUrl: null,
        role: "UI/UX Designer",
        keyTechnologies: [
          "Design System",
          "UI/UX Design",
          "Web Interface",
          "Android Development",
          "iOS Development",
          "User Research"
        ],
        problemSolved: {
          main: "Médicos gastam mais tempo em tarefas administrativas do que cuidando de pacientes, causando burnout e fadiga.",
          secondary: "Pacientes evitam consultas médicas devido aos altos custos e complexidade do sistema de seguros de saúde, recebendo contas médicas como surpresa."
        },
        goals: [
          "Reduzir a burocracia relacionada a questões legais para médicos",
          "Reduzir a duplicação de dados de pacientes para otimizar o tempo de atendimento",
          "Trazer mais transparência em relação ao valor das contas médicas para pacientes",
          "Reduzir o tempo de espera dos pacientes"
        ],
        metrics: {
          launchTime: "Projeto desenvolvido em 2022",
          physicianSatisfaction: "Melhoria significativa reportada",
          patientExperience: "Maior transparência nos custos",
          administrativeTimeReduction: "Redução substancial documentada"
        },
        userInterfaceFocus: "Desenvolvimento de ferramentas clínicas inovadoras, tecnologia e serviços que permitem aos médicos cuidar das pessoas, com foco na redução da carga administrativa e melhoria da experiência do paciente."
      },    
      {
        id: "1-2",
        title: "Bradesco Seguros - Cross UI Design",
        description: "Trabalhei como UI Designer cross para os Squads do Bradesco Seguros, desde o setor de empréstimos de seguros até seguros de vida e parcerias de previdência, contribuindo com protótipos de alta fidelidade.",
        tags: "UI/UX Design, Insurance, Design System, Usability Testing",
        image: "/src/assets/projects/bradesco-2023.svg",
        liveUrl: "https://bradescoseguros.com.br",
        githubUrl: null,
        role: "Cross UI Designer",
        keyTechnologies: [
          "Design System",
          "UI/UX Design",
          "High-Fidelity Prototyping",
          "Usability Testing",
          "User Research",
          "Digital Transformation",
          "Accessibility Design"
        ],
        problemSolved: {
          main: "Necessidade de garantir experiência de usuário consistente e acessível em múltiplos produtos de seguros.",
          secondary: "Falta de padronização entre diferentes jornadas de usuário nos produtos do Bradesco Seguros."
        },
        goals: [
          "Garantir experiência de usuário fluida e acessível através de micro-interações",
          "Criar jornadas end-to-end ou de autoatendimento",
          "Assegurar qualidade do produto seguindo padrões do Design System",
          "Melhorar a satisfação do cliente através de testes de usabilidade"
        ],
        metrics: {
          launchTime: "Projeto desenvolvido em 2023",
          projectsDelivered: "Múltiplos sub-projetos",
          customerSatisfaction: "Reconhecimento por contribuições individuais",
          teamCollaboration: "Melhor entendimento do perfil do cliente",
          usabilityImprovement: "Testes de usabilidade implementados"
        },
        styleGuide: "Aplicação rigorosa dos padrões do Design System da empresa, garantindo consistência visual e funcional em todos os produtos e touchpoints do Bradesco Seguros.",
        userInterfaceFocus: "Foco em criar experiências fluidas e acessíveis, com atenção especial às micro-interações e jornadas completas do usuário, desde a descoberta até a entrega final do produto.",
        subProjects: [
          "Insurance Lender Re-offer",
          "Ideal Life Partnership Journey", 
          "Alab Web Refactoring"
        ]
      },
       {
        id: "1-3",
        title: "Porto Seguro",
        description: "Reformulado o Portal do Corretor Online da Porto Seguros, com novas ferramentas e uma interface multifuncional em React e SCSS, atendendo mais de 500k acessos diários e focando em performance e experiência do usuário.",
        tags: "React, Components, Multi-Frontend, Insurance",
        image: "/src/assets/projects/porto-seguro-2024-2026.svg",
        liveUrl: "https://portoseguros.com.br",
        githubUrl: null,
        role: "Frontend Developer & UI/UX Designer",
        projectStatus: "Em desenvolvimento",
        keyTechnologies: [
          "React",
          "SCSS/SASS",
          "Micro-Frontend Architecture",
          "Design System",
          "Component Development",
          "Legacy System Integration",
          "Orchestrator Architecture",
          "TypeScript",
          "Jest & Testing Library",
          "REST APIs"
        ],
        problemSolved: {
          main: "Necessidade de modernizar um sistema legado de seguros com baixa performance, além de unificar ferramentas legadas em uma única experiência.",
          secondary: "Interface desatualizada causava alta taxa de abandono e dificultava a conversão de leads, enquanto a falta de padronização resultava em experiências fragmentadas para os usuários."
        },
goals: [
  "Melhorar a performance do sistema em 60%",
  "Reduzir a taxa de abandono em 40%",
  "Implementar design responsivo e acessível",
  "Criar múltiplas interfaces de usuário (Micro-Frontend) que atendam várias equipes",
  "Proporcionar aos corretores de seguros uma experiência única",
  "Reformular ferramentas legadas mantendo funcionalidades essenciais",
  "Desenvolver um orquestrador para integração de diferentes tecnologias e equipes",
  "Criar componentes reutilizáveis para futuras expansões"
],
        metrics: {
          launchTime: "12 meses (concluído em 2024)",
          teamsIntegrated: "Múltiplas equipes",
          componentsDelivered: "Componentes customizados implementados",
          legacyToolsModernized: "Ferramentas reformuladas com sucesso",
          usersDaily: "500k+",
          performanceImprovement: "60%",
          bounceRateReduction: "40%"
        },
        userInterfaceFocus: "Interface multifuncional projetada especificamente para corretores de seguros, garantindo experiência única independentemente das tecnologias e equipes envolvidas no backend."
      },
    ]
  },
  {
    id: 6,
    title: "CodeScript",
    description: "Experiência na CodeScript, empresa brasileira inovadora no mercado de tecnologia desde 2014, desenvolvendo soluções para agronegócio, logística de frotas e IoT. Foco em transformar ideias em realizações através da tecnologia.",
    tags: "PHP, JavaScript, Bootstrap, IoT, Agronegócio",
    image: "/src/assets/projects/codescript.svg",
    liveUrl: "https://codescript.com.br",
    githubUrl: null,
    featured: true,
    isCompanyProject: true,
    companyPeriod: "2020 - 2022",
    role: "Full Stack Developer & UI/UX Designer",
    keyTechnologies: [
      "PHP",
      "JavaScript",
      "Bootstrap Framework",
      "CSS/SASS",
      "HTML5",
      "Doctrine ORM",
      "PostgreSQL",
      "IoT Development",
      "Mobile Development"
    ],
    problemSolved: {
      main: "Necessidade de digitalizar e modernizar processos em setores tradicionais como agronegócio e logística de frotas.",
      secondary: "Falta de soluções tecnológicas personalizadas que atendam às regras específicas de negócio de cada cliente."
    },
    goals: [
      "Desenvolver soluções personalizadas para agronegócio e logística",
      "Implementar sistemas de IoT e automação",
      "Criar interfaces intuitivas para setores tradicionais",
      "Modernizar processos através de aplicações web e mobile"
    ],
    metrics: {
      projectsDelivered: "3+ projetos principais",
      clientSectors: "Agronegócio, Logística e IoT",
      teamCollaboration: "Equipe multidisciplinar",
      impactReach: "Clientes em múltiplos estados do Brasil"
    },
    styleGuide: "Desenvolvimento focado em usabilidade para usuários de setores tradicionais, priorizando interfaces simples e funcionais que facilitam a adoção de tecnologia.",
    userInterfaceFocus: "Criação de experiências que bridgeiam o gap entre tecnologia avançada e usuários de setores tradicionais, garantindo facilidade de uso e eficiência operacional.",
    
    subProjects: [
      {
        id: "6-1",
        title: "Socapri Inc.",
        description: "Sistema de gestão financeira para empréstimos e fechamento mensal de carteira de clientes do Grupo Socapri, facilitando controle e monitoramento de rentabilidade com cálculos automáticos e relatórios mensais.",
        tags: "PHP, JavaScript, Bootstrap, Financial",
        image: "/src/assets/projects/socapri.svg",
        liveUrl: "https://socapri.com.br",
        githubUrl: null,
        keyTechnologies: [
          "PHP",
          "JavaScript",
          "Bootstrap Framework",
          "CSS/SASS",
          "HTML5",
          "Doctrine ORM",
          "PostgreSQL"
        ],
        problemSolved: {
          main: "A plataforma enfrentava o desafio de transformar complexas tabelas de controle baseadas em Excel e aplicativos desatualizados em uma interface amigável.",
          secondary: "A complexidade dos sistemas anteriores, dependentes de planilhas Excel e aplicações desatualizadas, dificultava a gestão financeira eficiente e atrasava insights sobre rentabilidade."
        },
        goals: [
          "Simplificar e otimizar processos de gestão financeira",
          "Permitir cálculo automático de custos e ganhos",
          "Garantir armazenamento seguro na nuvem e relatórios mensais",
          "Criar interface intuitiva para gestão de carteira de clientes"
        ],
        metrics: {
          launchTime: "8 meses",
          clientPortfolio: "Gestão de múltiplos clientes",
          automationLevel: "100% dos cálculos automatizados",
          reportingFrequency: "Relatórios mensais automatizados"
        },
        styleGuide: "Estabelecimento de regras e padrões essenciais para alinhar os objetivos da plataforma, garantindo consistência no produto final.",
        userInterfaceFocus: "Foco principal no desenvolvimento de uma interface intuitiva e amigável para uma experiência de usuário perfeita, priorizando simplicidade e eficiência."
      },
      {
        id: "6-2",
        title: "ARAL Cabinas",
        description: "Website para ARAL Cabinas, empresa brasileira especializada na venda de cabinas para tratores e máquinas agrícolas, com foco em destacar o papel essencial das cabinas para conforto, segurança e produtividade.",
        tags: "JavaScript, CSS, SASS, Agricultural",
        image: "/src/assets/projects/aral-cabinas.svg",
        liveUrl: "https://aralcabinas.com.br",
        githubUrl: null,
        keyTechnologies: [
          "Vanilla JavaScript",
          "CSS/SASS",
          "HTML5",
          "Doctrine ORM",
          "PostgreSQL",
          "Responsive Design"
        ],
        problemSolved: {
          main: "O website anterior com abordagem corporativa falhava em destacar efetivamente o papel essencial e as vantagens das cabinas da Aral para agricultores.",
          secondary: "Falta de comunicação clara sobre os benefícios das cabinas para a comunidade agrícola, especialmente durante a temporada de plantio de soja."
        },
        goals: [
          "Redirecionar o foco do website para Cabinas Aral, destacando seu papel fundamental",
          "Criar interface amigável para comunicar efetivamente os benefícios das cabinas",
          "Posicionar a Aral como parceiro ideal para necessidades de plantio agrícola",
          "Enfatizar conforto, segurança e produtividade das cabinas"
        ],
        metrics: {
          launchTime: "4 meses",
          userEngagement: "Melhoria significativa na comunicação",
          brandPositioning: "Foco redirecionado para produtos",
          targetAudience: "Comunidade agrícola brasileira"
        },
        styleGuide: "O processo de redesign visou alinhar o conteúdo e design do website para enfatizar efetivamente as vantagens e características únicas das Cabinas Aral.",
        userInterfaceFocus: "Focado em criar uma plataforma envolvente e informativa, garantindo que o website comunique efetivamente os benefícios e importância das Cabinas Aral para a comunidade agrícola."
      }
    ]
  },
  {
    id: 4,
    title: "Planejador de Finanças",
    description: "Aplicação React para gerenciamento financeiro pessoal, desenvolvida com as melhores práticas de mercado e arquitetura Atomic Design. Sistema completo para controle de transações, metas financeiras e categorização inteligente.",
    tags: "React, Vite, Tailwind CSS, Atomic Design",
    image: "/src/assets/projects/fin-planner.svg",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    keyTechnologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Lucide React",
      "ESLint",
      "Atomic Design",
      "LocalStorage API",
      "Custom Hooks"
    ],
    problemSolved: {
      main: "Dificuldade das pessoas em organizar e controlar suas finanças pessoais de forma eficiente e visual.",
      secondary: "Falta de ferramentas gratuitas e intuitivas que combinem gestão de transações, metas financeiras e análise de gastos em uma única plataforma."
    },
    goals: [
      "Criar uma ferramenta completa e gratuita para gestão financeira pessoal",
      "Implementar arquitetura escalável seguindo Atomic Design",
      "Desenvolver sistema de metas com progresso visual",
      "Garantir persistência de dados local e exportação/importação"
    ],
    metrics: {
      launchTime: "3 meses",
      componentsCreated: "25+ componentes reutilizáveis",
      codeQuality: "ESLint configurado com 0 warnings",
      responsiveness: "100% responsivo (mobile-first)"
    },
    styleGuide: "Design System baseado em Tailwind CSS com paleta Slate e acentos Indigo, seguindo princípios de acessibilidade e hierarquia visual clara. Componentes organizados em Atomic Design para máxima reutilização.",
    userInterfaceFocus: "Interface intuitiva com tema dark/light automático, animações suaves e micro-interações. Foco na experiência mobile-first com navegação por teclado e indicadores visuais claros para todas as ações.",
    
    challenges: [
      "Implementar persistência de dados robusta usando apenas json e localStorage",
      "Criar troca de temas integrado com Tailwind CSS",
      "Desenvolver arquitetura de componentes escalável com Atomic Design",
      "Garantir performance otimizada com Context API para estado global"
    ],
    
    learnings: [
      "Domínio avançado de Context API para gerenciamento de estado complexo",
      "Implementação prática de Atomic Design em projeto real",
      "Integração eficiente entre Vite, React 18 e Tailwind CSS",
      "Desenvolvimento de Custom Hooks especializados para lógica de negócio"
    ],

    // Funcionalidades principais como "subprojetos" conceituais
    mainFeatures: [
      {
        name: "Dashboard Financeiro",
        description: "Visão geral com resumo financeiro, cards de entrada/saída e progresso das metas",
        technologies: ["React", "Context API", "Tailwind CSS"]
      },
      {
        name: "Gestão de Transações",
        description: "CRUD completo com edição inline, filtros temporais e categorização automática",
        technologies: ["Custom Hooks", "LocalStorage", "Date Filters"]
      },
      {
        name: "Sistema de Metas",
        description: "Criação de metas com submetas, cálculo automático de progresso e visualização de patrimônio",
        technologies: ["Progress Bars", "Calculations", "Visual Indicators"]
      },
      {
        name: "Categorização Inteligente",
        description: "Sistema flexível de categorias com aplicação automática em transações",
        technologies: ["Dynamic Categories", "Auto-assignment", "CRUD Operations"]
      },
      {
        name: "Sistema de Temas",
        description: "Alternância automática dark/light com detecção de preferência do sistema",
        technologies: ["CSS Variables", "Theme Provider", "System Detection"]
      },
      {
        name: "Persistência de Dados",
        description: "Auto-save, backup/restore, exportação JSON e controle de versões",
        technologies: ["LocalStorage", "JSON Export/Import", "Data Validation"]
      }
    ]
  },
  {
    id: 2,
    title: "Lavore Mio - Professional Development Platform",
    description: "Plataforma gratuita de desenvolvimento profissional que oferece ferramentas para criação de currículos, planejamento de carreira e sistema de feedback contínuo para preparação em entrevistas.",
    tags: "Figma, Tokens, Accessibility, No-Code",
    image: "/src/assets/projects/lavore-mio.svg",
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
    image: "/src/assets/projects/seven-hangul.svg",
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